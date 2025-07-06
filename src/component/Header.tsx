"use client";

import LanguageDropdown from "@/component/LanguageDropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/component/ui/avatar";
import { Button } from "@/component/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/component/ui/navigation-menu";
import { authClient } from "@/lib/auth/client";
import { getTranslation } from "@/locale/getTranslation";
import { Language } from "@/locale/language";
import { QueryKey } from "@/type/QueryKey";
import { QueryClient } from "@tanstack/react-query";
import { Link, useRouter } from "@tanstack/react-router";
import type { User } from "better-auth";
import { LogOut, UserRound } from "lucide-react";

interface Props {
    user: User | null;
    language: Language;
    queryClient: QueryClient;
}

const Header = ({ user, language, queryClient }: Props) => {
    const t = getTranslation(language);
    const router = useRouter();

    const logout = async () => {
        await authClient.signOut();
        await queryClient.invalidateQueries({ queryKey: [QueryKey.USER] });
        await router.invalidate();
    };

    const login = async () => {
        await authClient.signIn.social({ provider: "google", callbackURL: `/${language}/create` });
    };

    return (
        <header className="sticky top-0 left-0 z-30 flex h-16 max-h-16 min-h-16 w-full items-center justify-between bg-gradient-to-b from-neutral-950/75 to-neutral-950/0 px-4 backdrop-blur-sm">
            <Link to="/$language" params={{ language }} className="group flex cursor-pointer items-center gap-4">
                <img
                    src="/favicon_512.png"
                    alt="logo"
                    className="h-9 transition-transform group-hover:rotate-90 group-focus-visible:rotate-90"
                />

                <h1 className="group-hover:text-wood-300 group-focus-visible:text-wood-300 font-semibold transition-colors sm:text-lg">
                    {t.meta.appName}
                </h1>
            </Link>

            <div className="flex items-center gap-2">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <LanguageDropdown language={language} />

                        {!user && (
                            <Button onClick={login} type="button">
                                {t.auth.signIn}
                            </Button>
                        )}

                        {!!user && (
                            <NavigationMenuItem className="h-10">
                                <Button
                                    variant="ghost"
                                    size="fit"
                                    className="bg-wood-950 border-wood-900 ml-2 size-10 rounded-full border p-0 !opacity-100"
                                    aria-label={user.name}
                                    asChild
                                >
                                    <NavigationMenuTrigger hideChevron className="group">
                                        <Avatar>
                                            <AvatarImage src={user.image ?? undefined} alt={user.name} />
                                            <AvatarFallback>
                                                {user.name?.slice(0, 1) ?? <UserRound className="size-5" />}
                                            </AvatarFallback>
                                        </Avatar>
                                    </NavigationMenuTrigger>
                                </Button>

                                <NavigationMenuContent align="end">
                                    <ul className="flex w-full min-w-[8rem] flex-col">
                                        <span className="px-4 py-2 whitespace-nowrap">
                                            {user.name
                                                ? `${t.header.hi} ${user.name.split(" ")[0]}!`
                                                : `${t.header.hi}!`}
                                        </span>

                                        <div className="bg-wood-500/30 my-2 h-[1px] w-full rounded-full" />

                                        <NavigationMenuLink
                                            className="flex flex-row items-center gap-2 whitespace-nowrap !text-red-400"
                                            asChild
                                        >
                                            <button onClick={logout}>
                                                <LogOut className="size-4 !text-red-400" />
                                                {t.header.logout}
                                            </button>
                                        </NavigationMenuLink>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
};

export default Header;
