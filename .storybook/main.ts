import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-onboarding"), getAbsolutePath("@storybook/addon-interactions")],
	webpackFinal: async (config) => {
		config.module?.rules?.push({
			test: /\.css$/,
			use: [
				{
					loader: "postcss-loader",
					options: {
						postcssOptions: {
							plugins: [require("tailwindcss"), require("autoprefixer")],
						},
					},
				},
			],
			include: path.resolve(__dirname, "../"),
		});

		return config;
	},

	framework: {
		name: "@storybook/nextjs",
		options: {},
	},

	docs: {
		autodocs: true,
	},
};
export default config;
