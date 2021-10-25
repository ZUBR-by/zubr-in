<template>
  <header-view>
    <div class="header-subnav">
      <div class="section flex-grow-all pdng-20px pdng-t-15px pdng-b-15px">
        <div class="inline-block">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Тип избирательной кампании
          </div>
          <div>
            <SelectButton :options="['Все','Местные','Парламентские','Президентские','Референдум']" class="p-button-sm"/>
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene mil-mrgn-t-170px">
    <div class="election-campaign-list" v-if="loading">
      Загрузка...
    </div>
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
                <img src="/img/icon/flag.svg">
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
