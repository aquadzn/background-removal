const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/background-removal/'
    : '/',
    outputDir: path.resolve(__dirname, "../docs/"),
}
