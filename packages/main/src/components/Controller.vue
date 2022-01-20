<template>
    <header-view></header-view>
    <div class="scene mrgn-t-20px mil-mrgn-t-80px">
        <div class="section">
            <img src="/img/controller/become.png" width="650" height="340">
        </div>
        <a class="button primary large flex-row flex-algn-itms-c" href="https://t.me/zubr_in_bot">
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
        </a>
    </div>
    <div class="scene pdng-t-5px mil-pdng-b-5px">
        <div class="flex-row mil-flex-wrap">
            <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0 mil-pdng-b-30px">
                <h2 class="txt-bold">Кто мы такие</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    Мы — гражданская инициатива ZUBR, созданная беларусами для беларусов в 2020 году.
                    <span class="txt-color-1 txt-inline txt-bold">ZUBR.in</span> — это платформа онлайн-мониторинга
                    процессов голосования в Беларуси. Здесь публикуются сведения о ходе
                    голосования и нарушениях на участках по полученным от наблюдателей и избирателей сообщениям,
                    перечень всех комиссий и их состав, анализ результатов и отчеты об электоральных кампаниях.
                    <br>
                    <br>
                    В 2022 году любой гражданин Беларуси может сообщать в ZUBR о ходе так называемого "референдума". В
                    чат-боте ZUBR <a href="https://t.me/zubr_in_bot">@zubr_in_bot</a> размещены материалы для подготовки
                    к гражданскому контролю или наблюдению
                    с аккредитацией (на ваш выбор) и функционал для отправки сообщений на нашу платформу. С учетом
                    текущей ситуации все происходит анонимно. Мы не сохраняем данные наблюдателей и гражданских
                    контролеров.
                </p>
            </div>
            <div class="section size-50 mil-size-100 mil-pdng-0">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TI-rcwBgxCE"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
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
                <h2 class="txt-bold">Почему к нам стоит присоединиться</h2>
                <p class="txt-size-18px pdng-t-20px txt-lh-1_3em">
                    В 2020 году, несмотря на беспредел властей на выборах, совместные усилия людей, скоординированные с
                    инициативами
                    <a href="" class="txt-underline-inline">ZUBR</a>,
                    "<a href="" class="txt-underline-inline">Голос</a>"
                    и "<a href="" class="txt-underline-inline">Честные люди</a>", правозащитными и партийными
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
                        Любой избиратель Беларуси, в том числе и без
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
                    Режим в Беларуси использует и многоуровневую фальсификацию при голосовании, и силовые и
                    административные рычаги влияния, и усиленную пропаганду для воздействия на сознание людей.
                    После 2020 года ЦИК будет мешать организовать законное независимое наблюдение всеми возможными
                    псевдозаконными способами. По избирательному кодексу период на проведение референдума
                    может быть вдвое меньше, чем на выборы.
                    Дату проведения “референдума” объявят за максимально короткий срок, чтобы не допустить
                    роста политической и гражданской активности.
                    <br>
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>
                        Поэтому нам всем нужно заранее подготовиться к гражданскому контролю и наблюдению.
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
                    Когда будет объявлена дата референдума, переходите в чат-бот ZUBR <a
                    href="https://t.me/zubr_in_bot">@zubr_in_bot</a> .
                    Пройдите обучение для гражданских контролеров или независимых наблюдателей,
                    проверьте свои знания, изучите функционал для отправки сообщений о нарушениях. Это анонимно и
                    безопасно.
                </p>
                <p class="txt-size-18px txt-color-1">
                    Мы призываем рассказывать всем о нашей инициативе.
                </p>
                <p class="txt-size-18px txt-color-1">
                    <b>Давайте вместе сделаем все, чтобы показать настоящую волю народа во время этого якобы
                        плебисцита. </b>
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
                            Это противовес, который могут создать граждане на действия властей. В текущей ситуации в
                            Беларуси гражданский контроль — это способ прореагировать и на так называемый “референдум”
                            по Конституции в 2022 году.
                            Его планирует провести сама себя назначившая "власть", которая сама многократно и грубо
                            нарушила и продолжает нарушать Конституцию.
                        </p>
                        <p class="txt-lh-1_3em">
                            Платформа ZUBR по-прежнему готова к сотрудничеству с аккредитованными наблюдателями на
                            участках. Однако следить за “референдумом” помимо наблюдателей могут абсолютно все граждане
                            Беларуси. Любой беларус может узнать, как осуществлять гражданский контроль, и, внешне
                            оставаясь в позиции простого избирателя, сообщать на платформу ZUBR о давлении, манипуляциях
                            и нарушениях на "референдуме".
                        </p>
                    </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        Зачем контролировать “референдум”, ведь все равно наши голоса украдут, как в 2020-м?
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                        <p class="txt-lh-1_3em">
                            Благодаря взаимодействию наблюдателей с гражданскими инициативами ZUBR и "Честные люди" на
                            выборах в 2020 году удалось документально зафиксировать и доказать фальсификации и их
                            исполнителей. Эти документы и доказательства будут использоваться для справедливых судов
                            после восстановления главенства закона в Беларуси.
                        </p>
                        <p class="txt-lh-1_3em">
                            Через гражданский контроль и наблюдение на "референдуме" мы сможем отследить процесс
                            голосования, усложнить и предотвратить подтасовку результатов, зафиксировать и нарушения
                            закона, и в целом — как и что происходит на участках. Получая данные от гражданских
                            контролеров и наблюдателей на единой платформе, мы будем информировать общественность в
                            режиме реального времени, а после "референдума" проведем анализ этих данных, сделаем
                            обоснованные и доказанные выводы и составим итоговое заключение о прошедшем "плебисците". И,
                            конечно, эти данные будут использоваться для будущих судов.
                        </p>
                    </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        План ZUBR + Честные Люди + Голоса
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                        <p class="txt-lh-1_3em">
                            Именно благодаря работе с наблюдателями и избирателями по технологиям этих трех гражданских
                            инициатив, созданных беларусами для беларусов, было доказано, что выборы-2020 в Беларуси
                            были сфальсифицированы.
                        </p>
                        <p class="txt-lh-1_3em">
                            Наш план на "референдум": мы все вместе идем на участки и все вместе делаем свои бюллетени
                            недействительными, поставив крестики напротив всех вариантов. Так мы все вместе
                            перечеркиваем насилие, обман, унижение и страх. Так мы все вместе встречаемся на участках и
                            понимаем, что нас по-прежнему большинство. Так мы все вместе показываем режиму, что мы не
                            принимаем этот фарс, делаем все, что можем, чтобы не дать им беспрепятственно реализовать их
                            преступный план.
                        </p>
                        <p class="txt-lh-1_3em">
                            При этом мы предлагаем использовать возможности платформы ZUBR, чтобы проконтролировать
                            голосование, подсчет результатов и вообще все, что происходит на “референдуме” с соблюдением
                            максимальной безопасности для гражданских контролеров и наблюдателей.
                        </p>
                    </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        Как обеспечивается анонимность/безопасность гражданских контролеров и наблюдателей?
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                        <p class="txt-lh-1_3em">
                            Наш самый главный приоритет — ваша безопасность. При регистрации вы указываете только район
                            Беларуси, в котором вы будете наблюдателем или гражданским контролером. Мы не собираем
                            никаких личных сведений о вас, сохраняем полную анонимность и соблюдаем конфиденциальность
                            всех полученных данных.
                        </p>

                        <p class="txt-lh-1_3em">
                            С помощью сообщений о ходе “референдума” от гражданских контролеров и наблюдателей на
                            платформе ZUBR будет собираться и отображаться статистика о нарушениях в целом по стране без
                            указания на то, с каких участков поступили сведения.
                        </p>
                    </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        Как наблюдателю или гражданскому контролеру пройти обучение?
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                        <p class="txt-lh-1_3em">
                            После объявления точной даты “референдума” ZUBR откроет чат-бот в Телеграм <a
                            href="https://t.me/zubr_in_bot">@zubr_in_bot</a> с
                            обучающими материалами по избирательному законодательству, гражданскому контролю и
                            наблюдению и разделом для отправки сообщений о нарушениях до, во время и некоторое время
                            после "референдума".
                        </p>
                    </div>
                </details>
                <details class="details-unit">
                    <summary class="details-unit-sum pdng-20px txt-size-18px txt-bold txt-color-1">
                        Как наблюдателю или гражданскому контролеру сообщить о нарушении?
                    </summary>
                    <div class="details-unit-cont-wrp pdng-20px pdng-b-30px">
                        <p class="txt-lh-1_3em">
                            После объявления точной даты “референдума” ZUBR откроет чат-бот в Телеграм <a
                            href="https://t.me/zubr_in_bot">@zubr_in_bot</a> с
                            обучающими материалами по избирательному законодательству, гражданскому контролю и
                            наблюдению и разделом для отправки сообщений о нарушениях до, во время и некоторое время
                            после "референдума".
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
