import Header from "@/component/Header";
import type { Context } from "@/lib/context";
import { seo } from "@/lib/seo";
import { getUser } from "@/server/repo/auth";
import { getLanguage, getLanguageFromPathname } from "@/server/repo/language";
import appCss from "@/style.css?url";
import { QueryKey } from "@/type/QueryKey";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext, redirect } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<Context>()({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "theme-color", content: "#0f0904" },
            ...seo({ title: "Kumiko", description: `Create stunning Kumiko designs with ease` }),
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            { rel: "apple-touch-icon", sizes: "180x180", href: "/logo_180.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon_32.png" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon_16.png" },
            { rel: "icon", href: "/favicon.ico" },
            { rel: "mask-icon", href: "/mask_icon.svg", color: "#ffffff" },
            { rel: "manifest", href: "/manifest.json" },
        ],
    }),

    beforeLoad: async ({ context, location }) => {
        const user = await context.queryClient.fetchQuery({ queryKey: [QueryKey.USER], queryFn: getUser });

        const path = location.pathname;
        const pathnameLanguage = getLanguageFromPathname(path);

        if (!pathnameLanguage) {
            const language = await getLanguage({ data: pathnameLanguage });
            throw redirect({ to: `/${language}${path}` as any });
        }

        return { user, language: pathnameLanguage };
    },

    component: () => (
        <RootDocument>
            <Outlet />
        </RootDocument>
    ),
});

const RootDocument = ({ children }: { children: React.ReactNode }) => {
    const { language, queryClient, user } = Route.useRouteContext();

    return (
        <html className="h-dvh max-h-dvh min-h-dvh w-dvw max-w-dvw min-w-dvw" lang={language} suppressHydrationWarning>
            <head>
                <HeadContent />
            </head>

            <body className="font-sora text-wood-50 selection:bg-wood-500/40 bg-wood-1000 relative h-full w-full antialiased">
                <Header user={user} language={language} queryClient={queryClient} />

                {children}

                <Scripts />
            </body>
        </html>
    );
};
