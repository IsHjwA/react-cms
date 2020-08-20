const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',   //代理谁需要监听一个路径
    createProxyMiddleware({
      target: 'https://cnodejs.org',  //目标服务器（这里是cnode的ip）
      changeOrigin: true
    })
  );
};
