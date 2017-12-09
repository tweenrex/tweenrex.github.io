const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    head: {
        title: 'Nuxtent Starter',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxtent project' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            { src: 'vs/loader.js' },
            { src: 'configure/monaco.js' }
        ]
    },
    build: {
        babel: {
            presets: ['vue-app']
        },
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: [],
    modules: [['nuxtent']],
    loading: { color: '#3B8070' }
}
