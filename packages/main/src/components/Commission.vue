<template>
    <navbar :active="'Комиссии'">
        <div class="header-subnav border-t-1px border-color2">
            <div
                class="section flex-row flex-algn-itms-c flex-grow-all flex-algn-slf-strch pdng-20px pdng-l-30px pdng-r-30px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
                <div class="section">
                    <div class="flex-row flex-algn-itms-c">
                        <div class="section">
                            <img src="/img/icon/flag_large.svg" class="zoom-0_75">
                        </div>
                        <div class="section pdng-l-15px" v-if="data">
                            <div class="txt-size-18px mil-txt-size-14px">
                                Сообщений
                            </div>
                            <div class="txt-size-18px txt-bold mil-txt-size-14px">
                                {{ data.commission.messages.length }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section pdng-l-40px mil-pdng-l-20px">
                    <a class="button medium primary" :href="botURL">
                        Участвовать!
                    </a>
                </div>
            </div>
        </div>
    </navbar>
    <div class="scene-wrp bg-color-1 border-b-1px border-color1">
        <div class="scene mrgn-t-170px mil-mrgn-t-170px">
            <div class="flex-row mil-flex-wrap" v-if="data">
                <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                    <h1 class="txt-size-32px">
                        {{ data.commission.name }}
                    </h1>
                    <h2 class="txt-size-20px">
                        {{ data.commission.description }}
                    </h2>
                    <div class="tag-wrp mrgn-t-20px" v-if="false">
                        <a class="tag-unit">
                            Минск
                        </a>
                    </div>
                    <div class="mrgn-t-40px" v-if="data.commission.extra.area">
                        <p>
                            {{ data.commission.extra.area }}
                        </p>
                    </div>
                    <div class="mrgn-t-40px">
                        <div class="infoblock">
                            <div class="infoblock-name">Адрес:</div>
                            <div class="infoblock-value">{{ data.commission.address }}</div>
                        </div>
                        <div class="infoblock">
                            <div class="infoblock-name">Тип комиссии:</div>
                            <div class="infoblock-value">
                                {{ map[data.commission.type] || data.commission.type }}
                            </div>
                        </div>
                        <div class="infoblock">
                            <div class="infoblock-name">Код комиссии:</div>
                            <div class="infoblock-value">{{ data.commission.code }}</div>
                        </div>
                        <div class="infoblock" v-if="data.commission.parent">
                            <div class="infoblock-name">Вышестоящая комиссия:</div>
                            <div class="infoblock-value">
                                <a class="txt-underline-inline"
                                   :href="'/commission/' + data.commission.parent.id">
                                    {{ data.commission.parent.name }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section size-50 mil-size-100 mil-pdng-t-50px" v-if="data.commission.geometry">
                    <div class="map-wrp committee-view">
                        <location :feature="data.commission.geometry"></location>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="scene" v-if="data">
        <h2 class="txt-size-36px txt-bold pdng-b-40px mil-txt-size-30px">
            Члены комиссии
        </h2>
        <div class="campaign-candidates-list">
            <div class="person-wrp flex-column flex-algn-itms-strch"
                 v-for="item of data.commission.members">
                <el-image
                    :alt="item.member.person.full_name"
                    class="person-photo"
                    :fit="'scale-down'"
                    :src="item.member.person.photo_url || '/img/icon/person-placeholder.png'"></el-image>
                <div class="person-info pdng-t-10px">
                    <div class="person-name txt-size-14px txt-medium">
                        {{ item.member.person.full_name }}
                    </div>
                    <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
                        {{ item.position }}
                    </div>
                </div>

                <a class="person-popover cursor-pointer" :href="'/member/' + item.member.id">
                    <div class="flex-column flex-algn-itms-strch">
                        <el-image
                            :alt="item.member.person.full_name"
                            class="person-photo"
                            :fit="'scale-down'"
                            :src="item.member.person.photo_url || '/img/icon/person-placeholder.png'"></el-image>
                        <div class="person-info pdng-t-10px">
                            <a class="txt-size-14px txt-medium">
                                {{ item.member.person.full_name }}
                            </a>
                            <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
                                {{ item.position }}
                            </div>
                            <div class="infoblock txt-size-12px"
                                 v-if="item.referral_notes || item.member.person.extra.referral_description">
                                <div class="infoblock-name">
                                    Выдвинут:
                                </div>
                                <div class="infoblock-value">
                                    {{ item.referral_notes || item.member.person.extra.referral_description }}
                                </div>
                            </div>
                            <div class="infoblock txt-size-12px" v-if="false">
                                <div class="infoblock-name">
                                    Работодатель
                                </div>
                                <div class="infoblock-value ">
                                    Центральная избирательная комиссия
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="scene" v-if="data">
        <h2 class="txt-size-36px txt-bold pdng-b-40px mil-txt-size-30px">
            Последние сообщения о нарушениях.
            <a class="txt-underline-inline-2px" href="#">Всего {{ data.commission.messages.length }} сообщений о
                нарушениях</a>.
            Скрыты по соображениям безопасности, при изменении ситуации будут возвращены
        </h2>
<!--        <message-list v-model="data.commission.messages" :show-commission="false"></message-list>-->
    </div>
    <div class="scene" v-if="data && data.commission.campaign">
        <h2 class="txt-size-36px mil-txt-size-30px txt-bold pdng-b-40px">
            Избирательная кампания
        </h2>
        <div>
            <div class="election-campaign-unit">
                <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
                    <div
                        class="section flex-grow-all txt-size-20px mil-txt-size-15px pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-l-20px">
                        <div class="txt-color-1 txt-medium" v-if="data.commission.campaign.started_at"
                             :class="{'grayscale' : !isLater(data.commission.campaign.started_at)}">
                            {{ formatDateCampaign(data.commission.campaign) }}
                        </div>
                        <div class="txt-color-1 txt-medium" v-else>
                            Нет даты
                        </div>
                    </div>
                </div>
                <div
                    class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px mil-pdng-l-20px mil-pdng-r-20px mil-pdng-b-30px"
                    :class="{'grayscale' : !isLater(data.commission.campaign.started_at)}"
                >
                    <h2 class="txt-color-1 txt-size-36px mil-txt-size-30px txt-lh-1_1em">
                        <a class="txt-underline-inline-2px"
                           :href="'/campaign/' + data.commission.campaign.id">
                            {{ data.commission.campaign.name }}
                        </a>
                    </h2>
                    <div class="tag-wrp mrgn-t-20px" v-if="data.commission.campaign.extra.type">
                        <a class="tag-unit"
                           v-if="['parliamentary_elections', 'presidential_elections'].includes(data.commission.campaign.extra.type)">
                            Общереспубликанские выборы
                        </a>
                        <a class="tag-unit"
                           v-if="['local_elections'].includes(data.commission.campaign.extra.type)">
                            Местные выборы
                        </a>
                        <a class="tag-unit"
                           v-if="['referendum'].includes(data.commission.campaign.extra.type)">
                            Референдум
                        </a>
                    </div>
                    <div v-if="data && data.commission.report.length > 0"
                         class="pdng-t-15px">
                        <div v-for="report of data.commission.report" style="width: 400px;height:500px">
                            <el-image
                                :append-to-body="true"
                                :src="item.attachment.url" v-for="(item, index) of report.attachments"
                                alt="Протокол"
                                :fit="'scale-down'"
                                :preview-src-list="[item.url]"
                                :class="{'pdng-l-5px' : index > 0}"
                            ></el-image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const map = {
    central: 'Центральная',
    precinct: 'Участковая',
    territorial: 'Территориальная'
}
export {map as commission_types}
</script>

<script setup>
import Navbar from './Navbar.vue';
import Location from './Point.vue';
import {onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import {ElImage} from 'element-plus';
import MessageList from "./MessageList.vue";
import {formatDateCampaign} from "../date";

const data = ref(null)

async function fetchCommission(id) {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/commission/' + id)
        data.value     = await response.json()
    } catch (e) {
        data.value = {commissions: [], pagination: {aggregate: {count: 0}}};
    }
    return {
        data
    }
}

function isLater(started_at) {
    if (started_at === null) {
        return true;
    }
    const current  = new Date();
    const campaign = new Date(started_at);

    return campaign > current;
}

onMounted(async () => {
    const route = useRoute()
    let id      = route.params.id;
    await fetchCommission(id)
    document.title = document.title.replace(' -', ' ' + data.value.commission.name + ' -')
})
const botURL = import.meta.env.VITE_BOT_URL

</script>
