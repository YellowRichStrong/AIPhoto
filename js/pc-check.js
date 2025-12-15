// AI Model Compatibility Checker

let hardwareData = null;

// Popular AI models database with requirements
const aiModelsDatabase = [
    // DeepSeek Models
    { name: 'DeepSeek-V3-671B', provider: 'DeepSeek', size: '671B', fp16: 1342, int8: 671, int4: 336, ram: 800, category: 'Large Language Model' },
    { name: 'DeepSeek-R1-671B', provider: 'DeepSeek', size: '671B', fp16: 1342, int8: 671, int4: 336, ram: 800, category: 'Reasoning Model' },
    { name: 'DeepSeek-Coder-33B', provider: 'DeepSeek', size: '33B', fp16: 66, int8: 33, int4: 17, ram: 40, category: 'Code Model' },
    { name: 'DeepSeek-V2.5-236B', provider: 'DeepSeek', size: '236B', fp16: 472, int8: 236, int4: 118, ram: 280, category: 'Large Language Model' },
    
    // Meta Llama Models
    { name: 'Llama-3.3-70B', provider: 'Meta', size: '70B', fp16: 140, int8: 70, int4: 35, ram: 84, category: 'Large Language Model' },
    { name: 'Llama-3.1-405B', provider: 'Meta', size: '405B', fp16: 810, int8: 405, int4: 203, ram: 486, category: 'Large Language Model' },
    { name: 'Llama-3.1-70B', provider: 'Meta', size: '70B', fp16: 140, int8: 70, int4: 35, ram: 84, category: 'Large Language Model' },
    { name: 'Llama-3.1-8B', provider: 'Meta', size: '8B', fp16: 16, int8: 8, int4: 4, ram: 10, category: 'Large Language Model' },
    { name: 'Llama-2-70B', provider: 'Meta', size: '70B', fp16: 140, int8: 70, int4: 35, ram: 84, category: 'Large Language Model' },
    { name: 'Llama-2-13B', provider: 'Meta', size: '13B', fp16: 26, int8: 13, int4: 7, ram: 16, category: 'Large Language Model' },
    { name: 'Llama-2-7B', provider: 'Meta', size: '7B', fp16: 14, int8: 7, int4: 4, ram: 8, category: 'Large Language Model' },
    
    // Alibaba Qwen Models
    { name: 'Qwen2.5-72B', provider: 'Alibaba', size: '72B', fp16: 144, int8: 72, int4: 36, ram: 86, category: 'Large Language Model' },
    { name: 'Qwen2.5-32B', provider: 'Alibaba', size: '32B', fp16: 64, int8: 32, int4: 16, ram: 38, category: 'Large Language Model' },
    { name: 'Qwen2.5-14B', provider: 'Alibaba', size: '14B', fp16: 28, int8: 14, int4: 7, ram: 17, category: 'Large Language Model' },
    { name: 'Qwen2.5-7B', provider: 'Alibaba', size: '7B', fp16: 14, int8: 7, int4: 4, ram: 8, category: 'Large Language Model' },
    { name: 'Qwen2.5-Coder-32B', provider: 'Alibaba', size: '32B', fp16: 64, int8: 32, int4: 16, ram: 38, category: 'Code Model' },
    { name: 'Qwen2.5-Math-72B', provider: 'Alibaba', size: '72B', fp16: 144, int8: 72, int4: 36, ram: 86, category: 'Math Model' },
    
    // Mistral Models
    { name: 'Mixtral-8x22B', provider: 'Mistral', size: '176B', fp16: 352, int8: 176, int4: 88, ram: 211, category: 'MoE Model' },
    { name: 'Mixtral-8x7B', provider: 'Mistral', size: '56B', fp16: 112, int8: 56, int4: 28, ram: 67, category: 'MoE Model' },
    { name: 'Mistral-7B-v0.3', provider: 'Mistral', size: '7B', fp16: 14, int8: 7, int4: 4, ram: 8, category: 'Large Language Model' },
    
    // Google Gemma Models
    { name: 'Gemma-2-27B', provider: 'Google', size: '27B', fp16: 54, int8: 27, int4: 14, ram: 32, category: 'Large Language Model' },
    { name: 'Gemma-2-9B', provider: 'Google', size: '9B', fp16: 18, int8: 9, int4: 5, ram: 11, category: 'Large Language Model' },
    { name: 'Gemma-7B', provider: 'Google', size: '7B', fp16: 14, int8: 7, int4: 4, ram: 8, category: 'Large Language Model' },
    
    // Yi Models
    { name: 'Yi-1.5-34B', provider: '01.AI', size: '34B', fp16: 68, int8: 34, int4: 17, ram: 41, category: 'Large Language Model' },
    { name: 'Yi-1.5-9B', provider: '01.AI', size: '9B', fp16: 18, int8: 9, int4: 5, ram: 11, category: 'Large Language Model' },
    { name: 'Yi-1.5-6B', provider: '01.AI', size: '6B', fp16: 12, int8: 6, int4: 3, ram: 7, category: 'Large Language Model' },
    
    // Phi Models
    { name: 'Phi-3.5-MoE-16B', provider: 'Microsoft', size: '16B', fp16: 32, int8: 16, int4: 8, ram: 19, category: 'MoE Model' },
    { name: 'Phi-3-14B', provider: 'Microsoft', size: '14B', fp16: 28, int8: 14, int4: 7, ram: 17, category: 'Large Language Model' },
    { name: 'Phi-3-7B', provider: 'Microsoft', size: '7B', fp16: 14, int8: 7, int4: 4, ram: 8, category: 'Large Language Model' },
    { name: 'Phi-3-3.8B', provider: 'Microsoft', size: '3.8B', fp16: 8, int8: 4, int4: 2, ram: 5, category: 'Large Language Model' },
];

// Start compatibility check
async function startCompatibilityCheck() {
    const button = document.querySelector('.btn-check');
    const hardwareInfo = document.getElementById('hardwareInfo');
    const compatibleModels = document.getElementById('compatibleModels');
    const modelRequirementsTable = document.getElementById('modelRequirementsTable');

    // Disable button and show loading
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Detecting Hardware...';

    // Simulate detection delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
        // Detect hardware
        const hardware = detectHardware();
        
        // Store data
        hardwareData = hardware;

        // Display hardware info
        displayHardwareInfo(hardware);
        hardwareInfo.style.display = 'block';

        // Display compatible models
        displayCompatibleModels(hardware);

        // Show requirements table
        displayRequirementsTable(hardware);
        modelRequirementsTable.style.display = 'block';

        // Re-enable button
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-redo"></i> Re-detect Hardware';

    } catch (error) {
        console.error('Hardware detection failed:', error);
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Detection Failed - Retry';
    }
}

// Detect hardware specifications
function detectHardware() {
    const nav = navigator;
    const ua = nav.userAgent;
    
    // Detect OS
    let os = 'Unknown';
    if (ua.indexOf('Win') !== -1) os = 'Windows';
    else if (ua.indexOf('Mac') !== -1) os = 'macOS';
    else if (ua.indexOf('Linux') !== -1) os = 'Linux';
    else if (ua.indexOf('Android') !== -1) os = 'Android';
    else if (ua.indexOf('iOS') !== -1) os = 'iOS';

    // Detect CPU cores
    const cpuCores = nav.hardwareConcurrency || 4;

    // Detect system memory (estimate)
    let systemRAM = 8; // Default 8GB
    if (nav.deviceMemory) {
        systemRAM = nav.deviceMemory;
    }

    // Detect GPU info
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    let gpuVendor = 'Unknown';
    let gpuRenderer = 'Unknown';
    let vramEstimate = 2; // Default 2GB
    
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            gpuVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            gpuRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            
            // Estimate VRAM based on GPU model
            vramEstimate = estimateVRAM(gpuRenderer);
        }
    }

    return {
        os,
        cpuCores,
        systemRAM,
        gpuVendor,
        gpuRenderer,
        vram: vramEstimate
    };
}

// Estimate VRAM from GPU renderer string
function estimateVRAM(renderer) {
    const r = renderer.toLowerCase();
    
    // NVIDIA GPUs
    if (r.includes('rtx 4090')) return 24;
    if (r.includes('rtx 4080')) return 16;
    if (r.includes('rtx 4070')) return 12;
    if (r.includes('rtx 4060')) return 8;
    if (r.includes('rtx 3090')) return 24;
    if (r.includes('rtx 3080')) return 10;
    if (r.includes('rtx 3070')) return 8;
    if (r.includes('rtx 3060')) return 12;
    if (r.includes('rtx 2080')) return 8;
    if (r.includes('rtx 2070')) return 8;
    if (r.includes('rtx 2060')) return 6;
    if (r.includes('gtx 1080')) return 8;
    if (r.includes('gtx 1070')) return 8;
    if (r.includes('gtx 1060')) return 6;
    
    // AMD GPUs
    if (r.includes('rx 7900')) return 24;
    if (r.includes('rx 7800')) return 16;
    if (r.includes('rx 7700')) return 12;
    if (r.includes('rx 6900')) return 16;
    if (r.includes('rx 6800')) return 16;
    if (r.includes('rx 6700')) return 12;
    if (r.includes('rx 6600')) return 8;
    
    // Apple Silicon
    if (r.includes('m3 max')) return 48;
    if (r.includes('m3 pro')) return 18;
    if (r.includes('m3')) return 8;
    if (r.includes('m2 ultra')) return 76;
    if (r.includes('m2 max')) return 32;
    if (r.includes('m2 pro')) return 16;
    if (r.includes('m2')) return 8;
    if (r.includes('m1 ultra')) return 64;
    if (r.includes('m1 max')) return 32;
    if (r.includes('m1 pro')) return 16;
    if (r.includes('m1')) return 8;
    
    // Intel GPUs
    if (r.includes('arc a770')) return 16;
    if (r.includes('arc a750')) return 8;
    if (r.includes('arc a580')) return 8;
    if (r.includes('iris')) return 4;
    
    // Default for integrated/unknown GPUs
    return 2;
}

// Display hardware information
function displayHardwareInfo(hardware) {
    const hardwareInfo = document.getElementById('hardwareInfo');
    
    hardwareInfo.innerHTML = `
        <div class="hardware-item">
            <span class="hardware-label"><i class="fas fa-laptop"></i> Operating System</span>
            <span class="hardware-value">${hardware.os}</span>
        </div>
        <div class="hardware-item">
            <span class="hardware-label"><i class="fas fa-microchip"></i> CPU Cores</span>
            <span class="hardware-value">${hardware.cpuCores} Cores</span>
        </div>
        <div class="hardware-item">
            <span class="hardware-label"><i class="fas fa-memory"></i> System RAM</span>
            <span class="hardware-value highlight">${hardware.systemRAM} GB</span>
        </div>
        <div class="hardware-item">
            <span class="hardware-label"><i class="fas fa-video"></i> GPU VRAM</span>
            <span class="hardware-value highlight">${hardware.vram} GB</span>
        </div>
        <div class="hardware-item">
            <span class="hardware-label"><i class="fas fa-desktop"></i> GPU Model</span>
            <span class="hardware-value">${hardware.gpuRenderer.substring(0, 40)}${hardware.gpuRenderer.length > 40 ? '...' : ''}</span>
        </div>
    `;
}

// Display compatible models
function displayCompatibleModels(hardware) {
    const compatibleModels = document.getElementById('compatibleModels');
    
    // Filter models by compatibility (using INT4 quantization)
    const compatibleList = aiModelsDatabase
        .filter(model => model.int4 <= hardware.vram && model.ram <= hardware.systemRAM)
        .sort((a, b) => b.int4 - a.int4)
        .slice(0, 8); // Top 8 compatible models
    
    const incompatibleList = aiModelsDatabase
        .filter(model => model.int4 > hardware.vram || model.ram > hardware.systemRAM)
        .sort((a, b) => a.int4 - b.int4)
        .slice(0, 4); // Show 4 incompatible models
    
    if (compatibleList.length === 0) {
        compatibleModels.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Your hardware cannot run most AI models. Consider upgrading GPU memory.</p>
            </div>
        `;
        return;
    }
    
    let html = '<div style="margin-bottom: 1rem; color: #27ae60; font-weight: 600;">';
    html += `<i class="fas fa-check-circle"></i> ${compatibleList.length} models can run on your PC (INT4 quantization)</div>`;
    
    compatibleList.forEach(model => {
        html += `
            <div class="model-item">
                <div class="model-item-header">
                    <span class="model-item-name">${model.name}</span>
                    <span class="model-item-status compatible">✓ Compatible</span>
                </div>
                <div class="model-item-info">
                    <strong>${model.provider}</strong> | ${model.size} parameters<br>
                    Requires: ${model.int4} GB VRAM (INT4) | ${model.ram} GB RAM
                </div>
            </div>
        `;
    });
    
    if (incompatibleList.length > 0) {
        html += '<div style="margin: 1.5rem 0 1rem; color: #e74c3c; font-weight: 600;">';
        html += `<i class="fas fa-times-circle"></i> Examples of models you cannot run:</div>`;
        
        incompatibleList.forEach(model => {
            html += `
                <div class="model-item not-compatible">
                    <div class="model-item-header">
                        <span class="model-item-name">${model.name}</span>
                        <span class="model-item-status not-compatible">✗ Not Compatible</span>
                    </div>
                    <div class="model-item-info">
                        <strong>${model.provider}</strong> | ${model.size} parameters<br>
                        Requires: ${model.int4} GB VRAM (INT4) | ${model.ram} GB RAM
                    </div>
                </div>
            `;
        });
    }
    
    compatibleModels.innerHTML = html;
}

// Display requirements table
function displayRequirementsTable(hardware) {
    const tbody = document.getElementById('requirementsTableBody');
    
    tbody.innerHTML = aiModelsDatabase.map(model => {
        // Check compatibility with different quantization formats
        const canRunFP16 = model.fp16 <= hardware.vram && model.ram <= hardware.systemRAM;
        const canRunINT8 = model.int8 <= hardware.vram && model.ram <= hardware.systemRAM;
        const canRunINT4 = model.int4 <= hardware.vram && model.ram <= hardware.systemRAM;
        
        let status = '';
        let statusClass = '';
        
        if (canRunFP16) {
            status = 'Can Run (FP16)';
            statusClass = 'recommended';
        } else if (canRunINT8) {
            status = 'Can Run (INT8)';
            statusClass = 'can-run';
        } else if (canRunINT4) {
            status = 'Can Run (INT4)';
            statusClass = 'can-run';
        } else {
            status = 'Cannot Run';
            statusClass = 'cannot-run';
        }
        
        return `
            <tr>
                <td><strong>${model.name}</strong><br><small style="color: #999;">${model.provider}</small></td>
                <td>${model.size}</td>
                <td>${model.fp16} GB</td>
                <td>${model.int8} GB</td>
                <td>${model.int4} GB</td>
                <td>${model.ram} GB</td>
                <td><span class="status-badge ${statusClass}">${status}</span></td>
            </tr>
        `;
    }).join('');
}
