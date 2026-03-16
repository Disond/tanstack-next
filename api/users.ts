// api/users.ts - ISPRAVKA
export type User = {
    id: string;
    name: string;
    email: string;
};

export async function getUsers(): Promise<User[]> {
    console.log("🔥 Dobijam korisnike!");
    const users = [
        { id: "1", name: "Petar Milošević", email: "petar@example.com" },
        { id: "2", name: "Marko Petrović", email: "marko@example.com" },
        { id: "3", name: "Ana Jovanović", email: "ana@example.com" },
    ];
    console.log("✅ Users:", users); // ← OVO ĆEŠ VIDJETI!
    return users;
}

// Test funkcija
if (import.meta.url === `file://${process.argv[1]}`) {
    getUsers().then(console.log);
}
