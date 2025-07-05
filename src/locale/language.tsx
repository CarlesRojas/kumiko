import { z } from "zod";

export enum Language {
    EN = "en",
    ES = "es",
}
export const DEFAULT_LANGUAGE = Language.EN;
export const LANGUAGES = Object.values(Language);
export const LANGUAGE_COOKIE_NAME = "KUMIKO_LANGUAGE";
export const LanguageSchema = z.nativeEnum(Language);

export const LanguageObjectSchema = z.object({
    meta: z.object({
        appName: z.string(),
        title: z.string(),
        description: z.string(),
    }),

    routes: z.object({
        goHome: z.string(),
        tryAgain: z.string(),
        goBack: z.string(),
        notFound: z.string(),
    }),

    auth: z.object({
        signIn: z.string(),
        signOut: z.string(),
    }),

    header: z.object({
        hi: z.string(),
        username: z.string(),
        language: z.string(),
        logout: z.string(),
    }),

    landing: z.object({
        h1: z.string(),
    }),

    form: z.object({
        cancel: z.string(),
        clear: z.string(),

        error: z.object({
            generic: z.string(),
            minLength: z.string(),
            maxLength: z.string(),
            required: z.string(),
            invalid: z.string(),
        }),

        submit: z.object({
            create: z.string(),
            update: z.string(),
            delete: z.string(),
            save: z.string(),
        }),
    }),

    enum: z.object({
        language: z.object(Object.fromEntries(Object.values(Language).map((item) => [item, z.string()]))),
    }),
});
export type LanguageObject = z.infer<typeof LanguageObjectSchema>;
