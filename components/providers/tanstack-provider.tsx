"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface TanstackProviderProvider {
    children: React.ReactNode;
}

export const TanstackProvider = ({ children }: TanstackProviderProvider) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
