import { getQueryClient } from "@/components/providers/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { pokemonOptions } from "./pokemon";
import { PokemonInfo } from "./pokemon-info";

export default function PokemonPage() {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(pokemonOptions);

    return (
        <main>
            <h1>Pokemon Info</h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <PokemonInfo />
            </HydrationBoundary>
        </main>
    );
}
