const PRODUCTION_BASE_PATH = '/';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    // base: process.env.NODE_ENV === 'production'
    //   ? PRODUCTION_BASE_PATH
    //   : '/'
    base: PRODUCTION_BASE_PATH
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wh-negi',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://cdn.counter.dev/script.js', 'data-id': '8070b65e-9149-4678-8776-a75d64cec7ce', 'data-utcoffset': '9'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/sass/app.scss', lang: 'scss' },
    { src: '~assets/reset.css', lang: 'css'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/adobe-fonts',
    '~/plugins/vue-youtube'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    dir: 'docs'
  }
}
