import {createApp} from 'vue'
import App from './../src/App.vue'
import router from "./../src/router";
import 'primevue/resources/themes/saga-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './../src/assets/main.css'
import PrimeVue from 'primevue/config';

const app = createApp(App)
app.use(router)
app.use(PrimeVue);
app.mount('#app')
