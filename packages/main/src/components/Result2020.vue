<template>
    <header-view>
        <div class="header-subnav border-t-1px border-color2">
            <div
                class="section flex-row flex-algn-itms-c flex-grow-all flex-algn-slf-strch pdng-20px pdng-l-30px pdng-r-30px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
                <div class="section">
                    <div class="flex-row flex-algn-itms-c">
                        <div class="section">
                            <img src="/img/icon/flag_large.svg" class="zoom-0_75">
                        </div>
                        <div class="section pdng-l-15px" v-if="data">
                            <div class="txt-size-18px mil-txt-size-14px">
                                Сообщений
                            </div>
                            <div class="txt-size-18px txt-bold mil-txt-size-14px">
                                {{ data.commission.violations.length }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section pdng-l-40px mil-pdng-l-20px">
                    <a class="button medium primary" :href="botURL">
                        Участвовать
                    </a>
                </div>
            </div>
        </div>
    </header-view>
    <div class="scene mrgn-t-170px mil-mrgn-t-170px">
        <h3>Информация о результатах избирательной компании 2020 года</h3>
        <div class="col-md-6">
            <img src="/img/final2020.png" style="width: 70%;">
        </div>
        <div class="row">
            <div>
                <p>
                    <u>English version of statement</u>&nbsp;<strong>
                    <a target="_blank"
                       href="https://docs.google.com/document/d/1vgU7LvnWPzNcOVUdr_PeMbGgdK2voUlhZqzzq0xKkuc">here</a>
                </strong>
                </p>

                <p>Ссылка:
                    <a href="https://drive.google.com/file/d/17aK3JxBTGtzULB0-YZGOF0hJwhuViHO3/view?usp=sharing"
                       target="_blank">
                        https://drive.google.com/file/d/17aK3JxBTGtzULB0-YZGOF0hJwhuViHO3/view?usp=sharing
                    </a>
                </p>
                <p>
                    ZUBR публикует самый полный из имеющихся на данный момент наборов данных из итоговых протоколов 1362
                    участковых избирательных комиссий, находящихся во всех регионах Беларуси.
                    В том числе: 159 из Брестской области, 109 - из Витебской, 161 - из Гродненской, 109 - из
                    Гомельской, 274 - из Минской области, 102 - из Могилевской и 449 протоколов
                    участковых комиссий города Минска. Мы благодарим всех наблюдателей и избирателей, а также инициативу
                    “Честные люди” за присланные протоколы и наших волонтеров - за их обработку.
                </p>
                <p>
                    Цель нашей платформы - максимально оперативно фиксировать, обрабатывать и отображать все сведения об
                    избирательном процессе, чтобы способствовать
                    проведению выборов в полном соответствии с законодательством Республики Беларусь.
                </p>
                <p>
                    Публикуя этот набор, мы хотели бы предостеречь пользователей платформы от однозначных выводов,
                    основанных на данных из протоколов,
                    и напомнить, что на подавляющем числе участков независимые наблюдатели не могли полноценно
                    контролировать как сам ход голосования,
                    так и, во многих случаях, процесс подсчета голосов. Так, только по той информации, которая поступила
                    на ZUBR, наблюдатели сообщали
                    о недопуске к наблюдению внутри помещений для голосования 2270 раз. На 374 участках из 1363, с
                    которых нам удалось собрать итоговые
                    протоколы, наблюдатели сообщали о расхождении в числе проголосовавших по их подсчетам и протоколам
                    комиссии в течение досрочного голосования.
                    Как мы уже
                    <a href="https://www.youtube.com/watch?v=TUrB7JHX6Qk" target="_blank">объясняли</a> - искусственное
                    завышение явки комиссиями на досрочном голосовании приводит к манипуляции распределением голосов
                    в пользу или против тех или иных кандидатов в итоговом протоколе. В основной день голосования
                    сообщения о расхождениях в
                    подсчете проголосовавших избирателей наблюдателями и данными комиссий поступили с 267 участков. При
                    чем, если на досрочном
                    голосовании наблюдатели сообщали о завышении явки, 9 августа на 246 из этих участков наблюдатели
                    насчитали больше проголосовавших,
                    чем комиссии. Это может указывать на то, что значительно завысив число голосующих досрочно комиссии
                    вынуждены были искусственно
                    занижать число проголосовавших в день выборов во избежание достижения явки превышающей 100%. Не
                    вызывают доверия и такие показатели,
                    как полное отсутствие бюллетеней, признанных недействительными, на 697 избирательных участках с
                    числом проголосовавших превышающим несколько сотен,
                    а иногда и тысяч человек, из нашего набора данных. Мы также выявили логические несоответствия в 195
                    протоколах из которых были получены полные
                    данные. Исходя из вышеперечисленного, ZUBR не считает, что можно доверять официальным результатам
                    выборов, как минимум тем, которые содержаться
                    в полученных нами итоговых протоколах.
                </p>
                <p>
                    В наборе данных содержатся: уникальный код избирательной комиссии, адрес избирательного участка, все
                    доступные значения из полей итогового протокола,
                    а также сами фото копий протоколов, из которых были внесены данные. К сожалению, несмотря на
                    совместные усилия большого количества активистов/ок,
                    в нашем распоряжении имеется только 690 протокола с фото обеих сторон. Таблица также содержит
                    комментарии от наборщиков данных.
                </p>
                <br>
                <p>Ссылка:</p>
                <a href="https://drive.google.com/file/d/17aK3JxBTGtzULB0-YZGOF0hJwhuViHO3/view?usp=sharing"
                   target="_blank">
                    https://drive.google.com/file/d/17aK3JxBTGtzULB0-YZGOF0hJwhuViHO3/view?usp=sharing
                </a>
                <p>Сообщения о нарушениях:</p>
                <a href="https://docs.google.com/spreadsheets/d/1PQL6gSGB7VlWItyw2ErrwVziM_WCdMFq0ei1K4VJBlA/edit?usp=sharing"
                   target="_blank">
                    https://docs.google.com/spreadsheets/d/1PQL6gSGB7VlWItyw2ErrwVziM_WCdMFq0ei1K4VJBlA/edit?usp=sharing
                </a>
                <br>
                <br>
                <h4>Другие анализы по нашим данным</h4>
                <ul>
                    <li>
                        <a href="https://drive.google.com/file/d/1kSprtBUUtS1vb-W_jc4QJkPkoZPJBWxd/view"
                           target="_blank">Результаты от инициативы "Голос"</a>
                    </li>
                    <li>
                        <a href="https://novayagazeta.ru/articles/2020/08/13/86651-vbroshennyy-prezident"
                           target="_blank">
                            от Новой газеты
                        </a>
                    </li>
                    <li>
                        <a href="https://42.tut.by/697128?tg">
                            от Вадима Зипунникова, профессор кафедры биостатистики американской школы общественного
                            здравоохранения Джонса Хопкинса
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>

</template>

<script>
import Header from './Navbar.vue';

export default {
    name: "Result2020",
    components: {
        'header-view': Header
    },
    setup() {
        return {
            botURL: import.meta.env.VITE_BOT_URL,
        }
    }
}
</script>

<style scoped>

</style>
