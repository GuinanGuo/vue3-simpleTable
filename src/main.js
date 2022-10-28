// 相同的文件
import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 相同的文件
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
// 相同的文件
app.mount('#app')
