import { DEFAULT_LANGUAGE, LANGUAGE_COOKIE_NAME, LANGUAGES, LanguageSchema } from "@/locale/language";
import { createServerFn } from "@tanstack/react-start";
import { getCookie, getHeader, setCookie } from "@tanstack/react-start/server";
import acceptLanguage from "accept-language";

export const getLanguageFromPathname = (pathname: string) => {
    for (const language of LANGUAGES) if (pathname.startsWith(`/${language}`)) return language;
    return null;
};

export const getLanguage = createServerFn({ method: "GET" })
    .validator(LanguageSchema.nullable())
    .handler(async ({ data: pathnameLanguage }) => {
        if (pathnameLanguage) return pathnameLanguage;

        const cookieLanguage = LanguageSchema.safeParse(getCookie(LANGUAGE_COOKIE_NAME));
        if (cookieLanguage.success) return cookieLanguage.data;

        acceptLanguage.languages(LANGUAGES);
        const browserLanguage = LanguageSchema.safeParse(acceptLanguage.get(getHeader("accept-language")));
        if (browserLanguage.success) return browserLanguage.data;

        return DEFAULT_LANGUAGE;
    });

export const setLanguage = createServerFn({ method: "POST" })
    .validator(LanguageSchema)
    .handler(async ({ data: language }) => {
        setCookie(LANGUAGE_COOKIE_NAME, language);
    });
