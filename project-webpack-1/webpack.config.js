const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path")

module.exports = {
    mode:'production',
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "lib"), // 出口路径
        filename: "index.js" ,// 出口文件名
        clean:true//先清除path目录，再重新打包
    },
    module:{
        rules:[
            //test:正则
            //use:[]指定匹配上的文件使用什么load
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },{
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },{
                test:/\.(gif|png|svg|ico)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                      maxSize: 8 * 1024
                    }
                  },
                  generator: {
                    filename: 'images/[hash:6][ext]'
                  }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),new MiniCssExtractPlugin()
    ],
    devServer:{
        //当你serve以后，自动打开浏览器（默认浏览器）
        open:true,
        //默认端口号是8080，可以设置的范围【0，65535】
        port:30000
    }
}