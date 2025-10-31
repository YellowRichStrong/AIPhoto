#!/usr/bin/env python3
# -*- coding: utf-8 -*-

tools_config = [
    {
        'filename': 'anime-upscale.html',
        'title': 'AI Anime Upscaler',
        'description': 'AI upscaling technology designed for anime and illustrations, perfectly preserving lines and colors',
        'features': ['Anime-specific algorithm', 'Line protection', 'Color restoration', 'Detail enhancement'],
        'icon': 'fa-dragon',
        'resultLabel': 'After Upscaling'
    },
    {
        'filename': 'photo-sharpen.html',
        'title': 'AI Photo Sharpening',
        'description': 'AI intelligently sharpens blurry images, enhancing clarity and detail',
        'features': ['Smart sharpening', 'Edge enhancement', 'Noise suppression', 'Natural effect'],
        'icon': 'fa-adjust',
        'resultLabel': 'After Sharpening'
    },
    {
        'filename': 'face-enhance.html',
        'title': 'AI Face Enhancement',
        'description': 'Professional portrait optimization technology to enhance face photo quality and details',
        'features': ['Face recognition', 'Skin texture optimization', 'Detail enhancement', 'Natural beautification'],
        'icon': 'fa-smile',
        'resultLabel': 'After Enhancement'
    },
    {
        'filename': 'colorize.html',
        'title': 'AI Photo Colorization',
        'description': 'Intelligently colorize black and white photos to bring historical photos back to life',
        'features': ['Smart colorization', 'Natural colors', 'Scene recognition', 'Multiple styles'],
        'icon': 'fa-palette',
        'resultLabel': 'After Colorization'
    },
    {
        'filename': 'denoise.html',
        'title': 'AI Image Denoising',
        'description': 'Intelligently remove image noise to enhance image quality and clarity',
        'features': ['Smart denoising', 'Detail preservation', 'Multi-level denoising', 'Fast processing'],
        'icon': 'fa-broom',
        'resultLabel': 'After Denoising'
    },
    {
        'filename': 'compress.html',
        'title': 'AI Lossless Image Compression',
        'description': 'Intelligently compress image size while maintaining original quality',
        'features': ['Smart compression', 'Lossless quality', 'Batch processing', 'Multiple formats'],
        'icon': 'fa-compress',
        'resultLabel': 'After Compression'
    },
    {
        'filename': 'generate-bg.html',
        'title': 'AI Background Generation',
        'description': 'AI automatically generates professional backgrounds to make photos more outstanding',
        'features': ['Smart generation', 'Multiple scenes', 'Natural blending', 'Style options'],
        'icon': 'fa-image',
        'resultLabel': 'After Generation'
    },
    {
        'filename': 'remove-bg.html',
        'title': 'AI Background Removal',
        'description': 'Automatically identify subjects and accurately remove backgrounds',
        'features': ['One-click cutout', 'Accurate recognition', 'Edge optimization', 'Transparent background'],
        'icon': 'fa-cut',
        'resultLabel': 'After Background Removal'
    },
    {
        'filename': 'change-bg.html',
        'title': 'AI Background Changer',
        'description': 'Intelligently replace image backgrounds to quickly switch scenes',
        'features': ['Smart background change', 'Natural blending', 'Multiple templates', 'Custom backgrounds'],
        'icon': 'fa-images',
        'resultLabel': 'After Background Change'
    },
    {
        'filename': 'eraser.html',
        'title': 'AI Magic Eraser',
        'description': 'Intelligently remove unwanted elements from photos and naturally fill in gaps',
        'features': ['Smart erasing', 'Natural filling', 'Multiple erasures', 'Precise control'],
        'icon': 'fa-eraser',
        'resultLabel': 'After Erasing'
    },
    {
        'filename': 'cutout.html',
        'title': 'AI Smart Cutout',
        'description': 'Precise cutout with perfect details, supporting complex scenes',
        'features': ['Precise cutout', 'Perfect details', 'Complex scenes', 'Batch processing'],
        'icon': 'fa-crop',
        'resultLabel': 'After Cutout'
    },
    {
        'filename': 'ai-portrait.html',
        'title': 'AI Portrait ⚡',
        'description': 'AI generates professional portrait photos with multiple style options',
        'features': ['Professional portrait', 'Multiple styles', 'HD output', 'Fast generation'],
        'icon': 'fa-user-circle',
        'resultLabel': 'After Generation'
    },
    {
        'filename': 'cartoonize.html',
        'title': 'AI Photo Cartoonization 🎃',
        'description': 'Convert real photos to cartoon style with multiple artistic effects',
        'features': ['Cartoonization', 'Multiple styles', 'Artistic effects', 'Detail preservation'],
        'icon': 'fa-paintbrush',
        'resultLabel': 'After Cartoonization'
    },
    {
        'filename': 'face-swap.html',
        'title': 'AI Face Swap',
        'description': 'Intelligent face replacement technology for natural and realistic face swapping effects',
        'features': ['Smart face swap', 'Natural blending', 'Expression preservation', 'HD output'],
        'icon': 'fa-theater-masks',
        'resultLabel': 'After Face Swap',
        'badge': 'NEW'
    },
    {
        'filename': 'emoji.html',
        'title': 'AI GIF Stickers',
        'description': 'Create personalized animated stickers, full of fun',
        'features': ['Animated stickers', 'Personal customization', 'Multiple templates', 'One-click generation'],
        'icon': 'fa-grin-squint',
        'resultLabel': 'After Generation'
    },
    {
        'filename': 'pixelate.html',
        'title': 'AI Pixelate Image',
        'description': 'Create retro pixel art style images',
        'features': ['Pixel style', 'Multiple sizes', 'Color adjustment', 'Artistic effects'],
        'icon': 'fa-th',
        'resultLabel': 'After Pixelation'
    },
    {
        'filename': 'christmas.html',
        'title': 'AI Christmas Photo Generator',
        'description': 'Add Christmas themed elements and atmosphere to photos',
        'features': ['Christmas theme', 'Holiday atmosphere', 'Multiple decorations', 'Natural blending'],
        'icon': 'fa-tree',
        'resultLabel': 'After Christmas Effect'
    }
]

def generate_tool_page(config):
    badge_html = f'<span class="badge-new">{config.get("badge")}</span>' if config.get('badge') else ''
    features_html = '\n                        '.join([
        f'<div class="feature-tag"><i class="fas fa-check-circle"></i> {f}</div>'
        for f in config['features']
    ])
    
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-F9K4YK9LXE"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js', new Date());

      gtag('config', 'G-F9K4YK9LXE');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{config['title']} - Free Online AI Image Processing Tool | AITools</title>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6486368477427533"
     crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/tool-page.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="index.html"><span class="logo-text">AITools</span></a>
                    </div>
                    <ul class="nav-menu">
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI Image Upscaling <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="photo-upscale.html">AI Photo Upscaling 🔥</a>
                                <a href="anime-upscale.html">AI Anime Upscaler</a>
                                <a href="photo-sharpen.html">AI Photo Sharpening</a>
                                <a href="face-enhance.html">AI Face Enhancement</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI Enhancement <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="photo-restore.html">AI Photo Restoration ⚡</a>
                                <a href="colorize.html">AI Photo Colorization</a>
                                <a href="denoise.html">AI Image Denoising</a>
                                <a href="compress.html">AI Lossless Image Compression</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI Editing <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="generate-bg.html">AI Background Generation</a>
                                <a href="remove-bg.html">AI Background Removal</a>
                                <a href="change-bg.html">AI Background Changer</a>
                                <a href="eraser.html">AI Magic Eraser</a>
                                <a href="cutout.html">AI Smart Cutout</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI Creation <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="ai-portrait.html">AI Portrait ⚡</a>
                                <a href="cartoonize.html">AI Photo Cartoonization 🎃</a>
                                <a href="face-swap.html">AI Face Swap <span class="badge-new">NEW</span></a>
                                <a href="emoji.html">AI GIF Stickers</a>
                                <a href="pixelate.html">AI Pixelate Image</a>
                                <a href="christmas.html">AI Christmas Photo Generator</a>
                            </div>
                        </li>
                    </ul>
                    <div class="nav-right">
                        <a href="mailto:tankeapp@gmail.com" class="btn-contact">Contact Us</a>
                    </div>
                    <button class="mobile-menu-toggle"><i class="fas fa-bars"></i></button>
                </div>
            </div>
        </nav>
    </header>

    <main class="tool-page">
        <section class="tool-hero">
            <div class="container">
                <div class="tool-hero-content">
                    <h1 class="tool-title">{config['title']} {badge_html}</h1>
                    <p class="tool-description">{config['description']}</p>
                    <div class="tool-features">
                        {features_html}
                    </div>
                </div>
            </div>
        </section>

        <section class="upload-section">
            <div class="container">
                <div class="upload-container">
                    <div class="upload-area" id="uploadArea">
                        <div class="upload-icon"><i class="fas fa-cloud-upload-alt"></i></div>
                        <h3>Drag & Drop Images Here or Click to Upload</h3>
                        <p class="upload-hint">Supports JPG, PNG, WEBP formats, up to 10MB</p>
                        <input type="file" id="fileInput" accept="image/*" hidden>
                        <button class="btn-upload" onclick="document.getElementById('fileInput').click()">
                            <i class="fas fa-folder-open"></i> Select Image
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="process-section" id="processSection" style="display: none;">
            <div class="container">
                <div class="process-container">
                    <div class="image-compare">
                        <div class="image-box">
                            <h3>Original</h3>
                            <div class="image-wrapper">
                                <img id="originalImage" src="" alt="Original">
                            </div>
                        </div>
                        <div class="arrow-icon"><i class="fas fa-arrow-right"></i></div>
                        <div class="image-box">
                            <h3>{config['resultLabel']}</h3>
                            <div class="image-wrapper">
                                <img id="processedImage" src="" alt="{config['resultLabel']}">
                                <div class="processing-overlay" id="processingOverlay">
                                    <div class="spinner"></div>
                                    <p>AI is processing...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button class="btn-secondary" onclick="resetUpload()">
                            <i class="fas fa-redo"></i> Re-upload
                        </button>
                        <button class="btn-primary" id="downloadBtn" style="display: none;">
                            <i class="fas fa-download"></i> Download Processed Image
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="features-detail-section">
            <div class="container">
                <h2 class="section-title">Powerful Features of {config['title']}</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas {config['icon']}"></i></div>
                        <h3>AI Technology</h3>
                        <p>Using the latest AI deep learning algorithms</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-bolt"></i></div>
                        <h3>Fast Processing</h3>
                        <p>High-performance cloud processing completed in seconds</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
                        <h3>Privacy Protection</h3>
                        <p>Encrypted transmission, automatic deletion, privacy protection</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-star"></i></div>
                        <h3>High-quality Output</h3>
                        <p>Professional-level processing effects</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">Company Profile</a></li>
                        <li><a href="mailto:tankeapp@gmail.com">tankeapp@gmail.com</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="index.html">All Tools</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="mailto:tankeapp@gmail.com" onclick="alert('To contact us, please send an email to: tankeapp@gmail.com'); return false;"><i class="fab fa-facebook"></i></a>
                        <a href="mailto:tankeapp@gmail.com" onclick="alert('To contact us, please send an email to: tankeapp@gmail.com'); return false;"><i class="fab fa-twitter"></i></a>
                        <a href="mailto:tankeapp@gmail.com" onclick="alert('To contact us, please send an email to: tankeapp@gmail.com'); return false;"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 AITools. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
    <script src="js/tool.js"></script>
</body>
</html>'''

if __name__ == '__main__':
    import os
    
    output_dir = os.path.dirname(os.path.abspath(__file__))
    print('开始生成工具页面...\\n')
    
    for config in tools_config:
        html = generate_tool_page(config)
        filepath = os.path.join(output_dir, config['filename'])
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"✓ 已生成: {config['filename']} - {config['title']}")
    
    print(f'\\n✅ 成功生成 {len(tools_config)} 个工具页面！')
