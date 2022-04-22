module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/kaltura-analytics/" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title =
        args[0].title.charAt(0).toUpperCase() + args[0].title.slice(1);
      return args;
    });
  },
};