<template>
  <header-view></header-view>
  <div class="scene" style="margin-top:80px;">
    <h1 class="txt-color-2 txt-size-18px txt-normal pdng-l-40px pdng-r-40px">
      <dl>
        <dt class="txt-color-1 txt-inline txt-bold">
          ZUBR
        </dt>
        —
        <dd class="txt-inline">
          это платформа для наблюдателей и избирателей в Беларуси. Здесь можно узнать о любом из кандидатов и их
          кампаниях, любой из задействованных в выборах организациях, любом из членов избирательных комиссий на любом из
          работающих на этих выборах участков для голосования.
        </dd>
      </dl>
    </h1>
  </div>
  <div class="scene pdng-t-0">
    <div class="election-campaign-list" v-if="data">
      <div class="election-campaign-unit" v-for="(campaign) of data.campaigns">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div class="section flex-grow-all txt-size-18px pdng-20px pdng-l-40px pdng-r-40px grayscale">
            <div class="txt-color-1 txt-medium" v-if="campaign.started_at">
              {{ campaign.started_at }} - {{ campaign.ended_at }}
            </div>
            <div class="txt-color-1 txt-medium" v-else>
              Нет даты
            </div>
            <div class="txt-bold" v-if="campaign.started_at">
              Архив
            </div>
          </div>
          <div class="section border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <img src="/img/icon/flag_large.svg">
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-18px">
                  Нарушений
                </div>
                <div class="txt-size-18px txt-bold">
                  {{ campaign.messages.aggregate.count }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px"
             :class="{'grayscale' : !isLater(campaign.started_at)}"
        >
          <h2 class="txt-color-1 txt-size-36px txt-lh-1_1em">
            <a class="txt-underline-inline" :href="'/campaign/' + campaign.id">
              {{ campaign.name }}
            </a>
          </h2>
        </div>
      </div>

    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="/campaigns" class="button primary inline-flex flex-algn-itms-c pdng-l-40px pdng-r-40px">
        <div class="section">
          Показать все электоральные кампании
        </div>
        <div class="section mrgn-l-20px">
          <img src="/img/icon/arrow.svg">
        </div>
      </a>
    </div>
  </div>
  <div class="scene">
    <div class="pdng-b-40px">
      <h3 class="txt-size-36px txt-bold">
        Последние новости.
        <a class="txt-underline-2px" href="#">Всего 73 новости</a>.
      </h3>
    </div>
    <div class="">
      <div class="article-preview-unit">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          19:45, сегодня
        </time>
        <h4 class="txt-size-36px txt-bold txt-color-1">
          <a class="txt-underline-2px" href="#">
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
        <div class="article-preview-image pdng-b-20px">
          <img src="https://novayagazeta.ru/static/records/60a0cf3c93f24e15a5f398d5adb530f0.webp" alt="">
        </div>
        <div class="tag-wrp">
          <a class="tag-unit">Расследование</a>
          <a class="tag-unit">Анализ</a>
          <a class="tag-unit">Выборы 2020</a>
        </div>
      </div>
      <div class="article-preview-unit">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          19:45, сегодня
        </time>
        <h4 class="txt-size-36px txt-bold txt-color-1">
          <a class="txt-underline-2px" href="#">
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
  </div>
</template>
<script>
import {fetchCampaigns, isLater} from './Campaigns.vue'
import {defineComponent} from "vue";
import Header from "./Header.vue";

export default defineComponent({
  components: {
    'header-view': Header
  },
  setup() {
    const {data, load} = fetchCampaigns()
    load()
    return {
      data,
      isLater
    }
  }
})
</script>
<style scoped>

</style>
