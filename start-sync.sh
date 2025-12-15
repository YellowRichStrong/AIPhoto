#!/bin/bash

# AI模型排行榜自动同步服务 - 快速启动脚本

echo "=================================="
echo "AI模型排行榜自动同步服务"
echo "=================================="
echo ""

# 检查Node.js是否安装
if ! command -v node &> /dev/null
then
    echo "❌ 错误: 未安装Node.js"
    echo "请先安装Node.js: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js版本: $(node -v)"

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo ""
    echo "📦 安装依赖包..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败"
        exit 1
    fi
    echo "✓ 依赖安装成功"
fi

# 创建必要的目录
mkdir -p logs backups scripts

echo ""
echo "🚀 启动定时同步服务..."
echo ""
echo "同步时间: 每天 23:00"
echo "数据源: https://model.aibase.com/zh/leaderboard/text-generation"
echo ""
echo "按 Ctrl+C 停止服务"
echo "=================================="
echo ""

# 启动定时任务
node scripts/scheduler.js
