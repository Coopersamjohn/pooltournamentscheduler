import Vue from 'vue';
import App from './App.vue';
var moment = require('moment');

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App)
});
