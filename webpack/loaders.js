module.exports = {
    loaders :  [
        {
            test: /src.*\.js$/,
            loaders: ['ng-annotate?regexp=angular.*\.module(.*)$', 'babel?presets[]=es2015'],
            exclude: /node_modules/
        },
        {test: /\.less$/, loader: "style!css!autoprefixer-loader!less", exclude: /node_modules/},
        {test: /\.css$/, loader: "style-loader!css-loader!autoprefixer-loader"},
        {test: /\.(jpe?g|png|gif|ico|htc)$/, loader: 'url-loader?limit=100000&name=assets/[name].[ext]'},
        {test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'},
        {test: /\.html$/, loader: "html"}
    ]
};
