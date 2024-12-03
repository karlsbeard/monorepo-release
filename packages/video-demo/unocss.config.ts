import { defineConfig } from 'unocss'

export default defineConfig({
  // 配置 UnoCSS
  shortcuts: [
    ['btn', 'px-4 py-2 rounded bg-blue-500 text-white'],
    // 自定义快捷类
  ],
  theme: {
    colors: {
      primary: '#1E40AF',
      secondary: '#F59E0B',
      // 自定义颜色
    },
  },
})
