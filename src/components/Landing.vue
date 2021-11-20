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
                            Поэтому, мы уверены, что в этот раз еще больше членов избирательных комиссий не подчинятся приказам
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
                <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                    <div class="mrgn-t-40px">
                        <p>
                            5 рукопожатий до фальсификатора   Кто крадет наши голоса?  Это может быть ваш коллега или его жена, сосед, дальний родственник или сосед по даче.    Они не гордятся своим участием. Но вы обязаны знать имена тех, кто живет рядом с вами или фальсифицирует на вашем участке  Видеоинструкция как пользоваться поиском  *По нашим данны 80% членов комиссий неизменны.  Сейчас доступны данные о комиссиях выборов 2020.
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
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    'header-view': Header
  },
})
</script>
