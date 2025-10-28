#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
老照片修复处理模块
"""

import os
from PIL import Image, ImageFilter, ImageEnhance
import numpy as np

def process_restore(input_path):
    """
    处理照片修复
    使用多种图像处理技术修复老旧照片
    """
    try:
        # 读取图片
        img = Image.open(input_path)
        
        # 转换为RGB（如果不是）
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 应用锐化滤镜
        img = img.filter(ImageFilter.SHARPEN)
        
        # 增强对比度
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.2)
        
        # 增强色彩饱和度
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.1)
        
        # 降噪处理（使用中值滤波）
        data = np.array(img)
        # 简单的降噪：对每个通道应用中值滤波
        restored_data = np.zeros_like(data)
        restored_data[:,:,0] = _median_filter(data[:,:,0])
        restored_data[:,:,1] = _median_filter(data[:,:,1])
        restored_data[:,:,2] = _median_filter(data[:,:,2])
        
        result_img = Image.fromarray(restored_data)
        
        # 保存结果
        output_filename = os.path.basename(input_path).rsplit('.', 1)[0] + '_restored.png'
        output_path = os.path.join('results', output_filename)
        result_img.save(output_path)
        
        return output_path
        
    except Exception as e:
        raise Exception(f"照片修复处理失败: {str(e)}")

def _median_filter(channel, size=3):
    """
    简单的中值滤波
    """
    from scipy import ndimage
    try:
        return ndimage.median_filter(channel, size=size)
    except ImportError:
        # 如果scipy未安装，返回原通道
        return channel

