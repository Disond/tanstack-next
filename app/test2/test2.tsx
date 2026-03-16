// app/test2/TestPageContent.tsx
"use client";
import { getUsers } from "@/services/getUsers";
import { useQuery } from "@tanstack/react-query";

export default function TestPageContent() {
    const { data, isPending, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    if (isPending) return <div>🔄 Učitavanje...</div>;
    if (error) return <div>Greška: {error.message}</div>;

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">👥 TanStack Query SSR</h1>
            <div className="grid gap-4">
                {data?.map((user) => (
                    <div
                        key={user.id}
                        className="p-6 bg-white border rounded-lg shadow-sm"
                    >
                        <h2>{user.name ?? "Nepoznat"}</h2>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
