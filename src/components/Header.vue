<template>
  <div class="header-wrp fixedhrd">
    <div class="header flex-row flex-algn-itms-c">
      <a href="/" class="section pdng-l-20px pdng-r-20px">
        <img src="/img/icon/zubr.svg">
      </a>
      <div class="header-links flex-grow-all pdng-l-20px pdng-r-20px">
        <router-link :to="route.to" v-for="route of routes">
          {{ route.name }}
        </router-link>
      </div>
      <div class="section pdng-l-20px pdng-r-30px">
        <div class="search-input-wrp">
          <Dropdown :options="results"
                    placeholder="Поиск..."
                    style="width: 300px;"
                    :filter="true"
                    @filter="load"
                    v-model="query"
                    optionLabel="name"
                    :showClear="true"
                    scrollHeight="300px"
                    optionGroupLabel="label"
                    optionGroupChildren="items">
            <template #optiongroup="slotProps">
              <div class="p-d-flex p-ai-center country-item">
                <div>{{ slotProps.option.label }}</div>
              </div>
            </template>
            <template #option="{option}">
              {{ option.name }}
            </template>
          </Dropdown>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent, ref, watch} from "vue";
import {routes} from '../router';
import Dropdown from 'primevue/dropdown';

const hash = {
  'members': 'Члены комиссий',
  'organizations': 'Организации',
  'commissions': 'Комиссии'
}
export default defineComponent({
  components: {
    Dropdown
  },
  setup() {
    const query = ref();
    const results = ref([
      {
        label: 'Члены комиссии',
        items: []
      },
      {
        label: 'Комиссии',
        items: []
      },
      {
        label: 'Организации',
        items: []
      }
    ])
    watch(query, (newValue) => {
      if (!newValue) {
        return
      }
      if (newValue.id && newValue.__typename === 'person') {
        window.location = '/member/' + newValue.id
        return;
      }
      if (newValue.id && newValue.kind) {
        window.location = '/organization/' + newValue.id
        return;
      }
      if (newValue.id) {
        window.location = '/commission/' + newValue.id
      }
    })
    return {
      routes: routes.filter(i => !i.exclude).map(item => {
        return {
          to: item.path,
          name: item.label
        }
      }),
      results,
      query,
      async load({value}) {
        try {
          const response = await fetch(
              import.meta.env.VITE_API_URL
              + '/search'
              + (value ? '?name=' + encodeURIComponent('%' + value + '%') : '')
          )
          const payload = await response.json();
          ((tmp) => {
            let final = [];
            for (let key in tmp) {
              if (tmp[key].length === 0) {
                continue;
              }
              final.push({
                'label': hash[key],
                items: tmp[key]
              })
            }
            results.value = final
          })(payload)
        } catch (e) {
          console.error(e)
        }
      }
    }
  }
});
</script>
