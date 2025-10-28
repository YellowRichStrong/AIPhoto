#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
测试后端服务
"""

import sys
import os

# 添加backend目录到路径
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

def test_import():
    """测试模块导入"""
    print("=" * 50)
    print("测试模块导入...")
    try:
        from app import app
        print("✅ app.py 导入成功")
        
        from routes import remove_bg, upscale, restore, denoise
        print("✅ routes 模块导入成功")
        
        return True
    except Exception as e:
        print(f"❌ 导入失败: {e}")
        return False

def test_app():
    """测试Flask应用"""
    print("\n" + "=" * 50)
    print("测试Flask应用...")
    try:
        from app import app
        
        # 测试健康检查
        with app.test_client() as client:
            response = client.get('/api/health')
            if response.status_code == 200:
                print("✅ 健康检查接口正常")
                print(f"响应: {response.get_json()}")
                return True
            else:
                print(f"❌ 健康检查失败: {response.status_code}")
                return False
    except Exception as e:
        print(f"❌ 测试失败: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    print("\n🧪 开始测试后端服务...\n")
    
    # 测试导入
    if not test_import():
        print("\n❌ 测试失败")
        return False
    
    # 测试应用
    if not test_app():
        print("\n❌ 测试失败")
        return False
    
    print("\n" + "=" * 50)
    print("✅ 所有测试通过！")
    print("=" * 50)
    print("\n📝 后端已准备就绪，您可以：")
    print("   1. 启动后端: cd backend && python3 app.py")
    print("   2. 启动前端: python3 -m http.server 8000")
    print("   3. 访问页面: http://localhost:8000")
    return True

if __name__ == '__main__':
    success = main()
    sys.exit(0 if success else 1)

