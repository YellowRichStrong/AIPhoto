# 部署指南

## 🎯 完整系统架构

```
前端 (HTML/CSS/JS)
    ↓
Flask 后端 API (Python)
    ↓
AI处理模块
```

## 📦 部署方式

### 方式一：本地开发部署（推荐用于开发）

#### 步骤1：安装依赖

```bash
cd backend
pip install -r requirements.txt
```

#### 步骤2：启动后端服务

```bash
python app.py
```

#### 步骤3：启动前端

```bash
# 在项目根目录
python3 -m http.server 8000
```

#### 步骤4：访问

- 前端：`http://localhost:8000`
- 后端：`http://localhost:5000`

### 方式二：Docker部署（推荐用于生产）

#### 步骤1：构建镜像

```bash
cd backend
docker build -t nero-ai-backend .
```

#### 步骤2：运行容器

```bash
docker run -d \
  -p 5000:5000 \
  -v $(pwd)/uploads:/app/uploads \
  -v $(pwd)/results:/app/results \
  --name nero-ai-backend \
  nero-ai-backend
```

#### 步骤3：部署前端

将前端文件上传到Web服务器（如Nginx、Apache）

### 方式三：云服务器部署

#### 推荐配置

- **CPU**: 4核+
- **内存**: 8GB+
- **硬盘**: 50GB+
- **系统**: Ubuntu 20.04+

#### 部署步骤

```bash
# 1. 更新系统
sudo apt update && sudo apt upgrade -y

# 2. 安装Python
sudo apt install python3 python3-pip -y

# 3. 克隆项目
git clone <your-repo-url>
cd photo

# 4. 安装后端依赖
cd backend
pip3 install -r requirements.txt

# 5. 安装进程管理工具
sudo pip3 install gunicorn

# 6. 启动服务（生产环境）
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

#### 配置Nginx

```nginx
# /etc/nginx/sites-available/nero-ai
server {
    listen 80;
    server_name your-domain.com;

    # 前端文件
    location / {
        root /path/to/photo;
        index index.html;
        try_files $uri $uri/ =404;
    }

    # 后端API代理
    location /api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🔧 环境配置

### 开发环境

创建 `.env` 文件：

```env
# 后端配置
FLASK_ENV=development
FLASK_DEBUG=True
API_BASE_URL=http://localhost:5000

# 文件上传
MAX_FILE_SIZE=16777216  # 16MB

# AI模型配置
USE_REMBG=True
USE_SCIPY=True
```

### 生产环境

```env
# 后端配置
FLASK_ENV=production
FLASK_DEBUG=False
API_BASE_URL=https://your-domain.com

# 安全配置
SECRET_KEY=your-secret-key-here

# 性能配置
WORKERS=4
TIMEOUT=120
```

## 📊 性能优化

### 1. 使用GPU加速（可选）

```bash
# 安装CUDA支持
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu118
```

### 2. 启用缓存

```python
# 在app.py中添加
from flask_caching import Cache

cache = Cache(app, config={
    'CACHE_TYPE': 'redis',
    'CACHE_REDIS_URL': 'redis://localhost:6379'
})
```

### 3. 异步处理大文件

使用Celery进行异步任务处理：

```bash
pip install celery redis
```

## 🔒 安全建议

1. **HTTPS**: 使用SSL证书
2. **CORS**: 限制允许的域名
3. **文件大小**: 限制上传文件大小
4. **文件类型**: 只允许图片格式
5. **定期清理**: 定时删除临时文件

## 📝 维护建议

### 定期任务

1. **清理临时文件**（每天）
```bash
find /app/uploads -mtime +1 -delete
find /app/results -mtime +1 -delete
```

2. **备份数据**（每周）
```bash
tar -czf backup-$(date +%Y%m%d).tar.gz uploads/ results/
```

3. **监控日志**（实时）
```bash
tail -f /var/log/nero-ai.log
```

## 🐛 常见问题

### Q: 服务启动失败
A: 检查端口5000是否被占用
```bash
lsof -i :5000
```

### Q: 处理速度慢
A: 考虑升级服务器或使用GPU

### Q: 内存不足
A: 增加服务器内存或限制并发数

## 📧 技术支持

Email: tankeapp@gmail.com

