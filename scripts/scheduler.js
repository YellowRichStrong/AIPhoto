/**
 * 定时任务调度器
 * 使用node-cron每天23:00执行数据同步
 */

const cron = require('node-cron');
const { main: syncLeaderboard } = require('./sync-leaderboard');

console.log('AI模型排行榜定时同步服务已启动...');
console.log('同步时间: 每天 23:00');
console.log('数据源: https://model.aibase.com/zh/leaderboard/text-generation');

// 定时任务: 每天23:00执行
// 格式: 秒 分 时 日 月 周
// 0 0 23 * * * 表示每天23:00:00
const task = cron.schedule('0 0 23 * * *', () => {
    console.log('\n触发定时任务: 同步排行榜数据');
    syncLeaderboard();
}, {
    timezone: "Asia/Shanghai"
});

// 启动任务
task.start();

// 立即执行一次（可选，用于测试）
if (process.argv.includes('--now')) {
    console.log('\n立即执行同步任务...');
    syncLeaderboard();
}

// 保持进程运行
process.on('SIGINT', () => {
    console.log('\n停止定时任务...');
    task.stop();
    process.exit(0);
});

console.log('\n定时任务已启动，按 Ctrl+C 退出');
