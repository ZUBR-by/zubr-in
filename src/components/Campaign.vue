<template>
  <header-view :active="'Кампании'">
    <div class="header-subnav border-t-1px border-color2">
      <div
          class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
        <div class="txt-color-1 txt-size-18px mil-txt-size-14px" v-if="data && data.campaign.started_at">
          {{ formatDateCampaign(data.campaign)}}
        </div>
        <div class="txt-color-1 txt-size-18px mil-txt-size-14px" v-else>
          Нет даты
        </div>
        <div class="txt-size-18px mil-txt-size-14px txt-bold" v-if="false">
          28 дней до начала
        </div>
      </div>
      <div
          class="section flex-row flex-algn-itms-c flex-noshrink flex-algn-slf-strch pdng-l-20px pdng-r-30px mil-pdng-r-20px border-l-1px border-color2">
        <div class="section">
          <div class="flex-row flex-algn-itms-c">
            <div class="section">
              <img src="/img/icon/flag_large.svg" class="zoom-0_75">
            </div>
            <div class="section pdng-l-15px">
              <div class="txt-size-18px mil-txt-size-14px">
                Нарушений
              </div>
              <div class="txt-size-18px mil-txt-size-14px txt-bold" v-if="data">
                {{ data.campaign.messages_aggregate.aggregate.count }}
              </div>
            </div>
          </div>
        </div>
        <div class="section pdng-l-40px">
          <div class="button medium mil-txt-size-12px primary">
            Сообщить о нарушении
          </div>
          <div class="button medium mrgn-l-10px mil-mrgn-l-10px">
            Стать наблюдателем
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene mrgn-t-170px mil-mrgn-t-120px" v-if="data">
    <h1 class="mil-txt-size-34px">
      {{ data.campaign.name }}
    </h1>
    <div class="tag-wrp mrgn-t-20px">
      <template v-if="data.campaign.extra.type">
        <a class="tag-unit"
           v-if="['parliamentary_elections', 'presidential_elections'].includes(data.campaign.extra.type)">
          Общереспубликанские выборы
        </a>
        <a class="tag-unit" v-if="['local_elections'].includes(data.campaign.extra.type)">
          Местные выборы
        </a>
        <a class="tag-unit" v-if="['referendum'].includes(data.campaign.extra.type)">
          Референдум
        </a>
      </template>
    </div>
    <div class="mrgn-t-40px" v-if="false">
      <p>
        Это платформа для наблюдателей и избирателей в Беларуси.
        Здесь можно узнать о любом из кандидатов и их кампаниях, любой из задействованных в выборах организациях, любом
        из членов избирательных комиссий на любом из работающих на этих выборах участков для голосования.
      </p>
    </div>
  </div>
  <div class="scene" v-if="data && data.campaign.messages_aggregate.aggregate.count">
    <h2 class="txt-size-36px mil-txt-size-30px txt-bold pdng-b-40px">
      Последние инциденты. <a class="txt-underline-inline-2px" :href="'/campaign/' + data.campaign.id + '/messages'">
      Всего {{ data.campaign.messages_aggregate.aggregate.count }} сообщений о нарушениях
    </a>.
    </h2>
    <div class="incident-list">
      <div class="incident-unit cursor-pointer" v-for="item of data.campaign.messages">
        <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
          <div class="flex-grow-all">
            <div class="txt-size-14px">
              <div v-for="cat of item.categories " class="pdng-t-5px">
                {{ hash[cat] }}
              </div>
            </div>
            <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
              {{ item.created_at }}
            </div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline"
                 :href="'/commission/' + item.commission.id">
                {{ item.commission.code }},{{ item.commission.name }}: {{ item.commission.description }}
              </a>
            </div>
          </div>
          <div>
            <div class="mrgn-t-10px">
              <a class="inline txt-size-12px txt-underline-inline" href="#">
                Честные люди
              </a>
            </div>
          </div>
        </div>
        <div
            class="flex-grow-all border-l-1px border-r-1px border-color2 mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
          <p class="txt-size-14px txt-color-3-1">
            {{ item.description }}
          </p>
          <div class="tag-wrp pdng-t-10px">
            <a href="" class="tag-unit">Заметка</a>
          </div>
        </div>
        <div class="size-20 flex-column flex-noshrink pdng-20px mil-size-100 mil-flex-row">
          <div class="flex-grow-all">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <img src="/img/icon/attachment.svg" class="block">
              </div>
              <div class="section pdng-l-10px">
                <div class="txt-color-1 txt-bold txt-size-14px">
                  {{ item.attachments.length }}
                </div>
                <div class="txt-size-14px">
                  вложений
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px" v-if="data">
      <a :href="'/campaign/' + data.campaign.id + '/messages'"
         class="button primary inline-flex flex-algn-itms-c pdng-l-40px pdng-r-40px">
        <div class="section">
          Показать все {{ data.campaign.messages_aggregate.aggregate.count }} нарушений <span class="mil-notdisplay">и инцидентов</span>
        </div>
        <div class="section mrgn-l-20px">
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM1 6.75H13V5.25H1V6.75Z"
                fill="white"></path>
          </svg>
        </div>
      </a>
    </div>
  </div>
  <div class="scene">
    <h2 class="txt-size-36px mil-txt-size-30px txt-bold pdng-b-40px">
      Избирательные комиссии
      <template v-if="false">
        <br>
        Всего наблюдается <a class="txt-underline-2px" href="/commissions">317</a> участков из <a
          class="txt-underline-2px" href="#">1
        396</a>.
      </template>
    </h2>
    <div class="map-content">
      <div class="flex-row mil-block pdng-b-15px txt-size-14px">
        <div class="section flex-grow-all">
          <div class="inline-flex flex-algn-itms-c txt-color-3-1" v-if="false">
            <div>
              <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1C14.9773 1 17.4849 2.50522 19.0028 3.96966C19.7698 4.70972 20.2931 5.44898 20.6224 5.99842C20.7392 6.19335 20.8311 6.36347 20.9002 6.5C20.8311 6.63653 20.7392 6.80664 20.6224 7.00158C20.2931 7.55102 19.7698 8.29028 19.0028 9.03034C17.4849 10.4948 14.9773 12 11 12C7.02275 12 4.51514 10.4948 2.99725 9.03034C2.23018 8.29028 1.70689 7.55102 1.37761 7.00158C1.26079 6.80664 1.16894 6.63653 1.09977 6.5C1.16894 6.36347 1.26079 6.19336 1.37761 5.99842C1.70689 5.44898 2.23018 4.70972 2.99725 3.96966C4.51514 2.50522 7.02275 1 11 1Z" stroke="#FF5C01" stroke-width="2"></path>
                <circle cx="11" cy="6" r="3" stroke="#FF5C01" stroke-width="2"></circle>
              </svg>
            </div>
            <div class="mrgn-l-5px">
              Количество наблюдателей
            </div>
          </div>
          <div class="inline-flex flex-algn-itms-c txt-color-3-1 mrgn-l-20px mil-mrgn-0 mil-mrgn-t-10px">
            <div>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.80425 15L10 1.8868L18.1958 15H1.80425Z" fill="white" stroke="#FF5C01" stroke-width="2"></path>
                <rect x="9" y="6" width="2" height="4" rx="1" fill="#FF5C01"></rect>
                <rect x="9" y="11" width="2" height="2" rx="1" fill="#FF5C01"></rect>
              </svg>
            </div>
            <div class="mrgn-l-5px">
              Количество инцидентов
            </div>
          </div>
        </div>
        <div class="section mil-mrgn-t-10px" v-if="false">
          <label class="flex-row flex-algn-itms-c txt-color-3-1">
            <input type="checkbox" style="width:16px; height:16px; flex-shrink:0;">
            <span class="mrgn-l-5px">
                Участки без наблюдателей
              </span>
          </label>
        </div>
      </div>
      <div class="map-wrp" style="background:#EDEDED; width:auto; height:460px" v-if="data">
        <commission-map :init-campaign="data.campaign.id" ></commission-map>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue';
import {defineComponent, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import {hash} from './Messages.vue'
import CommissionMap from './CommissionMap.vue'
import {formatDateCampaign} from "../date";
const data = ref(null)

async function fetchCampaign() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/campaign/' + useRoute().params.id)
    data.value = await response.json()
  } catch (e) {
    data.value = {campaign: {}};
  }
  return {
    data
  }
}

export default defineComponent({
  components: {
    'header-view': Header,
    CommissionMap
  },
  setup() {
    onMounted(() => {
      fetchCampaign()
    })
    return {
      data,
      hash,
      formatDateCampaign
    }
  }
})
</script>
