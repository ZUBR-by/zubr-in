<template>
  <header-view :active="'Организации'">
    <div class="header-subnav border-color2">
      <div
          class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
        <div class="inline-block">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            Название
          </div>
          <input class="p-inputtext p-component" autofocus v-model.lazy="name">
        </div>
      </div>
    </div>
  </header-view>
  <div class="scene mil-mrgn-t-170px">
    <div class="organization-list" v-if="data">
      <a :href="'/organization/' + item.id" class="organization-unit" v-for="item of data.organizations">
        <div class="section flex-grow-all pdng-r-20px pdng-l-30px pdng-t-20px pdng-b-20px mil-pdng-15px">
          <h2 class="txt-color-1 txt-size-20px txt-medium mil-txt-size-16px">
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
        Загрузить еще 50 <span class="mil-notdisplay">избирательных</span> комиссий из
        {{ data.pagination.aggregate.count }}
      </a>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
import InputText from 'primevue/inputtext'
import {defineComponent, onMounted, ref, watch} from "vue";


const name = ref('')
const data = ref(null)

async function fetchOrganizations() {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL
        + '/organizations'
        + (name.value ? '?name=' + encodeURIComponent('%' + name.value + '%') : '')
    )
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
    InputText
  },


  setup() {
    watch(name, () => {
      fetchOrganizations()
    })
    onMounted(() => {
      fetchOrganizations()
    });
    return {
      data,
      name
    }
  }
})
</script>
