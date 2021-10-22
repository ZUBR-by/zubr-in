<template>
  <header-view></header-view>
  <div class="scene mil-mrgn-t-80px">
    <h1 class="txt-color-2 txt-size-18px txt-normal pdng-l-40px pdng-r-40px">
      <dl>
        <dt class="txt-color-1 txt-inline txt-bold">
          ZUBR.in
        </dt>
        —
        <dd class="txt-inline">
          это платформа онлайн-мониторинга избирательного процесса Республики Беларусь. Тут вы можете найти
          актуальные данные по наблюдению за избирательным процессом: сообщения о нарушениях от наблюдателей с избирательных
          участков, перечень избирательных комиссий и их состав, а также анализ результатов электоральных кампаний от различных инициатив.
        </dd>
      </dl>
    </h1>
  </div>

  <div class="scene pdng-t-0">
    <div class="election-campaign-list" v-if="data">
      <div class="election-campaign-unit" v-for="(campaign) of data.campaigns">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div
              class="section flex-grow-all txt-size-20px mil-txt-size-15px pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-l-20px">
            <div class="txt-color-1 txt-medium" v-if="campaign.started_at"
                 :class="{'grayscale' : !isLater(campaign.started_at)}">
              {{ campaign.started_at }} - {{ campaign.ended_at }}
            </div>
            <div class="txt-color-1 txt-medium" v-else>
              Нет даты
            </div>
            <div class="txt-bold" v-if="campaign.started_at">
              Архив
            </div>
          </div>
          <div
              class="section flex-algn-slf-strch flex-row flex-algn-itms-c border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-r-20px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="mil-zoom-0_75" width="25" height="33" viewBox="0 0 25 33" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                      fill="#FF5C01"/>
                  <rect y="1" width="2" height="32" fill="#FF5C01"/>
                </svg>
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-20px mil-txt-size-15px mil-notdisplay">
                  Нарушений
                </div>
                <div class="txt-size-20px mil-txt-size-15px txt-bold txt-nowrap">
                  {{ campaign.messages.aggregate.count }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="elect-camp-unit-info pdng-t-30px pdng-b-50px pdng-l-40px pdng-r-40px mil-pdng-l-20px mil-pdng-r-20px mil-pdng-b-40px"
            :class="{'grayscale' : !isLater(campaign.started_at)}">
          <h2 class="txt-color-1 txt-size-48px mil-txt-size-34px txt-lh-1_1em">
            <a class="txt-underline-inline-2px" :href="'/campaign/' + campaign.id">
              {{ campaign.name }}
            </a>
          </h2>
          <div class="tag-wrp mrgn-t-20px" v-if="campaign.extra.type">
            <a class="tag-unit" v-if="['parliamentary_elections', 'presidential_elections'].includes(campaign.extra.type)">
              Общереспубликанские выборы
            </a>
            <a class="tag-unit" v-if="['local_elections'].includes(campaign.extra.type)">
              Местные выборы
            </a>
            <a class="tag-unit" v-if="['referendum'].includes(campaign.extra.type)">
              Референдум
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="scene">
    <div class="pdng-b-40px">
      <h3 class="txt-size-36px mil-txt-size-30px txt-bold">
        Последние новости.
        <a class="txt-underline-inline-2px" href="#">Всего 73 новости</a>.
      </h3>
    </div>
    <div class="">
      <div class="article-preview-unit">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          19:45, сегодня
        </time>
        <h4 class="txt-size-36px mil-txt-size-30px txt-bold txt-color-1">
          <a class="txt-underline-inline-2px" href="#">
            Вброшенный президент
          </a>
        </h4>
        <h5 class="txt-size-28px mil-txt-size-24px txt-bold mrgn-t-15px">
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
        <h4 class="txt-size-36px mil-txt-size-30px txt-bold txt-color-1">
          <a class="txt-underline-inline-2px" href="#">
            Вброшенный президент
          </a>
        </h4>
        <h5 class="txt-size-28px mil-txt-size-24px txt-bold mrgn-t-15px">
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
