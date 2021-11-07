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
import Campaigns from "./components/Campaigns.vue";
import Campaign from "./components/Campaign.vue";
import Organization from "./components/Organization.vue";
import About from "./components/About.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {title: 'Главная'},
        exclude: true,
        component: Home,
    },
    {
        path: '/campaigns',
        name: 'campaigns',
        meta: {title: 'Кампании'},
        component: Campaigns,
    },
    {
        path: '/commissions',
        name: 'commissions',
        meta: {title: 'Избирательные комиссии'},
        component: Commissions,
    },
    {
        path: '/organization',
        name: 'organizations',
        meta: {title: 'Организации'},
        component: Organizations,
    },
    {
        path: '/organization/:id',
        name: 'organization',
        meta: {title: 'Организация'},
        exclude: true,
        component: Organization,
    },
    {
        path: '/members',
        name: 'members',
        exclude: true,
        meta: {title: 'Члены избирательных комиссий'},
        component: Members,
    },
    {
        path: '/member/:id',
        name: 'member',
        meta: {title: 'Член комиссии'},
        exclude: true,
        component: Member,
    },
    {
        path: '/commission/:id',
        name: 'commission',
        meta: {title: 'Избирательная комиссия'},
        exclude: true,
        component: Commission,
    },
    {
        path: '/elections/commission/:id',
        name: 'old_commission',
        meta: {title: 'Избирательная комиссия'},
        exclude: true,
        component: Commission,
    },
    {
        path: '/news',
        name: 'news',
        meta: {title: 'Новости'},
        component: News,
    },
    {
        path: '/about',
        name: 'about',
        meta: {title: 'О проекте'},
        component: About,
    },
    {
        path: '/news/:id',
        name: 'news_item',
        meta: {title: 'Новость'},
        exclude: true,
        component: NewsItem,
    },
    {
        path: '/campaign/:id',
        name: 'campaign',
        meta: {title: 'Кампания'},
        exclude: true,
        component: Campaign,
    },
    {
        path: '/campaign/:id/messages',
        name: 'campaign_message',
        meta: {title: 'Сообщения о нарушениях'},
        exclude: true,
        component: Messages,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to) => {
    document.title = `${to.meta.title} - ZUBR.in`
})

export default router
export {routes}
