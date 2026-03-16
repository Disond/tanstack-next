"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { pokemonOptions } from "./pokemon";

export function PokemonInfo() {
    const { data } = useSuspenseQuery(pokemonOptions);

    return (
        <div>
            <figure>
                <h2>I&apos;m {data.name}</h2>
            </figure>
        </div>
    );
}
