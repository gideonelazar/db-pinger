const webpack = require('webpack'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['./build']}
        }),
        //Generate an extra chunk, which contains common modules shared between entry points.
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.NoErrorsPlugin(),// Avoid publishing files when compilation fails
        new ExtractTextPlugin('[name].css', {allChunks: true}),//extracts all inline style css and combines them to one css file per chunk.
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
