import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/shortcut/:name',
            name: 'shortcut',
            component: () => import('@/Views/Shortcut.vue'),
        },
        {
            path: '/shortcut/fetch/:id',
            name: 'fetched_shortcut',
            component: () => import('@/Views/Shortcut.vue'),
        },
    ],
});
