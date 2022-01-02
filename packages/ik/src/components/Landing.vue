<template>
    <header-view :active="'Кампании'">
    </header-view>
    <div class="scene-wrp bg-color-1 border-b-1px border-color1">
        <div class="scene mrgn-t-170px mil-mrgn-t-120px">
            <div class="flex-row mil-flex-wrap">
                <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                    <div class="mrgn-t-40px">
                        <p>
                            “Референдум” 2022 – это обман, который нам хотят навязать вместо реальных перемен.
                        </p>
                        <p>
                            Но август 2020 изменил не только нас, но и всех, кто участвовал в фальсификациях.
                        </p>
                        <p>
                            Поэтому, мы уверены, что в этот раз еще больше членов избирательных комиссий не подчинятся
                            приказам
                            искажать результаты и покажут всей системе реальный процент поддержки граждан
                        </p>
                    </div>
                </div>
                <div class="section size-50 mil-size-100 mil-pdng-t-50px">
                    <div class="map-wrp committee-view">
                        Map
                    </div>
                </div>
            </div>
            <div class="flex-row mil-flex-wrap pdng-t-30px ">
                <div class="section size-100 pdng-r-30px mil-size-100 mil-pdng-0">
                    <el-tabs type="card">
                        <el-tab-pane label="Поиск">
                            <div class="mrgn-t-40px">
                                <div class="block">
                                    <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
                                        Фильтр
                                    </div>
                                    <input class="search-input"
                                           style="width: 100%"
                                           :placeholder="placeholder"
                                           v-model.lazy="filter">
                                </div>
                                <!--                                <div class="block mrgn-10px">-->
                                <!--                                    <label for="is_home_address1">Домашний адрес</label>-->
                                <!--                                    <input class="mrgn-l-10px"-->
                                <!--                                           v-model="endpoint"-->
                                <!--                                           type="radio"-->
                                <!--                                           value="home_address"-->
                                <!--                                           name="search"-->
                                <!--                                           id="is_home_address1">-->
                                <!--                                </div>-->
                                <!--                                <div class="block mrgn-10px">-->
                                <!--                                    <label for="is_home_address2">Комиссия</label>-->
                                <!--                                    <input class="mrgn-l-10px"-->
                                <!--                                           v-model="endpoint"-->
                                <!--                                           value="commissions"-->
                                <!--                                           type="radio" name="search"-->
                                <!--                                           id="is_home_address2">-->
                                <!--                                </div>-->
                                <!--                                <div class="block mrgn-10px">-->
                                <!--                                    <label for="is_home_address3">Организации</label>-->
                                <!--                                    <input class="mrgn-l-10px"-->
                                <!--                                           v-model="endpoint"-->
                                <!--                                           value="organizations"-->
                                <!--                                           type="radio"-->
                                <!--                                           name="search"-->
                                <!--                                           id="is_home_address3">-->
                                <!--                                </div>-->
                                <!--                                <div class="block mrgn-10px">-->
                                <!--                                    <label for="is_home_address4">ФИО</label>-->
                                <!--                                    <input class="mrgn-l-10px"-->
                                <!--                                           v-model="endpoint"-->
                                <!--                                           type="radio"-->
                                <!--                                           value="members"-->
                                <!--                                           name="search"-->
                                <!--                                           id="is_home_address4">-->
                                <!--                                </div>-->
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Карта">
                            <div v-if="!region">
                                Выберите область
                                <button @click="region = '1'">Брестская</button>
                            </div>
                            <div v-if="region && !district">
                                Выберите Район
                                <button @click="district = '1';revealMap()">Барановичский</button>
                            </div>
                            <div v-show="region && district"
                                class="map-wrp" style="background:#EDEDED; min-height:640px;height: 300px">
                                <commission-map v-if="mapInit === true" ref="map"
                                                :init-center="center"
                                                :init-zoom="9.5"
                                                :init-campaign="'2020-08-presidential'"></commission-map>
                            </div>
                        </el-tab-pane>
                    </el-tabs>

                </div>
            </div>
            <div class="committee-list mil-flex-column" v-if="filter">
                <a class="committee-unit mil-flex-column" :href="'/commission/' + item.id" v-for="item of list">
                    <div
                        class="section size-45 pdng-r-20px pdng-l-30px pdng-t-20px pdng-b-20px mil-size-100 mil-pdng-15px">
                        <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                            {{ item.name }}
                        </h2>
                        <div class="txt-color-2 txt-size-14px">
                            {{ item.description }}
                        </div>
                    </div>
                    <div
                        class="section flex-row flex-algn-slf-strch flex-algn-itms-c size-30 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px border-l-1px border-color2 mil-border-0 mil-size-100 mil-pdng-15px mil-pdng-t-0 mil-border-b-1px mil-border-color1">
                        <div class="size-100">
                            <div class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                                {{ item.code }}
                            </div>
                            <div class="txt-color-2 txt-size-14px">
                                {{ item.address }}
                            </div>
                        </div>
                    </div>
                    <div
                        class="section flex-row flex-algn-slf-strch flex-algn-itms-c size-30 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px border-l-1px border-color2 mil-border-0 mil-size-100 mil-pdng-15px mil-pdng-t-0 mil-border-b-1px mil-border-color1">
                        <div class="size-100" v-if="item.info">
                            <div class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                                {{ item.info }}
                            </div>
                            <div class="txt-color-2 txt-size-14px">
                                {{ item.position }}
                            </div>
                        </div>
                        <div class="size-100" v-else>
                            <div class="txt-color-2 txt-size-14px">
                                {{ item.constituency_description }}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex-row mil-flex-wrap pdng-t-30px ">
                <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                    <div class="mrgn-t-40px">
                        <p>
                            5 рукопожатий до фальсификатора Кто крадет наши голоса? Это может быть ваш коллега или его
                            жена, сосед, дальний родственник или сосед по даче. Они не гордятся своим участием. Но вы
                            обязаны знать имена тех, кто живет рядом с вами или фальсифицирует на вашем участке
                            Видеоинструкция как пользоваться поиском *По нашим данны 80% членов комиссий неизменны.
                            Сейчас доступны данные о комиссиях выборов 2020.
                        </p>
                    </div>
                </div>
                <div class="section size-50 mil-size-100 mil-pdng-t-50px">
                    <div class="map-wrp committee-view">
                        Map
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
        const region   = ref();
        const district = ref();
        const center = ref();
        const mapInit  = ref(false)
        return {
            revealMap() {

                setTimeout(() => {
                    center.value = [
                        26.005343, 53.131253
                    ];
                    mapInit.value = true
                },1)
            },
            center,
            mapInit,
            region,
            district,
            endpoint,
            placeholder,
            filter,
            is_home_address,
            list
        }
    }
})
</script>
