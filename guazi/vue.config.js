module.exports = {
    devServer: {
        proxy: {
            "/aps": {
                target: "https://m.guazi.com",
                pathRewrite: {
                    "^/aps": ""
                }
            },
            "/aaa":{
                target:"https://api.guazi.com",
                pathRewrite:{
                    "^/aaa":""
                }
            },
            "/bbb":{
                target:'https://mapi.guazi.com',
                pathRewrite:{
                    "^/bbb":""
                }
            }
        }
    }
}