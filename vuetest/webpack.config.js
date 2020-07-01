const path = require('path')
const webpack=require('webpack')//启用热更新的第二步
//导入在内存中生成html的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
// const VueLoaderPlugin = require('./node_modules/vue-loader')

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path : path.join(__dirname,'./dist'),
        filename : 'bundle.js' 
    },
    //配置dev-server命令的第二种方式，相对于第一种麻烦一些
    devServer: {
       
        open:true,//打开浏览器
        port:3000,
        hot:true//启用热更新

    },
    plugins:[//配置插件的节点
      new  webpack.HotModuleReplacementPlugin(),//new一个热更新模块对象，启用热更新的第三步
      new htmlWebpackPlugin({//创建一个在内存中生成html页面的插件
        //指定模板页面,将来根据指定的模板页面的路径去生成内存中的页面
        template:path.join(__dirname,'./src/index.html'),
        filename:'index.html'//指定生成的页面名称
       
      })
    ],

    module:{//这个节点用于配置所有的第三方模块加载器
        rules:[//所有第三方模块的匹配规则
            //配置处理.css文件的第三方loader规则
            {test: /\.css$/ , use:['style-loader','css-loader'] },
            {test:/\.(jpg|png|j4gig|jpeg)$/ , use:'url-loader?limit=2077&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/ , use: 'url-loader'},
            {test:/\.js$/ , use : 'babel-loader' , exclude : /node_modules/},
            {test : /\.vue$/, use : 'vue-loader' }
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }

}