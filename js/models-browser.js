// Models Browser Module - Complete Model Database

// Pagination variables
let currentPage = 1;
const modelsPerPage = 30;

// Provider logo configuration (using real logo URLs)
const providerLogos = {
    'OpenAI': 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
    'Anthropic': 'https://mintlify.s3-us-west-1.amazonaws.com/anthropic/logo/light.svg',
    'Google': 'https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png',
    'Alibaba': 'https://img.alicdn.com/imgextra/i1/O1CN01Z5paXz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
    'DeepSeek': 'https://api.deepseek.com/static/media/logo.svg',
    'Bytedance': 'https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/douyin_pc/resource/logo_24f0c8ee.png',
    'Baidu': 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
    'xAI': 'https://x.ai/favicon.svg',
    'Tencent': 'https://gtimg.qq.com/qcloud/ui/static/logo.png',
    'Moonshot': 'https://platform.moonshot.cn/logo.svg',
    'MiniMax': 'https://www.minimaxi.com/favicon.svg',
    'Zhipu AI': 'https://open.bigmodel.cn/static/zhipu-logo.svg',
    'SenseTime': 'https://www.sensetime.com/public/image/logo.svg',
    'Mistral': 'https://docs.mistral.ai/img/logo.svg',
    'Meta': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png',
    'Cohere': 'https://cohere.com/_next/image?url=%2Fimages%2Fcohere-logo.png&w=256&q=75',
    'iFlytek': 'https://www.iflytek.com/favicon.ico',
    '01.AI': 'https://www.lingyiwanwu.com/favicon.ico',
    'Stability AI': 'https://cdn.prod.website-files.com/6626dff1935c6ea94eb08b22/662a70b5e5c3c2fc9c2d1e6f_StabilityAI_Logo.svg',
    'Midjourney': 'https://cdn.midjourney.com/b421c856-9031-467c-af6f-eb00c8f7bf47/0_2.png',
    'Baichuan': 'https://platform.baichuan-ai.com/favicon.ico',
    'OpenBMB': 'https://avatars.githubusercontent.com/u/97369466?s=200&v=4',
    'Shanghai AI Lab': 'https://www.shlab.org.cn/images/logo.png',
    'Stepfun': 'https://platform.stepfun.com/favicon.ico',
    'Runway': 'https://assets-global.website-files.com/6502f10dd78ceb3e0e1bd0f3/654818e924a6c38c67a74010_Runway%20Logomark.svg',
    'AWS': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    'Microsoft Azure': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    'Perplexity': 'https://www.perplexity.ai/favicon.svg',
    'Together AI': 'https://avatars.githubusercontent.com/u/74727279?s=200&v=4',
    'Replicate': 'https://replicate.com/favicon.svg',
    '360 AI': 'https://www.360.cn/favicon.ico',
    'Abacus AI': 'https://abacus.ai/logo.svg',
    'NousResearch': 'https://avatars.githubusercontent.com/u/114862928?s=200&v=4',
    'Groq': 'https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg',
    'Reka AI': 'https://www.reka.ai/favicon.svg',
    'AI21 Labs': 'https://www.ai21.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.svg&w=256&q=75',
    'Fireworks AI': 'https://fireworks.ai/logo.svg',
    'Hugging Face': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    'LMSYS': 'https://avatars.githubusercontent.com/u/102393977?s=200&v=4',
    'WizardLM': 'https://avatars.githubusercontent.com/u/131929464?s=200&v=4',
    'Microsoft': 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    'Playground AI': 'https://playground.com/favicon.svg',
    'Sber AI': 'https://cdn-ru.sberdevices.ru/eco/header/1.40.0/logo_sber.svg',
    'Ideogram': 'https://ideogram.ai/assets/logo.svg',
    'Leonardo AI': 'https://leonardo.ai/favicon.svg',
    'Kuaishou': 'https://static.yximgs.com/udata/pkg/KS-IDEA/ks-idea-logo.svg',
    'Pika Labs': 'https://pika.art/favicon.svg'
};

// Get logo for provider
function getProviderLogo(provider) {
    return providerLogos[provider] || 'https://via.placeholder.com/48/667eea/ffffff?text=' + provider.charAt(0);
}

// All models data with detailed information (100+ models)
const allModelsData = [
    // OpenAI Models (15 models)
    { name: 'GPT-4.1 Mini', provider: 'OpenAI', category: 'Multimodal', description: 'Mid-size multimodal model with million-token context, processes text, images, and videos. 73% MMMU score, 50% lower latency, 83% lower cost than GPT-4o.', inputPrice: 0.15, outputPrice: 0.6, contextWindow: '128K', capabilities: ['Function Call', 'Structured Output'], release: '2025-11', isLatest: true },
    { name: 'GPT-4o', provider: 'OpenAI', category: 'Multimodal', description: 'Flagship multimodal model supporting text, image, and video. Performance comparable to GPT-4 Turbo with half the latency.', inputPrice: 2.5, outputPrice: 10, contextWindow: '128K', capabilities: ['Function Call', 'Structured Output'], release: '2024-11' },
    { name: 'GPT-4o mini', provider: 'OpenAI', category: 'Multimodal', description: 'Lightweight multimodal model, cost-effective for high-volume tasks.', inputPrice: 0.15, outputPrice: 0.6, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-07' },
    { name: 'o1', provider: 'OpenAI', category: 'Reasoning Model', description: 'Advanced reasoning model for mathematics and coding, with 128K context and 32K max output.', inputPrice: 15, outputPrice: 60, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-12', isLatest: true },
    { name: 'o1-mini', provider: 'OpenAI', category: 'Reasoning Model', description: 'Lightweight reasoning model optimized for STEM tasks.', inputPrice: 3, outputPrice: 12, contextWindow: '128K', capabilities: ['Function Call', 'Structured Output'], release: '2024-09' },
    { name: 'o1-preview', provider: 'OpenAI', category: 'Reasoning Model', description: 'Preview version of o1 with enhanced reasoning capabilities.', inputPrice: 15, outputPrice: 60, contextWindow: '128K', capabilities: [], release: '2024-09' },
    { name: 'O3 Mini', provider: 'OpenAI', category: 'Reasoning Model', description: 'Small reasoning model for STEM fields with function calling and structured output.', inputPrice: 1.5, outputPrice: 6, contextWindow: '128K', capabilities: ['Function Call', 'Structured Output'], release: '2025-01', isLatest: true },
    { name: 'GPT-5 Codex', provider: 'OpenAI', category: 'Code Generation', description: 'Multi-model code generation system with intelligent routing for complex programming tasks.', inputPrice: 5, outputPrice: 20, contextWindow: '128K', capabilities: ['Function Call'], release: '2025-01', isLatest: true },
    { name: 'GPT-4 Turbo', provider: 'OpenAI', category: 'Text Generation', description: 'GPT-4 Turbo with 128K context, excellent for code generation and complex reasoning.', inputPrice: 10, outputPrice: 30, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-04' },
    { name: 'GPT-4', provider: 'OpenAI', category: 'Text Generation', description: 'Original GPT-4 with 8K context window.', inputPrice: 30, outputPrice: 60, contextWindow: '8K', capabilities: [], release: '2023-03' },
    { name: 'GPT-4-32K', provider: 'OpenAI', category: 'Text Generation', description: 'GPT-4 with extended 32K context window.', inputPrice: 60, outputPrice: 120, contextWindow: '32K', capabilities: [], release: '2023-03' },
    { name: 'GPT-3.5 Turbo', provider: 'OpenAI', category: 'Text Generation', description: 'Fast and cost-effective model for general-purpose tasks.', inputPrice: 0.5, outputPrice: 1.5, contextWindow: '16K', capabilities: ['Function Call'], release: '2024-01' },
    { name: 'GPT-3.5 Turbo 16K', provider: 'OpenAI', category: 'Text Generation', description: 'GPT-3.5 with extended context window.', inputPrice: 1, outputPrice: 2, contextWindow: '16K', capabilities: [], release: '2023-06' },
    { name: 'ChatGPT-4o Latest', provider: 'OpenAI', category: 'Multimodal', description: 'Latest ChatGPT-4o model with continuous improvements.', inputPrice: 5, outputPrice: 15, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-11' },
    { name: 'DALL-E 3', provider: 'OpenAI', category: 'Image Generation', description: 'Advanced image generation model with improved prompt following.', inputPrice: 0.04, outputPrice: 0.08, contextWindow: '4K', capabilities: [], release: '2023-10' },

    // Anthropic Models (8 models)
    { name: 'Claude Opus 4.5', provider: 'Anthropic', category: 'Text Generation', description: 'Top-tier Claude model with exceptional reasoning and coding capabilities.', inputPrice: 18, outputPrice: 80, contextWindow: '200K', capabilities: ['Function Call', 'Structured Output'], release: '2025-08', isLatest: true },
    { name: 'Claude Sonnet 4.5', provider: 'Anthropic', category: 'Text Generation', description: 'Balanced Claude model with strong coding abilities, 77.2% SWE-bench score.', inputPrice: 4, outputPrice: 18, contextWindow: '200K', capabilities: ['Function Call', 'Structured Output'], release: '2025-09', isLatest: true },
    { name: 'Claude Haiku 4.5', provider: 'Anthropic', category: 'Text Generation', description: 'Small Claude model with near-Sonnet performance at 1/3 cost.', inputPrice: 0.8, outputPrice: 4, contextWindow: '200K', capabilities: ['Function Call'], release: '2025-10', isLatest: true },
    { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', category: 'Text Generation', description: 'Balanced performance with 200K context, excelling in coding and analysis.', inputPrice: 3, outputPrice: 15, contextWindow: '200K', capabilities: ['Function Call', 'Structured Output'], release: '2024-10' },
    { name: 'Claude 3 Opus', provider: 'Anthropic', category: 'Text Generation', description: 'Top-tier model with 200K context, exceptional reasoning and creative writing.', inputPrice: 15, outputPrice: 75, contextWindow: '200K', capabilities: ['Function Call'], release: '2024-03' },
    { name: 'Claude 3.5 Haiku', provider: 'Anthropic', category: 'Text Generation', description: 'Fast and cost-effective with 200K context window.', inputPrice: 1, outputPrice: 5, contextWindow: '200K', capabilities: ['Function Call'], release: '2024-10' },
    { name: 'Claude 3 Sonnet', provider: 'Anthropic', category: 'Text Generation', description: 'Mid-tier Claude 3 model balancing capability and speed.', inputPrice: 3, outputPrice: 15, contextWindow: '200K', capabilities: [], release: '2024-03' },
    { name: 'Claude 3 Haiku', provider: 'Anthropic', category: 'Text Generation', description: 'Fastest Claude 3 model for high-throughput tasks.', inputPrice: 0.25, outputPrice: 1.25, contextWindow: '200K', capabilities: [], release: '2024-03' },

    // Google Models (12 models)
    { name: 'Gemini 2.5 Flash', provider: 'Google', category: 'Multimodal', description: 'Multimodal model with adaptive reasoning, 20-30% better token efficiency.', inputPrice: 0.075, outputPrice: 0.3, contextWindow: '1M', capabilities: ['Function Call', 'Structured Output'], release: '2025-10', isLatest: true },
    { name: 'Gemini 2.5 Flash Lite', provider: 'Google', category: 'Multimodal', description: 'Lightweight version optimized for speed and cost-effectiveness.', inputPrice: 0.03, outputPrice: 0.12, contextWindow: '1M', capabilities: ['Function Call'], release: '2025-09', isLatest: true },
    { name: 'Gemini 2.5 Pro', provider: 'Google', category: 'Multimodal', description: 'Advanced multimodal model with superior reasoning capabilities.', inputPrice: 1.5, outputPrice: 6, contextWindow: '2M', capabilities: ['Function Call', 'Structured Output'], release: '2025-10', isLatest: true },
    { name: 'Gemini 2.0 Flash', provider: 'Google', category: 'Multimodal', description: 'Multimodal model with text, image generation and editing capabilities.', inputPrice: 0.075, outputPrice: 0.3, contextWindow: '1M', capabilities: ['Function Call'], release: '2025-10' },
    { name: 'Gemini 2.0 Flash Lite', provider: 'Google', category: 'Multimodal', description: 'Fastest Gemini model with 1M context for high-throughput tasks.', inputPrice: 0.03, outputPrice: 0.12, contextWindow: '1M', capabilities: [], release: '2025-11', isLatest: true },
    { name: 'Gemini 2.0 Flash Exp', provider: 'Google', category: 'Multimodal', description: 'Free experimental multimodal model, perfect for testing.', inputPrice: 0, outputPrice: 0, contextWindow: '1M', capabilities: ['Function Call'], release: '2024-12', isFree: true },
    { name: 'Gemini 2.0 Flash Thinking', provider: 'Google', category: 'Reasoning Model', description: 'Gemini with enhanced thinking and reasoning capabilities.', inputPrice: 0, outputPrice: 0, contextWindow: '1M', capabilities: [], release: '2025-01', isFree: true, isLatest: true },
    { name: 'Gemini 1.5 Pro', provider: 'Google', category: 'Multimodal', description: 'Ultra-long context model with 2M token window, multimodal input support.', inputPrice: 1.25, outputPrice: 5, contextWindow: '2M', capabilities: ['Function Call', 'Structured Output'], release: '2024-05' },
    { name: 'Gemini 1.5 Flash', provider: 'Google', category: 'Multimodal', description: 'Fast multimodal model with 1M context, cost-effective.', inputPrice: 0.075, outputPrice: 0.3, contextWindow: '1M', capabilities: ['Function Call'], release: '2024-05' },
    { name: 'Gemini 1.5 Flash 8B', provider: 'Google', category: 'Multimodal', description: 'Smallest Gemini 1.5 model for maximum efficiency.', inputPrice: 0.0375, outputPrice: 0.15, contextWindow: '1M', capabilities: [], release: '2024-10' },
    { name: 'Gemini 1.0 Pro', provider: 'Google', category: 'Text Generation', description: 'Original Gemini Pro for general-purpose tasks.', inputPrice: 0.5, outputPrice: 1.5, contextWindow: '32K', capabilities: [], release: '2023-12' },
    { name: 'PaLM 2', provider: 'Google', category: 'Text Generation', description: 'Previous generation language model with strong multilingual support.', inputPrice: 0.25, outputPrice: 0.5, contextWindow: '8K', capabilities: [], release: '2023-05' },
    { name: 'Imagen 3', provider: 'Google', category: 'Image Generation', description: 'Google\'s latest text-to-image generation model with photorealistic quality.', inputPrice: 0.04, outputPrice: 0.04, contextWindow: '4K', capabilities: [], release: '2024-08', isLatest: true },
    { name: 'Imagen 2', provider: 'Google', category: 'Image Generation', description: 'High-quality image generation with improved prompt understanding.', inputPrice: 0.03, outputPrice: 0.03, contextWindow: '4K', capabilities: [], release: '2023-12' },

    // Alibaba Qwen Models (20 models)
    { name: 'Qwen3 Max', provider: 'Alibaba', category: 'Text Generation', description: 'Trillion-parameter flagship model with 260K+ context and multilingual support.', inputPrice: 0.2, outputPrice: 0.6, contextWindow: '260K', capabilities: ['Function Call', 'Structured Output'], release: '2025-09', isLatest: true },
    { name: 'Qwen3 Coder Plus', provider: 'Alibaba', category: 'Code Generation', description: '480B MoE architecture for enhanced code generation with 1M context.', inputPrice: 0.06, outputPrice: 0.2, contextWindow: '1M', capabilities: ['Function Call'], release: '2025-09', isLatest: true },
    { name: 'Qwen3 VL Plus', provider: 'Alibaba', category: 'Vision', description: 'Vision-language model with Thinking version, 8B parameters.', inputPrice: 0.08, outputPrice: 0.24, contextWindow: '128K', capabilities: ['Function Call'], release: '2025-09', isLatest: true },
    { name: 'Qwen2.5 Max', provider: 'Alibaba', category: 'Text Generation', description: 'Previous generation flagship with strong reasoning capabilities.', inputPrice: 0.14, outputPrice: 0.42, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-09' },
    { name: 'Qwen2.5 72B', provider: 'Alibaba', category: 'Text Generation', description: 'Open source 72B model with 128K context.', inputPrice: 0.049, outputPrice: 0.21, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-09' },
    { name: 'Qwen2.5 32B', provider: 'Alibaba', category: 'Text Generation', description: 'Mid-size model balancing performance and efficiency.', inputPrice: 0.042, outputPrice: 0.14, contextWindow: '128K', capabilities: [], release: '2024-09' },
    { name: 'Qwen2.5 14B', provider: 'Alibaba', category: 'Text Generation', description: 'Compact model for resource-efficient deployment.', inputPrice: 0.021, outputPrice: 0.07, contextWindow: '128K', capabilities: [], release: '2024-09' },
    { name: 'Qwen2.5 7B', provider: 'Alibaba', category: 'Text Generation', description: 'Small efficient model for edge deployment.', inputPrice: 0.0042, outputPrice: 0.014, contextWindow: '128K', capabilities: [], release: '2024-09' },
    { name: 'Qwen2.5 Coder 32B', provider: 'Alibaba', category: 'Code Generation', description: 'Specialized coding model supporting multiple languages.', inputPrice: 0.042, outputPrice: 0.14, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-11' },
    { name: 'Qwen2.5 Math 72B', provider: 'Alibaba', category: 'Reasoning Model', description: 'Mathematical reasoning specialist model.', inputPrice: 0.049, outputPrice: 0.21, contextWindow: '128K', capabilities: [], release: '2024-11' },
    { name: 'Qwen Max 0919', provider: 'Alibaba', category: 'Text Generation', description: 'September 2024 version with enhanced capabilities.', inputPrice: 0.14, outputPrice: 0.42, contextWindow: '32K', capabilities: ['Function Call'], release: '2024-09' },
    { name: 'Qwen Plus', provider: 'Alibaba', category: 'Text Generation', description: 'Cost-effective model with 128K context.', inputPrice: 0.14, outputPrice: 0.42, contextWindow: '128K', capabilities: [], release: '2024-06' },
    { name: 'Qwen Turbo', provider: 'Alibaba', category: 'Text Generation', description: 'Fast response model for high-throughput scenarios.', inputPrice: 0.042, outputPrice: 0.14, contextWindow: '8K', capabilities: [], release: '2024-03' },
    { name: 'Qwen VL Max', provider: 'Alibaba', category: 'Vision', description: 'Vision-language model for image understanding.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '32K', capabilities: [], release: '2024-08' },
    { name: 'Qwen VL Plus', provider: 'Alibaba', category: 'Vision', description: 'Cost-effective vision-language model.', inputPrice: 0.14, outputPrice: 0.14, contextWindow: '32K', capabilities: [], release: '2024-08' },
    { name: 'Qwen Long', provider: 'Alibaba', category: 'Text Generation', description: 'Optimized for ultra-long context processing.', inputPrice: 0.07, outputPrice: 0.21, contextWindow: '1M', capabilities: [], release: '2024-09' },
    { name: 'Qwen Image', provider: 'Alibaba', category: 'Image Generation', description: 'Text-to-image generation model.', inputPrice: 0.06, outputPrice: 0.06, contextWindow: '4K', capabilities: [], release: '2024-11', isLatest: true },
    { name: 'Qwen Image Plus', provider: 'Alibaba', category: 'Image Generation', description: 'Enhanced version with better text rendering.', inputPrice: 0.08, outputPrice: 0.08, contextWindow: '4K', capabilities: [], release: '2025-09', isLatest: true },
    { name: 'Qwen Image Edit', provider: 'Alibaba', category: 'Image Generation', description: 'Omni diffusion model for image editing with 20B parameters.', inputPrice: 0.08, outputPrice: 0.08, contextWindow: '8K', capabilities: [], release: '2025-09', isLatest: true },
    { name: 'Qianfan Lightning', provider: 'Alibaba', category: 'Text Generation', description: 'Ultra-low latency model from Baidu Qianfan platform.', inputPrice: 0.02, outputPrice: 0.06, contextWindow: '8K', capabilities: ['Function Call'], release: '2025-09', isLatest: true },

    // DeepSeek Models (8 models)
    { name: 'DeepSeek V3.1', provider: 'DeepSeek', category: 'Text Generation', description: 'Latest DeepSeek model with enhanced capabilities.', inputPrice: 0.14, outputPrice: 0.28, contextWindow: '128K', capabilities: ['Function Call'], release: '2025-03', isLatest: true },
    { name: 'DeepSeek V3.1 Thinking', provider: 'DeepSeek', category: 'Reasoning Model', description: 'Reasoning version with step-by-step thinking.', inputPrice: 0.55, outputPrice: 2.19, contextWindow: '128K', capabilities: ['Function Call'], release: '2025-03', isLatest: true },
    { name: 'DeepSeek Chat', provider: 'DeepSeek', category: 'Text Generation', description: 'General-purpose cost-effective model with 64K context.', inputPrice: 0.14, outputPrice: 0.28, contextWindow: '64K', capabilities: [], release: '2024-12' },
    { name: 'DeepSeek Reasoner (R1)', provider: 'DeepSeek', category: 'Reasoning Model', description: 'Advanced reasoning model for mathematics and science.', inputPrice: 0.55, outputPrice: 2.19, contextWindow: '64K', capabilities: ['Function Call'], release: '2025-01', isLatest: true },
    { name: 'DeepSeek R1-0528', provider: 'DeepSeek', category: 'Reasoning Model', description: 'May 2025 reasoning model with improved performance.', inputPrice: 0.6, outputPrice: 2.5, contextWindow: '128K', capabilities: [], release: '2025-05', isLatest: true },
    { name: 'DeepSeek Coder', provider: 'DeepSeek', category: 'Code Generation', description: 'Specialized code generation with debugging capabilities.', inputPrice: 0.14, outputPrice: 0.28, contextWindow: '128K', capabilities: [], release: '2024-11' },
    { name: 'DeepSeek V3', provider: 'DeepSeek', category: 'Text Generation', description: 'Third generation base model with 671B parameters.', inputPrice: 0.14, outputPrice: 0.28, contextWindow: '64K', capabilities: [], release: '2024-12' },
    { name: 'DeepSeek V3-0324', provider: 'DeepSeek', category: 'Text Generation', description: 'March 2024 version with stability improvements.', inputPrice: 0.14, outputPrice: 0.28, contextWindow: '64K', capabilities: [], release: '2024-03' },

    // Bytedance Doubao Models (14 models)
    { name: 'Doubao-1.5-thinking-pro', provider: 'Bytedance', category: 'Reasoning Model', description: 'Advanced reasoning with step-by-step thinking capabilities.', inputPrice: 0.56, outputPrice: 2.22, contextWindow: '32K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Doubao-1.5-pro-32k', provider: 'Bytedance', category: 'Multimodal', description: 'Chinese-optimized multimodal model.', inputPrice: 0.11, outputPrice: 0.28, contextWindow: '32K', capabilities: [], release: '2024-11' },
    { name: 'Doubao-1.5-pro-256k', provider: 'Bytedance', category: 'Text Generation', description: 'Extended context version for long documents.', inputPrice: 0.69, outputPrice: 1.25, contextWindow: '256K', capabilities: [], release: '2024-11' },
    { name: 'Doubao-1.5-vision-pro', provider: 'Bytedance', category: 'Vision', description: 'Vision-language model for image understanding.', inputPrice: 0.42, outputPrice: 1.25, contextWindow: '32K', capabilities: [], release: '2024-11' },
    { name: 'Doubao-1.5-vision-lite', provider: 'Bytedance', category: 'Vision', description: 'Lightweight vision model for cost-effectiveness.', inputPrice: 0.21, outputPrice: 0.63, contextWindow: '32K', capabilities: [], release: '2024-10' },
    { name: 'Doubao-1.5-lite-32k', provider: 'Bytedance', category: 'Text Generation', description: 'Ultra cost-effective for fast response scenarios.', inputPrice: 0.04, outputPrice: 0.08, contextWindow: '32K', capabilities: [], release: '2024-10' },
    { name: 'Doubao-1.5-UI-TARS', provider: 'Bytedance', category: 'Multimodal', description: 'Specialized model for UI/UX tasks.', inputPrice: 0.49, outputPrice: 1.67, contextWindow: '32K', capabilities: [], release: '2024-11', isLatest: true },
    { name: 'Doubao-Seed-1.6', provider: 'Bytedance', category: 'Text Generation', description: 'Seed series general-purpose model.', inputPrice: 0.11, outputPrice: 0.28, contextWindow: '32K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Doubao-Seed-1.6-flash', provider: 'Bytedance', category: 'Text Generation', description: 'Ultra-fast response variant.', inputPrice: 0.02, outputPrice: 0.21, contextWindow: '32K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Doubao-Seed-1.6-thinking', provider: 'Bytedance', category: 'Reasoning Model', description: 'Reasoning variant of Seed series.', inputPrice: 0.11, outputPrice: 1.11, contextWindow: '32K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Doubao-Seed-1.6-vision', provider: 'Bytedance', category: 'Vision', description: 'Vision capabilities in Seed series.', inputPrice: 0.11, outputPrice: 1.11, contextWindow: '32K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Doubao-Seed-Translation', provider: 'Bytedance', category: 'Text Generation', description: 'Specialized translation model.', inputPrice: 0.17, outputPrice: 0.5, contextWindow: '32K', capabilities: [], release: '2024-11' },
    { name: 'Doubao-1.5-vision-pro-32k', provider: 'Bytedance', category: 'Vision', description: 'Vision model with 32K context.', inputPrice: 0.42, outputPrice: 1.25, contextWindow: '32K', capabilities: [], release: '2024-11' },
    { name: 'Doubao-1.5-thinking-vision-pro', provider: 'Bytedance', category: 'Reasoning Model', description: 'Combined vision and reasoning capabilities.', inputPrice: 0.42, outputPrice: 1.25, contextWindow: '32K', capabilities: [], release: '2024-12', isLatest: true },

    // Baidu ERNIE Models (10 models)
    { name: 'ERNIE-4.0-8K', provider: 'Baidu', category: 'Text Generation', description: 'Flagship model optimized for Chinese NLP and knowledge QA.', inputPrice: 1.68, outputPrice: 1.68, contextWindow: '8K', capabilities: [], release: '2024-03' },
    { name: 'ERNIE-4.0-Turbo-8K', provider: 'Baidu', category: 'Text Generation', description: 'Faster version with optimized performance.', inputPrice: 0.42, outputPrice: 0.42, contextWindow: '8K', capabilities: [], release: '2024-06' },
    { name: 'ERNIE-3.5-8K', provider: 'Baidu', category: 'Text Generation', description: 'Mid-tier model with solid Chinese support.', inputPrice: 0.17, outputPrice: 0.17, contextWindow: '8K', capabilities: [], release: '2023-12' },
    { name: 'ERNIE-3.5-128K', provider: 'Baidu', category: 'Text Generation', description: 'Extended context version for long documents.', inputPrice: 0.14, outputPrice: 0.14, contextWindow: '128K', capabilities: [], release: '2024-03' },
    { name: 'ERNIE-Speed-8K', provider: 'Baidu', category: 'Text Generation', description: 'Fast response model optimized for real-time scenarios.', inputPrice: 0.056, outputPrice: 0.056, contextWindow: '8K', capabilities: [], release: '2024-01' },
    { name: 'ERNIE-Speed-128K', provider: 'Baidu', category: 'Text Generation', description: 'Speed model with extended context.', inputPrice: 0.056, outputPrice: 0.056, contextWindow: '128K', capabilities: [], release: '2024-06' },
    { name: 'ERNIE-Lite-8K', provider: 'Baidu', category: 'Text Generation', description: 'Lightweight cost-effective model.', inputPrice: 0.014, outputPrice: 0.014, contextWindow: '8K', capabilities: [], release: '2024-01' },
    { name: 'ERNIE-Tiny-8K', provider: 'Baidu', category: 'Text Generation', description: 'Ultra-small model for edge deployment.', inputPrice: 0.0014, outputPrice: 0.0014, contextWindow: '8K', capabilities: [], release: '2024-03' },
    { name: 'ERNIE-Character', provider: 'Baidu', category: 'Text Generation', description: 'Specialized for character-based tasks.', inputPrice: 0.17, outputPrice: 0.17, contextWindow: '8K', capabilities: [], release: '2024-05' },
    { name: 'ERNIE-Bot-4', provider: 'Baidu', category: 'Text Generation', description: 'Conversational model with enhanced dialogue capabilities.', inputPrice: 1.68, outputPrice: 1.68, contextWindow: '8K', capabilities: [], release: '2024-03' },

    // xAI Grok Models (6 models)
    { name: 'Grok 4 Fast', provider: 'xAI', category: 'Multimodal', description: '75 tokens/sec, 2M context, 98% lower cost with real-time search.', inputPrice: 0.1, outputPrice: 0.5, contextWindow: '2M', capabilities: ['Function Call'], release: '2025-11', isLatest: true },
    { name: 'Grok Beta', provider: 'xAI', category: 'Multimodal', description: 'Real-time information with humor and analysis.', inputPrice: 5, outputPrice: 15, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-11' },
    { name: 'Grok 2', provider: 'xAI', category: 'Multimodal', description: 'Multimodal with real-time search capabilities.', inputPrice: 2, outputPrice: 10, contextWindow: '128K', capabilities: [], release: '2024-12' },
    { name: 'Grok 2 Vision', provider: 'xAI', category: 'Vision', description: 'Vision-enhanced Grok with image understanding.', inputPrice: 2, outputPrice: 10, contextWindow: '128K', capabilities: [], release: '2024-12' },
    { name: 'Grok 3', provider: 'xAI', category: 'Multimodal', description: 'Latest generation with improved capabilities.', inputPrice: 3, outputPrice: 12, contextWindow: '128K', capabilities: [], release: '2025-02', isLatest: true },
    { name: 'Grok Code Fast', provider: 'xAI', category: 'Code Generation', description: 'Optimized for fast code generation.', inputPrice: 1, outputPrice: 5, contextWindow: '128K', capabilities: [], release: '2025-10', isLatest: true },

    // Tencent Hunyuan Models (6 models)
    { name: 'Hunyuan-T1', provider: 'Tencent', category: 'Reasoning Model', description: 'Reasoning model with step-by-step thinking.', inputPrice: 0.7, outputPrice: 2.8, contextWindow: '32K', capabilities: [], release: '2025-07', isLatest: true },
    { name: 'Hunyuan-Pro', provider: 'Tencent', category: 'Text Generation', description: 'Chinese-optimized general-purpose model.', inputPrice: 0.42, outputPrice: 0.42, contextWindow: '32K', capabilities: [], release: '2024-09' },
    { name: 'Hunyuan-Standard', provider: 'Tencent', category: 'Text Generation', description: 'Balanced model for common tasks.', inputPrice: 0.14, outputPrice: 0.14, contextWindow: '16K', capabilities: [], release: '2024-06' },
    { name: 'Hunyuan-Lite', provider: 'Tencent', category: 'Text Generation', description: 'Fast response cost-effective model.', inputPrice: 0.014, outputPrice: 0.014, contextWindow: '16K', capabilities: [], release: '2024-06' },
    { name: 'Hunyuan-Turbo', provider: 'Tencent', category: 'Text Generation', description: 'Optimized for high-throughput scenarios.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '32K', capabilities: [], release: '2024-04' },
    { name: 'Hunyuan-Turbos', provider: 'Tencent', category: 'Text Generation', description: 'Ultra-fast variant with enhanced speed.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '32K', capabilities: [], release: '2025-04', isLatest: true },

    // Moonshot Kimi Models (4 models)
    { name: 'Moonshot-v1-8K', provider: 'Moonshot', category: 'Text Generation', description: 'Entry-level with strong Chinese support.', inputPrice: 1.68, outputPrice: 1.68, contextWindow: '8K', capabilities: [], release: '2024-03' },
    { name: 'Moonshot-v1-32K', provider: 'Moonshot', category: 'Text Generation', description: 'Mid-tier with extended context.', inputPrice: 3.36, outputPrice: 3.36, contextWindow: '32K', capabilities: [], release: '2024-03' },
    { name: 'Moonshot-v1-128K', provider: 'Moonshot', category: 'Text Generation', description: 'Ultra-long context for document analysis.', inputPrice: 8.4, outputPrice: 8.4, contextWindow: '128K', capabilities: [], release: '2024-03' },
    { name: 'Kimi-K2-0905', provider: 'Moonshot', category: 'Reasoning Model', description: 'Latest K2 series with enhanced reasoning.', inputPrice: 5, outputPrice: 5, contextWindow: '128K', capabilities: [], release: '2025-09', isLatest: true },

    // MiniMax Models (7 models)
    { name: 'MiniMax-M1', provider: 'MiniMax', category: 'Text Generation', description: 'Apache 2.0 licensed flagship model.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '32K', capabilities: [], release: '2024-08', isLatest: true },
    { name: 'abab6.5-Chat', provider: 'MiniMax', category: 'Text Generation', description: 'General-purpose conversational model.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '32K', capabilities: [], release: '2024-08' },
    { name: 'abab6.5s-Chat', provider: 'MiniMax', category: 'Text Generation', description: 'Fast response cost-effective version.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '16K', capabilities: [], release: '2024-08' },
    { name: 'abab6.5g-Chat', provider: 'MiniMax', category: 'Text Generation', description: 'Generalist variant with broad capabilities.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '32K', capabilities: [], release: '2024-08' },
    { name: 'abab5.5-Chat', provider: 'MiniMax', category: 'Text Generation', description: 'Previous generation model.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '16K', capabilities: [], release: '2024-05' },
    { name: 'abab5.5s-Chat', provider: 'MiniMax', category: 'Text Generation', description: 'Speed-optimized 5.5 version.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '16K', capabilities: [], release: '2024-05' },
    { name: 'Hailuo-02-Pro', provider: 'MiniMax', category: 'Video Generation', description: 'Text-to-video generation model.', inputPrice: 2, outputPrice: 2, contextWindow: '8K', capabilities: [], release: '2024-11', isLatest: true },

    // Zhipu AI (GLM) Models (5 models)
    { name: 'GLM-4.5', provider: 'Zhipu AI', category: 'Text Generation', description: 'MIT licensed flagship with strong reasoning.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-09', isLatest: true },
    { name: 'GLM-4.5-Air', provider: 'Zhipu AI', category: 'Text Generation', description: 'Lightweight version for efficiency.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '128K', capabilities: [], release: '2024-09', isLatest: true },
    { name: 'GLM-4', provider: 'Zhipu AI', category: 'Text Generation', description: 'Previous generation base model.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '128K', capabilities: [], release: '2024-01' },
    { name: 'GLM-4-Flash', provider: 'Zhipu AI', category: 'Text Generation', description: 'Ultra-fast response variant.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '128K', capabilities: [], release: '2024-06' },
    { name: 'GLM-3-Turbo', provider: 'Zhipu AI', category: 'Text Generation', description: 'Cost-effective third generation.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '32K', capabilities: [], release: '2023-10' },

    // SenseTime Models (5 models)
    { name: 'SenseChat-5', provider: 'SenseTime', category: 'Multimodal', description: 'Multimodal with Chinese optimization.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '32K', capabilities: [], release: '2024-07' },
    { name: 'SenseChat-Turbo', provider: 'SenseTime', category: 'Text Generation', description: 'Fast response cost-effective model.', inputPrice: 0.014, outputPrice: 0.014, contextWindow: '16K', capabilities: [], release: '2024-06' },
    { name: 'SenseChat-Character', provider: 'SenseTime', category: 'Text Generation', description: 'Character-based dialogue specialist.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '16K', capabilities: [], release: '2024-08' },
    { name: 'SenseChat-Vision', provider: 'SenseTime', category: 'Vision', description: 'Vision-language understanding model.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '32K', capabilities: [], release: '2024-09' },
    { name: 'SenseNova-5', provider: 'SenseTime', category: 'Text Generation', description: 'Latest Nova series with enhanced capabilities.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '32K', capabilities: [], release: '2024-10', isLatest: true },

    // Mistral AI Models (6 models)
    { name: 'Mistral Large', provider: 'Mistral', category: 'Text Generation', description: 'Flagship model with strong multilingual capabilities.', inputPrice: 4, outputPrice: 12, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-07' },
    { name: 'Mistral Medium', provider: 'Mistral', category: 'Text Generation', description: 'Balanced performance and cost.', inputPrice: 2.7, outputPrice: 8.1, contextWindow: '32K', capabilities: [], release: '2024-05' },
    { name: 'Mistral Small', provider: 'Mistral', category: 'Text Generation', description: 'Cost-effective for simple tasks.', inputPrice: 1, outputPrice: 3, contextWindow: '32K', capabilities: [], release: '2024-05' },
    { name: 'Mistral 7B', provider: 'Mistral', category: 'Text Generation', description: 'Open source 7B parameter model.', inputPrice: 0.25, outputPrice: 0.25, contextWindow: '32K', capabilities: [], release: '2023-09' },
    { name: 'Mixtral 8x7B', provider: 'Mistral', category: 'Text Generation', description: 'MoE architecture with 8 experts.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '32K', capabilities: [], release: '2023-12' },
    { name: 'Mixtral 8x22B', provider: 'Mistral', category: 'Text Generation', description: 'Larger MoE with enhanced capabilities.', inputPrice: 2, outputPrice: 6, contextWindow: '64K', capabilities: ['Function Call'], release: '2024-04' },

    // Meta Llama Models (6 models)
    { name: 'Llama-4-Maverick-17B', provider: 'Meta', category: 'Text Generation', description: 'Latest Llama 4 with 128 experts MoE.', inputPrice: 0.3, outputPrice: 0.3, contextWindow: '128K', capabilities: [], release: '2025-01', isLatest: true },
    { name: 'Llama-3.1-405B', provider: 'Meta', category: 'Text Generation', description: 'Largest Llama model with 405B parameters.', inputPrice: 5, outputPrice: 15, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-07' },
    { name: 'Llama-3.1-70B', provider: 'Meta', category: 'Text Generation', description: 'Mid-size high-performance model.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '128K', capabilities: [], release: '2024-07' },
    { name: 'Llama-3.1-8B', provider: 'Meta', category: 'Text Generation', description: 'Efficient small model for edge deployment.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '128K', capabilities: [], release: '2024-07' },
    { name: 'Llama-3-70B', provider: 'Meta', category: 'Text Generation', description: 'Previous generation 70B model.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '8K', capabilities: [], release: '2024-04' },
    { name: 'Llama-3-8B', provider: 'Meta', category: 'Text Generation', description: 'Previous generation 8B model.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '8K', capabilities: [], release: '2024-04' },

    // Cohere Models (5 models)
    { name: 'Command R+', provider: 'Cohere', category: 'Text Generation', description: 'Flagship model optimized for RAG and tool use with 128K context.', inputPrice: 3, outputPrice: 15, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-04' },
    { name: 'Command R', provider: 'Cohere', category: 'Text Generation', description: 'Balanced model for enterprise applications.', inputPrice: 0.5, outputPrice: 1.5, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-03' },
    { name: 'Command', provider: 'Cohere', category: 'Text Generation', description: 'General-purpose command model.', inputPrice: 1, outputPrice: 2, contextWindow: '4K', capabilities: [], release: '2023-11' },
    { name: 'Command Light', provider: 'Cohere', category: 'Text Generation', description: 'Lightweight fast response model.', inputPrice: 0.3, outputPrice: 0.6, contextWindow: '4K', capabilities: [], release: '2023-11' },
    { name: 'Embed v3', provider: 'Cohere', category: 'Embedding', description: 'Latest embedding model with improved performance.', inputPrice: 0.1, outputPrice: 0.1, contextWindow: '512', capabilities: [], release: '2023-11' },

    // iFlytek Spark Models (8 models)
    { name: 'Spark Max', provider: 'iFlytek', category: 'Multimodal', description: 'Flagship multimodal model with image and text understanding.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '128K', capabilities: [], release: '2024-06' },
    { name: 'Spark Pro', provider: 'iFlytek', category: 'Text Generation', description: 'Pro version with enhanced capabilities.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '32K', capabilities: [], release: '2024-03' },
    { name: 'Spark Lite', provider: 'iFlytek', category: 'Text Generation', description: 'Cost-effective model for general tasks.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '8K', capabilities: [], release: '2024-01' },
    { name: 'Spark 4.0 Ultra', provider: 'iFlytek', category: 'Multimodal', description: 'Latest generation with ultra-long context.', inputPrice: 1, outputPrice: 1, contextWindow: '128K', capabilities: [], release: '2024-10', isLatest: true },
    { name: 'Spark 3.5', provider: 'iFlytek', category: 'Text Generation', description: 'Third generation 3.5 model.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '8K', capabilities: [], release: '2023-08' },
    { name: 'Spark 3.0', provider: 'iFlytek', category: 'Text Generation', description: 'Third generation base model.', inputPrice: 0.21, outputPrice: 0.21, contextWindow: '8K', capabilities: [], release: '2023-06' },
    { name: 'Spark 2.0', provider: 'iFlytek', category: 'Text Generation', description: 'Second generation model.', inputPrice: 0.14, outputPrice: 0.14, contextWindow: '8K', capabilities: [], release: '2023-01' },
    { name: 'Spark 1.5', provider: 'iFlytek', category: 'Text Generation', description: 'First generation upgraded version.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '4K', capabilities: [], release: '2022-10' },

    // 01.AI Yi Models (10 models)
    { name: 'Yi-Lightning', provider: '01.AI', category: 'Text Generation', description: 'Ultra-fast response model with 16K context.', inputPrice: 0.14, outputPrice: 0.42, contextWindow: '16K', capabilities: [], release: '2024-11', isLatest: true },
    { name: 'Yi-Large', provider: '01.AI', category: 'Text Generation', description: 'Large-scale model with 32K context window.', inputPrice: 0.42, outputPrice: 1.26, contextWindow: '32K', capabilities: [], release: '2024-05' },
    { name: 'Yi-Large-Turbo', provider: '01.AI', category: 'Text Generation', description: 'Turbo version for faster inference.', inputPrice: 1.68, outputPrice: 1.68, contextWindow: '16K', capabilities: [], release: '2024-09' },
    { name: 'Yi-Medium', provider: '01.AI', category: 'Text Generation', description: 'Mid-tier balanced model.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '16K', capabilities: [], release: '2024-03' },
    { name: 'Yi-Medium-200K', provider: '01.AI', category: 'Text Generation', description: 'Extended context version.', inputPrice: 1.68, outputPrice: 1.68, contextWindow: '200K', capabilities: [], release: '2024-06' },
    { name: 'Yi-Spark', provider: '01.AI', category: 'Text Generation', description: 'Fast lightweight model.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '16K', capabilities: [], release: '2024-02' },
    { name: 'Yi-34B-Chat', provider: '01.AI', category: 'Text Generation', description: 'Open source 34B chat model.', inputPrice: 0.42, outputPrice: 0.42, contextWindow: '4K', capabilities: [], release: '2023-11' },
    { name: 'Yi-34B-Chat-200K', provider: '01.AI', category: 'Text Generation', description: '34B with 200K context window.', inputPrice: 1.68, outputPrice: 1.68, contextWindow: '200K', capabilities: [], release: '2024-01' },
    { name: 'Yi-6B-Chat', provider: '01.AI', category: 'Text Generation', description: 'Efficient 6B parameter model.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '4K', capabilities: [], release: '2023-11' },
    { name: 'Yi-Vision', provider: '01.AI', category: 'Vision', description: 'Vision-language understanding model.', inputPrice: 0.42, outputPrice: 0.42, contextWindow: '4K', capabilities: [], release: '2024-05' },

    // Stability AI Models (6 models)
    { name: 'Stable Diffusion 3.5', provider: 'Stability AI', category: 'Image Generation', description: 'Latest text-to-image generation model.', inputPrice: 0.065, outputPrice: 0.065, contextWindow: '4K', capabilities: [], release: '2024-10', isLatest: true },
    { name: 'Stable Diffusion XL', provider: 'Stability AI', category: 'Image Generation', description: 'High-resolution image generation.', inputPrice: 0.04, outputPrice: 0.04, contextWindow: '4K', capabilities: [], release: '2023-07' },
    { name: 'Stable Diffusion 2.1', provider: 'Stability AI', category: 'Image Generation', description: 'Previous generation model.', inputPrice: 0.02, outputPrice: 0.02, contextWindow: '4K', capabilities: [], release: '2022-12' },
    { name: 'Stable Video Diffusion', provider: 'Stability AI', category: 'Video Generation', description: 'Text-to-video generation model.', inputPrice: 0.12, outputPrice: 0.12, contextWindow: '4K', capabilities: [], release: '2023-11' },
    { name: 'SDXL Turbo', provider: 'Stability AI', category: 'Image Generation', description: 'Real-time image generation.', inputPrice: 0.02, outputPrice: 0.02, contextWindow: '4K', capabilities: [], release: '2023-11' },
    { name: 'Stable Code', provider: 'Stability AI', category: 'Code Generation', description: 'Code generation specialized model.', inputPrice: 0.03, outputPrice: 0.03, contextWindow: '16K', capabilities: [], release: '2024-08' },

    // Midjourney Models (4 models)
    { name: 'Midjourney v6', provider: 'Midjourney', category: 'Image Generation', description: 'Latest version with enhanced prompt understanding.', inputPrice: 0.06, outputPrice: 0.06, contextWindow: '4K', capabilities: [], release: '2023-12', isLatest: true },
    { name: 'Midjourney v5.2', provider: 'Midjourney', category: 'Image Generation', description: 'Version 5.2 with improved quality.', inputPrice: 0.05, outputPrice: 0.05, contextWindow: '4K', capabilities: [], release: '2023-06' },
    { name: 'Midjourney v5', provider: 'Midjourney', category: 'Image Generation', description: 'Fifth generation base model.', inputPrice: 0.04, outputPrice: 0.04, contextWindow: '4K', capabilities: [], release: '2023-03' },
    { name: 'Midjourney Niji', provider: 'Midjourney', category: 'Image Generation', description: 'Anime and illustration specialized.', inputPrice: 0.04, outputPrice: 0.04, contextWindow: '4K', capabilities: [], release: '2023-04' },

    // Baichuan Models (6 models)
    { name: 'Baichuan4', provider: 'Baichuan', category: 'Text Generation', description: 'Fourth generation flagship model.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '128K', capabilities: [], release: '2024-10', isLatest: true },
    { name: 'Baichuan3-Turbo', provider: 'Baichuan', category: 'Text Generation', description: 'Fast inference version.', inputPrice: 0.17, outputPrice: 0.17, contextWindow: '32K', capabilities: [], release: '2024-06' },
    { name: 'Baichuan3-Turbo-128K', provider: 'Baichuan', category: 'Text Generation', description: 'Extended context Turbo version.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '128K', capabilities: [], release: '2024-08' },
    { name: 'Baichuan2-Turbo', provider: 'Baichuan', category: 'Text Generation', description: 'Second generation Turbo.', inputPrice: 0.14, outputPrice: 0.14, contextWindow: '32K', capabilities: [], release: '2023-09' },
    { name: 'Baichuan2-Turbo-192K', provider: 'Baichuan', category: 'Text Generation', description: 'Ultra-long context version.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '192K', capabilities: [], release: '2024-01' },
    { name: 'Baichuan2-53B', provider: 'Baichuan', category: 'Text Generation', description: 'Open source 53B model.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '4K', capabilities: [], release: '2023-09' },

    // MiniCPM Models (5 models)
    { name: 'MiniCPM-V 2.6', provider: 'OpenBMB', category: 'Vision', description: 'Vision-language model with 8B parameters.', inputPrice: 0.14, outputPrice: 0.14, contextWindow: '32K', capabilities: [], release: '2024-08', isLatest: true },
    { name: 'MiniCPM-2.4B', provider: 'OpenBMB', category: 'Text Generation', description: 'Compact 2.4B efficient model.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '4K', capabilities: [], release: '2024-02' },
    { name: 'MiniCPM-1.2B', provider: 'OpenBMB', category: 'Text Generation', description: 'Ultra-small edge deployment model.', inputPrice: 0.03, outputPrice: 0.03, contextWindow: '4K', capabilities: [], release: '2024-02' },
    { name: 'MiniCPM-MoE-8x2B', provider: 'OpenBMB', category: 'Text Generation', description: 'MoE architecture with 8 experts.', inputPrice: 0.14, outputPrice: 0.14, contextWindow: '32K', capabilities: [], release: '2024-05' },
    { name: 'MiniCPM-V', provider: 'OpenBMB', category: 'Vision', description: 'Base vision-language model.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '16K', capabilities: [], release: '2024-04' },

    // InternLM Models (7 models)
    { name: 'InternLM2.5', provider: 'Shanghai AI Lab', category: 'Text Generation', description: 'Latest generation with enhanced reasoning.', inputPrice: 0.42, outputPrice: 0.42, contextWindow: '32K', capabilities: [], release: '2024-07', isLatest: true },
    { name: 'InternLM2.5-20B-Chat', provider: 'Shanghai AI Lab', category: 'Text Generation', description: '20B parameter chat model.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '32K', capabilities: [], release: '2024-07' },
    { name: 'InternLM2.5-7B-Chat', provider: 'Shanghai AI Lab', category: 'Text Generation', description: '7B efficient model.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '32K', capabilities: [], release: '2024-07' },
    { name: 'InternLM2-Math', provider: 'Shanghai AI Lab', category: 'Reasoning Model', description: 'Mathematical reasoning specialist.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '16K', capabilities: [], release: '2024-01' },
    { name: 'InternVL-Chat', provider: 'Shanghai AI Lab', category: 'Vision', description: 'Vision-language chat model.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '32K', capabilities: [], release: '2024-05' },
    { name: 'InternLM-20B', provider: 'Shanghai AI Lab', category: 'Text Generation', description: 'Previous generation 20B.', inputPrice: 0.21, outputPrice: 0.21, contextWindow: '16K', capabilities: [], release: '2023-09' },
    { name: 'InternLM-7B', provider: 'Shanghai AI Lab', category: 'Text Generation', description: 'Previous generation 7B.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '16K', capabilities: [], release: '2023-09' },

    // Stepfun Models (4 models)
    { name: 'Step-1V', provider: 'Stepfun', category: 'Vision', description: 'Vision-language model with strong OCR.', inputPrice: 0.14, outputPrice: 0.42, contextWindow: '8K', capabilities: [], release: '2024-05' },
    { name: 'Step-1-8K', provider: 'Stepfun', category: 'Text Generation', description: 'General-purpose 8K context model.', inputPrice: 0.14, outputPrice: 0.42, contextWindow: '8K', capabilities: [], release: '2024-03' },
    { name: 'Step-1-32K', provider: 'Stepfun', category: 'Text Generation', description: 'Extended 32K context version.', inputPrice: 0.28, outputPrice: 0.84, contextWindow: '32K', capabilities: [], release: '2024-04' },
    { name: 'Step-1-128K', provider: 'Stepfun', category: 'Text Generation', description: 'Ultra-long 128K context.', inputPrice: 0.56, outputPrice: 1.68, contextWindow: '128K', capabilities: [], release: '2024-09', isLatest: true },

    // Minimax Audio/Video Models (3 models)
    { name: 'MiniMax-Video-01', provider: 'MiniMax', category: 'Video Generation', description: 'High-quality text-to-video generation.', inputPrice: 5, outputPrice: 5, contextWindow: '8K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'MiniMax-Music-01', provider: 'MiniMax', category: 'Audio Generation', description: 'Music generation from text prompts.', inputPrice: 1, outputPrice: 1, contextWindow: '4K', capabilities: [], release: '2024-09' },
    { name: 'MiniMax-Speech', provider: 'MiniMax', category: 'Audio Generation', description: 'Text-to-speech synthesis.', inputPrice: 0.1, outputPrice: 0.1, contextWindow: '4K', capabilities: [], release: '2024-08' },

    // Runway Models (3 models)
    { name: 'Gen-3 Alpha Turbo', provider: 'Runway', category: 'Video Generation', description: 'Latest generation video generation.', inputPrice: 0.5, outputPrice: 0.5, contextWindow: '4K', capabilities: [], release: '2024-07', isLatest: true },
    { name: 'Gen-3 Alpha', provider: 'Runway', category: 'Video Generation', description: 'High-quality video synthesis.', inputPrice: 1, outputPrice: 1, contextWindow: '4K', capabilities: [], release: '2024-06' },
    { name: 'Gen-2', provider: 'Runway', category: 'Video Generation', description: 'Previous generation model.', inputPrice: 0.75, outputPrice: 0.75, contextWindow: '4K', capabilities: [], release: '2023-03' },

    // AWS Bedrock Models (8 models)
    { name: 'Amazon Nova Pro', provider: 'AWS', category: 'Multimodal', description: 'Flagship multimodal model from AWS.', inputPrice: 0.8, outputPrice: 3.2, contextWindow: '300K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Amazon Nova Lite', provider: 'AWS', category: 'Multimodal', description: 'Cost-effective multimodal model.', inputPrice: 0.06, outputPrice: 0.24, contextWindow: '300K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Amazon Nova Micro', provider: 'AWS', category: 'Text Generation', description: 'Ultra-fast text-only model.', inputPrice: 0.035, outputPrice: 0.14, contextWindow: '128K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Amazon Titan Text G1', provider: 'AWS', category: 'Text Generation', description: 'AWS Titan text generation model.', inputPrice: 0.3, outputPrice: 0.4, contextWindow: '8K', capabilities: [], release: '2023-04' },
    { name: 'Amazon Titan Embed', provider: 'AWS', category: 'Embedding', description: 'Text embedding model.', inputPrice: 0.1, outputPrice: 0.1, contextWindow: '8K', capabilities: [], release: '2023-04' },
    { name: 'Amazon Titan Image', provider: 'AWS', category: 'Image Generation', description: 'Image generation and editing.', inputPrice: 0.04, outputPrice: 0.04, contextWindow: '4K', capabilities: [], release: '2023-11' },
    { name: 'Amazon Titan Multimodal', provider: 'AWS', category: 'Multimodal', description: 'Multimodal understanding model.', inputPrice: 0.5, outputPrice: 0.5, contextWindow: '16K', capabilities: [], release: '2024-05' },
    { name: 'Claude on Bedrock', provider: 'AWS', category: 'Text Generation', description: 'Anthropic Claude via AWS Bedrock.', inputPrice: 3, outputPrice: 15, contextWindow: '200K', capabilities: [], release: '2024-01' },

    // Azure OpenAI Models (5 models)
    { name: 'Azure GPT-4o', provider: 'Microsoft Azure', category: 'Multimodal', description: 'GPT-4o on Azure platform.', inputPrice: 5, outputPrice: 15, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-05' },
    { name: 'Azure GPT-4 Turbo', provider: 'Microsoft Azure', category: 'Text Generation', description: 'GPT-4 Turbo on Azure.', inputPrice: 10, outputPrice: 30, contextWindow: '128K', capabilities: [], release: '2024-04' },
    { name: 'Azure GPT-3.5 Turbo', provider: 'Microsoft Azure', category: 'Text Generation', description: 'GPT-3.5 on Azure platform.', inputPrice: 0.5, outputPrice: 1.5, contextWindow: '16K', capabilities: [], release: '2023-03' },
    { name: 'Azure Ada', provider: 'Microsoft Azure', category: 'Embedding', description: 'Text embedding model on Azure.', inputPrice: 0.1, outputPrice: 0.1, contextWindow: '8K', capabilities: [], release: '2022-12' },
    { name: 'Azure DALL-E 3', provider: 'Microsoft Azure', category: 'Image Generation', description: 'DALL-E 3 on Azure platform.', inputPrice: 0.04, outputPrice: 0.08, contextWindow: '4K', capabilities: [], release: '2023-10' },

    // Perplexity Models (4 models)
    { name: 'pplx-70b-online', provider: 'Perplexity', category: 'Text Generation', description: 'Online search-enhanced 70B model.', inputPrice: 1, outputPrice: 1, contextWindow: '4K', capabilities: [], release: '2024-01' },
    { name: 'pplx-7b-online', provider: 'Perplexity', category: 'Text Generation', description: 'Online search-enhanced 7B model.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '4K', capabilities: [], release: '2024-01' },
    { name: 'pplx-7b-chat', provider: 'Perplexity', category: 'Text Generation', description: 'Offline chat model.', inputPrice: 0.07, outputPrice: 0.28, contextWindow: '8K', capabilities: [], release: '2023-12' },
    { name: 'pplx-70b-chat', provider: 'Perplexity', category: 'Text Generation', description: 'Offline 70B chat model.', inputPrice: 0.7, outputPrice: 2.8, contextWindow: '4K', capabilities: [], release: '2023-12' },

    // Together AI Models (10 models)
    { name: 'Qwen2.5-72B-Instruct', provider: 'Together AI', category: 'Text Generation', description: 'Qwen 2.5 on Together platform.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '32K', capabilities: [], release: '2024-09' },
    { name: 'Llama-3.1-405B-Instruct', provider: 'Together AI', category: 'Text Generation', description: 'Llama 3.1 405B on Together.', inputPrice: 5, outputPrice: 5, contextWindow: '128K', capabilities: [], release: '2024-07' },
    { name: 'Llama-3.1-70B-Instruct', provider: 'Together AI', category: 'Text Generation', description: 'Llama 3.1 70B on Together.', inputPrice: 0.88, outputPrice: 0.88, contextWindow: '128K', capabilities: [], release: '2024-07' },
    { name: 'Llama-3.1-8B-Instruct', provider: 'Together AI', category: 'Text Generation', description: 'Llama 3.1 8B on Together.', inputPrice: 0.18, outputPrice: 0.18, contextWindow: '128K', capabilities: [], release: '2024-07' },
    { name: 'Mixtral-8x22B-Instruct', provider: 'Together AI', category: 'Text Generation', description: 'Mixtral 8x22B on Together.', inputPrice: 1.2, outputPrice: 1.2, contextWindow: '64K', capabilities: [], release: '2024-04' },
    { name: 'Mixtral-8x7B-Instruct', provider: 'Together AI', category: 'Text Generation', description: 'Mixtral 8x7B on Together.', inputPrice: 0.6, outputPrice: 0.6, contextWindow: '32K', capabilities: [], release: '2023-12' },
    { name: 'Gemma-2-27B-IT', provider: 'Together AI', category: 'Text Generation', description: 'Google Gemma 2 27B on Together.', inputPrice: 0.8, outputPrice: 0.8, contextWindow: '8K', capabilities: [], release: '2024-06' },
    { name: 'Gemma-2-9B-IT', provider: 'Together AI', category: 'Text Generation', description: 'Google Gemma 2 9B on Together.', inputPrice: 0.3, outputPrice: 0.3, contextWindow: '8K', capabilities: [], release: '2024-06' },
    { name: 'DeepSeek-V2.5', provider: 'Together AI', category: 'Text Generation', description: 'DeepSeek V2.5 on Together.', inputPrice: 0.27, outputPrice: 1.1, contextWindow: '128K', capabilities: [], release: '2024-09' },
    { name: 'DBRX-Instruct', provider: 'Together AI', category: 'Text Generation', description: 'Databricks DBRX on Together.', inputPrice: 1.2, outputPrice: 1.2, contextWindow: '32K', capabilities: [], release: '2024-03' },

    // Replicate Models (8 models)
    { name: 'Flux Pro', provider: 'Replicate', category: 'Image Generation', description: 'High-quality image generation.', inputPrice: 0.055, outputPrice: 0.055, contextWindow: '4K', capabilities: [], release: '2024-08', isLatest: true },
    { name: 'Flux Schnell', provider: 'Replicate', category: 'Image Generation', description: 'Fast image generation variant.', inputPrice: 0.003, outputPrice: 0.003, contextWindow: '4K', capabilities: [], release: '2024-08' },
    { name: 'SDXL', provider: 'Replicate', category: 'Image Generation', description: 'Stable Diffusion XL on Replicate.', inputPrice: 0.04, outputPrice: 0.04, contextWindow: '4K', capabilities: [], release: '2023-07' },
    { name: 'Llama-3-70B-Instruct', provider: 'Replicate', category: 'Text Generation', description: 'Llama 3 70B on Replicate.', inputPrice: 0.65, outputPrice: 2.75, contextWindow: '8K', capabilities: [], release: '2024-04' },
    { name: 'Llama-3-8B-Instruct', provider: 'Replicate', category: 'Text Generation', description: 'Llama 3 8B on Replicate.', inputPrice: 0.05, outputPrice: 0.25, contextWindow: '8K', capabilities: [], release: '2024-04' },
    { name: 'Mistral-7B-Instruct', provider: 'Replicate', category: 'Text Generation', description: 'Mistral 7B on Replicate.', inputPrice: 0.05, outputPrice: 0.25, contextWindow: '32K', capabilities: [], release: '2023-09' },
    { name: 'CodeLlama-70B-Instruct', provider: 'Replicate', category: 'Code Generation', description: 'Code Llama 70B on Replicate.', inputPrice: 0.65, outputPrice: 2.75, contextWindow: '16K', capabilities: [], release: '2023-08' },
    { name: 'Musicgen', provider: 'Replicate', category: 'Audio Generation', description: 'Music generation model.', inputPrice: 0.05, outputPrice: 0.05, contextWindow: '4K', capabilities: [], release: '2023-06' },

    // Additional Chinese Models - 360 AI (6 models)
    { name: '360GPT-S2-V9', provider: '360 AI', category: 'Text Generation', description: '360 GPT flagship model with strong Chinese support.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '32K', capabilities: [], release: '2024-08' },
    { name: '360GPT-Pro', provider: '360 AI', category: 'Text Generation', description: 'Professional version for enterprise use.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '16K', capabilities: [], release: '2024-05' },
    { name: '360GPT-Turbo', provider: '360 AI', category: 'Text Generation', description: 'Fast response optimized model.', inputPrice: 0.14, outputPrice: 0.14, contextWindow: '8K', capabilities: [], release: '2024-03' },
    { name: '360GPT-Lite', provider: '360 AI', category: 'Text Generation', description: 'Lightweight cost-effective model.', inputPrice: 0.07, outputPrice: 0.07, contextWindow: '8K', capabilities: [], release: '2024-02' },
    { name: '360GPT-Vision', provider: '360 AI', category: 'Vision', description: 'Vision-language understanding model.', inputPrice: 0.42, outputPrice: 0.42, contextWindow: '16K', capabilities: [], release: '2024-06' },
    { name: '360GPT-Code', provider: '360 AI', category: 'Code Generation', description: 'Specialized code generation model.', inputPrice: 0.21, outputPrice: 0.21, contextWindow: '16K', capabilities: [], release: '2024-07' },

    // Abacus AI Models (4 models)
    { name: 'Smaug-72B-v0.1', provider: 'Abacus AI', category: 'Text Generation', description: 'Top-performing 72B model on MT-Bench.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '32K', capabilities: [], release: '2024-02' },
    { name: 'Dracarys-72B', provider: 'Abacus AI', category: 'Text Generation', description: 'Fine-tuned dragon-themed model.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '32K', capabilities: [], release: '2024-03' },
    { name: 'Smaug-34B-v0.1', provider: 'Abacus AI', category: 'Text Generation', description: 'Mid-size high-performance model.', inputPrice: 0.5, outputPrice: 0.5, contextWindow: '32K', capabilities: [], release: '2024-02' },
    { name: 'Smaug-8B-v0.1', provider: 'Abacus AI', category: 'Text Generation', description: 'Efficient 8B parameter model.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '32K', capabilities: [], release: '2024-02' },

    // NousResearch Models (6 models)
    { name: 'Hermes-3-Llama-3.1-405B', provider: 'NousResearch', category: 'Text Generation', description: 'Largest Hermes model with 405B parameters.', inputPrice: 5, outputPrice: 5, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-08', isLatest: true },
    { name: 'Hermes-3-Llama-3.1-70B', provider: 'NousResearch', category: 'Text Generation', description: 'Mid-size Hermes with strong performance.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-08' },
    { name: 'Hermes-2-Pro-Llama-3-8B', provider: 'NousResearch', category: 'Text Generation', description: 'Professional 8B model.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '8K', capabilities: [], release: '2024-05' },
    { name: 'Hermes-2-Pro-Mistral-7B', provider: 'NousResearch', category: 'Text Generation', description: 'Mistral-based Hermes variant.', inputPrice: 0.2, outputPrice: 0.6, contextWindow: '32K', capabilities: [], release: '2024-01' },
    { name: 'Nous-Hermes-2-Yi-34B', provider: 'NousResearch', category: 'Text Generation', description: 'Yi-based Hermes model.', inputPrice: 0.8, outputPrice: 0.8, contextWindow: '32K', capabilities: [], release: '2024-01' },
    { name: 'Nous-Capybara-7B', provider: 'NousResearch', category: 'Text Generation', description: 'Capybara series 7B model.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '32K', capabilities: [], release: '2023-12' },

    // Groq Models (5 models)
    { name: 'Llama-3.1-405B-Turbo', provider: 'Groq', category: 'Text Generation', description: 'Ultra-fast inference 405B model.', inputPrice: 0, outputPrice: 0, contextWindow: '128K', capabilities: [], release: '2024-07', isFree: true, isLatest: true },
    { name: 'Llama-3.1-70B-Turbo', provider: 'Groq', category: 'Text Generation', description: 'Fast 70B model on Groq.', inputPrice: 0, outputPrice: 0, contextWindow: '128K', capabilities: [], release: '2024-07', isFree: true },
    { name: 'Llama-3.1-8B-Instant', provider: 'Groq', category: 'Text Generation', description: 'Instant response 8B model.', inputPrice: 0, outputPrice: 0, contextWindow: '128K', capabilities: [], release: '2024-07', isFree: true },
    { name: 'Mixtral-8x7B-Groq', provider: 'Groq', category: 'Text Generation', description: 'Mixtral on Groq infrastructure.', inputPrice: 0, outputPrice: 0, contextWindow: '32K', capabilities: [], release: '2024-01', isFree: true },
    { name: 'Gemma-7B-Groq', provider: 'Groq', category: 'Text Generation', description: 'Google Gemma on Groq.', inputPrice: 0, outputPrice: 0, contextWindow: '8K', capabilities: [], release: '2024-02', isFree: true },

    // Reka AI Models (3 models)
    { name: 'Reka Core', provider: 'Reka AI', category: 'Multimodal', description: 'Flagship multimodal model with strong vision capabilities.', inputPrice: 3, outputPrice: 10, contextWindow: '128K', capabilities: [], release: '2024-04' },
    { name: 'Reka Flash', provider: 'Reka AI', category: 'Multimodal', description: 'Fast multimodal inference model.', inputPrice: 0.8, outputPrice: 2, contextWindow: '128K', capabilities: [], release: '2024-04' },
    { name: 'Reka Edge', provider: 'Reka AI', category: 'Multimodal', description: 'Edge deployment multimodal model.', inputPrice: 0.4, outputPrice: 1, contextWindow: '128K', capabilities: [], release: '2024-04' },

    // AI21 Labs Models (6 models)
    { name: 'Jamba 1.5 Large', provider: 'AI21 Labs', category: 'Text Generation', description: 'Hybrid SSM-Transformer with 256K context.', inputPrice: 2, outputPrice: 8, contextWindow: '256K', capabilities: ['Function Call'], release: '2024-08', isLatest: true },
    { name: 'Jamba 1.5 Mini', provider: 'AI21 Labs', category: 'Text Generation', description: 'Compact version with 256K context.', inputPrice: 0.2, outputPrice: 0.4, contextWindow: '256K', capabilities: [], release: '2024-08', isLatest: true },
    { name: 'Jamba Instruct', provider: 'AI21 Labs', category: 'Text Generation', description: 'Instruction-tuned Jamba model.', inputPrice: 0.5, outputPrice: 0.7, contextWindow: '256K', capabilities: [], release: '2024-03' },
    { name: 'Jurassic-2 Ultra', provider: 'AI21 Labs', category: 'Text Generation', description: 'Flagship Jurassic model.', inputPrice: 0.0188, outputPrice: 0.0188, contextWindow: '8K', capabilities: [], release: '2023-03' },
    { name: 'Jurassic-2 Mid', provider: 'AI21 Labs', category: 'Text Generation', description: 'Mid-tier Jurassic model.', inputPrice: 0.01, outputPrice: 0.01, contextWindow: '8K', capabilities: [], release: '2023-03' },
    { name: 'Jurassic-2 Light', provider: 'AI21 Labs', category: 'Text Generation', description: 'Lightweight Jurassic model.', inputPrice: 0.003, outputPrice: 0.003, contextWindow: '8K', capabilities: [], release: '2023-03' },

    // Fireworks AI Models (8 models)
    { name: 'Llama-3.1-405B-Instruct-FP8', provider: 'Fireworks AI', category: 'Text Generation', description: 'FP8 optimized 405B model.', inputPrice: 3, outputPrice: 3, contextWindow: '128K', capabilities: [], release: '2024-07' },
    { name: 'Llama-3.1-70B-Instruct', provider: 'Fireworks AI', category: 'Text Generation', description: 'Llama 3.1 70B on Fireworks.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '128K', capabilities: [], release: '2024-07' },
    { name: 'Llama-3.1-8B-Instruct', provider: 'Fireworks AI', category: 'Text Generation', description: 'Llama 3.1 8B on Fireworks.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '128K', capabilities: [], release: '2024-07' },
    { name: 'Mixtral-8x22B-Instruct-FP8', provider: 'Fireworks AI', category: 'Text Generation', description: 'FP8 Mixtral 8x22B.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '64K', capabilities: [], release: '2024-04' },
    { name: 'Mixtral-8x7B-Instruct', provider: 'Fireworks AI', category: 'Text Generation', description: 'Mixtral on Fireworks platform.', inputPrice: 0.5, outputPrice: 0.5, contextWindow: '32K', capabilities: [], release: '2023-12' },
    { name: 'Qwen2.5-72B-Instruct', provider: 'Fireworks AI', category: 'Text Generation', description: 'Qwen 2.5 on Fireworks.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '32K', capabilities: [], release: '2024-09' },
    { name: 'DeepSeek-V2.5', provider: 'Fireworks AI', category: 'Text Generation', description: 'DeepSeek on Fireworks.', inputPrice: 0.9, outputPrice: 0.9, contextWindow: '128K', capabilities: [], release: '2024-09' },
    { name: 'Gemma-2-9B-IT', provider: 'Fireworks AI', category: 'Text Generation', description: 'Gemma 2 9B on Fireworks.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '8K', capabilities: [], release: '2024-06' },

    // Hugging Face Models (6 models)
    { name: 'Zephyr-7B-Beta', provider: 'Hugging Face', category: 'Text Generation', description: 'Community fine-tuned Mistral variant.', inputPrice: 0.07, outputPrice: 0.28, contextWindow: '32K', capabilities: [], release: '2023-10' },
    { name: 'StarCoder2-15B', provider: 'Hugging Face', category: 'Code Generation', description: 'Code generation model with 15B parameters.', inputPrice: 0.3, outputPrice: 0.3, contextWindow: '16K', capabilities: [], release: '2024-02' },
    { name: 'SmolLM-1.7B', provider: 'Hugging Face', category: 'Text Generation', description: 'Small efficient model for edge devices.', inputPrice: 0.05, outputPrice: 0.05, contextWindow: '2K', capabilities: [], release: '2024-07', isLatest: true },
    { name: 'Falcon-180B', provider: 'Hugging Face', category: 'Text Generation', description: 'Large open model from TII.', inputPrice: 3.5, outputPrice: 3.5, contextWindow: '2K', capabilities: [], release: '2023-09' },
    { name: 'Falcon-40B', provider: 'Hugging Face', category: 'Text Generation', description: 'Mid-size Falcon model.', inputPrice: 0.8, outputPrice: 0.8, contextWindow: '2K', capabilities: [], release: '2023-05' },
    { name: 'Falcon-7B', provider: 'Hugging Face', category: 'Text Generation', description: 'Efficient 7B Falcon model.', inputPrice: 0.2, outputPrice: 0.2, contextWindow: '2K', capabilities: [], release: '2023-05' },

    // Additional Open Source Models (10 models)
    { name: 'Vicuna-33B', provider: 'LMSYS', category: 'Text Generation', description: 'Open LLaMA fine-tune by LMSYS.', inputPrice: 0, outputPrice: 0, contextWindow: '2K', capabilities: [], release: '2023-03', isFree: true },
    { name: 'Vicuna-13B', provider: 'LMSYS', category: 'Text Generation', description: 'Mid-size Vicuna model.', inputPrice: 0, outputPrice: 0, contextWindow: '2K', capabilities: [], release: '2023-03', isFree: true },
    { name: 'Vicuna-7B', provider: 'LMSYS', category: 'Text Generation', description: 'Small Vicuna model.', inputPrice: 0, outputPrice: 0, contextWindow: '2K', capabilities: [], release: '2023-03', isFree: true },
    { name: 'WizardLM-70B', provider: 'WizardLM', category: 'Text Generation', description: 'Instruction-following 70B model.', inputPrice: 0, outputPrice: 0, contextWindow: '2K', capabilities: [], release: '2023-08', isFree: true },
    { name: 'WizardCoder-34B', provider: 'WizardLM', category: 'Code Generation', description: 'Code-specialized 34B model.', inputPrice: 0, outputPrice: 0, contextWindow: '8K', capabilities: [], release: '2023-06', isFree: true },
    { name: 'Orca-2-13B', provider: 'Microsoft', category: 'Text Generation', description: 'Microsoft Orca reasoning model.', inputPrice: 0, outputPrice: 0, contextWindow: '4K', capabilities: [], release: '2023-11', isFree: true },
    { name: 'Orca-2-7B', provider: 'Microsoft', category: 'Text Generation', description: 'Small Orca model.', inputPrice: 0, outputPrice: 0, contextWindow: '4K', capabilities: [], release: '2023-11', isFree: true },
    { name: 'Phi-3-Medium', provider: 'Microsoft', category: 'Text Generation', description: '14B parameter efficient model.', inputPrice: 0, outputPrice: 0, contextWindow: '128K', capabilities: [], release: '2024-04', isFree: true },
    { name: 'Phi-3-Mini', provider: 'Microsoft', category: 'Text Generation', description: '3.8B parameter small model.', inputPrice: 0, outputPrice: 0, contextWindow: '128K', capabilities: [], release: '2024-04', isFree: true },
    { name: 'Phi-2', provider: 'Microsoft', category: 'Text Generation', description: '2.7B parameter model.', inputPrice: 0, outputPrice: 0, contextWindow: '2K', capabilities: [], release: '2023-12', isFree: true },

    // Additional Image/Video Models (8 models)
    { name: 'Playground v2.5', provider: 'Playground AI', category: 'Image Generation', description: 'High-quality aesthetic image generation.', inputPrice: 0.04, outputPrice: 0.04, contextWindow: '4K', capabilities: [], release: '2024-02' },
    { name: 'Kandinsky 3.0', provider: 'Sber AI', category: 'Image Generation', description: 'Russian text-to-image model.', inputPrice: 0.03, outputPrice: 0.03, contextWindow: '4K', capabilities: [], release: '2023-11' },
    { name: 'Kandinsky 2.2', provider: 'Sber AI', category: 'Image Generation', description: 'Previous Kandinsky version.', inputPrice: 0.02, outputPrice: 0.02, contextWindow: '4K', capabilities: [], release: '2023-05' },
    { name: 'Ideogram v2', provider: 'Ideogram', category: 'Image Generation', description: 'Text rendering focused image generation.', inputPrice: 0.08, outputPrice: 0.08, contextWindow: '4K', capabilities: [], release: '2024-08', isLatest: true },
    { name: 'Ideogram v1', provider: 'Ideogram', category: 'Image Generation', description: 'First generation Ideogram.', inputPrice: 0.05, outputPrice: 0.05, contextWindow: '4K', capabilities: [], release: '2023-08' },
    { name: 'Leonardo Phoenix', provider: 'Leonardo AI', category: 'Image Generation', description: 'AI art generation platform.', inputPrice: 0.05, outputPrice: 0.05, contextWindow: '4K', capabilities: [], release: '2024-09', isLatest: true },
    { name: 'Kling AI', provider: 'Kuaishou', category: 'Video Generation', description: 'Chinese video generation model.', inputPrice: 2, outputPrice: 2, contextWindow: '4K', capabilities: [], release: '2024-06' },
    { name: 'Pika 1.0', provider: 'Pika Labs', category: 'Video Generation', description: 'Text-to-video generation.', inputPrice: 1, outputPrice: 1, contextWindow: '4K', capabilities: [], release: '2023-11' },
    
    // Additional Latest Models (34 models to reach 326 total)
    { name: 'GPT-4.1', provider: 'OpenAI', category: 'Multimodal', description: 'Latest GPT-4.1 with enhanced capabilities.', inputPrice: 2.5, outputPrice: 10, contextWindow: '128K', capabilities: ['Function Call', 'Structured Output'], release: '2025-01', isLatest: true },
    { name: 'Gemini 2.0 Flash Preview', provider: 'Google', category: 'Multimodal', description: 'Preview version of Gemini 2.0 Flash with experimental features.', inputPrice: 0, outputPrice: 0, contextWindow: '1M', capabilities: ['Function Call'], release: '2025-01', isFree: true, isLatest: true },
    { name: 'Claude 3 Haiku 200K', provider: 'Anthropic', category: 'Text Generation', description: 'Claude 3 Haiku with extended 200K context.', inputPrice: 0.25, outputPrice: 1.25, contextWindow: '200K', capabilities: [], release: '2024-06' },
    { name: 'Qwen2.5-14B', provider: 'Alibaba', category: 'Text Generation', description: '14B parameter efficient model.', inputPrice: 0.021, outputPrice: 0.07, contextWindow: '128K', capabilities: [], release: '2024-09' },
    { name: 'Qwen2.5-7B', provider: 'Alibaba', category: 'Text Generation', description: '7B parameter lightweight model.', inputPrice: 0.0042, outputPrice: 0.014, contextWindow: '128K', capabilities: [], release: '2024-09' },
    { name: 'DeepSeek V2', provider: 'DeepSeek', category: 'Text Generation', description: 'Second generation DeepSeek model.', inputPrice: 0.14, outputPrice: 0.28, contextWindow: '64K', capabilities: [], release: '2024-05' },
    { name: 'Doubao-character', provider: 'Bytedance', category: 'Text Generation', description: 'Character-based dialogue specialist.', inputPrice: 0.07, outputPrice: 0.21, contextWindow: '32K', capabilities: [], release: '2024-08' },
    { name: 'ERNIE-4.0-128K', provider: 'Baidu', category: 'Text Generation', description: 'ERNIE 4.0 with extended context.', inputPrice: 1.68, outputPrice: 1.68, contextWindow: '128K', capabilities: [], release: '2024-06' },
    { name: 'Grok 3 Pro', provider: 'xAI', category: 'Multimodal', description: 'Pro version with enhanced capabilities.', inputPrice: 5, outputPrice: 20, contextWindow: '128K', capabilities: ['Function Call'], release: '2025-03', isLatest: true },
    { name: 'Hunyuan-Vision', provider: 'Tencent', category: 'Vision', description: 'Vision-language understanding model.', inputPrice: 0.42, outputPrice: 0.42, contextWindow: '32K', capabilities: [], release: '2024-10', isLatest: true },
    { name: 'Kimi-K1', provider: 'Moonshot', category: 'Text Generation', description: 'First generation Kimi model.', inputPrice: 1.68, outputPrice: 1.68, contextWindow: '128K', capabilities: [], release: '2024-06' },
    { name: 'abab6-Chat', provider: 'MiniMax', category: 'Text Generation', description: 'Previous generation abab6.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '16K', capabilities: [], release: '2024-06' },
    { name: 'GLM-4-Plus', provider: 'Zhipu AI', category: 'Text Generation', description: 'Enhanced GLM-4 version.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-08' },
    { name: 'SenseChat-4', provider: 'SenseTime', category: 'Text Generation', description: 'Fourth generation SenseChat.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '32K', capabilities: [], release: '2024-05' },
    { name: 'Mistral Large 2', provider: 'Mistral', category: 'Text Generation', description: 'Second generation Mistral Large.', inputPrice: 4, outputPrice: 12, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-09', isLatest: true },
    { name: 'Llama-3.2-90B', provider: 'Meta', category: 'Multimodal', description: 'Multimodal Llama 3.2 with vision.', inputPrice: 1.2, outputPrice: 1.2, contextWindow: '128K', capabilities: [], release: '2024-09', isLatest: true },
    { name: 'Llama-3.2-11B', provider: 'Meta', category: 'Multimodal', description: 'Lightweight multimodal model.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '128K', capabilities: [], release: '2024-09', isLatest: true },
    { name: 'Llama-3.2-3B', provider: 'Meta', category: 'Text Generation', description: 'Small efficient Llama 3.2.', inputPrice: 0.1, outputPrice: 0.1, contextWindow: '128K', capabilities: [], release: '2024-09', isLatest: true },
    { name: 'Llama-3.2-1B', provider: 'Meta', category: 'Text Generation', description: 'Ultra-lightweight Llama 3.2.', inputPrice: 0.05, outputPrice: 0.05, contextWindow: '128K', capabilities: [], release: '2024-09', isLatest: true },
    { name: 'Command R+ 08-2024', provider: 'Cohere', category: 'Text Generation', description: 'August 2024 update of Command R+.', inputPrice: 3, outputPrice: 15, contextWindow: '128K', capabilities: ['Function Call'], release: '2024-08' },
    { name: 'Spark 4.0', provider: 'iFlytek', category: 'Text Generation', description: 'Fourth generation Spark model.', inputPrice: 0.7, outputPrice: 0.7, contextWindow: '128K', capabilities: [], release: '2024-08' },
    { name: 'Yi-Large-Preview', provider: '01.AI', category: 'Text Generation', description: 'Preview version of Yi-Large.', inputPrice: 0.42, outputPrice: 1.26, contextWindow: '32K', capabilities: [], release: '2024-09' },
    { name: 'Stable Diffusion 3', provider: 'Stability AI', category: 'Image Generation', description: 'Third generation Stable Diffusion.', inputPrice: 0.05, outputPrice: 0.05, contextWindow: '4K', capabilities: [], release: '2024-06' },
    { name: 'Midjourney v6.1', provider: 'Midjourney', category: 'Image Generation', description: 'Updated v6 with improvements.', inputPrice: 0.06, outputPrice: 0.06, contextWindow: '4K', capabilities: [], release: '2024-08', isLatest: true },
    { name: 'Baichuan3', provider: 'Baichuan', category: 'Text Generation', description: 'Third generation Baichuan model.', inputPrice: 0.35, outputPrice: 0.35, contextWindow: '32K', capabilities: [], release: '2024-07' },
    { name: 'MiniCPM-3-4B', provider: 'OpenBMB', category: 'Text Generation', description: '4B parameter efficient model.', inputPrice: 0.1, outputPrice: 0.1, contextWindow: '4K', capabilities: [], release: '2024-09', isLatest: true },
    { name: 'InternLM2-20B', provider: 'Shanghai AI Lab', category: 'Text Generation', description: '20B parameter model.', inputPrice: 0.28, outputPrice: 0.28, contextWindow: '32K', capabilities: [], release: '2024-06' },
    { name: 'Step-2-16K', provider: 'Stepfun', category: 'Vision', description: 'Vision model with 16K context.', inputPrice: 0.28, outputPrice: 0.84, contextWindow: '16K', capabilities: [], release: '2024-10', isLatest: true },
    { name: 'Gen-4 Alpha', provider: 'Runway', category: 'Video Generation', description: 'Fourth generation video model.', inputPrice: 1.5, outputPrice: 1.5, contextWindow: '4K', capabilities: [], release: '2025-01', isLatest: true },
    { name: 'Sora Turbo', provider: 'OpenAI', category: 'Video Generation', description: 'Fast video generation model.', inputPrice: 3, outputPrice: 3, contextWindow: '4K', capabilities: [], release: '2024-12', isLatest: true },
    { name: 'Imagen Video', provider: 'Google', category: 'Video Generation', description: 'Text-to-video generation by Google.', inputPrice: 2, outputPrice: 2, contextWindow: '4K', capabilities: [], release: '2024-10', isLatest: true },
    { name: 'Whisper Large V3', provider: 'OpenAI', category: 'Audio Generation', description: 'Latest speech recognition model.', inputPrice: 0.006, outputPrice: 0.006, contextWindow: '30s', capabilities: [], release: '2024-11', isLatest: true },
    { name: 'Text-Embedding-Large', provider: 'OpenAI', category: 'Embedding', description: 'Large embedding model with 3072 dimensions.', inputPrice: 0.13, outputPrice: 0.13, contextWindow: '8K', capabilities: [], release: '2024-09', isLatest: true },
    { name: 'Embed-Multilingual-V3', provider: 'Cohere', category: 'Embedding', description: 'Multilingual embedding with 1024 dimensions.', inputPrice: 0.1, outputPrice: 0.1, contextWindow: '512', capabilities: [], release: '2024-06' }
];

// Filter and search functionality
let filteredModels = [...allModelsData];

function getContextRange(contextWindow) {
    const value = contextWindow.replace(/[KM+]/g, '');
    const num = parseInt(value);
    
    if (contextWindow.includes('M')) {
        return '500K+';
    } else if (num >= 500) {
        return '500K+';
    } else if (num >= 128) {
        return '128-500K';
    } else if (num >= 32) {
        return '32-128K';
    } else if (num >= 16) {
        return '16-32K';
    } else {
        return '0-16K';
    }
}

function filterModels() {
    const searchTerm = document.getElementById('modelsSearchInput').value.toLowerCase();
    const providerFilter = document.getElementById('filterProvider').value;
    const categoryFilter = document.getElementById('filterCategory').value;
    const capabilityFilter = document.getElementById('filterCapability').value;
    const contextFilter = document.getElementById('filterContext').value;
    
    filteredModels = allModelsData.filter(model => {
        const matchesSearch = !searchTerm || 
            model.name.toLowerCase().includes(searchTerm) ||
            model.provider.toLowerCase().includes(searchTerm) ||
            model.description.toLowerCase().includes(searchTerm) ||
            model.category.toLowerCase().includes(searchTerm);
        
        const matchesProvider = !providerFilter || model.provider === providerFilter;
        const matchesCategory = !categoryFilter || model.category === categoryFilter;
        const matchesCapability = !capabilityFilter || model.capabilities.includes(capabilityFilter);
        const matchesContext = !contextFilter || getContextRange(model.contextWindow) === contextFilter;
        
        return matchesSearch && matchesProvider && matchesCategory && matchesCapability && matchesContext;
    });
    
    // Reset to page 1 when filters change
    currentPage = 1;
    
    displayModels();
}

function displayModels() {
    const grid = document.getElementById('modelsGrid');
    const count = document.getElementById('modelsCount');
    const paginationContainer = document.getElementById('paginationContainer');
    const totalPagesEl = document.getElementById('totalPages');
    const currentPageEl = document.getElementById('currentPage');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    
    // Update total count
    count.textContent = filteredModels.length;
    
    // Calculate pagination
    const totalPages = Math.ceil(filteredModels.length / modelsPerPage);
    const startIndex = (currentPage - 1) * modelsPerPage;
    const endIndex = Math.min(startIndex + modelsPerPage, filteredModels.length);
    const modelsToDisplay = filteredModels.slice(startIndex, endIndex);
    
    // Display models for current page
    grid.innerHTML = modelsToDisplay.map((model, index) => {
        const actualIndex = startIndex + index; // Calculate actual index in filteredModels
        const logoUrl = getProviderLogo(model.provider);
        return `
        <div class="model-card" onclick="showModelDetail(${actualIndex})">
            <div class="model-card-header">
                <div class="model-logo">
                    <img src="${logoUrl}" alt="${model.provider}" onerror="this.src='https://via.placeholder.com/48/667eea/ffffff?text=${model.provider.charAt(0)}'">
                </div>
                <div class="model-card-info">
                    <div class="model-card-name">${model.name}</div>
                    <span class="model-card-provider">${model.provider}</span>
                </div>
            </div>
            
            <div class="model-card-tags">
                <span class="model-tag">${model.category}</span>
                ${model.isLatest ? '<span class="model-tag tag-latest">Latest</span>' : ''}
                ${model.isFree ? '<span class="model-tag tag-free">Free</span>' : ''}
                ${model.capabilities.map(cap => `<span class="model-tag">${cap}</span>`).join('')}
            </div>
            
            <div class="model-card-description">
                ${model.description}
            </div>
            
            <div class="model-card-details">
                <div class="model-detail-item">
                    <span class="model-detail-label">Context Window</span>
                    <span class="model-detail-value">${model.contextWindow}</span>
                </div>
                <div class="model-detail-item">
                    <span class="model-detail-label">Release Date</span>
                    <span class="model-detail-value">${model.release}</span>
                </div>
                <div class="model-detail-item">
                    <span class="model-detail-label">Input Price</span>
                    <span class="model-detail-value model-price">$${model.inputPrice}/M</span>
                </div>
                <div class="model-detail-item">
                    <span class="model-detail-label">Output Price</span>
                    <span class="model-detail-value model-price">$${model.outputPrice}/M</span>
                </div>
            </div>
        </div>
    `}).join('');
    
    // Show/hide pagination controls
    if (totalPages > 1) {
        paginationContainer.style.display = 'flex';
        totalPagesEl.textContent = totalPages;
        currentPageEl.textContent = currentPage;
        
        // Enable/disable buttons
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    } else {
        paginationContainer.style.display = 'none';
    }
    
    // Scroll to top of models grid
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Show model detail modal
function showModelDetail(index) {
    const model = filteredModels[index];
    const modal = document.getElementById('modelDetailModal');
    const content = document.getElementById('modelDetailContent');
    const logoUrl = getProviderLogo(model.provider);
    
    content.innerHTML = `
        <div class="model-detail-header">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div class="model-logo" style="width: 64px; height: 64px; padding: 8px;">
                    <img src="${logoUrl}" alt="${model.provider}" onerror="this.src='https://via.placeholder.com/64/667eea/ffffff?text=${model.provider.charAt(0)}'">
                </div>
                <div>
                    <div class="model-detail-title">${model.name}</div>
                    <div class="model-detail-provider">
                        <i class="fas fa-building"></i> ${model.provider}
                    </div>
                </div>
            </div>
            <div class="model-detail-tags">
                <span class="model-detail-tag">${model.category}</span>
                ${model.isLatest ? '<span class="model-detail-tag tag-latest">Latest</span>' : ''}
                ${model.isFree ? '<span class="model-detail-tag tag-free">Free</span>' : ''}
                ${model.capabilities.map(cap => `<span class="model-detail-tag">${cap}</span>`).join('')}
            </div>
        </div>
        
        <div class="model-detail-body">
            <div class="model-detail-section">
                <h3 class="model-detail-section-title">Description</h3>
                <p class="model-detail-description">${model.description}</p>
            </div>
            
            <div class="model-detail-section">
                <h3 class="model-detail-section-title">Specifications</h3>
                <div class="model-detail-specs">
                    <div class="model-spec-item">
                        <div class="model-spec-label">Context Window</div>
                        <div class="model-spec-value">${model.contextWindow}</div>
                    </div>
                    <div class="model-spec-item">
                        <div class="model-spec-label">Release Date</div>
                        <div class="model-spec-value">${model.release}</div>
                    </div>
                    <div class="model-spec-item">
                        <div class="model-spec-label">Input Price</div>
                        <div class="model-spec-value price">$${model.inputPrice}/M</div>
                    </div>
                    <div class="model-spec-item">
                        <div class="model-spec-label">Output Price</div>
                        <div class="model-spec-value price">$${model.outputPrice}/M</div>
                    </div>
                </div>
            </div>
            
            ${model.capabilities.length > 0 ? `
                <div class="model-detail-section">
                    <h3 class="model-detail-section-title">Capabilities</h3>
                    <div class="model-detail-capabilities">
                        ${model.capabilities.map(cap => `<div class="model-capability-badge">${cap}</div>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="model-detail-section">
                <h3 class="model-detail-section-title">Pricing Information</h3>
                <p class="model-detail-description">
                    This model is ${model.inputPrice === 0 && model.outputPrice === 0 ? '<strong style="color: #27ae60;">FREE to use</strong>' : `priced at <strong>$${model.inputPrice}</strong> per million input tokens and <strong>$${model.outputPrice}</strong> per million output tokens`}.
                    ${model.isFree ? ' This is a free model available for testing and development.' : ''}
                </p>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close model detail modal
function closeModelDetail() {
    const modal = document.getElementById('modelDetailModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Change page function for pagination
function changePage(direction) {
    const totalPages = Math.ceil(filteredModels.length / modelsPerPage);
    currentPage += direction;
    
    // Ensure page is within bounds
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    
    displayModels();
}

// Initialize filters
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('modelsSearchInput').addEventListener('input', filterModels);
    document.getElementById('filterProvider').addEventListener('change', filterModels);
    document.getElementById('filterCategory').addEventListener('change', filterModels);
    document.getElementById('filterCapability').addEventListener('change', filterModels);
    document.getElementById('filterContext').addEventListener('change', filterModels);
    
    displayModels();
});
