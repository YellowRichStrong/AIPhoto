#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片去噪处理模块
"""

import os
from PIL import Image, ImageFilter

def process_denoise(input_path):
    """
    处理图片去噪
    """
    try:
        # 读取图片
        img = Image.open(input_path)
        
        # 转换为RGB（如果不是）
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 应用中值滤波器去噪
        img = img.filter(ImageFilter.MedianFilter(size=3))
        
        # 应用平滑滤镜进一步降噪
        img = img.filter(ImageFilter.SMOOTH)
        
        # 保存结果
        output_filename = os.path.basename(input_path).rsplit('.', 1)[0] + '_denoised.png'
        output_path = os.path.join('results', output_filename)
        img.save(output_path)
        
        return output_path
        
    except Exception as e:
        raise Exception(f"图片去噪处理失败: {str(e)}")

