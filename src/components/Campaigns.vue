<template>
  <header-view>
    <div class="header-subnav">
      <div class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-5px mil-pdng-b-10px">
        <div class="inline-block">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Тип избирательной кампании
          </div>
          <div class="buttongroup">
            <div class="buttongroup-unit">
              Все
            </div>
            <div class="buttongroup-unit active">
              Местные
            </div>
            <div class="buttongroup-unit">
              Парламентские
            </div>
            <div class="buttongroup-unit">
              Президенсткие
            </div>
            <div class="buttongroup-unit">
              Референдум
            </div>
          </div>
        </div>
<!--        <div class="inline-block mrgn-l-30px">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Статус кампаний
          </div>
          <div class="buttongroup">
            <div class="buttongroup-unit active">
              Все
            </div>
            <div class="buttongroup-unit">
              Текущие
            </div>
            <div class="buttongroup-unit">
              Архивные
            </div>
          </div>
        </div>
        <div class="inline-block mrgn-l-30px">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Тип избирательной кампании
          </div>
          <div>
            <SelectButton :options="['Все','Местные','Парламентские','Президентские','Референдум']" class="p-button-sm"/>
          </div>
        </div>-->
      </div>
    </div>
  </header-view>
  <div class="scene mrgn-t-190px mil-mrgn-t-120px">
    <div class="election-campaign-list" v-if="loading">
      Загрузка...
    </div>
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
                  Сообщений:
                </div>
                <div class="txt-size-20px mil-txt-size-15px txt-bold txt-nowrap">
                  {{ campaign.messages.aggregate.count }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px mil-pdng-l-20px mil-pdng-r-20px mil-pdng-b-30px"
            :class="{'grayscale' : !isLater(campaign.started_at)}"
        >
          <h2 class="txt-color-1 txt-size-48px mil-txt-size-34px txt-lh-1_1em">
            <a class="txt-underline-inline-2px" :href="'/campaign/' + campaign.id">
              {{ campaign.name }}
            </a>
          </h2>
          <div class="tag-wrp mrgn-t-20px" v-if="campaign.extra.type">
            <a class="tag-unit"
               v-if="['parliamentary_elections', 'presidential_elections'].includes(campaign.extra.type)">
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
</template>
<script>
import Header from './Header.vue'
import {defineComponent, ref} from "vue";
import SelectButton from "primevue/selectbutton";

function fetchCampaigns() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  const load = async () => {
    try {
      loading.value = true
      const response = await fetch(import.meta.env.VITE_API_URL + '/campaigns')
      data.value = await response.json()
      loading.value = false
    } catch (e) {
      loading.value = false
      error.value = e.message;
      console.error(e)
    }
  }

  return {data, load, error, loading}
}

function isLater(started_at) {
  if (started_at === null) {
    return true;
  }
  const current = new Date();
  const campaign = new Date(started_at);

  return campaign > current;
}

export {fetchCampaigns, isLater}
export default defineComponent({
  components: {
    'header-view': Header,
    SelectButton
  },
  setup() {
    const {data, load, loading} = fetchCampaigns();
    load()
    return {
      data,
      loading,
      isLater
    }
  }
})
</script>
