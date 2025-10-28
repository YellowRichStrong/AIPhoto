#!/bin/bash

echo "🚀 启动 Nero AI 后端服务..."

# 创建必要的目录
mkdir -p uploads results

# 激活虚拟环境（如果存在）
if [ -d "venv" ]; then
    echo "📦 激活虚拟环境..."
    source venv/bin/activate
fi

# 启动服务
echo "✨ 启动 Flask 服务..."
python app.py
