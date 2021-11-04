<template>
  <header-view>
    <div class="sticky-wrp">
      <div class="header-subnav border-t-1px border-color2">
        <a :href="'/campaign/' + campaign"
           class="section flex-algn-slf-strch flex-row flex-algn-itms-c pdng-l-30px pdng-r-30px mil-pdng-l-15px mil-pdng-r-15px txt-algn-c border-r-1px border-color2 hovered">
          <div class="inline-block">
            <svg class="mil-zoom-0_8" width="20" height="24" viewBox="0 0 20 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5V13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM18 10.5L2 10.5V13.5L18 13.5V10.5Z"
                  fill="#FF6C1A"/>
            </svg>
          </div>
        </a>
        <div
            class="section flex-grow-all pdng-30px pdng-t-30pxpx pdng-b-30px mil-pdng-20px mil-pdng-t-20px mil-pdng-b-20px"
            v-if="data && data.campaign">
          <div class="txt-color-1 txt-size-15px mil-txt-size-14px txt-bold">
            {{ data.campaign.name }}
          </div>
        </div>
        <div
            class="section flex-row flex-algn-itms-c flex-noshrink flex-algn-slf-strch pdng-l-20px pdng-r-30px mil-pdng-r-20px border-l-1px border-color2">
          <div class="section">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="mil-zoom-0_75" width="25" height="33" viewBox="0 0 25 33" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                      fill="#FF5C01"></path>
                  <rect y="1" width="2" height="32" fill="#FF5C01"></rect>
                </svg>
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-18px mil-txt-size-14px">
                  Сообщений
                </div>
                <div class="txt-size-18px mil-txt-size-14px txt-bold" v-if="data">
                  {{data.messages_aggregate.aggregate.count}}
                </div>
              </div>
            </div>
          </div>
          <div class="section pdng-l-20px">
            <div class="button medium mil-txt-size-12px primary">
              Сообщить о нарушении
            </div>
          </div>
        </div>
      </div>
      <div class="header-subnav border-color2">
        <div
            class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
          <div class="inline-block">
            <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
              Избирательная инициатива
            </div>
            <div class="buttongroup">
              <button @click="initiative = null" class="buttongroup-unit" :class="{active: initiative === null}">
                Все
              </button>
              <button @click="initiative = key"
                      :key="key"
                      :class="{active: initiative === key}"
                      class="buttongroup-unit" v-for="(item, key) of initiatives">
                {{ item }}
              </button>
            </div>
          </div>
          <div class="inline-block mrgn-l-30px mil-mrgn-l-20px">
            <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
              Тип нарушения
            </div>
            <div class="buttongroup">
              <select v-model="category">
                <option :value="null"></option>
                <option v-for="(item, key) of hash" :value="key">{{ item }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene mrgn-t-170px mil-mrgn-t-120px">
    <message-list v-model="data.messages" v-if="data"></message-list>
    <div class="flex-column flex-algn-itms-c pdng-t-40px" v-if="data">
      <a href="#" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще 30 из {{data.messages_aggregate.aggregate.count}} нарушений
      </a>
    </div>
  </div>

</template>
<script>
import Header from './Header.vue';
import {defineComponent, onMounted, ref, watch} from "vue";
import SelectButton from 'primevue/selectbutton';
import {useRoute} from "vue-router";
import {MessageList, hash, initiatives} from "./MessageList.vue";

const data = ref(null)
const category = ref(null)
const initiative = ref(null)

let id = null;

async function fetchMessages() {
  try {
    if (!id) {
      id = useRoute().params.id;
    }
    const response = await fetch(import.meta.env.VITE_API_URL + '/messages/' + id,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
              {
                categories: category.value === null ? {'_is_null': false} : {'_contains': parseInt(category.value)}
              }
          )
        }
    )
    data.value = await response.json()
  } catch (e) {
    console.error(e)
    data.value = {campaign: {}};
  }
  return {
    data
  }
}

export default defineComponent({
  components: {
    MessageList,
    'header-view': Header,
    SelectButton
  },
  setup() {
    watch(category, () => {
      fetchMessages()
    })
    onMounted(() => {
      fetchMessages()
    })
    const filter = ref('Все');
    const options = ref(['Все', 'Честные Люди', 'Право Выбора']);
    const campaign = ref(useRoute().params.id)
    return {filter, options, campaign, data, hash, category, initiatives, initiative}
  }
})
</script>
