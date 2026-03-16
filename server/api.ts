export type User = {
    id: number;
    name: string | null;
    email: string;
};

export async function getUsers(): Promise<User[]> {
    const res = await fetch("/api/users");

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}
