const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://newsapi.org/v2/everything?q=apple&from=2024-03-18&to=2024-03-18&sortBy=popularity&apiKey=242da07b4b7e4b7c8a7ea048be11cf3e', // Thay thế URL API
      changeOrigin: true,
    })
  );
};
