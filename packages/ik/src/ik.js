import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/main.css'

import * as Sentry from "@sentry/vue";
import {BrowserTracing} from "@sentry/tracing"; // ES 2015

const app = createApp(App)
app.use(router)
app.mount('#app')

if (import.meta.env.MODE !== 'development') {
    Sentry.init({
        app,
        dsn: "https://65d5fef714ce409c8bc6599e69744a78@o756872.ingest.sentry.io/5791310",
        integrations: [
            new BrowserTracing({
                routingInstrumentation: Sentry.vueRouterInstrumentation(router)
            }),
        ],
        tracesSampleRate: 1.0,
    });
}
