<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<template>
  <router-view :key="$route.fullPath"/>
</template>

<style scoped>

</style>
