import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from '@/App.vue';
import Router from '@/Router';
import Store from '@/Store';

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
    id: 'UA-62862441-2',
});

new Vue({
    router: Router,
    store: Store,
    render: (h) => h(App),
}).$mount('#app');
