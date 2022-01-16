<template>
    <div class="header-ik-2022 flex-row flex-algn-itms-c">
        <div class="section pdng-20px pdng-l-5prc pdng-r-30px">
            <a href="#">
                <img src="/imgs/logo.svg">
            </a>
        </div>
        <div class="section pdng-r-5prc flex-grow-all txt-algn-r">
            <a class="header-ik-2022-link txt-size-16px txt-bold active" href="#">
                <img class="size-60" src="imgs/crpline-1.png" alt="">
                Наблюдателям
            </a>
            <a class="header-ik-2022-link txt-size-16px txt-bold" href="#">
                <img class="size-60" src="imgs/crpline-1.png" alt="">
                Расследование фальсификаций
            </a>
            <a class="header-ik-2022-link txt-size-16px txt-bold" href="#">
                <img class="size-60" src="imgs/crpline-1.png" alt="">
                О референдуме
            </a>
        </div>
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
            routes: routes.filter(i => !i.exclude).map(item => {
                return {
                    to: item.path,
                    name: item.meta.title
                }
            }),
            results,
            query,
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
