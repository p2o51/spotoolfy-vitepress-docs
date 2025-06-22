# Spotoolfy 使用手册

这是 Spotoolfy 应用的三语（中文、英文、日文）使用手册，使用 VitePress 构建。

## 开发

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 项目结构

```
docs/
├── .vitepress/
│   └── config.ts          # VitePress 配置文件
├── index.md               # 中文主页
├── getting-started.md     # 中文快速开始
├── en/
│   ├── index.md           # 英文主页
│   └── getting-started.md # 英文快速开始
├── ja/
│   ├── index.md           # 日文主页
│   └── getting-started.md # 日文快速开始
└── public/                # 静态资源
```

## 多语言支持

项目支持三种语言：
- 🇨🇳 简体中文 (默认)
- 🇺🇸 English
- 🇯🇵 日本語

每种语言都有完整的导航和内容结构。

## 添加新页面

### 中文页面
在 `docs/` 目录下创建 `.md` 文件

### 英文页面
在 `docs/en/` 目录下创建 `.md` 文件

### 日文页面
在 `docs/ja/` 目录下创建 `.md` 文件

记得在 `config.ts` 中更新对应语言的侧边栏配置。

## 部署

项目可以部署到任何支持静态站点的平台，如：
- Vercel
- Netlify
- GitHub Pages
- 自托管服务器

构建后的文件位于 `docs/.vitepress/dist/` 目录。