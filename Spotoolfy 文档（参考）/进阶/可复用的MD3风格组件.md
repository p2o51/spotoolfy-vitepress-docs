# 可复用的MD3风格组件

Spotoolfy 采用了完整的 Material Design 3 (MD3) 设计系统，创建了一套可复用的组件库。这些组件不仅遵循 Google 的 Material Design 3 规范，还结合了音乐应用的特殊需求，提供了动态主题、一致的视觉语言和出色的用户体验。

## 设计系统概览

### 🎨 核心设计原则

#### Material Design 3 基础
- **动态颜色**：基于专辑封面提取的种子颜色生成完整配色方案
- **表面层次**：使用 MD3 的表面容器系统创建视觉深度
- **自适应主题**：支持浅色/深色模式的无缝切换
- **一致性字体**：使用 Montserrat 字体家族确保品牌一致性

#### 音乐应用特色
- **内容驱动主题**：主题颜色实时跟随音乐内容变化
- **触感反馈**：丰富的触觉反馈增强交互体验
- **流畅动画**：精心调校的过渡动画提升用户感知
- **响应式布局**：完美适配不同屏幕尺寸和设备类型

### 🛠️ 技术实现
- **Flutter Material 3**：启用 `useMaterial3: true`
- **动态颜色生成**：使用 `ColorScheme.fromSeed()` 和 `palette_generator`
- **主题管理**：通过 `ThemeProvider` 统一管理主题状态
- **组件一致性**：所有自定义组件遵循 MD3 设计令牌

## 核心组件库

### 🔘 交互组件

#### MyButton - 主要操作按钮
**位置**：`lib/widgets/materialui.dart`

**设计特性**：
- 使用 `primaryContainer` 和 `onPrimaryContainer` 颜色令牌
- 支持自定义宽度、高度和圆角半径
- 集成触感反馈和按下状态动画
- 自适应文字大小和图标间距

**使用场景**：
- 主要操作确认（保存、删除、播放）
- 导航操作（返回、前进）
- 设置项开关切换

**代码示例**：
```dart
MyButton(
  onPressed: () => handleAction(),
  child: Text('播放音乐'),
  width: 120,
  height: 48,
)
```

#### Ratings - 评分组件
**位置**：`lib/widgets/materialui.dart`

**设计特性**：
- 基于 MD3 的 `SegmentedButton` 实现
- 三级评分系统：👎(0分)、😐(3分)、🔥(5分)
- 支持状态保存和回调处理
- 一致的视觉反馈和触感体验

**使用场景**：
- 歌曲评分和收藏
- 用户反馈收集
- 内容质量评估

#### SimplePageIndicator - 页面指示器
**位置**：`lib/widgets/mdtab.dart`

**设计特性**：
- 使用 `primary` 和 `primaryContainer` 表示激活状态
- 支持图标和文字标签
- 流畅的状态切换动画
- 可自定义指示器数量和样式

**使用场景**：
- 标签页导航
- 步骤指示器
- 内容分页显示

### 🎵 音乐专用组件

#### AlbumArtWidget - 专辑封面组件
**位置**：`lib/widgets/album_art_widget.dart`

**设计特性**：
- 自动触发主题色彩更新
- 支持图片缓存和懒加载
- 圆角设计（16px）和渐变遮罩
- 错误状态和占位符处理

**使用场景**：
- 正在播放页面封面显示
- 资料库网格项目
- 轮播图背景图片

#### SeekOverlay - 媒体控制浮层
**位置**：`lib/widgets/seek_overlay.dart`

**设计特性**：
- 使用 `surface` 和 `onSurface` 确保对比度
- 64px 圆形按钮遵循触摸目标标准
- 触感反馈和视觉状态切换
- 半透明背景和模糊效果

**使用场景**：
- 快进/快退操作
- 音乐信息快速查看
- 播放控制快捷操作

#### DragIndicator - 拖拽指示器
**位置**：`lib/widgets/drag_indicator.dart`

**设计特性**：
- 自适应屏幕尺寸的动态缩放
- 使用 `primaryContainer` 系列颜色
- 流畅的拖拽动画和反馈
- 支持水平和垂直拖拽手势

**使用场景**：
- 歌曲跳转手势
- 列表项目拖拽排序
- 媒体进度控制

### 📋 布局组件

#### LibraryGrid - 资料库网格
**位置**：`lib/widgets/library_grid.dart`

**设计特性**：
- 响应式网格布局（3-6列）
- 集成骨架屏加载状态
- 使用 `surfaceContainerHighest` 表面层次
- 支持下拉刷新和无限滚动

**使用场景**：
- 音乐专辑网格展示
- 播放列表集合显示
- 搜索结果网格布局

#### LibrarySection - 资料库区块
**位置**：`lib/widgets/library_section.dart`

**设计特性**：
- 基于 MD3 `FilterChip` 的过滤器
- 标准化的 16px 水平边距
- 集成刷新和加载状态管理
- 自适应内容高度和滚动行为

**使用场景**：
- 主要资料库界面
- 分类内容展示
- 过滤和搜索结果页面

#### StatsCard - 统计卡片
**位置**：`lib/widgets/stats_card.dart`

**设计特性**：
- 使用 `surfaceContainerLow`、`tertiaryContainer` 表面系统
- 24px 圆角和适当的海拔高度
- 支持图标、标题、数值的结构化布局
- 一致的内边距和字体层次

**使用场景**：
- 音乐统计数据展示
- 用户行为分析面板
- 应用使用情况概览

### 🎨 装饰组件

#### WavyDivider & AnimatedWavyDivider - 波浪分隔线
**位置**：`lib/widgets/materialui.dart`

**设计特性**：
- 使用 `primary` 颜色令牌保持品牌一致性
- 支持静态和动画两种模式
- 可自定义波浪高度和密度
- 自适应容器宽度和绘制区域

**使用场景**：
- 页面区块视觉分隔
- 装饰性设计元素
- 增强页面视觉层次

#### IconHeader - 图标标题
**位置**：`lib/widgets/materialui.dart`

**设计特性**：
- 使用 `primary` 颜色和统一字间距（2.0）
- 标准化的图标和文字间距
- 支持自定义图标和文本内容
- 遵循 MD3 字体层次规范

**使用场景**：
- 区块标题标识
- 导航分类标签
- 功能区域标识

## 设计系统规范

### 🌈 颜色系统

#### 动态颜色生成
```dart
// 基于专辑封面生成主题
ColorScheme.fromSeed(
  seedColor: extractedColor,
  brightness: systemBrightness,
)
```

#### 颜色令牌使用
- **Primary Colors**: 品牌主色和强调元素
- **Surface Containers**: 内容背景和层次表现
- **On-Colors**: 确保文字和图标的可读性对比度

#### 表面层次系统
1. **Surface**: 基础背景表面
2. **SurfaceContainerLowest**: 最低层次容器
3. **SurfaceContainerLow**: 低层次内容容器
4. **SurfaceContainer**: 标准内容容器
5. **SurfaceContainerHigh**: 高层次突出容器
6. **SurfaceContainerHighest**: 最高层次重点容器

### 📐 布局和间距

#### 标准间距系统
- **Micro**: 4px - 细节元素间距
- **Small**: 8px - 相关元素间距
- **Medium**: 16px - 标准组件边距
- **Large**: 24px - 区块间距
- **XLarge**: 32px - 页面级间距

#### 圆角半径标准
- **Small**: 8px - 小型组件（按钮、芯片）
- **Medium**: 12px - 中型组件（卡片边缘）
- **Large**: 16px - 大型组件（图片容器）
- **XLarge**: 24px - 突出组件（重要卡片）
- **Rounded**: 32px - 高度圆润组件

#### 响应式断点
- **Compact**: < 600px（手机竖屏）
- **Medium**: 600px - 900px（平板、手机横屏）
- **Expanded**: > 900px（桌面、大屏平板）

### ✏️ 字体系统

#### Montserrat 字体家族
- **Regular (400)**: 正文内容、说明文字
- **Medium (500)**: 次级标题、强调文字
- **SemiBold (600)**: 主要标题、重要信息
- **Italic**: 引用内容、歌词文本

#### 字体层次应用
```dart
// 使用主题字体层次
Theme.of(context).textTheme.headlineLarge  // 页面主标题
Theme.of(context).textTheme.titleMedium   // 区块标题
Theme.of(context).textTheme.bodyLarge     // 正文内容
Theme.of(context).textTheme.labelSmall    // 辅助信息
```

### 🎭 动画和过渡

#### 标准动画时长
- **Quick**: 100-200ms - 微交互反馈
- **Standard**: 250-300ms - 状态切换
- **Emphasized**: 400-500ms - 重要状态变更
- **Slow**: 600ms+ - 页面级转场

#### 缓动曲线
- **Standard**: `Curves.easeInOut` - 通用过渡
- **Emphasized**: `Curves.easeInOutCubic` - 重要动画
- **Decelerated**: `Curves.easeOut` - 进入动画
- **Accelerated**: `Curves.easeIn` - 退出动画

## 使用指南

### 🚀 组件使用最佳实践

#### 1. 颜色使用原则
```dart
// ✅ 正确：使用主题颜色令牌
Container(
  color: Theme.of(context).colorScheme.primaryContainer,
  child: Text(
    'Hello',
    style: TextStyle(
      color: Theme.of(context).colorScheme.onPrimaryContainer,
    ),
  ),
)

// ❌ 避免：硬编码颜色值
Container(
  color: Colors.blue,  // 不会跟随主题变化
  child: Text('Hello', style: TextStyle(color: Colors.white)),
)
```

#### 2. 间距使用规范
```dart
// ✅ 正确：使用标准间距系统
Padding(
  padding: EdgeInsets.all(16.0),  // 标准边距
  child: Column(
    children: [
      Widget1(),
      SizedBox(height: 8.0),     // 相关元素间距
      Widget2(),
      SizedBox(height: 24.0),    // 区块间距
      Widget3(),
    ],
  ),
)
```

#### 3. 触感反馈集成
```dart
// 为所有交互组件添加触感反馈
onTap: () {
  HapticFeedback.lightImpact();
  handleAction();
}
```

### 🎯 组件选择指南

#### 何时使用 MyButton
- 需要主要操作按钮时
- 要求自定义尺寸和样式时
- 需要集成触感反馈时

#### 何时使用 Ratings
- 用户评价和反馈收集
- 内容质量评估
- 偏好设置选择

#### 何时使用 LibraryGrid
- 展示音乐内容集合
- 需要响应式网格布局时
- 要求加载状态管理时

### 🔧 自定义和扩展

#### 创建新组件的原则
1. **遵循 MD3 设计令牌**：使用主题颜色和字体
2. **保持一致性**：与现有组件的视觉语言统一
3. **考虑可访问性**：确保足够的对比度和触摸目标
4. **集成触感反馈**：为交互元素添加适当的触觉反馈
5. **支持主题切换**：确保在不同主题下正常工作

#### 组件开发模板
```dart
class CustomMD3Component extends StatelessWidget {
  const CustomMD3Component({
    super.key,
    required this.onPressed,
    this.child,
  });

  final VoidCallback onPressed;
  final Widget? child;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final textTheme = Theme.of(context).textTheme;
    
    return Material(
      color: colorScheme.primaryContainer,
      borderRadius: BorderRadius.circular(12.0),
      child: InkWell(
        onTap: () {
          HapticFeedback.lightImpact();
          onPressed();
        },
        borderRadius: BorderRadius.circular(12.0),
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: child,
        ),
      ),
    );
  }
}
```

### 📊 性能优化建议

#### 1. 图片缓存
```dart
// 使用 CachedNetworkImage 进行图片缓存
CachedNetworkImage(
  imageUrl: albumArtUrl,
  placeholder: (context, url) => SkeletonLoader(),
  errorWidget: (context, url, error) => PlaceholderWidget(),
)
```

#### 2. 列表渲染优化
```dart
// 使用 RepaintBoundary 优化重绘
RepaintBoundary(
  child: ExpensiveWidget(),
)
```

#### 3. 主题更新性能
```dart
// 避免频繁的主题更新
if (newColor != currentThemeColor) {
  updateTheme(newColor);
}
```

## 开发者资源

### 📚 相关文档
- [Material Design 3 官方指南](https://m3.material.io/)
- [Flutter Material 3 文档](https://flutter.dev/docs/development/ui/design/material)
- [颜色系统深入指南](https://m3.material.io/styles/color/system/overview)

### 🛠️ 开发工具
- **Flutter Inspector**: 调试组件层次和主题
- **Material Theme Builder**: 创建自定义颜色主题
- **Accessibility Scanner**: 检查无障碍性问题

### 🎨 设计资源
- **Material 3 Design Kit**: Figma 设计组件库
- **颜色提取工具**: 专辑封面颜色分析
- **字体资源**: Montserrat 字体系列下载

这套 MD3 组件系统为 Spotoolfy 提供了一致、美观且功能完整的用户界面基础。通过遵循这些设计原则和使用指南，开发者可以创建出符合 Material Design 3 标准的高质量音乐应用界面。 