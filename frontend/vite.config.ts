/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
	plugins: [
		// NOTE: '@vitejs/plugin-react' の前に '@tanstack/router-plugin' が渡す
		tanstackRouter({ target: "react", autoCodeSplitting: true }),
		react(),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/setupTests.ts"],
	},
});
