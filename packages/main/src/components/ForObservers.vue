<template>
  <header-view :active="'О проекте'">
  </header-view>
  <div class="scene mrgn-t-130px mil-mrgn-t-80px">
    <h2 class="pdng-b-15px">Наблюдателям</h2>
      <ol>
          <li>Обучающий видеокурс для наблюдателей (видеокурс)</li>
          <li> Законодательство
              <ul>
                  <li>Конституция Республики Беларусь</li>
                  <li>Избирательный кодекс</li>
                  <li>Постановления ЦИК по референдуму 2022</li>
                  <li>Административный кодекс</li>
                  <li>Уголовный кодекс</li>
              </ul>
          </li>
          <li>Путеводитель для наблюдателей от ZUBR</li>
          <li>Образцы жалоб и заявлений</li>
      </ol>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  components: {
    'header-view': Header
  },
}
</script>

<style scoped>

</style>
