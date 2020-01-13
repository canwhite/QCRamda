const webpack = require('webpack'),
    path = require('path');

function resolve(dir = '') {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.resolve.alias.set('#', resolve());
        // config.resolve.alias.set('_f', resolve('src/assets/font'));
        config.plugin('provide').use(webpack.ProvidePlugin, [{ R: 'ramda' }]);
    },
};
