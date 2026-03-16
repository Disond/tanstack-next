export type User = {
    id: number;
    name: string | null;
    email: string;
};

// services/getUsers.ts - REAL DATA (safe way)
export async function getUsers(): Promise<User[]> {
    const API_BASE_URL = process.env.APP_URL || "http://localhost:3000";

    const res = await fetch(`${API_BASE_URL}/api/users`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}
