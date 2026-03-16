import prisma from "@/lib/db";

export type User = {
    id: number;
    name: string | null;
    email: string;
};

export async function getUsers(): Promise<User[]> {
    return prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
}
