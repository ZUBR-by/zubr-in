<template>
    <div class="header-ik-2022 flex-row flex-algn-itms-c">
        <div class="section pdng-20px pdng-l-5prc pdng-r-30px">
            <router-link :to="{name: 'ik_main'}">
                <img src="/imgs/logo.svg" alt="header logo">
            </router-link>
        </div>
        <div class="section pdng-r-5prc flex-grow-all txt-algn-r">
            <a class="header-ik-2022-link txt-size-16px txt-bold active" href="https://zubr.in/controller">
                <img class="size-60" src="/imgs/crpline-1.png" alt="">
                Наблюдение и гражд. контроль
            </a>
            <router-link class="header-ik-2022-link txt-size-16px txt-bold" :to="{name: 'schema'}">
                <img class="size-60" src="/imgs/crpline-1.png" alt="">
                Расследование фальсификаций
            </router-link>
            <a class="header-ik-2022-link txt-size-16px txt-bold" href="#">
                <img class="size-60" src="/imgs/crpline-1.png" alt="">
                О референдуме
            </a>
        </div>
        <div class="section flex-grow-all pdng-l-20px pdng-r-30px notdisplay mil-show">
            <input id="brgrbtn" class="notdisplay mil-show" type="checkbox">
            <label for="brgrbtn" class="notdisplay burger-button mil-show">
                <div class="burger-button-line"></div>
                <div class="burger-button-line"></div>
                <div class="burger-button-line"></div>
            </label>
            <div class="brgr-nav notdisplay mil-show">
                <a class="header-ik-2022-link txt-size-16px txt-bold active" href="https://zubr.in/controller">
                    <img class="size-60" src="/imgs/crpline-1.png" alt="">
                    Наблюдение и гражд. контроль
                </a>
                <router-link  class="header-ik-2022-link txt-size-16px txt-bold" :to="{name: 'schema'}">
                    <img class="size-60" src="/imgs/crpline-1.png" alt="">
                    Расследование фальсификаций
                </router-link>
                <a class="header-ik-2022-link txt-size-16px txt-bold" href="#">
                    <img class="size-60" src="/imgs/crpline-1.png" alt="">
                    О референдуме
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {routes} from '../router';

export default defineComponent({
    props: {
        active: String
    },
    components: {},
    setup(props) {
        const query   = ref();
        return {
            routes: routes.filter(i => !i.exclude).map(item => {
                return {
                    to: item.path,
                    name: item.meta.title
                }
            }),
            query,
            active: props.active
        }
    }
});
</script>
