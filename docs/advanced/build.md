# 自己编译

本指南将帮助开发者从源代码编译 Spotoolfy，适合想要自定义功能或参与开发的用户。

## 环境准备

### 系统要求

#### 开发环境
- **操作系统**: Windows 10+, macOS 10.14+, 或 Linux (Ubuntu 18.04+)
- **内存**: 至少 8GB RAM (推荐 16GB)
- **存储**: 至少 20GB 可用空间
- **网络**: 稳定的互联网连接用于下载依赖

#### 必需工具

**Flutter SDK** 🎯
```bash
# 下载并安装 Flutter 3.16.0 或更高版本
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PATH:`pwd`/flutter/bin"

# 验证安装
flutter doctor
```

**开发工具** 🛠️
- **Git**: 版本控制 (2.20+)
- **Android Studio**: Android 开发 (Flamingo 或更高)
- **Xcode**: iOS 开发 (15.0+, 仅 macOS)
- **VS Code**: 代码编辑器 (推荐)

### SDK 和依赖

#### Android 开发环境
```bash
# Android SDK 要求
API Level: 23 (Android 6.0) 及以上
Build Tools: 30.0.3+
NDK: 21.4.7075529 (可选)

# 环境变量配置
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
```

#### iOS 开发环境 (仅 macOS)
```bash
# Xcode Command Line Tools
xcode-select --install

# CocoaPods
sudo gem install cocoapods
pod setup

# iOS 模拟器 (可选)
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

#### 额外依赖
```bash
# 图像处理工具
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Ubuntu

# 音频处理库
brew install ffmpeg  # macOS
sudo apt-get install ffmpeg  # Ubuntu
```

## 获取源代码

### 克隆仓库

#### 主仓库
```bash
# 克隆主仓库
git clone https://github.com/spotoolfy/spotoolfy.git
cd spotoolfy

# 检查分支
git branch -a
```

#### 分支说明
- **main** - 稳定版本分支
- **develop** - 开发版本分支
- **feature/*** - 功能开发分支
- **hotfix/*** - 紧急修复分支

#### 选择分支
```bash
# 使用稳定版本 (推荐)
git checkout main

# 使用开发版本 (最新功能)
git checkout develop

# 使用特定版本
git checkout tags/v2.1.0
```

### 项目结构

#### 目录结构
```
spotoolfy/
├── android/                 # Android 平台代码
├── ios/                     # iOS 平台代码  
├── lib/                     # Flutter 主要代码
│   ├── core/               # 核心功能
│   ├── features/           # 功能模块
│   ├── shared/             # 共享组件
│   └── main.dart          # 应用入口
├── assets/                 # 静态资源
├── test/                   # 单元测试
├── integration_test/       # 集成测试
├── build/                  # 构建输出
├── pubspec.yaml           # 依赖配置
└── README.md              # 项目说明
```

#### 核心模块
```
lib/
├── core/
│   ├── di/                 # 依赖注入
│   ├── network/            # 网络层
│   ├── storage/            # 本地存储
│   ├── theme/              # 主题系统
│   └── utils/              # 工具类
├── features/
│   ├── auth/               # 用户认证
│   ├── player/             # 音乐播放
│   ├── library/            # 音乐库
│   ├── search/             # 搜索功能
│   ├── lyrics/             # 歌词功能
│   └── notes/              # 笔记功能
└── shared/
    ├── widgets/            # 共享组件
    ├── models/             # 数据模型
    └── services/           # 共享服务
```

## 配置项目

### 依赖安装

#### Flutter 依赖
```bash
# 安装项目依赖
flutter pub get

# 验证依赖
flutter pub deps
```

#### 平台依赖
```bash
# Android 依赖
cd android
./gradlew dependencies

# iOS 依赖 (仅 macOS)
cd ios
pod install
```

### 环境配置

#### 创建配置文件
```bash
# 复制环境配置模板
cp .env.example .env
cp lib/core/config/app_config.example.dart lib/core/config/app_config.dart
```

#### 配置 Spotify API
```env
# .env 文件配置
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=spotoolfy://auth

# AI 翻译服务 (可选)
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key

# 其他服务
SENTRY_DSN=your_sentry_dsn  # 错误追踪
FIREBASE_PROJECT_ID=your_firebase_project  # 分析统计
```

#### Spotify 开发者设置
```bash
# 1. 访问 Spotify Developer Dashboard
# https://developer.spotify.com/dashboard

# 2. 创建新应用
App Name: Spotoolfy (你的应用名)
App Description: 个人 Spotify 客户端
Website: https://github.com/your-username/spotoolfy

# 3. 配置重定向 URI
# 添加: spotoolfy://auth

# 4. 记录 Client ID 和 Client Secret
```

#### 应用配置
```dart
// lib/core/config/app_config.dart
class AppConfig {
  static const String appName = 'Spotoolfy';
  static const String version = '2.1.0';
  
  // Spotify 配置
  static const String spotifyClientId = 'YOUR_CLIENT_ID';
  static const String spotifyRedirectUri = 'spotoolfy://auth';
  
  // 功能开关
  static const bool enableLyrics = true;
  static const bool enableTranslation = true;
  static const bool enableNotes = true;
  
  // 调试选项
  static const bool enableLogging = kDebugMode;
  static const bool enablePerformanceOverlay = false;
}
```

### 代码签名 (iOS)

#### 开发者证书
```bash
# 在 Xcode 中配置
# 1. 打开 ios/Runner.xcworkspace
# 2. 选择 Runner 项目
# 3. 在 Signing & Capabilities 中:
#    - Team: 选择你的开发者账号
#    - Bundle Identifier: 修改为唯一标识符
#    - Provisioning Profile: 自动管理
```

#### 修改 Bundle Identifier
```xml
<!-- ios/Runner/Info.plist -->
<key>CFBundleIdentifier</key>
<string>com.yourname.spotoolfy</string>
```

## 编译应用

### 开发环境编译

#### 调试版本
```bash
# Android 调试版本
flutter run --debug

# iOS 调试版本 (仅 macOS)
flutter run --debug -d ios

# 指定设备
flutter devices
flutter run --debug -d device_id
```

#### 热重载开发
```bash
# 启用热重载
flutter run --hot

# 在运行时按键
r - 热重载
R - 热重启
p - 显示网格线
o - 切换平台 (iOS/Android)
q - 退出
```

### 生产环境编译

#### Release 版本配置
```bash
# 检查构建配置
flutter analyze
flutter test

# 生成图标和启动画面
flutter packages pub run flutter_launcher_icons:main
flutter packages pub run flutter_native_splash:create
```

#### Android Release 构建

**生成签名密钥**
```bash
# 创建密钥库
keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key

# 密钥库配置
Key store password: [输入密码]
Key password: [输入密码]  
First and Last Name: [你的名字]
Organizational Unit: [组织部门]
Organization: [组织名称]
City: [城市]
State: [省份]
Country Code: [国家代码]
```

**配置签名**
```properties
# android/key.properties
storePassword=你的密钥库密码
keyPassword=你的密钥密码
keyAlias=key
storeFile=../key.jks
```

```gradle
// android/app/build.gradle
android {
    ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

**构建 APK**
```bash
# 构建 APK
flutter build apk --release

# 构建 AAB (推荐上架 Google Play)
flutter build appbundle --release

# 分离架构的 APK
flutter build apk --split-per-abi --release
```

**输出位置**
```
build/app/outputs/flutter-apk/
├── app-release.apk              # 通用 APK
├── app-arm64-v8a-release.apk   # ARM64 APK
├── app-armeabi-v7a-release.apk # ARM32 APK
└── app-x86_64-release.apk      # x86_64 APK
```

#### iOS Release 构建

**Archive 构建**
```bash
# 构建 iOS Archive
flutter build ios --release

# 在 Xcode 中创建 Archive
# 1. 打开 ios/Runner.xcworkspace
# 2. 选择 Generic iOS Device
# 3. Product > Archive
# 4. 等待构建完成
```

**发布选项**
```bash
# App Store 发布
# 1. 在 Xcode Organizer 中选择 Archive
# 2. 点击 "Distribute App"
# 3. 选择 "App Store Connect"
# 4. 上传到 TestFlight

# 企业分发
# 1. 选择 "Enterprise"
# 2. 配置分发证书
# 3. 生成 IPA 文件

# Ad Hoc 分发
# 1. 选择 "Ad Hoc"
# 2. 选择测试设备
# 3. 生成 IPA 文件
```

### 桌面版本编译

#### Windows 版本
```bash
# 启用 Windows 支持
flutter config --enable-windows-desktop

# 构建 Windows 应用
flutter build windows --release

# 输出位置
build/windows/runner/Release/
```

#### macOS 版本
```bash
# 启用 macOS 支持
flutter config --enable-macos-desktop

# 构建 macOS 应用
flutter build macos --release

# 输出位置
build/macos/Build/Products/Release/
```

#### Linux 版本
```bash
# 启用 Linux 支持
flutter config --enable-linux-desktop

# 安装依赖
sudo apt-get install clang cmake ninja-build pkg-config libgtk-3-dev

# 构建 Linux 应用
flutter build linux --release

# 输出位置
build/linux/x64/release/bundle/
```

## 自定义构建

### 构建脚本

#### 自动化构建脚本
```bash
#!/bin/bash
# scripts/build.sh

echo "🚀 开始构建 Spotoolfy..."

# 清理之前的构建
flutter clean
flutter pub get

# 运行测试
echo "🧪 运行测试..."
flutter test

# 代码分析
echo "🔍 代码分析..."
flutter analyze

# 构建 Release 版本
echo "📦 构建 Release 版本..."
if [ "$1" = "android" ]; then
    flutter build apk --release
    flutter build appbundle --release
elif [ "$1" = "ios" ]; then
    flutter build ios --release
elif [ "$1" = "all" ]; then
    flutter build apk --release
    flutter build appbundle --release
    flutter build ios --release
fi

echo "✅ 构建完成!"
```

#### GitHub Actions 自动构建
```yaml
# .github/workflows/build.yml
name: Build and Release

on:
  push:
    tags:
      - 'v*'

jobs:
  build-android:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-java@v3
        with:
          distribution: 'zulu'
          java-version: '11'
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
      - run: flutter pub get
      - run: flutter test
      - run: flutter build apk --release
      - run: flutter build appbundle --release
      
  build-ios:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
      - run: flutter pub get
      - run: flutter test
      - run: flutter build ios --release --no-codesign
```

### 自定义配置

#### 构建变体
```dart
// lib/core/config/build_config.dart
class BuildConfig {
  static const String buildType = String.fromEnvironment(
    'BUILD_TYPE',
    defaultValue: 'release',
  );
  
  static const String flavor = String.fromEnvironment(
    'FLAVOR',
    defaultValue: 'production',
  );
  
  static bool get isDebug => buildType == 'debug';
  static bool get isProduction => flavor == 'production';
  static bool get isDevelopment => flavor == 'development';
}
```

#### 多环境配置
```bash
# 开发环境构建
flutter build apk --release --dart-define=FLAVOR=development

# 生产环境构建
flutter build apk --release --dart-define=FLAVOR=production

# 测试环境构建  
flutter build apk --release --dart-define=FLAVOR=staging
```

### 代码混淆

#### Android 混淆
```gradle
// android/app/build.gradle
buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled true
        useProguard true
        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
    }
}
```

```proguard
# android/app/proguard-rules.pro
-keep class io.flutter.app.** { *; }
-keep class io.flutter.plugin.**  { *; }
-keep class io.flutter.util.**  { *; }
-keep class io.flutter.view.**  { *; }
-keep class io.flutter.**  { *; }
-keep class io.flutter.plugins.**  { *; }
-keep class com.spotify.** { *; }
```

#### Flutter 混淆
```bash
# 启用 Dart 代码混淆
flutter build apk --release --obfuscate --split-debug-info=build/debug-info
```

## 故障排除

### 常见编译问题

#### Android 编译问题
```bash
# Gradle 版本冲突
# 解决: 更新 android/gradle/wrapper/gradle-wrapper.properties
distributionUrl=https\://services.gradle.org/distributions/gradle-7.5-all.zip

# NDK 版本问题
# 解决: 在 android/app/build.gradle 中指定 NDK 版本
android {
    ndkVersion flutter.ndkVersion
}

# 依赖冲突
# 解决: 清理并重新获取依赖
flutter clean
cd android
./gradlew clean
cd ..
flutter pub get
```

#### iOS 编译问题
```bash
# CocoaPods 版本问题
# 解决: 更新 CocoaPods
sudo gem install cocoapods
cd ios
pod repo update
pod install

# 代码签名问题
# 解决: 检查开发者证书和 Provisioning Profile
# 在 Xcode 中重新配置签名设置

# 架构不兼容
# 解决: 确保所有依赖支持目标架构
# 在 ios/Podfile 中添加:
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['EXCLUDED_ARCHS[sdk=iphonesimulator*]'] = 'arm64'
    end
  end
end
```

### 性能优化

#### 构建性能优化
```bash
# 使用并行构建
flutter build apk --release --build-shared-library

# 启用 Gradle 并行构建
# 在 android/gradle.properties 中添加:
org.gradle.parallel=true
org.gradle.caching=true
org.gradle.daemon=true

# 增加构建内存
org.gradle.jvmargs=-Xmx4g -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
```

#### 应用体积优化
```bash
# 分离架构构建
flutter build apk --split-per-abi --release

# 启用 R8 优化
# 在 android/app/build.gradle 中:
buildTypes {
    release {
        shrinkResources true
        minifyEnabled true
    }
}

# 移除未使用的资源
flutter build apk --release --tree-shake-icons
```

---

通过这个详细的编译指南，你可以成功构建自己的 Spotoolfy 版本，并根据需要进行自定义修改。如果遇到问题，请参考故障排除部分或联系开发者社区获取帮助。