import {createRouter, createWebHistory} from 'vue-router'

import Landing from "./components/Landing.vue";
import Schema from "./components/Schema.vue";
import ToHonestMembers from "./components/ToHonestMembers.vue";
import {common} from "@zubr-in/main/src/router";

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {title: 'Главная'},
        component: Landing,
    },
    {
        path: '/schema',
        name: 'schema',
        meta: {title: 'Схема фальсификаций'},
        component: Schema,
    },
    {
        path: '/honest',
        name: 'to_honest_members',
        meta: {title: 'Участникам комиссий'},
        component: ToHonestMembers,
    },
    ...common
]
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PREFIX || ''),
    routes
})
router.beforeEach((to) => {
    document.title = to.meta && to.meta.title ? `${to.meta.title} - ik.ZUBR.in` : 'ik.ZUBR.in'
})

export default router
export {routes}
