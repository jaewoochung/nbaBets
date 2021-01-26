const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: "source-map",
    module: {
     rules: [{
      loader: 'babel-loader',
      test: /\.js|\.jsx$/,
      exclude: /node_modules/
     }, {
      use: ['style-loader', 'css-loader'],
      test: /\.css/
     }]
    },
    mode: 'development',
    devServer: {
     contentBase: path.join(__dirname, 'public')
    }
};
