const path = require('path');

module.exports = {
    mode: 'development', 
    entry: './src/script.js', // changed from default './src/index.js'
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // changed from default 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};