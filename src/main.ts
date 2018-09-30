import Vue from 'vue';
import App from '@/App.vue';
import Router from '@/Router';
import Store from '@/Store';

Vue.config.productionTip = false;

new Vue({
    router: Router,
    store: Store,
    render: (h) => h(App),
}).$mount('#app');
