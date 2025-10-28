// 工具页面配置数据
const toolsConfig = [
    {
        filename: 'anime-upscale.html',
        title: 'AI动漫放大神器',
        description: '专为动漫、插画设计的AI放大技术，完美保留线条和色彩',
        category: 'AI 图片放大',
        features: ['动漫专用算法', '线条保护', '色彩还原', '细节增强'],
        icon: 'fa-dragon',
        resultLabel: '放大后'
    },
    {
        filename: 'photo-sharpen.html',
        title: 'AI图像锐化',
        description: 'AI智能锐化模糊图片，提升清晰度和细节表现',
        category: 'AI 图片放大',
        features: ['智能锐化', '边缘增强', '噪点抑制', '自然效果'],
        icon: 'fa-adjust',
        resultLabel: '锐化后'
    },
    {
        filename: 'face-enhance.html',
        title: 'AI人脸增强',
        description: '专业的人像优化技术，提升人脸照片质量和细节',
        category: 'AI 图片放大',
        features: ['人脸识别', '肤质优化', '细节增强', '自然美颜'],
        icon: 'fa-smile',
        resultLabel: '增强后'
    },
    {
        filename: 'colorize.html',
        title: 'AI图片上色',
        description: '为黑白照片智能上色，让历史照片重现色彩',
        category: 'AI 增强',
        features: ['智能上色', '色彩自然', '场景识别', '多种风格'],
        icon: 'fa-palette',
        resultLabel: '上色后'
    },
    {
        filename: 'denoise.html',
        title: 'AI图片去噪',
        description: '智能去除图片噪点，提升画质清晰度',
        category: 'AI 增强',
        features: ['智能降噪', '细节保护', '多级降噪', '快速处理'],
        icon: 'fa-broom',
        resultLabel: '去噪后'
    },
    {
        filename: 'compress.html',
        title: 'AI图片无损压缩',
        description: '智能压缩图片大小，保持原始画质',
        category: 'AI 增强',
        features: ['智能压缩', '无损画质', '批量处理', '多种格式'],
        icon: 'fa-compress',
        resultLabel: '压缩后'
    },
    {
        filename: 'generate-bg.html',
        title: 'AI智能生成背景',
        description: 'AI自动生成专业背景，让照片更加出彩',
        category: 'AI 编辑',
        features: ['智能生成', '多种场景', '自然融合', '风格可选'],
        icon: 'fa-image',
        resultLabel: '生成后'
    },
    {
        filename: 'remove-bg.html',
        title: 'AI一键去背景',
        description: '自动识别主体，精准抠图去除背景',
        category: 'AI 编辑',
        features: ['一键抠图', '精准识别', '边缘优化', '透明背景'],
        icon: 'fa-cut',
        resultLabel: '去背景后'
    },
    {
        filename: 'change-bg.html',
        title: 'AI智能换背景',
        description: '智能替换图片背景，快速实现场景切换',
        category: 'AI 编辑',
        features: ['智能换背景', '自然融合', '多种模板', '自定义背景'],
        icon: 'fa-images',
        resultLabel: '换背景后'
    },
    {
        filename: 'eraser.html',
        title: 'AI神奇擦除笔',
        description: '智能移除照片中的不需要元素，自然填补',
        category: 'AI 编辑',
        features: ['智能擦除', '自然填补', '多次擦除', '精准控制'],
        icon: 'fa-eraser',
        resultLabel: '擦除后'
    },
    {
        filename: 'cutout.html',
        title: 'AI智能抠图',
        description: '精准抠图，细节完美，支持复杂场景',
        category: 'AI 编辑',
        features: ['精准抠图', '细节完美', '复杂场景', '批量处理'],
        icon: 'fa-crop',
        resultLabel: '抠图后'
    },
    {
        filename: 'ai-portrait.html',
        title: 'AI写真 ⚡',
        description: 'AI生成专业写真照片，多种风格可选',
        category: 'AI 创造',
        features: ['专业写真', '多种风格', '高清输出', '快速生成'],
        icon: 'fa-user-circle',
        resultLabel: '生成后'
    },
    {
        filename: 'cartoonize.html',
        title: 'AI照片卡通化 🎃',
        description: '将真实照片转换为卡通风格，多种艺术效果',
        category: 'AI 创造',
        features: ['卡通化', '多种风格', '艺术效果', '细节保留'],
        icon: 'fa-paintbrush',
        resultLabel: '卡通化后'
    },
    {
        filename: 'face-swap.html',
        title: 'AI智能换脸',
        description: '智能人脸替换技术，自然逼真的换脸效果',
        category: 'AI 创造',
        features: ['智能换脸', '自然融合', '表情保持', '高清输出'],
        icon: 'fa-theater-masks',
        resultLabel: '换脸后',
        badge: 'NEW'
    },
    {
        filename: 'emoji.html',
        title: 'AI动图表情包',
        description: '制作个性化动态表情包，趣味十足',
        category: 'AI 创造',
        features: ['动态表情', '个性定制', '多种模板', '一键生成'],
        icon: 'fa-grin-squint',
        resultLabel: '生成后'
    },
    {
        filename: 'pixelate.html',
        title: 'AI像素化图像',
        description: '创建复古像素艺术风格图片',
        category: 'AI 创造',
        features: ['像素风格', '多种尺寸', '色彩调节', '艺术效果'],
        icon: 'fa-th',
        resultLabel: '像素化后'
    },
    {
        filename: 'christmas.html',
        title: 'AI圣诞照片生成器',
        description: '为照片添加圣诞主题元素和氛围',
        category: 'AI 创造',
        features: ['圣诞主题', '节日氛围', '多种装饰', '自然融合'],
        icon: 'fa-tree',
        resultLabel: '圣诞化后'
    }
];

// 生成HTML页面的函数
function generateToolPage(config) {
    const badgeHTML = config.badge ? `<span class="badge-new">${config.badge}</span>` : '';
    const featuresHTML = config.features.map(f => 
        `<div class="feature-tag"><i class="fas fa-check-circle"></i> ${f}</div>`
    ).join('\n                        ');
    
    // SEO Meta Tags
    const metaKeywords = `${config.title},AI图片处理,AI工具,图片${config.category.replace('AI ', '')},在线图片编辑,${config.category}`;
    const metaDescription = `${config.description} - 免费在线使用，支持多种图片格式，快速处理，保护隐私。`;
    const canonicalUrl = `https://aitoday.me.uk/${config.filename}`;
    const ogImage = `https://aitoday.me.uk/images/${config.filename.replace('.html', '.jpg')}`;
    
    // Generate JSON-LD structured data
    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": config.title,
        "description": config.description,
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "CNY"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1000"
        },
        "featureList": config.features
    });
    
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title>${config.title} - 免费在线AI图片处理工具 | Nero AI</title>
    <meta name="title" content="${config.title} - 免费在线AI图片处理工具">
    <meta name="description" content="${metaDescription}">
    <meta name="keywords" content="${metaKeywords}">
    <meta name="author" content="Nero AI">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="language" content="Chinese">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${config.title} - Nero AI">
    <meta property="og:description" content="${metaDescription}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Nero AI">
    <meta property="og:locale" content="zh_CN">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${canonicalUrl}">
    <meta property="twitter:title" content="${config.title} - Nero AI">
    <meta property="twitter:description" content="${metaDescription}">
    <meta property="twitter:image" content="${ogImage}">
    
    <!-- Mobile Optimization -->
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Nero AI">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    ${jsonLd}
    </script>
    
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
                        <a href="index.html"><span class="logo-text">Nero AI</span></a>
                    </div>
                    <ul class="nav-menu">
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI 图片放大 <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="photo-upscale.html">AI图片放大 🔥</a>
                                <a href="anime-upscale.html">AI动漫放大神器</a>
                                <a href="photo-sharpen.html">AI图像锐化</a>
                                <a href="face-enhance.html">AI人脸增强</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI 增强 <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="photo-restore.html">AI老照片修复 ⚡</a>
                                <a href="colorize.html">AI图片上色</a>
                                <a href="denoise.html">AI图片去噪</a>
                                <a href="compress.html">AI图片无损压缩</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI 编辑 <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="generate-bg.html">AI智能生成背景</a>
                                <a href="remove-bg.html">AI一键去背景</a>
                                <a href="change-bg.html">AI智能换背景</a>
                                <a href="eraser.html">AI神奇擦除笔</a>
                                <a href="cutout.html">AI智能抠图</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI 创造 <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="ai-portrait.html">AI写真 ⚡</a>
                                <a href="cartoonize.html">AI照片卡通化 🎃</a>
                                <a href="face-swap.html">AI智能换脸 <span class="badge-new">NEW</span></a>
                                <a href="emoji.html">AI动图表情包</a>
                                <a href="pixelate.html">AI像素化图像</a>
                                <a href="christmas.html">AI圣诞照片生成器</a>
                            </div>
                        </li>
                    </ul>
                    <div class="nav-right">
                        <a href="mailto:tankeapp@gmail.com" class="btn-contact">联系我们</a>
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
                    <h1 class="tool-title">${config.title} ${badgeHTML}</h1>
                    <p class="tool-description">${config.description}</p>
                    <div class="tool-features">
                        ${featuresHTML}
                    </div>
                </div>
            </div>
        </section>

        <section class="upload-section">
            <div class="container">
                <div class="upload-container">
                    <div class="upload-area" id="uploadArea">
                        <div class="upload-icon"><i class="fas fa-cloud-upload-alt"></i></div>
                        <h3>拖放图片到这里或点击上传</h3>
                        <p class="upload-hint">支持 JPG、PNG、WEBP 格式，最大 10MB</p>
                        <input type="file" id="fileInput" accept="image/*" hidden>
                        <button class="btn-upload" onclick="document.getElementById('fileInput').click()">
                            <i class="fas fa-folder-open"></i> 选择图片
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
                            <h3>原图</h3>
                            <div class="image-wrapper">
                                <img id="originalImage" src="" alt="原图">
                            </div>
                        </div>
                        <div class="arrow-icon"><i class="fas fa-arrow-right"></i></div>
                        <div class="image-box">
                            <h3>${config.resultLabel}</h3>
                            <div class="image-wrapper">
                                <img id="processedImage" src="" alt="${config.resultLabel}">
                                <div class="processing-overlay" id="processingOverlay">
                                    <div class="spinner"></div>
                                    <p>AI正在处理中...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button class="btn-secondary" onclick="resetUpload()">
                            <i class="fas fa-redo"></i> 重新上传
                        </button>
                        <button class="btn-primary" id="downloadBtn" style="display: none;">
                            <i class="fas fa-download"></i> 下载处理后的图片
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="features-detail-section">
            <div class="container">
                <h2 class="section-title">${config.title}的强大功能</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas ${config.icon}"></i></div>
                        <h3>AI技术</h3>
                        <p>采用最新的AI深度学习算法</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-bolt"></i></div>
                        <h3>快速处理</h3>
                        <p>云端高性能处理，秒级完成</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
                        <h3>隐私保护</h3>
                        <p>加密传输，自动删除，保护隐私</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><i class="fas fa-star"></i></div>
                        <h3>高质量输出</h3>
                        <p>专业级的处理效果</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>关于我们</h4>
                    <ul>
                        <li><a href="#">公司简介</a></li>
                        <li><a href="mailto:tankeapp@gmail.com">tankeapp@gmail.com</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>产品</h4>
                    <ul>
                        <li><a href="index.html">所有工具</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>帮助</h4>
                    <ul>
                        <li><a href="#">使用指南</a></li>
                        <li><a href="#">隐私政策</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>关注我们</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Nero AI. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
    <script src="js/tool.js"></script>
</body>
</html>`;
}

// 导出配置供Node.js使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toolsConfig, generateToolPage };
}
