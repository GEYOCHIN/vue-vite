import { createApp } from "vue"
import App from "./App.vue"
import { Button } from "vant"
import router from "./router"


const app = createApp(App)
app.use(Button)
app.use(router).mount("#app")
