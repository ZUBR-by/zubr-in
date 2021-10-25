<template>
  <header-view></header-view>
  <div class="scene">
    <div class="article-group" v-if="data" v-for="(items, group) in data">
      <div class="pdng-b-40px">
        <h3 class="txt-size-36px txt-bold">
          {{ group }}
        </h3>
      </div>
      <div class="article-preview-unit shadow-type-5" v-if="data" v-for="item of items">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          {{ item.date }}
        </time>
        <h4 class="txt-size-36px mil-txt-size-30px txt-bold txt-color-1">
          <a class="txt-underline-2px" :href="'/news/' + item.id" v-html="item.title.rendered">
          </a>
        </h4>
        <h5 class="txt-size-28px mil-txt-size-24px txt-bold mrgn-t-15px" v-html="item.excerpt.rendered">
        </h5>
        <div class="pdng-t-30px pdng-b-30px" v-html="item.content.rendered" v-if="false"></div>
        <img :src="item._embedded['wp:featuredmedia'][0]['source_url']"
             v-if="item._embedded['wp:featuredmedia'][0]['source_url']">
      </div>
    </div>
    <div class="flex-column flex-algn-itms-c pdng-t-40px">
      <a href="#" class="button primary pdng-l-40px pdng-r-40px">
        Загрузить еще 10 новостей из 111
      </a>
    </div>
  </div>
</template>
<script>
//
import Header from './Header.vue';
import {defineComponent, ref} from "vue";

function fetchNews() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  const load = async () => {
    try {
      loading.value = true
      const response = await fetch('https://zubr.media/wp-json/wp/v2/posts?tags=79&per_page=10&_embed')
      let tmp = await response.json()
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
      loading
    }
  }
})
</script>
