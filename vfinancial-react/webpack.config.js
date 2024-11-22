const path = require("path");

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js-bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
              test: /\.(?:js|mjs|cjs)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                    targets: "defaults",
                    presets: [
                        "@babel/preset-env", "@babel/preset-react"
                    ]
                }
              }
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: ["style-loader", "css-loader"]
            }
          ]
      },
}