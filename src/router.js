import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Messages from './components/Messages.vue'
import Organizations from './components/Organizations.vue'
import Commissions from "./components/Commissions.vue";
import News from "./components/News.vue";
import Commission from "./components/Commission.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        label: 'Главная',
        component: Home,
    },
    {
        path: '/messages',
        name: 'messages',
        label: 'Сообщения',
        component: Messages,
    },
    {
        path: '/organization',
        name: 'organizations',
        label: 'Организации',
        component: Organizations,
    },
    {
        path: '/commissions',
        name: 'commissions',
        label: 'Комиссии',
        component: Commissions,
    },
    {
        path: '/commission/:id',
        name: 'commission',
        label: 'Комиссия',
        exclude: true,
        component: Commission,
    },
    {
        path: '/news',
        name: 'news',
        label: 'Новости',
        component: News,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
export {routes}
