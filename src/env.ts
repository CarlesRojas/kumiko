import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
    server: {
        BETTER_AUTH_SECRET: z.string().min(1),
        BETTER_AUTH_URL: z.string().url(),

        DATABASE_URL: z.string().min(1),

        GOOGLE_CLIENT_ID: z.string().min(1),
        GOOGLE_CLIENT_SECRET: z.string().min(1),
    },

    client: {},

    clientPrefix: "VITE_",
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,
});
