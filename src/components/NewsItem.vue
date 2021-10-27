<template>
  <header-view>
    <div class="header-subnav border-t-1px border-color2">
      <a class="section flex-algn-slf-strch flex-row flex-algn-itms-c pdng-l-30px pdng-r-30px mil-pdng-l-15px mil-pdng-r-15px txt-algn-c border-r-1px border-color2 hovered" href="#">
        <div class="inline-block">
          <svg class="mil-zoom-0_8" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5V13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM18 10.5L2 10.5V13.5L18 13.5V10.5Z" fill="#FF6C1A"></path>
          </svg>
        </div>
      </a>
      <div class="section flex-grow-all pdng-30px pdng-t-15px pdng-b-15px mil-pdng-20px mil-pdng-t-10px mil-pdng-b-10px">
        <div class="txt-color-1 txt-size-15px mil-txt-size-14px txt-bold">
          Вброшенный президент
        </div>
        <div class="txt-size-15px mil-txt-size-14px">
          Как белорусские УИКи не смогли «нарисовать» нужный результат Лукашенко, а Тихановская выиграла выборы. Исследование «Новой».
        </div>
      </div>
      <div class="section flex-row flex-algn-itms-c flex-noshrink flex-algn-slf-strch pdng-l-20px pdng-r-30px mil-pdng-r-20px border-l-1px border-color2">
        социальные кнопки
      </div>
    </div>
  </header-view>
  <div class="scene mrgn-t-170px mil-mrgn-t-120px">
    <div class="article-view" v-if="data">
      <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
        {{data.date}}
      </time>
      <h1 class="txt-size-48px txt-bold txt-color-1 mil-txt-size-38px" v-html="data.title.rendered">
      </h1>
      <h2 class="txt-size-32px txt-bold mrgn-t-15px mil-txt-size-28px" v-html="data.excerpt.rendered">
      </h2>
      <div class="tag-wrp mrgn-t-20px" v-if="false">
        <a class="tag-unit txt-size-14px">Расследование</a>
        <a class="tag-unit txt-size-14px">Анализ</a>
        <a class="tag-unit txt-size-14px">Выборы 2020</a>
      </div>
      <div class="pdng-t-40px txt-size-18px mil-txt-size-16px" v-html="data.content.rendered">
      </div>
    </div>
  </div>
  <div class="scene" v-if="false">
    <h3 class="txt-size-36px txt-bold pdng-b-40px">
      Вам также может быть интересно:
    </h3>
    <div class="article-group">
      <div class="article-preview-unit shadow-type-5">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          19:45, сегодня
        </time>
        <h5 class="txt-size-36px txt-bold txt-color-1">
          <a class="txt-underline-2px" href="#">
            Вброшенный президент
          </a>
        </h5>
        <h6 class="txt-size-28px txt-bold mrgn-t-15px">
          Как белорусские УИКи не смогли «нарисовать» нужный результат Лукашенко, а Тихановская выиграла выборы.
          Исследование «Новой».
        </h6>
        <div class="tag-wrp mrgn-t-10px">
          <a class="tag-unit">Расследование</a>
          <a class="tag-unit">Анализ</a>
          <a class="tag-unit">Выборы 2020</a>
        </div>
      </div>
      <div class="article-preview-unit shadow-type-5">
        <time class="block txt-color-3-1 txt-size-14px mrgn-b-10px">
          19:45, сегодня
        </time>
        <h5 class="txt-size-36px txt-bold txt-color-1">
          <a class="txt-underline-2px" href="#">
            Вброшенный президент
          </a>
        </h5>
        <h6 class="txt-size-28px txt-bold mrgn-t-15px">
          Как белорусские УИКи не смогли «нарисовать» нужный результат Лукашенко, а Тихановская выиграла выборы.
          Исследование «Новой».
        </h6>
        <div class="tag-wrp mrgn-t-10px">
          <a class="tag-unit">Расследование</a>
          <a class="tag-unit">Анализ</a>
          <a class="tag-unit">Выборы 2020</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
iframe {
  display:none;
  }
</style>
<script>
import Header from './Header.vue';
import {defineComponent, ref} from "vue";
import {useRoute} from "vue-router";

function fetchNews(id) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  const load = async () => {
    try {
      loading.value = true
      const response = await fetch('https://zubr.media/wp-json/wp/v2/posts/' + id)
      data.value = await response.json()
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
    const {data, load} = fetchNews(useRoute().params.id)
    load()
    return {
      data
    }
  }
})
</script>
