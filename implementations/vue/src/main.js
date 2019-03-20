import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import { store } from 'redux-logic-layer';
import { connect } from 'redux-vuex';

connect({
  Vue,
  store,
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
