// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // 语言切换功能
    const languageSelector = document.querySelector('.language-selector');
    const languageBtn = document.querySelector('.language-btn');
    const languageOptions = document.querySelectorAll('.language-option');
    
    console.log('语言选择器元素:', languageSelector);
    console.log('语言按钮:', languageBtn);
    console.log('语言选项数量:', languageOptions.length);
    
    // 点击按钮切换菜单显示/隐藏
    if (languageBtn) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('点击语言按钮');
            languageSelector.classList.toggle('active');
        });
    }
    
    // 点击语言选项
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const lang = this.getAttribute('data-lang');
            const fullText = this.textContent.trim();
            
            console.log('点击语言选项:', lang, fullText);
            
            // 提取语言名称（去掉emoji旗帜）
            let langName = fullText.split(' ').slice(1).join(' ').trim();
            if (!langName) langName = fullText;
            
            console.log('提取的语言名称:', langName);
            
            // 更新当前选中状态
            languageOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // 更新按钮显示的语言 - 使用多种方法确保更新成功
            const btnSpan = languageBtn.querySelector('span');
            console.log('按钮内的span元素:', btnSpan);
            
            if (btnSpan) {
                btnSpan.textContent = langName;
                btnSpan.innerText = langName;
                console.log('已更新按钮文字为:', btnSpan.textContent);
            } else {
                console.error('未找到.language-btn span元素！');
            }
            
            // 关闭菜单
            languageSelector.classList.remove('active');
            
            // 切换语言内容
            if (typeof changeLanguage === 'function') {
                changeLanguage(lang);
            }
            
            console.log('切换语言到:', lang, langName);
            
            // 显示切换成功通知
            showLanguageNotification(langName);
        });
    });
    
    // 点击页面其他地方关闭语言菜单
    document.addEventListener('click', function(e) {
        if (languageSelector && !languageSelector.contains(e.target)) {
            languageSelector.classList.remove('active');
        }
    });
    
    // 显示语言切换通知
    function showLanguageNotification(langName) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
            animation: slideIn 0.3s ease-out;
        `;
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>语言已切换为：${langName}</span>
        `;
        document.body.appendChild(notification);
        
        // 添加动画样式
        if (!document.getElementById('notification-style')) {
            const style = document.createElement('style');
            style.id = 'notification-style';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // 2秒后移除提示
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 2000);
    }
    
    // Newsletter表单提交
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('感谢订阅！我们将向 ' + email + ' 发送最新资讯。');
            this.reset();
        });
    }
    
    // 平滑滚动
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 初始化语言
    if (typeof initI18n === 'function') {
        initI18n();
    }
});
