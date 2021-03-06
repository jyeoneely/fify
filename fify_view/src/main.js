import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// MQTT
import VueMqtt from 'vue-mqtt';

import vuetify from './plugins/vuetify'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(VueMqtt, 'ws://18.142.131.188:9001/ws', {clientID: "clientID-" + parseInt(Math.random() * 1000) });
// Vue.use(VueMqtt, 'ws://192.168.35.200:9001/ws', {clientID: "clientID-" + parseInt(Math.random() * 1000) });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')



