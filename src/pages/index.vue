<script setup lang="ts">
import { useHead } from '@vueuse/head'
import BrandLogo from '@/components/BrandLogo.vue'

useHead({
  title: 'Virlent Inc. | Technology that moves you.',
  meta: [
    { name: 'description', content: 'テクノロジーで感動の瞬間を。Virlent Inc.はフロントエンド技術でリアルとデジタルの境界を溶かします。' }
  ]
})

// ナビゲーションリンク
const navLinks = [
  { name: '製品', href: '#product' },
  { name: 'ソリューション', href: '#solution' },
  { name: 'について', href: '#about' },
  { name: '詳細', href: '#' },
]

// ソリューションのリスト項目
const solutionItems = [
  { icon: '架构', label: 'フロントエンドアーキテクチャ設計' },
  { icon: '速度', label: 'パフォーマンスチューニング' },
  { icon: '開発', label: 'SPA/SSG開発' },
]

import kv from '@/assets/img/photo-1516321318423-f06f85e504b3.avif'
import kv2 from '@/assets/img/photo-1522071820081-009f0129c71c.avif'
</script>

<template>
  <div class="min-h-screen font-sans text-gray-800">
    
    <div class="relative bg-[#00A693] text-white">
      <header class="absolute top-0 w-full z-10">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div class="max-w-7xl px-6 h-20 flex items-center justify-between">
            <a href="#" class="flex items-center gap-2 hover:opacity-90 transition">
              <BrandLogo class="w-10 h-10" />
              <span class="text-xl font-bold tracking-tight">Virlent Inc.</span>
            </a>
          </div>
          
          <nav class="hidden md:flex items-center space-x-8 text-sm font-medium"  v-if="false">
            <a v-for="link in navLinks" :key="link.name" :href="link.href" class="hover:opacity-80 transition">
              {{ link.name }}
            </a>
            <a href="#contact" class="border border-white/50 px-4 py-2 rounded hover:bg-white hover:text-[#00A693] transition">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      <div class="flex flex-col md:flex-row min-h-[600px] md:h-screen max-h-[900px]">
        <div class="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 pt-24 md:pt-0">
          <div class="max-w-lg">
            <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Technology<br> 
              that moves 
              you.
            </h1>
            <p class="text-sm md:text-base leading-relaxed opacity-90 mb-8">
離れていても、目の前にいるような臨場感を。<br>
初めて触れるのに、使い慣れた道具のような心地よさを。<br>
想像を超える体験は、いつも確かな技術から生まれるから。<br>
フロントエンド技術でリアルとデジタルの境界を溶かします。
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/2 h-64 md:h-auto relative">
          <img 
            :src="kv" 
            alt="Relaxing with technology" 
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <section id="about" class="py-24 bg-gray-100 px-6">
      <div class="max-w-3xl mx-auto text-center">
        <span class="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-4">アプローチ</span>
        <h2 class="text-4xl font-normal mb-8 text-gray-900">
          技術とビジネスの架け橋に
        </h2>
        <p class="text-gray-600 leading-loose mb-10 max-w-2xl ">
        私たちは、「使いやすさ」と「保守性」を両立するフロントエンド開発を提供します。<br>クライアント様の描くビジョンを、最新のWeb技術を用いて具現化すること。<br>そして、エンドユーザーにとって心地よい最高の体験を創り出すことが<br>Virlent Inc. のミッションです。
        </p>
        <div class="flex gap-4 justify-center md:justify-start" v-if="false">
          <button class="bg-blue-600 text-white py-2 px-6 rounded text-sm hover:bg-blue-700 transition">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>

    <section id="product" class="bg-[#0f172a] text-white">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 py-24 px-6 md:px-16 flex flex-col justify-center">
          <div class="max-w-lg md:ml-auto">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">プロダクト(特許取得済み)</span>
            <h2 class="text-4xl font-bold mb-6">Re:Meet LIVE</h2>
            <p class="text-gray-400 leading-relaxed mb-8 text-sm">
              1対1のオンライングリーティングシステム。WebRTCによる低遅延通話、2ショット撮影、ハガシ（交代）の自動化などスタッフの負担軽減、アプリ不要でユーザーフレンドリーな高度なフロントエンド技術が集約されています。
            </p>
            <a href="https://remeet.live/" class="inline-flex items-center text-sm font-bold hover:underline">
              <span class="bg-gray-700 px-3 py-1 rounded mr-2">詳細</span>
              &rarr;
            </a>
          </div>
        </div>
        
        <div class="w-full md:w-1/2 bg-[#1e293b] min-h-[400px] flex items-center justify-center">
          <svg class="w-20 h-20 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </section>

    <section id="solution" class="bg-gray-100">
      <div class="flex flex-col-reverse md:flex-row">
        <div class="w-full md:w-1/2 h-64 md:h-auto relative">
           <img 
            :src="kv2"
            alt="Team working" 
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div class="w-full md:w-1/2 py-24 px-6 md:px-16 flex flex-col justify-center">
          <div class="max-w-lg">
            <span class="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-4">ソリューション</span>
            <h2 class="text-4xl font-normal text-gray-900 mb-6">
              クライアント向けサービス
            </h2>
            <p class="text-gray-600 mb-8 text-sm">
              フロントエンドの設計から運用まで、スケールする仕組みを一緒に作る。
            </p>
            
            <ul class="space-y-4 mb-8">
              <li v-for="item in solutionItems" :key="item.label" class="flex items-center text-gray-700 text-sm font-medium">
                <span class="w-6 h-6 mr-3 flex items-center justify-center text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </span>
                {{ item.label }}
              </li>
            </ul>

            <a v-if="false" href="#" class="inline-flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold py-2 px-4 rounded transition">
              検証
              <span class="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-[#CDDC39] text-gray-900 py-16 px-6">
      <div class="max-w-4xl mx-auto text-center">
<div class="max-w-4xl mx-auto text-center">
        <div class="flex flex-col items-center justify-center mb-8">
           <BrandLogo class="w-16 h-16 mb-4" />
          <div class="text-2xl font-bold tracking-tight">Virlent Inc.</div>
        </div>
        
        </div>
        
        <div class="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold uppercase tracking-wide mb-12">
          <a href="#" class="hover:text-white transition">Re:Meet LIVE</a>
          <a href="#" class="hover:text-white transition">WebRTC Platform</a>
          <a href="#" class="hover:text-white transition">Real-time processing</a>
          <a href="#" class="hover:text-white transition">Event solutions</a>
          <a href="#" class="hover:text-white transition">Contact us</a>
        </div>

        <div class="w-full h-px bg-black/10 mb-8"></div>

        <div class="flex flex-col md:flex-row justify-between items-center text-[10px] font-medium text-gray-700">
          <p class="mb-4 md:mb-0">&copy; 2026 Virlent Inc. All rights reserved.</p>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-black">Privacy policy</a>
            <a href="#" class="hover:text-black">Terms of service</a>
            <a href="#" class="hover:text-black">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* 補足: フォント設定が tailwind.config.js にない場合用 */
.font-serif {
  font-family: 'Times New Roman', serif; /* ロゴ用の簡易フォント指定 */
}
</style>