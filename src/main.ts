import App from '@/App.vue';
import Router from '@/Router';
import Store from '@/Store';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
    router: Router,
    store: Store,
    render: (h) => h(App),
}).$mount('#app');
