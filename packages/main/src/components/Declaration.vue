<template>
    <header-view>
    </header-view>
    <div class="scene mrgn-t-170px mil-mrgn-t-170px">
        <div class="article-view">
            <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
                {{ formatDate('2022-02-27T18:00:00') }}
            </time>
            <h2 class="txt-size-32px txt-bold mrgn-t-15px mil-txt-size-28px">
                ЗАЯВЛЕНИЕ БЕЛАРУСОВ ПРОТИВ УЧАСТИЯ В ВОЙНЕ С УКРАИНОЙ
            </h2>
            <div class="pdng-t-40px txt-size-18px mil-txt-size-16px">
                <p class="pdng-b-20px">
                    Мы, представители и представительницы гражданского общества Беларуси, требуем от беларусских
                    военных:
                </p>
                <ul>
                    <li>отказаться выполнять преступные приказы командования об участии в военных действиях против
                        Украины;
                    </li>
                    <li>саботировать действия российских военных против Украины;</li>
                    <li>в случае невозможности – уходить из армии и силовых структур, чтобы не стать участниками
                        авантюры руководства России и военными преступниками.;
                    </li>
                </ul>
                <p class="pdng-b-20px pdng-t-10px">
                    Пока эти требования не будут выполнены, мы будем всеми доступными способами:
                </p>
                <ul>
                    <li>выражать свой протест против войны;</li>
                    <li>препятствовать передвижению военной техники и войск в сторону Украины;</li>
                    <li>распространять правду о том, что происходит в Украине и Беларуси;</li>
                    <li>поддерживать украинских военнослужащих в отражении агрессии России и защите; независимости и
                        территориальной целостности Украины и мирное население;
                    </li>
                    <li>не допускать отправки наших родных на фронт.</li>
                </ul>

                <h3>НЕТ УЧАСТИЮ БЕЛАРУСИ В ВОЙНЕ С УКРАИНОЙ</h3>

                Заявление поддержали:
                <ul>
                    <li>Гражданская инициатива ZUBR https://t.me/zubr_in</li>
                    <li>Водители 97 ⚡️ https://t.me/drivers_97</li>
                    <li>Яднайся https://t.me/supolka_by</li>
                    <li>Менторская программа развития сообществ Пачатак.</li>
                    <li>Фонд Медицинской Солидарности Беларуси https://bymedsol.org/</li>
                    <li>Сообщество беларусских медиков “Белые Халаты” https://t.me/belhalat_by</li>
                    <li>GIRLS POWER BELARUS https://t.me/girlspowerblr</li>
                    <li>BYSOL https://bysol.org/en/</li>
                    <li>Рабочы Рух https://t.me/rabochyruh</li>
                    <li>Молодежный блок https://www.instagram.com/moladzbel/</li>
                    <li>Правовая инициатива www.legin.by</li>
                    <li>Freeunion.online,сервис для работы и координации сообществ.</li>
                    <li>Беларускі нацыянальны моладзевы савет “РАДА”</li>
                    <li>низовые фем, ЛГБТК+ активист_ки</li>
                    <li>Белорусский Хельсинкский Комитет, www.belhelcom.org</li>
                    <li>Правозащитный центр "Весна"</li>
                    <li>“Беларусский дом прав человека им.Б.Звозского»</li>
                    <li>Экодом</li>
                    <li>Мэта-Беларусь</li>
                </ul>
                <p class="pdng-t-20px">
                    Если хотите добавить подпись вашей инициативы, то пишите на zubr.contact@gmail.com. Подписи будут
                    обновляться.
                </p>
            </div>
        </div>
    </div>
    <div class="scene" v-if="false">
        <h3 class="txt-size-36px txt-bold pdng-b-40px">
            Вам также может быть интересно:
        </h3>
        <div class="article-group">
            <div class="article-preview-unit shadow-type-5">
                <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
                    19:45, сегодня
                </time>
                <h5 class="txt-size-36px txt-bold txt-color-1">
                    <a class="txt-underline-2px" href="#">
                        Вброшенный президент
                    </a>
                </h5>
                <h6 class="txt-size-28px txt-bold mrgn-t-15px">
                    Как белорусские УИКи не смогли «нарисовать» нужный результат Лукашенко, а Тихановская выиграла
                    выборы.
                    Исследование «Новой».
                </h6>
                <div class="tag-wrp mrgn-t-10px">
                    <a class="tag-unit">Расследование</a>
                    <a class="tag-unit">Анализ</a>
                    <a class="tag-unit">Выборы 2020</a>
                </div>
            </div>
            <div class="article-preview-unit shadow-type-5">
                <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
                    19:45, сегодня
                </time>
                <h5 class="txt-size-36px txt-bold txt-color-1">
                    <a class="txt-underline-2px" href="#">
                        Вброшенный президент
                    </a>
                </h5>
                <h6 class="txt-size-28px txt-bold mrgn-t-15px">
                    Как белорусские УИКи не смогли «нарисовать» нужный результат Лукашенко, а Тихановская выиграла
                    выборы.
                    Исследование «Новой».
                </h6>
                <div class="tag-wrp mrgn-t-10px">
                    <a class="tag-unit">Расследование</a>
                    <a class="tag-unit">Анализ</a>
                    <a class="tag-unit">Выборы 2020</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
iframe {
    display: none;
}
</style>
<script>
import Header from './Header.vue';
import {defineComponent} from "vue";
import {formatDate} from '../date'


export default defineComponent({
    components: {
        'header-view': Header
    },
    setup() {
        return {
            formatDate
        }
    }
})
</script>
