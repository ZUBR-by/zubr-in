<template>
  <header-view>
    <div class="header-subnav border-color2">
      <div class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px">
        <div class="inline-block">
          <!--          TODO фильтр по названиию-->
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Тип организации
          </div>
          <div class="buttongroup">
            <div class="buttongroup-unit active">
              Все
            </div>
            <div class="buttongroup-unit">
              Независимые
            </div>
          </div>
        </div>
      </div>
    </div>
  </header-view>
  <div style="margin-top:170px;" class="scene">
    <div class="organization-list">
      <a class="organization-unit" v-for="item of [1,2,3,4,5]">
        <div class="section size-10 pdng-l-20px">
          <div class="organization-unit-logo">
            <img src="/imgs/org-logo.png" alt="">
          </div>
        </div>
        <div class="section pdng-r-20px pdng-l-30px pdng-t-20px pdng-b-20px">
          <h2 class="txt-color-1 txt-size-20px txt-medium">
            РОО «Белорусское Общество Красного Креста»
          </h2>
          <div class="txt-color-2 txt-size-14px">
            г. Минск, ул. Карла Маркса, 35
          </div>
        </div>
      </a>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="#" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще 100 избирательных комиссий из 3 765
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
