import { DEFAULT_LANGUAGE } from "@/locale/language";
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
    return { queryClient, language: DEFAULT_LANGUAGE };
};

export type Context = ReturnType<typeof getContext>;

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
