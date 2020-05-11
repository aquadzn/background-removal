const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../docs/dist"),
    publicPath: process.env.NODE_ENV === 'production'
      ? '/website/'
      : '/',
  };
