import webpack from 'webpack'

export default {
  mode: 'spa',

  env: {
    baseApiUrl: 'http://localhost:8090',
    apiUrl: 'http://localhost:8090/api/v1',
    clientId: '2',
    clientSecret: '5IN8HazhC47kOPinz8k9QFz6cmxfhXevwLPBWMxK'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/css/css-plugins-call.css' },
      { rel: 'stylesheet', href: '/css/bundle.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/responsive.css' },
      { rel: 'stylesheet', href: '/css/colors.css' },
      { rel: 'stylesheet', href: '/css/custom.css' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/design-system.scss'
  ],

  /*
  ** Global SCSS
  */
 styleResources: {
  scss: [
    'system/styles/tokens.scss',
    'system/styles/design-system.scss'
  ]
 },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/axios', ssr: false },
    { src: '~/plugins/register-components', ssr: false },
    { src: '~/plugins/vuex-persistedstate', ssr: false },
    { src: '~/plugins/global-functions', ssr: false },
    { src: '~/plugins/design-system', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // 
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config) {
      config.resolve.alias['@s'] = '@/store'
      config.resolve.alias['@c'] = '@/components'
      config.resolve.alias['@pages'] = '@/pages'
      config.resolve.alias['@plugins'] = '@/plugins'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        '_': 'lodash',
        'Popper': 'popper.js',
      })
    ]
  }
}
