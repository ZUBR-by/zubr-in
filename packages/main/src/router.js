import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import Messages from './components/Messages.vue'
import Organizations from './components/Organizations.vue'
import Commissions from "./components/Commissions.vue";
import Commission from "./components/Commission.vue";
import Members from "./components/Members.vue";
import Member from "./components/Member.vue";
import NewsItem from "./components/NewsItem.vue";
import Campaigns from "./components/Campaigns.vue";
import ForObservers from "./components/ForObservers.vue";
import Campaign from "./components/Campaign.vue";
import Organization from "./components/Organization.vue";
import About from "./components/About.vue";
import Result2020 from "./components/Result2020.vue";
import Controller from "./components/Controller.vue";
import PathNotFound from "./components/PathNotFound.vue";
import News from "./components/News.vue";

const main = [
    {
        path: '/',
        name: 'home',
        meta: {title: 'Главная'},
        exclude: true,
        component: Home,
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
        path: '/member/:id',
        name: 'member',
        meta: {title: 'Член комиссии'},
        exclude: true,
        component: Member,
    },
]
const common = [
    {
        path: '/campaigns',
        name: 'campaigns',
        meta: {title: 'Кампании'},
        component: Campaigns,
    },
    {
        path: '/commissions',
        name: 'commissions',
        meta: {title: 'Комиссии'},
        component: Commissions,
    },
    {
        path: '/elections/commissions',
        name: 'old_commissions',
        exclude: true,
        meta: {title: 'Комиссии'},
        redirect: '/commissions',
    },
    {
        path: '/organization',
        name: 'organizations',
        meta: {title: 'Организации'},
        component: Organizations,
        exclude: true,
    },
    {
        path: '/controller',
        name: 'controller',
        meta: {title: 'Наблюдение и гражд. контроль'},
        component: Controller,
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
        path: '/elections/member/:id',
        name: 'old_member',
        exclude: true,
        component: Member,
    },
    {
        path: '/elections/members',
        name: 'old_members',
        exclude: true,
        redirect: { name: 'members' }
    },
    {
        path: '/elections/messages',
        name: 'old_messages',
        exclude: true,
        redirect: '/campaign/2020-08-presidential/messages'
    },
    {
        path: '/elections/about',
        name: 'old_about',
        exclude: true,
        redirect: '/about'
    },
    {
        path: '/elections/organizations',
        name: 'old_organizations',
        exclude: true,
        redirect: '/organization'
    },
    {
        path: '/news',
        name: 'news',
        meta: {title: 'Новости'},
        component: News,
        beforeEnter() {
            window.location.href = 'https://teletype.in/@zubr_in';
        },
    },
    {
        path: '/elections/results',
        name: 'results_2020',
        meta: {title: 'Информация о результатах избирательной компании 2020'},
        exclude: true,
        component: Result2020,
    },
    {
        path: '/about',
        name: 'about',
        meta: {title: 'О проекте'},
        component: About,
    },
    {
        path: '/elections/about',
        name: 'old_about',
        meta: {title: 'О проекте'},
        exclude: true,
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
    {
        path: '/control',
        name: 'for_observers',
        component: ForObservers,
        meta: {title: 'Наблюдателям'},
        exclude: true,
    },
    {
        path: '/:pathMatch(.*)*',
        exclude: true,
        component: PathNotFound
    },
]
const routes = [...common, ...main]
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PREFIX || ''),
    routes
})
router.beforeEach((to) => {
    document.title = to.meta && to.meta.title ? `${to.meta.title} - ZUBR.in` : 'ZUBR.in'
})

export default router
export {routes}
export {common}
