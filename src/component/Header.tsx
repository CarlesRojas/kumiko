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
import { useRouter } from "@tanstack/react-router";
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

    const login = () => {
        authClient.signIn.social({ provider: "google", callbackURL: `/${language}/create` });
    };

    return (
        <header className="sticky top-0 left-0 z-30 flex h-18 max-h-18 min-h-18 w-full items-center justify-between bg-gradient-to-b from-neutral-950/75 to-neutral-950/0 px-4 backdrop-blur-sm">
            <div className="flex items-center gap-4">
                <img src="/favicon_512.png" alt="logo" className="h-10" />

                <h1 className="text-2xl font-semibold">{t.meta.appName}</h1>
            </div>
            {/* 
            <nav className="flex w-fit items-center gap-4 lg:gap-8">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger aria-label={t.header.language}>
                                <Languages className="size-4" />
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <ul className="flex w-fit min-w-[8rem] flex-col">
                                    {Object.values(Language).map((item) => (
                                        <NavigationMenuLink asChild>
                                            <Link
                                                to={`/${item}${pathWithoutLanguage}` as any}
                                                key={item}
                                                preload={false}
                                                className={cn(item === language && "!text-wood-500")}
                                                onClick={() => setLanguage({ data: item })}
                                            >
                                                {t.enum.language[item]}
                                            </Link>
                                        </NavigationMenuLink>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                

                {!!user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="fit"
                                className="ring-wood-500/80 rounded-full border border-neutral-700 bg-neutral-800 !inset-ring-0 ring-offset-2 ring-offset-neutral-900 focus-visible:ring-2"
                                aria-label={user.name ?? t.header.username}
                            >
                                <Avatar>
                                    <AvatarImage src={user.image ?? undefined} alt={user.name ?? t.header.username} />
                                    <AvatarFallback>
                                        {user.name?.slice(0, 1) ?? <UserRound className="size-5" />}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-(--radix-popper-anchor-width)" align="end" sideOffset={22}>
                            <DropdownMenuLabel>
                                {user.name
                                    ? `${t.header.hi} ${user.name.split(" ").slice(0, 2).join(" ")}!`
                                    : `${t.header.hi}!`}
                            </DropdownMenuLabel>

                            <DropdownMenuSeparator />

                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger className="flex items-center gap-2">
                                    <Languages className="size-4" />
                                    {t.header.language}
                                </DropdownMenuSubTrigger>

                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent sideOffset={14}>
                                        {Object.values(Language).map((item) => (
                                            <Link
                                                to={`/${item}${pathWithoutLanguage}` as any}
                                                key={item}
                                                preload={false}
                                                onClick={() => setLanguage({ data: item })}
                                            >
                                                <DropdownMenuItem
                                                    className={cn(
                                                        "font-semibold",
                                                        item === language && "!text-wood-500",
                                                    )}
                                                >
                                                    {t.enum.language[item]}
                                                </DropdownMenuItem>
                                            </Link>
                                        ))}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>

                            <DropdownMenuItem onClick={logout} className="flex items-center gap-2 !text-red-400">
                                <LogOut className="size-4" />
                                {t.header.logout}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </nav> */}

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
                                    className="ml-2 size-10 rounded-full border border-neutral-200 bg-white p-0 dark:border-neutral-700 dark:bg-neutral-800"
                                    aria-label={user.name}
                                    asChild
                                >
                                    <NavigationMenuTrigger hideChevron>
                                        <Avatar>
                                            <AvatarImage src={user.image ?? undefined} alt={user.name} />
                                            <AvatarFallback>
                                                {user.name?.slice(0, 1) ?? <UserRound className="size-5" />}
                                            </AvatarFallback>
                                        </Avatar>
                                    </NavigationMenuTrigger>
                                </Button>

                                <NavigationMenuContent align="end">
                                    <ul className="flex w-full min-w-[6rem] flex-col">
                                        <span className="px-4 py-2 whitespace-nowrap">
                                            {user.name
                                                ? `${t.header.hi} ${user.name.split(" ")[0]}!`
                                                : `${t.header.hi}!`}
                                        </span>

                                        <div className="my-2 h-[1px] w-full rounded-full bg-neutral-200 dark:bg-neutral-800" />

                                        <NavigationMenuLink
                                            onClick={logout}
                                            className="flex flex-row items-center gap-2 whitespace-nowrap !text-red-400"
                                        >
                                            <LogOut className="size-4" />
                                            {t.header.logout}
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
