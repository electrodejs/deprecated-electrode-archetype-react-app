const mergeWebpackConfig = require("webpack-partial").default;
const DefinePlugin = require("webpack").DefinePlugin;

module.exports = () => (config) => mergeWebpackConfig(config, {
  plugins: [
    new DefinePlugin({
      // Signal production, so that webpack removes
      // non-production code that is in conditionals
      // like: `if (process.env.NODE_ENV === "production")`
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
    })
  ]
});

