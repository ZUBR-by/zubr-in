<template>
    <header-view></header-view>
    <div class="scene mrgn-t-130px mil-mrgn-t-80px">
        <div class="">
            <div class="pdng-b-30px">
                <h1>Перечеркни референдум - <br>перечеркни беззаконие!</h1>
            </div>
            <button class="button primary large flex-row flex-algn-itms-c">
                <div class="section">
                    Стать Гражданским контроллером
                </div>
                <div class="section mrgn-l-10px">
                    <svg class="zoom-1_2" width="14" height="12" viewBox="0 0 14 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                            fill="white"></path>
                    </svg>
                </div>
            </button>
        </div>
    </div>
    <div class="scene">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Кто мы такие</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Мы — гражданская инициатива ZUBR, созданная беларусами для беларусов в 2020 году.<br><br>
                    Наша цель — мониторинг электоральных кампаний в Беларуси, сбор и систематизация данных о нарушениях.
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <galleria :value="images1"
                          :show-thumbnails="false"
                          :show-item-navigators-on-hover="false"
                          :show-item-navigators="true"
                          :transition-interval="4000"
                          :circular="true"
                          style="width: 300px;height: 300px"
                          :auto-play="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 300px;height: 300px"/>
                    </template>
                </galleria>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Почему фальсификации — это убийство</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Все беззаконие, которое произошло в августе 2020 года и происходит до сих пор — это результат
                    фальсификаций на выборах.
                    <br>
                    Гражданского контроля за выборами и референдумами не было долгие годы.
                    <br>
                    Именно вседозволенность позволила госмашине отточить механизмы фальсификаций.
                    <br>
                    Именно безнаказанность превратила систему в диктатуру, а потом — в режим, который включил
                    безудержное насилие.
                    <br>
                    Убиты мирные люди, тысячи людей потеряли свободу, десятки тысяч были задержаны, оштрафованы, избиты.

                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>Сам по себе референдум не позволяет выйти из кризиса – для этого нужны новые выборы.</b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <galleria :value="images2"
                          :show-thumbnails="false"
                          :show-item-navigators-on-hover="true"
                          :show-item-navigators="true"
                          :transition-interval="4000"
                          :circular="true"
                          style="width: 300px;height: 300px"
                          :auto-play="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 300px;height: 300px"/>
                    </template>
                </galleria>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Почему к нам стоит присоединится</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    В 2020 году, несмотря на беспредел властей на выборах, совместные усилия людей, скоординированные с
                    инициативами
                    «<a href="" class="txt-underline-inline">ZUBR</a>»,
                    «<a href="" class="txt-underline-inline">Голос</a>»
                    и «<a href="" class="txt-underline-inline">Честные люди</a>», правозащитными и партийными
                    организациями позволили доказать, что выборы были сфальсифицированы. И мировой опыт, и собственный опыт
                    беларусов говорит, что любые преступления нельзя игнорировать. Их нужно фиксировать.
                    Только активные действия граждан на всех этапах любых электоральных кампаний влияют на их исход.
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>Мы готовы поддерживать такие действия до смены режима и восстановления закона.</b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <galleria :value="images3"
                          :show-thumbnails="false"
                          :show-item-navigators-on-hover="true"
                          :show-item-navigators="true"
                          :transition-interval="4000"
                          :circular="true"
                          style="width: 300px;height: 300px"
                          :auto-play="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 300px;height: 300px"/>
                    </template>
                </galleria>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-100 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Что мы предлагаем</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Учитывая сегодняшний немыслимый уровень репрессий, оценив, оценив риски,
                    мы предлагаем беларусам покрыть краткосрочным независимым наблюдением так
                    «референдум» именно потому, что его проведение незаконно. Через наш <a href="https://t.me/zubr_in_bot" class="txt-underline">
                    чат-бот в Телеграме</a>
                    и онлайн-платформу ZUBR проведёт рекрутинг, <b class="txt-color-1">обучение, координацию активных граждан и
                    сбор информации о готовящемся “референдуме” и ходе кампании</b>.
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>Любой избиратель Беларуси сможет полностью анонимно и
                        без официальной регистрации в качестве наблюдателя сообщить нам о замеченных
                        правонарушениях.</b>
                </p>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-100 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Почему надо действовать прямо сейчас</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Режим в Беларуси использует и многоуровневую фальсификацию при голосовании,
                    и силовые и административные рычаги влияния на людей. После 2020 года ЦИК
                    будет мешать организовать законное независимое наблюдение всеми возможными
                    псевдозаконными способами. По избирательному кодексу период на кампанию по
                    референдуму может быть вдвое меньше, чем на выборы. Дату проведения “референдума”
                    объявят за максимально короткий срок, чтобы не допустить роста политической и гражданской
                    активности.<br>
                    Поэтому нам всем нужно быть готовыми к наблюдению ещё до назначения даты.
                </p>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Что можно делать уже сегодня</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Регистрируйтесь на платформе ZUBR в качестве независимого наблюдателя или просто Гражданского
                    контролёра,
                    пройдите обучение. Мы призываем рассказывать всем о нашей инициативе.
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>Давайте вместе сделаем все, чтобы сломать это якобы “народное волеизъявление”.</b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <galleria :value="images4"
                          :show-thumbnails="false"
                          :show-item-navigators-on-hover="true"
                          :show-item-navigators="true"
                          :transition-interval="4000"
                          :circular="true"
                          style="width: 300px;height: 300px"
                          :auto-play="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.src" :alt="slotProps.item.alt" style="width: 300px;height: 300px"/>
                    </template>
                </galleria>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-100 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="txt-bold">FAQ</h2>
                <Accordion :multiple="true" class="pdng-t-5px">
                    <AccordionTab header="Кто такой гражданский контролер? Кто может им стать?">
                        Content
                    </AccordionTab>
                    <AccordionTab
                        header="Header Зачем контролировать “референдум”, ведь все равно наши голоса украдут как в 2020-м?">
                        Content
                    </AccordionTab>
                    <AccordionTab
                        header="План ZUBR + ЧЛ + Голоса">
                        Content
                    </AccordionTab>
                    <AccordionTab
                        header="Как обеспечивается анонимность/безопасность гражданских контролеров?">
                        Content
                    </AccordionTab>
                    <AccordionTab
                        header="Как пройти обучение?">
                        Content
                    </AccordionTab>
                    <AccordionTab
                        header=" Как сообщить о нарушении?">
                        Content
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="section size-100">
            <button class="button medium mrgn-l-10px mil-mrgn-l-10px txt-algn-c">
                Стать Гражданским контроллером
            </button>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import galleria from "primevue/galleria";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import {defineComponent} from "vue";

const prepareArray = (length, namespace, notShuffle) => {
    let tmp = [...Array(length + 1).keys()];
    tmp.shift()

    if (!notShuffle) {
        for (let i = tmp.length - 1; i > 0; i--) {
            const j          = Math.floor(Math.random() * (i + 1));
            [tmp[i], tmp[j]] = [tmp[j], tmp[i]];
        }
    }

    return tmp.map(i => ({
        'src': '/img/controller/' + namespace + '/' + i + '.jpg',
        "thumbnailImageSrc": '/img/controller/' + namespace + '/' + i + '.jpg',
        "alt": i,
        "title": "Изображение " + i
    }));
}
export default defineComponent({
    components: {
        'header-view': Header,
        galleria,
        Accordion,
        AccordionTab
    },
    setup() {
        return {
            images1: prepareArray(34, 1),
            images2: prepareArray(15, 2),
            images3: prepareArray(18, 3, true),
            images4: prepareArray(9, 4,)
        }
    }
})
</script>

<style>
.p-galleria-content .p-galleria-item-wrapper .p-galleria-item-container button.p-galleria-item-next {
    background-color: #a8a1a1
}
</style>
