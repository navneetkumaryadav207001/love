const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Letter",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    manifestOptions: {
      icons: [
        {
          src: "img/icons/favicon-32x32.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "img/icons/favicon-32x32.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
});
