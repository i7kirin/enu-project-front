module.exports = {
    lintOnSave: true,
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8030",
                changeOrigin: true,
                ws: true,
                pathRewrite:{
                    '^/api/':'/'
                }
            }
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Мониторинг'
                return args
            })
    }
};