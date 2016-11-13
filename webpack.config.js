module.exports = {
  entry: ["./app/main.js"],
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }
};
