# 可复用的 Material Design 3 组件

Spotoolfy 采用 Google Material Design 3 设计规范，构建了一套完整的 UI 组件库。本文档详细介绍这些组件的设计原则和使用方法。

## 设计原则

### Material Design 3 核心理念

#### Design Tokens 🎨
Material Design 3 采用设计令牌系统，确保一致的视觉体验：

**色彩系统** 🌈
```
Primary Colors (主色彩)
├── Primary (主色) - #6750A4
├── On Primary (主色上的文字) - #FFFFFF  
├── Primary Container (主色容器) - #EADDFF
└── On Primary Container (主色容器上的文字) - #21005D

Surface Colors (表面色彩)
├── Surface (表面) - #FEF7FF
├── On Surface (表面上的文字) - #1D1B20
├── Surface Variant (表面变体) - #E7E0EC
└── On Surface Variant (表面变体上的文字) - #49454F
```

**字体系统** 📝
```
Display Large: 57sp / 64sp (大标题)
Display Medium: 45sp / 52sp (中标题)
Display Small: 36sp / 44sp (小标题)

Headline Large: 32sp / 40sp (页面标题)
Headline Medium: 28sp / 36sp (章节标题)
Headline Small: 24sp / 32sp (子标题)

Title Large: 22sp / 28sp (卡片标题)
Title Medium: 16sp / 24sp (列表标题)
Title Small: 14sp / 20sp (小标题)

Body Large: 16sp / 24sp (正文大)
Body Medium: 14sp / 20sp (正文中)
Body Small: 12sp / 16sp (正文小)

Label Large: 14sp / 20sp (按钮文字)
Label Medium: 12sp / 16sp (标签)
Label Small: 11sp / 16sp (小标签)
```

#### 动态色彩 (Dynamic Color) 🎯
Spotoolfy 实现了 Material You 的动态色彩系统：
- **专辑封面提取**: 从当前播放歌曲的专辑封面提取主色调
- **智能适配**: 自动生成协调的配色方案
- **对比度保证**: 确保文字可读性符合无障碍标准
- **深浅模式适配**: 自动适配深色和浅色主题

### 组件设计原则

#### 一致性 (Consistency) 📐
- **视觉一致性**: 相同功能的组件保持一致的外观
- **交互一致性**: 相似操作使用相同的交互模式
- **布局一致性**: 统一的间距、对齐和层次结构

#### 可访问性 (Accessibility) ♿
- **颜色对比度**: 符合 WCAG 2.1 AA 标准
- **触摸目标**: 最小 48dp 的触摸区域
- **屏幕阅读器**: 完整的语义化支持
- **键盘导航**: 支持完整的键盘操作

## 核心组件库

### 按钮组件 (Buttons)

#### 填充按钮 (Filled Button)
主要操作使用的按钮，具有最高的视觉优先级。

```dart
SpotoolifyFilledButton(
  onPressed: () => _handlePlay(),
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(Icons.play_arrow),
      SizedBox(width: 8),
      Text('播放'),
    ],
  ),
)
```

**使用场景**:
- ✅ 播放/暂停按钮
- ✅ 主要的提交操作
- ✅ 导航到下一步骤

**视觉特征**:
- 使用主色彩填充
- 高度为 40dp
- 圆角半径 20dp
- 支持涟漪效果

#### 轮廓按钮 (Outlined Button)
次要操作使用的按钮，具有中等视觉优先级。

```dart
SpotoolifyOutlinedButton(
  onPressed: () => _handleAddToPlaylist(),
  icon: Icons.playlist_add,
  label: '添加到播放列表',
)
```

**使用场景**:
- ✅ 添加到播放列表
- ✅ 分享功能
- ✅ 次要操作

#### 文本按钮 (Text Button)
最低优先级的操作按钮。

```dart
SpotoolifyTextButton(
  onPressed: () => _handleCancel(),
  child: Text('取消'),
)
```

**使用场景**:
- ✅ 取消操作
- ✅ 链接式导航
- ✅ 辅助功能

#### 浮动操作按钮 (FAB)
页面主要操作的快捷按钮。

```dart
SpotoolifyFAB(
  onPressed: () => _handleQuickAction(),
  icon: Icons.favorite,
  label: '收藏',
  type: FABType.extended,
)
```

**FAB 类型**:
- `FABType.regular` - 标准圆形 FAB
- `FABType.small` - 小型 FAB
- `FABType.large` - 大型 FAB
- `FABType.extended` - 扩展 FAB（带文字）

### 卡片组件 (Cards)

#### 歌曲卡片 (Song Card)
展示歌曲信息的标准卡片。

```dart
SongCard(
  song: song,
  onTap: () => _playSong(song),
  onLongPress: () => _showSongMenu(song),
  showArtwork: true,
  showDuration: true,
  density: CardDensity.comfortable,
)
```

**组件结构**:
```
┌─────────────────────────────────┐
│ [🎵]  Song Title          [⋮]  │
│      Artist Name                │
│      Album Name • 3:42         │
└─────────────────────────────────┘
```

**属性配置**:
- `showArtwork`: 是否显示专辑封面
- `showDuration`: 是否显示歌曲时长
- `density`: 卡片密度（compact/comfortable/spacious）
- `trailing`: 自定义尾部组件

#### 专辑卡片 (Album Card)
展示专辑信息的卡片组件。

```dart
AlbumCard(
  album: album,
  size: AlbumCardSize.medium,
  onTap: () => _viewAlbum(album),
  showArtist: true,
  cornerRadius: 12.0,
)
```

**卡片尺寸**:
- `AlbumCardSize.small` - 100x100dp
- `AlbumCardSize.medium` - 150x150dp  
- `AlbumCardSize.large` - 200x200dp

#### 播放列表卡片 (Playlist Card)
展示播放列表的卡片组件。

```dart
PlaylistCard(
  playlist: playlist,
  layout: PlaylistCardLayout.grid,
  onTap: () => _viewPlaylist(playlist),
  showSongCount: true,
  showCreator: true,
)
```

### 列表组件 (Lists)

#### 歌曲列表项 (Song List Item)
用于列表中显示歌曲的组件。

```dart
SongListItem(
  song: song,
  isPlaying: currentSong.id == song.id,
  showIndex: true,
  index: index + 1,
  onTap: () => _playSong(song),
  trailing: SongMenuButton(song: song),
)
```

**视觉状态**:
- **默认状态**: 标准列表项样式
- **播放状态**: 高亮显示，显示音波动画
- **加载状态**: 显示加载指示器
- **禁用状态**: 降低透明度，禁用交互

#### 艺术家列表项 (Artist List Item)
展示艺术家信息的列表项。

```dart
ArtistListItem(
  artist: artist,
  showFollowerCount: true,
  showVerifiedBadge: true,
  onTap: () => _viewArtist(artist),
  trailing: FollowButton(artist: artist),
)
```

### 导航组件 (Navigation)

#### 底部导航栏 (Bottom Navigation)
应用主要的导航组件。

```dart
SpotoolifyBottomNavigation(
  currentIndex: _currentIndex,
  onTap: (index) => _onTabTapped(index),
  items: [
    BottomNavigationItem(
      icon: Icons.home_outlined,
      activeIcon: Icons.home,
      label: '首页',
    ),
    BottomNavigationItem(
      icon: Icons.search_outlined,
      activeIcon: Icons.search,
      label: '搜索',
    ),
    BottomNavigationItem(
      icon: Icons.library_music_outlined,
      activeIcon: Icons.library_music,
      label: '资料库',
    ),
  ],
)
```

**导航项设计**:
- **未选中状态**: 使用 outlined 图标
- **选中状态**: 使用 filled 图标，添加指示器
- **标签**: 简洁的中文标签
- **徽章**: 支持未读消息数量显示

#### 顶部应用栏 (Top App Bar)
页面顶部的导航和操作栏。

```dart
SpotoolifyAppBar(
  title: '正在播放',
  centerTitle: true,
  actions: [
    IconButton(
      icon: Icon(Icons.queue_music),
      onPressed: () => _showQueue(),
    ),
    IconButton(
      icon: Icon(Icons.more_vert),
      onPressed: () => _showMenu(),
    ),
  ],
  bottom: TabBar(
    tabs: [
      Tab(text: '歌词'),
      Tab(text: '队列'),
      Tab(text: '相关'),
    ],
  ),
)
```

### 输入组件 (Input)

#### 搜索框 (Search Field)
搜索功能的输入组件。

```dart
SpotoolifySearchField(
  onChanged: (query) => _handleSearch(query),
  onSubmitted: (query) => _executeSearch(query),
  hintText: '搜索歌曲、艺术家或专辑...',
  showVoiceInput: true,
  showClearButton: true,
)
```

**功能特性**:
- **实时搜索**: 输入时实时显示建议
- **历史记录**: 保存和显示搜索历史
- **语音输入**: 支持语音转文字搜索
- **清除按钮**: 快速清除搜索内容

#### 滑块组件 (Sliders)
音量、进度等调节控件。

```dart
SpotoolifySlider(
  value: _currentPosition,
  max: _totalDuration,
  onChanged: (value) => _seekTo(value),
  divisions: 100,
  label: _formatDuration(value),
  activeColor: Theme.of(context).colorScheme.primary,
)
```

### 媒体组件 (Media)

#### 专辑封面 (Album Artwork)
显示专辑封面的组件。

```dart
AlbumArtwork(
  imageUrl: song.albumArtUrl,
  size: 200.0,
  borderRadius: 12.0,
  showPlaceholder: true,
  heroTag: 'album-${song.albumId}',
  onTap: () => _showFullscreenArtwork(),
)
```

**特性**:
- **多尺寸适配**: 自动加载合适尺寸的图片
- **渐进加载**: 先显示低质量图片，再加载高质量版本
- **Hero 动画**: 支持页面间的平滑过渡动画
- **占位符**: 加载失败时显示默认图片

#### 音波动画 (Audio Wave)
播放状态的可视化指示器。

```dart
AudioWaveIndicator(
  isPlaying: isPlaying,
  color: Theme.of(context).colorScheme.primary,
  waveCount: 3,
  animationDuration: Duration(milliseconds: 800),
)
```

### 反馈组件 (Feedback)

#### 加载指示器 (Loading Indicators)
各种加载状态的指示组件。

```dart
// 圆形加载指示器
SpotoolifyCircularProgress(
  size: 24.0,
  strokeWidth: 2.0,
  color: Theme.of(context).colorScheme.primary,
)

// 线性加载指示器
SpotoolifyLinearProgress(
  value: _loadingProgress,
  minHeight: 2.0,
  backgroundColor: Colors.grey.shade300,
)

// 自定义加载动画
SpotoolifyLoadingAnimation(
  type: LoadingType.musicNote,
  size: 48.0,
)
```

#### 空状态 (Empty States)
无内容时的占位组件。

```dart
EmptyState(
  icon: Icons.music_note_outlined,
  title: '暂无音乐',
  subtitle: '添加一些歌曲开始你的音乐之旅',
  action: ElevatedButton(
    onPressed: () => _navigateToDiscover(),
    child: Text('发现音乐'),
  ),
)
```

#### 错误状态 (Error States)
错误情况的反馈组件。

```dart
ErrorState(
  error: error,
  onRetry: () => _retryAction(),
  showDetails: kDebugMode,
)
```

## 主题定制

### 颜色主题
```dart
SpotoolifyTheme(
  primaryColor: Color(0xFF6750A4),
  surfaceColor: Color(0xFFFEF7FF),
  child: MaterialApp(
    theme: SpotoolifyTheme.lightTheme,
    darkTheme: SpotoolifyTheme.darkTheme,
    home: MyApp(),
  ),
)
```

### 动态主题
```dart
DynamicThemeProvider(
  child: Builder(
    builder: (context) {
      return MaterialApp(
        theme: DynamicThemeProvider.of(context).lightTheme,
        darkTheme: DynamicThemeProvider.of(context).darkTheme,
        home: MyApp(),
      );
    },
  ),
)
```

## 响应式设计

### 断点系统
```dart
class Breakpoints {
  static const double mobile = 600;
  static const double tablet = 1024;
  static const double desktop = 1440;
}

// 使用示例
ResponsiveBuilder(
  mobile: MobileLayout(),
  tablet: TabletLayout(),
  desktop: DesktopLayout(),
)
```

### 适配组件
```dart
AdaptiveGrid(
  mobileColumns: 2,
  tabletColumns: 3,
  desktopColumns: 4,
  children: albums.map((album) => AlbumCard(album: album)).toList(),
)
```

## 无障碍支持

### 语义化标签
```dart
Semantics(
  label: '播放 ${song.title}',
  hint: '双击播放这首歌曲',
  button: true,
  child: PlayButton(onPressed: () => _playSong(song)),
)
```

### 键盘导航
```dart
Focus(
  autofocus: true,
  onKey: (node, event) => _handleKeyPress(event),
  child: SongListItem(song: song),
)
```

---

这套组件库确保了 Spotoolfy 在各个平台上的一致性体验，同时保持了现代化的设计和优秀的可用性。