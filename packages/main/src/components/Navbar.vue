<template>
    <div class="header-wrp fixedhrd">
        <div class="header flex-row flex-algn-itms-c">
            <a href="/" class="section pdng-l-20px pdng-r-20px">
                <img :src="isUik ? '/img/about/hp.png' : '/img/icon/zubr_in.png'"
                     width="90"
                     height="90"
                     class="zoom-0_75 mil-zoom-0_5">
            </a>
            <div class="header-links flex-grow-all pdng-l-20px pdng-r-20px mil-notdisplay">
                <router-link :to="route.to" v-for="route of routes" :active-class="'active'">
                    {{ route.name }}
                </router-link>
                <a href="https://t.me/zubr_info_bot">Связаться с нами</a>
            </div>
            <div class="section pdng-l-20px pdng-r-30px mil-notdisplay" v-if="false">
                <div class="search-input-wrp">
                </div>
            </div>
            <!-- mobile nav -->
            <div class="section flex-grow-all pdng-l-20px pdng-r-30px notdisplay mil-show">
                <input id="brgrbtn" class="notdisplay mil-show" type="checkbox">
                <label for="brgrbtn" class="notdisplay burger-button mil-show">
                    <div class="burger-button-line"></div>
                    <div class="burger-button-line"></div>
                    <div class="burger-button-line"></div>
                </label>
                <div class="brgr-nav notdisplay mil-show">
                    <div class="header-links pdng-l-20px pdng-r-20px">
                        <div class="pdng-t-30px" v-for="route of routes">
                            <router-link :to="route.to" :active-class="'active'">
                                {{ route.name }}
                            </router-link>
                        </div>
                        <div class="pdng-t-30px">
                            <a href="https://t.me/zubr_info_bot">Связаться с нами</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import {defineComponent, ref, watch} from "vue";
import {routes} from '../router';

const hash = {
    'members': 'Члены комиссий',
    'organizations': 'Организации',
    'commissions': 'Комиссии'
}
export default defineComponent({
    props: {
        active: String
    },
    components: {},
    setup(props) {
        const query   = ref();
        const results = ref([
            {
                label: 'Члены комиссии',
                items: []
            },
            {
                label: 'Комиссии',
                items: []
            },
            {
                label: 'Организации',
                items: []
            }
        ])
        watch(query, (newValue) => {
            if (!newValue) {
                return
            }
            if (newValue.id && newValue.__typename === 'election_member') {
                window.location = '/member/' + newValue.id
                return;
            }
            if (newValue.id && newValue.kind) {
                window.location = '/organization/' + newValue.id
                return;
            }
            if (newValue.id) {
                window.location = '/commission/' + newValue.id
            }
        })
        return {
            routes: routes.filter(i => ['commissions', 'members', 'campaigns'].includes(i.name)).map(item => {
                return {
                    to: item.path,
                    name: item.meta.title
                }
            }),
            results,
            query,
            isUik: false,
            active: props.active,
            async load({value}) {
                try {
                    const response = await fetch(
                        import.meta.env.VITE_API_URL
                        + '/search'
                        + (value ? '?name=' + encodeURIComponent('%' + value + '%') : '')
                    )
                    const payload  = await response.json();
                    ((tmp) => {
                        let final = [];
                        for (let key in tmp) {
                            if (tmp[key].length === 0) {
                                continue;
                            }
                            final.push({
                                'label': hash[key],
                                items: tmp[key]
                            })
                        }
                        results.value = final
                    })(payload)
                } catch (e) {
                    console.error(e)
                }
            }
        }
    }
});
</script>
