<template>
  <div class="header-wrp fixedhrd">
    <div class="header flex-row flex-algn-itms-c">
      <a href="#" class="section pdng-l-20px pdng-r-20px">
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
                    optionLabel="label"
                    :showClear="true"
                    optionGroupLabel="label"
                    optionGroupChildren="items">
            <template #optiongroup="slotProps">
              <div class="p-d-flex p-ai-center country-item">
                <div>{{ slotProps.option.label }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {routes} from '../router';
import Dropdown from 'primevue/dropdown';

export default defineComponent({
  components: {
    Dropdown
  },
  setup() {
    return {
      routes: routes.filter(i => !i.exclude).map(item => {
        return {
          to: item.path,
          name: item.label
        }
      }),
      results: ref([
        {
          label: 'Germany', code: 'DE',
          items: [
            {label: 'Berlin', value: 'Berlin'},
            {label: 'Frankfurt', value: 'Frankfurt'},
            {label: 'Hamburg', value: 'Hamburg'},
            {label: 'Munich', value: 'Munich'}
          ]
        },
        {
          label: 'USA', code: 'US',
          items: [
            {label: 'Chicago', value: 'Chicago'},
            {label: 'Los Angeles', value: 'Los Angeles'},
            {label: 'New York', value: 'New York'},
            {label: 'San Francisco', value: 'San Francisco'}
          ]
        },
        {
          label: 'Japan', code: 'JP',
          items: [
            {label: 'Kyoto', value: 'Kyoto'},
            {label: 'Osaka', value: 'Osaka'},
            {label: 'Tokyo', value: 'Tokyo'},
            {label: 'Yokohama', value: 'Yokohama'}
          ]
        }
      ])
    }
  }
});
</script>
