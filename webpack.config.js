const path = require("path");
const pkg = require("./package.json");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "npm"),
    filename: "index.js",
    library: pkg.name,
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
