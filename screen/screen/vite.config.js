import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    //配置路径别名 4.29 20:51
    alias:[
      {
        find:'@',
        replacement:"/src"
      }
    ],
  },
  server:{
    port:8080,
  }
})
