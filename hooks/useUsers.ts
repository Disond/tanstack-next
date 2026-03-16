// hooks/useUsers.ts
// "use client";
// import { useQuery } from "@tanstack/react-query";
// import { getUsers } from "@/api/users";

// export function useUsers() {
//     return useQuery({
//         queryKey: ["users"],
//         queryFn: getUsers,
//     });
// }
// hooks/useUsers.ts - CUSTOM HOOK!
// hooks/useUsers.ts - mora biti ovako!
// hooks/useUsers.ts
"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type User = {
    id: number;
    name: string | null;
    email: string;
};

export function useUsers() {
    return useQuery<User[]>({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axios.get<User[]>("/api/users");
            return res.data;
        },
    });
}
