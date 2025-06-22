# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based documentation site for Spotoolfy, a Flutter-based Spotify client application with lyrics and notes features. The documentation is multilingual, supporting Chinese (default), English, and Japanese.

## Architecture

### VitePress Documentation Structure
- **Multi-language support**: Three locales (zh-CN, en-US, ja-JP) with complete navigation
- **Structured content**: Organized into Getting Started, Features & Design, and Advanced sections
- **Static site generation**: Built with VitePress 1.6.3 for optimal performance

### Documentation Organization
```
docs/
├── .vitepress/
│   └── config.ts          # Main VitePress configuration with i18n setup
├── index.md               # Chinese homepage
├── getting-started/       # Chinese getting started guides
├── features/              # Chinese feature documentation
├── advanced/              # Chinese advanced topics
├── en/                    # Complete English documentation mirror
├── ja/                    # Complete Japanese documentation mirror
└── public/                # Static assets and images
```

### Configuration Architecture
- **Base path**: `/spotoolfy-docs/` for deployment
- **Search**: Local search provider enabled
- **Theme**: Default VitePress theme with custom navigation and sidebar
- **Social links**: GitHub integration configured

## Common Development Commands

### Development
```bash
npm install              # Install dependencies
npm run dev              # Start development server with hot reload
npm run build            # Build production site
npm run preview          # Preview production build locally
```

### Content Development
- **Adding new pages**: Create `.md` files in appropriate language directories
- **Updating navigation**: Modify `docs/.vitepress/config.ts` sidebar configuration
- **Static assets**: Place in `docs/public/` directory

## Multi-language Content Management

### Language Structure
Each language maintains identical content structure:
- **Root pages**: Welcome, getting started overview
- **Getting Started**: Installation, community, configuration guides  
- **Features**: Settings, now playing, library, roaming functionality
- **Advanced**: FAQ, components, build instructions

### Adding Content
1. Create content in Chinese (root directory)
2. Translate and place in `en/` and `ja/` subdirectories
3. Update corresponding sidebar configuration in `config.ts`
4. Ensure consistent navigation structure across all languages

## Deployment Configuration

- **Base URL**: Configured with `/spotoolfy-docs/` base path
- **Static hosting ready**: Compatible with Vercel, Netlify, GitHub Pages
- **Build output**: Generated in `docs/.vitepress/dist/`
- **Asset optimization**: Automatic handling of images and static files

## Content Guidelines

### Documentation Sections
- **Getting Started**: User onboarding, installation, basic configuration
- **Features**: Detailed functionality explanations with screenshots
- **Advanced**: Technical topics, troubleshooting, development guides

### Markdown Features
- Full VitePress markdown extensions support
- Custom components available through VitePress theme
- Image optimization and lazy loading built-in