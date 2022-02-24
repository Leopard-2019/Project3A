const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/**", { target: "http://localhost:3001" })
  );
  app.use(
    createProxyMiddleware("/otherApi/**", { target: "http://localhost:3001" })
  );
};
