//添加全局配置文件
const path=require('path');

module.exports = {
    //关闭esLint语法检查功能
    lintOnSave: false,
    //开发服务器相关配置
    devServer: {
        //配置静态资源目录
        contentBase: path.join(__dirname, 'public'),
        //设置开发服务器的端口号
        port: 9000,
    },
    //配置Webpack相关
    configureWebpack:{
        resolve:{
            //配置路径别名
            alias:{
                '@v': path.join(__dirname,'src/views'),
                '@c': path.join(__dirname,'src/components'),
            }
        }
    }
}

