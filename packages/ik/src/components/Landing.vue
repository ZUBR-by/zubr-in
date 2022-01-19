<template>
    <header-view :active="'Кампании'">
    </header-view>
    <div class="scene promo-banner flex-row">
        <div class="section size-50">
            <img class="block size-90" src="/imgs/promo-txt-1.png" alt="">
            <p class="mrgn-t-30px txt-size-14px">
                “Референдум” 2022 &mdash; это обман, который нам хотят навязать вместо реальных перемен.
            </p>
            <img class="block size-100 mrgn-t-30px mrgn-b-20px" src="/imgs/initiatives-list.png" alt="">
            <a class="txt-underline-inline" href="#">Подробнее об Единой стратегии демократических сил Беларуси</a>
        </div>
        <div class="section size-50 pdng-l-30px">
            <img class="block size-100 ik2022-radius-4px" src="/imgs/bnr-1.jpg" alt="">
        </div>
        <img class="promo-banner-cross left" src="/imgs/promo-cross.png">
        <img class="promo-banner-cross right" src="/imgs/promo-cross.png">
    </div>
    <div class="scene falsification-scheme flex-row flex-algn-itms-c">
        <div class="section size-50 pdng-r-50px">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase">
                Кто отвечает за фальсификации
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em">
                Рядовые члены комиссий содействуют или закрывают глаза на фальсификации.
                “Тройки” – председатель комиссии, его заместитель и секретарь – обеспечивают нужные цифры в протоколах.
                Всем процессом управляют исполкомы, они же собирают голоса с участков, под контролем КГБ.
            </p>
            <div class="flex-row mrgn-t-20px">
                <div class="section pdng-r-10px">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
                            fill="#303030"/>
                    </svg>
                </div>
                <div class="section">
                    <p class="txt-size-15px txt-lh-1_5em">
                        <a class="txt-underline-inline" href="#">Читайте подробнее</a> о механизмах фальсификации
                    </p>
                </div>
            </div>
        </div>
        <div class="section size-50">
            <img class="block size-100" src="/imgs/falsification_scheme.png" alt="">
        </div>
    </div>
    <div class="scene">
        <div class="block pdng-20px shadow-type-1 ik2022-radius-4px">
            <div class="flex-row">
                <div class="section pdng-r-10px">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
                            fill="#303030"/>
                    </svg>
                </div>
                <div class="section txt-size-14px txt-bold">
                    Откуда данные
                </div>
            </div>
            <p class="txt-size-12px mrgn-t-10px">
                По статистике прошлых лет, <b>до 80% участников комиссий выборов 2020 будут включены в комиссии
                “референдума”</b>.
                <br>
                Поэтому, до официального опубликования составов комиссий, на сайте будут опубликованы участники комиссий
                2020
            </p>
        </div>

        <h2 class="txt-size-34px mrgn-t-50px">
            Найдите нужных членов комиссий
        </h2>
        <div class="ik2022-tabs flex-row pdng-t-30px pdng-b-20px">
            <div class="ik2022-tabs-unit txt-size-12px cursor-pointer"
                 @click="view = 'list'"
                 :class="{active: view === 'list'}">
                Поиск
            </div>
            <div class="ik2022-tabs-unit txt-size-12px cursor-pointer"
                 @click="view = 'map'; revealMap();"
                 :class="{active: view === 'map'}">
                Карта
            </div>
        </div>
        <template v-if="view === 'list'">
            <label class="polling-station-finder inline-flex flex-algn-slf-c size-50">
                <div class="section">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333V7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z"
                            fill="#303030"/>
                    </svg>

                </div>
                <div class="section flex-grow-all">
                    <input :placeholder="placeholder"
                           v-model.lazy="filter">
                </div>
                <div class="section">
                    <button class="poll-stat-finder-bitton">
                        Найти
                    </button>
                </div>
            </label>
            <div class="polling-station-list" v-if="filter">
                <a class="poll-stat-unit flex-row flex-algn-itms-c flex-noshrink pdng-20px cursor-pointer"
                   :href="'/commission/' + item.id" v-for="item of list">
                    <div class="section size-30 pdng-l-10px flex-algn-slf-s">
                        <h4 class="txt-size-24px txt-bold">
                            {{item.name}}
                        </h4>
                        <p class="txt-size-12px">
                            {{item.description}}
                        </p>
                    </div>
                    <div class="section size-30 pdng-l-25px flex-algn-slf-s">
                        <h4 class="txt-size-24px txt-bold">
                            {{ item.code }}
                        </h4>
                        <p class="txt-size-12px">
                            {{ item.description }}
                        </p>
                    </div>
                    <div class="section size-40 pdng-l-25px pdng-r-10px">
                        <div class="size-100" v-if="item.info">
                            <div class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                                {{ item.info }}
                            </div>
                            <div class="txt-color-2 txt-size-14px">
                                {{ item.position }}
                            </div>
                        </div>
                        <p class="txt-size-12px" v-else>
                            {{ item.constituency_description }}
                        </p>
                    </div>
                </a>
            </div>
            <div class="paginator flex-row">
                <div class="paginator-unit cursor-pointer">
                    <div class="paginator-unit-value">
                        1
                    </div>
                </div>
                <div class="paginator-unit cursor-pointer active">
                    <div class="paginator-unit-value">
                        2
                    </div>
                </div>
                <div class="paginator-unit cursor-pointer">
                    <div class="paginator-unit-value">
                        3
                    </div>
                </div>
                <div class="paginator-unit cursor-pointer">
                    <div class="paginator-unit-value">
                        >
                    </div>
                </div>
            </div>
        </template>
        <div v-show="view === 'map'" class="map-wrp" style="background:#EDEDED; min-height:640px;height: 300px">
            <commission-map v-if="mapInit === true" ref="map"
                            :init-campaign="'2020-08-presidential'"></commission-map>
        </div>
    </div>
    <div class="scene flex-row flex-algn-itms-c">
        <div class="section size-50">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase">
                Вдохновите считать честно!
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em">
                Если вы знаете члена комиссии – убедитесь в том, что он полностью понимает значимость своих действий.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em">
                Это не просто цифры – это наше будущее, которое каждый из нас хочет определять сам. Поэтому, кроме
                Уголовного Кодекса, который предполагает срок до пяти лет, есть еще все Беларусы, которые могут
                воспринять очередную фальсификацию как предательство.
            </p>
        </div>
        <div class="section size-50 pdng-l-30px">
            <img class="block size-100" src="/imgs/bnr-2.jpg" alt="">
        </div>
        <img class="promo-banner-cross left" src="/imgs/promo-cross.png">
        <img class="promo-banner-cross right" src="/imgs/promo-cross.png">
    </div>
    <div class="scene flex-row flex-algn-itms-c">
        <div class="section size-50">
            <div class="three-ways-block">
                <img class="three-ways-block-line" src="/imgs/crpline-2.png" alt="">
                <h2 class="txt-size-34px txt-bold txt-uppercase">
                    3 пути начать разговор
                </h2>
                <div class="flex-row mrgn-t-20px">
                    <div class="section txt-size-34px txt-bold">
                        1
                    </div>
                    <div class="section txt-size-15px pdng-l-15px">
                        Оставьте послание. Расскажите, что можно быть не соучастником, а свидетелем – отправьте письмо
                        или листовку.
                    </div>
                </div>
                <div class="flex-row mrgn-t-20px">
                    <div class="section txt-size-34px txt-bold">
                        2
                    </div>
                    <div class="section txt-size-15px pdng-l-15px">
                        Передайте послание через вашего знакомого, кто общается лично с членом комиссии.
                    </div>
                </div>
                <div class="flex-row mrgn-t-20px">
                    <div class="section txt-size-34px txt-bold">
                        1
                    </div>
                    <div class="section txt-size-15px pdng-l-15px">
                        Поговорите лично: если это ваш знакомый или родственник, объясните опасность преступной
                        фальсификации.
                    </div>
                </div>
            </div>
        </div>
        <div class="section size-50 pdng-l-30px">
            <img style="display:block; width:300px; margin:0 auto;" src="/imgs/messege-01.png" alt="">
        </div>
        <img class="promo-banner-cross left" src="/imgs/promo-cross.png">
        <img class="promo-banner-cross right" src="/imgs/promo-cross.png">
    </div>
    <div class="scene journal-2022 flex-row">
        <div class="section size-33_3 pdng-15px">
            <div class="journal-2022-unit pdng-20px pdng-b-30px txt-algn-c">
                <img class="journal-2022-unit-bg" src="/imgs/jrn-1.png" alt="">
                <div>
                    <svg width="55" height="66" viewBox="0 0 55 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.0332" y="1.5" width="52.9357" height="62.6" rx="3" stroke="white" stroke-width="2"
                              stroke-linejoin="round"/>
                        <path d="M11.0195 19.2012H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 12.4004H31.1626" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 9.00195H31.1626" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 26H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 32.7988H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 39.5996H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 46.3984H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 53.2012H36.6562" stroke="white" stroke-width="2"/>
                    </svg>
                </div>
                <div class="mrgn-t-20px mrgn-b-30px">
                    <h3 class="txt-size-34px txt-uppercase txt-bold">
                        Расследование
                    </h3>
                    <p class="txt-size-34px txt-uppercase">
                        как устроен механизм фальсификации?
                    </p>
                </div>
                <a href="#" class="journal-2022-button cursor-pointer size-50">
                    Читать
                </a>
            </div>
        </div>
        <div class="section size-33_3 pdng-15px">
            <div class="journal-2022-unit pdng-20px pdng-b-30px mrgn-t-30px txt-algn-c">
                <img class="journal-2022-unit-bg" src="/imgs/jrn-2.png" alt="">
                <div>
                    <svg width="55" height="66" viewBox="0 0 55 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.0332" y="1.5" width="52.9357" height="62.6" rx="3" stroke="white" stroke-width="2"
                              stroke-linejoin="round"/>
                        <path d="M11.0195 19.2012H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 12.4004H31.1626" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 9.00195H31.1626" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 26H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 32.7988H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 39.5996H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 46.3984H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 53.2012H36.6562" stroke="white" stroke-width="2"/>
                    </svg>
                </div>
                <div class="mrgn-t-20px mrgn-b-30px">
                    <h3 class="txt-size-34px txt-uppercase txt-bold">
                        Наблюдение
                    </h3>
                    <p class="txt-size-34px txt-uppercase">
                        за “референдумом”
                    </p>
                </div>
                <a href="#" class="journal-2022-button cursor-pointer size-50">
                    Подробнее
                </a>
            </div>
        </div>
        <div class="section size-33_3 pdng-15px">
            <div class="journal-2022-unit pdng-20px pdng-b-30px txt-algn-c">
                <img class="journal-2022-unit-bg" src="/imgs/jrn-3.png" alt="">
                <div>
                    <svg width="55" height="66" viewBox="0 0 55 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.0332" y="1.5" width="52.9357" height="62.6" rx="3" stroke="white" stroke-width="2"
                              stroke-linejoin="round"/>
                        <path d="M11.0195 19.2012H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 12.4004H31.1626" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 9.00195H31.1626" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 26H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 32.7988H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 39.5996H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 46.3984H45.8121" stroke="white" stroke-width="2"/>
                        <path d="M11.0195 53.2012H36.6562" stroke="white" stroke-width="2"/>
                    </svg>
                </div>
                <div class="mrgn-t-20px mrgn-b-30px">
                    <h3 class="txt-size-34px txt-uppercase txt-bold">
                        Участие
                    </h3>
                    <p class="txt-size-34px txt-uppercase">
                        в избирательной комиссии
                    </p>
                </div>
                <a href="#" class="journal-2022-button cursor-pointer size-50">
                    Поддержка
                </a>
            </div>
        </div>
    </div>
    <div class="scene flex-row flex-algn-itms-c">
        <div class="section size-50">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase">
                Почему важно считать честно?
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em">
                Недействительные бюллютени – это результат, который будет отражен в итогах голосования наравне с “ДА” и
                “НЕТ”.
            </p>
            <p>
                Чем меньше участков с фальсификациями, тем меньше людей, готовых соучаствовать в других преступлениях к
                которым их принуждают руководители.
            </p>
        </div>
        <div class="section size-50 pdng-l-50px">
            <img class="block size-100" src="/imgs/letter-1.png" alt="">
        </div>
    </div>
    <div class="scene flex-row flex-algn-itms-c">
        <div class="section size-50">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase">
                Последствия Фальсификаций 2020
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em">
                Все, что произошло в августе 2020 года –
                <b>это резульатат каждого участника фальсификаций</b>. Люди чувствуют, когда их обманывают и не готовы
                больше с этим мириться.
            </p>
            <p>
                Кто-то побоялся лишиться премии, кто-то быть уволенным. Но сегодня из-за этих решений убиты люди, тысячи
                потеряли свободу, десятки тысяч были оштрафованы или избиты.
            </p>
        </div>
        <div class="section size-50 pdng-l-50px">
            <img class="block size-100" src="/imgs/yt-01.png" alt="">
        </div>
    </div>
    <div class="scene flex-row flex-algn-itms-c">
        <div class="section size-50">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase">
                Не готовы начать разговор со знакомым членом УИК?
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em">
                Из-за повышающегося уровня репрессий не каждый готов поговорить откровенно с малознакомым челвоеком о
                таких важных вещах.
            </p>
            <p>
                Поэтому, если вы узнали среди членов УИК ваших знакомых, вы можете поделиться их контактами, чтобы мы
                включили их в нашу новостную расслку и <b>постарались обяъснить значимость их ролий в документации и
                противодействии фальсификаций</b>.
            </p>
        </div>
        <div class="section size-50 pdng-l-50px">
            <div class="info-sharing-form pdng-30px pdng-b-50px">
                <h3 class="txt-size-34px txt-uppercase txt-bold">
                    Поделитесь данными о членах изберательных комиссий
                </h3>
                <div class="mrgn-t-20px">
                    <textarea placeholder="Например ФИО и номер комиссии ..."></textarea>
                </div>
                <div class="mrgn-t-15px">
                    <div class="journal-2022-button primary inline-flex flex-algn-itms-c cursor-pointer">
                        <div class="pdng-r-10px">
                            <svg style="margin:-2px 0" class="block" width="11" height="22" viewBox="0 0 11 22"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z"
                                    fill="#303030"/>
                            </svg>
                        </div>
                        <div>
                            Прикрепить файл
                        </div>
                    </div>
                    <div class="journal-2022-button inline-flex flex-algn-itms-c cursor-pointer mrgn-l-10px">
                        <div class="pdng-r-10px">
                            <svg style="margin:-2px 0" class="block" width="11" height="22" viewBox="0 0 11 22"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z"
                                    fill="white"/>
                            </svg>
                        </div>
                        <div>
                            Name.pdf
                        </div>
                        <div class="pdng-l-10px">
                            <svg style="margin:-2px 0" class="block" width="14" height="14" viewBox="0 0 14 14"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                    fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mrgn-t-15px">
                    <div class="journal-2022-button inline-block cursor-pointer">
                        Отправить
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue';
import {computed, defineComponent, ref, watch} from "vue";
import {ElTabs, ElTabPane} from 'element-plus'
import CommissionMap from '@zubr-in/main/src/components/CommissionMap.vue'

const data     = ref(null)
const filter   = ref()
const loading  = ref(false);
const endpoint = ref('home_address');

const endpoints = {
    'home_address': {
        url: '/search/commission',
        parameter: 'query'
    },
    'commissions': {
        url: '/search/commission',
        parameter: 'query'
    },
    'members': {
        url: '/members',
        parameter: 'name'
    },
    'organizations': {
        url: '/organizations',
        parameter: 'name'
    }
}

async function search() {
    try {
        loading.value = true;

        const response = await fetch(
            import.meta.env.VITE_API_URL
            + endpoints[endpoint.value].url
            + ('?' + endpoints[endpoint.value].parameter + '=' + encodeURIComponent('%' + (filter.value) + '%'))
        )
        data.value     = await response.json()
        loading.value  = false;
    } catch (e) {
        loading.value = false;
        data.value    = {search: {}, pagination: {aggregate: {count: 0}}};
    }
    return {
        data
    }
}

export default defineComponent({
    components: {
        'header-view': Header,
        ElTabPane,
        ElTabs,
        CommissionMap
    },
    setup() {
        const is_home_address = ref(false);
        const placeholder     = computed(() => {
            return is_home_address.value
                ? 'Ваш домашний адрес'
                : 'ФИО члена комиссии, Код, адрес, описание комиссии, описание округа'
        })
        watch(filter, (newValue) => {
            if (!newValue) {
                return
            }
            search()
        })
        const list     = computed(() => {
            if (!data.value) {
                return []
            }
            if (!data.value.commissions) {
                data.value.commissions = [];
            }
            if (!data.value.members) {
                data.value.members = [];
            }
            return data.value.commissions.concat(data.value.members.map(i => {
                i.commissions[0].commission.info     = i.full_name
                i.commissions[0].commission.position = i.commissions[0].position
                return i.commissions[0].commission
            }));
        })
        const view = ref('list')
        const center   = ref();

        const mapInit  = ref(false)
        return {
            revealMap() {

                setTimeout(() => {
                    center.value  = [
                        26.005343, 53.131253
                    ];
                    mapInit.value = true
                }, 1)
            },
            center,
            mapInit,
            endpoint,
            placeholder,
            filter,
            is_home_address,
            list,
            view
        }
    }
})
</script>
