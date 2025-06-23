# 可复用的 MD3 风格组件

Spotoolfy 创建了一套可复用的组件库。这些组件延伸了 Google 的 Material Design 3 感觉，提供了动态主题功能。

### 🔘 交互组件

#### SimplePageIndicator - 页面指示器
**位置**：`lib/widgets/materialui.dart`

**设计特性**：
- 使用 `primary` 和 `primaryContainer` 颜色令牌
- 支持自定义页面数据和图标
- 集成 PageController 实现页面切换
- 提供粘性头部效果和渐变遮罩
- 自适应主题色彩和字体间距

**使用场景**：
- 多页面内容切换（歌词、曲谱、设置）
- 标签页导航指示
- 引导页面指示器
- 内容分类展示

**代码示例**：
```dart
// 基础用法
class ExamplePage extends StatefulWidget {
  const ExamplePage({super.key});

  @override
  State<ExamplePage> createState() => _ExamplePageState();
}

class _ExamplePageState extends State<ExamplePage> {
  final PageController _pageController = PageController();
  final List<PageData> _pages = [
    PageData(
      title: '歌词',
      icon: Icons.music_note,
      page: Center(child: Text('歌词页面')),
    ),
    PageData(
      title: '曲谱',
      icon: Icons.queue_music,
      page: Center(child: Text('曲谱页面')),
    ),
    PageData(
      title: '设置',
      icon: Icons.settings,
      page: Center(child: Text('设置页面')),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        SliverPersistentHeader(
          pinned: true,
          delegate: _StickyTabDelegate(
            child: SimplePageIndicator(
              pages: _pages,
              pageController: _pageController,
            ),
          ),
        ),
        SliverFillRemaining(
          child: PageView(
            controller: _pageController,
            children: _pages.map((page) => page.page).toList(),
          ),
        ),
      ],
    );
  }
}

// 在卡片中使用
Card(
  child: Column(
    children: [
      SimplePageIndicator(
        pages: [
          PageData(title: '预览', icon: Icons.visibility, page: Container()),
          PageData(title: '编辑', icon: Icons.edit, page: Container()),
        ],
        pageController: PageController(),
      ),
      Expanded(child: PageView(/* 页面内容 */)),
    ],
  ),
)
```

### 🎨 装饰组件

#### WavyDivider & AnimatedWavyDivider - 波浪分隔线
**位置**：`lib/widgets/materialui.dart`

**设计特性**：
- 支持静态和动画两种模式
- 可自定义波浪高度和密度
- 自适应容器宽度和绘制区域

**使用场景**：
- 页面区块视觉分隔
- 装饰性设计元素
- 增强页面视觉层次

**代码示例**：
```dart
// 静态波浪分隔线
Column(
  children: [
    Text('页面标题'),
    WavyDivider(
      height: 15,
      waveHeight: 3,
      strokeWidth: 1.5,
    ),
    Text('页面内容'),
  ],
)

// 动画波浪分隔线
Column(
  children: [
    Text('正在播放'),
    AnimatedWavyDivider(
      height: 20,
      waveHeight: 5,
      animationDuration: Duration(seconds: 2),
      animate: true,
    ),
    Text('播放列表'),
  ],
)

// 自定义颜色的波浪线
WavyDivider(
  color: Colors.blue,
  waveHeight: 8,
  waveFrequency: 0.05,
)
```

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

**代码示例**：
```dart
// 基础用法
IconHeader(
  icon: Icons.music_note,
  text: '音乐库',
)

// 在卡片中使用
Card(
  child: Padding(
    padding: EdgeInsets.all(16),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        IconHeader(
          icon: Icons.favorite,
          text: '收藏夹',
        ),
        SizedBox(height: 16),
        Text('收藏的歌曲列表...'),
      ],
    ),
  ),
)

// 在导航抽屉中使用
Drawer(
  child: ListView(
    children: [
      DrawerHeader(
        child: IconHeader(
          icon: Icons.home,
          text: '主页',
        ),
      ),
      ListTile(
        leading: Icon(Icons.settings),
        title: Text('设置'),
      ),
    ],
  ),
)
```
