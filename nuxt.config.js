const CopyWebpackPlugin = require('copy-webpack-plugin')
const md = require('markdown-it')

const config = {}

// configure webpack
config.build = {
    extend(config, ctx) {},
    externals: ['tweenrex']
}

config.css = ['node_modules/prismjs/themes/prism.css', '@/assets/styles/base.scss']

// configure environment variables
config.env = {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
}

// customize the pre-loader options
config.loading = false

// configure the head of the document
config.head = {
    title: 'TweenRex - Reactive Animation Engine',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: 'TweenRex Documentation'
        }
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        },
        {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Oswald:300|Oxygen'
        },
        {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/codemirror.min.css'
        }
    ],
    script: [
        {
            src: 'https://unpkg.com/tweenrex/dist/tweenrex-all.min.js'
        },
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/codemirror.min.js'
        },
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/mode/javascript/javascript.min.js'
        }
    ],
    __dangerouslyDisableSanitizers: ['script']
}

// configure markdown-it plugin
config.markdownit = {
    preset: 'default',
    linkify: true,
    breaks: false,
    html: true,
    xhtmlOut: true
}

// configure nuxt modules
config.modules = ['nuxtent']

// configure ./plugin scripts
config.plugins = ['~/plugins/monaco-configure.js']

// configure router
config.router = {
    base: '/'
}

// export final configuration
module.exports = config
