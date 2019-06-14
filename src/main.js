// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://indestructibletype.com/fonts/Jost.css',
    type: 'text/css',
    charset:'utf-8'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/rhr1ryv.css',
    type: 'text/css',
    charset:'utf-8'
  })
}
