module.exports = function override(config, env) {
  if (env === 'production') {
    config.devtool = false;
    config.plugins.splice(5, 2); // remove ManifestPlugin and SWPrecacheWebpackPlugin
  }

  return config;
};
