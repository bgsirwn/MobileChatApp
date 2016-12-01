import Vue from 'vue'
import App from './App'

// configs:
Vue.config.api_ai_token = process.env.API_AI_TOKEN

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
