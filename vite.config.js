import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // 添加下面两行代码，是为了不用在APP.vue文件里每个对象都得在后面加value，太麻烦，改好后只需要在定义数据的ref前加上$
      refTransform:true,
      reactivityTransform:true
    }),
  ],
  // 添加下面这行代码设置了个相对路径，是为了能够顺利保存打包后能顺利打开
  base:'./',
})
