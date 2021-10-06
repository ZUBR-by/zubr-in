import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Messages from './components/Messages.vue'
import Organizations from './components/Organizations.vue'
import Commissions from "./components/Commissions.vue";
import News from "./components/News.vue";
import Commission from "./components/Commission.vue";
import Members from "./components/Members.vue";
import Member from "./components/Member.vue";
import NewsItem from "./components/NewsItem.vue";

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
        path: '/members',
        name: 'members',
        label: 'Члены комиссий',
        component: Members,
    },
    {
        path: '/member/:id',
        name: 'member',
        label: 'Комиссия',
        exclude: true,
        component: Member,
    },
    {
        path: '/news',
        name: 'news',
        label: 'Новости',
        component: News,
    },
    {
        path: '/news/:id',
        name: 'news_item',
        label: 'Новость',
        exclude: true,
        component: NewsItem,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
export {routes}
