module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://m.guazi.com",
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}