<template>
  <header-view>
    <div class="header-subnav border-color2">
      <div class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px">
        <div class="inline-block">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Роль в комиссии
          </div>
          <div class="buttongroup">
            <div class="buttongroup-unit active">
              Все
            </div>
            <div class="buttongroup-unit">
              Председатели
            </div>
            <div class="buttongroup-unit">
              Заместители
            </div>
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div style="margin-top:170px;" class="scene">
    <div class="committee-members-list">
      <a class="committee-members-unit" :class="{mark: item === 2}"
         :href="'/member/1'" v-for="item of [1,2,3,4,5]">
        <div class="section pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px">
          <div class="flex-row flex-algn-itms-c">
            <div class="section pdng-r-20px">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img src="imgs/person-photo.png" alt="Светлана Георгиевна Тихановская">
              </div>
            </div>
            <div class="section">
              <h2 class="txt-color-1 txt-size-20px txt-medium">
                Кацубо Светлана Петровна
              </h2>
              <div class="txt-color-2 txt-size-14px">
                Председатель комиссии
              </div>
            </div>
          </div>
        </div>
        <div class="section flex-row flex-algn-itms-c flex-algn-slf-strch size-45 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px border-l-1px border-color2">
          <div class="txt-color-2 txt-size-14px">
            заведующий кафедрой социально-гуманитарных и правовых дисциплин учреждения образования «Гомельский государственный технический университет имени П.О.Сухого»
          </div>
        </div>
        <div class="section flex-grow-all txt-algn-r txt-nowrap pdng-r-30px pdng-l-20px pdng-t-20px pdng-b-20px">
          <div class="inline-flex flex-algn-itms-c">
            <div class="section">
              <svg class="block" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66797 2.26288C1.66797 2.26288 4.16908 0.840252 5.84339 0.694131C8.02769 0.503502 9.8518 2.26288 11.355 2.26288C12.8581 2.26287 15.3634 1.21705 15.3634 1.21705V11.6753C15.3634 11.6753 13.6553 12.5125 12.5241 12.7212C9.90404 13.2044 8.51567 11.1524 5.84339 11.1524C3.17112 11.1524 1.66797 12.7212 1.66797 12.7212V2.26288Z" fill="#FF5C01"/>
                <rect y="1.29492" width="1.22907" height="19.6652" fill="#FF5C01"/>
              </svg>
            </div>
            <div class="section pdng-l-15px">
              <div class=" txt-color-2 txt-size-20px txt-bold">
                1 337
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="#" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще 100 членов избирательных комиссий из 3 765
      </a>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    'header-view': Header
  }
})
</script>
