<template>
    <header-view :active="'О проекте'"></header-view>
    <div class="scene mrgn-t-130px mil-mrgn-t-80px">
        <div class="flex-row mil-flex-column mil-flex-wrap">
            <div class="section size-50 mil-size-100">
                <h2 class="pdng-b-15px">О проекте</h2>
                <p>
                    ZUBR — это платформа для наблюдателей и избирателей в Беларуси. Цель проекта – фиксировать,
                    обрабатывать и отображать все сведения об процессах голосования в Беларуси,
                    в том числе в посольствах и консульствах страны за рубежом, в режиме реального времени.
                    Это позволит каждому беларусу максимально реализовать свое избирательное право и обеспечить
                    гражданское наблюдение за электоральными
                    кампаниями в полном соответствии с законодательством Республики Беларусь.
                </p>

                <p>
                    На платформе публикуются сведения о составах
                    <router-link :to="{name: 'commissions'}">комиссий</router-link>
                    на всех участках для голосования, в том числе — об
                    <router-link :to="{name: 'organizations'}">организациях</router-link>
                    , от которых выдвинуты члены комиссий, сведения о наблюдении и
                    <router-link :to="{name: 'controller'}">гражданском контроле</router-link>
                    на участках, а также подробности, новости и аналитика о проведенных и текущей
                    электоральных
                    <router-link :to="{name: 'campaigns'}">кампаниях</router-link>
                    . Например, с отчетом о президентских выборах 2020 в Беларуси можно ознакомиться
                    <router-link :to="{name: 'commissions'}">здесь</router-link>
                    .
                </p>
                <p>
                    Граждане Беларуси могут
                    <router-link :to="{name: 'controller'}">зарегистрироваться на платформе ZUBR.IN</router-link>
                    и
                    пройти обучение для наблюдателей и (или) гражданских контролеров. Вы сможете направлять
                    через чат-бот или непосредственно через сайт ZUBR информацию о работе комиссий в виде сообщений,
                    фото и видеосъемки. После регистрации мы предложим вам наиболее рациональное решение по выбору того
                    или иного участка с учётом покрытия участков наблюдением и гражданским контролем.
                    С учетом текущей ситуации в Беларуси мы не сохраняем ваши данные, все происходит анонимно.
                </p>
                <p>
                    Призываем всех граждан Беларуси использовать платформу ZUBR и рассказывать о ней родным, друзьям, и
                    своим
                    коллегам!
                </p>
            </div>
            <div class="section size-50 mil-size-100">
                <h3 class="pdng-t-30px pdng-b-15px">Партнеры</h3>

                <div class="committee-members-unit hide-hover mil-flex-column">
                    <div
                        class="section size-40 mil-size-100 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px mil-size-100">
                        <div class="flex-row flex-algn-itms-c">
                            <div class="section pdng-r-20px">
                                <div class="partner-photo">
                                    <img src="/img/about/golos.svg" width="148" height="53">
                                </div>
                            </div>
                            <a class="section" href="https://golos2020.org">
                                <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                                    Голос
                                </h2>
                                <div class="txt-color-2 txt-size-14px"></div>
                            </a>
                        </div>
                    </div>
                    <div
                        class="section size-40 mil-size-100 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px mil-size-100">
                        <div class="flex-row flex-algn-itms-c">
                            <div class="section pdng-r-20px">
                                <div class="partner-photo">
                                    <img src="/img/about/hp.png" height="60" width="70">
                                </div>
                            </div>
                            <a class="section" href="https://honest-people.by/">
                                <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                                    Честные люди
                                </h2>
                                <div class="txt-color-2 txt-size-14px">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Header from './Navbar.vue'

export default {
    components: {
        'header-view': Header
    },
}
</script>

<style scoped>

</style>
