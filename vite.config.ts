import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "VueIconsax",
			formats: ["es"]
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				// Provide global variables to use in the UMD build
				// Add external deps here
				preserveModules: true,
				dir: "dist",
				preserveModulesRoot: "src",
				format: "esm",
				entryFileNames: ({ name: fileName }) => {
					return `${fileName}.js`;
				},
				globals: {
					vue: "Vue"
				}
			}
		}
	},
	plugins: [vue()]
});
