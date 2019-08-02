const path = require("path");
const common = require("./config/webpack.common");

const publicPath = "/";

module.exports = {
	entry: {
		index: "./components/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "storybook"),
		filename: "static/bundle.js",
		publicPath: publicPath,
	},
	output: {
		// Add /* filename */ comments to generated require()s in the output.
		pathinfo: true,
		// This does not produce a real file. It's just the virtual path that is
		// served by WebpackDevServer in development. This is the JS bundle
		// containing code from all our entry points, and the Webpack runtime.
		filename: "static/js/bundle.js",
		// There are also additional JS chunk files if you use code splitting.
		chunkFilename: "static/js/[name].chunk.js",
		// This is the URL that app is served from. We use "/" in development.

		// Point sourcemap entries to original disk location (format as URL on Windows)
		devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
	},
	...common({additionalModules: ["storybook"]}),
};