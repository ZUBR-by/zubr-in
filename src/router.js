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
        label: 'Главная',
        exclude: true,
        component: Home,
    },
    {
        path: '/campaigns',
        name: 'campaigns',
        label: 'Кампании',
        component: Campaigns,
    },
    {
        path: '/commissions',
        name: 'commissions',
        label: 'Комиссии',
        component: Commissions,
    },
    {
        path: '/organization',
        name: 'organizations',
        label: 'Организации',
        component: Organizations,
    },
    {
        path: '/organization/:id',
        name: 'organization',
        label: 'Организация',
        exclude: true,
        component: Organization,
    },
    {
        path: '/members',
        name: 'members',
        exclude: true,
        label: 'Члены комиссий',
        component: Members,
    },
    {
        path: '/member/:id',
        name: 'member',
        label: 'Член комиссии',
        exclude: true,
        component: Member,
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
    {
        path: '/about',
        name: 'about',
        label: 'О проекте',
        component: About,
    },
    {
        path: '/news/:id',
        name: 'news_item',
        label: 'Новость',
        exclude: true,
        component: NewsItem,
    },
    {
        path: '/campaign/:id',
        name: 'campaign',
        label: 'Кампания',
        exclude: true,
        component: Campaign,
    },
    {
        path: '/campaign/:id/messages',
        name: 'campaign_message',
        label: 'Сообщения',
        exclude: true,
        component: Messages,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
export {routes}
