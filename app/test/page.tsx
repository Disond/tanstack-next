"use client";
import { useQuery } from "@tanstack/react-query";
import { getUsers, type User } from "@/server/api";

export default function TestPage() {
    const { data, isPending, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    if (isPending) return <div>Loading ...</div>;
    if (error) return <div>Greška: {error.message}</div>;
    return (
        <div className="p-8">
            <h1>Test Page</h1>
            {data?.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}
