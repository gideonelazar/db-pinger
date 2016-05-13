var webpack = require('webpack'),
    path = require('path'),
    validate = require('webpack-validator');
var debug = process.env.NODE_ENV !== 'production';

var config = {
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    context: __dirname,
    entry: {
        entry: './src/entry',
        //splits the vendors to separate file
        vendor: ['angular', 'angular-ui-router', 'angular-material']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: __dirname
    },
    stats: {
        colors: true
    }, // Nice colored output
    cache: debug,
    debug: debug,
    devtool: debug ? 'eval' : 'source-map', // Create Sourcemaps for the bundle
    resolve: {
        //all these extensions will be resolved without specifying extension in the `require`
        extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json'],
        //files in these directory can be required without a relative path
        modulesDirectories: ['node_modules']
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: require('./webpack/loaders').loaders
    },
    plugins: require(`./webpack/${process.env.NODE_ENV}.config.js`).plugins
};

//validates configuration against a schema and warn if we are trying to do something not sensible.
if (debug) {
    validate(config);
}

module.exports = config;
