import Canvas from "@/component/Canvas";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$language/_protected/create/")({ component: LoggedInHome });

function LoggedInHome() {
    return <Canvas />;
}
