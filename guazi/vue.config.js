/*
 * @Author: your name
 * @Date: 2020-09-28 20:16:36
 * @LastEditTime: 2020-09-30 09:51:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \program\guazi\vue.config.js
 */
const pxtovm = require("postcss-px-to-viewport");

module.exports = {
  //rm布局
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          new pxtovm({
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/],
            include: undefined,
          }),
        ],
      },
    },
  },

  //设置代理
  devServer: {
    proxy: {
      '/deckill': {
        target: 'http://localhost:9000',
        changeOrigin: true
      },
    }
  }
};
