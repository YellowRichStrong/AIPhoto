# Nero AI - AI图片处理工具网站

这是一个模仿 Nero AI 图片处理工具的前端网站项目，提供多种AI图片处理功能的界面。

## 📁 项目结构

```
photo/
├── index.html                 # 首页 - 展示所有AI工具
├── photo-restore.html         # AI老照片修复页面
├── photo-upscale.html         # AI图片放大页面
├── anime-upscale.html         # AI动漫放大神器页面
├── photo-sharpen.html         # AI图像锐化页面
├── face-enhance.html          # AI人脸增强页面
├── colorize.html              # AI图片上色页面
├── denoise.html               # AI图片去噪页面
├── compress.html              # AI图片无损压缩页面
├── generate-bg.html           # AI智能生成背景页面
├── remove-bg.html             # AI一键去背景页面
├── change-bg.html             # AI智能换背景页面
├── eraser.html                # AI神奇擦除笔页面
├── cutout.html                # AI智能抠图页面
├── ai-portrait.html           # AI写真页面
├── cartoonize.html            # AI照片卡通化页面
├── face-swap.html             # AI智能换脸页面
├── emoji.html                 # AI动图表情包页面
├── pixelate.html              # AI像素化图像页面
├── christmas.html             # AI圣诞照片生成器页面
├── css/
│   ├── style.css             # 主样式文件
│   └── tool-page.css         # 工具页面样式
├── js/
│   ├── main.js               # 主JavaScript文件
│   └── tool.js               # 工具页面交互逻辑
├── build-pages.py            # Python页面生成脚本
├── build-pages.js            # Node.js页面生成脚本
└── generate-pages.js         # 页面配置和模板
```

## ✨ 功能特性

### AI 图片放大
- ✅ AI图片放大 🔥
- ✅ AI动漫放大神器
- ✅ AI图像锐化
- ✅ AI人脸增强

### AI 增强
- ✅ AI老照片修复 ⚡ (重点功能)
- ✅ AI图片上色
- ✅ AI图片去噪
- ✅ AI图片无损压缩

### AI 编辑
- ✅ AI智能生成背景
- ✅ AI一键去背景
- ✅ AI智能换背景
- ✅ AI神奇擦除笔
- ✅ AI智能抠图

### AI 创造
- ✅ AI写真 ⚡
- ✅ AI照片卡通化 🎃
- ✅ AI智能换脸 (NEW)
- ✅ AI动图表情包
- ✅ AI像素化图像
- ✅ AI圣诞照片生成器

## 🎨 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计（包括渐变、动画、响应式布局）
- **JavaScript** - 交互逻辑
- **Font Awesome 6.4.0** - 图标库

## 🚀 使用说明

### 本地运行

1. 直接在浏览器中打开 `index.html` 文件
2. 或使用本地服务器：
   ```bash
   # 使用 Python 启动服务器
   python3 -m http.server 8000
   
   # 然后在浏览器访问
   http://localhost:8000
   ```

### 功能说明

- **图片上传**：支持拖拽上传或点击选择
- **格式支持**：JPG、PNG、WEBP
- **文件大小**：最大 10MB
- **处理模拟**：前端模拟AI处理效果（3秒延迟）
- **结果下载**：处理完成后可下载图片

## 📝 注意事项

1. **纯前端项目**：当前版本仅包含前端界面和交互
2. **模拟处理**：AI处理功能为模拟效果，未对接真实API
3. **联系方式**：所有联系信息已更新为 `tankeapp@gmail.com`
4. **无登录注册**：按需求移除了登录注册功能
5. **无支付功能**：按需求移除了购买支付功能

## 🔧 后续开发建议

如需对接真实AI功能，建议步骤：

1. **后端API开发**
   - 图片上传接口
   - AI处理接口
   - 图片存储和管理

2. **推荐的AI服务**
   - 图片放大：Real-ESRGAN, Waifu2x
   - 图片修复：CodeFormer, GFPGAN
   - 去背景：Remove.bg API, U2-Net
   - 图片上色：DeOldify

3. **优化建议**
   - 添加用户反馈机制
   - 批量处理功能
   - 处理历史记录
   - 更多自定义选项

## 📧 联系方式

Email: tankeapp@gmail.com

## 📄 许可证

© 2024 Nero AI. All rights reserved.

---

**注**：本项目为前端展示项目，所有AI功能为界面演示，实际功能需对接后端API服务。
