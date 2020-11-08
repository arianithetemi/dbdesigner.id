// vue.config.js
module.exports = {
  // options...
  devServer: {
    proxy: "https://dbdesigner.neoxllc.com"
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/"
};
