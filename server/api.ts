export type User = {
    id: number;
    name: string | null;
    email: string;
};

export async function getUsers(): Promise<User[]> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/users`);

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}
