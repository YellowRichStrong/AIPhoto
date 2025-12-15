# AI模型排行榜自动同步服务

## 功能说明

本服务每天23:00自动从参考网站抓取最新的排行榜数据，并更新到本地网站。

### 数据来源
- https://model.aibase.com/zh/leaderboard/text-generation

### 同步内容
1. **排行榜数据**: 模型名称、供应商、许可证、得分等
2. **分类标签**: 文本生成、文字转视频、文本转图片、图像转视频、Web开发

## 安装步骤

### 1. 安装依赖
```bash
cd /Users/macbookpro/Desktop/html_wangxiao/aitoday
npm install
```

### 2. 测试同步功能
```bash
# 测试数据抓取和解析
npm run test-sync

# 立即执行一次同步
npm run sync-now
```

### 3. 启动定时任务

#### 方式1: 直接运行（前台）
```bash
npm start
```

#### 方式2: 使用PM2（推荐，后台运行）
```bash
# 首先全局安装PM2
npm install -g pm2

# 安装并启动服务
npm run install-service

# 查看日志
npm run logs

# 停止服务
npm run stop-service

# 重启服务
npm run restart-service
```

## 文件结构

```
aitoday/
├── scripts/
│   ├── sync-leaderboard.js  # 数据同步脚本
│   ├── scheduler.js          # 定时任务调度器
│   └── README.md             # 使用说明
├── logs/
│   └── sync-log.txt          # 同步日志
├── backups/                  # 数据备份目录
│   ├── model-center-*.js     # JS文件备份
│   └── index-*.html          # HTML文件备份
└── package.json              # 依赖配置
```

## 定时规则

- **执行时间**: 每天 23:00:00
- **时区**: Asia/Shanghai (北京时间)
- **Cron表达式**: `0 0 23 * * *`

## 日志说明

所有同步记录会保存在 `logs/sync-log.txt` 文件中，包括：
- 同步开始时间
- 抓取的数据量
- 更新结果
- 错误信息（如有）

查看日志：
```bash
tail -f logs/sync-log.txt
```

## 数据备份

每次同步前会自动备份当前数据到 `backups/` 目录，文件名包含时间戳，方便回滚。

## 手动操作

### 立即同步一次
```bash
node scripts/sync-leaderboard.js
```

### 查看当前定时任务状态
```bash
pm2 list
```

### 修改同步时间
编辑 `scripts/scheduler.js` 文件，修改cron表达式：
```javascript
// 例如改为每天凌晨2点
const task = cron.schedule('0 0 2 * * *', () => {
    syncLeaderboard();
}, {
    timezone: "Asia/Shanghai"
});
```

## 故障排除

### 问题1: 同步失败
检查网络连接和参考网站是否可访问：
```bash
curl https://model.aibase.com/zh/leaderboard/text-generation
```

### 问题2: 数据解析错误
查看日志文件，检查参考网站HTML结构是否变化。
如有变化，需要更新 `sync-leaderboard.js` 中的解析规则。

### 问题3: 权限错误
确保scripts目录有执行权限：
```bash
chmod +x scripts/*.js
```

## 注意事项

1. 首次运行会创建 `logs/` 和 `backups/` 目录
2. 定时任务需要保持进程运行，建议使用PM2
3. 定期清理旧的备份文件，避免占用过多空间
4. 如果参考网站结构变化，需要更新解析逻辑

## 联系方式

如有问题，请联系: tankeapp@gmail.com
