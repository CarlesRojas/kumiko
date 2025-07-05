import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$language/_public")({
    component: PublicLayout,
    beforeLoad: ({ context }) => {
        console.log(context.user);
        if (context.user) throw redirect({ to: `/${context.language}/create` as any });
    },
});

function PublicLayout() {
    return <Outlet />;
}
