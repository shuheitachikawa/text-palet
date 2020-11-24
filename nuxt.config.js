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
      { name: 'description', content: 'Web制作学習支援ツール。面倒なテキスト入稿は効率的にコピペしよう。' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'テキストパレット' },
      { property: 'og:description', content: 'Web制作学習支援ツール。面倒なテキスト入稿は効率的にコピペしよう。' },
      { property: 'og:url', content: 'https://bubekiti.net' },
      { property: 'og:site_name', content: 'テキストパレット' },
      { property: 'og:image', content: '/main.jpg' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@bubekiti' },
      { name: 'twitter:domain', content: 'bubekiti.net' },
      { name: 'twitter:title', content: 'テキストパレット' },
      { name: 'twitter:description', content: 'Web制作学習支援ツール。面倒なテキスト入稿は効率的にコピペしよう。' },
      { property: 'twitter:image', content: '/main.jpg' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/clipboard.js', mode: 'client' },
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
