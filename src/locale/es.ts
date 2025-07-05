import type { LanguageObject } from "@/locale/language";

export const es: LanguageObject = {
    meta: {
        appName: "Kumiko Create",
        title: "Kumiko Create",
        description: "Crea preciosos diseños Kumiko con facilidad",
    },

    routes: {
        goHome: "Inicio",
        tryAgain: "Intentar de nuevo",
        goBack: "Volver",
        notFound: "La página que estás buscando no existe.",
    },

    auth: {
        signIn: "Iniciar sesión",
        signOut: "Cerrar sesión",
    },

    header: {
        hi: "¡Hola, ",
        username: "Nombre de usuario",
        language: "Idioma",
        logout: "Cerrar sesión",
    },

    landing: {
        h1: "Crea preciosos diseños Kumiko con facilidad",
    },

    form: {
        cancel: "Cancelar",
        clear: "Eliminar",

        error: {
            generic: "Algo salió mal",
            minLength: "La longitud mínima es {{min}}",
            maxLength: "La longitud máxima es {{max}}",
            required: "Este campo es obligatorio",
            invalid: "Valor inválido",
        },

        submit: {
            create: "Crear",
            update: "Actualizar",
            delete: "Eliminar",
            save: "Guardar",
        },
    },

    enum: {
        language: {
            en: "English",
            es: "Español",
        },
    },
};
