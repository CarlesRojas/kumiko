import { env } from "@/env";
import * as schema from "@/server/db/schema/index";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle({
    connection: { connectionString: env.DATABASE_URL },
    casing: "snake_case",
    schema,
});
