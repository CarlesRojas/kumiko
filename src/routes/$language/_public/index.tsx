import { getTranslation } from "@/locale/getTranslation";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$language/_public/")({ component: Home });

function Home() {
    const { language } = Route.useRouteContext();
    const t = getTranslation(language);

    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-16">
            <h1 className="bg-wood-400 from-wood-400 to-wood-500 bg-gradient-to-r bg-clip-text py-2 text-center text-3xl leading-tight font-bold text-pretty text-transparent md:text-5xl lg:text-6xl">
                {t.landing.h1}
            </h1>
        </main>
    );
}
