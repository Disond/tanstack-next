"use client";
import { getUsers } from "@/client/users";
import { createUser } from "@/server/users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface User {
    id: number;
    name: string;
}

export default function Home() {
    const query = useQuery({ queryKey: ["todos"], queryFn: getUsers });
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    if (query.isLoading) return <div>Loading ...</div>;
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <button
                    onClick={() => mutation.mutate({ id: 1, name: "John Doe" })}
                >
                    Create User
                </button>
                {query.data?.map((user: User) => (
                    <div key={user.id}>{user.name}</div>
                ))}
            </main>
        </div>
    );
}
