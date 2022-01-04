<template>
    <header-view></header-view>
    <div class="scene mrgn-t-130px mil-mrgn-t-80px">
        <h1 class="txt-color-2 txt-size-18px txt-normal pdng-l-40px pdng-r-40px mil-pdng-l-20px mil-pdng-r-20px">
            <dl>
                <dt class="txt-color-1 txt-inline txt-bold">
                    ZUBR.in
                </dt>
                —
                <dd class="txt-inline">
                    это платформа онлайн-мониторинга процессов голосования в Беларуси. Здесь публикуются сообщения о
                    нарушениях от наблюдателей с участков, перечень всех комиссий и их состав,
                    анализ результатов электоральных кампаний от различных инициатив.
                    <br>
                    <br>
                    Любой гражданин Беларуси может стать наблюдателем или <a href="https://zubr.in/controller">гражданским
                    контролером</a>,
                    пройти обучение и сообщать на платформу ZUBR о ходе так называемого "референдума",
                    который планируется в стране в 2022 году. С учетом текущей ситуации все происходит анонимно.
                    Мы не сохраняем данные наблюдателей и гражданских контролеров.
                </dd>
            </dl>
        </h1>
    </div>

    <div class="scene pdng-t-0">
        <div class="election-campaign-list" v-if="data">
            <div class="election-campaign-unit" v-for="(campaign) of data.campaigns">
                <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
                    <div
                        class="section flex-grow-all txt-size-20px mil-txt-size-15px pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-l-20px">
                        <div class="txt-color-1 txt-medium" v-if="campaign.started_at"
                             :class="{'grayscale' : !isLater(campaign.started_at)}">
                            {{ formatDateCampaign(campaign) }}
                        </div>
                        <div class="txt-color-1 txt-medium" v-else>
                            Нет даты
                        </div>
                        <div class="txt-bold" v-if="campaign.started_at">
                            Архив
                        </div>
                    </div>
                    <div
                        class="section flex-algn-slf-strch flex-row flex-algn-itms-c border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-r-20px cursor-pointer hovered">
                        <div class="flex-row flex-algn-itms-c">
                            <div class="section">
                                <svg class="mil-zoom-0_75" width="25" height="33" viewBox="0 0 25 33" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                                        fill="#FF5C01"/>
                                    <rect y="1" width="2" height="32" fill="#FF5C01"/>
                                </svg>
                            </div>
                            <div class="section pdng-l-15px">
                                <div class="txt-size-20px mil-txt-size-15px mil-notdisplay">
                                    Сообщений:
                                </div>
                                <div class="txt-size-20px mil-txt-size-15px txt-bold txt-nowrap">
                                    {{ campaign.messages_count }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px mil-pdng-l-20px mil-pdng-r-20px mil-pdng-b-30px"
                    :class="{'grayscale' : !isLater(campaign.started_at)}"
                >
                    <h2 class="txt-color-1 txt-size-36px mil-txt-size-30px txt-lh-1_1em">
                        <a class="txt-underline-inline-2px" :href="'/campaign/' + campaign.id">
                            {{ campaign.name }}
                        </a>
                    </h2>
                    <div class="tag-wrp mrgn-t-20px" v-if="campaign.extra.type">
                        <a class="tag-unit"
                           v-if="['parliamentary_elections', 'presidential_elections'].includes(campaign.extra.type)">
                            Общереспубликанские выборы
                        </a>
                        <a class="tag-unit" v-if="['local_elections'].includes(campaign.extra.type)">
                            Местные выборы
                        </a>
                        <a class="tag-unit" v-if="['referendum'].includes(campaign.extra.type)">
                            Референдум
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="scene" v-if="news">
        <div class="pdng-b-40px">
            <h3 class="txt-size-36px mil-txt-size-30px txt-bold">
                Последние новости.
                <a href="https://teletype.in/@zubr_in" class="txt-underline-inline-2px">
                    Все новости
                </a>
            </h3>
        </div>
        <div>
            <div class="article-preview-unit" v-for="item of news">
                <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
                    {{ formatDate(item.date) }}
                </time>
                <h4 class="txt-size-32px mil-txt-size-30px txt-bold txt-color-1">
                    <a class="txt-underline-inline-2px" :href="'/news/' + item.id">
                        {{ item.title.rendered }}
                    </a>
                </h4>
                <p class="txt-size-22px mil-txt-size-20px txt-bold mrgn-t-15px" v-html="item.excerpt.rendered">
                </p>
                <div class="article-preview-image pdng-b-20px mrgn-t-30px">
                    <img :src="item._embedded['wp:featuredmedia'][0]['source_url']"
                         style="width: 50%;height: 50%"
                         v-if="item._embedded['wp:featuredmedia'][0]['source_url']">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {fetchCampaigns, isLater} from './Campaigns.vue'
import {defineComponent, ref} from "vue";
import Header from "./Header.vue";
import {formatDateCampaign, formatDate} from '../date'

const total = ref(0);

function fetchLastNews() {
    const news     = ref(null)
    const error    = ref(null)
    const loading  = ref(false)
    const loadNews = async () => {
        try {
            loading.value  = true
            //TODO кол-во постов брать из заголовка X-WP-Total
            const response = await fetch('https://zubr.media/wp-json/wp/v2/posts?tags=79&per_page=3&_embed')
            news.value     = await response.json()
            loading.value  = false
        } catch (e) {
            loading.value = false
            error.value   = e.message;
            console.error(e)
        }
    }

    return {news, loadNews, error, loading}
}

export default defineComponent({
    components: {
        'header-view': Header
    },
    setup() {
        const {data, load}     = fetchCampaigns()
        const {news, loadNews} = fetchLastNews();
        load()
        loadNews()
        return {
            data,
            news,
            isLater,
            formatDateCampaign,
            formatDate,
            total
        }
    }
})
</script>
<style scoped>

</style>
