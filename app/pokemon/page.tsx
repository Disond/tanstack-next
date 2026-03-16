import { getQueryClient } from "@/components/providers/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { pokemonOptions } from "./pokemon";
import { PokemonInfo } from "./pokemon-info";
import { Suspense } from "react";

export default async function PokemonPage() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery(pokemonOptions);

    return (
        <main>
            <h1>Pokemon Info</h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<div>Loading Pokemon...</div>}>
                    <PokemonInfo />
                </Suspense>
            </HydrationBoundary>
        </main>
    );
}
