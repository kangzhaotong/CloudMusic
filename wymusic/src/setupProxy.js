const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use("/wymusic", proxy({
        target: "http://www.qmsdalao.com:3000",
        changeOrigin: true,
        pathRewrite: {
            "^/wymusic": ""
        }
    }))
}