import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

export const router = createRouter({
    history: createWebHashHistory('/preview/index.html'),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
    ],
});
