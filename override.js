module.exports = neutrino => {
  // console.log(neutrino.config.devServer);
  neutrino.config.entry('index').delete('webpack/hot/dev-server');
  neutrino.config.plugins.delete('hot');
  neutrino.config.devServer.hot(false);
  neutrino.config.devServer.inline(true);
};