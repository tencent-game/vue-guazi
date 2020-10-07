const path = require("path")

module.exports = {
    chainWebpack(config) {
        config.resolve.alias
            .set("@", path.resolve(__dirname, "./src/"))
    },
    devServer: {
        proxy: {
            "/api": {
                target: "https://m.guazi.com",
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/car": {
                target: "https://api.guazi.com",
                pathRewrite: {
                    "^/car": ""
                }
            }
        }
    }
}