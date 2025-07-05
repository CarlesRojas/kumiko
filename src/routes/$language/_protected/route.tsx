import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$language/_protected")({
    beforeLoad: ({ context }) => {
        if (!context.user) throw redirect({ to: `/${context.language}` as any });
    },
});
