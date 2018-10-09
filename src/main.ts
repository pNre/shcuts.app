import Vue from 'vue';
import VueAnalytics from 'vue-ua';
import App from '@/App.vue';
import Router from '@/Router';
import Store from '@/Store';

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
    appName: 'Shortcuts',
    appVersion: '0.1',
    trackingId: 'UA-62862441-2',
    vueRouter: Router,
});

new Vue({
    router: Router,
    store: Store,
    render: (h) => h(App),
}).$mount('#app');
