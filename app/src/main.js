import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'

Vue.use(VueResource)

Vue.http.options.root = process.env.API_AI_URL
Vue.http.interceptors.push((request, next) => {
  Vue.http.headers.common['Authorization'] = 'Bearer ' + process.env.API_AI_TOKEN
  return next()
})

// this is how you can set configs (might be useful if you're)
// also using other APIs
// Vue.options['apiKey'] = 'api key'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: h => h(App)
})

