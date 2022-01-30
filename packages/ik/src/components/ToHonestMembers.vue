<template>
    <header-view>
    </header-view>
</template>
<script>
import Header from './Header.vue';
import {defineComponent} from "vue";

export default defineComponent({
    components: {
        'header-view': Header,
    }
})
</script>
