import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'

// https://juejin.cn/post/7081516964400594951#heading-1
createApp(App)
    .use(router)
    .mount('#app')
