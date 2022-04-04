<template>
    <header-view :active="'Кампании'">
        <div class="header-subnav border-t-1px border-color2">
            <div class="section pdng-l-10px" v-if="data && data.campaign.started_at && isFuture(data.campaign.started_at)">
                <a class="button medium mil-txt-size-12px primary" :href="botURL">
                    Участвовать!
                </a>
            </div>
            <div
                class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px"
                v-if="data">
                <div class="txt-color-1 txt-size-18px mil-txt-size-14px" v-if="data.campaign.started_at">
                    {{ formatDateCampaign(data.campaign) }}
                </div>
                <div class="txt-size-18px mil-txt-size-14px txt-bold" v-if="isFuture(data.campaign.started_at)">
                    {{ dateDiff(data.campaign.started_at) }}
                </div>
                <div class="txt-color-1 txt-size-18px mil-txt-size-14px" v-if="!data.campaign.started_at">
                    Нет даты
                </div>
            </div>
            <div
                v-if="data && data.campaign.id !== '2022-02-referendum'"
                class="section flex-row flex-algn-itms-c flex-noshrink flex-algn-slf-strch pdng-l-20px pdng-r-30px mil-pdng-r-20px border-l-1px border-color2">
                <div class="section">
                    <div class="flex-row flex-algn-itms-c">
                        <div class="section">
                            <img src="/img/icon/flag_large.svg" class="zoom-0_75">
                        </div>
                        <div class="section pdng-l-15px">
                            <div class="txt-size-18px mil-txt-size-14px">
                                Нарушений
                            </div>
                            <div class="txt-size-18px mil-txt-size-14px txt-bold" v-if="data">
                                {{ data.messages_aggregate.aggregate.count }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header-view>
    <div class="scene mrgn-t-170px mil-mrgn-t-120px pdng-b-0" v-if="data">
        <h1 class="mil-txt-size-34px">
            {{ data.campaign.name }}
        </h1>
        <div class="tag-wrp mrgn-t-20px">
            <template v-if="data.campaign.extra.type">
                <a class="tag-unit"
                   v-if="['parliamentary_elections', 'presidential_elections'].includes(data.campaign.extra.type)">
                    Общереспубликанские выборы
                </a>
                <a class="tag-unit" v-if="['local_elections'].includes(data.campaign.extra.type)">
                    Местные выборы
                </a>
                <a class="tag-unit" v-if="['referendum'].includes(data.campaign.extra.type)">
                    Референдум
                </a>
            </template>
        </div>
        <div class="mrgn-t-40px" v-if="false">
            <p>
                Это платформа для наблюдателей и избирателей в Беларуси.
                Здесь можно узнать о любом из кандидатов и их кампаниях, любой из задействованных в выборах
                организациях, любом
                из членов избирательных комиссий на любом из работающих на этих выборах участков для голосования.
            </p>
        </div>
    </div>
    <template v-if="data && data.campaign.id === '2022-02-referendum'">
        <div class="scene pdng-r-30px" v-for="i of news">
            <div class="flex-row mil-flex-column">
                <div class="section size-60 mil-size-100 pdng-r-30px">
                    <h1 class="txt-size-28px">
                        {{ i.title }}
                    </h1>
                    <h3 class="txt-size-16px txt-bold" style="padding-top: 5px">
                        {{ i.created_at }}
                    </h3>
                    <p style="white-space: pre-wrap;"
                       class="pdng-t-5px"
                       v-html="i.content">
                    </p>
                </div>
                <div class="section size-40 mrgn-t-50px mil-pdng-t-0 mil-size-100 mil-pdng-t-20px"
                     v-if="i.post_id"
                     v-html="instagram.replaceAll('post_id', i.post_id)">
                </div>
            </div>
        </div>
    </template>
    <div class="scene"
         v-if="data && data.messages_aggregate.aggregate.count && data.campaign.id !== '2022-02-referendum'">
        <h2 class="txt-size-36px mil-txt-size-30px txt-bold pdng-b-40px">
            Последние сообщения. <a class="txt-underline-inline-2px"
                                    :href="'/campaign/' + data.campaign.id + '/messages'">
            Всего {{ data.messages_aggregate.aggregate.count }} сообщений о нарушениях
        </a>.
        </h2>
        <message-list v-model="data.messages"></message-list>
        <div class="flex-column flex-algn-itms-c pdng-t-40px" v-if="data">
            <a :href="'/campaign/' + data.campaign.id + '/messages'"
               class="button primary inline-flex flex-algn-itms-c pdng-l-40px pdng-r-40px">
                <div class="section">
                    Показать все {{ data.messages_aggregate.aggregate.count }} нарушений <span
                    class="mil-notdisplay">и инцидентов</span>
                </div>
                <div class="section mrgn-l-20px">
                    <img src="/img/icon/arrow.svg">
                </div>
            </a>
        </div>
    </div>
    <div class="scene" v-if="data && data.campaign.id !== '2022-02-referendum'">
        <h2 class="txt-size-36px mil-txt-size-30px txt-bold pdng-b-40px">
            Избирательные комиссии
            <template v-if="false">
                <br>
                Всего наблюдается <a class="txt-underline-2px" href="/commissions">317</a> участков из <a
                class="txt-underline-2px" href="#">1
                396</a>.
            </template>
        </h2>
        <div class="map-content">
            <div class="flex-row mil-block pdng-b-15px txt-size-14px" v-if="false">
                <div class="section flex-grow-all">
                    <div class="inline-flex flex-algn-itms-c txt-color-3-1">
                        <div>
                            <svg width="22" height="13" viewBox="0 0 22 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1C14.9773 1 17.4849 2.50522 19.0028 3.96966C19.7698 4.70972 20.2931 5.44898 20.6224 5.99842C20.7392 6.19335 20.8311 6.36347 20.9002 6.5C20.8311 6.63653 20.7392 6.80664 20.6224 7.00158C20.2931 7.55102 19.7698 8.29028 19.0028 9.03034C17.4849 10.4948 14.9773 12 11 12C7.02275 12 4.51514 10.4948 2.99725 9.03034C2.23018 8.29028 1.70689 7.55102 1.37761 7.00158C1.26079 6.80664 1.16894 6.63653 1.09977 6.5C1.16894 6.36347 1.26079 6.19336 1.37761 5.99842C1.70689 5.44898 2.23018 4.70972 2.99725 3.96966C4.51514 2.50522 7.02275 1 11 1Z"
                                    stroke="#FF5C01" stroke-width="2"></path>
                                <circle cx="11" cy="6" r="3" stroke="#FF5C01" stroke-width="2"></circle>
                            </svg>
                        </div>
                        <div class="mrgn-l-5px">
                            Количество наблюдателей
                        </div>
                    </div>
                    <div class="inline-flex flex-algn-itms-c txt-color-3-1 mrgn-l-20px mil-mrgn-0 mil-mrgn-t-10px">
                        <div>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.80425 15L10 1.8868L18.1958 15H1.80425Z" fill="white" stroke="#FF5C01"
                                      stroke-width="2"></path>
                                <rect x="9" y="6" width="2" height="4" rx="1" fill="#FF5C01"></rect>
                                <rect x="9" y="11" width="2" height="2" rx="1" fill="#FF5C01"></rect>
                            </svg>
                        </div>
                        <div class="mrgn-l-5px">
                            Количество инцидентов
                        </div>
                    </div>
                </div>
                <div class="section mil-mrgn-t-10px" v-if="false">
                    <label class="flex-row flex-algn-itms-c txt-color-3-1">
                        <input type="checkbox" style="width:16px; height:16px; flex-shrink:0;">
                        <span class="mrgn-l-5px">
                Участки без наблюдателей
              </span>
                    </label>
                </div>
            </div>
            <div class="map-wrp" style="background:#EDEDED; width:auto; height:460px" v-if="data">
                <commission-map :init-campaign="data.campaign.id" :wheel="true"></commission-map>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Navbar.vue';
import {defineComponent, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import CommissionMap from './CommissionMap.vue'
import {formatDateCampaign} from "../date";
import MessageList from "./MessageList.vue";
import news from './../news'

const data = ref(null)
const instagram =  '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/post_id/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/post_id/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/post_id/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by ZUBR (@zubr_in)</a></p></div></blockquote>'
async function fetchCampaign() {
    try {
        let campaign_id = '2022-02-referendum';
        if (useRoute().params.id) {
            campaign_id = useRoute().params.id
        }
        const response = await fetch(
            import.meta.env.VITE_API_URL
            + '/campaign/'
            + campaign_id
            + '?limit=5'
        )
        data.value     = await response.json()
    } catch (e) {
        data.value = {campaign: {}};
    }
    return {
        data
    }
}

export default defineComponent({
    components: {
        MessageList,
        'header-view': Header,
        CommissionMap
    },
    setup() {
        onMounted(async () => {
            await fetchCampaign()
            document.title = document.title.replace('Кампания', data.value.campaign.name)
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        })
        return {
            botURL: import.meta.env.VITE_BOT_URL,
            data,
            news,
            instagram,
            hash: {},
            isFuture(start) {
                return new Date(start) > new Date();
            },
            dateDiff(start) {
                function date2(first, second) {
                    return Math.round((second - first) / (1000 * 60 * 60 * 24));
                }

                console.log(new Date(), new Date(start));
                return date2(new Date(), new Date(start)) + ' день до начала'
            },
            formatDateCampaign
        }
    }
})
</script>
