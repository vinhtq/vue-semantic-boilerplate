// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import $ from 'jquery'

import './vendor/semantic/dist/semantic.min.css'
import './vendor/semantic/dist/semantic.min.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
