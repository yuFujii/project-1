const pkg = require('./package')

const meta = {
  title: 'UPDATE'
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '',
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} - Mock` : 'Mock'
    },
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Mock',
        template: chunk => {
          return chunk ? `${chunk} - Mock` : 'Mock'
        }
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'webMock'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ''
      },
      {
        hid: 'og:Mock_name',
        property: 'og:Mock_name',
        content: 'Mock'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Mock'
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: ''
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary' // or summarylargeimage, photo, gallery, app
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/css/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel.js', ssr: false },
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    fallback: true
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: '',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    exclude: [],
    routes: []
  }
}
