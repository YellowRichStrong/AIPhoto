#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Blog API Routes
Handles blog article CRUD operations
"""

from flask import Blueprint, request, jsonify
import json
import os
from datetime import datetime

blog_bp = Blueprint('blog', __name__)

# Blog data file path
BLOG_DATA_FILE = 'blog_data.json'

def load_blog_data():
    """Load blog data from JSON file"""
    if os.path.exists(BLOG_DATA_FILE):
        try:
            with open(BLOG_DATA_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return {'articles': [], 'next_id': 1}
    return {'articles': [], 'next_id': 1}

def save_blog_data(data):
    """Save blog data to JSON file"""
    try:
        with open(BLOG_DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Error saving blog data: {e}")
        return False

@blog_bp.route('/articles', methods=['GET'])
def get_articles():
    """Get all blog articles"""
    try:
        data = load_blog_data()
        return jsonify({
            'status': 'success',
            'articles': data['articles']
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@blog_bp.route('/articles/<int:article_id>', methods=['GET'])
def get_article(article_id):
    """Get a single article by ID"""
    try:
        data = load_blog_data()
        article = next((a for a in data['articles'] if a['id'] == article_id), None)
        
        if article:
            return jsonify({
                'status': 'success',
                'article': article
            })
        else:
            return jsonify({
                'status': 'error',
                'message': 'Article not found'
            }), 404
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@blog_bp.route('/articles', methods=['POST'])
def create_article():
    """Create a new blog article"""
    try:
        article_data = request.json
        
        # Validate required fields
        if not article_data.get('title') or not article_data.get('content'):
            return jsonify({
                'status': 'error',
                'message': 'Title and content are required'
            }), 400
        
        data = load_blog_data()
        
        # Create new article
        new_article = {
            'id': data['next_id'],
            'title': article_data['title'],
            'content': article_data['content'],
            'author': article_data.get('author', 'Admin'),
            'date': datetime.now().isoformat()
        }
        
        data['articles'].append(new_article)
        data['next_id'] += 1
        
        if save_blog_data(data):
            return jsonify({
                'status': 'success',
                'message': 'Article created successfully',
                'article': new_article
            }), 201
        else:
            return jsonify({
                'status': 'error',
                'message': 'Failed to save article'
            }), 500
            
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@blog_bp.route('/articles/<int:article_id>', methods=['PUT'])
def update_article(article_id):
    """Update an existing article"""
    try:
        article_data = request.json
        data = load_blog_data()
        
        # Find article
        article = next((a for a in data['articles'] if a['id'] == article_id), None)
        
        if not article:
            return jsonify({
                'status': 'error',
                'message': 'Article not found'
            }), 404
        
        # Update article fields
        if 'title' in article_data:
            article['title'] = article_data['title']
        if 'content' in article_data:
            article['content'] = article_data['content']
        if 'author' in article_data:
            article['author'] = article_data['author']
        
        # Update modified date
        article['modified_date'] = datetime.now().isoformat()
        
        if save_blog_data(data):
            return jsonify({
                'status': 'success',
                'message': 'Article updated successfully',
                'article': article
            })
        else:
            return jsonify({
                'status': 'error',
                'message': 'Failed to update article'
            }), 500
            
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@blog_bp.route('/articles/<int:article_id>', methods=['DELETE'])
def delete_article(article_id):
    """Delete an article"""
    try:
        data = load_blog_data()
        
        # Find and remove article
        original_length = len(data['articles'])
        data['articles'] = [a for a in data['articles'] if a['id'] != article_id]
        
        if len(data['articles']) == original_length:
            return jsonify({
                'status': 'error',
                'message': 'Article not found'
            }), 404
        
        if save_blog_data(data):
            return jsonify({
                'status': 'success',
                'message': 'Article deleted successfully'
            })
        else:
            return jsonify({
                'status': 'error',
                'message': 'Failed to delete article'
            }), 500
            
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500
