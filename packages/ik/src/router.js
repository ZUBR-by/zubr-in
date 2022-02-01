import {createRouter, createWebHistory} from 'vue-router'

import Landing from "./components/Landing.vue";
import Schema from "./components/Schema.vue";
import ToHonestMembers from "./components/ToHonestMembers.vue";
import {common} from "@zubr-in/main/src/router";
import Commission from "./components/Commission.vue";
import Member from "./components/Member.vue";

const routes = [
    {
        path: '/',
        name: 'ik_main',
        meta: {title: 'Главная'},
        component: Landing,
    },
    {
        path: '/schema',
        name: 'schema',
        meta: {title: 'Расследования фальсификаций'},
        component: Schema,
    },
    {
        path: '/honest',
        name: 'to_honest_members',
        meta: {title: 'Участникам комиссий'},
        component: ToHonestMembers,
    },
    {
        path: '/commission/:id',
        name: 'commission',
        meta: {title: 'Избирательная комиссия'},
        exclude: true,
        component: Commission,
    },
    {
        path: '/member/:id',
        name: 'member',
        meta: {title: 'Член комиссии'},
        exclude: true,
        component: Member,
    },
    ...common
]
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PREFIX || ''),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.name === 'ik_main' && to.query.query) {
            return {
                selector: '#search'
            }
        }
        if (to.name === 'commission') {
            return {
                selector: 'commission'
            }
        }
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})
router.beforeEach((to) => {
    document.title = to.meta && to.meta.title ? `${to.meta.title} - uik.xx2022.org` : 'uik.xx2022.org'
})

export default router
export {routes}
