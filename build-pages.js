const fs = require('fs');
const path = require('path');
const { toolsConfig, generateToolPage } = require('./generate-pages.js');

// 确保输出目录存在
const outputDir = __dirname;

// 生成所有工具页面
console.log('开始生成工具页面...\n');

toolsConfig.forEach((config, index) => {
    const html = generateToolPage(config);
    const filepath = path.join(outputDir, config.filename);
    
    fs.writeFileSync(filepath, html, 'utf8');
    console.log(`✓ 已生成: ${config.filename} - ${config.title}`);
});

console.log(`\n✅ 成功生成 ${toolsConfig.length} 个工具页面！`);
