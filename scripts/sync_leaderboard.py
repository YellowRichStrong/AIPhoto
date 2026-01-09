#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
排行榜数据同步脚本 - Python版本
每天23:00自动从参考网站抓取最新数据并更新
"""

import requests
import json
import re
import os
from datetime import datetime
from pathlib import Path

# 配置
CONFIG = {
    'source_url': 'https://model.aibase.com/zh/leaderboard/text-generation',
    'target_file': Path(__file__).parent.parent / 'js' / 'model-center.js',
    'log_file': Path(__file__).parent.parent / 'logs' / 'sync-log.txt',
    'backup_dir': Path(__file__).parent.parent / 'backups'
}

def log(message):
    """记录日志"""
    timestamp = datetime.now().isoformat()
    log_message = f"[{timestamp}] {message}\n"
    print(log_message.strip())
    
    # 确保logs目录存在
    CONFIG['log_file'].parent.mkdir(parents=True, exist_ok=True)
    
    with open(CONFIG['log_file'], 'a', encoding='utf-8') as f:
        f.write(log_message)

def fetch_web_content(url):
    """抓取网页内容"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        return response.text
    except Exception as e:
        log(f"抓取网页失败: {e}")
        return None

def parse_leaderboard_data(html):
    """解析排行榜数据"""
    models = []
    
    # 使用正则表达式提取数据
    # 根据实际HTML结构调整
    model_pattern = r'#(\d+)\s*\[([^\]]+)\]\([^\)]+\)\s*([^\s]+)\s*([^\s]+)\s*(\d+)'
    
    matches = re.findall(model_pattern, html)
    
    for match in matches:
        models.append({
            'rank': int(match[0]),
            'model': match[1],
            'provider': match[2],
            'license': match[3],
            'score': int(match[4])
        })
    
    return models

def backup_data():
    """备份数据"""
    timestamp = datetime.now().strftime('%Y-%m-%dT%H-%M-%S')
    backup_dir = CONFIG['backup_dir']
    backup_dir.mkdir(parents=True, exist_ok=True)
    
    # 备份model-center.js
    if CONFIG['target_file'].exists():
        js_backup = backup_dir / f"model-center-{timestamp}.js"
        with open(CONFIG['target_file'], 'r', encoding='utf-8') as src:
            with open(js_backup, 'w', encoding='utf-8') as dst:
                dst.write(src.read())
    
    log(f"数据已备份: {timestamp}")

def update_model_data(models):
    """更新model-center.js文件"""
    try:
        with open(CONFIG['target_file'], 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 构建新的数据数组
        new_data_str = json.dumps(models, indent=8, ensure_ascii=False)
        
        # 替换leaderboard数据
        pattern = r'leaderboard:\s*\[[\s\S]*?\]'
        replacement = f'leaderboard: {new_data_str}'
        
        content = re.sub(pattern, replacement, content)
        
        # 写入文件
        with open(CONFIG['target_file'], 'w', encoding='utf-8') as f:
            f.write(content)
        
        log(f"成功更新 {len(models)} 条模型数据")
        return True
        
    except Exception as e:
        log(f"更新数据失败: {e}")
        return False

def main():
    """主函数"""
    log('========== 开始同步排行榜数据 ==========')
    
    try:
        # 1. 备份当前数据
        log('备份当前数据...')
        backup_data()
        
        # 2. 抓取网页内容
        log(f"正在抓取数据: {CONFIG['source_url']}")
        html = fetch_web_content(CONFIG['source_url'])
        
        if not html:
            log('抓取失败，跳过本次同步')
            return
        
        log(f"成功获取网页内容 ({len(html)} 字节)")
        
        # 3. 解析排行榜数据
        log('解析排行榜数据...')
        models = parse_leaderboard_data(html)
        
        if not models:
            log('警告: 未能解析到任何模型数据')
            return
        
        # 4. 更新数据文件
        log('更新数据文件...')
        update_model_data(models)
        
        log('========== 同步完成 ==========')
        
    except Exception as e:
        log(f"同步失败: {e}")
        import traceback
        log(traceback.format_exc())

if __name__ == '__main__':
    main()
