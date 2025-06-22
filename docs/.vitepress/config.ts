import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spotoolfy",
  description: "带有歌词和笔记功能的 Spotify 播放器",
  base: '/spotoolfy-docs/',
  
  // 多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Spotoolfy',
      description: '带有歌词和笔记功能的 Spotify 播放器',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '快速开始', link: '/getting-started/welcome' },
          { text: '功能特性', link: '/features/now-playing' },
          { text: '常见问题', link: '/advanced/faq' }
        ],
        sidebar: [
          {
            text: '上手',
            items: [
              { text: '欢迎与介绍', link: '/getting-started/welcome' },
              { text: '安装指南', link: '/getting-started/installation' },
              { text: '社群与联系方式', link: '/getting-started/community' },
              { text: '配置指南', link: '/getting-started/configuration' }
            ]
          },
          {
            text: '功能与设计',
            items: [
              { text: '设置与设备', link: '/features/settings' },
              { text: '正在播放页面', link: '/features/now-playing' },
              { text: '资料库页面', link: '/features/library' },
              { text: '漫游页面', link: '/features/roaming' }
            ]
          },
          {
            text: '进阶',
            items: [
              { text: '已知问题和 Q&A', link: '/advanced/faq' },
              { text: '可复用的 MD3 风格组件', link: '/advanced/components' },
              { text: '自己编译', link: '/advanced/build' }
            ]
          }
        ],
        footer: {
          message: '基于 MIT 许可发布',
          copyright: '版权所有 © 2024-present Spotoolfy'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Spotoolfy',
      description: 'Spotify player with lyrics and notes features',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Getting Started', link: '/en/getting-started/welcome' },
          { text: 'Features', link: '/en/features/now-playing' },
          { text: 'FAQ', link: '/en/advanced/faq' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Welcome', link: '/en/getting-started/welcome' },
              { text: 'Installation', link: '/en/getting-started/installation' },
              { text: 'Community', link: '/en/getting-started/community' },
              { text: 'Configuration', link: '/en/getting-started/configuration' }
            ]
          },
          {
            text: 'Features & Design',
            items: [
              { text: 'Settings & Devices', link: '/en/features/settings' },
              { text: 'Now Playing', link: '/en/features/now-playing' },
              { text: 'Library', link: '/en/features/library' },
              { text: 'Roaming', link: '/en/features/roaming' }
            ]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'FAQ & Known Issues', link: '/en/advanced/faq' },
              { text: 'MD3 Components', link: '/en/advanced/components' },
              { text: 'Build from Source', link: '/en/advanced/build' }
            ]
          }
        ],
        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2024-present Spotoolfy'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'Spotoolfy',
      description: '歌詞とメモ機能付きの Spotify プレーヤー',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'はじめに', link: '/ja/getting-started/welcome' },
          { text: '機能', link: '/ja/features/now-playing' },
          { text: 'FAQ', link: '/ja/advanced/faq' }
        ],
        sidebar: [
          {
            text: 'はじめに',
            items: [
              { text: 'ようこそ', link: '/ja/getting-started/welcome' },
              { text: 'インストール', link: '/ja/getting-started/installation' },
              { text: 'コミュニティ', link: '/ja/getting-started/community' },
              { text: '設定', link: '/ja/getting-started/configuration' }
            ]
          },
          {
            text: '機能とデザイン',
            items: [
              { text: '設定とデバイス', link: '/ja/features/settings' },
              { text: '再生中ページ', link: '/ja/features/now-playing' },
              { text: 'ライブラリ', link: '/ja/features/library' },
              { text: 'ローミング', link: '/ja/features/roaming' }
            ]
          },
          {
            text: '上級者向け',
            items: [
              { text: 'FAQ と既知の問題', link: '/ja/advanced/faq' },
              { text: 'MD3 コンポーネント', link: '/ja/advanced/components' },
              { text: 'ソースからビルド', link: '/ja/advanced/build' }
            ]
          }
        ],
        footer: {
          message: 'MIT ライセンスの下でリリース',
          copyright: 'Copyright © 2024-present Spotoolfy'
        }
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'Spotoolfy',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/spotoolfy/spotoolfy' }
    ],

    search: {
      provider: 'local'
    }
  }
})