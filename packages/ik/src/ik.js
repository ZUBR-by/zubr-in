import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import '@zubr-in/main/src/assets/main.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue);
app.mount('#app')
