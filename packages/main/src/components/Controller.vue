<template>
    <header-view></header-view>
    <div class="scene mrgn-t-20px mil-mrgn-t-80px">
        <div class="section">
            <img src="/img/controller/become.png" width="650" height="340">
        </div>
        <button class="button primary large flex-row flex-algn-itms-c">
            <div class="section">
                Присоединиться
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
    <div class="scene pdng-t-5px mil-pdng-b-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Кто мы такие</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Мы — гражданская инициатива ZUBR, созданная беларусами для беларусов в 2020 году.<br><br>
                    <b class="txt-color-1">Наша цель — мониторинг электоральных кампаний в Беларуси, сбор и
                        систематизация данных о нарушениях.</b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <el-carousel indicator-position="none">
                    <el-carousel-item v-for="item of images1" :key="item.src">
                        <img :src="item.src" :alt="item.alt"
                             style="width: 300px;height: 300px;margin: auto;display: block;"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px mil-pdng-b-5px">
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
                    <b>Референдум не решит политический кризис и проблем в стране. Для этого нужны новые выборы.</b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <el-carousel indicator-position="none">
                    <el-carousel-item v-for="item of images2" :key="item.src">
                        <img :src="item.src" :alt="item.alt"
                             style="width: 300px;height: 300px;margin: auto;display: block;"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px mil-pdng-b-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Почему к нам стоит присоединится</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    В 2020 году, несмотря на беспредел властей на выборах, совместные усилия людей, скоординированные с
                    инициативами
                    «<a href="" class="txt-underline-inline">ZUBR</a>»,
                    «<a href="" class="txt-underline-inline">Голос</a>»
                    и «<a href="" class="txt-underline-inline">Честные люди</a>», правозащитными и партийными
                    организациями позволили доказать, что выборы были сфальсифицированы. И мировой опыт, и собственный
                    опыт беларусов говорит, что любые преступления нельзя игнорировать. Их нужно фиксировать. Только
                    активные действия граждан на всех этапах любых электоральных кампаний влияют на их исход.
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>Мы готовы поддерживать такие действия до смены режима и восстановления закона.</b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <el-carousel indicator-position="none">
                    <el-carousel-item v-for="item of images3" :key="item.src">
                        <img :src="item.src" :alt="item.alt"
                             style="width: 300px;height: 300px;margin: auto;display: block;"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px mil-pdng-b-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Что мы предлагаем</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Учитывая сегодняшний немыслимый уровень репрессий и оценив риски, мы предлагаем
                    беларусам покрыть краткосрочным независимым наблюдением и гражданским контролем так называемый
                    "референдум" именно потому, что его проведение незаконно. Через наш <a
                    href="https://t.me/zubr_in_bot" class="txt-underline">
                    чат-бот в Телеграме</a>
                    и онлайн-платформу ZUBR проведёт рекрутинг, обучение,
                    координацию активных граждан и сбор информации о готовящемся “референдуме” и ходе кампании.
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>
                        Любой избиратель Беларуси, в том числе и не имеющий без
                        официальной аккредитации в качестве наблюдателя,
                        может стать гражданским контролером и полностью анонимно
                        сообщить нам о замеченных нарушениях.
                    </b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <el-carousel indicator-position="none">
                    <el-carousel-item v-for="item of images5" :key="item.src">
                        <img :src="item.src" :alt="item.alt"
                             style="width: 300px;height: 300px;margin: auto;display: block;"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px mil-pdng-b-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Почему надо действовать прямо сейчас</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Режим в Беларуси использует и многоуровневую фальсификацию при голосовании,
                    и силовые и административные рычаги влияния на людей. После 2020 года ЦИК
                    будет мешать организовать законное независимое наблюдение всеми возможными
                    псевдозаконными способами. По избирательному кодексу период на кампанию по
                    референдуму может быть вдвое меньше, чем на выборы. Дату проведения “референдума”
                    объявят за максимально короткий срок, чтобы не допустить роста политической и гражданской
                    активности.<br>
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>
                        Поэтому нам всем нужно быть готовыми к гражданскому контролю и наблюдению ещё до назначения даты.
                    </b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <el-carousel indicator-position="none">
                    <el-carousel-item v-for="item of images6" :key="item.src">
                        <img :src="item.src" :alt="item.alt"
                             style="width: 300px;height: 300px;margin: auto;display: block;"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px mil-pdng-b-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Что можно делать уже сегодня</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Регистрируйтесь (это анонимно) на платформе ZUBR в качестве независимого наблюдателя или гражданского
                    контролёра и пройдите обучение. Мы призываем рассказывать всем о нашей инициативе.
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>Давайте вместе сделаем все, чтобы показать настоящую волу народа во время этого якобы плебисцита. </b>
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <el-carousel indicator-position="none">
                    <el-carousel-item v-for="item of images4" :key="item.src">
                        <img :src="item.src" :alt="item.alt"
                             style="width: 300px;height: 300px;margin: auto;display: block;"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
    <div class="scene pdng-t-5px">
        <div class="flex-row mil-flex-wrap">

            <div class="section size-100 pdng-r-30px mil-size-100 mil-pdng-0">
                <h2 class="txt-bold mrgn-b-30px">FAQ</h2>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        Кто такой гражданский контролер? Кто может им стать?
                    </summary>
                  <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                    <p class="txt-lh-1_3em">
                      Гражданский контроль — это контроль за действиями власти со стороны гражданского общества.
                      Это
                      противовес, который могут создать граждане на действия властей. В текущей ситуации в
                      Беларуси
                      гражданский контроль — это способ прореагировать и на так называемый “референдум” по
                      Конституции
                      в 2022 году. Его планирует провести гражданин, который сам назначил себя президентом и сам
                      многократно и грубо нарушил и продолжает нарушать Конституцию, и подконтрольные ему органы
                      “власти”.
                    </p>
                    <p class="txt-lh-1_3em">
                      Платформа ZUBR готова к сотрудничеству с аккредитованными независимыми наблюдателем на
                      участках.
                      Однако следить за “референдумом” помимо наблюдателей могут абсолютно все граждане Беларуси.
                      Любой неравнодушный гражданин может зарегистрироваться на платформе в качестве гражданского
                      контролера. Гражданские контролеры, внешне остающиеся в позиции простого избирателя, также
                      могут
                      сообщать на платформу ZUBR, что происходит на “референдуме”.
                    </p>
                  </div>
                </details>
                <details class="details-unit">
                  <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                      Зачем контролировать “референдум”, ведь все равно наши голоса украдут, как в 2020-м?
                  </summary>
                  <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                    <p class="txt-lh-1_3em">
                      Благодаря взаимодействию независимых наблюдателей на выборах в 2020 году с гражданскими
                      инициативами ZUBR и
                      "Честные люди" удалось документально зафиксировать и доказать фальсификации и их
                      исполнителей.
                      Эти документы и доказательства ждут своего часа до справедливого суда после восстановления
                      главенства закона в Беларуси.
                    </p>
                    <p class="txt-lh-1_3em">
                      Систематизировав наблюдение и гражданский контроль на "референдуме", мы сможем отследить
                      процесс голосования, усложнить и предотвратить подтасовку результатов, зафиксировать и
                      нарушения закона, и в целом, как и что происходит на участках. Получая достоверные и
                      объективные данные, мы сможем информировать общественность о замеченных нарушениях. Собрав
                      данные наблюдателей и гражданских контролеров на единой платформе, мы проведем их анализ,
                      сделаем обоснованные и доказанные выводы, составим итоговое заключение о прошедшем
                      "референдуме".
                      И, конечно, эти данные будут использоваться для будущих судов.
                    </p>
                  </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        План ZUBR + Честные Люди + Голоса
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                      <p class="txt-lh-1_3em">
                        Именно благодаря работе с независимыми наблюдателями и избирателями по технологиям этих трех
                          гражданских инициатив,
                          созданных беларусами для беларусов, было доказано, что выборы-2020 в Беларуси были
                          сфальсифицированы.
                      </p>
                      <p class="txt-lh-1_3em">
                          Наш план на "референдум" : мы все вместе идем на участки и все вместе делаем свои бюллетени
                          недействительными,
                          поставив в крестики напротив всех вариантов. Так мы все вместе перечеркиваем насилие, обман,
                          унижение и страх.
                          Так мы все вместе встречаемся на участках и понимаем, что нас по-прежнему большинство.
                          Так мы все вместе показываем режиму, что мы не принимаем этот фарс, и делаем все, что можем,
                          чтобы сломать их планы.
                      </p>
                      <p class="txt-lh-1_3em">
                          И при этом нужно максимально безопасно использовать все возможности, чтобы проконтролировать
                          голосование, подсчет
                          результатов и вообще все, что происходит на “референдуме”.
                      </p>
                    </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        Как обеспечивается анонимность и безопасность гражданских контролеров и наблюдателей?
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                      <p class="txt-lh-1_3em">
                          Наш самый главный приоритет — ваша безопасность. При регистрации вы указываете только район
                          Беларуси,
                          в котором вы будете наблюдателем или гражданским контролером.
                          Мы не собираем никаких личных сведений о вас и сохраняем полную анонимность и конфиденциальность
                          всех полученных данных.
                      </p>

                      <p class="txt-lh-1_3em">
                          С помощью сообщений о ходе “референдума” от наблюдателей и гражданских контролеров на
                          платформе ZUBR
                          будет собираться и отображаться статистика о нарушениях в целом по стране без указания на
                          то, с каких участков поступили сообщения.
                      </p>
                    </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        Как наблюдателю или гражданскому контролеру пройти обучение?
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                      <p class="txt-lh-1_3em">
                          Когда станет известна точная дата “референдума”, ZUBR откроет регистрацию наблюдателей и
                          гражданских контролеров.
                          После регистрации вы получаете доступ к обучающим материалам по избирательному законодательству
                          и разъяснения
                          о том, как работать с нашей платформой и чат-ботами.
                          Подписывайтесь на канал ZUBR в Телеграм, следите за публикациями и анонсами в социальных сетях
                      </p>
                    </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        Как наблюдателю или гражданскому контролеру сообщить о нарушении?
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                      <p class="txt-lh-1_3em">
                          Когда станет известна точная дата “референдума”, ZUBR откроет регистрацию наблюдателей и
                          гражданских контролеров.
                          После регистрации вы получаете доступ к обучающим материалам по избирательному законодательству
                          и
                          наблюдению и разъяснения о том, как работать с нашей платформой и чат-ботами.
                          Подписывайтесь на канал ZUBR в Телеграм, следите за публикациями и анонсами в социальных сетях.
                      </p>
                    </div>
                </details>
            </div>

        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import {defineComponent} from "vue";
import {ElCarousel, ElCarouselItem} from 'element-plus';

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
        ElCarousel,
        ElCarouselItem
    },
    setup() {
        return {
            images1: prepareArray(34, 1),
            images2: prepareArray(15, 2),
            images3: prepareArray(18, 3, true),
            images4: prepareArray(9, 4),
            images5: prepareArray(14, 5),
            images6: prepareArray(10, 6),
        }
    }
})
</script>
<style scoped>
/*
details {
    background: #eee;
    margin-bottom: 2rem;
    padding: .5rem 1rem;
}

summary {
    cursor: pointer;
}

summary > * {
    display: inline;
}

details summary::-webkit-details-marker {
    display: none
}

!* Убираем стандартный маркер Firefox *!
details > summary {
    list-style: none;
}

!* Добавляем собственный маркер для закрытого состояния *!
details summary:before {
    content: url('/img/icon/box_add.png');
    margin-right: 7px;
}

!* Добавляем собственный маркер для открытого состояния *!
details[open] summary:before {
    content: url('/img/icon/box_remove.png');
}
*/


</style>
