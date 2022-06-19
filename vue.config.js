const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    chainWebpack: config => {
        config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => {
            options.compiler = require('vue-template-babel-compiler');
            return options;
        });
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: process.env.VUE_APP_NAME,
            chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
        }
    },
    transpileDependencies: [
        'vuetify'
    ]
});
