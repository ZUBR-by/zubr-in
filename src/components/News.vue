<template>
  <header-view></header-view>
  <div class="scene">
    <div class="article-group">
      <div class="pdng-b-40px">
        <h3 class="txt-size-36px txt-bold">
          13 августа 2020
        </h3>
      </div>
      <div class="article-preview-unit shadow-type-5" v-for="item of [1,2,3]">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          19:45, сегодня
        </time>
        <h4 class="txt-size-36px txt-bold txt-color-1">
          <a class="txt-underline-2px" href="/news/1">
            Вброшенный президент
          </a>
        </h4>
        <h5 class="txt-size-28px txt-bold mrgn-t-15px">
          Как белорусские УИКи не смогли «нарисовать» нужный результат Лукашенко, а Тихановская выиграла выборы.
          Исследование «Новой».
        </h5>
        <div class="pdng-t-30px pdng-b-30px">
          <p>
            <a class="txt-underline" href="#">По версии белорусской ЦИК</a>, более 80% избирателей проголосовали за то,
            чтобы Александр Лукашенко стал главой государства в шестой раз и остался у власти еще на пять лет, а его
            главную соперницу — Светлану Тихановскую — поддержали скромные 10%.
          </p>
          <p>
            Чтобы защитить свой реальный выбор, белорусы не только выходят на улицы, но и пытаются организовать
            «народный Центризбирком» — ведут подсчет голосов своими силами. Собрать полные данные по всей стране
            невозможно, однако даже доступная часть протоколов показывает, что участковые комиссии «рисовали» спущенные
            сверху результаты во время досрочного голосования.
          </p>
        </div>
        <div class="tag-wrp">
          <a class="tag-unit">Расследование</a>
          <a class="tag-unit">Анализ</a>
          <a class="tag-unit">Выборы 2020</a>
        </div>
      </div>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="#" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще 10 новостей из 111
      </a>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue';
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    'header-view': Header
  }
})
</script>
