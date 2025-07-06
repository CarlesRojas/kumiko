import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/component/ui/navigation-menu";
import { cn } from "@/lib/cn";
import { getPathnameWithoutLanguage } from "@/lib/path";
import { getTranslation } from "@/locale/getTranslation";
import { Language } from "@/locale/language";
import { Link, useLocation } from "@tanstack/react-router";
import { Languages } from "lucide-react";

interface Props {
    language: Language;
}

const LanguageDropdown = ({ language }: Readonly<Props>) => {
    const t = getTranslation(language);

    const location = useLocation();
    const pathWithoutLanguage = getPathnameWithoutLanguage(location.pathname);

    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger aria-label={t.header.language}>
                <Languages className="size-4" />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
                <ul className="flex w-full min-w-[8rem] flex-col">
                    {Object.values(Language).map((item) => (
                        <NavigationMenuLink asChild key={item}>
                            <Link
                                to={`/${item}${pathWithoutLanguage}` as any}
                                key={item}
                                className={cn(item === language && "!text-wood-500")}
                                preload={"intent"}
                            >
                                {t.enum.language[item]}
                            </Link>
                        </NavigationMenuLink>
                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
};

export default LanguageDropdown;
