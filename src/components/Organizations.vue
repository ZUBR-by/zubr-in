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
  <div class="scene">
    <div class="organization-list" v-if="data">
      <a :href="'/organization/' + item.id" class="organization-unit" v-for="item of data.organizations">
        <div class="section pdng-r-20px pdng-l-30px pdng-t-20px pdng-b-20px">
          <h2 class="txt-color-1 txt-size-20px txt-medium">
            {{ item.name }}
          </h2>
          <div class="txt-color-2 txt-size-14px">
            {{ item.address }}
          </div>
        </div>
      </a>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px" v-if="data">
      <a href="#" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще 50 избирательных комиссий из {{ data.pagination.aggregate.count }}
      </a>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
import {defineComponent, onMounted, ref} from "vue";

const data = ref(null)

async function fetchOrganizations() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/organizations')
    data.value = await response.json()
  } catch (e) {
    data.value = {organizations: [], pagination: {aggregate: {count: 0}}};
  }
  return {
    data
  }
}

export default defineComponent({
  components: {
    'header-view': Header,
  },
  setup() {
    onMounted(() => {
      fetchOrganizations()
    });
    return {
      data
    }
  }
})
</script>
