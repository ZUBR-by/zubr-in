<template>
    <header-view>
        <div class="sticky-wrp">
            <div class="header-subnav border-t-1px border-color2">
                <a :href="'/campaign/' + campaign"
                   class="section flex-algn-slf-strch flex-row flex-algn-itms-c pdng-l-30px pdng-r-30px mil-pdng-l-15px mil-pdng-r-15px txt-algn-c border-r-1px border-color2 hovered">
                    <div class="inline-block">
                        <svg class="mil-zoom-0_8" width="20" height="24" viewBox="0 0 20 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5V13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM18 10.5L2 10.5V13.5L18 13.5V10.5Z"
                                fill="#FF6C1A"/>
                        </svg>
                    </div>
                </a>
                <div
                    class="section flex-grow-all pdng-30px pdng-t-30pxpx pdng-b-30px mil-pdng-20px mil-pdng-t-20px mil-pdng-b-20px"
                    v-if="data && data.campaign">
                    <div class="txt-color-1 txt-size-15px mil-txt-size-14px txt-bold">
                        {{ data.campaign.name }}
                    </div>
                </div>
            </div>
            <div class="header-subnav border-color2">
                <div
                    class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
                    <div class="inline-block">
                        <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
                            Избирательная инициатива
                        </div>
                        <div class="buttongroup">
                            <button @click="initiative = null" class="buttongroup-unit"
                                    :class="{active: initiative === null}">
                                Все
                            </button>
                            <button @click="initiative = key"
                                    :key="key"
                                    :class="{active: initiative === key}"
                                    class="buttongroup-unit" v-for="(item, key) of initiatives">
                                {{ item }}
                            </button>
                        </div>
                    </div>
                    <div class="inline-block mrgn-l-30px mil-mrgn-l-20px">
                        <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
                            Включает категорию
                        </div>
                        <el-select v-model="category" :placeholder="'Выберите категорию'" style="min-width: 400px">
                            <el-option

                                v-for="item in categories"
                                :key="item.value"
                                :label="item.name"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        <el-button type="primary" @click="category = null" :icon="Close" v-if="category"
                                   circle></el-button>
                    </div>
                </div>
            </div>
        </div>
    </header-view>
    <div class="scene mrgn-t-190px mil-mrgn-t-200px">
        <message-list v-model="data.messages" v-if="data" :show-button-all="false"></message-list>
        <div class="flex-column flex-algn-itms-c pdng-t-40px"
             v-if="data && data.messages_aggregate && data.messages_aggregate.aggregate.count > 0">
            <a @click="fetchMore" class="button primary pdng-l-40px pdng-r-40px">
                Загрузить еще 30 из {{ data.messages_aggregate.aggregate.count }} нарушений
            </a>
        </div>
        <div class="flex-column flex-algn-itms-c pdng-t-40px"
             v-if="data && data.messages_aggregate && data.messages_aggregate.aggregate.count === 0">
            Нет сообщений
        </div>
    </div>

</template>
<script>
import Header from './Navbar.vue';
import {defineComponent, onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {ElSelect, ElOption, ElButton} from 'element-plus';
import {MessageList, hash, initiatives} from "./MessageList.vue";
import {Close} from '@element-plus/icons-vue'

const data       = ref(null)
const category   = ref(null)
const initiative = ref(null)
const offset     = ref(0)
const tmp        = ref(null)
let id           = null;

async function fetchMessages() {
    try {
        if (!id) {
            id = useRoute().params.id;
        }
        console.log(category.value)
        const response = await fetch(import.meta.env.VITE_API_URL + '/campaign/' + id,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        offset: offset.value,
                        categories: category.value === null
                            ? {'_is_null': false}
                            : {'_contains': parseInt(category.value)},
                        initiative: initiative.value === null
                            ? {'_is_null': false}
                            : {'_eq': initiative.value}
                    }
                )
            }
        )
        tmp.value      = await response.json()

        if (offset.value > 0) {
            data.value.messages = data.value.messages.concat(tmp.value.messages)
        } else {
            data.value = tmp.value
        }
    } catch (e) {
        console.error(e)
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
        ElSelect,
        ElOption,
        ElButton,
    },
    setup() {
        watch(category, () => {
            offset.value = 0
            fetchMessages()
        })
        watch(initiative, () => {
            offset.value = 0
            fetchMessages()
        })
        onMounted(() => {
            fetchMessages()
        })
        const filter   = ref('Все');
        const options  = ref(['Все', 'Честные Люди', 'Право Выбора']);
        const campaign = ref(useRoute().params.id)
        let categories = Object.keys(hash).map((key) => {
            return {value: key, name: hash[key]}
        });
        return {
            filter,
            options,
            campaign,
            data,
            hash,
            category,
            initiatives,
            initiative,
            categories,
            offset,
            Close,
            fetchMore() {
                offset.value += 50;
                fetchMessages()
            }
        }
    }
})
</script>
