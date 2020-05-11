const path = require("path");


module.exports = {

    outputDir: path.resolve(__dirname, "../dist"),
    publicPath: process.env.NODE_ENV === 'production'
      ? '/website/'
      : '/',
  };
