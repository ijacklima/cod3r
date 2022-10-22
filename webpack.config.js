const webpack = require('webpack')

module.export = {
    entry: './ex/index.js',
    output: {
        path: _dirname + '/public',
        filename: './bundle.js'
    }
}