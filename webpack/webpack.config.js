const path = require('path');

module.exports = {
    context: path.resolve('src/'),
    entry: {
        main: path.resolve(__dirname, '../build/app.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.bundle.js'
    }
}