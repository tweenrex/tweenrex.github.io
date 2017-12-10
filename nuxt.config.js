const CopyWebpackPlugin = require("copy-webpack-plugin");
const md = require("markdown-it");

const config = {};

// customize the pre-loader options
config.loading = { color: "#3B8070" };

// configure the head of the document
config.head = {
  title: "test-template",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "TweenRex Documentation"
    }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://fonts.googleapis.com/css?family=Merriweather|Oswald:300"
    }
  ],
  script: [{ src: "vs/loader.js" }]
};

// configure nuxt modules
config.modules = ["@nuxtjs/markdownit"];

config.markdownit = {
  preset: "default",
  linkify: true,
  breaks: true,
  langPrefix: 'v-code-'
};

// configure ./plugin scripts
config.plugins = [
  "~/plugins/monaco-configure.js"
];

// configure webpack
config.build = {
  extend(config, ctx) {}
};

// export final configuration
module.exports = config;

//
