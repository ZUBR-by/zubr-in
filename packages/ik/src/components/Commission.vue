<template>
    <header-view :active="'Кампании'"></header-view>
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
            <img class="block size-100 ik2022-radius-4px" src="/imgs/bnr-1.jpg" alt="">
        </div>
        <img class="promo-banner-cross left" src="/imgs/promo-cross.png">
        <img class="promo-banner-cross right" src="/imgs/promo-cross.png">
    </div>
    <a class="page-sticky-nav flex-row flex-algn-itms-c pdng-b-10px pdng-t-10px pdng-l-5prc pdng-r-5prc">
        <div class="section">
            <svg style="display:block;" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1768_21892)">
                    <path d="M16 7.51254L11.42 12.4915L16 17.4705L14.59 19L8.59 12.4915L14.59 5.98305L16 7.51254Z"
                          fill="#303030"/>
                </g>
                <defs>
                    <clipPath id="clip0_1768_21892">
                        <rect width="24" height="24" fill="white" transform="translate(24 24) rotate(-180)"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="section txt-size-14px txt-color-2 pdng-l-5px" @click="$router.go(-1)">
            Назад
        </div>
    </a>
    <div class="scene" v-if="data">
        <div class="flex-row pdng-50px shadow-type-1 ik2022-radius-4px mil-flex-column-reserve">
            <div class="section size-50 mil-size-100">
                <h1 class="txt-size-24px txt-color-2 txt-ik2022-hdr txt-uppercase">
                    {{ data.commission.name }}
                </h1>
                <p class="mrgn-t-5px">
                    {{ data.commission.description }}
                </p>
                <div class="uik-info-list mrgn-t-15px">
                    <div class="uik-info-unit">
                        <div class="uik-info-unit-name txt-size-14px txt-bold">
                            Адрес:
                        </div>
                        <div class="uik-info-unit-value txt-size-14px txt-lh-1_5em">
                            {{ data.commission.address }}
                        </div>
                    </div>
                    <div class="uik-info-unit">
                        <div class="uik-info-unit-name txt-size-14px txt-bold">
                            Находится в:
                        </div>
                        <div class="uik-info-unit-value txt-size-14px txt-lh-1_5em">
                            г. Гомель, м-н Костюковка, ул. Независимости 2а
                        </div>
                    </div>
                    <div class="uik-info-unit">
                        <div class="uik-info-unit-value txt-size-24px txt-bold txt-lh-1_5em txt-ik2022-hdr">
                            {{ data.commission.code }}
                        </div>
                    </div>
                    <div class="uik-info-unit">
                        <div class="uik-info-unit-name txt-size-14px txt-bold">
                            Вышестоящая комиссия:
                        </div>
                        <div class="uik-info-unit-value txt-size-14px txt-lh-1_5em">
                            <a class="blue-link txt-underline-inline"
                               :href="'/commission/' + data.commission.parent.id">
                                {{ data.commission.parent.name }}
                            </a>
                        </div>
                    </div>
                </div>
                <a class="journal-2022-button black inline-flex flex-algn-itms-c mrgn-t-30px" href="#">
                    <div class="section pdng-l-10px">
                        Напечатать листовку
                    </div>
                    <div class="section pdng-l-10px pdng-r-5px">
                        <svg style="margin:-6px 0" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M18 1H6C3.79086 1 2 2.79086 2 5V20C2 22.2091 3.79086 24 6 24H18C20.2091 24 22 22.2091 22 20V5C22 2.79086 20.2091 1 18 1ZM4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V5ZM13 5H7C6.45 5 6 5.45 6 6V12C6 12.55 6.45 13 7 13H13C13.55 13 14 12.55 14 12V6C14 5.45 13.55 5 13 5ZM10 6.375C10.62 6.375 11.125 6.88 11.125 7.5C11.125 8.12 10.62 8.625 10 8.625C9.38 8.625 8.875 8.12 8.875 7.5C8.875 6.88 9.38 6.375 10 6.375ZM7.5 11.5V10.75C7.5 9.915 9.165 9.5 10 9.5C10.835 9.5 12.5 9.915 12.5 10.75V11.5H7.5ZM17 15H6V14H17V15ZM17 17H6V16H17V17ZM13 19H6V18H13V19Z"
                                  fill="#303030"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div class="section size-50 mil-size-100">
                <div class="map-wrp committee-view">
                    <location :feature="data.commission.geometry"></location>
                </div>
            </div>
        </div>
    </div>
    <div class="scene" v-if="data">
        <h2 class="txt-size-34px txt-bold">
            Члены комиссии
        </h2>
        <div class="flex-row flex-algn-itms-c mrgn-t-20px mrgn-b-10px">
            <div class="section pdng-r-10px">
                <img src="/imgs/users_icon.svg" alt="">
            </div>
            <div class="section txt-size-14px txt-bold">
                <p>
                    Руководители комиссии
                </p>
            </div>
        </div>
        <div class="uik-persons flex-row flex-wrap">
            <div class="uik-persons-unit-wrp size-25 pdng-15px mil-size-100" v-for="item of list">
                <div class="uik-persons-unit pdng-15px shadow-type-1 ik2022-radius-4px">
                    <div class="uik-persons-photo-and-marks-wrp flex-row">
                        <div class="uik-persons-photo section size-50">
                            <img :src="item.member.person.photo_url || '/imgs/person_photo_placeholder.svg'"
                                 alt=""
                                 style="max-width: 120px">
                        </div>
                        <div class="section size-50 flex-column">
                            <div class="flex-algn-slf-e mrgn-b-10px" v-if="false">
                                <img src="/imgs/tag/2022.svg" alt="2022">
                            </div>
                            <div class="flex-algn-slf-e mrgn-b-10px">
                                <img src="/imgs/tag/new.svg" alt="новый">
                            </div>
                        </div>
                    </div>
                    <div class="pdng-t-10px" v-if="item.position === 'председатель комиссии'">
                        <img src="/imgs/tag/chairman.svg" alt="председатель">
                    </div>
                    <h3 class="txt-size-24px txt-bold mrgn-b-20px txt-uppercase txt-ik2022-hdr">
                        <router-link :to="{name: 'member', params: {id: item.member.id }}">
                            {{ item.member.person.full_name }}
                        </router-link>
                    </h3>
                    <div class="uik-persons-marks flex-row flex-wrap mrgn-b-15px">
                        <div class="uik-persons-marks-unit mrgn-r-15px"
                             v-if="item.member.person.extra.member_foreign_id">
                            <img src="/imgs/tag/2020.svg" alt="опыт 2020">
                        </div>
                        <div class="uik-persons-marks-unit mrgn-r-15px">
                            <img src="/imgs/tag/violations.svg" alt="нарушения">
                        </div>
                        <div class="uik-persons-marks-unit mrgn-r-15px">
                            <img src="/imgs/tag/falsifications.svg" alt="фальсификации">
                        </div>
                    </div>
                    <div class="uik-persons-info txt-size-14px">
                        <div class="uik-info-unit">
                            <div class="uik-info-unit-name txt-bold">
                                Должность в комиссии:
                            </div>
                            <div class="uik-info-unit-value">
                                {{ item.position }}
                            </div>
                        </div>
                        <div class="uik-info-unit">
                            <div class="uik-info-unit-name txt-bold">
                                Выдвинут(a):
                            </div>
                            <div class="uik-info-unit-value">
                                <div class="uik-info-unit-value">
                                    <a class="blue-link txt-underline-inline"
                                       :href="'https://zubr.in/organization/' + item.referral_id"
                                       v-if="item.referral_id">
                                        {{ item.referral_notes }}
                                    </a>
                                    <template v-else>
                                        {{ item.referral_notes }}
                                    </template>
                                </div>
                            </div>
                        </div>
                        <template v-if="item.member.person.organizations.length > 0">
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Должность:
                                </div>
                                <div class="uik-info-unit-value">
                                    {{ item.member.person.organizations[0].position }}
                                </div>
                            </div>
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Работодатель:
                                </div>
                                <div class="uik-info-unit-value">
                                    <a class="blue-link txt-underline-inline"
                                       :href="'https://zubr.in/organization/' + item.member.person.organizations[0].organization.id">
                                        {{ item.member.person.organizations[0].organization.name }}
                                    </a>
                                </div>
                            </div>
                        </template>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="scene">
        <h2 class="txt-size-34px txt-bold txt-ik2022-hdr txt-uppercase">
            Кто может оказывать давление на комиссию
        </h2>
        <template v-if="data && data.commission.parent">
            <div class="mrgn-t-20px mrgn-b-10px">
                <router-link class="txt-underline-inline"
                             :to="{name: 'commission', params: {id: data.commission.parent.id}}">
                    Вышестоящая комиссия
                </router-link>
            </div>
            <div class="uik-persons flex-row flex-wrap">
                <div class="uik-persons-unit-wrp size-25 pdng-15px mil-size-100"
                     v-for="item of data.commission.parent.members">
                    <div class="uik-persons-unit pdng-15px shadow-type-1 ik2022-radius-4px">
                        <div class="uik-persons-photo-and-marks-wrp flex-row">
                            <div class="uik-persons-photo section size-50">
                                <img :src="item.member.person.photo_url || '/imgs/person_photo_placeholder.svg'"
                                     alt=""
                                     style="max-width: 120px">
                            </div>
                            <div class="section size-50 flex-column">
                                <div class="flex-algn-slf-e mrgn-b-10px" v-if="false">
                                    <img src="/imgs/tag/2022.svg" alt="2022">
                                </div>
                                <div class="flex-algn-slf-e mrgn-b-10px">
                                    <img src="/imgs/tag/new.svg" alt="новый">
                                </div>
                            </div>
                        </div>
                        <div class="pdng-t-10px" v-if="item.position === 'председатель комиссии'">
                            <img src="/imgs/tag/chairman.svg" alt="председатель">
                        </div>
                        <h3 class="txt-size-24px txt-bold mrgn-b-20px txt-uppercase txt-ik2022-hdr">
                            <router-link :to="{name: 'member', params: {id: item.member.id }}">
                                {{ item.member.person.full_name }}
                            </router-link>
                        </h3>
                        <div class="uik-persons-marks flex-row flex-wrap mrgn-b-15px">
                            <div class="uik-persons-marks-unit mrgn-r-15px"
                                 v-if="item.member.person.extra.member_foreign_id">
                                <img src="/imgs/tag/2020.svg" alt="опыт 2020">
                            </div>
                            <div class="uik-persons-marks-unit mrgn-r-15px">
                                <img src="/imgs/tag/violations.svg" alt="нарушения">
                            </div>
                            <div class="uik-persons-marks-unit mrgn-r-15px">
                                <img src="/imgs/tag/falsifications.svg" alt="фальсификации">
                            </div>
                        </div>
                        <div class="uik-persons-info txt-size-14px">
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Комиссия:
                                </div>
                                <div class="uik-info-unit-value">
                                    <router-link class="blue-link txt-underline-inline"
                                                 :to="{name: 'commission', params: {id: data.commission.parent.id}}">
                                        {{ data.commission.parent.name }}
                                    </router-link>
                                </div>
                            </div>
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Должность в комиссии:
                                </div>
                                <div class="uik-info-unit-value">
                                    {{ item.position }}
                                </div>
                            </div>
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Выдвинут(a):
                                </div>
                                <div class="uik-info-unit-value">
                                    <a class="blue-link txt-underline-inline"
                                       :href="'https://zubr.in/organization/' + item.referral_id"
                                       v-if="item.referral_id">
                                        {{ item.referral_notes }}
                                    </a>
                                    <template v-else>
                                        {{ item.referral_notes }}
                                    </template>
                                </div>
                            </div>
                            <template v-if="item.member.person.organizations.length > 0">
                                <div class="uik-info-unit">
                                    <div class="uik-info-unit-name txt-bold">
                                        Должность:
                                    </div>
                                    <div class="uik-info-unit-value">
                                        {{ item.member.person.organizations[0].position }}
                                    </div>
                                </div>
                                <div class="uik-info-unit">
                                    <div class="uik-info-unit-name txt-bold">
                                        Работодатель:
                                    </div>
                                    <div class="uik-info-unit-value">
                                        <a class="blue-link txt-underline-inline"
                                           :href="'https://zubr.in/organization/' + item.member.person.organizations[0].organization.id">
                                            {{ item.member.person.organizations[0].organization.name }}
                                        </a>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="curators_local.length > 0 || curators_ideolog.length">
            <div class="mrgn-t-50px mrgn-b-10px">
                Местные власти
            </div>
            <div class="uik-persons flex-row flex-wrap">
                <div class="uik-persons-unit-wrp size-25 pdng-15px mil-size-100" v-for="item of curators_local">
                    <div class="uik-persons-unit pdng-15px shadow-type-1 ik2022-radius-4px">
                        <div class="uik-persons-photo-and-marks-wrp flex-row">
                            <div class="uik-persons-photo section size-50">
                                <img :src="item.curator.person.photo_url || '/imgs/person_photo_placeholder.svg'"
                                     alt=""
                                     style="max-width: 120px">
                            </div>
                        </div>
                        <h3 class="txt-size-24px txt-bold mrgn-b-20px txt-uppercase txt-ik2022-hdr">
                            {{ item.curator.person.full_name }}
                        </h3>
                        <div class="uik-persons-marks flex-row flex-wrap mrgn-b-15px">
                            <div class="uik-persons-marks-unit mrgn-r-15px">
                                <svg width="95" height="24" viewBox="0 0 95 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="93" height="22" rx="3" fill="white" stroke="#303030"
                                          stroke-width="2"/>
                                    <path
                                        d="M16.0739 17.168C15.0565 17.168 14.1372 16.9487 13.3159 16.51C12.5039 16.0713 11.8645 15.4693 11.3979 14.704C10.9405 13.9293 10.7119 13.0613 10.7119 12.1C10.7119 11.1387 10.9405 10.2753 11.3979 9.51C11.8645 8.73533 12.5039 8.12867 13.3159 7.69C14.1372 7.25133 15.0565 7.032 16.0739 7.032C17.0912 7.032 18.0059 7.25133 18.8179 7.69C19.6299 8.12867 20.2692 8.73533 20.7359 9.51C21.2025 10.2753 21.4359 11.1387 21.4359 12.1C21.4359 13.0613 21.2025 13.9293 20.7359 14.704C20.2692 15.4693 19.6299 16.0713 18.8179 16.51C18.0059 16.9487 17.0912 17.168 16.0739 17.168ZM16.0739 15.236C16.6525 15.236 17.1752 15.1053 17.6419 14.844C18.1085 14.5733 18.4725 14.2 18.7339 13.724C19.0045 13.248 19.1399 12.7067 19.1399 12.1C19.1399 11.4933 19.0045 10.952 18.7339 10.476C18.4725 10 18.1085 9.63133 17.6419 9.37C17.1752 9.09933 16.6525 8.964 16.0739 8.964C15.4952 8.964 14.9725 9.09933 14.5059 9.37C14.0392 9.63133 13.6705 10 13.3999 10.476C13.1385 10.952 13.0079 11.4933 13.0079 12.1C13.0079 12.7067 13.1385 13.248 13.3999 13.724C13.6705 14.2 14.0392 14.5733 14.5059 14.844C14.9725 15.1053 15.4952 15.236 16.0739 15.236ZM29.805 9.468V17H27.621V11.26H24.485V17H22.315V9.468H29.805ZM35.161 11.876C36.141 11.8853 36.883 12.1047 37.387 12.534C37.891 12.9633 38.143 13.5793 38.143 14.382C38.143 15.222 37.8584 15.8707 37.289 16.328C36.7197 16.7853 35.9124 17.014 34.867 17.014L31.199 17V9.468H33.369V11.876H35.161ZM38.955 9.468H41.125V17H38.955V9.468ZM34.671 15.46C35.091 15.4693 35.413 15.3807 35.637 15.194C35.861 15.0073 35.973 14.7273 35.973 14.354C35.973 13.99 35.861 13.724 35.637 13.556C35.4224 13.388 35.1004 13.2993 34.671 13.29L33.369 13.276V15.46H34.671ZM48.8583 11.26H46.3103V17H44.1403V11.26H41.5923V9.468H48.8583V11.26ZM59.4053 15.152V17H51.9993V15.53L55.7793 11.96C56.1806 11.5773 56.4513 11.2507 56.5913 10.98C56.7313 10.7 56.8013 10.4247 56.8013 10.154C56.8013 9.762 56.666 9.46333 56.3953 9.258C56.134 9.04333 55.7466 8.936 55.2333 8.936C54.804 8.936 54.4166 9.02 54.0713 9.188C53.726 9.34667 53.4366 9.58933 53.2033 9.916L51.5513 8.852C51.934 8.28267 52.4613 7.83933 53.1333 7.522C53.8053 7.19533 54.5753 7.032 55.4433 7.032C56.1713 7.032 56.806 7.15333 57.3473 7.396C57.898 7.62933 58.3226 7.96533 58.6213 8.404C58.9293 8.83333 59.0833 9.342 59.0833 9.93C59.0833 10.462 58.9713 10.9613 58.7473 11.428C58.5233 11.8947 58.0893 12.4267 57.4453 13.024L55.1913 15.152H59.4053ZM63.8138 17.168C63.0018 17.168 62.2784 16.9673 61.6438 16.566C61.0091 16.1647 60.5098 15.586 60.1458 14.83C59.7911 14.0647 59.6138 13.1547 59.6138 12.1C59.6138 11.0453 59.7911 10.14 60.1458 9.384C60.5098 8.61867 61.0091 8.03533 61.6438 7.634C62.2784 7.23267 63.0018 7.032 63.8138 7.032C64.6258 7.032 65.3491 7.23267 65.9838 7.634C66.6184 8.03533 67.1131 8.61867 67.4678 9.384C67.8318 10.14 68.0138 11.0453 68.0138 12.1C68.0138 13.1547 67.8318 14.0647 67.4678 14.83C67.1131 15.586 66.6184 16.1647 65.9838 16.566C65.3491 16.9673 64.6258 17.168 63.8138 17.168ZM63.8138 15.25C64.4111 15.25 64.8778 14.9933 65.2138 14.48C65.5591 13.9667 65.7318 13.1733 65.7318 12.1C65.7318 11.0267 65.5591 10.2333 65.2138 9.72C64.8778 9.20667 64.4111 8.95 63.8138 8.95C63.2258 8.95 62.7591 9.20667 62.4138 9.72C62.0778 10.2333 61.9098 11.0267 61.9098 12.1C61.9098 13.1733 62.0778 13.9667 62.4138 14.48C62.7591 14.9933 63.2258 15.25 63.8138 15.25ZM75.6557 15.152V17H68.2497V15.53L72.0297 11.96C72.431 11.5773 72.7017 11.2507 72.8417 10.98C72.9817 10.7 73.0517 10.4247 73.0517 10.154C73.0517 9.762 72.9164 9.46333 72.6457 9.258C72.3844 9.04333 71.997 8.936 71.4837 8.936C71.0544 8.936 70.667 9.02 70.3217 9.188C69.9764 9.34667 69.687 9.58933 69.4537 9.916L67.8017 8.852C68.1844 8.28267 68.7117 7.83933 69.3837 7.522C70.0557 7.19533 70.8257 7.032 71.6937 7.032C72.4217 7.032 73.0564 7.15333 73.5977 7.396C74.1484 7.62933 74.573 7.96533 74.8717 8.404C75.1797 8.83333 75.3337 9.342 75.3337 9.93C75.3337 10.462 75.2217 10.9613 74.9977 11.428C74.7737 11.8947 74.3397 12.4267 73.6957 13.024L71.4417 15.152H75.6557ZM80.0642 17.168C79.2522 17.168 78.5288 16.9673 77.8942 16.566C77.2595 16.1647 76.7602 15.586 76.3962 14.83C76.0415 14.0647 75.8642 13.1547 75.8642 12.1C75.8642 11.0453 76.0415 10.14 76.3962 9.384C76.7602 8.61867 77.2595 8.03533 77.8942 7.634C78.5288 7.23267 79.2522 7.032 80.0642 7.032C80.8762 7.032 81.5995 7.23267 82.2342 7.634C82.8688 8.03533 83.3635 8.61867 83.7182 9.384C84.0822 10.14 84.2642 11.0453 84.2642 12.1C84.2642 13.1547 84.0822 14.0647 83.7182 14.83C83.3635 15.586 82.8688 16.1647 82.2342 16.566C81.5995 16.9673 80.8762 17.168 80.0642 17.168ZM80.0642 15.25C80.6615 15.25 81.1282 14.9933 81.4642 14.48C81.8095 13.9667 81.9822 13.1733 81.9822 12.1C81.9822 11.0267 81.8095 10.2333 81.4642 9.72C81.1282 9.20667 80.6615 8.95 80.0642 8.95C79.4762 8.95 79.0095 9.20667 78.6642 9.72C78.3282 10.2333 78.1602 11.0267 78.1602 12.1C78.1602 13.1733 78.3282 13.9667 78.6642 14.48C79.0095 14.9933 79.4762 15.25 80.0642 15.25Z"
                                        fill="black"/>
                                </svg>
                            </div>
                            <div class="uik-persons-marks-unit mrgn-r-15px">
                                <svg width="104" height="24" viewBox="0 0 104 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="102" height="22" rx="3" fill="white" stroke="#FF5959"
                                          stroke-width="2"/>
                                    <path
                                        d="M20.4835 7.2V17H18.2155V12.982H13.7635V17H11.4955V7.2H13.7635V11.064H18.2155V7.2H20.4835ZM24.9969 9.356C26.1636 9.356 27.0596 9.636 27.6849 10.196C28.3102 10.7467 28.6229 11.582 28.6229 12.702V17H26.5789V16.062C26.1682 16.762 25.4029 17.112 24.2829 17.112C23.7042 17.112 23.2002 17.014 22.7709 16.818C22.3509 16.622 22.0289 16.3513 21.8049 16.006C21.5809 15.6607 21.4689 15.2687 21.4689 14.83C21.4689 14.13 21.7302 13.5793 22.2529 13.178C22.7849 12.7767 23.6016 12.576 24.7029 12.576H26.4389C26.4389 12.1 26.2942 11.736 26.0049 11.484C25.7156 11.2227 25.2816 11.092 24.7029 11.092C24.3016 11.092 23.9049 11.1573 23.5129 11.288C23.1302 11.4093 22.8036 11.5773 22.5329 11.792L21.7489 10.266C22.1596 9.97667 22.6496 9.75267 23.2189 9.594C23.7976 9.43533 24.3902 9.356 24.9969 9.356ZM24.8289 15.642C25.2022 15.642 25.5336 15.558 25.8229 15.39C26.1122 15.2127 26.3176 14.956 26.4389 14.62V13.85H24.9409C24.0449 13.85 23.5969 14.144 23.5969 14.732C23.5969 15.012 23.7042 15.236 23.9189 15.404C24.1429 15.5627 24.4462 15.642 24.8289 15.642ZM34.2581 9.356C34.9581 9.356 35.5928 9.51933 36.1621 9.846C36.7408 10.1633 37.1935 10.616 37.5201 11.204C37.8468 11.7827 38.0101 12.4593 38.0101 13.234C38.0101 14.0087 37.8468 14.69 37.5201 15.278C37.1935 15.8567 36.7408 16.3093 36.1621 16.636C35.5928 16.9533 34.9581 17.112 34.2581 17.112C33.2968 17.112 32.5408 16.8087 31.9901 16.202V19.716H29.8061V9.468H31.8921V10.336C32.4335 9.68267 33.2221 9.356 34.2581 9.356ZM33.8801 15.32C34.4401 15.32 34.8975 15.1333 35.2521 14.76C35.6161 14.3773 35.7981 13.8687 35.7981 13.234C35.7981 12.5993 35.6161 12.0953 35.2521 11.722C34.8975 11.3393 34.4401 11.148 33.8801 11.148C33.3201 11.148 32.8581 11.3393 32.4941 11.722C32.1395 12.0953 31.9621 12.5993 31.9621 13.234C31.9621 13.8687 32.1395 14.3773 32.4941 14.76C32.8581 15.1333 33.3201 15.32 33.8801 15.32ZM46.1817 9.468L42.7797 17.462C42.4344 18.33 42.0051 18.9413 41.4917 19.296C40.9877 19.6507 40.3764 19.828 39.6577 19.828C39.2657 19.828 38.8784 19.7673 38.4957 19.646C38.1131 19.5247 37.8004 19.3567 37.5577 19.142L38.3557 17.588C38.5237 17.7373 38.7151 17.854 38.9297 17.938C39.1537 18.022 39.3731 18.064 39.5877 18.064C39.8864 18.064 40.1291 17.9893 40.3157 17.84C40.5024 17.7 40.6704 17.462 40.8197 17.126L40.8477 17.056L37.5857 9.468H39.8397L41.9537 14.578L44.0817 9.468H46.1817ZM58.0294 9.468V17H46.5354V9.468H48.7054V15.208H51.2114V9.468H53.3814V15.208H55.8594V9.468H58.0294ZM66.7472 13.262C66.7472 13.29 66.7332 13.486 66.7052 13.85H61.0072C61.1099 14.3167 61.3525 14.6853 61.7352 14.956C62.1179 15.2267 62.5939 15.362 63.1632 15.362C63.5552 15.362 63.9005 15.306 64.1992 15.194C64.5072 15.0727 64.7919 14.886 65.0532 14.634L66.2152 15.894C65.5059 16.706 64.4699 17.112 63.1072 17.112C62.2579 17.112 61.5065 16.9487 60.8532 16.622C60.1999 16.286 59.6959 15.824 59.3412 15.236C58.9865 14.648 58.8092 13.9807 58.8092 13.234C58.8092 12.4967 58.9819 11.834 59.3272 11.246C59.6819 10.6487 60.1625 10.1867 60.7692 9.86C61.3852 9.524 62.0712 9.356 62.8272 9.356C63.5645 9.356 64.2319 9.51467 64.8292 9.832C65.4265 10.1493 65.8932 10.6067 66.2292 11.204C66.5745 11.792 66.7472 12.478 66.7472 13.262ZM62.8412 11.008C62.3465 11.008 61.9312 11.148 61.5952 11.428C61.2592 11.708 61.0539 12.0907 60.9792 12.576H64.6892C64.6145 12.1 64.4092 11.722 64.0732 11.442C63.7372 11.1527 63.3265 11.008 62.8412 11.008ZM67.7213 9.468H69.8913V12.408H73.1673V9.468H75.3513V17H73.1673V14.186H69.8913V17H67.7213V9.468ZM76.742 9.468H78.912V13.948L82.58 9.468H84.582V17H82.412V12.52L78.758 17H76.742V9.468ZM92.6734 9.468V17H90.7274V14.844H89.1174L87.6894 17H85.3654L87.0874 14.536C86.5648 14.3307 86.1634 14.0367 85.8834 13.654C85.6128 13.262 85.4774 12.7907 85.4774 12.24C85.4774 11.3533 85.7948 10.672 86.4294 10.196C87.0734 9.71067 87.9554 9.468 89.0754 9.468H92.6734ZM89.1174 11.246C88.6508 11.246 88.2961 11.33 88.0534 11.498C87.8201 11.666 87.7034 11.9367 87.7034 12.31C87.7034 12.6833 87.8154 12.9587 88.0394 13.136C88.2728 13.304 88.6228 13.388 89.0894 13.388H90.7274V11.246H89.1174Z"
                                        fill="black"/>
                                </svg>
                            </div>
                            <div class="uik-persons-marks-unit mrgn-r-15px">
                                <svg width="139" height="24" viewBox="0 0 139 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="137" height="22" rx="3" fill="white" stroke="#FF5959"
                                          stroke-width="2"/>
                                    <path
                                        d="M23.2095 12.072C23.2095 13.3693 22.7662 14.3913 21.8795 15.138C21.0022 15.8753 19.7375 16.286 18.0855 16.37V17.434H15.9995V16.356C14.3382 16.2627 13.0642 15.8473 12.1775 15.11C11.3002 14.3633 10.8615 13.3507 10.8615 12.072C10.8615 10.784 11.3002 9.776 12.1775 9.048C13.0642 8.31067 14.3382 7.89067 15.9995 7.788V6.78H18.0855V7.774C19.7375 7.86733 21.0022 8.28733 21.8795 9.034C22.7662 9.78067 23.2095 10.7933 23.2095 12.072ZM18.0855 14.592C19.0749 14.4987 19.8122 14.2467 20.2975 13.836C20.7829 13.416 21.0255 12.8233 21.0255 12.058C21.0255 10.5647 20.0455 9.734 18.0855 9.566V14.592ZM13.0595 12.072C13.0595 13.5467 14.0395 14.3867 15.9995 14.592V9.566C15.0009 9.65933 14.2589 9.91133 13.7735 10.322C13.2975 10.7233 13.0595 11.3067 13.0595 12.072ZM26.9643 9.356C28.1309 9.356 29.0269 9.636 29.6523 10.196C30.2776 10.7467 30.5903 11.582 30.5903 12.702V17H28.5463V16.062C28.1356 16.762 27.3703 17.112 26.2503 17.112C25.6716 17.112 25.1676 17.014 24.7383 16.818C24.3183 16.622 23.9963 16.3513 23.7723 16.006C23.5483 15.6607 23.4363 15.2687 23.4363 14.83C23.4363 14.13 23.6976 13.5793 24.2203 13.178C24.7523 12.7767 25.5689 12.576 26.6703 12.576H28.4063C28.4063 12.1 28.2616 11.736 27.9723 11.484C27.6829 11.2227 27.2489 11.092 26.6703 11.092C26.2689 11.092 25.8723 11.1573 25.4803 11.288C25.0976 11.4093 24.7709 11.5773 24.5003 11.792L23.7163 10.266C24.1269 9.97667 24.6169 9.75267 25.1863 9.594C25.7649 9.43533 26.3576 9.356 26.9643 9.356ZM26.7963 15.642C27.1696 15.642 27.5009 15.558 27.7903 15.39C28.0796 15.2127 28.2849 14.956 28.4063 14.62V13.85H26.9083C26.0123 13.85 25.5643 14.144 25.5643 14.732C25.5643 15.012 25.6716 15.236 25.8863 15.404C26.1103 15.5627 26.4136 15.642 26.7963 15.642ZM39.0115 9.468V17H36.8275V11.26H34.4475L34.3775 12.59C34.3402 13.5793 34.2468 14.4007 34.0975 15.054C33.9482 15.7073 33.7055 16.2207 33.3695 16.594C33.0335 16.9673 32.5668 17.154 31.9695 17.154C31.6522 17.154 31.2742 17.098 30.8355 16.986L30.9475 15.194C31.0968 15.2127 31.2042 15.222 31.2695 15.222C31.5962 15.222 31.8388 15.1053 31.9975 14.872C32.1655 14.6293 32.2775 14.326 32.3335 13.962C32.3895 13.5887 32.4315 13.0987 32.4595 12.492L32.5715 9.468H39.0115ZM44.4857 11.876C45.4657 11.8853 46.2171 12.1093 46.7397 12.548C47.2624 12.9773 47.5237 13.5887 47.5237 14.382C47.5237 15.2127 47.2297 15.8613 46.6417 16.328C46.0631 16.7853 45.2464 17.014 44.1917 17.014L40.4117 17V9.468H42.5817V11.876H44.4857ZM43.9957 15.46C44.4157 15.4693 44.7377 15.3807 44.9617 15.194C45.1857 15.0073 45.2977 14.7273 45.2977 14.354C45.2977 13.99 45.1857 13.724 44.9617 13.556C44.7471 13.388 44.4251 13.2993 43.9957 13.29L42.5817 13.276V15.46H43.9957ZM51.7723 17.112C50.9696 17.112 50.2463 16.9487 49.6023 16.622C48.9676 16.286 48.4683 15.824 48.1043 15.236C47.7496 14.648 47.5723 13.9807 47.5723 13.234C47.5723 12.4873 47.7496 11.82 48.1043 11.232C48.4683 10.644 48.9676 10.1867 49.6023 9.86C50.2463 9.524 50.9696 9.356 51.7723 9.356C52.5656 9.356 53.2563 9.524 53.8443 9.86C54.4416 10.1867 54.8756 10.658 55.1463 11.274L53.4523 12.184C53.0603 11.4933 52.4956 11.148 51.7583 11.148C51.1889 11.148 50.7176 11.3347 50.3443 11.708C49.9709 12.0813 49.7843 12.59 49.7843 13.234C49.7843 13.878 49.9709 14.3867 50.3443 14.76C50.7176 15.1333 51.1889 15.32 51.7583 15.32C52.5049 15.32 53.0696 14.9747 53.4523 14.284L55.1463 15.208C54.8756 15.8053 54.4416 16.272 53.8443 16.608C53.2563 16.944 52.5656 17.112 51.7723 17.112ZM55.7734 9.468H57.9434V13.948L61.6114 9.468H63.6134V17H61.4434V12.52L57.7894 17H55.7734V9.468ZM75.4149 13.206C75.4149 14.3727 75.0229 15.2967 74.2389 15.978C73.4642 16.65 72.3536 17.0373 70.9069 17.14V19.716H68.9049V17.14C67.4582 17.0373 66.3429 16.6547 65.5589 15.992C64.7842 15.32 64.3969 14.3913 64.3969 13.206C64.3969 12.0393 64.7796 11.134 65.5449 10.49C66.3196 9.846 67.4396 9.47267 68.9049 9.37V6.612H70.9069V9.37C72.3536 9.47267 73.4642 9.85067 74.2389 10.504C75.0229 11.1573 75.4149 12.058 75.4149 13.206ZM66.5109 13.206C66.5109 13.878 66.7022 14.396 67.0849 14.76C67.4676 15.124 68.0742 15.3527 68.9049 15.446V11.064C68.0742 11.148 67.4676 11.3673 67.0849 11.722C66.7022 12.0673 66.5109 12.562 66.5109 13.206ZM70.9069 15.446C71.7376 15.3527 72.3442 15.124 72.7269 14.76C73.1189 14.396 73.3149 13.878 73.3149 13.206C73.3149 12.562 73.1189 12.0673 72.7269 11.722C72.3442 11.3673 71.7376 11.148 70.9069 11.064V15.446ZM76.1938 9.468H78.3638V13.948L82.0318 9.468H84.0338V17H81.8638V12.52L78.2098 17H76.1938V9.468ZM88.7512 14.144H87.6172V17H85.4332V9.468H87.6172V12.394H88.7932L90.8372 9.468H93.1612L90.5292 13.08L93.3432 17H90.7672L88.7512 14.144ZM96.5049 9.356C97.6716 9.356 98.5676 9.636 99.1929 10.196C99.8182 10.7467 100.131 11.582 100.131 12.702V17H98.0869V16.062C97.6762 16.762 96.9109 17.112 95.7909 17.112C95.2122 17.112 94.7082 17.014 94.2789 16.818C93.8589 16.622 93.5369 16.3513 93.3129 16.006C93.0889 15.6607 92.9769 15.2687 92.9769 14.83C92.9769 14.13 93.2382 13.5793 93.7609 13.178C94.2929 12.7767 95.1096 12.576 96.2109 12.576H97.9469C97.9469 12.1 97.8022 11.736 97.5129 11.484C97.2236 11.2227 96.7896 11.092 96.2109 11.092C95.8096 11.092 95.4129 11.1573 95.0209 11.288C94.6382 11.4093 94.3116 11.5773 94.0409 11.792L93.2569 10.266C93.6676 9.97667 94.1576 9.75267 94.7269 9.594C95.3056 9.43533 95.8982 9.356 96.5049 9.356ZM96.3369 15.642C96.7102 15.642 97.0416 15.558 97.3309 15.39C97.6202 15.2127 97.8256 14.956 97.9469 14.62V13.85H96.4489C95.5529 13.85 95.1049 14.144 95.1049 14.732C95.1049 15.012 95.2122 15.236 95.4269 15.404C95.6509 15.5627 95.9542 15.642 96.3369 15.642ZM109.812 15.208V18.652H107.782V17H101.328V9.468H103.498V15.208H106.536V9.468H108.72V15.208H109.812ZM110.486 9.468H112.656V13.948L116.324 9.468H118.326V17H116.156V12.52L112.502 17H110.486V9.468ZM119.725 9.468H121.895V13.948L125.563 9.468H127.565V17H125.395V12.52L121.741 17H119.725V9.468Z"
                                        fill="#FF5959"/>
                                </svg>
                            </div>
                        </div>
                        <div class="uik-persons-info txt-size-14px">
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Должность:
                                </div>
                                <div class="uik-info-unit-value">
                                    {{ item.curator.extra.position }}
                                </div>
                            </div>
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Работодатель:
                                </div>
                                <div class="uik-info-unit-value">
                                    {{ item.curator.extra.work }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uik-persons-unit-wrp size-25 pdng-15px mil-size-100" v-for="item of curators_ideolog">
                    <div class="uik-persons-unit pdng-15px shadow-type-1 ik2022-radius-4px">
                        <div class="uik-persons-photo-and-marks-wrp flex-row">
                            <div class="uik-persons-photo section size-50">
                                <img :src="item.curator.person.photo_url || '/imgs/person_photo_placeholder.svg'"
                                     alt=""
                                     style="max-width: 120px">
                            </div>
                        </div>
                        <h3 class="txt-size-24px txt-bold mrgn-b-20px txt-uppercase txt-ik2022-hdr">
                            {{ item.curator.person.full_name }}
                        </h3>
                        <div class="uik-persons-info txt-size-14px">
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Должность:
                                </div>
                                <div class="uik-info-unit-value">
                                    {{ item.curator.person.organizations[0].position }}
                                </div>
                            </div>
                            <div class="uik-info-unit">
                                <div class="uik-info-unit-name txt-bold">
                                    Работодатель:
                                </div>
                                <div class="uik-info-unit-value">
                                    <a class="blue-link txt-underline-inline" href="#">
                                        {{ item.curator.person.organizations[0].organization.name }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
    <div class="scene" style="background:#FF5959">
        <img class="red-block-line top" style="height:60px" src="/imgs/crpline-3.png" alt="">
        <img class="red-block-line bottom" style="height:60px" src="/imgs/crpline-3.png" alt="">
        <div class="white-box shadow-type-1 size-50 pdng-50px ik2022-radius-4px mil-size-100">
            <h3 class="txt-size-34px txt-bold mrgn-b-30px">
                Если вас назначили в избирательную комиссию
            </h3>
            <p class="txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                «Референдум» – это преступление в котором вас принуждают принять участие. Только вы сами решаете: быть
                соучастником или честным свидетелем.
            </p>
            <p class="txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Если вы готовы сделать посильный вклад в протводействие фальсфикации и вместе с другими честным членами
                комиссий зафиксировать все беззаконие на которое вас толкают &mdash; <b>свяжитесь с нашими волонтерами
                через
                безопасный чат в телеграм</b>:
            </p>
            <a class="inline-block mrgn-t-30px" :href="telegram_ik">
                <img src="/imgs/telegram_button.svg" alt="перейти в телеграм">
            </a>
        </div>
        <img class="promo-white-cross tl" src="/imgs/promo-cross-white.png" alt="">
        <img class="promo-white-cross tr" src="/imgs/promo-cross-white.png" alt="">
        <img class="promo-white-cross bl" src="/imgs/promo-cross-white.png" alt="">
        <img class="promo-white-cross br" src="/imgs/promo-cross-white.png" alt="">
    </div>
    <div class="scene"></div>
</template>
<script>
import Header from './Header.vue';
import {computed, defineComponent, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import {ElImage} from 'element-plus';
import Location from '@zubr-in/main/src/components/Point.vue'
import {formatDateCampaign} from "@zubr-in/main/src/date";
import {strategy, telegram_ik} from "../links";

const data = ref(null)

const map = {
    ELECTION_COMMISSION_PRECINCT_PRESIDENTIAL_2020: 'Участковая',
    ELECTION_COMMISSION_TERRITORIAL_PRESIDENTIAL_2020: 'Территориальная',
    ELECTION_COMMISSION_TERRITORIAL_PARLIAMENTARY_2019: 'Территориальная',
    ELECTION_COMMISSION_PRECINCT_PARLIAMENTARY_2019: 'Участковая',
    ELECTION_COMMISSION_PRECINCT_LOCAL_2018: 'Участковая',
    ELECTION_COMMISSION_TERRITORIAL_LOCAL_2018: 'Территориальная',
    ELECTION_COMMISSION_CENTRAL: 'Центральная',
}

async function fetchCommission(id) {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/ik/commission/' + id)
        data.value     = await response.json()
    } catch (e) {
        console.error(e);
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

export default defineComponent({
    components: {
        'header-view': Header,
        Location,
        ElImage
    },
    setup() {
        onMounted(async () => {
            const route = useRoute()
            let id      = route.params.id;
            await fetchCommission(id)
            document.title = document.title.replace(' -', ' ' + data.value.commission.name + ' -')
        })
        const curators_local   = computed(() => {
            if (!data.value) {
                return []
            }
            if (!data.value.commission) {
                return [];
            }
            if (data.value.commission.curators.length > 0) {
                return data.value.commission.curators.filter(i => i.position === 'местная власть')
            } else {
                return data.value.commission.parent.curators.filter(i => i.position === 'местная власть')
            }
        })
        const list             = computed(() => {
            if (!data.value) {
                return []
            }

            return data.value.commission.members.sort((a, b) => b.position === 'председатель комиссии' ? 1 : 0)
        })
        const curators_ideolog = computed(() => {
            if (!data.value) {
                return []
            }
            if (!data.value.commission) {
                return [];
            }
            if (data.value.commission.curators.length === 0) {
                return []
            }
            return data.value.commission.curators.filter(i => i.position === 'идеолог')
        })
        return {
            strategy,
            data,
            map,
            list,
            isLater,
            curators_local,
            formatDateCampaign,
            curators_ideolog,
            telegram_ik
        }
    }
})
</script>
<style scoped>
.map-wrp.committee-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #EDEDED;
    border-radius: 30px;
}
</style>
