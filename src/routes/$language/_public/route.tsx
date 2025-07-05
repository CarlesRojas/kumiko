import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$language/_public")({
    component: PublicLayout,
});

function PublicLayout() {
    return <Outlet />;
}
