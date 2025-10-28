# Nero AI 后端服务

## 📋 项目概述

这是 Nero AI 图片处理工具的后端服务器，提供AI图片处理API接口。

## ✨ 已实现功能

1. ✅ **AI一键去背景** - 使用rembg库
2. ✅ **AI图片放大** - 使用PIL高质量放大
3. ✅ **AI老照片修复** - 锐化、降噪、增强
4. ✅ **AI图片去噪** - 中值滤波去噪

## 🚀 快速开始

### 1. 安装依赖

```bash
cd backend
pip install -r requirements.txt
```

### 2. 启动服务

```bash
python app.py
```

服务将在 `http://localhost:5000` 启动

### 3. 测试API

访问：`http://localhost:5000/api/health`

应该返回：
```json
{
  "status": "success",
  "message": "Nero AI 后端服务运行正常",
  "timestamp": "2024-01-01T12:00:00"
}
```

## 📡 API接口

### 1. 健康检查
```
GET /api/health
```

### 2. AI一键去背景
```
POST /api/photo-remove-bg
Content-Type: multipart/form-data
Body: image (file)
```

### 3. AI图片放大
```
POST /api/photo-upscale
Content-Type: multipart/form-data
Body: image (file)
```

### 4. AI老照片修复
```
POST /api/photo-restore
Content-Type: multipart/form-data
Body: image (file)
```

### 5. AI图片去噪
```
POST /api/photo-denoise
Content-Type: multipart/form-data
Body: image (file)
```

## 📁 项目结构

```
backend/
├── app.py              # Flask主应用
├── routes/             # 处理模块
│   ├── remove_bg.py   # 去背景
│   ├── upscale.py     # 图片放大
│   ├── restore.py     # 照片修复
│   └── denoise.py     # 图片去噪
├── uploads/            # 上传文件存储
├── results/            # 处理结果存储
└── requirements.txt    # 依赖文件
```

## 🔧 开发

### 添加新功能

1. 在 `routes/` 目录创建新的处理模块
2. 在 `app.py` 中添加新的路由
3. 更新 `requirements.txt` 添加依赖

### 依赖说明

- **Flask**: Web框架
- **Flask-CORS**: 跨域支持
- **Pillow**: 图像处理
- **numpy**: 数值计算
- **rembg**: AI去背景（可选）
- **scipy**: 科学计算（可选）

## 🐳 Docker部署

```bash
# 构建镜像
docker build -t nero-ai-backend .

# 运行容器
docker run -p 5000:5000 nero-ai-backend
```

## 📝 注意事项

1. **首次使用rembg**：会自动下载AI模型（约200MB）
2. **文件清理**：建议定期清理 `uploads/` 和 `results/` 目录
3. **内存占用**：处理大图片时可能占用较多内存

## 🐛 故障排除

### 问题：rembg导入失败
解决：安装系统依赖
```bash
# macOS
brew install onnxruntime

# Ubuntu
apt-get install libgl1-mesa-glx libglib2.0-0
```

### 问题：内存不足
解决：减小图片大小或使用更轻量的处理方案

## 📧 联系方式

Email: tankeapp@gmail.com

