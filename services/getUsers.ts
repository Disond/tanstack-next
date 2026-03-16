export type User = {
    id: number;
    name: string | null;
    email: string;
};

// services/getUsers.ts - REAL DATA (safe way)
export async function getUsers(): Promise<User[]> {
    // API route (koji već radi!)
    const res = await fetch("http://localhost:3000/api/users", {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}
