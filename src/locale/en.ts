import type { LanguageObject } from "@/locale/language";

export const en: LanguageObject = {
    meta: {
        appName: "Kumiko Create",
        title: "Kumiko Create",
        description: "Create stunning Kumiko designs with ease",
    },

    routes: {
        goHome: "Home",
        tryAgain: "Try Again",
        goBack: "Back",
        notFound: "The page you are looking for does not exist.",
    },

    auth: {
        signIn: "Sign in",
        signOut: "Sign out",
    },

    header: {
        hi: "Hi, ",
        username: "Username",
        language: "Language",
        logout: "Sign Out",
    },

    landing: {
        h1: "Create stunning Kumiko designs with ease",
    },

    form: {
        cancel: "Cancel",
        clear: "Clear",

        error: {
            generic: "Something went wrong",
            minLength: "Minimum length is {{min}}",
            maxLength: "Maximum length is {{max}}",
            required: "This field is required",
            invalid: "Invalid value",
        },

        submit: {
            create: "Create",
            update: "Update",
            delete: "Delete",
            save: "Save",
        },
    },

    enum: {
        language: {
            en: "English",
            es: "Español",
        },
    },
};
