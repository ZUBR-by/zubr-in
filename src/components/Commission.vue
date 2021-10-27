<template>
  <header-view>
    <div class="header-subnav border-t-1px border-color2">
      <div
          class="section flex-row flex-algn-itms-c flex-grow-all flex-algn-slf-strch pdng-20px pdng-l-30px pdng-r-30px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
        <div class="section">
          <div class="flex-row flex-algn-itms-c">
            <div class="section">
              <svg class="zoom-0_75" width="25" height="33" viewBox="0 0 25 33" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                    fill="#FF5C01"></path>
                <rect y="1" width="2" height="32" fill="#FF5C01"></rect>
              </svg>
            </div>
            <div class="section pdng-l-15px" v-if="data">
              <div class="txt-size-18px mil-txt-size-14px">
                Нарушений
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
    <div class="scene mil-mrgn-t-170px">
      <div class="flex-row mil-flex-wrap" v-if="data">
        <div class="section size-50 pdng-r-30px mil-size-100 mil-pdng-0">
          <h1 class="txt-size-32px">
            {{ data.commission.name }}
          </h1>
          <h2 class="txt-size-20px">
            {{ data.commission.description }}
          </h2>
          <div class="tag-wrp mrgn-t-20px">
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
        <div class="section size-50 mil-size-100 mil-pdng-t-50px">
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
              <div class="infoblock txt-size-12px" v-if="item.extra.referral_notes">
                <div class="infoblock-name">
                  Выдвинут:
                </div>
                <div class="infoblock-value">
                  {{item.extra.referral_notes}}
                </div>
              </div>
              <div class="infoblock txt-size-12px">
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
    <div class="incident-list">
      <div class="incident-unit cursor-pointer"
           v-for="violation of data.commission.violations"
           @click="showModal(violation)">
        <div class="size-25 mil-size-100 flex-column flex-noshrink pdng-20px txt-medium">
          <div class="flex-grow-all">
            <div class="txt-color-3-1 txt-size-12px mrgn-t-5px">
              {{ violation.created_at }}
            </div>
            <div class="txt-size-14px">
              <div v-for="cat of violation.categories" class="pdng-t-5px">
                {{ hash[cat] }}
              </div>
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
            class="flex-grow-all border-l-1px border-r-1px border-color2  mil-border-0 mil-border-t-1px mil-border-b-1px mil-border-color1 pdng-20px mil-size-100 mil-border-0 mil-border-t-1px mil-border-b-1px">
          <p class="txt-size-14px txt-color-3-1">
            {{ violation.description }}
          </p>
          <div class="tag-wrp pdng-t-10px">
            <a href="" class="tag-unit">Заметка</a>
          </div>
        </div>
        <div class="size-20 flex-column flex-noshrink pdng-20px mil-size-100 mil-flex-row">
          <div class="flex-grow-all">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <img src="/img/icon/attachment.svg">
              </div>
              <div class="section pdng-l-10px" v-if="violation.attachments.length">
                <div class="txt-color-1 txt-bold txt-size-14px">
                  {{ violation.attachments.length > 0 ? violation.attachments.length : 'Нет' }}
                </div>
                <div class="txt-size-14px">
                  вложений
                </div>
              </div>
              <div class="section pdng-l-10px" v-else>
                <div class="txt-size-14px">
                  Нет вложений
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="scene">
    <h2 class="txt-size-36px mil-txt-size-30px txt-bold pdng-b-40px">
      Последние избирательные кампании
    </h2>
    <div>
      <!-- Archive campaigning -->
      <div class="election-campaign-unit">
        <div class="elect-camp-unit-header flex-row flex-algn-itms-c size-100 border-b-2px border-color2">
          <div
              class="section flex-grow-all txt-size-18px mil-txt-size-14px pdng-20px pdng-l-40px pdng-r-40px grayscale">
            <div class="txt-color-1 txt-medium">
              6—9 августа 2021
            </div>
            <div class="txt-bold">
              Архив
            </div>
          </div>
          <div
              class="section flex-algn-slf-strch flex-row flex-algn-itms-c border-l-2px border-color2 pdng-20px pdng-l-40px pdng-r-40px cursor-pointer hovered">
            <div class="flex-row flex-algn-itms-c">
              <div class="section">
                <svg class="mil-zoom-0_65" width="25" height="33" viewBox="0 0 25 33" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.71436 2.57623C2.71436 2.57623 6.78428 0.261278 9.50878 0.0235027C13.0632 -0.286697 16.0314 2.57623 18.4774 2.57623C20.9234 2.57623 25.0001 0.874411 25.0001 0.874411V17.8926C25.0001 17.8926 22.2207 19.2549 20.3799 19.5944C16.1164 20.3807 13.8572 17.0417 9.50878 17.0417C5.16035 17.0417 2.71436 19.5944 2.71436 19.5944V2.57623Z"
                      fill="#FF5C01"/>
                  <rect y="1" width="2" height="32" fill="#FF5C01"/>
                </svg>
              </div>
              <div class="section pdng-l-15px">
                <div class="txt-size-18px">
                  Нарушений
                </div>
                <div class="txt-size-18px txt-bold txt-nowrap">
                  1 337
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="elect-camp-unit-info pdng-t-20px pdng-b-40px pdng-l-40px pdng-r-40px grayscale">
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

  <Dialog v-model:visible="displayModal"
          class="popup"
          :show-header="false"
          :modal="true">
    <template #header>
      Инцидент #{{ message.id }}
    </template>
    <template v-if="message">
      <div class="flex-row flex-algn-itms-c border-b-1px border-color1">
        <div class="section flex-grow-all pdng-l-30px pdng-r-20px pdng-t-20px pdng-b-20px">
          <div class="txt-size-14px txt-medium">
            {{ formatCategories(message.categories) }}
          </div>
          <div class="txt-color-3-1 txt-size-12px txt-medium">
            {{ message.created_at }}
          </div>
          <div class="tag-unit  mrgn-t-20px">
            Честные люди
          </div>
        </div>
        <div class="section pdng-r-30px pdng-l-20px">
          <!-- ПОказываем кнопку в диалоге просмотра инцидента везде, кроме раздела инцидентов и подраздела инцидентов в разделе кампании -->
          <a class="button medium" href="#">Все нарушения/инциденты кампании</a>
        </div>
      </div>
      <div class="pdng-l-30px pdng-r-30px pdng-t-10px pdng-b-30px">
        <div class="mrgn-t-20px">
          <h3 class="txt-size-20px txt-bold">
            Описание:
          </h3>
          <div class="mrgn-t-30px">
            {{ message.description }}
          </div>
        </div>
        <div class="mrgn-t-30px" v-if="message.attachments.length > 0">
          <h3 class="txt-size-20px txt-bold">
            Прикрепленные файлы:
          </h3>
          <div class="incident-attachments mrgn-t-30px">
            <a :href="attachment.url" class="attachment-unit cursor-pointer"
               v-for="(attachment, index) of message.attachments">
              <div class="flex-row flex-algn-itms-c">
                <div class="section">
                  <img src="/img/icon/attachment.svg" alt="Иконка вложения">
                </div>
                <div class="section pdng-l-10px">
                  <div class="txt-color-1 txt-bold txt-size-14px">
                    Файл #{{ index + 1 }}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="mrgn-t-20px">
          <h3 class="txt-size-20px txt-bold">
            Инцидент затрагивает:
          </h3>
          <div class="mrgn-t-30px">
            <div class="campaign-candidates-list">
              <div class="person-wrp flex-column flex-algn-itms-strch">
                <div class="person-photo">
                  <div class="person-initials">С.Г.Т.</div>
                  <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                </div>
                <div class="person-info pdng-t-10px">
                  <div class="person-name txt-size-14px txt-medium">
                    Светлана Георгиевна
                    <br>
                    Тихановская
                  </div>
                  <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                    Зам. председателя комиссии
                  </div>
                </div>

                <div class="person-popover cursor-pointer">
                  <div class="flex-column flex-algn-itms-strch">
                    <div class="person-photo">
                      <div class="person-initials">С.Г.Т.</div>
                      <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                    </div>
                    <div class="person-info pdng-t-10px">
                      <div class="person-name txt-size-14px txt-medium">
                        Светлана Георгиевна
                        <br>
                        Тихановская
                      </div>
                      <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                        Зам. председателя комиссии
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
              <div class="person-wrp flex-column flex-algn-itms-strch">
                <div class="person-photo">
                  <div class="person-initials">С.Г.Т.</div>
                  <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                </div>
                <div class="person-info pdng-t-10px">
                  <div class="person-name txt-size-14px txt-medium">
                    Светлана Георгиевна
                    <br>
                    Тихановская
                  </div>
                  <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                    Зам. председателя комиссии
                  </div>
                </div>

                <div class="person-popover cursor-pointer">
                  <div class="flex-column flex-algn-itms-strch">
                    <div class="person-photo">
                      <div class="person-initials">С.Г.Т.</div>
                      <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                    </div>
                    <div class="person-info pdng-t-10px">
                      <div class="person-name txt-size-14px txt-medium">
                        Светлана Георгиевна
                        <br>
                        Тихановская
                      </div>
                      <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                        Зам. председателя комиссии
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
              <div class="person-wrp flex-column flex-algn-itms-strch">
                <div class="person-photo">
                  <div class="person-initials">С.Г.Т.</div>
                  <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                </div>
                <div class="person-info pdng-t-10px">
                  <div class="person-name txt-size-14px txt-medium">
                    Светлана Георгиевна
                    <br>
                    Тихановская
                  </div>
                  <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                    Зам. председателя комиссии
                  </div>
                </div>

                <div class="person-popover cursor-pointer">
                  <div class="flex-column flex-algn-itms-strch">
                    <div class="person-photo">
                      <div class="person-initials">С.Г.Т.</div>
                      <img src="/img/user.svg" alt="Светлана Георгиевна Тихановская">
                    </div>
                    <div class="person-info pdng-t-10px">
                      <div class="person-name txt-size-14px txt-medium">
                        Светлана Георгиевна
                        <br>
                        Тихановская
                      </div>
                      <div class="person-mark txt-color-3-1 txt-size-12px txt-medium">
                        Зам. председателя комиссии
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
        <div class="mrgn-t-50px">
          <div class="txt-color-3-1 txt-size-14px">
            Поделитесь этим материалам, это поможет <br> привлечь внимание к инциденту и его решению.
          </div>
        </div>
      </div>
    </template>
  </Dialog>

</template>
<script>
import Header from './Header.vue';
import Location from './Point.vue';
import {defineComponent, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import Dialog from './Modal.vue';
import Button from 'primevue/button';
import {hash} from './Messages.vue'

const data = ref(null)

const map = {
  ELECTION_COMMISSION_PRECINCT_PRESIDENTIAL_2020: 'Участковая',
  ELECTION_COMMISSION_TERRITORIAL_PRESIDENTIAL_2020: 'Территориальная',
  ELECTION_COMMISSION_TERRITORIAL_PARLIAMENTARY_2019: 'Территориальная',
  ELECTION_COMMISSION_PRECINCT_PARLIAMENTARY_2019: 'Участковая',
  ELECTION_COMMISSION_PRECINCT_LOCAL_2018: 'Участковая',
  ELECTION_COMMISSION_TERRITORIAL_LOCAL_2018: 'Территориальная',
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
    'header-view': Header,
    Location,
    Dialog,
    Button
  },
  setup() {
    onMounted(() => {
      fetchCommission()
    })
    const displayModal = ref(false)
    const message = ref(null)
    return {
      data,
      displayModal,
      message,
      formatCategories(categories) {
        return categories.map(i => hash[i]).join(',')
      },
      showModal(violation) {
        message.value = violation
        displayModal.value = true
      },
      hash,
      map
    }
  }
})
</script>
