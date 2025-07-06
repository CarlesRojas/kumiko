import { DEFAULT_LANGUAGE, Language } from "@/locale/language";
import type { getUser } from "@/server/repo/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    },
});

export const getContext = () => {
    return { queryClient, language: DEFAULT_LANGUAGE, user: null };
};

export type Context = {
    queryClient: QueryClient;
    user: Awaited<ReturnType<typeof getUser>>;
    language: Awaited<Language>;
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
