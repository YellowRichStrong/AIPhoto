#!/bin/bash

# 快速测试同步功能

echo "🧪 测试AI模型排行榜同步功能"
echo "=================================="
echo ""

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install --silent
fi

echo "1️⃣  测试数据抓取..."
node scripts/sync-leaderboard.js

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 测试成功！"
    echo ""
    echo "📝 查看同步日志:"
    echo "   cat logs/sync-log.txt"
    echo ""
    echo "📁 查看备份文件:"
    echo "   ls -lh backups/"
    echo ""
    echo "🚀 启动定时服务:"
    echo "   ./start-sync.sh"
    echo "   或"
    echo "   npm start"
else
    echo ""
    echo "❌ 测试失败，请检查错误信息"
fi
