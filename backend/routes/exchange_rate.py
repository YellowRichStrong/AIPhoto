#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
汇率获取模块
提供实时汇率查询功能
"""

import requests
import logging
from datetime import datetime, timedelta
import json
import os

logger = logging.getLogger(__name__)

# 缓存配置
CACHE_FILE = 'exchange_rate_cache.json'
CACHE_DURATION = timedelta(hours=1)  # 缓存1小时

# 支持的货币列表
SUPPORTED_CURRENCIES = {
    'USD': {'name': 'US Dollar', 'symbol': '$', 'flag': '🇺🇸'},
    'CNY': {'name': 'Chinese Yuan', 'symbol': '¥', 'flag': '🇨🇳'},
    'EUR': {'name': 'Euro', 'symbol': '€', 'flag': '🇪🇺'},
    'GBP': {'name': 'British Pound', 'symbol': '£', 'flag': '🇬🇧'},
    'JPY': {'name': 'Japanese Yen', 'symbol': '¥', 'flag': '🇯🇵'},
    'KRW': {'name': 'Korean Won', 'symbol': '₩', 'flag': '🇰🇷'},
    'HKD': {'name': 'Hong Kong Dollar', 'symbol': 'HK$', 'flag': '🇭🇰'},
    'SGD': {'name': 'Singapore Dollar', 'symbol': 'S$', 'flag': '🇸🇬'},
    'AUD': {'name': 'Australian Dollar', 'symbol': 'A$', 'flag': '🇦🇺'},
    'CAD': {'name': 'Canadian Dollar', 'symbol': 'C$', 'flag': '🇨🇦'},
    'CHF': {'name': 'Swiss Franc', 'symbol': 'CHF', 'flag': '🇨🇭'},
    'INR': {'name': 'Indian Rupee', 'symbol': '₹', 'flag': '🇮🇳'},
}

class ExchangeRateService:
    """汇率服务类"""
    
    def __init__(self):
        self.cache = self._load_cache()
    
    def _load_cache(self):
        """加载缓存的汇率数据"""
        if os.path.exists(CACHE_FILE):
            try:
                with open(CACHE_FILE, 'r') as f:
                    return json.load(f)
            except:
                return {}
        return {}
    
    def _save_cache(self):
        """保存汇率数据到缓存"""
        try:
            with open(CACHE_FILE, 'w') as f:
                json.dump(self.cache, f)
        except Exception as e:
            logger.error(f"保存缓存失败: {e}")
    
    def _is_cache_valid(self):
        """检查缓存是否有效"""
        if 'timestamp' not in self.cache:
            return False
        
        cache_time = datetime.fromisoformat(self.cache['timestamp'])
        return datetime.now() - cache_time < CACHE_DURATION
    
    def get_all_rates(self):
        """
        获取所有支持的货币汇率（基于USD）
        """
        # 如果缓存有效，直接返回
        if self._is_cache_valid() and 'rates' in self.cache:
            logger.info(f"使用缓存汇率数据")
            return {
                'rates': self.cache['rates'],
                'timestamp': self.cache['timestamp'],
                'source': self.cache.get('source', 'cache')
            }
        
        # 尝试从API获取汇率
        rates = self._fetch_all_rates()
        
        if rates is None:
            logger.warning("所有汇率API获取失败，使用默认汇率")
            rates = self._get_default_rates()
            source = 'default'
        else:
            source = 'api'
        
        # 更新缓存
        self.cache = {
            'rates': rates,
            'timestamp': datetime.now().isoformat(),
            'source': source
        }
        self._save_cache()
        
        return {
            'rates': rates,
            'timestamp': self.cache['timestamp'],
            'source': source
        }
    
    def _fetch_all_rates(self):
        """从API获取所有汇率"""
        try:
            # 使用 ExchangeRate-API
            url = "https://api.exchangerate-api.com/v4/latest/USD"
            response = requests.get(url, timeout=5)
            
            if response.status_code == 200:
                data = response.json()
                all_rates = data.get('rates', {})
                
                # 提取我们支持的货币
                rates = {}
                for currency in SUPPORTED_CURRENCIES.keys():
                    if currency in all_rates:
                        rates[currency] = round(all_rates[currency], 4)
                
                logger.info(f"从API获取到 {len(rates)} 种货币汇率")
                return rates
        except Exception as e:
            logger.error(f"获取汇率失败: {e}")
        
        # 尝试备用API
        return self._fetch_from_backup()
    
    def _fetch_from_backup(self):
        """从备用API获取汇率"""
        try:
            url = "https://open.er-api.com/v6/latest/USD"
            response = requests.get(url, timeout=5)
            
            if response.status_code == 200:
                data = response.json()
                all_rates = data.get('rates', {})
                
                rates = {}
                for currency in SUPPORTED_CURRENCIES.keys():
                    if currency in all_rates:
                        rates[currency] = round(all_rates[currency], 4)
                
                logger.info(f"从备用API获取到 {len(rates)} 种货币汇率")
                return rates
        except Exception as e:
            logger.error(f"备用API获取失败: {e}")
        
        return None
    
    def _get_default_rates(self):
        """获取默认汇率"""
        return {
            'USD': 1.0,
            'CNY': 7.25,
            'EUR': 0.92,
            'GBP': 0.79,
            'JPY': 149.50,
            'KRW': 1350.00,
            'HKD': 7.82,
            'SGD': 1.34,
            'AUD': 1.52,
            'CAD': 1.36,
            'CHF': 0.88,
            'INR': 83.50,
        }

# 创建全局服务实例
exchange_service = ExchangeRateService()

def get_all_exchange_rates():
    """获取所有汇率的主函数"""
    result = exchange_service.get_all_rates()
    
    # 添加货币信息
    currencies = {}
    for code, info in SUPPORTED_CURRENCIES.items():
        currencies[code] = {
            'name': info['name'],
            'symbol': info['symbol'],
            'flag': info['flag'],
            'rate': result['rates'].get(code, 1.0)
        }
    
    return {
        'currencies': currencies,
        'timestamp': result['timestamp'],
        'source': result['source']
    }
