/**
 * 排行榜数据同步脚本
 * 每天23:00自动从参考网站抓取最新数据并更新
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
    sourceUrl: 'https://model.aibase.com/zh/leaderboard/text-generation',
    targetFile: path.join(__dirname, '../js/model-center.js'),
    indexFile: path.join(__dirname, '../index.html'),
    logFile: path.join(__dirname, '../logs/sync-log.txt')
};

// 日志函数
function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    // 确保logs目录存在
    const logsDir = path.dirname(CONFIG.logFile);
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(CONFIG.logFile, logMessage);
}

// 抓取网页内容
function fetchWebContent(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// 解析HTML，提取排行榜数据
function parseLeaderboardData(html) {
    const models = [];
    
    // 使用正则表达式提取数据
    // 这里需要根据实际HTML结构调整正则表达式
    const modelPattern = /#(\d+)\s*\[([^\]]+)\]\([^\)]+\)\s*([^\s]+)\s*([^\s]+)\s*(\d+)/g;
    
    let match;
    while ((match = modelPattern.exec(html)) !== null) {
        models.push({
            rank: parseInt(match[1]),
            model: match[2],
            provider: match[3],
            license: match[4],
            score: parseInt(match[5])
        });
    }
    
    // 如果正则提取失败，尝试备用方法
    if (models.length === 0) {
        log('使用备用解析方法...');
        // 这里可以添加更复杂的HTML解析逻辑
        // 或者使用cheerio等库
    }
    
    return models;
}

// 更新model-center.js文件
function updateModelData(models) {
    try {
        let content = fs.readFileSync(CONFIG.targetFile, 'utf8');
        
        // 构建新的数据数组
        const newDataStr = JSON.stringify(models, null, 8);
        
        // 替换leaderboard数据
        const pattern = /leaderboard:\s*\[[\s\S]*?\]/;
        const replacement = `leaderboard: ${newDataStr}`;
        
        content = content.replace(pattern, replacement);
        
        // 写入文件
        fs.writeFileSync(CONFIG.targetFile, content, 'utf8');
        log(`成功更新 ${models.length} 条模型数据`);
        
        return true;
    } catch (error) {
        log(`更新数据失败: ${error.message}`);
        return false;
    }
}

// 提取分类标签
function extractCategories(html) {
    const categories = [];
    
    // 提取类似 "文本生成"、"文字转视频" 等分类
    const categoryPattern = /\[(文本生成|文字转视频|文本转图片|图像转视频|Web开发)\]/g;
    
    let match;
    const seen = new Set();
    while ((match = categoryPattern.exec(html)) !== null) {
        if (!seen.has(match[1])) {
            categories.push(match[1]);
            seen.add(match[1]);
        }
    }
    
    return categories;
}

// 更新index.html中的分类标签
function updateCategories(categories) {
    try {
        let content = fs.readFileSync(CONFIG.indexFile, 'utf8');
        
        // 构建新的标签HTML
        let tabsHtml = '';
        categories.forEach((cat, index) => {
            const activeClass = index === 0 ? ' active' : '';
            tabsHtml += `                    <button class="filter-tab${activeClass}">${cat}</button>\n`;
        });
        
        // 替换filter-tabs内容
        const pattern = /(<div class="filter-tabs">)([\s\S]*?)(<\/div>)/;
        const replacement = `$1\n${tabsHtml}                $3`;
        
        content = content.replace(pattern, replacement);
        
        // 写入文件
        fs.writeFileSync(CONFIG.indexFile, content, 'utf8');
        log(`成功更新 ${categories.length} 个分类标签`);
        
        return true;
    } catch (error) {
        log(`更新分类失败: ${error.message}`);
        return false;
    }
}

// 备份数据
function backupData() {
    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    const backupDir = path.join(__dirname, '../backups');
    
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // 备份model-center.js
    const jsBackup = path.join(backupDir, `model-center-${timestamp}.js`);
    fs.copyFileSync(CONFIG.targetFile, jsBackup);
    
    // 备份index.html
    const htmlBackup = path.join(backupDir, `index-${timestamp}.html`);
    fs.copyFileSync(CONFIG.indexFile, htmlBackup);
    
    log(`数据已备份: ${timestamp}`);
}

// 主函数
async function main() {
    log('========== 开始同步排行榜数据 ==========');
    
    try {
        // 1. 备份当前数据
        log('备份当前数据...');
        backupData();
        
        // 2. 抓取网页内容
        log(`正在抓取数据: ${CONFIG.sourceUrl}`);
        const html = await fetchWebContent(CONFIG.sourceUrl);
        log(`成功获取网页内容 (${html.length} 字节)`);
        
        // 3. 解析排行榜数据
        log('解析排行榜数据...');
        const models = parseLeaderboardData(html);
        
        if (models.length === 0) {
            log('警告: 未能解析到任何模型数据，使用手动数据更新');
            // 这里可以添加备用的手动数据源
            return;
        }
        
        // 4. 提取分类标签
        log('提取分类标签...');
        const categories = extractCategories(html);
        
        // 5. 更新数据文件
        log('更新数据文件...');
        updateModelData(models);
        
        if (categories.length > 0) {
            updateCategories(categories);
        }
        
        log('========== 同步完成 ==========');
        
    } catch (error) {
        log(`同步失败: ${error.message}`);
        log(error.stack);
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = { main };
