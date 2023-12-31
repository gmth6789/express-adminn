
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'  //引入element-plus样式


const app = createApp(App)

app.use(router)

app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app');

