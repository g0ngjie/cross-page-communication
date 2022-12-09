import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('./pages/home.vue') },
    { path: '/storage', component: () => import('./pages/event-storage.vue') }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router