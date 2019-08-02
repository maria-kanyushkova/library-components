const path = require("path");
const common = require("./config/webpack.common");

module.exports = {
	entry: {
		index: "./components/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		library: "Components",
		libraryTarget: "umd",
	},
	...common({}),
};