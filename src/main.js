// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import "webcomponentsjs/full.js"
import "custom-elements/dist/CustomElements.min.js"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#parent',
  template: '<App/>',
  components: { App }
})
