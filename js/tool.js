// 工具页面交互逻辑

let originalImageData = null;
let currentFile = null;

// 前端模拟处理（不调用后端API）
const SIMULATE_PROCESSING = true;
const PROCESSING_DELAY = 3000; // 3秒模拟处理时间

document.addEventListener('DOMContentLoaded', function() {
    initializeUpload();
    initializeFAQ();
});

// 初始化上传功能
function initializeUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    
    if (!uploadArea || !fileInput) return;
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });
    
    // 文件选择上传
    fileInput.addEventListener('change', function(e) {
        if (this.files.length > 0) {
            handleFile(this.files[0]);
        }
    });
}

// 处理上传的文件
function handleFile(file) {
    // 验证文件类型
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
        alert('Please upload JPG, PNG, or WEBP format images');
        return;
    }
    
    // 验证文件大小 (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
        alert('Image size cannot exceed 10MB');
        return;
    }
    
    // 保存当前文件
    currentFile = file;
    
    // 读取文件用于显示原图
    const reader = new FileReader();
    reader.onload = function(e) {
        originalImageData = e.target.result;
        displayImages(originalImageData);
        
        // 使用前端模拟处理
        if (SIMULATE_PROCESSING) {
            simulateProcessing(originalImageData);
        } else {
            // 调用后端API处理图片（需要后端服务运行）
            processWithAPI(currentFile);
        }
    };
    reader.readAsDataURL(file);
}

// 显示图片并开始处理
function displayImages(imageData) {
    const processSection = document.getElementById('processSection');
    const originalImage = document.getElementById('originalImage');
    const processedImage = document.getElementById('processedImage');
    const processingOverlay = document.getElementById('processingOverlay');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // 显示处理区域
    processSection.style.display = 'block';
    processSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // 显示原图
    originalImage.src = imageData;
    
    // 显示处理中状态
    processingOverlay.style.display = 'flex';
    processedImage.src = imageData;
    downloadBtn.style.display = 'none';
    
    // 注意：实际处理由processWithAPI函数调用
}

// 前端模拟处理（用于演示）
function simulateProcessing(imageData) {
    const processedImage = document.getElementById('processedImage');
    const processingOverlay = document.getElementById('processingOverlay');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // 模拟处理延迟
    setTimeout(() => {
        // 处理完成，显示结果（这里使用原图作为结果图）
        processedImage.src = imageData;
        processingOverlay.style.display = 'none';
        downloadBtn.style.display = 'inline-flex';
        
        // 添加下载功能
        downloadBtn.onclick = function() {
            const filename = currentFile.name.split('.')[0] + '_processed.png';
            downloadImage(imageData, filename);
        };
    }, PROCESSING_DELAY);
}

// 调用后端API处理图片
async function processWithAPI(file) {
    const processedImage = document.getElementById('processedImage');
    const processingOverlay = document.getElementById('processingOverlay');
    const downloadBtn = document.getElementById('downloadBtn');
    
    try {
        // 根据当前页面确定API端点
        const apiEndpoint = getAPIEndpoint();
        
        // 创建FormData
        const formData = new FormData();
        formData.append('image', file);
        
        // 发送请求
        const response = await fetch(`${API_BASE_URL}/${apiEndpoint}`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || '处理失败');
        }
        
        // 获取处理后的图片
        const blob = await response.blob();
        const resultUrl = URL.createObjectURL(blob);
        
        // 显示结果
        processedImage.src = resultUrl;
        processingOverlay.style.display = 'none';
        downloadBtn.style.display = 'inline-flex';
        
        // 添加下载功能
        downloadBtn.onclick = function() {
            const filename = file.name.split('.')[0] + '_processed.png';
            downloadImage(processedImage.src, filename);
        };
        
    } catch (error) {
        console.error('Processing failed:', error);
        alert('Image processing failed: ' + error.message + '\n\nNote: This is a demo site. Backend service is not running.');
        processingOverlay.style.display = 'none';
    }
}

// 根据当前页面获取API端点
function getAPIEndpoint() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    // 根据文件名返回对应的API端点
    const endpointMap = {
        'remove-bg.html': 'photo-remove-bg',
        'photo-upscale.html': 'photo-upscale',
        'photo-restore.html': 'photo-restore',
        'denoise.html': 'photo-denoise',
        // 更多映射...
    };
    
    return endpointMap[filename] || 'photo-restore'; // 默认
}

// 重置上传
function resetUpload() {
    const processSection = document.getElementById('processSection');
    const fileInput = document.getElementById('fileInput');
    
    processSection.style.display = 'none';
    fileInput.value = '';
    originalImageData = null;
    
    // 滚动到上传区域
    const uploadSection = document.querySelector('.upload-section');
    uploadSection.scrollIntoView({ behavior: 'smooth' });
}

// 下载图片
function downloadImage(dataUrl, filename) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 初始化FAQ折叠功能
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // 关闭其他FAQ
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 切换当前FAQ
            item.classList.toggle('active');
        });
    });
}

// 导出函数供HTML调用
window.resetUpload = resetUpload;
