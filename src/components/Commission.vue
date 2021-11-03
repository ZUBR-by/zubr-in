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
          <div class="button medium primary">
            Сообщить о нарушении
          </div>
          <div class="button medium mrgn-l-20px mil-mrgn-l-10px">
            Стать наблюдателем
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene-wrp bg-color-1 border-b-1px border-color1">
    <div class="scene mrgn-t-170px mil-mrgn-t-170px">
      <div class="flex-row mil-flex-wrap" v-if="data">
        <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
          <h1 class="txt-size-32px">
            {{ data.commission.name }}
          </h1>
          <h2 class="txt-size-20px">
            {{ data.commission.description }}
          </h2>
          <div class="tag-wrp mrgn-t-20px" v-if="false">
            <a class="tag-unit">
              Минск
            </a>
          </div>
          <div class="mrgn-t-40px" v-if="data.commission.extra.area">
            <p>
              {{ data.commission.extra.area }}
            </p>
          </div>
          <div class="mrgn-t-40px">
            <div class="infoblock">
              <div class="infoblock-name">Адрес:</div>
              <div class="infoblock-value">{{ data.commission.address }}</div>
            </div>
            <div class="infoblock">
              <div class="infoblock-name">Тип комиссии:</div>
              <div class="infoblock-value">
                {{ map[data.commission.kind] ? map[data.commission.kind] : data.commission.kind }}
              </div>
            </div>
            <div class="infoblock">
              <div class="infoblock-name">Код комиссии:</div>
              <div class="infoblock-value">{{ data.commission.code }}</div>
            </div>
            <div class="infoblock" v-if="data.commission.parents.length > 0">
              <div class="infoblock-name">Вышестоящая комиссия:</div>
              <div class="infoblock-value">
                <a class="txt-underline-inline" :href="'/commission/' + data.commission.parents[0].parent_org.id">
                  {{ data.commission.parents[0].parent_org.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="section size-50 mil-size-100 mil-pdng-t-50px" v-if="data.commission.coordinates">
          <div class="map-wrp committee-view">
            <location :feature="data.commission.coordinates"></location>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="scene" v-if="data">
    <h2 class="txt-size-36px txt-bold pdng-b-40px mil-txt-size-30px">
      Члены комиссии
    </h2>
    <div class="campaign-candidates-list">
      <div class="person-wrp flex-column flex-algn-itms-strch"
           v-for="item of data.commission.persons">
        <div class="person-photo">
          <!--          <div class="person-initials">С.Г.Т.</div>-->
          <img :src="item.person.photo_url ? item.person.photo_url : '/img/user.svg'"
               :alt="item.person.full_name">
        </div>
        <div class="person-info pdng-t-10px">
          <div class="person-name txt-size-14px txt-medium">
            {{ item.person.full_name }}
          </div>
          <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
            {{ item.position }}
          </div>
        </div>

        <div class="person-popover cursor-pointer">
          <div class="flex-column flex-algn-itms-strch">
            <div class="person-photo">
              <img :src="item.person.photo_url ? item.person.photo_url : '/img/user.svg'" :alt="item.person.full_name">
            </div>
            <div class="person-info pdng-t-10px">
              <a class="txt-size-14px txt-medium" :href="'/member/' + item.person.id">
                {{ item.person.full_name }}
              </a>
              <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
                {{ item.position }}
              </div>
              <div class="infoblock txt-size-12px"
                   v-if="item.extra.referral_notes || item.person.extra.referral_description">
                <div class="infoblock-name">
                  Выдвинут:
                </div>
                <div class="infoblock-value">
                  {{ item.extra.referral_notes || item.person.extra.referral_description }}
                </div>
              </div>
              <div class="infoblock txt-size-12px" v-if="false">
                <div class="infoblock-name">
                  Работодатель
                </div>
                <div class="infoblock-value ">
                  Центральная избирательная комиссия
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="scene" v-if="data">
    <h2 class="txt-size-36px txt-bold pdng-b-40px mil-txt-size-30px">
      Последние сообщения о нарушениях.
      <a class="txt-underline-inline-2px" href="#">Всего {{ data.commission.violations.length }} сообщений о
        нарушениях</a>.
    </h2>
    <message-list :messages="data.commission.violations"></message-list>
  </div>
  <div class="scene" v-if="false">
    <h2 class="txt-size-36px mil-txt-size-30px txt-bold pdng-b-40px">
      Последние избирательные кампании
    </h2>
    <div>
      <!-- Archive campaigning -->
      <div class="election-campaign-unit">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div
              class="section flex-grow-all txt-size-18px mil-txt-size-14px pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-l-20px grayscale">
            <div class="txt-color-1 txt-medium">
              6—9 августа 2021
            </div>
            <div class="txt-bold">
              Архив
            </div>
          </div>
          <div
              class="section flex-algn-slf-strch flex-row flex-algn-itms-c border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px mil-pdng-15px mil-pdng-r-20px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <img src="/img/icon/flag_large.svg" class="mil-zoom-0_65">
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-20px mil-txt-size-14px mil-notdisplay">
                  Сообщений
                </div>
                <div class="txt-size-20px mil-txt-size-14px txt-bold txt-nowrap">
                  1 337
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px mil-pdng-l-20px mil-pdng-r-20px mil-pdng-b-30px grayscale">
          <h2 class="txt-color-1 txt-size-36px mil-txt-size-30px txt-lh-1_1em">
            <a class="txt-underline-inline" href="#">
              Выборы представителей нижней палаты верхнего представительства третьего созыва депутатов
            </a>
          </h2>
          <div class="tag-wrp mrgn-t-20px">
            <a class="tag-unit">
              Общереспубликанские выборы
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue';
import Location from './Point.vue';
import {defineComponent, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import Button from 'primevue/button';
import MessageList from "./MessageList.vue";

const data = ref(null)

const map = {
  ELECTION_COMMISSION_PRECINCT_PRESIDENTIAL_2020: 'Участковая',
  ELECTION_COMMISSION_TERRITORIAL_PRESIDENTIAL_2020: 'Территориальная',
  ELECTION_COMMISSION_TERRITORIAL_PARLIAMENTARY_2019: 'Территориальная',
  ELECTION_COMMISSION_PRECINCT_PARLIAMENTARY_2019: 'Участковая',
  ELECTION_COMMISSION_PRECINCT_LOCAL_2018: 'Участковая',
  ELECTION_COMMISSION_TERRITORIAL_LOCAL_2018: 'Территориальная',
  ELECTION_COMMISSION_CENTRAL: 'Центральная',
}

async function fetchCommission() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/commission/' + useRoute().params.id)
    data.value = await response.json()
  } catch (e) {
    data.value = {commissions: [], pagination: {aggregate: {count: 0}}};
  }
  return {
    data
  }
}

export default defineComponent({
  components: {
    MessageList,
    'header-view': Header,
    Location,
    Button
  },
  setup() {
    onMounted(() => {
      fetchCommission()
    })
    return {
      data,
      map
    }
  }
})
</script>
