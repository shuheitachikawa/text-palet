import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    title: 'テキストパレット',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'description', content: '模写コーディング支援ツール。面倒なテキスト入稿は効率的にコピペしよう。' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'テキストパレット' },
      { property: 'og:description', content: '模写コーディング支援ツール。面倒なテキスト入稿は効率的にコピペしよう。' },
      { property: 'og:url', content: 'https://youthful-albattani-cc8d58.netlify.app' },
      { property: 'og:site_name', content: 'テキストパレット' },
      { property: 'og:image', href: '/main.jpg' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@bubekiti' },
      { name: 'twitter:domain', content: 'youthful-albattani-cc8d58.netlify.app' },
      { name: 'twitter:title', content: 'テキストパレット' },
      { name: 'twitter:description', content: '模写コーディング支援ツール。面倒なテキスト入稿は効率的にコピペしよう。' },
      { property: 'twitter:image', href: '/main.jpg' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Goldman:wght@700&family=Noto+Sans&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/clipboard.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
