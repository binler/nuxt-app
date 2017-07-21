import Vue from 'vue'
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'vi-VN',
  locales: {
    // you will need json-loader in webpack 1
    'vi-VN': require('vue-timeago/locales/vi-VN.json')
  }
})
