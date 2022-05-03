<template>
  <header-view>
    <div class="header-subnav border-t-1px border-color2" v-if="false">
      <div
          class="section flex-row flex-algn-itms-c flex-grow-all flex-algn-slf-strch pdng-20px pdng-l-30px pdng-r-30px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
        <div class="section">
          <div class="flex-row flex-algn-itms-c">
            <div class="section">
              <img src="/img/icon/flag_large.svg" class="zoom-0_75">
            </div>
            <div class="section pdng-l-15px">
              <div class="txt-size-18px mil-txt-size-14px">
                Нарушений
              </div>
              <div class="txt-size-18px txt-bold mil-txt-size-14px">
                237
              </div>
            </div>
          </div>
        </div>
        <div class="section pdng-l-40px mil-pdng-l-20px">
          <div class="button medium primary">
            Сообщить о нарушении
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene mrgn-t-130px mil-mrgn-t-100px">
    <div class="flex-row mil-flex-column">
      <div class="section pdng-r-30px mil-pdng-0 mil-flex-column flex-algn-itms-c" v-if="data">
        <div class="section flex-grow-all mil-size-100 mil-pdng-t-50px">
          <h1 class="txt-size-32px">
            {{ data.organization.name }}
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
                О кампании:
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
    <h2 class="flex-row flex-algn-itms-c txt-size-36px txt-bold pdng-b-40px mil-flex-column mil-txt-size-30px">
      <span>Состав организации({{ data.organization.persons.length }})</span>
      <div class="buttongroup mrgn-l-20px mil-mrgn-0 mil-mrgn-t-20px mil-size-100" v-if="false">
        <div class="buttongroup">
          <button class="buttongroup-unit" :class="{active: view === 'list'}" @click="view = 'list'">
            Списком
          </button>
          <button class="buttongroup-unit" :class="{active: view === 'group'}" @click="view = 'group'">
            По выборам
          </button>
        </div>
      </div>
    </h2>
    <div v-if="view === 'list'">
      <div class="campaign-candidates-list">
        <div class="person-wrp flex-column flex-algn-itms-strch" v-for="item of data.organization.persons">
          <div class="person-photo">
            <div class="person-initials">С.Г.Т.</div>
            <img :src="item.person.photo_url ? item.person.photo_url : '/img/icon/person-placeholder.png'" :alt="item.person.full_name">
          </div>
          <div class="person-info pdng-t-10px">
            <div class="person-name txt-size-14px txt-medium">
              {{ item.person.full_name }}
            </div>
            <div class="person-mark txt-color-2 txt-size-12px" v-if="false">
              <div class="flex-row flex-algn-itms-c mrgn-t-5px">
                <div class="section">
                  <img src="/img/icon/flag.svg">
                </div>
                <div class="section pdng-l-5px">
                  <div class="txt-bold">
                    237
                  </div>
                </div>
              </div>
            </div>
            <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
              {{ item.position }}
            </div>
          </div>
          <!-- Popover -->
          <div class="person-popover cursor-pointer">
            <div class="flex-column flex-algn-itms-strch">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img :src="item.person.photo_url ? item.person.photo_url : '/img/icon/person-placeholder.png'"
                     :alt="item.person.full_name">
              </div>
              <div class="person-info pdng-t-10px">
                <a class="person-name txt-size-14px txt-medium" :href="'/member/' + item.person.id">
                  {{ item.person.full_name }}
                </a>
                <div class="person-mark txt-color-2 txt-size-12px" v-if="false">
                  <div class="flex-row flex-algn-itms-c mrgn-t-5px">
                    <div class="section">
                      <img src="/img/icon/flag.svg">
                    </div>
                    <div class="section pdng-l-5px">
                      <div class="txt-bold">
                        237
                      </div>
                    </div>
                  </div>
                </div>
                <div class="txt-color-1 txt-size-12px txt-medium mrgn-t-10px">
                  {{ item.position }}
                </div>
                <template v-if="false">
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
                </template>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-if="view === 'group'">
      <div class="election-campaign-list">
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
                  <svg class="mil-zoom-0_65" width="25" height="33" viewBox="0 0 25 33" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                        fill="#FF5C01"></path>
                    <rect y="1" width="2" height="32" fill="#FF5C01"></rect>
                  </svg>
                </div>
                <div class="section pdng-l-15px">
                  <div class="txt-size-20px mil-txt-size-14px mil-notdisplay">
                    Нарушений
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
          <div class="pdng-10px border-t-1px border-color1">
            <div class="campaign-candidates-list size-100 overflow-hide">
              <div class="person-wrp flex-column flex-algn-itms-strch cursor-pointer" v-for="i in [1,2,3]">
                <div class="person-photo">
                  <div class="person-initials">С.Г.Т.</div>
                  <img src="/img/icon/person-placeholder.png" alt="Светлана Георгиевна Тихановская">
                </div>
                <div class="person-info pdng-t-10px">
                  <div class="person-name txt-size-14px txt-medium">
                    Мазарчук Дмитрий
                    <br>
                    Валерьевич
                  </div>
                  <div class="person-mark txt-color-2 txt-size-12px">
                    <div class="flex-row flex-algn-itms-c mrgn-t-5px" v-if="false">
                      <div class="section">
                        <img src="/img/icon/flag.svg">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './Navbar.vue';
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
    onMounted(async () => {
      await fetchOrganization()
      document.title = document.title.replace(' -', ' ' + data.value.organization.name + ' -')
    })
    const view = ref('list')
    return {
      data,
      view
    }
  }
})
</script>
