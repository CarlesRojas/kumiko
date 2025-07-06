import { DefaultCatchBoundary } from "@/component/error/DefaultCatchBoundary";
import { NotFound } from "@/component/error/NotFound";
import * as Provider from "@/lib/context";
import { routeTree } from "@/routeTree.gen";
import "@/style.css";
import { createRouter as createTanstackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";

export const createRouter = () => {
    if ("serviceWorker" in navigator) {
        const registerServiceWorker = () => {
            navigator.serviceWorker.register("/service-worker.js");
        };

        if (document.readyState === "complete") registerServiceWorker();
        else window.addEventListener("load", registerServiceWorker);
    }

    const router = routerWithQueryClient(
        createTanstackRouter({
            routeTree,
            context: { ...Provider.getContext() },
            scrollRestoration: true,
            defaultPreloadStaleTime: 0,
            defaultPreload: "intent",
            defaultStructuralSharing: true,
            defaultErrorComponent: DefaultCatchBoundary,
            defaultNotFoundComponent: NotFound,
        }),
        Provider.getContext().queryClient,
    );

    return router;
};

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
