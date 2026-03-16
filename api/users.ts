export type User = {
    id: string;
    name: string;
    email: string;
};

export async function getUsers(): Promise<User[]> {
    const users = [
        { id: "1", name: "Petar Milošević", email: "petar@example.com" },
        { id: "2", name: "Marko Petrović", email: "marko@example.com" },
        { id: "3", name: "Ana Jovanović", email: "ana@example.com" },
    ];
    return users;
}
