export type User = {
    id: number;
    name: string | null;
    email: string;
};

export async function getUsers(): Promise<User[]> {
    const url =
        typeof window === "undefined"
            ? `${process.env.APP_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/api/users`
            : "/api/users";
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
}
