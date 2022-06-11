import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import emitter from './plugins/emitter';

import './plugins/vee-validate';

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

Vue.prototype.$mitt = emitter;

new Vue({
    ...App,
    router,
    store,
    vuetify
});
