const path = require("path");
const common = require("./config/webpack.config");

module.exports = (params, argv) => {
    return {
        entry: {
            module: "./src/module.ts",
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].js",
            library: "Components",
            libraryTarget: "umd",
        },
        ...common({
            sourceModule: "./src",
            sourcePath: path.resolve(__dirname, "./src"),
        }, argv),
    };
};
