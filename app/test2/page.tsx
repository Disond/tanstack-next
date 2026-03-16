// app/test2/page.tsx
"use client";
import { useUsers } from "@/hooks/useUsers";

export default function TestPage() {
    const { data: users, isLoading, error, isFetching } = useUsers();

    if (isLoading) {
        return (
            <div className="p-8 flex items-center justify-center min-h-100">
                <div className="text-xl">Učitavanje korisnika... 🔄</div>
            </div>
        );
    }

    if (error) {
        return <div className="p-8 text-red-500">Greška: {String(error)}</div>;
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">👥 TanStack Query Test</h1>

            <div className="grid gap-4">
                {users?.map((user) => (
                    <div
                        key={user.id}
                        className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-xl font-semibold text-gray-900">
                            {user.name}
                        </h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                ))}
            </div>

            {isFetching && (
                <div className="mt-4 p-3 bg-blue-50 border rounded text-sm">
                    🔄 Refrešuju se podaci...
                </div>
            )}
        </div>
    );
}
