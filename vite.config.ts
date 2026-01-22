// vite.config.ts

import build from "@hono/vite-build/cloudflare-workers";
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		honox({
			client: {
				input: ["./app/style.css"],
			},
		}),
		build({
			entry: "app/server.ts",
		}),
	],
});
