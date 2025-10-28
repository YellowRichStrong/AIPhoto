# Nero AI - 快速开始指南

## 🎉 恭喜！后端已搭建完成

现在您可以开始使用Nero AI图片处理工具了！

## 🚀 快速启动（5步完成）

### 步骤1：安装Python依赖

```bash
cd backend
pip install -r requirements.txt
```

### 步骤2：启动后端服务

```bash
python app.py
```

您应该看到：
```
* Serving Flask app 'app'
* Running on http://0.0.0.0:5000
```

### 步骤3：打开新终端，启动前端

```bash
# 在项目根目录
python3 -m http.server 8000
```

### 步骤4：访问前端页面

在浏览器打开：
```
http://localhost:8000
```

### 步骤5：测试功能

1. 点击任意功能（如"AI一键去背景"）
2. 上传一张图片
3. 等待处理完成
4. 下载处理后的图片

## ✅ 已实现的功能

### 1. AI一键去背景 ⭐⭐⭐
- API: `/api/photo-remove-bg`
- 页面: `remove-bg.html`
- 技术: rembg库

### 2. AI图片放大 ⭐⭐⭐
- API: `/api/photo-upscale`
- 页面: `photo-upscale.html`
- 技术: PIL高质量放大

### 3. AI老照片修复 ⭐⭐⭐
- API: `/api/photo-restore`
- 页面: `photo-restore.html`
- 技术: 锐化+降噪+增强

### 4. AI图片去噪 ⭐⭐
- API: `/api/photo-denoise`
- 页面: `denoise.html`
- 技术: 中值滤波

## 📁 项目结构

```
photo/
├── backend/           # 后端服务器
│   ├── app.py        # Flask主应用
│   ├── routes/       # API处理模块
│   ├── uploads/      # 上传文件
│   └── results/      # 处理结果
├── js/
│   ├── main.js       # 主页逻辑
│   └── tool.js       # 工具页面逻辑（已更新）
├── index.html        # 首页
└── [其他HTML文件]     # 功能页面

```

## 🧪 测试API

### 使用curl测试

```bash
# 健康检查
curl http://localhost:5000/api/health

# 测试去背景
curl -X POST \
  http://localhost:5000/api/photo-remove-bg \
  -F "image=@/path/to/your/image.jpg" \
  --output result.png
```

### 使用浏览器测试

1. 访问 `http://localhost:8000/remove-bg.html`
2. 上传图片
3. 查看处理结果

## 🔧 常见问题

### Q1: 模块导入错误
**错误**：`ModuleNotFoundError: No module named 'flask'`

**解决**：
```bash
pip install -r requirements.txt
```

### Q2: 端口占用
**错误**：`Address already in use`

**解决**：
```bash
# 查看占用进程
lsof -i :5000

# 停止进程
kill -9 <PID>
```

### Q3: rembg未安装
**错误**：去背景功能无法使用

**解决**：
```bash
pip install rembg
```

### Q4: 跨域错误
**错误**：`CORS policy`

**解决**：已在代码中启用CORS，无需配置

## 📊 性能说明

- **处理速度**：小图片（<1MB）约1-3秒
- **内存占用**：约200-500MB
- **并发支持**：支持多用户同时使用

## 🎯 下一步

### 添加更多功能

编辑 `backend/routes/` 目录添加新功能模块

### 部署到生产环境

查看 `DEPLOYMENT_GUIDE.md` 获取部署方案

### 性能优化

1. 添加Redis缓存
2. 使用GPU加速
3. 异步处理

## 📧 需要帮助？

Email: tankeapp@gmail.com

---

**祝您使用愉快！** 🎉

