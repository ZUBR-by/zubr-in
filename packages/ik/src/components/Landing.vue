<template>
    <header-view :active="'Кампании'">
    </header-view>
    <div class="scene promo-banner flex-row">
        <div class="section size-50 mil-size-100">
            <img class="block size-90 mil-size-100" src="/imgs/promo-txt-1.png" alt="">
            <p class="mrgn-t-30px txt-size-14px txt-ik2022-txt">
                “Референдум” 2022 &mdash; это обман, который нам хотят навязать вместо реальных перемен.
            </p>
            <img class="block size-100 mrgn-t-30px mrgn-b-20px" src="/imgs/initiatives-list.png" alt="">
            <a class="txt-underline-inline" :href="strategy">
                Подробнее об Единой стратегии демократических сил Беларуси
            </a>
        </div>
        <div class="section size-50 pdng-l-30px mil-notdisplay">
            <img class="block size-100 ik2022-radius-4px" src="/imgs/banner.png" alt="">
        </div>
        <img class="promo-banner-cross left" src="/imgs/promo-cross.png">
        <img class="promo-banner-cross right" src="/imgs/promo-cross.png">
    </div>
    <div class="scene falsification-scheme flex-row flex-algn-itms-c mil-block">
        <div class="section size-50 pdng-r-50px mil-size-100 mil-pdng-0">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase txt-ik2022-hdr">
                Кто отвечает за фальсификации
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
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
                    <p class="txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                        <router-link class="txt-underline-inline" :to="{name: 'schema'}">
                            Читайте подробнее
                        </router-link>
                        о механизмах фальсификации
                    </p>
                </div>
            </div>
        </div>
        <div class="section size-50 mil-size-100 mil-pdng-t-60px mil-pdng-t-30px">
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
                По статистике прошлых лет
                <b>до 80% участников комиссий выборов 2020 будут включены в комиссии по “референдуму”</b>.
                <br>
                Поэтому до официального опубликования составов комиссий на сайте будут опубликованы участники комиссий
                2020.
            </p>
        </div>

        <h2 class="txt-size-34px mrgn-t-50px txt-uppercase txt-ik2022-hdr" id="search">
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
            <label class="polling-station-finder inline-flex flex-algn-itms-c size-50 cursor-pointer mil-size-100">
                <div class="section flex-noshrink pdng-l-15px pdng-r-10px">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z"
                            fill="#303030"/>
                    </svg>
                </div>
                <div class="section flex-grow-all">
                    <input :placeholder="placeholder"
                           style="width: 100%"
                           v-model.lazy="filter">
                </div>
                <div class="section">
                    <button class="poll-stat-finder-button" @click="search">
                        Найти
                    </button>
                </div>
            </label>
            <div class="polling-station-list mrgn-t-50px" v-if="filter">
                <div
                    class="poll-stat-unit flex-row flex-algn-itms-c flex-noshrink pdng-20px mil-flex-column"
                    v-if="search_initiated && list.length === 0">
                    Не найдено
                </div>
                <router-link
                    class="poll-stat-unit flex-row flex-algn-itms-c flex-noshrink pdng-20px cursor-pointer mil-flex-column"
                    :to="'/commission/' + item.id" v-for="item of list">
                    <div class="section size-30 pdng-l-10px flex-algn-slf-s mil-size-100 mil-pdng-0 mil-pdng-b-10px">
                        <h4 class="txt-size-24px txt-normal txt-uppercase txt-ik2022-hdr">
                            {{ item.name }}
                        </h4>
                        <p class="txt-size-12px">
                            {{ item.description }}
                        </p>
                    </div>
                    <div
                        class="section size-30 pdng-l-25px flex-algn-slf-s mil-size-100 mil-pdng-0 mil-pdng-b-10px mil-pdng-t-10px mil-border-t-1px mil-border-color1">
                        <h4 class="txt-size-24px txt-normal txt-uppercase txt-ik2022-hdr">
                            {{ item.code }}
                        </h4>
                        <p class="txt-size-12px">
                            {{ item.description }}
                        </p>
                    </div>
                    <div
                        class="section size-40 pdng-l-25px pdng-r-10px mil-size-100 mil-pdng-0 mil-pdng-t-10px mil-border-t-1px mil-border-color1">
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
                </router-link>
            </div>
            <div class="paginator flex-row"
                 v-if="data && data.commissions && (data.commissions.length + data.members.length) > perPage && filter">
                <div class="paginator-unit cursor-pointer"
                     v-for="i of pagesRange"
                     @click="page = i"
                     :class="{active : page === i}">
                    <div class="paginator-unit-value">
                        {{ i + 1 }}
                    </div>
                </div>
            </div>
        </template>
        <div v-show="view === 'map'" class="map-wrp" style="background:#EDEDED; min-height:640px;height: 300px"
             id="map-tab">
            <commission-map v-if="mapInit === true" ref="map"
                            :init-campaign="'2020-08-presidential'"></commission-map>
        </div>
    </div>
    <div class="scene flex-row flex-algn-itms-c mil-flex-column-reserve">
        <div class="section size-50 mil-size-100 mil-pdng-t-30px">
            <img class="size-60 mil-size-100" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase txt-ik2022-hdr">
                Вдохновите считать честно!
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Если вы знаете члена комиссии – убедитесь в том, что он полностью понимает значимость своих
                действий.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Это не просто цифры – это наше будущее, которое каждый из нас хочет определять сам. Поэтому, кроме
                Уголовного кодекса, который предполагает от 5 до 12 лет за участие в фальсификации,
                есть еще все беларусы, которые могут воспринять очередную фальсификацию как предательство.
            </p>
        </div>
        <div class="section size-50 pdng-l-30px mil-size-100 mil-pdng-0">
            <img class="block size-100" src="/imgs/bnr-2.jpg" alt="">
        </div>
        <img class="promo-banner-cross left" src="/imgs/promo-cross.png">
        <img class="promo-banner-cross right" src="/imgs/promo-cross.png">
    </div>
    <div class="scene flex-row flex-algn-itms-c mil-block">
        <div class="section size-50 mil-size-100">
            <div class="three-ways-block">
                <img class="three-ways-block-line" src="/imgs/crpline-2.png" alt="">
                <h2 class="txt-size-34px txt-bold txt-uppercase txt-ik2022-hdr">
                    3 пути начать разговор
                </h2>
                <div class="flex-row mrgn-t-20px">
                    <div class="section txt-size-34px txt-bold">
                        1
                    </div>
                    <div class="section txt-size-15px pdng-l-15px">
                        Оставьте послание. Расскажите, что можно быть не соучастником, а свидетелем – отправьте письмо
                        или листовку
                    </div>
                </div>
                <div class="flex-row mrgn-t-20px">
                    <div class="section txt-size-34px txt-bold">
                        2
                    </div>
                    <div class="section txt-size-15px pdng-l-15px">
                        Передайте послание через вашего знакомого, который общается лично с членом комиссии.
                    </div>
                </div>
                <div class="flex-row mrgn-t-20px">
                    <div class="section txt-size-34px txt-bold">
                        3
                    </div>
                    <div class="section txt-size-15px pdng-l-15px">
                        Поговорите лично: если это ваш знакомый или родственник, объясните опасность фальсификации.
                    </div>
                </div>
            </div>
        </div>
        <div class="section size-50 pdng-l-30px mil-notdisplay">
            <div class="sms-wrp">
                <div class="txt-bold txt-size-18px">
                    Здравствуйте, Алина Анатольевна!
                </div>
                <div class="txt-size-16px mrgn-t-20px">
                    Увидела Вас в списке избирательной комиссии нашего участка <a href="https://bit.ly/izberkom2022">
                    bit.ly/izberkom2022
                </a> на
                    «референдуме‎».
                    Уверена, что вы будете честно считать недействительные бюллетени. Если Вас будут принуждать к
                    фальсификациям – фиксируйте все нарушения и присылайте их <a :href="telegram_ik">@contact2022</a> .
                </div>
                <div class="flex-row flex-algn-itms-c mrgn-t-5px">
                    <div class="flex-grow-all txt-algn-r txt-size-11px txt-italic" style="color:#8E8E93;">
                        11:50
                    </div>
                    <div class="flex-noshrink pdng-l-5px">
                        <svg class="block" width="14" height="8" viewBox="0 0 14 8" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.1336 0.284118L6.6336 7.08412L6.57835 7.15342C6.45066 7.34745 6.4799 7.6083 6.65978 7.77055C6.86213 7.95308 7.1785 7.9417 7.3664 7.74513L13.8664 0.945127L13.9216 0.875824C14.0493 0.6818 14.0201 0.420946 13.8402 0.258694C13.6379 0.0761616 13.3215 0.0875441 13.1336 0.284118ZM9.63521 0.28245L3.43573 6.7073L0.862149 4.08105L0.794346 4.02321C0.602859 3.88745 0.333042 3.89974 0.155256 4.06415C-0.0447525 4.2491 -0.0525441 4.55655 0.137853 4.75084L3.07639 7.74952L3.14702 7.80937C3.34667 7.94891 3.62866 7.92781 3.80333 7.74679L10.3648 0.946795L10.4204 0.877744C10.549 0.684304 10.521 0.42332 10.3419 0.26025C10.1405 0.0767963 9.82405 0.0867358 9.63521 0.28245Z"
                                  fill="#54B6F9"/>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
        <img class="promo-banner-cross left" src="/imgs/promo-cross.png">
        <img class="promo-banner-cross right" src="/imgs/promo-cross.png">
    </div>
    <div class="scene journal-2022 flex-row mil-block">
        <div class="section size-33_3 pdng-15px mil-size-100">
            <div class="journal-2022-unit pdng-20px pdng-b-30px txt-algn-c mil-pdng-t-30px mil-pdng-b-50px">
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
                    <h3 class="txt-size-32px txt-uppercase txt-bold txt-ik2022-hdr">
                        Расследование
                    </h3>
                    <p class="txt-size-32px txt-uppercase txt-light txt-ik2022-hdr">
                        как устроен механизм фальсификации?
                    </p>
                </div>
                <router-link class="journal-2022-button cursor-pointer size-50" :to="{name: 'schema'}">
                    Читать
                </router-link>
            </div>
        </div>
        <div class="section size-33_3 pdng-15px mil-size-100">
            <div
                class="journal-2022-unit pdng-20px pdng-b-30px mrgn-t-30px txt-algn-c mil-pdng-t-30px mil-pdng-b-50px mil-mrgn-0">
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
                    <h3 class="txt-size-32px txt-uppercase txt-bold txt-ik2022-hdr">
                        Наблюдение
                    </h3>
                    <p class="txt-size-32px txt-uppercase txt-light txt-ik2022-hdr">
                        за “референдумом”
                    </p>
                </div>
                <a href="https://zubr.in" class="journal-2022-button cursor-pointer size-50">
                    Подробнее
                </a>
            </div>
        </div>
        <div class="section size-33_3 pdng-15px mil-size-100">
            <div class="journal-2022-unit pdng-20px pdng-b-30px txt-algn-c mil-pdng-t-30px mil-pdng-b-50px">
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
                    <h3 class="txt-size-32px txt-uppercase txt-bold txt-ik2022-hdr">
                        Участие
                    </h3>
                    <p class="txt-size-32px txt-uppercase txt-light txt-ik2022-hdr">
                        в избирательной комиссии
                    </p>
                </div>
                <router-link class="journal-2022-button cursor-pointer size-50" :to="{name: 'to_honest_members'}">
                    Поддержка
                </router-link>
            </div>
        </div>
    </div>
    <div class="scene flex-row flex-algn-itms-c mil-flex-column-reserve">
        <div class="section size-50 mil-size-100 pdng-t-30px">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase txt-ik2022-hdr">
                Почему важно считать честно?
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Недействительные бюллетени – это результат, который будет отражен в итогах голосования наравне с “ДА” и
                “НЕТ”.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Чем меньше участков с фальсификациями, тем меньше людей, готовых участвовать в других преступлениях, к
                которым их принуждают руководители.
            </p>
        </div>
        <div class="section size-50 pdng-l-50px mil-size-100 mil-pdng-0">
            <img class="block size-100" src="/imgs/letter-1.png" alt="">
        </div>
    </div>
    <div class="scene flex-row flex-algn-itms-c mil-flex-column-reserve">
        <div class="section size-50 mil-size-100 mil-pdng-t-30px">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase txt-ik2022-hdr">
                Последствия Фальсификаций 2020
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Все, что произошло в августе 2020 года, – это результат каждого участника фальсификаций. Люди чувствуют,
                когда их обманывают, и не готовы больше с этим мириться.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Кто-то побоялся лишиться премии, кто-то – быть уволенным. Но сегодня из-за этих решений убиты люди,
                тысячи потеряли свободу, десятки тысяч были оштрафованы или избиты
            </p>
        </div>
        <div class="section size-50 pdng-l-50px mil-size-100 mil-pdng-0">
            <iframe class="mil-size-100" width="560" height="315" src="https://www.youtube.com/embed/uGh4Vs-zqQs"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
    </div>
    <div class="scene flex-row flex-algn-itms-c mil-block">
        <div class="section size-50 mil-size-100">
            <img class="size-60" src="/imgs/crpline-1.png" alt="">
            <h2 class="txt-size-34px txt-bold txt-uppercase txt-ik2022-hdr">
                Не готовы начать разговор со знакомым членом УИК?
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Из-за повышающегося уровня репрессий не каждый готов поговорить откровенно с малознакомым человеком о
                таких важных вещах.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Поэтому, если вы узнали среди членов УИК ваших знакомых, вы можете поделиться их контактами, чтобы мы
                включили их в нашу новостную рассылку и <b>постарались объяснить значимость их роли в документировании и
                противодействии фальсификации</b>.
            </p>
        </div>
        <div class="section size-50 pdng-l-50px mil-size-100 mil-pdng-0 mil-pdng-t-50px">
            <div class="info-sharing-form pdng-30px pdng-b-50px mil-pdng-15px">
                <h3 class="txt-size-34px txt-uppercase txt-bold">
                    Поделитесь данными о членах избирательных комиссий
                </h3>
                <p class="txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                    <b>Через безопасный чат в телеграм</b>:
                </p>
                <div>
                    <a class="inline-block mrgn-t-10px" :href="telegram_ik">
                        <img src="/imgs/telegram_button.svg" alt="перейти в телеграм">
                    </a>
                </div>
                <p class="txt-size-15px txt-lh-1_5em txt-ik2022-txt mrgn-t-5px">
                    <b>
                        Или напишите нам на почту
                        <a href="mailto:contact2022@honestby.org" class="txt-color-0">
                            contact2022@honestby.org
                        </a>
                    </b>
                </p>
                <div class="mrgn-t-15px" v-if="false">
                    <div class="journal-2022-button primary inline-flex flex-algn-itms-c cursor-pointer">
                        <div class="pdng-r-10px">
                            <svg style="margin:-2px 0" class="block" width="11" height="22" viewBox="0 0 11 22"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z"
                                    fill="#303030"/>
                            </svg>
                        </div>
                        <input type="file" value="Прикрепить файл" multiple>
                    </div>
                    <div class="journal-2022-button inline-flex flex-algn-itms-c cursor-pointer mrgn-l-10px"
                         v-if="false">
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
                <div class="mrgn-t-15px" v-if="false">
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
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import {ElTabs, ElTabPane} from 'element-plus'
import CommissionMap from '@zubr-in/main/src/components/CommissionMap.vue'
import {onBeforeRouteUpdate} from "vue-router";
import router from "@zubr-in/main/src/router";
import {strategy, telegram_ik} from "../links";

const data             = ref(null)
const filter           = ref()
const loading          = ref(false);
const perPage          = 7;
const search_initiated = ref(false)

async function search() {
    try {
        loading.value = true;

        const response         = await fetch(
            import.meta.env.VITE_API_URL
            + '/search/commission'
            + ('?query=' + encodeURIComponent('%' + (filter.value) + '%'))
        )
        search_initiated.value = true;
        data.value             = await response.json()
        loading.value          = false;
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
        let params            = (new URL(document.location.href)).searchParams;
        filter.value          = params.has('query') ? params.get('query') : ''

        onBeforeRouteUpdate((to, from, next) => {
            filter.value = params.has('query') ? params.get('query') : ''
            next()
        })
        watch(filter, (newValue) => {
            router.push({
                path: '/',
                query: {
                    query: newValue,
                }
            })
            if (!newValue) {
                return
            }
            search()
        })
        const page       = ref(0);
        const list       = computed(() => {
            if (!data.value) {
                return []
            }
            let start = 0
            if (page.value) {
                start = page.value * perPage;
            }
            return data.value.commissions.concat(data.value.members.map(member => {
                return {
                    ...member.commissions[0].commission,
                    info: member.full_name,
                    position: member.commissions[0].position
                }
            })).slice(start, start + perPage);
        })
        const pagesCount = computed(() => {
            if (!data.value) {
                return 0
            }
            return Math.floor((data.value.commissions.length + data.value.members.length) / perPage);
        });
        const view       = ref('list')
        const center     = ref();
        const pagesRange = computed(() => {
            return [...Array(pagesCount.value).keys()]
        })
        const mapInit    = ref(false)
        onMounted(() => {
            search()
        })
        return {
            revealMap() {
                setTimeout(() => {
                    center.value  = [
                        26.005343, 53.131253
                    ];
                    mapInit.value = true
                    document.getElementById("map-tab").scrollIntoView({block: "center", behavior: "smooth"})
                }, 1)
            },
            strategy,
            page,
            center,
            mapInit,
            placeholder,
            filter,
            is_home_address,
            list,
            pagesRange,
            pagesCount,
            view,
            data,
            perPage,
            search,
            telegram_ik,
            search_initiated
        }
    }
})
</script>
