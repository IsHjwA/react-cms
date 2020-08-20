// 只要改变vue.config.js文件后，必须重启项目才能生效

// node.js代码风格
module.exports = {
    //打包好的文件名最后一个小数点前面的为一串哈希值，设置为false后文件名将不再附带哈希值
    //但是不建议设置false，否则在浏览器的缓存的时候没有带这穿哈希值的时候
    //每次在文件发生变化的时候，哈希值会重新发生变化，如果把哈希值关闭,则浏览器中缓存的内容不会发生变化还是原来的文件
    //哈希值发生变化则浏览器会更新缓存替换更新过新的内容
    //哈希值会配合浏览器的缓存机制对已经更新过的内容进行替换，未更新的内容则会缓存下来
    filenameHashing:true,
    // publicPath:process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'  //在这里可以把所有需要加速的文件放在公司指定的加速服务器上
    // : '/',
  
    devServer: {
      port: 8888,
      proxy: {
        // 代理，转发
        // 当请求URL中包含 '/soso' 字符串时，才执行代理转发
        '/soso': {
          target: 'https://c.y.qq.com',  // 目标（远程）服务器地址
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
  