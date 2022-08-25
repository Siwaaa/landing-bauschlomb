export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bausch & Lomb',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#fff' },
      { hid: 'description', name: 'description', content: 'Контактные линзы пролонгированного ношения PureVision® 2 с оптикой высокой четкости для ясного и четкого зрения без бликов и ореолов. Теперь Вы можете наслаждаться ясным и четким зрением даже в условиях низкой освещенности. Контактные линзы PureVision2 являются одними из самых тонких контактных линз на сегодняшний день, при этом они удивительно легки в использовании. Попробуйте контактные линзы Bausch+Lomb бесплатно при проверке зрения в салоне оптики' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset',
    '@/assets/css/main',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/smoothScroll.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'primevue/nuxt'
  ],

  // Fonts Google options: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: {
        wght: [200,400,500,700],
      },
    },
    preconnect: true
  },

  primevue: {
    components: ['Slider'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
    postcss: {
      plugins: {
        'postcss-import': true,
        'postcss-easings': {},
        'postcss-nested': {},
        'postcss-custom-media': {
          importFrom: './assets/css/custom-media.css'
        }
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      }
    }
  }
}
