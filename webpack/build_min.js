var path = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'zliq.js',
        library: 'zliq',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'awesome-typescript-loader'
            }]
        }]
    }
}
