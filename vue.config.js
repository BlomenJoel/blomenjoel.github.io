module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/portfolio-not-live/" : "/",
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
};
