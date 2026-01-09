import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts';
import ViteSSGOptions from "vite-ssg";

import Markdown from 'unplugin-vue-markdown/vite'
import Pages from 'vite-plugin-pages'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      routesFolder: [
        'src/pages',
        {
          src: 'src/docs',
          // override the global extensions to **only** accept markdown files
          extensions: ['.md'],
        },
      ],
      /* options */
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      pagesDirs: 'src/pages',
      defaultLayout: 'default'
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      headEnabled: true,
      markdownItSetup(md) {
      },
    }),
    vueDevTools(),
  ],
  ssgOptions: {
    dirStyle: "nested",
    script: "async",
    formatting: "minify",
    format: "esm",
    crittersOptions: {
      // E.g., change the preload strategy
      preload: 'media',
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
