import replace from "@rollup/plugin-replace";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		reactRefresh(),

		replace({
			preventAssignment: true,
			"process.env": "import.meta.env",
		}),
	],
	define: {
		"process.env.NODE_ENV": '"production"',
	},
});
