import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('./pages/home.vue') },
    { path: '/storage', component: () => import('./pages/event-storage.vue') },
    { path: '/channel', component: () => import('./pages/broadcase-channel.vue') },
    { path: '/worker', component: () => import('./pages/service-worker.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router