const path = require("path");
const os = require("os");
const webpack = require("webpack");
const externals = require("webpack-node-externals");
const autoprefixer = require("autoprefixer");

const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");

const env = {
	raw: {
		NODE_ENV: process.env.NODE_ENV || "development",
	},
	get stringified() {
		return {
			"process.env": Object.keys(this.raw).reduce((env, key) => {
				env[key] = JSON.stringify(this.raw[key]);
				return env;
			}, {}),
		};
	},
};

const isDevelopment = process.env.NODE_ENV !== "production";
const isProduction = process.env.NODE_ENV === "production";
const fastBuildEnabled = !!process.env.FAST_BUILD_ENABLED;
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== "false";

module.exports = ({additionalModules = []}) => ({
	...(fastBuildEnabled && isProduction ? {} : { devtool: "eval" }),
	externals: [externals()],
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		modules: ["node_modules", "components", ...additionalModules],
		alias: {
			"styles": path.resolve(__dirname, 'src/styles/'),
		}
	},
	optimization: {
		minimize: isProduction && !fastBuildEnabled,
		removeAvailableModules: isProduction && !fastBuildEnabled,
		removeEmptyChunks: isProduction && !fastBuildEnabled,
		splitChunks: isProduction && !fastBuildEnabled && {},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "thread-loader",
						options: {
							workers: os.cpus().length - 1,
							poolTime: Infinity,
						},
					},
					{
						loader: "babel-loader",
					},
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
							happyPackMode: true,
							experimentalWatchApi: true,
						},
					},
				],
			},
			{
				oneOf: [
					// "postcss" loader applies autoprefixer to our CSS.
					// "css" loader resolves paths in CSS and adds assets as dependencies.
					// "style" loader turns CSS into JS modules that inject <style> tags.
					// In production, we use a plugin to extract that CSS to a file, but
					// in development "style" loader enables hot editing of CSS.
					{
						test: /\.css$/,
						use: [
							require.resolve("style-loader"),
							{
								loader: require.resolve("css-loader"),
								options: {
									sourceMap: shouldUseSourceMap,
								},
							},
							{
								loader: require.resolve("postcss-loader"),
								options: {
									// Necessary for external CSS imports to work
									// https://github.com/facebookincubator/create-react-app/issues/2677
									ident: "postcss",
									sourceMap: shouldUseSourceMap,
									plugins: () => [
										require("postcss-flexbugs-fixes"),
										autoprefixer({
											browsers: [
												">1%",
												"last 4 versions",
												"Firefox ESR",
												"not ie < 9", // React doesn't support IE8 anyway
											],
											flexbox: "no-2009",
										}),
									],
								},
							},
						],
					},
					// sass loader
					{
						test: /\.scss$/,
						use: [
							require.resolve("style-loader"),
							{
								loader: require.resolve("css-loader"),
								options: {
									sourceMap: shouldUseSourceMap,
								},
							},
							{
								loader: require.resolve("postcss-loader"),
								options: {
									// Necessary for external CSS imports to work
									// https://github.com/facebookincubator/create-react-app/issues/2677
									ident: "postcss",
									sourceMap: shouldUseSourceMap,
									plugins: () => [
										require("postcss-flexbugs-fixes"),
										autoprefixer({
											browsers: [
												">1%",
												"last 4 versions",
												"Firefox ESR",
												"not ie < 9", // React doesn't support IE8 anyway
											],
											flexbox: "no-2009",
										}),
									],
								},
							},
							{
								loader: require.resolve("sass-loader"),
								options: {
									sourceMap: shouldUseSourceMap,
								},
							},
						],
					},
				]
			}
		],
	},
	plugins: [
		new HardSourceWebpackPlugin(),
		new PeerDepsExternalsPlugin(),
		new webpack.DefinePlugin(env.stringified),
		!fastBuildEnabled &&
		new ForkTsCheckerWebpackPlugin({
			watch: isDevelopment && "./components",
			checkSyntacticErrors: true,
		}),
	].filter(Boolean),
	node: {
		dgram: "empty",
		fs: "empty",
		net: "empty",
		tls: "empty",
		child_process: "empty",
	},
	performance: {
		hints: false,
	},
});