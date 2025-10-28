#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片放大处理模块
"""

import os
from PIL import Image

def process_upscale(input_path):
    """
    处理图片放大
    返回处理后的图片路径
    """
    try:
        # 读取图片
        img = Image.open(input_path)
        
        # 获取原始尺寸
        width, height = img.size
        
        # 放大2倍
        new_width = width * 2
        new_height = height * 2
        
        # 使用LANCZOS算法进行放大
        upscaled_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # 保存结果
        output_filename = os.path.basename(input_path).rsplit('.', 1)[0] + '_upscaled.png'
        output_path = os.path.join('results', output_filename)
        upscaled_img.save(output_path)
        
        return output_path
        
    except Exception as e:
        raise Exception(f"图片放大处理失败: {str(e)}")

