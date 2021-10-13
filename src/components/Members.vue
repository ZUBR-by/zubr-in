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
        <div class="inline-block pdng-l-10px">
          <div class="txt-size-12px txt-color-3-1 mrgn-b-5px">
            ФИО
          </div>
          <input :class="['p-inputtext p-component']" v-model.lazy="value">
        </div>
      </div>
    </div>
  </header-view>
  <div style="margin-top:170px;" class="scene" v-if="data">
    <div class="committee-members-list">
      <!--      :class="{mark: item === 2}"-->
      <a class="committee-members-unit"
         :href="'/member/' + item.id" v-for="item of data.members">
        <div class="section pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px">
          <div class="flex-row flex-algn-itms-c">
            <div class="section pdng-r-20px">
              <div class="person-photo">
                <div class="person-initials">С.Г.Т.</div>
                <img :src="item.photo_url" :alt="item.full_name">
              </div>
            </div>
            <div class="section">
              <h2 class="txt-color-1 txt-size-20px txt-medium">
                {{ item.full_name }}
              </h2>
              <div class="txt-color-2 txt-size-14px">
                {{ item.organizations[0].position }}
              </div>
            </div>
          </div>
        </div>
        <div
            class="section flex-row flex-algn-itms-c flex-algn-slf-strch size-45 pdng-r-20px pdng-l-20px pdng-t-20px pdng-b-20px border-l-1px border-color2">
          <div class="txt-color-2 txt-size-14px">
            заведующий кафедрой социально-гуманитарных и правовых дисциплин учреждения образования «Гомельский
            государственный технический университет имени П.О.Сухого»
          </div>
        </div>
      </a>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="#" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще 50 членов избирательных комиссий из {{ data.pagination.aggregate.count }}
      </a>
    </div>
  </div>
</template>
<script>
import Header from './Header.vue'
import {defineComponent, onMounted, ref, watch} from "vue";

const data = ref(null)
const value = ref('')

async function fetchMembers() {
  try {
    const response = await fetch(
        import.meta.env.VITE_API_URL
        +
        '/members'
        + (value.value ? '?name=' + encodeURIComponent('%' + value.value + '%') : '')
    )
    data.value = await response.json()
  } catch (e) {
    data.value = {members: [], pagination: {aggregate: {count: 0}}};
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
    watch(value, () => {
      fetchMembers()
    })
    onMounted(() => {
      fetchMembers()
    });
    return {
      data,
      value
    }
  }
})
</script>
