import Canvas from "@/component/Canvas";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$language/_public/")({ component: Home });

function Home() {
    return <Canvas />;
}
