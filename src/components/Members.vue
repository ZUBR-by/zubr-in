<template>
    <header-view>
        <div class="header-subnav border-color2">
            <div
                class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
                <div class="inline-block">
                    <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
                        Фильтр
                    </div>
                    <input class="p-inputtext p-component" placeholder="ФИО" v-model.lazy="filter.name">
                </div>
            </div>
        </div>
    </header-view>
    <div class="scene mrgn-t-170px mil-mrgn-t-170px" v-if="loading">
        <div class="committee-members-list">
            Идет загрузка...
        </div>
    </div>
    <div class="scene mrgn-t-170px mil-mrgn-t-170px" v-if="data">
        <div class="committee-members-list" v-if="loading">
            Идет загрузка...
        </div>
        <div class="committee-members-list">
            <!--      :class="{mark: item === 2}"-->
            <a class="committee-members-unit mil-flex-column"
               :href="'/member/' + item.id" v-for="item of data.members">
                <div class="section size-40 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px mil-size-100">
                    <div class="flex-row flex-algn-itms-c">
                        <div class="section pdng-r-20px">
                            <div class="person-photo">
                                <div class="person-initials">С.Г.Т.</div>
                                <img :src="item.photo_url || '/img/icon/person-placeholder.png'"
                                     :alt="item.full_name">
                            </div>
                        </div>
                        <div class="section">
                            <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                                {{ item.full_name }}
                            </h2>
                            <div class="txt-color-2 txt-size-14px" v-if="false">
                                <!--                TODO add position-->
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="section flex-row flex-algn-itms-c flex-algn-slf-strch size-60 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px border-l-1px border-color2  mil-size-100 mil-pdng-t-0 mil-border-0 mil-border-b-1px mil-border-color1">
                    <div class="txt-color-2 txt-size-14px">
                        <template v-for="sub of item.commissions">
                            {{ sub.position }}
                            в
                            {{ sub.commission.name || sub.commission.code }}, {{ sub.commission.description }}
                            <template v-if="sub.commission.campaign_id">
                                ({{ sub.commission.campaign_id.substr(0, 4) }})
                            </template>
                            <br>
                        </template>
                    </div>
                </div>
                <div class="section flex-grow-all txt-algn-r txt-nowrap pdng-r-30px pdng-l-20px pdng-t-20px pdng-b-20px"
                     v-if="false">
                    <div class="inline-flex flex-algn-itms-c">
                        <div class="section">
                            <svg class="block" width="16" height="21" viewBox="0 0 16 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.66797 2.26288C1.66797 2.26288 4.16908 0.840252 5.84339 0.694131C8.02769 0.503502 9.8518 2.26288 11.355 2.26288C12.8581 2.26287 15.3634 1.21705 15.3634 1.21705V11.6753C15.3634 11.6753 13.6553 12.5125 12.5241 12.7212C9.90404 13.2044 8.51567 11.1524 5.84339 11.1524C3.17112 11.1524 1.66797 12.7212 1.66797 12.7212V2.26288Z"
                                    fill="#FF5C01"></path>
                                <rect y="1.29492" width="1.22907" height="19.6652" fill="#FF5C01"></rect>
                            </svg>
                        </div>
                        <div class="section pdng-l-15px">
                            <div class=" txt-color-2 txt-size-20px txt-bold mil-txt-size-16px">
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="flex-column flex-algn-itms-c pdng-t-40px" v-if="data.pagination.aggregate.count > 50">
            <a @click="fetchMore" class="button primary pdng-l-40px pdng-r-40px">
                Загрузить еще 50 членов <span class="mil-notdisplay"> избирательных</span> комиссий из
                {{ data.pagination.aggregate.count }}
            </a>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue'
import {defineComponent, onMounted, reactive, ref, watch} from "vue";
import {commission_types} from "./Commission.vue";
import {onBeforeRouteUpdate} from "vue-router";
import router from "../router";

const data    = ref(null)
let filter    = reactive({
    name: ''
});
const tmp     = ref(null)
const offset  = ref(0)
const loading = ref(false)

async function fetchMembers() {
    try {
        loading.value = true;

        const response = await fetch(
            import.meta.env.VITE_API_URL
            +
            '/members'
            + ('?name=' + encodeURIComponent('%' + (filter.name || '') + '%'))
            + ('&offset=' + offset.value)
        )
        tmp.value      = await response.json()

        if (offset.value > 0) {
            data.value.members = data.value.members.concat(tmp.value.members)
        } else {
            data.value = tmp.value
        }
        loading.value = false;
    } catch (e) {
        loading.value = false;
        data.value    = {members: [], pagination: {aggregate: {count: 0}}};
    }
    return {
        data
    }
}


export default defineComponent({
    components: {
        'header-view': Header,
    },
    setup() {
        let params = (new URL(document.location.href)).searchParams;
        (['name']).forEach((elem) => {
            filter[elem] = params.has(elem) ? params.get(elem) : ''
        })
        onBeforeRouteUpdate((to, from, next) => {
            (['name']).forEach((elem) => {
                filter[elem] = elem in to.query ? (to.query[elem]) : ''
            })
            next()
        })
        watch(filter, (newValue) => {
            offset.value = 0
            router.push({
                name: 'members', query: {
                    name: newValue.name,
                }
            })
            fetchMembers()
        })
        onMounted(() => {
            fetchMembers()
        });
        return {
            data,
            filter,
            loading,
            types: Object.keys(commission_types),
            fetchMore() {
                offset.value += 50;
                fetchMembers()
            }
        }
    }
})
</script>
