import { queryOptions } from "@tanstack/react-query";

export const pokemonOptions = queryOptions({
    queryKey: ["pokemon"],
    queryFn: async () => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5_000);

        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/25",
                {
                    signal: controller.signal,
                },
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch Pokemon: ${response.status}`);
            }

            return response.json();
        } finally {
            clearTimeout(timeoutId);
        }
    },
});
