module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : './',

    //开发环境的配
    devServer: {
        port: 8088,
        host: "localhost",//主机,127.0.0.1 , 真机 0.0.0.0
        https: false,//协议
        open: true,//启动服务器时自动打开浏览器访问
        proxy: {
            //开发环境代理配置
            // '/dev-api' : {
            [process.env.VUE_APP_BASE_API]: {
                //目标服务器地址，代理访问 
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,//开启代理服务器
                pathRewrite: {
                    // /dev-api/db.json,最终会发送到target目标服务器，http://localhost:8001/db.json,为什么前面的/dev-api没有了，是因为下面的配置
                    // '^/dev-api' : '',
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = '林业碳汇计量与预测';
            return args;
        })
    },

    lintOnSave: false,//关闭格式检查
    productionSourceMap: false,//打包时不会生成.map文件
}
