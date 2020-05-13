const webpack = require("webpack");
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/test-vue/" : "/",

  outputDir: path.resolve(__dirname, "../docs/"),

  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },

  pwa: {
    name: "Background Removal",
    themeColor: "#172b4d",
    msTileColor: "#172b4d",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#172b4d"
  },

  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production"
  },

  lintOnSave: false
};
