var config = require('./webpack.config.js')
var webpack = require('webpack')

config.entry.main.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server")

var compiler = webpack(config)
var server = new WebpackDevServer(compiler, {
    hot: true
})

server.listen(8080)
