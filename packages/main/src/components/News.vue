<template>
  <header-view :active="'Новости'"></header-view>
  <div class="scene mrgn-t-50px mil-mrgn-t-80px">
    <div v-if="loading">
      Загрузка...
    </div>
    <div class="article-group" v-if="data" v-for="(items, group) in data">
      <div class="pdng-b-40px">
        <h3 class="txt-size-36px txt-bold mil-txt-size-30px">
          {{ formatDate(group) }}
        </h3>
      </div>
      <div class="article-preview-unit shadow-type-5" v-if="data" v-for="item of items">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px" :title="item.date">
          {{ formatDate(item.date) }}
        </time>
        <h4 class="txt-size-36px mil-txt-size-30px txt-bold txt-color-1">
          <a class="txt-underline-inline-2px" :href="'/news/' + item.id" v-html="item.title.rendered">
          </a>
        </h4>
        <h5 class="txt-size-28px mil-txt-size-24px txt-bold mrgn-t-15px" v-html="item.excerpt.rendered">
        </h5>
        <div class="pdng-t-30px pdng-b-30px" v-html="item.content.rendered" v-if="false"></div>
        <div class="article-preview-image pdng-b-20px mrgn-t-30px">
          <img :src="item._embedded['wp:featuredmedia'][0]['source_url']"
               style="height: 50%;width: 50%"
               v-if="item._embedded['wp:featuredmedia'][0]['source_url']">
        </div>
      </div>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a @click="loadMore" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще
      </a>
    </div>
  </div>
</template>
<script>
//
import Header from './Navbar.vue';
import {defineComponent, ref} from "vue";
import {formatDate} from '../date'

const page = ref(1);

function fetchNews() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  const load = async () => {
    try {
      loading.value = true
      const response = await fetch('https://zubr.media/wp-json/wp/v2/posts?tags=79&per_page=10&_embed&page=' + page.value)
      let tmp = await response.json()
      if (tmp.code) {
        page.value -= 1;
        loading.value = false
        return;
      }

      if (page.value > 1) {
        for (let item of tmp) {
          let d = item.date.split('T')[0];
          if (!data.value[d]) {
            data.value[d] = [];
          }
          data.value[d].push(item)
        }
      } else {
        data.value = ((items) => {
          let result = {};
          for (let item of items) {
            let d = item.date.split('T')[0];
            if (!result[d]) {
              result[d] = [];
            }
            result[d].push(item)
          }
          return result;
        })(tmp)
      }

      loading.value = false
    } catch (e) {
      loading.value = false
      error.value = e.message;
      console.error(e)
    }
  }

  return {data, load, error, loading}
}

export default defineComponent({
  components: {
    'header-view': Header
  },
  setup() {
    const {data, load, loading} = fetchNews();
    load()
    return {
      data,
      loading,
      formatDate,
      loadMore() {
        page.value += 1;
        load()
      }
    }
  }
})
</script>
