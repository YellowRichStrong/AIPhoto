// Tool page configuration data
const toolsConfig = [
    {
        filename: 'anime-upscale.html',
        title: 'AI Anime Upscaler',
        description: 'AI upscaling technology designed specifically for anime and illustrations, perfectly preserving lines and colors',
        category: 'AI Image Upscaling',
        features: ['Anime-specific algorithm', 'Line protection', 'Color restoration', 'Detail enhancement'],
        icon: 'fa-dragon',
        resultLabel: 'After Upscaling'
    },
    {
        filename: 'photo-sharpen.html',
        title: 'AI Image Sharpening',
        description: 'AI intelligently sharpens blurry images, enhancing clarity and detail performance',
        category: 'AI Image Upscaling',
        features: ['Intelligent sharpening', 'Edge enhancement', 'Noise suppression', 'Natural effect'],
        icon: 'fa-adjust',
        resultLabel: 'After Sharpening'
    },
    {
        filename: 'face-enhance.html',
        title: 'AI Face Enhancement',
        description: 'Professional portrait optimization technology to improve face photo quality and details',
        category: 'AI Image Upscaling',
        features: ['Face recognition', 'Skin optimization', 'Detail enhancement', 'Natural beautification'],
        icon: 'fa-smile',
        resultLabel: 'After Enhancement'
    },
    {
        filename: 'colorize.html',
        title: 'AI Image Colorization',
        description: 'Intelligently colorize black and white photos, bringing historical photos back to life',
        category: 'AI Enhancement',
        features: ['Smart colorization', 'Natural colors', 'Scene recognition', 'Multiple styles'],
        icon: 'fa-palette',
        resultLabel: 'After Colorization'
    },
    {
        filename: 'denoise.html',
        title: 'AI Image Denoising',
        description: 'Intelligently remove image noise to enhance image quality and clarity',
        category: 'AI Enhancement',
        features: ['Smart denoising', 'Detail preservation', 'Multi-level denoising', 'Fast processing'],
        icon: 'fa-broom',
        resultLabel: 'After Denoising'
    },
    {
        filename: 'compress.html',
        title: 'AI Lossless Image Compression',
        description: 'Intelligently compress image size while maintaining original quality',
        category: 'AI Enhancement',
        features: ['Smart compression', 'Lossless quality', 'Batch processing', 'Multiple formats'],
        icon: 'fa-compress',
        resultLabel: 'After Compression'
    },
    {
        filename: 'generate-bg.html',
        title: 'AI Background Generation',
        description: 'AI automatically generates professional backgrounds to make photos more outstanding',
        category: 'AI Editing',
        features: ['Smart generation', 'Multiple scenes', 'Natural blending', 'Style options'],
        icon: 'fa-image',
        resultLabel: 'After Generation'
    },
    {
        filename: 'remove-bg.html',
        title: 'AI Background Removal',
        description: 'Automatically identify subjects and accurately remove backgrounds',
        category: 'AI Editing',
        features: ['One-click cutout', 'Precise recognition', 'Edge optimization', 'Transparent background'],
        icon: 'fa-cut',
        resultLabel: 'After Background Removal'
    },
    {
        filename: 'change-bg.html',
        title: 'AI Background Changer',
        description: 'Intelligently replace image backgrounds, quickly achieve scene switching',
        category: 'AI Editing',
        features: ['Smart background change', 'Natural blending', 'Multiple templates', 'Custom backgrounds'],
        icon: 'fa-images',
        resultLabel: 'After Background Change'
    },
    {
        filename: 'eraser.html',
        title: 'AI Magic Eraser',
        description: 'Intelligently remove unwanted elements from photos with natural filling',
        category: 'AI Editing',
        features: ['Smart erasing', 'Natural filling', 'Multiple erasures', 'Precise control'],
        icon: 'fa-eraser',
        resultLabel: 'After Erasing'
    },
    {
        filename: 'cutout.html',
        title: 'AI Smart Cutout',
        description: 'Precise cutout, perfect details, support for complex scenes',
        category: 'AI Editing',
        features: ['Precise cutout', 'Perfect details', 'Complex scenes', 'Batch processing'],
        icon: 'fa-crop',
        resultLabel: 'After Cutout'
    },
    {
        filename: 'ai-portrait.html',
        title: 'AI Portrait Generator ⚡',
        description: 'AI generates professional portrait photos with multiple styles to choose from',
        category: 'AI Creation',
        features: ['Professional portraits', 'Multiple styles', 'High-definition output', 'Quick generation'],
        icon: 'fa-user-circle',
        resultLabel: 'After Generation'
    },
    {
        filename: 'cartoonize.html',
        title: 'AI Photo Cartoonizer 🎃',
        description: 'Transform real photos into cartoon style with multiple artistic effects',
        category: 'AI Creation',
        features: ['Cartoonization', 'Multiple styles', 'Artistic effects', 'Detail preservation'],
        icon: 'fa-paintbrush',
        resultLabel: 'After Cartoonization'
    },
    {
        filename: 'face-swap.html',
        title: 'AI Face Swap',
        description: 'Intelligent face replacement technology, natural and realistic face swap effects',
        category: 'AI Creation',
        features: ['Intelligent face swap', 'Natural blending', 'Expression preservation', 'HD output'],
        icon: 'fa-theater-masks',
        resultLabel: 'After Face Swap',
        badge: 'NEW'
    },
    {
        filename: 'emoji.html',
        title: 'AI GIF Emoji Maker',
        description: 'Create personalized animated emojis, full of fun',
        category: 'AI Creation',
        features: ['Animated emojis', 'Personalized customization', 'Multiple templates', 'One-click generation'],
        icon: 'fa-grin-squint',
        resultLabel: 'After Generation'
    },
    {
        filename: 'pixelate.html',
        title: 'AI Pixel Art Generator',
        description: 'Create retro pixel art style images',
        category: 'AI Creation',
        features: ['Pixel style', 'Multiple sizes', 'Color adjustment', 'Artistic effects'],
        icon: 'fa-th',
        resultLabel: 'After Pixelization'
    },
    {
        filename: 'christmas.html',
        title: 'AI Christmas Photo Generator',
        description: 'Add Christmas theme elements and atmosphere to photos',
        category: 'AI Creation',
        features: ['Christmas themes', 'Holiday atmosphere', 'Multiple decorations', 'Natural blending'],
        icon: 'fa-tree',
        resultLabel: 'After Christmas Theming'
    }
];

// 生成HTML页面的函数
function generateToolPage(config) {
    const badgeHTML = config.badge ? `<span class="badge-new">${config.badge}</span>` : '';
    const featuresHTML = config.features.map(f => 
        `<div class="feature-tag"><i class="fas fa-check-circle"></i> ${f}</div>`
    ).join('\n                        ');
    
    // SEO Meta Tags
    const metaKeywords = `${config.title},AI image processing,AI tools,${config.category},online image editor,free AI tools`;
    const metaDescription = `${config.description} - Free online use, supports multiple image formats, fast processing, privacy protection.`;
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
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1000"
        },
        "featureList": config.features
    });
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title>${config.title} - Free Online AI Image Processing Tool | AITools</title>
    <meta name="title" content="${config.title} - Free Online AI Image Processing Tool">
    <meta name="description" content="${metaDescription}">
    <meta name="keywords" content="${metaKeywords}">
    <meta name="author" content="AITools">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="language" content="English">
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${config.title} - AITools">
    <meta property="og:description" content="${metaDescription}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="AITools">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${canonicalUrl}">
    <meta property="twitter:title" content="${config.title} - AITools">
    <meta property="twitter:description" content="${metaDescription}">
    <meta property="twitter:image" content="${ogImage}">
    
    <!-- Mobile Optimization -->
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="AITools">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    ${jsonLd}
    </script>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon.png">
    
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
                                <a href="photo-upscale.html">AI Image Upscaler 🔥</a>
                                <a href="anime-upscale.html">AI Anime Upscaler</a>
                                <a href="photo-sharpen.html">AI Image Sharpening</a>
                                <a href="face-enhance.html">AI Face Enhancement</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link">AI Enhancement <i class="fas fa-chevron-down"></i></a>
                            <div class="dropdown-menu">
                                <a href="photo-restore.html">AI Photo Restoration ⚡</a>
                                <a href="colorize.html">AI Image Colorization</a>
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
                                <a href="ai-portrait.html">AI Portrait Generator ⚡</a>
                                <a href="cartoonize.html">AI Photo Cartoonizer 🎃</a>
                                <a href="face-swap.html">AI Face Swap <span class="badge-new">NEW</span></a>
                                <a href="emoji.html">AI GIF Emoji Maker</a>
                                <a href="pixelate.html">AI Pixel Art Generator</a>
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
                        <li><a href="#">User Guide</a></li>
                        <li><a href="#">Privacy Policy</a></li>
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
                <p>&copy; 2024 AITools. All rights reserved.</p>
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
