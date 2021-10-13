<template>
  <header-view>
    <div class="header-subnav border-t-1px border-color2">
      <div
          class="section flex-row flex-algn-itms-c flex-grow-all flex-algn-slf-strch pdng-20px pdng-l-30px pdng-r-30px border-l-1px border-color2">
        <div class="section">
          <div class="flex-row flex-algn-itms-c">
            <div class="section">
              <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                    fill="#FF5C01"></path>
                <rect y="1" width="2" height="32" fill="#FF5C01"></rect>
              </svg>
            </div>
            <div class="section pdng-l-15px" v-if="data">
              <div class="txt-size-18px">
                Сообщений о нарушений
              </div>
              <div class="txt-size-18px txt-bold">
<!--                {{ data.commission.violations.length }}-->
                0
              </div>
            </div>
          </div>
        </div>
        <div class="section pdng-l-40px">
          <div class="button medium primary">
            Сообщить о нарушении
          </div>
          <div class="button medium mrgn-l-20px">
            Стать наблюдателем
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene-wrp bg-color-1 border-b-1px border-color1">
    <div style="margin-top:170px;" class="scene" v-if="data">
      <div class="flex-row">
        <div class="section flex-grow-all">
          <h1 class="txt-size-32px">
            {{data.organization.name}}
          </h1>
          <div class="mrgn-t-40px txt-size-14px">
            <div class="infoblock" v-if="data.organization.address">
              <div class="infoblock-name">Адрес:</div>
              <div class="infoblock-value">
                {{ data.organization.address }}
              </div>
            </div>
            <div class="infoblock" v-if="data.organization.description">
              <div class="infoblock-name">
                О компании:
              </div>
              <div class="infoblock-value">
                {{ data.organization.description }}
              </div>
            </div>
            <div class="infoblock" v-if="data.organization.extra.url">
              <div class="infoblock-name">
                Сайт:
              </div>
              <div class="infoblock-value">
                <a class="txt-underline-inline" :href="data.organization.extra.url">
                  {{ data.organization.extra.url }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="scene" v-if="data">
    <h2 class="flex-row flex-algn-itms-c txt-size-36px txt-bold pdng-b-40px">
      Члены комиссий от организации
      <div class="buttongroup mrgn-l-20px">
        <div class="buttongroup-unit active">
          Списком
        </div>
        <div class="buttongroup-unit">
          По выборам
        </div>
      </div>
    </h2>
    <div>
      <div class="campaign-candidates-list">
        <div class="person-wrp flex-column flex-algn-itms-strch" v-for="item of data.organization.persons">
          <div class="person-photo">
            <div class="person-initials">С.Г.Т.</div>
            <img :src="item.person.photo_url ? item.person.photo_url : '/img/user.svg'" :alt="item.person.full_name">
          </div>
          <div class="person-info pdng-t-10px">
            <div class="person-name txt-size-14px txt-medium">
              {{ item.person.full_name}}
            </div>
            <div class="person-mark txt-color-2 txt-size-12px">
              <div class="flex-row flex-algn-itms-c mrgn-t-5px">
                <div class="section">
                  <svg class="block" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21484 1.153C1.21484 1.153 3.03635 0.116935 4.2557 0.0105187C5.84647 -0.128312 7.17493 1.153 8.26964 1.153C9.36435 1.153 11.1889 0.391345 11.1889 0.391345V8.00787C11.1889 8.00787 9.94496 8.61757 9.12108 8.76952C7.21297 9.12144 6.20186 7.62704 4.2557 7.62704C2.30955 7.62704 1.21484 8.76952 1.21484 8.76952V1.153Z" fill="#FF5C01"/>
                    <rect width="0.923077" height="12" fill="#FF5C01"/>
                  </svg>
                </div>
                <div class="section pdng-l-5px">
                  <div class="txt-bold">
                    237
                  </div>
                </div>
              </div>
            </div>
            <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
              Председатель комиссии
            </div>
          </div>
          <!-- Popover -->
          <div class="person-popover cursor-pointer">
            <div class="flex-column flex-algn-itms-strch">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img :src="item.person.photo_url ? item.person.photo_url : '/img/user.svg'" :alt="item.person.full_name">
              </div>
              <div class="person-info pdng-t-10px">
                <div class="person-name txt-size-14px txt-medium">
                  {{ item.person.full_name}}
                </div>
                <div class="person-mark txt-color-2 txt-size-12px">
                  <div class="flex-row flex-algn-itms-c mrgn-t-5px">
                    <div class="section">
                      <svg class="block" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.21484 1.153C1.21484 1.153 3.03635 0.116935 4.2557 0.0105187C5.84647 -0.128312 7.17493 1.153 8.26964 1.153C9.36435 1.153 11.1889 0.391345 11.1889 0.391345V8.00787C11.1889 8.00787 9.94496 8.61757 9.12108 8.76952C7.21297 9.12144 6.20186 7.62704 4.2557 7.62704C2.30955 7.62704 1.21484 8.76952 1.21484 8.76952V1.153Z" fill="#FF5C01"/>
                        <rect width="0.923077" height="12" fill="#FF5C01"/>
                      </svg>
                    </div>
                    <div class="section pdng-l-5px">
                      <div class="txt-bold">
                        237
                      </div>
                    </div>
                  </div>
                </div>
                <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
                  Председатель комиссии
                </div>
                <div class="infoblock txt-size-12px">
                  <div class="infoblock-name">
                    Должность
                  </div>
                  <div class="infoblock-value ">
                    Президент Республики Беларусь
                  </div>
                </div>
                <div class="infoblock txt-size-12px">
                  <div class="infoblock-name">
                    Субъект выдвижения
                  </div>
                  <div class="infoblock-value ">
                    Самовыдвижение
                  </div>
                </div>
              </div>
            </div>

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
const data = ref(null)

async function fetchOrganization() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/organization/' + useRoute().params.id)
    data.value = await response.json()
  } catch (e) {
    data.value = {organization: {}};
  }
  return {
    data
  }
}

export default defineComponent({
  components: {
    'header-view': Header,
    Location,
  },
  setup() {
    onMounted(() => {
      fetchOrganization()
    })
    return {
      data
    }
  }
})
</script>
