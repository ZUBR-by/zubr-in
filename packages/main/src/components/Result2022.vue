<template>
    <header-view></header-view>
    <div class="scene mrgn-t-170px mil-mrgn-t-170px">
        <h2 class="txt-color-1"><strong>"ГОЛОС", "ЧЕСТНЫЕ ЛЮДИ", ZUBR: ОТЧЕТ О "РЕФЕРЕНДУМЕ"-2022 В БЕЛАРУСИ</strong></h2>
        <p style="padding-top: 7px">
            <a href="/files/ref2022_en.pdf">Full statement (Eng)</a>
        </p>
        <div class="row">
            <div style="font-size: 18px">
                <p style="padding-top: 15px">В совместном отчете беларусских гражданских инициатив <a
                    href="https://golos2020.org/home">“Голос”</a>,
                    <a href="https://honest-people.by/">“Честные люди”</a> и ZUBR представлены результаты
                    гражданско-политической кампании
                    <a href="https://xx2022.org/">“Перечеркни референдум – перечеркни беззаконие”</a> в период
                    “референдума” по внесению изменений в Конституцию, который был заявлен к проведению нелегитимным
                    режимом Лукашенко в Беларуси в феврале
                    2022 года. Кампания “Перечеркни референдум – перечеркни беззаконие” проводилась инициативами
                    совместно с объединенными беларусскими демократическими силами – Офисом Светланы Тихановской,
                    Народным Антикризисным Управлением и Координационным Советом.</p>

                <p>В отчете используются и анализируются поступившие в ходе кампании данные от граждан и из открытых
                    ресурсов (публикации СМИ, сведения правозащитных организаций) о подготовке и ходе “референдума”.
                    <strong>
                        Полученные результаты указывают на изначальную неправомерность проведения в Беларуси в
                        указанный
                        период какого бы то ни было электорального процесса в принципе и подтверждают очевидное
                        использование режимом в Беларуси и уже известных, и новых механизмов фальсификаций и манипуляций
                        для
                        создания видимости открытости и прозрачности такого процесса.
                    </strong>
                </p>

                <p><strong>С учетом того, что в условиях репрессий и войны проведение любого народного волеизъявления в
                    принципе
                    не является возможным, настоящим выбором беларусов в период "референдума" стал протест как против
                    собственно “референдума”, организованного не признаваемой с 2020 года ни большинством беларусов, ни
                    международным сообществом властью, так и против войны, начатой Россией 24 февраля в Украине, в
                    которой эта нелегитимная власть в Беларуси предоставляет территорию страны для нахождения и
                    передвижения российских войск и их нападения на Украину.</strong>
                </p>

                <p>Инициативы “Голос”, “Честные люди” и ZUBR выражают искреннюю признательность и глубокое уважение всем
                    гражданам Беларуси, которые откликнулись на призыв к участию в кампании “Перечеркни референдум –
                    перечеркни беззаконие” и присылали информацию,
                    рискуя своей безопасностью в условиях репрессий и подавления гражданской активности.</p>
                <p style="padding-top: 7px">
                    <a href="/files/ref2022.pdf">Полный текст отчета (Рус)</a>
                </p>
                <p style="padding-top: 7px">
                    <a href="/files/ref2022_by.pdf">Полный текст отчета (Бел)</a>
                </p>

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
