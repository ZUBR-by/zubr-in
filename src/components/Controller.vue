<template>
    <header-view></header-view>
    <div class="scene mrgn-t-130px mil-mrgn-t-80px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2>Перечеркни референдум - перечеркни беззаконие</h2>
            </div>
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <button class="button medium mrgn-l-10px mil-mrgn-l-10px txt-algn-c">
                    Стать Гражданским контроллером
                </button>
            </div>
        </div>
    </div>
    <div class="scene">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="txt-bold">Кто мы такие</h2>
                <p class="txt-size-22px pdng-t-5px">
                    Мы — гражданская инициатива ZUBR, созданная беларусами для беларусов в 2020 году.
                    Наша цель — мониторинг электоральных кампаний в Беларуси, сбор и систематизация данных о нарушениях.
                </p>
            </div>
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <galleria :value="images1"
                          :show-thumbnails="false"
                          :show-item-navigators-on-hover="true"
                          :show-item-navigators="true"
                          :transition-interval="4000"
                          :circular="true"
                          style="width: 300px;height: 300px"
                          :auto-play="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.src" :alt="slotProps.item.alt"/>
                    </template>
                </galleria>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="txt-bold">Почему фальсификации — это убийство</h2>
                <p class="txt-size-22px pdng-t-5px">
                    Все беззаконие, которое произошло в августе 2020 года и происходит до сих пор — это результат
                    фальсификаций на выборах.
                    Гражданского контроля за выборами и референдумами не было долгие годы.
                    Именно вседозволенность позволила
                    госмашине отточить механизмы фальсификаций. Именно безнаказанность превратила систему в диктатуру,
                    а потом — в режим, который включил безудержное насилие.
                    Убиты мирные люди, тысячи людей потеряли свободу, десятки тысяч были задержаны, оштрафованы, избиты.
                </p>
            </div>
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <galleria :value="images2"
                          :show-thumbnails="false"
                          :show-item-navigators-on-hover="true"
                          :show-item-navigators="true"
                          :transition-interval="4000"
                          :circular="true"
                          style="width: 300px;height: 300px"
                          :auto-play="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.src" :alt="slotProps.item.alt" />
                    </template>
                </galleria>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="txt-bold">Почему к нам стоит прислушаться</h2>
                <p class="txt-size-22px pdng-t-5px">
                    В 2020 году, несмотря на беспредел властей на выборах, совместные усилия людей, скоординированные с
                    инициативами ZUBR,
                    “Голос” и “Честные люди”, правозащитными и партийными организациями позволили доказать,
                    что выборы были сфальсифицированы. И мировой опыт, и собственный опыт беларусов говорит,
                    что любые преступления нельзя игнорировать. Их нужно фиксировать.
                    Только активные действия граждан на всех этапах любых электоральных кампаний влияют на их исход.
                    Мы готовы повторять это снова и снова до смены режима и восстановления закона.
                </p>
            </div>
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <galleria :value="images3"
                          :show-thumbnails="false"
                          :show-item-navigators-on-hover="true"
                          :show-item-navigators="true"
                          :transition-interval="4000"
                          :circular="true"
                          style="width: 300px;height: 300px"
                          :auto-play="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.src" :alt="slotProps.item.alt"/>
                    </template>
                </galleria>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-100 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="txt-bold">Что мы предлагаем</h2>
                <p class="txt-size-22px pdng-t-5px">
                    Учитывая сегодняшний немыслимый уровень репрессий, оценив все возможные риски,
                    мы предлагаем беларусам покрыть краткосрочным независимым наблюдением так называемый
                    "референдум" именно потому, что его проведение незаконно. Через наши чат-бот в Телеграм
                    и онлайн-платформу ZUBR проведёт рекрутинг, обучение, координацию активных граждан и
                    сбор информации о готовящемся “референдуме” и ходе кампании
                </p>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-100 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="txt-bold">Почему надо действовать прямо сейчас</h2>
                <p class="txt-size-22px pdng-t-5px">
                    Режим в Беларуси использует и многоуровневую фальсификацию при голосовании,
                    и силовые и административные рычаги влияния на людей. После 2020 года ЦИК
                    будет мешать организовать законное независимое наблюдение всеми возможными
                    псевдозаконными способами. По избирательному кодексу период на кампанию по
                    референдуму может быть вдвое меньше, чем на выборы. Дату проведения “референдума”
                    объявят за максимально короткий срок, чтобы не допустить роста политической и гражданской
                    активности.
                    Поэтому нам всем нужно быть готовыми к наблюдению ещё до назначения даты.
                </p>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="txt-bold">Что надо делать прямо сейчас</h2>
                <p class="txt-size-22px pdng-t-5px">
                    Регистрируйтесь на платформе ZUBR в качестве независимого наблюдателя или просто Гражданского
                    контролёра,
                    пройдите обучение. Мы призываем рассказывать всем о нашей инициативе.
                    Давайте вместе сделаем все, чтобы сломать этот якобы “народный плебисцит”
                </p>
            </div>
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
                <galleria :value="images4"
                          :show-thumbnails="false"
                          :show-item-navigators-on-hover="true"
                          :show-item-navigators="true"
                          :transition-interval="4000"
                          :circular="true"
                          style="width: 300px;height: 300px"
                          :auto-play="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.src" :alt="slotProps.item.alt"/>
                    </template>
                    <template #thumbnail="slotProps">
                        <img style="width: 50px;height: 50px"
                             :src="slotProps.item.thumbnailImageSrc"
                             :alt="slotProps.item.alt"/>
                    </template>
                </galleria>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-100 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="text-bolder pdng-l-20px">FAQ</h2>
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
            const j = Math.floor(Math.random() * (i + 1));
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
