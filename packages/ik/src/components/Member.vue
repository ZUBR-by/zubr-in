<template>
    <header-view>
    </header-view>
    <template v-if="data && data.member">
        <div class="scene promo-banner flex-row">
            <div class="section size-50 mil-size-100">
                <img class="block size-90 mil-size-100" src="/imgs/promo-txt-1.png" alt="">
                <p class="mrgn-t-30px txt-size-14px">
                    “Референдум” 2022 &mdash; это обман, который нам хотят навязать вместо реальных перемен.
                </p>
                <img class="block size-100 mrgn-t-30px mrgn-b-20px" src="/imgs/initiatives-list.png" alt="">
                <a class="txt-underline-inline" :href="strategy">Подробнее об Единой стратегии демократических сил
                    Беларуси</a>
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
        <div class="scene">
            <div class="flex-row pdng-50px shadow-type-1 ik2022-radius-4px mil-flex-column-reserve mil-pdng-20px">
                <div class="section size-50 mil-size-100">
                    <h1 class="txt-size-24px txt-color-2">
                        {{ data.member.person.full_name }}
                    </h1>
                    <div class="uik-info-list mrgn-t-15px">
                        <div class="uik-info-unit">
                            <div class="uik-info-unit-name txt-bold">
                                Должность в комиссии:
                            </div>
                            <div class="uik-info-unit-value">
                                {{ data.member.commissions[0].position }}
                            </div>
                        </div>
                        <div class="uik-info-unit" v-if="employer">
                            <div class="uik-info-unit-name txt-size-14px txt-bold">
                                Работодатель:
                            </div>
                            <div class="uik-info-unit-value txt-size-14px txt-lh-1_5em">
                                <a class="blue-link txt-underline-inline"
                                   :href="'https://zubr.in/organization/' + employer.organization.id">
                                    {{ employer.organization.name }}
                                </a>
                            </div>
                        </div>
                        <div class="uik-info-unit" v-if="employer">
                            <div class="uik-info-unit-name txt-size-14px txt-bold">
                                Должность:
                            </div>
                            <div class="uik-info-unit-value txt-size-14px txt-lh-1_5em">
                                {{ employer.position }}
                            </div>
                        </div>
                        <div class="uik-info-unit" v-if="referral && referral.referral_id && referral.referral_notes">
                            <div class="uik-info-unit-name txt-size-14px txt-bold">
                                Выдвинут(а):
                            </div>
                            <div class="uik-info-unit-value txt-size-14px txt-lh-1_5em">
                                <a class="blue-link txt-underline-inline"
                                   v-if="referral.referral_id"
                                   :href="'https://zubr.in/organizations/' + referral.referral_id">
                                    {{ referral.referral_notes }}
                                </a>
                                <template v-else>
                                    {{ referral.referral_notes }}
                                </template>
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
                    <img class="size-100" :src="data.member.person.photo_url || '/imgs/person_photo.svg'"
                         alt="">
                </div>
            </div>
            <div
                class="flex-row pdng-50px shadow-type-1 ik2022-radius-4px mil-flex-column-reserve mil-pdng-20px mrgn-t-40px"
                v-if="commission">
                <div class="section size-50 mil-size-100">
                    <h1 class="txt-size-24px txt-color-2">
                        <router-link class="blue-link txt-underline-inline"
                                     :to="{name: 'commission', params: {id: commission.id}}">
                            {{ commission.name }}
                        </router-link>
                    </h1>
                    <p class="mrgn-t-5px">
                        {{ commission.description }}
                    </p>
                    <div class="uik-info-list mrgn-t-15px">
                        <div class="uik-info-unit">
                            <div class="uik-info-unit-name txt-size-14px txt-bold">
                                Адрес:
                            </div>
                            <div class="uik-info-unit-value txt-size-14px txt-lh-1_5em">
                                {{ commission.address }}
                            </div>
                        </div>
                        <div class="uik-info-unit">
                            <div class="uik-info-unit-value txt-size-24px txt-bold txt-lh-1_5em">
                                {{ commission.code }}
                            </div>
                        </div>
                        <div class="uik-info-unit" v-if="commission.parent">
                            <div class="uik-info-unit-name txt-size-14px txt-bold">
                                Вышестоящая комиссия:
                            </div>
                            <div class="uik-info-unit-value txt-size-14px txt-lh-1_5em">
                                <router-link class="blue-link txt-underline-inline"
                                             :to="{name: 'commission', params: {id: commission.parent.id}}">
                                    {{ commission.parent.name }}
                                </router-link>
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
                <div class="section size-50 mil-size-100" v-if="commission.geometry">
                    <div class="map-wrp committee-view">
                        <location :feature="commission.geometry"></location>
                    </div>
                </div>
            </div>
        </div>
        <div class="scene" v-if="commission">
            <h2 class="txt-size-34px txt-bold">
                Члены комиссии
            </h2>
            <div class="flex-row flex-algn-itms-c mrgn-t-20px mrgn-b-10px">
                <div class="section pdng-r-10px">
                    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z"
                            fill="#303030"/>
                    </svg>
                </div>
                <div class="section txt-size-14px txt-bold">
                    <p>
                        Руководители комиссии
                    </p>
                </div>
            </div>
            <div class="uik-persons flex-row flex-wrap">
                <template v-for="item of commission.members">
                    <div class="uik-persons-unit-wrp size-25 pdng-15px mil-size-100"
                         v-if="item.member.id !== id">
                        <div class="uik-persons-unit pdng-15px shadow-type-1 ik2022-radius-4px">
                            <div class="uik-persons-photo-and-marks-wrp flex-row">
                                <div class="uik-persons-photo section size-50">
                                    <img :src="item.member.person.photo_url || '/imgs/person_photo_placeholder.svg'"
                                         alt=""
                                         style="max-width: 120px">
                                </div>
                                <div class="section size-50 flex-column" v-if="false">
                                    <div class="flex-algn-slf-e mrgn-b-10px">
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
                            <div class="pdng-t-10px" v-if="item.position === 'заместитель председателя комиссии'">
                                <img src="/imgs/tag/vice_chairman.svg" alt="заместитель председателя комиссии">
                            </div>
                            <div class="pdng-t-10px" v-if="item.position === 'секретарь комиссии'">
                                <img src="/imgs/tag/secretary.svg" alt="секретарь комиссии">
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
                                <div class="uik-persons-marks-unit mrgn-r-15px" v-if="item.member.extra.violation_tag">
                                    <img src="/imgs/tag/violations.svg" alt="нарушения">
                                </div>
                                <div class="uik-persons-marks-unit mrgn-r-15px" v-if="item.member.extra.falsification_tag">
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
                </template>
            </div>
        </div>
        <div class="scene" v-if="commission">
            <h2 class="txt-size-34px txt-bold">
                Кто может оказывать давление на комиссию
            </h2>
            <template v-if="data && commission.parent">
                <div class="mrgn-t-20px mrgn-b-10px">
                    <router-link class="txt-underline-inline"
                                 :to="{name: 'commission', params: {id: commission.parent.id}}">
                        Вышестоящая комиссия
                    </router-link>
                </div>
                <div class="uik-persons flex-row flex-wrap">
                    <div class="uik-persons-unit-wrp size-33_3 pdng-15px mil-size-100"
                         v-for="item of commission.parent.members">
                        <div class="uik-persons-unit pdng-15px shadow-type-1 ik2022-radius-4px">
                            <div class="uik-persons-photo-and-marks-wrp flex-row">
                                <div class="uik-persons-photo section size-50">
                                    <img :src="item.member.person.photo_url || '/imgs/person_photo_placeholder.svg'"
                                         alt=""
                                         style="max-width: 120px">
                                </div>
                                <div class="section size-50 flex-column">
                                    <div class="flex-algn-slf-e mrgn-b-10px">
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
                            <div class="pdng-t-10px" v-if="item.position === 'заместитель председателя комиссии'">
                                <img src="/imgs/tag/vice_chairman.svg" alt="заместитель председателя комиссии">
                            </div>
                            <div class="pdng-t-10px" v-if="item.position === 'секретарь комиссии'">
                                <img src="/imgs/tag/secretary.svg" alt="секретарь комиссии">
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
                                <div class="uik-persons-marks-unit mrgn-r-15px" v-if="item.member.extra.violation_tag">
                                    <img src="/imgs/tag/violations.svg" alt="нарушения">
                                </div>
                                <div class="uik-persons-marks-unit mrgn-r-15px" v-if="item.member.extra.falsification_tag">
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
                                                     :to="{name: 'commission', params: {id: commission.parent.id}}">
                                            {{ commission.parent.name }}
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
                    <div class="uik-persons-unit-wrp size-33_3 pdng-15px mil-size-100" v-for="item of curators_local">
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
                    <div class="uik-persons-unit-wrp size-33_3 pdng-15px mil-size-100" v-for="item of curators_ideolog">
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
                                        <a class="blue-link txt-underline-inline"
                                           :href="'https://zubr.in/organization/' + item.curator.person.organizations[0].organization.id">
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
                <p class="txt-size-15px txt-lh-1_5em">
                    «Референдум» – это преступление в котором вас принуждают принять участие. Только вы сами решаете:
                    быть соучастником или честным свидетелем.
                </p>
                <p class="txt-size-15px txt-lh-1_5em">
                    Если вы готовы сделать посильный вклад в протводействие фальсфикации и вместе с другими честным
                    членами комиссий зафиксировать все беззаконие на которое вас толкают &mdash; <b>свяжитесь с нашими
                    волонтерами через безопасный чат в телеграм</b>:
                </p>
                <a class="inline-block mrgn-t-30px" :href="telegram_ik">
                    <img src="/imgs/telegram_button.svg" alt="telegram_button_link">
                </a>
            </div>
            <img class="promo-white-cross tl" src="/imgs/promo-cross-white.png" alt="">
            <img class="promo-white-cross tr" src="/imgs/promo-cross-white.png" alt="">
            <img class="promo-white-cross bl" src="/imgs/promo-cross-white.png" alt="">
            <img class="promo-white-cross br" src="/imgs/promo-cross-white.png" alt="">
        </div>
        <div class="scene"></div>
    </template>
</template>
<script>
import Header from './Header.vue';
import {computed, defineComponent, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {ElImage, ElDialog} from 'element-plus';
import {strategy, telegram_ik} from "../links";
import Location from '@zubr-in/main/src/components/Point.vue'

const data = ref(null)

async function fetchMember() {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/ik/member/' + useRoute().params.id)
        data.value     = await response.json()
    } catch (e) {
        data.value = {member: {}};
    }
    return {
        data
    }
}

export default defineComponent({
    components: {
        'header-view': Header,
        ElDialog,
        ElImage,
        Location
    },
    setup() {
        const showModal = ref(false)
        onMounted(async () => {
            await fetchMember()
            document.title = document.title.replace(' -', ' ' + data.value.member.person.full_name + ' -')
        })
        const employer         = computed(() => {
            if (!data.value) {
                return null
            }
            const tmp = data.value.member.person.organizations.filter(i => i.extra.employer && i.extra.employer === '2020')
            return tmp.length > 0 ? tmp[0] : null
        })
        const referral         = computed(() => {
            if (!data.value) {
                return null
            }
            const tmp = data.value.member.commissions
            return tmp.length > 0 ? tmp[0] : null
        })
        const photoOrigin      = computed(() => {
            if (!data.value) {
                return null
            }
            const tmp = data.value.member.person.attachments.filter(i => i.type === 'photo_origin')
            return tmp.length > 0 ? tmp[0].url : null
        })
        const commission       = computed(() => {
            if (!data.value) {
                return null
            }
            if (data.value.member.commissions.length === 0) {
                return null
            }
            data.value.member.commissions[0].commission.members.sort((a, b) => b.position === 'председатель комиссии' ? 1 : 0)
            return data.value.member.commissions[0].commission
        })
        const curators_local   = computed(() => {
            if (!data.value) {
                return []
            }
            if (!data.value.member) {
                return [];
            }
            let c = data.value.member.commissions.find(
                i => i.commission.campaign === null || i.commission.campaign.id === '2020-08-presidential'
            )
            if (c.commission.curators.length > 0) {
                return c.commission.curators.filter(i => i.position === 'местная власть')
            } else {
                return c.commission.parent ? c.commission.parent.curators.filter(i => i.position === 'местная власть') : []
            }
        })
        const curators_ideolog = computed(() => {
            if (!data.value) {
                return []
            }
            if (!data.value.member) {
                return [];
            }
            let c = data.value.member.commissions.find(
                i => i.commission.campaign === null || i.commission.campaign.id === '2020-08-presidential'
            )
            if (c.commission.curators.length === 0) {
                return []
            }
            return c.commission.curators.filter(i => i.position === 'идеолог')
        })
        return {
            telegram_ik,
            strategy,
            data,
            showModal,
            employer,
            photoOrigin,
            referral,
            curators_local,
            curators_ideolog,
            id: parseInt(useRoute().params.id),
            commission,
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
