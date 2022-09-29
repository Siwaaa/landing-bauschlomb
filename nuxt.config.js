import { json } from 'body-parser'

export default {
  target: 'server',
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
    ],
    script: [
      // Yandex Metrika
      { innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(90596439, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`, type: 'text/javascript' },

      // Global site tag (gtag.js) - Google Analytics
      { src: "https://www.googletagmanager.com/gtag/js?id=UA-243555558-1", async: true },
      { innerHTML: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-243555558-1');`, type: 'text/javascript' },

      // Google tag (gtag.js)
      { src: "https://www.googletagmanager.com/gtag/js?id=G-LYZHXLTMH6", async: true },
      { innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LYZHXLTMH6');`, type: 'text/javascript' },

      // Google Tag Manager
      { src: "https://www.googletagmanager.com/gtag/js?id=G-LYZHXLTMH6", async: true },
      { innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PGN398Q');`, type: 'text/javascript' },
    ],
    
    noscript: [
      // Yandex Metrika
      { innerHTML: '<div><img src="https://mc.yandex.ru/watch/90596439" style="position:absolute; left:-9999px;" alt="" /></div>' },

      // Google Tag Manager
      {innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGN398Q"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`, body: true}
    ],
    __dangerouslyDisableSanitizers: ['script', 'noscript']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset',
    '@/assets/css/main',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/smoothScroll.js', mode: 'client' },
    { src: '~/plugins/mask.js', mode: 'client' }
  ],
  serverMiddleware: [
    // read about redirect-ssl: https://github.com/unjs/redirect-ssl
    // "redirect-ssl",
    { path: "/api", handler: json() },
    { path: "/api", handler: "~/server-middleware/api-server.js" },
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
    'primevue/nuxt',
  ],

  // Fonts Google options: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: {
        wght: [200, 400, 500, 700],
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
