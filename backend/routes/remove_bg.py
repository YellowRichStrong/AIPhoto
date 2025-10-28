#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
去背景处理模块
使用rembg库实现AI去背景功能
"""

import os
import sys
from PIL import Image
import numpy as np

def process_remove_bg(input_path):
    """
    处理去背景
    返回处理后的图片路径
    """
    try:
        # 尝试使用rembg
        from rembg import remove
        
        # 读取输入图片
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()
        
        # 执行去背景处理
        output_data = remove(input_data)
        
        # 保存结果
        output_filename = os.path.basename(input_path).rsplit('.', 1)[0] + '_no_bg.png'
        output_path = os.path.join('results', output_filename)
        
        with open(output_path, 'wb') as output_file:
            output_file.write(output_data)
        
        return output_path
        
    except ImportError:
        # 如果rembg未安装，使用PIL简单处理（仅作为演示）
        print("警告: rembg未安装，使用简单处理")
        return _simple_remove_bg(input_path)
    except Exception as e:
        raise Exception(f"去背景处理失败: {str(e)}")

def _simple_remove_bg(input_path):
    """简单的去背景处理（作为后备方案）"""
    try:
        img = Image.open(input_path)
        
        # 转换为RGBA
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # 简单的去背景：移除白色背景
        data = np.array(img)
        # 创建白色蒙版
        white_mask = (data[:,:,0] > 240) & (data[:,:,1] > 240) & (data[:,:,2] > 240)
        # 设置透明度
        data[:,:,3][white_mask] = 0
        
        result_img = Image.fromarray(data)
        
        # 保存结果
        output_filename = os.path.basename(input_path).rsplit('.', 1)[0] + '_no_bg.png'
        output_path = os.path.join('results', output_filename)
        result_img.save(output_path)
        
        return output_path
        
    except Exception as e:
        raise Exception(f"简单去背景失败: {str(e)}")

