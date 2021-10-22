<template>
  <header-view>
    <div class="header-subnav border-color2">
      <div class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px">
        <div class="inline-block">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Тип комиссии
          </div>
          <div class="buttongroup">
            <div class="buttongroup-unit active">
              Все
            </div>
            <div class="buttongroup-unit">
              Территориальные
            </div>
            <div class="buttongroup-unit">
              Участковые
            </div>
          </div>
        </div>
        <!--        <div class="inline-block mrgn-l-30px">-->
        <!--          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">-->
        <!--            Регион и насел. пункт-->
        <!--          </div>-->
        <!--          <div class="buttongroup">-->
        <!--            <div class="buttongroup-unit active">-->
        <!--              Инпут-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="inline-block mrgn-l-30px">-->
        <!--          <label class="flex-row flex-algn-itms-c txt-size-14px txt-color-3-1 txt-medium">-->
        <!--            <input type="checkbox" style="width:16px; height:16px;">-->
        <!--            <span class="mrgn-l-5px">-->
        <!--                Участки без наблюдателей-->
        <!--              </span>-->
        <!--          </label>-->
        <!--        </div>-->
      </div>
      <div class="section pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
        <div class="inline-block">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Вид
          </div>
          <div class="buttongroup">
            <button class="buttongroup-unit" :class="{active: view === 'list'}" @click="view = 'list'">
              Список
            </button>
            <button class="buttongroup-unit" :class="{active: view === 'map'}" @click="view = 'map';mapInit = true">
              Карта
            </button>
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene mil-mrgn-t-170px" v-if="view === 'list'">
    <template v-if="data">
      <div class="committee-list mil-flex-column">
        <!--        :class="{mark: item === 2}"-->
        <a class="committee-unit mil-flex-column" :href="'/commission/' + item.id" v-for="item of data.commissions">
          <div class="section pdng-r-20px pdng-l-30px pdng-t-20px pdng-b-20px mil-size-100 mil-pdng-15px">
            <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
              {{ item.name }}
            </h2>
            <div class="txt-color-2 txt-size-14px">
              {{ item.description }}
            </div>
          </div>
          <div
              class="section pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px border-l-1px border-color2 mil-border-0 mil-size-100 mil-pdng-15px mil-pdng-t-0 mil-border-b-1px mil-border-color1">
            <div class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
              {{ item.code }}
            </div>
            <div class="txt-color-2 txt-size-14px">
              {{ item.address }}
            </div>
          </div>
          <div class="section flex-grow-all txt-algn-r pdng-r-30px pdng-l-20px pdng-t-20px pdng-b-20px mil-pdng-15px">
            <div class="inline-flex flex-algn-itms-c">
              <div class="section">
                <div class="flex-row flex-algn-itms-c">
                  <div class="section">
                    <img src="/img/icon/flag_medium.svg" class="block">
                  </div>
                  <div class="section pdng-l-15px">
                    <div class="txt-color-2 txt-size-20px txt-bold mil-txt-size-16px">
                      {{ item.messages_count }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="section pdng-l-20px" v-if="item.observers_count">
                <div class="flex-row flex-algn-itms-c">
                  <div class="section">
                    <svg class="block" width="22" height="13" viewBox="0 0 22 13" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M11 0.75C15.0486 0.75 17.6168 2.28517 19.1763 3.78975C19.9622 4.54792 20.4986 5.30548 20.8368 5.86991C20.9913 6.12764 21.1037 6.34396 21.1792 6.5C21.1037 6.65604 20.9913 6.87235 20.8368 7.13009C20.4986 7.69452 19.9622 8.45208 19.1763 9.21025C17.6168 10.7148 15.0486 12.25 11 12.25C6.95137 12.25 4.38316 10.7148 2.82367 9.21025C2.03783 8.45208 1.50143 7.69452 1.16317 7.13009C1.00871 6.87235 0.89626 6.65604 0.820791 6.5C0.89626 6.34396 1.00871 6.12764 1.16317 5.86991C1.50143 5.30548 2.03783 4.54792 2.82367 3.78975C4.38316 2.28517 6.95137 0.75 11 0.75ZM0.700307 6.23154C0.700114 6.23104 0.70007 6.23093 0.700174 6.2312L0.700307 6.23154Z"
                          stroke="#FF5C01" stroke-width="1.5"/>
                      <circle cx="11" cy="6" r="3" stroke="#FF5C01" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="section pdng-l-15px">
                    <div class=" txt-color-2 txt-size-20px txt-bold mil-txt-size-16px">
                      1 337
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="flex-column flex-algn-itms-c pdng-t-40px">
        <a href="#" class="button primary pdng-l-40px pdng-r-40px">
          Загрузить еще 100 избирательных комиссий из {{ data.pagination.aggregate.count }}
        </a>
      </div>
    </template>
  </div>
  <div v-show="view === 'map'" v-if="mapInit">
    <div style="max-width:100%; padding:0;" class="scene mil-mrgn-t-120px">
      <!--      <div class="map-wrp" style="background:#EDEDED; width:auto; min-height:640px">-->

      <div class="map-wrp" style="background:#EDEDED; min-height:640px;height: 300px">
        <commission-map v-if="mapInit === true"></commission-map>
        <div class="map-wrp-legend txt-size-14px mil-flex-row mil-notdisplay">
          <div class="inline-flex flex-algn-itms-c txt-color-3-1 mil-size-50">
            <div>
              <svg class="block" width="22" height="14" viewBox="0 0 22 14" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 1.25C15.0486 1.25 17.6168 2.78517 19.1763 4.28975C19.9622 5.04792 20.4986 5.80548 20.8368 6.36991C20.9913 6.62764 21.1037 6.84396 21.1792 7C21.1037 7.15604 20.9913 7.37235 20.8368 7.63009C20.4986 8.19452 19.9622 8.95208 19.1763 9.71025C17.6168 11.2148 15.0486 12.75 11 12.75C6.95137 12.75 4.38316 11.2148 2.82367 9.71025C2.03783 8.95208 1.50143 8.19452 1.16317 7.63009C1.00871 7.37235 0.89626 7.15604 0.820791 7C0.89626 6.84396 1.00871 6.62764 1.16317 6.36991C1.50143 5.80548 2.03783 5.04792 2.82367 4.28975C4.38316 2.78517 6.95137 1.25 11 1.25ZM0.700307 6.73154C0.700114 6.73104 0.70007 6.73093 0.700174 6.7312L0.700307 6.73154Z"
                    stroke="#FF5C01" stroke-width="1.5"></path>
                <circle cx="11" cy="6.5" r="3" stroke="#FF5C01" stroke-width="2"></circle>
              </svg>
            </div>
            <div class="mrgn-l-5px">
              Количество наблюдателей
            </div>
          </div>
          <div class="inline-flex flex-algn-itms-c txt-color-3-1 mrgn-l-20px">
            <div>
              <svg class="block" width="14" height="16" viewBox="0 0 14 16" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.51855 1.94125C1.51855 1.94125 3.79543 0.646169 5.31963 0.513148C7.30809 0.33961 8.96866 1.94125 10.3371 1.94125C11.7054 1.94125 13.9861 0.989181 13.9861 0.989181V10.5098C13.9861 10.5098 12.4312 11.272 11.4014 11.4619C9.01622 11.9018 7.75232 10.0338 5.31963 10.0338C2.88694 10.0338 1.51855 11.4619 1.51855 11.4619V1.94125Z"
                    fill="#FF5C01"></path>
                <rect y="0.5" width="1.15385" height="15" fill="#FF5C01"></rect>
              </svg>
            </div>
            <div class="mrgn-l-5px">
              Количество инцидентов
            </div>
          </div>
        </div>


        <a class="map-mark" style="top:170px; left:160px;">
          <div class="section pdng-8px">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="22" height="14" viewBox="0 0 22 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M11 1.25C15.0486 1.25 17.6168 2.78517 19.1763 4.28975C19.9622 5.04792 20.4986 5.80548 20.8368 6.36991C20.9913 6.62764 21.1037 6.84396 21.1792 7C21.1037 7.15604 20.9913 7.37235 20.8368 7.63009C20.4986 8.19452 19.9622 8.95208 19.1763 9.71025C17.6168 11.2148 15.0486 12.75 11 12.75C6.95137 12.75 4.38316 11.2148 2.82367 9.71025C2.03783 8.95208 1.50143 8.19452 1.16317 7.63009C1.00871 7.37235 0.89626 7.15604 0.820791 7C0.89626 6.84396 1.00871 6.62764 1.16317 6.36991C1.50143 5.80548 2.03783 5.04792 2.82367 4.28975C4.38316 2.78517 6.95137 1.25 11 1.25ZM0.700307 6.73154C0.700114 6.73104 0.70007 6.73093 0.700174 6.7312L0.700307 6.73154Z"
                      stroke="#FF5C01" stroke-width="1.5"/>
                  <circle cx="11" cy="6.5" r="3" stroke="#FF5C01" stroke-width="2"/>
                </svg>
              </div>
              <div class="section pdng-l-5px">
                <div class=" txt-color-2 txt-size-12px txt-bold">
                  120
                </div>
              </div>
            </div>
          </div>
          <div class="section pdng-8px border-l-1px border-color2">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="14" height="16" viewBox="0 0 14 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M1.51855 1.94125C1.51855 1.94125 3.79543 0.646169 5.31963 0.513148C7.30809 0.33961 8.96866 1.94125 10.3371 1.94125C11.7054 1.94125 13.9861 0.989181 13.9861 0.989181V10.5098C13.9861 10.5098 12.4312 11.272 11.4014 11.4619C9.01622 11.9018 7.75232 10.0338 5.31963 10.0338C2.88694 10.0338 1.51855 11.4619 1.51855 11.4619V1.94125Z"
                      fill="#FF5C01"/>
                  <rect y="0.5" width="1.15385" height="15" fill="#FF5C01"/>
                </svg>
              </div>
              <div class="section pdng-l-5px">
                <div class=" txt-color-2 txt-size-12px txt-bold">
                  1 337
                </div>
              </div>
            </div>
          </div>
        </a>
        <a class="map-mark mark" style="top:220px; left:220px;">
          <div class="section pdng-8px">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="22" height="14" viewBox="0 0 22 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M11 1.25C15.0486 1.25 17.6168 2.78517 19.1763 4.28975C19.9622 5.04792 20.4986 5.80548 20.8368 6.36991C20.9913 6.62764 21.1037 6.84396 21.1792 7C21.1037 7.15604 20.9913 7.37235 20.8368 7.63009C20.4986 8.19452 19.9622 8.95208 19.1763 9.71025C17.6168 11.2148 15.0486 12.75 11 12.75C6.95137 12.75 4.38316 11.2148 2.82367 9.71025C2.03783 8.95208 1.50143 8.19452 1.16317 7.63009C1.00871 7.37235 0.89626 7.15604 0.820791 7C0.89626 6.84396 1.00871 6.62764 1.16317 6.36991C1.50143 5.80548 2.03783 5.04792 2.82367 4.28975C4.38316 2.78517 6.95137 1.25 11 1.25ZM0.700307 6.73154C0.700114 6.73104 0.70007 6.73093 0.700174 6.7312L0.700307 6.73154Z"
                      stroke="#FF5C01" stroke-width="1.5"/>
                  <circle cx="11" cy="6.5" r="3" stroke="#FF5C01" stroke-width="2"/>
                </svg>
              </div>
              <div class="section pdng-l-5px">
                <div class=" txt-color-1 txt-size-12px txt-bold">
                  0
                </div>
              </div>
            </div>
          </div>
          <div class="section pdng-8px border-l-1px border-color2">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="block" width="14" height="16" viewBox="0 0 14 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M1.51855 1.94125C1.51855 1.94125 3.79543 0.646169 5.31963 0.513148C7.30809 0.33961 8.96866 1.94125 10.3371 1.94125C11.7054 1.94125 13.9861 0.989181 13.9861 0.989181V10.5098C13.9861 10.5098 12.4312 11.272 11.4014 11.4619C9.01622 11.9018 7.75232 10.0338 5.31963 10.0338C2.88694 10.0338 1.51855 11.4619 1.51855 11.4619V1.94125Z"
                      fill="#FF5C01"></path>
                  <rect y="0.5" width="1.15385" height="15" fill="#FF5C01"></rect>
                </svg>
              </div>
              <div class="section pdng-l-5px">
                <div class=" txt-color-2 txt-size-12px txt-bold">
                  0
                </div>
              </div>
            </div>
          </div>
        </a>

      </div>
    </div>
  </div>
</template>
<script>
import 'ol/ol.css'
import Header from './Header.vue'
import CommissionMap from './CommissionMap.vue'
import {defineComponent, onMounted, ref} from "vue";

const data = ref(null)

async function fetchCommissions() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/commissions')
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
    'header-view': Header,
    CommissionMap
  },
  setup() {
    const view = ref('list')
    const mapInit = ref(false)
    onMounted(() => {
      fetchCommissions()
    })
    return {
      view,
      data,
      mapInit
    }
  },
})
</script>
<style>
</style>
