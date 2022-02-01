<template>
    <header-view>
    </header-view>
    <div class="scene flex-row mil-flex-column">
        <el-affix :offset="120">
            <div class="section size-35 mil-size-100 pdng-r-30px">
                <div class="investigation-nav mil-pdng-b-50px">
                    <div class="investigation-nav-link">
                        <router-link to="#intro" active-class="active">Введение</router-link>
                    </div>
                    <div class="investigation-nav-link">
                        <router-link to="#commission_creating" active-class="active">Формирование комиссий</router-link>
                    </div>
                    <div class="investigation-nav-link">
                        <router-link to="#example1" active-class="active">Пример формирования комиссии №1</router-link>
                    </div>
                    <div class="investigation-nav-link">
                        <a href="#example2"> Пример формирования комиссии №2</a>
                    </div>
                    <div class="investigation-nav-link">
                        <a href="#results">Управление результатами</a>
                    </div>
                    <div class="investigation-nav-link">
                        <a href="#results_example">Пример управления результатами</a>
                    </div>
                    <div class="investigation-nav-link">
                        <a href="#participate">Вы можете повлиять на результат голосования</a>
                    </div>
                </div>
            </div>
        </el-affix>
        <div class="section size-65 mil-size-100">
            <div>
                <h1 class="txt-size-34px txt-uppercase txt-color-2 txt-ik2022-hdr">
                    Кто управляет фальсификациями в беларуси
                </h1>
                <img style="position:absolute; top:100%; left:0; height:15px;" class="size-40" src="/imgs/crpline-1.png"
                     alt="">
            </div>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-40px">
                Вкратце
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Рядовые члены комиссий содействуют или закрывают глаза на фальсификации. “Тройки” (председатель
                комиссии, его зам и секретарь) обеспечивают нужные цифры в протоколах. Всем процессом управляют
                представители исполнительной власти (исполкомы)
                под контролем КГБ.
            </p>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-01.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-01-mob.png" alt="">
            </div>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-30px" id="intro">
                Введение
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Выборы Президента в 2020-м привлекли наибольшее внимание к системе фальсификации голосования, которая
                сформировалась за 27 лет в Беларуси.
                Далее будет описан механизм и роли участников в искажении воли народа на основании личных свидетельств
                участников процесса.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Описанные далее механизмы сформулированы на основе показаний десятков членов избирательных комиссий
                (далее – ИК) по всей стране, имевших опыт участия в электоральных кампаниях прошлых лет, а также
                информации от действующих и уволившихся сотрудников государственного аппарата.
            </p>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-50px" id="commission_creating">
                Формирование комиссий
            </h2>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-02.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-02-mob.png" alt="">
            </div>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Процесс набора членов ИК начинается еще до официального объявления выборов или референдума. За
                формирование списка участников отвечает заместитель председателя исполнительного комитета (это может
                быть зам. по соц. вопросам или идеолог). На этом моменте отбираются лояльные или уязвимые сотрудники,
                например, матери-одиночки, которые не могут позволить себе потерять работу. Список направляется
                руководителю (председателю исполкома) или напрямую куратору из КГБ для проверки “благонадежности”. После
                проверки списки могут корректироваться или утверждаться окончательно.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt txt-bold">
                “Тройки”
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Как правило, фальсификациями руководит председатель, реже – его заместитель или секретарь. Это ключевые
                фигуры, которые напрямую влияют на цифры в итоговых протоколах и следят за остальным составом комиссий,
                чтобы “все были согласны”. Для этого могут быть использованы административные ресурсы (“пряники”:
                премии, благодарности, путевки в санатории и т.п.; “кнуты”: унижения, лишения премий, угрозы,
                увольнение, уголовные преследования). Чтобы механизм принуждения работал эффективнее, в комиссии
                выбирают членов одного коллектива.
            </p>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-03.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-03-mob.png" alt="">
            </div>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-50px" id="example1">
                Пример формирования комиссии #1
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <a class="txt-underline-inline" href="https://uik.xx2022.org/commission/4403">
                    Школьный участок для голосования №29:<br>
                    ГУО "Средняя школа №1 г. Фаниполь"
                </a>
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Председатель.</b> Директор школы – Холопица Анна Владимировна<br>
                <b>Секретарь.</b> Завуч школы – Юхович Ольга Викторовна
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Члены комиссии из школы (учителя и завучи)</b><br>
                Александрович Анна Анатольевна, Гайдукевич Ирина Францевна, Горбач Ирина Николаевна, Иванова Вера
                Федоровна, Коваленко Марина Михайловна, Стрелец Елена Михайловна.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Заместитель председателя.</b> Зам. директора ОАО “Дорстройиндустрия” – Чижик Иван Петрович<br>
                <b>Члены комиссии из ОАО “Дорстройиндустрия”</b><br>
                Байдак Алла Александровна<br>
                Кулиш Игорь Валентинович<br>
                Грицкевич Александр Иванович<br>
                Купревич Андрей Сергеевич
            </p>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-04.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-04-mob.png" alt="">
            </div>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-50px" id="example2">
                Пример формирования комиссии #2
            </h2>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <a class="txt-underline-inline" href="https://uik.xx2022.org/commission/2977">
                    Участок для голосования № 31:<br>
                    Общежитие ОАО "БМЗ” г. Жлобин (03-091-0031)
                </a>
            </p>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-05.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-05-mob.png" alt="">
            </div>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Председатель.</b><br>
                Селицкая Елена Николаевна – начальник бюро управления кадров БМЗ<br>
                <b>Заместитель председателя.</b> Желобкова Елена Николаевна – бригадир БМЗ<br>
                <b>Секретарь.</b> Качмар Елена Викторовна – сотрудник БМЗ
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Члены комиссии.</b><br>
                Все, кроме одного члена ИК, – сотрудники БМЗ, подчиненные председателю:<br>
                Доманцевич Галина Александровна, Короткевич Ирина Валерьевна, Матлаш Вероника Владимировна, Науменко
                Владимир Иванович, Савельев Федор Васильевич, Терещенко Елена Николаевна, Шабеко Зоя Николаевна.
                Юркявичус Ирина Викторовна – сотрудница Жлобинского райисполкома .
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Несмотря на то, что члены ИК были выдвинуты разными организациями («Белорусское Общество Красного
                Креста», Профсоюз, «Белорусский фонд мира», БРСМ, «Белая Русь», «От рабочего коллектива», «От граждан»),
                <br>
                в “Тройке” есть прямые начальники каждого из членов комиссии, которые могут влиять на подписание нового
                контракта или досрочное его прекращение.
            </p>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-06.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-06-mob.png" alt="">
            </div>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-30px" id="results">
                Управление результатами
            </h2>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt mrgn-t-30px">
                Управление результатами голосования – это преступление, а не рядовая задача. Поэтому на разных участках
                могут принимать участие сотрудники разных должностей. Но общая механика подчинения везде одинаковая:
                <br>
                <b>ЦИК » Исполком » Тройка.</b>
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Сотрудники ЦИК разрабатывают “правильные” цифры для итоговых протоколов и рассылают их сотрудникам
                исполнительных комитетов, чтобы те передали их руководителям ИК.
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Исполкомы.</b>
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                В зависимости от размера населенного пункта, “правильные” цифры от ЦИК могут передаваться председателю
                исполкома или его заместителям.
                Как правило, председателю исполкома помогают (1) заместитель по соц. вопросам, (2) идеолог или (3) зам.
                по кадрам. Они в частном порядке внушают “тройкам”: как должны в итоговом протоколе выглядеть голоса
                граждан, кто может войти в состав ИК, кого нужно исключить, кто будет наблюдателем.
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Территориальные комиссии.</b>
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                После фальсификаций на уровне участков данные передаются в ТИК – территориальные избирательные комиссии
                (районные, городские, областные). На этом уровне уже нет избирателей, которые могли бы отследить
                несоответствие результатов и протокола, нет независимых наблюдателей, а весь состав “тройки” ТИК – это
                сотрудники исполкомов. Как правило, это и есть “заказчики” фальсификаций нижестоящих комиссий. После
                подписания протоколов территориальных комиссий (в 2020 протоколы ТИК разошлись с официальными данными
                участковых комиссий), документы передают областным комиссиям и далее в ЦИК. На этом уровне практически
                нет препятствий для фальсификации.
            </p>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-50px" id="results_example">
                Пример управления результатами
            </h2>
            <p class="txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <a class="txt-underline-inline" href="https://uik.xx2022.org/commission/71">
                    Жлобинская районная избирательная комиссия
                </a>
            </p>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-07.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-07-mob.png" alt="">
            </div>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Председатель.</b> Нехай Валентина Васильевна<br>
                Заместитель председателя Жлобинского райисполкома по социальным вопросам
                <br><br>
                <b>Заместитель председателя.</b> Ярашава Ольга Ивановна – управ. делами Жлобинского районного
                исполнительного комитета
                <br><br>
                <b>Секретарь.</b> Мельникова Инна Федоровна – начальник отдела организационно-кадровой работы
                Жлобинского райисполкома.
            </p>
            <p class="mrgn-t-30px txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <a class="txt-underline-inline" href="https://uik.xx2022.org/commission/59">
                    Гомельская областная комиссия
                </a>
            </p>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-08.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-08-mob.png" alt="">
            </div>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>Председатель.</b> Неверов Алексей Николаевич – председатель Гомельского областного объединения
                профсоюзов, член Совета Республики Национального собрания Республики Беларусь седьмого созыва от
                Гомельской области.
                <br><br>
                <b>Заместитель председателя.</b> Лукьяненко Тамара Демьяновна – заместитель начальника главного
                управления организационно-кадровой работы
                <br><br>
                <b>Секретарь.</b> Зубец Василий Николаевич – начальник областного управления Республиканского центра по
                оздоровлению и санаторно-курортному лечению населения.
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                <b>КГБ</b>
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Для контроля за итогами голосования за каждым исполкомом закреплены сотрудники КГБ, которые прослушивают
                телефонные разговоры, инициируют уголовные дела или
                <a href="https://belsat.eu/ru/news/09-03-2021-ya-ne-veryu-v-suitsid-roditeli-pogibshego-direktora-volkovysskogo-muzeya-rasskazali-o-syne/">
                    убийства
                </a>
                . Это не тайное наблюдение, а открытое
                взаимодействие с кадровиками и идеологами, в ходе которого представители исполкомов могут жаловаться на
                отдельных членов ИК или других участников процесса, которые отказываются или противодействуют
                фальсификации.
            </p>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-50px">
                Заключение
            </h2>
            <div class="img-wrp pdng-t-20px pdng-b-20px">
                <img class="size-100 mil-notdisplay" src="/imgs/investigation-09.png" alt="">
                <img class="size-100 notdisplay mil-show" src="/imgs/investigation-09-mob.png" alt="">
            </div>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                КГБ напрямую подчиняется Лукашенко.<br>
                Председатели исполкомов назначаются или утверждаются Лукашенко.<br>
                Заместители председателей исполкомов подчиняются и следуют указаниям своих руководителей. Руководители
                школ и других организаций, где проводится голосование, вместе с идеологами формируют составы комиссий и
                управляют ими сотрудничая с КГБ.
            </p>
            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Но, несмотря на все эти усилия, всей этой системе не удается уверенно фальсифицировать голосование.
                Расхождения в протоколах и альтернативных подсчетах, расхождения между результатами участков в области и
                областным протоколом ТИК, отказы комиссий фальсифицировать и прямые свидетельские показания о нарушениях
                – все это говорит о том, что система отлаженно работает только без внимания граждан. Если на участки
                приходит 30% избирателей, которые поддерживают режим, то вбросы, дописки и фальсификации не вызывают
                сложности. Но когда система сталкивается с большим количеством несогласных избирателей – все механизмы
                фальсификации начинают давать сбои.
            </p>

            <p class=" txt-size-15px txt-lh-1_5em txt-ik2022-txt">
                Поэтому важно активно воздействовать на систему: проявлять свое несогласие, делать бюллетени
                недействительными, фиксировать все нарушения, использовать платформу альтернативного подсчета голосов.
            </p>
            <h2 class="txt-size-34px txt-uppercase txt-ik2022-hdr txt-normal mrgn-t-50px" id="participate">
                Вы можете повлиять на результат голосования
            </h2>

            <div class="wrp journal-2022 flex-row mil-block">
                <div class="section size-50 pdng-15px pdng-l-0 mil-size-100 mil-pdng-0">
                    <div
                        class="journal-2022-unit pdng-20px pdng-b-30px txt-algn-c mil-pdng-t-30px mil-pdng-b-50px mil-mrgn-0">
                        <img class="journal-2022-unit-bg" src="/imgs/jrn-2.png" alt="">
                        <div>
                            <svg width="55" height="66" viewBox="0 0 55 66" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.0332" y="1.5" width="52.9357" height="62.6" rx="3" stroke="white"
                                      stroke-width="2" stroke-linejoin="round"></rect>
                                <path d="M11.0195 19.2012H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 12.4004H31.1626" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 9.00195H31.1626" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 26H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 32.7988H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 39.5996H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 46.3984H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 53.2012H36.6562" stroke="white" stroke-width="2"></path>
                            </svg>
                        </div>
                        <div class="mrgn-t-20px mrgn-b-30px">
                            <h3 class="txt-size-32px txt-uppercase txt-bold txt-ik2022-hdr">
                                Наблюдение
                            </h3>
                            <p class="txt-size-32px txt-uppercase txt-light txt-ik2022-hdr">
                                за “референдумом”
                            </p>
                        </div>
                        <a href="https://zubr.in" class="journal-2022-button cursor-pointer size-50">
                            Подробнее
                        </a>
                    </div>
                </div>
                <div class="section size-50 pdng-15px pdng-r-0 mil-size-100 mil-pdng-0 mil-pdng-t-30px">
                    <div class="journal-2022-unit pdng-20px pdng-b-30px txt-algn-c mil-pdng-t-30px mil-pdng-b-50px">
                        <img class="journal-2022-unit-bg" src="/imgs/jrn-3.png" alt="">
                        <div>
                            <svg width="55" height="66" viewBox="0 0 55 66" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.0332" y="1.5" width="52.9357" height="62.6" rx="3" stroke="white"
                                      stroke-width="2" stroke-linejoin="round"></rect>
                                <path d="M11.0195 19.2012H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 12.4004H31.1626" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 9.00195H31.1626" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 26H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 32.7988H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 39.5996H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 46.3984H45.8121" stroke="white" stroke-width="2"></path>
                                <path d="M11.0195 53.2012H36.6562" stroke="white" stroke-width="2"></path>
                            </svg>
                        </div>
                        <div class="mrgn-t-20px mrgn-b-30px">
                            <h3 class="txt-size-32px txt-uppercase txt-bold txt-ik2022-hdr">
                                Участие
                            </h3>
                            <p class="txt-size-32px txt-uppercase txt-light txt-ik2022-hdr">
                                в избирательной комиссии
                            </p>
                        </div>
                        <router-link :to="{name: 'to_honest_members'}"
                                     class="journal-2022-button cursor-pointer size-50">
                            Поддержка
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue';
import {defineComponent} from "vue";
import {ElAffix} from 'element-plus'

export default defineComponent({
    components: {
        'header-view': Header,
        ElAffix
    }
})
</script>
