import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
    plugins: [tsConfigPaths({ projects: ["./tsconfig.json"] }), tailwindcss(), tanstackStart()],
});

export default config;
