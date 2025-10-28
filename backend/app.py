#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Nero AI 图片处理后端服务器
提供AI图片处理API接口
"""

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from datetime import datetime
import logging

# 配置日志
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 最大16MB
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['RESULTS_FOLDER'] = 'results'

# 启用CORS
CORS(app, resources={r"/api/*": {"origins": "*"}})

# 确保文件夹存在
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs(app.config['RESULTS_FOLDER'], exist_ok=True)

# 允许的文件类型
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'webp'}

def allowed_file(filename):
    """检查文件扩展名是否允许"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/health', methods=['GET'])
def health_check():
    """健康检查接口"""
    return jsonify({
        'status': 'success',
        'message': 'Nero AI 后端服务运行正常',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/photo-remove-bg', methods=['POST'])
def photo_remove_bg():
    """AI一键去背景"""
    try:
        if 'image' not in request.files:
            return jsonify({'error': '未提供图片文件'}), 400
        
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': '未选择文件'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'error': '不支持的文件格式'}), 400
        
        # 保存上传的文件
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # 调用去背景处理
        from routes.remove_bg import process_remove_bg
        result_path = process_remove_bg(filepath)
        
        # 返回结果
        return send_file(result_path, mimetype='image/png')
        
    except Exception as e:
        logger.error(f"去背景处理错误: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/photo-upscale', methods=['POST'])
def photo_upscale():
    """AI图片放大"""
    try:
        if 'image' not in request.files:
            return jsonify({'error': '未提供图片文件'}), 400
        
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': '未选择文件'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'error': '不支持的文件格式'}), 400
        
        # 保存上传的文件
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # 调用图片放大处理
        from routes.upscale import process_upscale
        result_path = process_upscale(filepath)
        
        # 返回结果
        return send_file(result_path, mimetype='image/png')
        
    except Exception as e:
        logger.error(f"图片放大处理错误: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/photo-restore', methods=['POST'])
def photo_restore():
    """AI老照片修复"""
    try:
        if 'image' not in request.files:
            return jsonify({'error': '未提供图片文件'}), 400
        
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': '未选择文件'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'error': '不支持的文件格式'}), 400
        
        # 保存上传的文件
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # 调用照片修复处理
        from routes.restore import process_restore
        result_path = process_restore(filepath)
        
        # 返回结果
        return send_file(result_path, mimetype='image/png')
        
    except Exception as e:
        logger.error(f"照片修复处理错误: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/photo-denoise', methods=['POST'])
def photo_denoise():
    """AI图片去噪"""
    try:
        if 'image' not in request.files:
            return jsonify({'error': '未提供图片文件'}), 400
        
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': '未选择文件'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'error': '不支持的文件格式'}), 400
        
        # 保存上传的文件
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # 调用去噪处理
        from routes.denoise import process_denoise
        result_path = process_denoise(filepath)
        
        # 返回结果
        return send_file(result_path, mimetype='image/png')
        
    except Exception as e:
        logger.error(f"图片去噪处理错误: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    logger.info("Nero AI 后端服务启动中...")
    port = int(os.environ.get('PORT', 5001))
    app.run(debug=True, host='0.0.0.0', port=port)

