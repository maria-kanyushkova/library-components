const path = require("path");
const common = require("./config/webpack.common");

module.exports = {
	entry: {
		index: "./storybook/src/components/index.ts",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		library: "Components",
		libraryTarget: "umd",
	},
	...common({}),
};