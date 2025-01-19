const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Letter',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    manifestOptions: {
      icons: [
        {
          src: 'img/icons/favicon.jpg',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/icons/favicon.jpg',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
});
