<template>
  <header-view :active="'О проекте'">
  </header-view>
  <div class="scene mrgn-t-130px mil-mrgn-t-80px">
    <h2 class="pdng-b-15px">О проекте</h2>
    <p>ZUBR — это платформа для наблюдателей и избирателей в Беларуси.</p>

    <p>
      Здесь можно узнать подробности и новости о проведенных и текущей электоральных
      <router-link :to="{name: 'campaigns'}">кампаниях</router-link>
      ,
      составах избирательных
      <router-link :to="{name: 'commissions'}">комиссий</router-link>
      на всех участках для голосования,
      <router-link :to="{name: 'organizations'}">организациях</router-link>
      , от которых выдвинуты члены комиссий.
    </p>
    <p>
      На карте ZUBR (вкладка Комиссии\Карта) можно найти и подписаться на описание одного или
      нескольких избирательных участков, например,
      по месту жительства. Это позволяет в любой момент узнать, как обстоят дела на участке.
    </p>
    <p>
      На платформе ZUBR можно зарегистрироваться наблюдателем на конкретном участке. После регистрации мы предложим
      Вам наиболее рациональное решение по выбору того или иного участка с учётом покрытия участков наблюдателями.
    </p>
    <p>
      Кроме того, и наблюдатели, и избиратели могут направлять через <a href="https://t.me/zubr_in_bot"> чат-бот</a> или
      непосредственно через сайт <a href="/">ZUBR</a> отправлять информацию о работе избирательных комиссий в
      виде сообщений, фото и видеосъемки.
    </p>
    <p>
      Цель проекта ZUBR – фиксировать, обрабатывать и отображать все сведения об
      избирательных процессах в Беларуси, в том числе в посольствах и консульствах
      страны за рубежом, в режиме реального времени. Это позволит каждому беларусу
      максимально реализовать свое избирательное право и обеспечить гражданское
      наблюдение за электоральными кампаниями в полном соответствии с законодательством Республики Беларуси.
    </p>
    <p>
      Призываем всех граждан Беларуси использовать платформу ZUBR и рассказывать о ней родным, друзьям, и своим
      коллегам!
    </p>
    <h3 class="pdng-t-10px pdng-b-15px">Команда</h3>
    <p>
      По всем вопросам <a href="mailto:zubr.contact@gmail.com">zubr.contact@gmail.com</a>
    </p>

    <div class="committee-members-list pdng-t-10px">
      <a class="committee-members-unit mil-flex-column">
        <div class="section size-40 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px mil-size-100">
          <div class="flex-row flex-algn-itms-c">
            <div class="section pdng-r-20px">
              <div class="person-photo">
                <img src="/img/about/marinich.jpeg">
              </div>
            </div>
            <div class="section">
              <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                Павел Маринич
              </h2>
              <div class="txt-color-2 txt-size-14px">
                Руководитель
              </div>
            </div>
          </div>
        </div>
        <div class="section size-40 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px mil-size-100">
          <div class="flex-row flex-algn-itms-c">
            <div class="section pdng-r-20px">
              <div class="person-photo">
                <img src="/img/about/potapov.png">
              </div>
            </div>
            <div class="section">
              <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                Павел Потапов
              </h2>
              <div class="txt-color-2 txt-size-14px">
                CTO
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <h3 class="pdng-t-15px pdng-b-15px">Партнеры</h3>

    <div class="committee-members-list pdng-t-10px">
      <div class="committee-members-unit mil-flex-column">
        <div class="section size-40 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px mil-size-100">
          <div class="flex-row flex-algn-itms-c">
            <div class="section pdng-r-20px">
              <div class="partner-photo">
                <img src="/img/about/golos.svg">
              </div>
            </div>
            <a class="section"  href="https://golos2020.org">
              <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
                Голос
              </h2>
              <div class="txt-color-2 txt-size-14px"></div>
            </a>
          </div>
        </div>
        <div class="section size-40 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px mil-size-100">
          <div class="flex-row flex-algn-itms-c">
            <div class="section pdng-r-20px">
              <div class="partner-photo">
                <img src="/img/about/hp.jpg">
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
</template>

<script>
import Header from './Header.vue'

export default {
  components: {
    'header-view': Header
  },
}
</script>

<style scoped>

</style>
