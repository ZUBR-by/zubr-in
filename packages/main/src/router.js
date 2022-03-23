import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import NewsItem from "./components/NewsItem.vue";
import Result2020 from "./components/Result2020.vue";
import PathNotFound from "./components/PathNotFound.vue";
import News from "./components/News.vue";
import Declaration from "./components/Declaration.vue";

const main   = [
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
        component: () => import('./components/Commission.vue'),
    },
    {
        path: '/elections/commission/:id',
        name: 'old_commission',
        meta: {title: 'Избирательная комиссия'},
        exclude: true,
        component: () => import('./components/Commissions.vue'),
    },
    {
        path: '/member/:id',
        name: 'member',
        meta: {title: 'Член комиссии'},
        exclude: true,
        component: () => import('./components/Member.vue'),
    },
    {
        path: '/declaration',
        name: 'declaration_war',
        meta: {title: 'Заявление беларусов против участия в войне с Украиной'},
        component: Declaration,
    },
]
const common = [
    {
        path: '/campaigns',
        name: 'campaigns',
        meta: {title: 'Кампании'},
        exclude: true,
        component: () => import('./components/Campaigns.vue'),
    },
    {
        path: '/commissions',
        name: 'commissions',
        meta: {title: 'Комиссии'},
        component: () => import('./components/Commissions.vue'),
        alias: ['/elections/commissions']
    },
    {
        path: '/organization',
        name: 'organizations',
        meta: {title: 'Организации'},
        component: () => import('./components/Organizations.vue'),
        exclude: true,
    },
    {
        path: '/controller',
        name: 'controller',
        meta: {title: 'Наблюдение и гражд. контроль'},
        component: () => import('./components/Controller.vue')
    },
    {
        path: '/organization/:id',
        name: 'organization',
        meta: {title: 'Организация'},
        exclude: true,
        component: () => import('./components/Organization.vue'),
    },
    {
        path: '/members',
        name: 'members',
        exclude: true,
        meta: {title: 'Члены избирательных комиссий'},
        component: () => import('./components/Members.vue'),
    },
    {
        path: '/elections/member/:id',
        name: 'old_member',
        exclude: true,
        component: () => import('./components/Member.vue'),
    },
    {
        path: '/elections/members',
        name: 'old_members',
        exclude: true,
        redirect: {name: 'members'}
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
        meta: {title: 'Публикации'},
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
        component: () => import('./components/About.vue'),
    },
    {
        path: '/elections/about',
        name: 'old_about',
        meta: {title: 'О проекте'},
        exclude: true,
        component: () => import('./components/About.vue'),
    },
    {
        path: '/news/:id',
        name: 'news_item',
        meta: {title: 'Новость'},
        exclude: true,
        component: NewsItem,
    },
    {
        path: '/campaign/2022-02-referendum',
        name: 'campaign_2022',
        meta: {title: '"Референдум" 2022'},
        component: () => import('./components/Campaign.vue')
    },
    {
        path: '/campaign/:id',
        name: 'campaign',
        meta: {title: 'Кампания'},
        exclude: true,
        component: () => import('./components/Campaign.vue'),
    },
    {
        path: '/campaign/:id/messages',
        name: 'campaign_message',
        meta: {title: 'Сообщения о нарушениях'},
        exclude: true,
        component: () => import('./components/Messages.vue'),
    },
    {
        path: '/prepare',
        name: 'prepare',
        component: () => import('./components/Prepare.vue'),
        meta: {title: 'Обучающие материалы'},
        exclude: true,
    },
    {
        path: '/message',
        name: 'send_message',
        component: () => import('./components/SendMessage.vue'),
        meta: {title: 'Отправить сообщение'},
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
