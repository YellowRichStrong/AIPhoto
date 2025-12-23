// AI模型中心 - 核心功能脚本

// 模型数据 - 按分类组织
const modelsData = {
    // 文本生成排行榜
    'text-generation': [
        { rank: 1, model: 'gemini-2.5-pro', provider: 'Google', license: 'Proprietary', score: 1452 },
        { rank: 2, model: 'claude-opus-4-1-20250805-thinking-16k', provider: 'Anthropic', license: 'Proprietary', score: 1448 },
        { rank: 3, model: 'chatgpt-4o-latest-20250326', provider: 'OpenAI', license: 'Proprietary', score: 1441 },
        { rank: 4, model: 'gpt-4.5-preview-2025-02-27', provider: 'OpenAI', license: 'Proprietary', score: 1441 },
        { rank: 5, model: 'gpt-5-high', provider: 'OpenAI', license: 'Proprietary', score: 1440 },
        { rank: 6, model: 'o3-2025-04-16', provider: 'OpenAI', license: 'Proprietary', score: 1440 },
        { rank: 7, model: 'claude-opus-4-1-20250805', provider: 'Anthropic', license: 'Proprietary', score: 1438 },
        { rank: 8, model: 'qwen3-max-preview', provider: 'Alibaba', license: 'Proprietary', score: 1434 },
        { rank: 9, model: 'gpt-5-chat', provider: 'OpenAI', license: 'Proprietary', score: 1426 },
        { rank: 10, model: 'claude-opus-4-20250514-thinking-16k', provider: 'Anthropic', license: 'Proprietary', score: 1420 },
        { rank: 11, model: 'qwen3-235b-a22b-instruct-2507', provider: 'Alibaba', license: 'Apache 2.0', score: 1418 },
        { rank: 12, model: 'deepseek-r1-0528', provider: 'DeepSeek', license: 'MIT', score: 1417 },
        { rank: 13, model: 'kimi-k2-0711-preview', provider: 'Moonshot', license: 'Modified MIT', score: 1416 },
        { rank: 14, model: 'kimi-k2-0905-preview', provider: 'Moonshot', license: 'Modified MIT', score: 1416 },
        { rank: 15, model: 'deepseek-v3.1-thinking', provider: 'DeepSeek', license: 'MIT', score: 1415 },
        { rank: 16, model: 'deepseek-v3.1', provider: 'DeepSeek', license: 'MIT', score: 1415 },
        { rank: 17, model: 'grok-4-0709', provider: 'xAI', license: 'Proprietary', score: 1415 },
        { rank: 18, model: 'claude-opus-4-20250514', provider: 'Anthropic', license: 'Proprietary', score: 1412 },
        { rank: 19, model: 'gpt-4.1-2025-04-14', provider: 'OpenAI', license: 'Proprietary', score: 1411 },
        { rank: 20, model: 'grok-3-preview-02-24', provider: 'xAI', license: 'Proprietary', score: 1409 },
        { rank: 21, model: 'gemini-2.5-flash', provider: 'Google', license: 'Proprietary', score: 1408 },
        { rank: 22, model: 'mistral-medium-2508', provider: 'Mistral', license: 'Proprietary', score: 1407 },
        { rank: 23, model: 'glm-4.5', provider: 'Z.ai', license: 'MIT', score: 1406 },
        { rank: 24, model: 'o1-2024-12-17', provider: 'OpenAI', license: 'Proprietary', score: 1399 },
        { rank: 25, model: 'claude-sonnet-4-20250514-thinking-32k', provider: 'Anthropic', license: 'Proprietary', score: 1398 },
        { rank: 26, model: 'qwen3-235b-a22b-no-thinking', provider: 'Alibaba', license: 'Apache 2.0', score: 1397 },
        { rank: 27, model: 'qwen3-235b-a22b-thinking-2507', provider: 'Alibaba', license: 'Apache 2.0', score: 1397 },
        { rank: 28, model: 'deepseek-r1', provider: 'DeepSeek', license: 'MIT', score: 1394 },
        { rank: 29, model: 'gpt-5-mini-high', provider: 'OpenAI', license: 'Proprietary', score: 1394 },
        { rank: 30, model: 'o4-mini-2025-04-16', provider: 'OpenAI', license: 'Proprietary', score: 1391 },
        { rank: 31, model: 'deepseek-v3-0324', provider: 'DeepSeek', license: 'MIT', score: 1391 },
        { rank: 32, model: 'mai-1-preview', provider: 'Microsoft AI', license: 'Proprietary', score: 1390 },
        { rank: 33, model: 'claude-sonnet-4-20250514', provider: 'Anthropic', license: 'Proprietary', score: 1389 },
        { rank: 34, model: 'o1-preview', provider: 'OpenAI', license: 'Proprietary', score: 1386 },
        { rank: 35, model: 'qwen3-30b-a3b-instruct-2507', provider: 'Alibaba', license: 'Apache 2.0', score: 1385 },
        { rank: 36, model: 'claude-3-7-sonnet-20250219-thinking-32k', provider: 'Anthropic', license: 'Proprietary', score: 1385 },
        { rank: 37, model: 'hunyuan-t1-20250711', provider: 'Tencent', license: 'Proprietary', score: 1384 },
        { rank: 38, model: 'qwen3-coder-480b-a35b-instruct', provider: 'Alibaba', license: 'Apache 2.0', score: 1383 },
        { rank: 39, model: 'mistral-medium-2505', provider: 'Mistral', license: 'Proprietary', score: 1381 },
        { rank: 40, model: 'hunyuan-turbos-20250416', provider: 'Tencent', license: 'Proprietary', score: 1379 },
        { rank: 41, model: 'gpt-4.1-mini-2025-04-14', provider: 'OpenAI', license: 'Proprietary', score: 1379 },
        { rank: 42, model: 'qwen2.5-max', provider: 'Alibaba', license: 'Proprietary', score: 1371 },
        { rank: 43, model: 'qwen3-235b-a22b', provider: 'Alibaba', license: 'Apache 2.0', score: 1371 },
        { rank: 44, model: 'Claude 3.5 Sonnet (10/22)', provider: 'Anthropic', license: 'Proprietary', score: 1369 },
        { rank: 45, model: 'glm-4.5-air', provider: 'Z.ai', license: 'MIT', score: 1368 },
        { rank: 46, model: 'minimax-m1', provider: 'MiniMax', license: 'Apache 2.0', score: 1367 },
        { rank: 47, model: 'gemma-3-27b-it', provider: 'Google', license: 'Gemma', score: 1362 },
        { rank: 48, model: 'grok-3-mini-high', provider: 'xAI', license: 'Proprietary', score: 1362 }
    ],
    
    // 文字转视频排行榜
    'text-to-video': [
        { rank: 1, model: 'veo3-fast-audio', provider: 'Google', license: 'Proprietary', score: 1370 },
        { rank: 2, model: 'veo3-audio', provider: 'Google', license: 'Proprietary', score: 1354 },
        { rank: 3, model: 'veo3-fast', provider: 'Google', license: 'Proprietary', score: 1264 },
        { rank: 4, model: 'veo3', provider: 'Google', license: 'Proprietary', score: 1255 },
        { rank: 5, model: 'hailuo-02-pro', provider: 'MiniMax', license: 'Proprietary', score: 1222 },
        { rank: 6, model: 'hailuo-02-standard', provider: 'MiniMax', license: 'Proprietary', score: 1201 },
        { rank: 7, model: 'seedance-v1-pro', provider: 'Bytedance', license: 'Proprietary', score: 1190 },
        { rank: 8, model: 'kling-v2.1-master', provider: 'KlingAI', license: 'Proprietary', score: 1171 },
        { rank: 9, model: 'veo2', provider: 'Google', license: 'Proprietary', score: 1161 },
        { rank: 10, model: 'wan-v2.2-a14b', provider: 'Alibaba', license: 'Apache 2.0', score: 1130 },
        { rank: 11, model: 'seedance-v1-lite', provider: 'Bytedance', license: 'Proprietary', score: 1098 },
        { rank: 12, model: 'sora', provider: 'OpenAI', license: 'Proprietary', score: 1078 },
        { rank: 13, model: 'ray2', provider: 'Luma AI', license: 'Proprietary', score: 1064 },
        { rank: 14, model: 'pika-v2.2', provider: 'Pika', license: 'Proprietary', score: 1007 },
        { rank: 15, model: 'mochi-v1', provider: 'Genmo AI', license: 'Apache 2.0', score: 992 }
    ],
    
    // 文本转图片排行榜
    'text-to-image': [
        { rank: 1, model: 'gemini-2.5-flash-image-preview', provider: 'Google', license: 'Proprietary', score: 1154 },
        { rank: 2, model: 'imagen-4.0-ultra-generate-preview-06-06', provider: 'Google', license: 'Proprietary', score: 1145 },
        { rank: 3, model: 'imagen-4.0-generate-preview-06-06', provider: 'Google', license: 'Proprietary', score: 1131 },
        { rank: 4, model: 'gpt-image-1', provider: 'OpenAI', license: 'Proprietary', score: 1123 },
        { rank: 5, model: 'seedream-3', provider: 'Bytedance', license: 'Proprietary', score: 1082 },
        { rank: 6, model: 'flux-1-kontext-max', provider: 'Black Forest Labs', license: 'Proprietary', score: 1079 },
        { rank: 7, model: 'qwen-image-prompt-extend', provider: 'Alibaba', license: 'Apache 2.0', score: 1072 },
        { rank: 8, model: 'imagen-3.0-generate-002', provider: 'Google', license: 'Proprietary', score: 1062 },
        { rank: 9, model: 'flux-1-kontext-pro', provider: 'Black Forest Labs', license: 'Proprietary', score: 1062 },
        { rank: 10, model: 'qwen-image', provider: 'Alibaba', license: 'Apache 2.0', score: 1061 },
        { rank: 11, model: 'ideogram-v3-quality', provider: 'Ideogram', license: 'Proprietary', score: 1049 },
        { rank: 12, model: 'lucid-origin', provider: 'Leonardo AI', license: 'Proprietary', score: 1025 },
        { rank: 13, model: 'photon', provider: 'Luma AI', license: 'Proprietary', score: 1020 },
        { rank: 14, model: 'recraft-v3', provider: 'Recraft', license: 'Proprietary', score: 1017 },
        { rank: 15, model: 'flux-1.1-pro', provider: 'Black Forest Labs', license: 'Proprietary', score: 1013 },
        { rank: 16, model: 'ideogram-v2', provider: 'Ideogram', license: 'Proprietary', score: 1012 },
        { rank: 17, model: 'gemini-2.0-flash-preview-image-generation', provider: 'Google', license: 'Proprietary', score: 987 },
        { rank: 18, model: 'dall-e-3', provider: 'OpenAI', license: 'Proprietary', score: 978 },
        { rank: 19, model: 'flux-1-dev-fp8', provider: 'Black Forest Labs', license: 'Open', score: 966 },
        { rank: 20, model: 'flux-1-kontext-dev', provider: 'Black Forest Labs', license: 'Proprietary', score: 963 },
        { rank: 21, model: 'stable-diffusion-v35-large', provider: 'Stability AI', license: 'Open', score: 936 },
        { rank: 22, model: 'bagel', provider: 'Bytedance', license: 'Apache 2.0', score: 913 }
    ],
    
    // 图像转视频排行榜
    'image-to-video': [
        { rank: 1, model: 'veo3-fast-audio', provider: 'Google', license: 'Proprietary', score: 1323 },
        { rank: 2, model: 'veo3-audio', provider: 'Google', license: 'Proprietary', score: 1323 },
        { rank: 3, model: 'seedance-v1-pro', provider: 'Bytedance', license: 'Proprietary', score: 1282 },
        { rank: 4, model: 'hailuo-02-pro', provider: 'MiniMax', license: 'Proprietary', score: 1256 },
        { rank: 5, model: 'kling-v2.1-master', provider: 'KlingAI', license: 'Proprietary', score: 1246 },
        { rank: 6, model: 'hailuo-02-standard', provider: 'MiniMax', license: 'Proprietary', score: 1245 },
        { rank: 7, model: 'veo3', provider: 'Google', license: 'Proprietary', score: 1244 },
        { rank: 8, model: 'veo3-fast', provider: 'Google', license: 'Proprietary', score: 1235 },
        { rank: 9, model: 'kling-v2.1-standard', provider: 'KlingAI', license: 'Proprietary', score: 1231 },
        { rank: 10, model: 'hailuo-02-fast', provider: 'MiniMax', license: 'Proprietary', score: 1214 },
        { rank: 11, model: 'seedance-v1-lite', provider: 'Bytedance', license: 'Proprietary', score: 1192 },
        { rank: 12, model: 'wan-v2.2-a14b', provider: 'Alibaba', license: 'Apache 2.0', score: 1180 },
        { rank: 13, model: 'veo2', provider: 'Google', license: 'Proprietary', score: 1153 },
        { rank: 14, model: 'ray2', provider: 'Luma AI', license: 'Proprietary', score: 1108 },
        { rank: 15, model: 'runway-gen4-turbo', provider: 'Runway', license: 'Proprietary', score: 1054 },
        { rank: 16, model: 'pika-v2.2', provider: 'Pika', license: 'Proprietary', score: 997 }
    ],
    
    // Web开发排行榜
    'code-ability': [
        { rank: 1, model: 'GPT-5 (high)', provider: 'OpenAI', license: 'Proprietary', score: 1476 },
        { rank: 2, model: 'Claude Opus 4.1 thinking-16k (20250805)', provider: 'Anthropic', license: 'Proprietary', score: 1472 },
        { rank: 3, model: 'Claude Opus 4.1 (20250805)', provider: 'Anthropic', license: 'Proprietary', score: 1460 },
        { rank: 4, model: 'Gemini-2.5-Pro', provider: 'Google', license: 'Proprietary', score: 1402 },
        { rank: 5, model: 'DeepSeek-R1-0528', provider: 'DeepSeek', license: 'MIT', score: 1394 },
        { rank: 6, model: 'Claude Opus 4 (20250514)', provider: 'Anthropic', license: 'Proprietary', score: 1384 },
        { rank: 7, model: 'GLM-4.5', provider: 'ZAI', license: 'MIT', score: 1380 },
        { rank: 8, model: 'GLM-4.5-Air', provider: 'ZAI', license: 'MIT', score: 1368 },
        { rank: 9, model: 'Qwen3-Coder', provider: 'Alibaba', license: 'Apache 2.0', score: 1366 },
        { rank: 10, model: 'Claude Sonnet 4 (20250514)', provider: 'Anthropic', license: 'Proprietary', score: 1363 },
        { rank: 11, model: 'DeepSeek-V3.1-thinking', provider: 'DeepSeek', license: 'DeepSeek', score: 1363 },
        { rank: 12, model: 'Claude 3.7 Sonnet (20250219)', provider: 'Anthropic', license: 'Proprietary', score: 1358 },
        { rank: 13, model: 'DeepSeek-V3.1', provider: 'DeepSeek', license: 'DeepSeek', score: 1341 },
        { rank: 14, model: 'Kimi-K2-Instruct', provider: 'Moonshot', license: 'Modified MIT', score: 1316 },
        { rank: 15, model: 'Gemini-2.5-Flash', provider: 'Google', license: 'Proprietary', score: 1289 },
        { rank: 16, model: 'GPT-4.1-2025-04-14', provider: 'OpenAI', license: 'Proprietary', score: 1253 },
        { rank: 17, model: 'Claude 3.5 Sonnet (20241022)', provider: 'Anthropic', license: 'Proprietary', score: 1238 },
        { rank: 18, model: 'DeepSeek-V3-0324', provider: 'DeepSeek', license: 'MIT', score: 1208 },
        { rank: 19, model: 'DeepSeek-R1', provider: 'DeepSeek', license: 'MIT', score: 1199 },
        { rank: 20, model: 'GPT-4.1-mini-2025-04-14', provider: 'OpenAI', license: 'Proprietary', score: 1193 },
        { rank: 21, model: 'Qwen3-235B-A22B', provider: 'Alibaba', license: 'Apache 2.0', score: 1190 },
        { rank: 22, model: 'o3-2025-04-16', provider: 'OpenAI', license: 'Proprietary', score: 1186 },
        { rank: 23, model: 'Mistral Medium 3', provider: 'Mistral', license: 'Proprietary', score: 1181 },
        { rank: 24, model: 'Grok-4-0709', provider: 'xAI', license: 'Proprietary', score: 1174 },
        { rank: 25, model: 'grok-code-fast-1', provider: 'xAI', license: 'Proprietary', score: 1152 },
        { rank: 26, model: 'Grok-3-preview-02-24', provider: 'xAI', license: 'Proprietary', score: 1143 },
        { rank: 27, model: 'o3-mini-high (20250131)', provider: 'OpenAI', license: 'Proprietary', score: 1137 },
        { rank: 28, model: 'Claude 3.5 Haiku (20241022)', provider: 'Anthropic', license: 'Proprietary', score: 1133 },
        { rank: 29, model: 'MiniMax-M1', provider: 'MiniMax', license: 'MIT', score: 1130 },
        { rank: 30, model: 'o4-mini-2025-04-16', provider: 'OpenAI', license: 'Proprietary', score: 1118 },
        { rank: 31, model: 'gpt-oss-120b', provider: 'OpenAI', license: 'Apache 2.0', score: 1095 },
        { rank: 32, model: 'o3-mini (20250131)', provider: 'OpenAI', license: 'Proprietary', score: 1092 },
        { rank: 33, model: 'Gemini-2.0-Pro-Exp-02-05', provider: 'Google', license: 'Proprietary', score: 1090 },
        { rank: 34, model: 'o1 (20241217)', provider: 'OpenAI', license: 'Proprietary', score: 1045 },
        { rank: 35, model: 'o1-mini (20240912)', provider: 'OpenAI', license: 'Proprietary', score: 1043 },
        { rank: 36, model: 'Gemini-2.0-Flash-001', provider: 'Google', license: 'Proprietary', score: 1040 },
        { rank: 37, model: 'Gemini-2.0-Flash-Thinking-01-21', provider: 'Google', license: 'Proprietary', score: 1030 },
        { rank: 38, model: 'Llama-4-Maverick-17B-128E-Instruct', provider: 'Meta', license: 'Llama 4', score: 1027 },
        { rank: 39, model: 'Gemini-2.0-Flash-Exp', provider: 'Google', license: 'Proprietary', score: 980 },
        { rank: 40, model: 'Qwen2.5-Max', provider: 'Alibaba', license: 'Proprietary', score: 976 },
        { rank: 41, model: 'GPT-4o-2024-11-20', provider: 'OpenAI', license: 'Proprietary', score: 964 },
        { rank: 42, model: 'DeepSeek-V3', provider: 'DeepSeek', license: 'DeepSeek', score: 960 },
        { rank: 43, model: 'Qwen2.5-Coder-32B-Instruct', provider: 'Alibaba', license: 'Apache 2.0', score: 902 },
        { rank: 44, model: 'Llama-4-Scout-17B-16E-Instruct', provider: 'Meta', license: 'Llama 4', score: 901 },
        { rank: 45, model: 'Gemini-1.5-Pro-002', provider: 'Google', license: 'Proprietary', score: 893 },
        { rank: 46, model: 'Llama-3.1-405B-Instruct', provider: 'Meta', license: 'Llama 3.1', score: 810 }
    ],
    
    pricing: {
        // Bytedance (字节跳动)
        'doubao-1.5-thinking-pro': { name: 'Doubao-1.5-thinking-pro', company: 'Bytedance', inputPrice: 0.56, outputPrice: 2.22 },
        'doubao-1.5-pro-32k': { name: 'Doubao-1.5-pro-32k', company: 'Bytedance', inputPrice: 0.11, outputPrice: 0.28 },
        'doubao-seed-1.6': { name: 'Doubao-Seed-1.6', company: 'Bytedance', inputPrice: 0.11, outputPrice: 0.28 },
        'doubao-1.5-vision-pro': { name: 'Doubao-1.5-vision-pro', company: 'Bytedance', inputPrice: 0.42, outputPrice: 1.25 },
        'doubao-seed-1.6-flash': { name: 'Doubao-Seed-1.6-flash', company: 'Bytedance', inputPrice: 0.02, outputPrice: 0.21 },
        'doubao-1.5-thinking-vision-pro': { name: 'Doubao-1.5-thinking-vision-pro', company: 'Bytedance', inputPrice: 0.42, outputPrice: 1.25 },
        'doubao-seed-translation': { name: 'Doubao-Seed-Translation', company: 'Bytedance', inputPrice: 0.17, outputPrice: 0.5 },
        'doubao-1.5-vision-pro-32k': { name: 'Doubao-1.5-vision-pro-32k', company: 'Bytedance', inputPrice: 0.42, outputPrice: 1.25 },
        'doubao-1.5-ui-tars': { name: 'Doubao-1.5-UI-TARS', company: 'Bytedance', inputPrice: 0.49, outputPrice: 1.67 },
        'doubao-seed-1.6-thinking': { name: 'Doubao-Seed-1.6-thinking', company: 'Bytedance', inputPrice: 0.11, outputPrice: 1.11 },
        'doubao-1.5-vision-lite': { name: 'Doubao-1.5-vision-lite', company: 'Bytedance', inputPrice: 0.21, outputPrice: 0.63 },
        'doubao-1.5-pro-256k': { name: 'Doubao-1.5-pro-256k', company: 'Bytedance', inputPrice: 0.69, outputPrice: 1.25 },
        'doubao-1.5-lite-32k': { name: 'Doubao-1.5-lite-32k', company: 'Bytedance', inputPrice: 0.04, outputPrice: 0.08 },
        'doubao-seed-1.6-vision': { name: 'Doubao-Seed-1.6-vision', company: 'Bytedance', inputPrice: 0.11, outputPrice: 1.11 },
        
        // Alibaba (阿里巴巴)
        'qwen-max-0919': { name: 'Qwen-Max-0919', company: 'Alibaba', inputPrice: 0.14, outputPrice: 0.42 },
        'qwen-plus': { name: 'Qwen-Plus', company: 'Alibaba', inputPrice: 0.14, outputPrice: 0.42 },
        'qwen-turbo': { name: 'Qwen-Turbo', company: 'Alibaba', inputPrice: 0.042, outputPrice: 0.14 },
        'qwen-vl-max': { name: 'Qwen-VL-Max', company: 'Alibaba', inputPrice: 0.28, outputPrice: 0.28 },
        'qwen-vl-plus': { name: 'Qwen-VL-Plus', company: 'Alibaba', inputPrice: 0.14, outputPrice: 0.14 },
        'qwen-long': { name: 'Qwen-Long', company: 'Alibaba', inputPrice: 0.07, outputPrice: 0.21 },
        'qwen2.5-72b-instruct': { name: 'Qwen2.5-72B-Instruct', company: 'Alibaba', inputPrice: 0.049, outputPrice: 0.21 },
        'qwen2.5-32b-instruct': { name: 'Qwen2.5-32B-Instruct', company: 'Alibaba', inputPrice: 0.042, outputPrice: 0.14 },
        'qwen2.5-14b-instruct': { name: 'Qwen2.5-14B-Instruct', company: 'Alibaba', inputPrice: 0.021, outputPrice: 0.07 },
        'qwen2.5-7b-instruct': { name: 'Qwen2.5-7B-Instruct', company: 'Alibaba', inputPrice: 0.0042, outputPrice: 0.014 },
        'qwen2.5-3b-instruct': { name: 'Qwen2.5-3B-Instruct', company: 'Alibaba', inputPrice: 0.0028, outputPrice: 0.007 },
        'qwen2.5-1.5b-instruct': { name: 'Qwen2.5-1.5B-Instruct', company: 'Alibaba', inputPrice: 0.0014, outputPrice: 0.0028 },
        'qwen2.5-0.5b-instruct': { name: 'Qwen2.5-0.5B-Instruct', company: 'Alibaba', inputPrice: 0.0007, outputPrice: 0.0014 },
        'qwen2.5-coder-32b-instruct': { name: 'Qwen2.5-Coder-32B-Instruct', company: 'Alibaba', inputPrice: 0.042, outputPrice: 0.14 },
        'qwen2.5-math-72b-instruct': { name: 'Qwen2.5-Math-72B-Instruct', company: 'Alibaba', inputPrice: 0.049, outputPrice: 0.21 },
        
        // Google
        'gemini-2.0-flash-exp': { name: 'Gemini-2.0-Flash-Exp', company: 'Google', inputPrice: 0, outputPrice: 0 },
        'gemini-2.0-flash-thinking-exp-01-21': { name: 'Gemini-2.0-Flash-Thinking-Exp-01-21', company: 'Google', inputPrice: 0, outputPrice: 0 },
        'gemini-1.5-pro': { name: 'Gemini-1.5-Pro', company: 'Google', inputPrice: 1.25, outputPrice: 5 },
        'gemini-1.5-pro-002': { name: 'Gemini-1.5-Pro-002', company: 'Google', inputPrice: 1.25, outputPrice: 5 },
        'gemini-1.5-flash': { name: 'Gemini-1.5-Flash', company: 'Google', inputPrice: 0.075, outputPrice: 0.3 },
        'gemini-1.5-flash-002': { name: 'Gemini-1.5-Flash-002', company: 'Google', inputPrice: 0.075, outputPrice: 0.3 },
        'gemini-1.5-flash-8b': { name: 'Gemini-1.5-Flash-8B', company: 'Google', inputPrice: 0.0375, outputPrice: 0.15 },
        
        // OpenAI
        'gpt-4o': { name: 'GPT-4o', company: 'OpenAI', inputPrice: 2.5, outputPrice: 10 },
        'gpt-4o-2024-11-20': { name: 'GPT-4o-2024-11-20', company: 'OpenAI', inputPrice: 2.5, outputPrice: 10 },
        'gpt-4o-2024-08-06': { name: 'GPT-4o-2024-08-06', company: 'OpenAI', inputPrice: 2.5, outputPrice: 10 },
        'gpt-4o-2024-05-13': { name: 'GPT-4o-2024-05-13', company: 'OpenAI', inputPrice: 5, outputPrice: 15 },
        'chatgpt-4o-latest': { name: 'ChatGPT-4o-Latest', company: 'OpenAI', inputPrice: 5, outputPrice: 15 },
        'gpt-4o-mini': { name: 'GPT-4o-mini', company: 'OpenAI', inputPrice: 0.15, outputPrice: 0.6 },
        'gpt-4o-mini-2024-07-18': { name: 'GPT-4o-mini-2024-07-18', company: 'OpenAI', inputPrice: 0.15, outputPrice: 0.6 },
        'o1': { name: 'o1', company: 'OpenAI', inputPrice: 15, outputPrice: 60 },
        'o1-2024-12-17': { name: 'o1-2024-12-17', company: 'OpenAI', inputPrice: 15, outputPrice: 60 },
        'o1-preview': { name: 'o1-Preview', company: 'OpenAI', inputPrice: 15, outputPrice: 60 },
        'o1-preview-2024-09-12': { name: 'o1-Preview-2024-09-12', company: 'OpenAI', inputPrice: 15, outputPrice: 60 },
        'o1-mini': { name: 'o1-mini', company: 'OpenAI', inputPrice: 3, outputPrice: 12 },
        'o1-mini-2024-09-12': { name: 'o1-mini-2024-09-12', company: 'OpenAI', inputPrice: 3, outputPrice: 12 },
        'gpt-4-turbo': { name: 'GPT-4-Turbo', company: 'OpenAI', inputPrice: 10, outputPrice: 30 },
        'gpt-4-turbo-2024-04-09': { name: 'GPT-4-Turbo-2024-04-09', company: 'OpenAI', inputPrice: 10, outputPrice: 30 },
        'gpt-4': { name: 'GPT-4', company: 'OpenAI', inputPrice: 30, outputPrice: 60 },
        'gpt-4-0613': { name: 'GPT-4-0613', company: 'OpenAI', inputPrice: 30, outputPrice: 60 },
        'gpt-4-32k': { name: 'GPT-4-32K', company: 'OpenAI', inputPrice: 60, outputPrice: 120 },
        'gpt-4-32k-0613': { name: 'GPT-4-32K-0613', company: 'OpenAI', inputPrice: 60, outputPrice: 120 },
        'gpt-3.5-turbo': { name: 'GPT-3.5-Turbo', company: 'OpenAI', inputPrice: 0.5, outputPrice: 1.5 },
        'gpt-3.5-turbo-0125': { name: 'GPT-3.5-Turbo-0125', company: 'OpenAI', inputPrice: 0.5, outputPrice: 1.5 },
        'gpt-3.5-turbo-1106': { name: 'GPT-3.5-Turbo-1106', company: 'OpenAI', inputPrice: 1, outputPrice: 2 },
        
        // DeepSeek
        'deepseek-chat': { name: 'DeepSeek-Chat', company: 'DeepSeek', inputPrice: 0.14, outputPrice: 0.28 },
        'deepseek-reasoner': { name: 'DeepSeek-Reasoner', company: 'DeepSeek', inputPrice: 0.55, outputPrice: 2.19 },
        'deepseek-coder': { name: 'DeepSeek-Coder', company: 'DeepSeek', inputPrice: 0.14, outputPrice: 0.28 },
        
        // Anthropic
        'claude-3-5-sonnet-20241022': { name: 'Claude-3-5-Sonnet-20241022', company: 'Anthropic', inputPrice: 3, outputPrice: 15 },
        'claude-3-5-sonnet-20240620': { name: 'Claude-3-5-Sonnet-20240620', company: 'Anthropic', inputPrice: 3, outputPrice: 15 },
        'claude-3-5-haiku-20241022': { name: 'Claude-3-5-Haiku-20241022', company: 'Anthropic', inputPrice: 1, outputPrice: 5 },
        'claude-3-opus-20240229': { name: 'Claude-3-Opus-20240229', company: 'Anthropic', inputPrice: 15, outputPrice: 75 },
        'claude-3-sonnet-20240229': { name: 'Claude-3-Sonnet-20240229', company: 'Anthropic', inputPrice: 3, outputPrice: 15 },
        'claude-3-haiku-20240307': { name: 'Claude-3-Haiku-20240307', company: 'Anthropic', inputPrice: 0.25, outputPrice: 1.25 },
        
        // Baidu (百度)
        'ernie-4.0-8k': { name: 'ERNIE-4.0-8K', company: 'Baidu', inputPrice: 1.68, outputPrice: 1.68 },
        'ernie-4.0-turbo-8k': { name: 'ERNIE-4.0-Turbo-8K', company: 'Baidu', inputPrice: 0.42, outputPrice: 0.42 },
        'ernie-3.5-8k': { name: 'ERNIE-3.5-8K', company: 'Baidu', inputPrice: 0.17, outputPrice: 0.17 },
        'ernie-3.5-128k': { name: 'ERNIE-3.5-128K', company: 'Baidu', inputPrice: 0.14, outputPrice: 0.14 },
        'ernie-speed-8k': { name: 'ERNIE-Speed-8K', company: 'Baidu', inputPrice: 0.056, outputPrice: 0.056 },
        'ernie-speed-128k': { name: 'ERNIE-Speed-128K', company: 'Baidu', inputPrice: 0.056, outputPrice: 0.056 },
        'ernie-lite-8k': { name: 'ERNIE-Lite-8K', company: 'Baidu', inputPrice: 0.014, outputPrice: 0.014 },
        'ernie-tiny-8k': { name: 'ERNIE-Tiny-8K', company: 'Baidu', inputPrice: 0.0014, outputPrice: 0.0014 },
        
        // xAI
        'grok-beta': { name: 'Grok-Beta', company: 'xAI', inputPrice: 5, outputPrice: 15 },
        'grok-2-1212': { name: 'Grok-2-1212', company: 'xAI', inputPrice: 2, outputPrice: 10 },
        'grok-2-vision-1212': { name: 'Grok-2-Vision-1212', company: 'xAI', inputPrice: 2, outputPrice: 10 },
        
        // Tencent (腾讯)
        'hunyuan-pro': { name: 'Hunyuan-Pro', company: 'Tencent', inputPrice: 0.42, outputPrice: 0.42 },
        'hunyuan-standard': { name: 'Hunyuan-Standard', company: 'Tencent', inputPrice: 0.14, outputPrice: 0.14 },
        'hunyuan-lite': { name: 'Hunyuan-Lite', company: 'Tencent', inputPrice: 0.014, outputPrice: 0.014 },
        'hunyuan-turbo': { name: 'Hunyuan-Turbo', company: 'Tencent', inputPrice: 0.28, outputPrice: 0.28 },
        
        // Moonshot (月之暗面)
        'moonshot-v1-8k': { name: 'Moonshot-v1-8k', company: 'Moonshot', inputPrice: 1.68, outputPrice: 1.68 },
        'moonshot-v1-32k': { name: 'Moonshot-v1-32k', company: 'Moonshot', inputPrice: 3.36, outputPrice: 3.36 },
        'moonshot-v1-128k': { name: 'Moonshot-v1-128k', company: 'Moonshot', inputPrice: 8.4, outputPrice: 8.4 },
        
        // MiniMax
        'abab6.5s-chat': { name: 'abab6.5s-Chat', company: 'MiniMax', inputPrice: 0.07, outputPrice: 0.07 },
        'abab6.5-chat': { name: 'abab6.5-Chat', company: 'MiniMax', inputPrice: 0.7, outputPrice: 0.7 },
        'abab6.5g-chat': { name: 'abab6.5g-Chat', company: 'MiniMax', inputPrice: 0.7, outputPrice: 0.7 },
        'abab5.5s-chat': { name: 'abab5.5s-Chat', company: 'MiniMax', inputPrice: 0.07, outputPrice: 0.07 },
        'abab5.5-chat': { name: 'abab5.5-Chat', company: 'MiniMax', inputPrice: 0.28, outputPrice: 0.28 },
        
        // SenseTime (商汤)
        'sensechat-5': { name: 'SenseChat-5', company: 'SenseTime', inputPrice: 0.7, outputPrice: 0.7 },
        'sensechat-turbo': { name: 'SenseChat-Turbo', company: 'SenseTime', inputPrice: 0.014, outputPrice: 0.014 },
        'sensechat-character': { name: 'SenseChat-Character', company: 'SenseTime', inputPrice: 0.07, outputPrice: 0.07 },
        'sensechat-vision': { name: 'SenseChat-Vision', company: 'SenseTime', inputPrice: 0.7, outputPrice: 0.7 }
    },
    
    comparison: {
        // OpenAI Models
        'gpt-4o': {
            name: 'GPT-4o',
            provider: 'OpenAI',
            contextWindow: '128K',
            maxOutput: '16K',
            inputPrice: '$2.5',
            outputPrice: '$10',
            speed: 'Fast',
            capabilities: 'Multimodal, Code Generation, Complex Reasoning, Vision',
            release: '2024-11',
            mmlu: '88.7%',
            coding: 'Excellent'
        },
        'o1': {
            name: 'o1',
            provider: 'OpenAI',
            contextWindow: '128K',
            maxOutput: '32K',
            inputPrice: '$15',
            outputPrice: '$60',
            speed: 'Medium',
            capabilities: 'Advanced Reasoning, Mathematics, Coding',
            release: '2024-12',
            mmlu: '92.3%',
            coding: 'Outstanding'
        },
        'o1-mini': {
            name: 'o1-mini',
            provider: 'OpenAI',
            contextWindow: '128K',
            maxOutput: '16K',
            inputPrice: '$3',
            outputPrice: '$12',
            speed: 'Fast',
            capabilities: 'Coding, STEM Reasoning',
            release: '2024-09',
            mmlu: '85.2%',
            coding: 'Excellent'
        },
        'gpt-4-turbo': {
            name: 'GPT-4 Turbo',
            provider: 'OpenAI',
            contextWindow: '128K',
            maxOutput: '4K',
            inputPrice: '$10',
            outputPrice: '$30',
            speed: 'Medium',
            capabilities: 'Code Generation, Multilingual Understanding, Complex Reasoning',
            release: '2024-04',
            mmlu: '86.4%',
            coding: 'Excellent'
        },
        'gpt-3.5-turbo': {
            name: 'GPT-3.5 Turbo',
            provider: 'OpenAI',
            contextWindow: '16K',
            maxOutput: '4K',
            inputPrice: '$0.5',
            outputPrice: '$1.5',
            speed: 'Very Fast',
            capabilities: 'General Purpose, Fast Response',
            release: '2024-01',
            mmlu: '70.0%',
            coding: 'Good'
        },
        
        // Anthropic Models
        'claude-3-5-sonnet-20241022': {
            name: 'Claude 3.5 Sonnet',
            provider: 'Anthropic',
            contextWindow: '200K',
            maxOutput: '8K',
            inputPrice: '$3',
            outputPrice: '$15',
            speed: 'Fast',
            capabilities: 'Long Context, Coding, Analysis, Creative Writing',
            release: '2024-10',
            mmlu: '88.7%',
            coding: 'Excellent'
        },
        'claude-3-opus-20240229': {
            name: 'Claude 3 Opus',
            provider: 'Anthropic',
            contextWindow: '200K',
            maxOutput: '4K',
            inputPrice: '$15',
            outputPrice: '$75',
            speed: 'Fast',
            capabilities: 'Long Context Analysis, Complex Reasoning, Creative Writing',
            release: '2024-03',
            mmlu: '86.8%',
            coding: 'Excellent'
        },
        'claude-3-5-haiku-20241022': {
            name: 'Claude 3.5 Haiku',
            provider: 'Anthropic',
            contextWindow: '200K',
            maxOutput: '8K',
            inputPrice: '$1',
            outputPrice: '$5',
            speed: 'Very Fast',
            capabilities: 'Fast Response, Cost-Effective',
            release: '2024-10',
            mmlu: '82.2%',
            coding: 'Good'
        },
        
        // Google Models
        'gemini-1.5-pro': {
            name: 'Gemini 1.5 Pro',
            provider: 'Google',
            contextWindow: '2M',
            maxOutput: '8K',
            inputPrice: '$1.25',
            outputPrice: '$5',
            speed: 'Fast',
            capabilities: 'Ultra-Long Context, Multimodal, Code Generation',
            release: '2024-05',
            mmlu: '85.9%',
            coding: 'Excellent'
        },
        'gemini-1.5-flash': {
            name: 'Gemini 1.5 Flash',
            provider: 'Google',
            contextWindow: '1M',
            maxOutput: '8K',
            inputPrice: '$0.075',
            outputPrice: '$0.3',
            speed: 'Very Fast',
            capabilities: 'Fast Multimodal, Cost-Effective',
            release: '2024-05',
            mmlu: '78.9%',
            coding: 'Good'
        },
        'gemini-2.0-flash-exp': {
            name: 'Gemini 2.0 Flash Exp',
            provider: 'Google',
            contextWindow: '1M',
            maxOutput: '8K',
            inputPrice: '$0',
            outputPrice: '$0',
            speed: 'Very Fast',
            capabilities: 'Free, Multimodal, Experimental',
            release: '2024-12',
            mmlu: '84.8%',
            coding: 'Good'
        },
        
        // Alibaba Models
        'qwen-max-0919': {
            name: 'Qwen Max',
            provider: 'Alibaba',
            contextWindow: '32K',
            maxOutput: '8K',
            inputPrice: '$0.14',
            outputPrice: '$0.42',
            speed: 'Fast',
            capabilities: 'Multilingual, Chinese Optimized, Reasoning',
            release: '2024-09',
            mmlu: '84.5%',
            coding: 'Excellent'
        },
        'qwen-plus': {
            name: 'Qwen Plus',
            provider: 'Alibaba',
            contextWindow: '128K',
            maxOutput: '8K',
            inputPrice: '$0.14',
            outputPrice: '$0.42',
            speed: 'Fast',
            capabilities: 'Cost-Effective, Chinese Support',
            release: '2024-06',
            mmlu: '78.3%',
            coding: 'Good'
        },
        'qwen2.5-72b-instruct': {
            name: 'Qwen2.5 72B',
            provider: 'Alibaba',
            contextWindow: '128K',
            maxOutput: '8K',
            inputPrice: '$0.049',
            outputPrice: '$0.21',
            speed: 'Fast',
            capabilities: 'Open Source, High Performance',
            release: '2024-09',
            mmlu: '85.3%',
            coding: 'Excellent'
        },
        'qwen2.5-coder-32b-instruct': {
            name: 'Qwen2.5 Coder 32B',
            provider: 'Alibaba',
            contextWindow: '128K',
            maxOutput: '8K',
            inputPrice: '$0.042',
            outputPrice: '$0.14',
            speed: 'Fast',
            capabilities: 'Coding Specialized, Multi-Language',
            release: '2024-11',
            mmlu: '80.9%',
            coding: 'Outstanding'
        },
        
        // DeepSeek Models
        'deepseek-chat': {
            name: 'DeepSeek Chat',
            provider: 'DeepSeek',
            contextWindow: '64K',
            maxOutput: '4K',
            inputPrice: '$0.14',
            outputPrice: '$0.28',
            speed: 'Fast',
            capabilities: 'General Purpose, Cost-Effective',
            release: '2024-12',
            mmlu: '84.1%',
            coding: 'Excellent'
        },
        'deepseek-reasoner': {
            name: 'DeepSeek Reasoner',
            provider: 'DeepSeek',
            contextWindow: '64K',
            maxOutput: '8K',
            inputPrice: '$0.55',
            outputPrice: '$2.19',
            speed: 'Medium',
            capabilities: 'Advanced Reasoning, Mathematics, Science',
            release: '2025-01',
            mmlu: '89.2%',
            coding: 'Outstanding'
        },
        'deepseek-coder': {
            name: 'DeepSeek Coder',
            provider: 'DeepSeek',
            contextWindow: '128K',
            maxOutput: '4K',
            inputPrice: '$0.14',
            outputPrice: '$0.28',
            speed: 'Fast',
            capabilities: 'Code Generation, Debugging, Optimization',
            release: '2024-11',
            mmlu: '75.4%',
            coding: 'Outstanding'
        },
        
        // Bytedance Models
        'doubao-1.5-pro-32k': {
            name: 'Doubao 1.5 Pro',
            provider: 'Bytedance',
            contextWindow: '32K',
            maxOutput: '4K',
            inputPrice: '$0.11',
            outputPrice: '$0.28',
            speed: 'Fast',
            capabilities: 'Chinese Optimized, Multimodal',
            release: '2024-11',
            mmlu: '82.7%',
            coding: 'Good'
        },
        'doubao-1.5-thinking-pro': {
            name: 'Doubao 1.5 Thinking Pro',
            provider: 'Bytedance',
            contextWindow: '32K',
            maxOutput: '8K',
            inputPrice: '$0.56',
            outputPrice: '$2.22',
            speed: 'Medium',
            capabilities: 'Advanced Reasoning, Step-by-step Thinking',
            release: '2024-12',
            mmlu: '86.3%',
            coding: 'Excellent'
        },
        'doubao-1.5-lite-32k': {
            name: 'Doubao 1.5 Lite',
            provider: 'Bytedance',
            contextWindow: '32K',
            maxOutput: '4K',
            inputPrice: '$0.04',
            outputPrice: '$0.08',
            speed: 'Very Fast',
            capabilities: 'Fast Response, Ultra Cost-Effective',
            release: '2024-10',
            mmlu: '74.5%',
            coding: 'Fair'
        },
        
        // Baidu Models
        'ernie-4.0-8k': {
            name: 'ERNIE 4.0',
            provider: 'Baidu',
            contextWindow: '8K',
            maxOutput: '2K',
            inputPrice: '$1.68',
            outputPrice: '$1.68',
            speed: 'Fast',
            capabilities: 'Chinese NLP, Knowledge QA',
            release: '2024-03',
            mmlu: '83.5%',
            coding: 'Good'
        },
        'ernie-3.5-8k': {
            name: 'ERNIE 3.5',
            provider: 'Baidu',
            contextWindow: '8K',
            maxOutput: '2K',
            inputPrice: '$0.17',
            outputPrice: '$0.17',
            speed: 'Fast',
            capabilities: 'General Purpose, Chinese Support',
            release: '2023-12',
            mmlu: '78.2%',
            coding: 'Fair'
        },
        'ernie-speed-8k': {
            name: 'ERNIE Speed',
            provider: 'Baidu',
            contextWindow: '8K',
            maxOutput: '2K',
            inputPrice: '$0.056',
            outputPrice: '$0.056',
            speed: 'Very Fast',
            capabilities: 'Fast Response, Cost-Effective',
            release: '2024-01',
            mmlu: '72.1%',
            coding: 'Fair'
        },
        
        // xAI Models
        'grok-beta': {
            name: 'Grok Beta',
            provider: 'xAI',
            contextWindow: '128K',
            maxOutput: '8K',
            inputPrice: '$5',
            outputPrice: '$15',
            speed: 'Fast',
            capabilities: 'Real-time Info, Humor, Analysis',
            release: '2024-11',
            mmlu: '87.5%',
            coding: 'Excellent'
        },
        'grok-2-1212': {
            name: 'Grok 2',
            provider: 'xAI',
            contextWindow: '128K',
            maxOutput: '8K',
            inputPrice: '$2',
            outputPrice: '$10',
            speed: 'Fast',
            capabilities: 'Real-time Search, Multimodal',
            release: '2024-12',
            mmlu: '86.8%',
            coding: 'Excellent'
        },
        
        // Tencent Models
        'hunyuan-pro': {
            name: 'Hunyuan Pro',
            provider: 'Tencent',
            contextWindow: '32K',
            maxOutput: '4K',
            inputPrice: '$0.42',
            outputPrice: '$0.42',
            speed: 'Fast',
            capabilities: 'Chinese Optimized, General Purpose',
            release: '2024-09',
            mmlu: '81.9%',
            coding: 'Good'
        },
        'hunyuan-lite': {
            name: 'Hunyuan Lite',
            provider: 'Tencent',
            contextWindow: '16K',
            maxOutput: '2K',
            inputPrice: '$0.014',
            outputPrice: '$0.014',
            speed: 'Very Fast',
            capabilities: 'Fast Response, Cost-Effective',
            release: '2024-06',
            mmlu: '71.3%',
            coding: 'Fair'
        },
        
        // Moonshot Models
        'moonshot-v1-32k': {
            name: 'Moonshot v1 32K',
            provider: 'Moonshot',
            contextWindow: '32K',
            maxOutput: '4K',
            inputPrice: '$3.36',
            outputPrice: '$3.36',
            speed: 'Fast',
            capabilities: 'Long Context, Chinese Support',
            release: '2024-03',
            mmlu: '79.8%',
            coding: 'Good'
        },
        'moonshot-v1-128k': {
            name: 'Moonshot v1 128K',
            provider: 'Moonshot',
            contextWindow: '128K',
            maxOutput: '4K',
            inputPrice: '$8.4',
            outputPrice: '$8.4',
            speed: 'Medium',
            capabilities: 'Ultra-Long Context, Document Analysis',
            release: '2024-03',
            mmlu: '79.8%',
            coding: 'Good'
        },
        
        // MiniMax Models
        'abab6.5-chat': {
            name: 'abab6.5',
            provider: 'MiniMax',
            contextWindow: '32K',
            maxOutput: '4K',
            inputPrice: '$0.7',
            outputPrice: '$0.7',
            speed: 'Fast',
            capabilities: 'Chinese Support, General Purpose',
            release: '2024-08',
            mmlu: '80.5%',
            coding: 'Good'
        },
        'abab6.5s-chat': {
            name: 'abab6.5s',
            provider: 'MiniMax',
            contextWindow: '16K',
            maxOutput: '2K',
            inputPrice: '$0.07',
            outputPrice: '$0.07',
            speed: 'Very Fast',
            capabilities: 'Fast Response, Cost-Effective',
            release: '2024-08',
            mmlu: '75.2%',
            coding: 'Fair'
        },
        
        // SenseTime Models
        'sensechat-5': {
            name: 'SenseChat 5',
            provider: 'SenseTime',
            contextWindow: '32K',
            maxOutput: '4K',
            inputPrice: '$0.7',
            outputPrice: '$0.7',
            speed: 'Fast',
            capabilities: 'Multimodal, Chinese Optimized',
            release: '2024-07',
            mmlu: '81.3%',
            coding: 'Good'
        },
        'sensechat-turbo': {
            name: 'SenseChat Turbo',
            provider: 'SenseTime',
            contextWindow: '16K',
            maxOutput: '2K',
            inputPrice: '$0.014',
            outputPrice: '$0.014',
            speed: 'Very Fast',
            capabilities: 'Fast Response, Cost-Effective',
            release: '2024-06',
            mmlu: '73.8%',
            coding: 'Fair'
        }
    }
};

// Current selected category
let currentCategory = 'text-generation';

// Tab switching
function showTab(tabName) {
    // Hide all content
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active state from all navigation links
    const allLinks = document.querySelectorAll('.nav-link');
    allLinks.forEach(link => link.classList.remove('active'));
    
    // Show selected content
    document.getElementById(tabName).classList.add('active');
    
    // Activate corresponding navigation link
    event.target.classList.add('active');
    
    // Initialize corresponding module
    if (tabName === 'leaderboard') {
        loadLeaderboard();
    } else if (tabName === 'compare') {
        loadCompareTable();
    } else if (tabName === 'models') {
        // Models module is auto-initialized by models-browser.js
        if (typeof filterModels === 'function') {
            filterModels();
        }
    }
}

// Load leaderboard data
function loadLeaderboard(category = 'text-generation') {
    currentCategory = category;
    const tbody = document.getElementById('leaderboardData');
    tbody.innerHTML = '';
    
    // Get data for corresponding category
    const dataList = modelsData[category] || modelsData['text-generation'];
    
    // Update title
    const titleMap = {
        'text-generation': 'Best Text Generation Model Leaderboard',
        'text-to-video': 'Text to Video Model Leaderboard',
        'text-to-image': 'Text to Image Model Leaderboard',
        'image-to-video': 'Best Image to Video Model Leaderboard',
        'code-ability': 'Best Web Development Model Leaderboard'
    };
    
    const moduleTitle = document.querySelector('#leaderboard .module-title');
    if (moduleTitle) {
        moduleTitle.textContent = titleMap[category] || 'Best Text Generation Model Leaderboard';
    }
    
    dataList.forEach(item => {
        const tr = document.createElement('tr');
        
        // Rank badge
        let rankClass = 'rank-other';
        let rankIcon = '';
        if (item.rank === 1) {
            rankClass = 'rank-1';
            rankIcon = '<i class="fas fa-crown"></i> ';
        } else if (item.rank === 2) {
            rankClass = 'rank-2';
            rankIcon = '<i class="fas fa-medal"></i> ';
        } else if (item.rank === 3) {
            rankClass = 'rank-3';
            rankIcon = '<i class="fas fa-award"></i> ';
        }
        
        // License style and icon
        const isOpen = item.license.includes('MIT') || item.license.includes('Apache') || item.license.includes('Open') || item.license.includes('Llama') || item.license.includes('Gemma');
        const licenseClass = isOpen ? 'license-open' : 'license-proprietary';
        const licenseIcon = isOpen ? '<i class="fas fa-unlock"></i> ' : '<i class="fas fa-lock"></i> ';
        
        tr.innerHTML = `
            <td><span class="rank-badge ${rankClass}">${rankIcon}#${item.rank}</span></td>
            <td><span class="model-name"><i class="fas fa-robot"></i> ${item.model}</span></td>
            <td><i class="fas fa-building"></i> ${item.provider}</td>
            <td><span class="license-badge ${licenseClass}">${licenseIcon}${item.license}</span></td>
            <td><span class="score"><i class="fas fa-star"></i> ${item.score}</span></td>
        `;
        
        tbody.appendChild(tr);
    });
}

// Global exchange rates data
let exchangeRates = {
    'USD': { symbol: '$', rate: 1.0, name: 'US Dollar' },
    'CNY': { symbol: '¥', rate: 7.25, name: 'Chinese Yuan' },
    'EUR': { symbol: '€', rate: 0.92, name: 'Euro' },
    'GBP': { symbol: '£', rate: 0.79, name: 'British Pound' },
    'JPY': { symbol: '¥', rate: 149.50, name: 'Japanese Yen' },
    'KRW': { symbol: '₩', rate: 1350.00, name: 'Korean Won' },
    'HKD': { symbol: 'HK$', rate: 7.82, name: 'Hong Kong Dollar' },
    'SGD': { symbol: 'S$', rate: 1.34, name: 'Singapore Dollar' },
    'AUD': { symbol: 'A$', rate: 1.52, name: 'Australian Dollar' },
    'CAD': { symbol: 'C$', rate: 1.36, name: 'Canadian Dollar' },
    'CHF': { symbol: 'CHF', rate: 0.88, name: 'Swiss Franc' },
    'INR': { symbol: '₹', rate: 83.50, name: 'Indian Rupee' },
};

// Fetch exchange rates from backend
async function fetchExchangeRate() {
    try {
        const response = await fetch('http://localhost:5001/api/exchange-rate');
        const data = await response.json();
        
        if (data.status === 'success' && data.data.currencies) {
            // Update exchange rates from backend
            Object.keys(data.data.currencies).forEach(code => {
                const currency = data.data.currencies[code];
                exchangeRates[code] = {
                    symbol: currency.symbol,
                    rate: currency.rate,
                    name: currency.name,
                    flag: currency.flag
                };
            });
            console.log(`汇率已更新: ${Object.keys(data.data.currencies).length} 种货币 (来源: ${data.data.source})`);
            return exchangeRates;
        } else {
            console.warn('汇率API返回异常，使用默认汇率');
            return exchangeRates;
        }
    } catch (error) {
        console.error('获取汇率失败，使用默认汇率:', error);
        return exchangeRates;
    }
}

// Calculate cost
function calculateCost() {
    const modelKey = document.getElementById('modelSelect').value;
    const inputTokens = parseInt(document.getElementById('inputTokens').value) || 0;
    const outputTokens = parseInt(document.getElementById('outputTokens').value) || 0;
    const callCount = parseInt(document.getElementById('callCount').value) || 0;
    const currency = document.getElementById('currencySelect').value;
    
    const model = modelsData.pricing[modelKey];
    
    // Get currency info from exchangeRates
    const currencyInfo = exchangeRates[currency] || exchangeRates['USD'];
    const currencySymbol = currencyInfo.symbol;
    const exchangeRate = currencyInfo.rate;
    
    // Determine price unit text based on currency
    let priceUnitText;
    if (currency === 'USD') {
        priceUnitText = '$/M tokens';
    } else {
        priceUnitText = `${currency}/M tokens`;
    }
    const multiplier = exchangeRate;
    
    // Update price unit labels
    document.getElementById('priceUnit1').textContent = priceUnitText;
    document.getElementById('priceUnit2').textContent = priceUnitText;
    
    // Display current model name and unit prices
    document.getElementById('currentModelName').textContent = model.name;
    
    // Check if free model
    const isFree = model.inputPrice === 0 && model.outputPrice === 0;
    if (isFree) {
        document.getElementById('modelInputPrice').textContent = 'Free';
        document.getElementById('modelInputPrice').style.color = '#27ae60';
        document.getElementById('modelOutputPrice').textContent = 'Free';
        document.getElementById('modelOutputPrice').style.color = '#27ae60';
    } else {
        const inputPriceConverted = model.inputPrice * multiplier;
        const outputPriceConverted = model.outputPrice * multiplier;
        document.getElementById('modelInputPrice').textContent = `${currencySymbol}${inputPriceConverted.toFixed(4)}`;
        document.getElementById('modelInputPrice').style.color = 'white';
        document.getElementById('modelOutputPrice').textContent = `${currencySymbol}${outputPriceConverted.toFixed(4)}`;
        document.getElementById('modelOutputPrice').style.color = 'white';
    }
    
    // Calculate cost (per million tokens)
    const inputCost = (inputTokens / 1000000) * model.inputPrice * callCount * multiplier;
    const outputCost = (outputTokens / 1000000) * model.outputPrice * callCount * multiplier;
    const totalCost = inputCost + outputCost;
    const perCallCost = totalCost / callCount;
    const perMillionCost = ((inputTokens * model.inputPrice) + (outputTokens * model.outputPrice)) / 1000000 * multiplier;
    
    // Display results
    document.getElementById('totalCost').textContent = `${currencySymbol}${totalCost.toFixed(4)}`;
    document.getElementById('inputCost').textContent = `${currencySymbol}${inputCost.toFixed(4)}`;
    document.getElementById('outputCost').textContent = `${currencySymbol}${outputCost.toFixed(4)}`;
    document.getElementById('perCallCost').textContent = `${currencySymbol}${perCallCost.toFixed(6)}`;
    document.getElementById('perMillionCost').textContent = `${currencySymbol}${perMillionCost.toFixed(4)}`;
}

// Load comparison table
function loadCompareTable() {
    const model1 = document.getElementById('compareModel1').value;
    const model2 = document.getElementById('compareModel2').value;
    const model3 = document.getElementById('compareModel3').value;
    
    // Check if at least one model is selected
    if (!model1 && !model2 && !model3) {
        return; // Don't render if no models selected
    }
    
    const models = [model1, model2, model3].filter(m => m); // Filter out empty values
    const container = document.getElementById('compareTableContainer');
    
    // If no valid models, clear container and return
    if (models.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    const categories = [
        { key: 'name', label: 'Model Name' },
        { key: 'provider', label: 'Provider' },
        { key: 'contextWindow', label: 'Context Window' },
        { key: 'maxOutput', label: 'Max Output Tokens' },
        { key: 'inputPrice', label: 'Input Price/M tokens' },
        { key: 'outputPrice', label: 'Output Price/M tokens' },
        { key: 'speed', label: 'Inference Speed' },
        { key: 'capabilities', label: 'Core Capabilities' },
        { key: 'release', label: 'Release Date' },
        { key: 'mmlu', label: 'MMLU Score' },
        { key: 'coding', label: 'Coding Ability' }
    ];
    
    let html = '<div class="compare-row">';
    html += '<div class="compare-cell"><strong>Comparison</strong></div>';
    models.forEach(modelKey => {
        const model = modelsData.comparison[modelKey];
        if (model) {
            html += `<div class="compare-cell"><strong>${model.name}</strong></div>`;
        }
    });
    html += '</div>';
    
    categories.forEach((cat, index) => {
        if (index > 0) { // Skip name row
            html += '<div class="compare-row">';
            html += `<div class="compare-cell compare-category">${cat.label}</div>`;
            
            models.forEach((modelKey) => {
                const model = modelsData.comparison[modelKey];
                const value = model ? model[cat.key] : 'N/A';
                html += `<div class="compare-cell">${value}</div>`;
            });
            
            html += '</div>';
        }
    });
    
    container.innerHTML = html;
}

// Page load initialization
document.addEventListener('DOMContentLoaded', function() {
    loadLeaderboard('text-generation');
    loadCompareTable();
    loadPricingTable(); // Load pricing table
    
    // Fetch exchange rate on page load
    fetchExchangeRate();
    
    // Update exchange rate every hour
    setInterval(fetchExchangeRate, 60 * 60 * 1000);
    
    // Listen to comparison model selection changes
    ['compareModel1', 'compareModel2', 'compareModel3'].forEach(id => {
        document.getElementById(id).addEventListener('change', loadCompareTable);
    });
    
    // Filter tab click event - switch data for different categories
    const filterTabs = document.querySelectorAll('.filter-tab');
    const categoryMap = {
        'Text Generation': 'text-generation',
        'Text to Video': 'text-to-video',
        'Text to Image': 'text-to-image',
        'Image to Video': 'image-to-video',
        'Web Development': 'code-ability'
    };
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            console.log('Tab clicked!'); // Debug log
            // Remove all active classes
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add current active
            this.classList.add('active');
            
            // Get the button text without icon
            // Use lastChild.textContent to get only the text node content
            let categoryText = this.textContent.trim();
            // Remove extra whitespaces
            categoryText = categoryText.replace(/\s+/g, ' ');
            
            console.log('Category text:', categoryText); // Debug log
            console.log('Category key:', categoryMap[categoryText]); // Debug log
            
            const categoryKey = categoryMap[categoryText];
            if (categoryKey) {
                loadLeaderboard(categoryKey);
            } else {
                console.error('No category key found for:', categoryText);
            }
        });
    });
});

// Load pricing table
function loadPricingTable() {
    const tbody = document.getElementById('pricingTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Convert pricing object to array and sort by company
    const pricingArray = Object.values(modelsData.pricing);
    
    pricingArray.forEach(model => {
        const tr = document.createElement('tr');
        
        // Check if free
        const isFree = model.inputPrice === 0 && model.outputPrice === 0;
        const inputPriceDisplay = isFree ? 'Free' : `$${model.inputPrice.toFixed(4)}`;
        const outputPriceDisplay = isFree ? 'Free' : `$${model.outputPrice.toFixed(4)}`;
        const priceClass = isFree ? 'price-free' : '';
        
        tr.innerHTML = `
            <td>${model.name}</td>
            <td>${model.company}</td>
            <td class="${priceClass}">${inputPriceDisplay}</td>
            <td class="${priceClass}">${outputPriceDisplay}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

// Provider to models mapping for 2-level selection
const providerModelsMap = {
    'OpenAI': [
        { value: 'gpt-4o', name: 'GPT-4o' },
        { value: 'gpt-4o-2024-11-20', name: 'GPT-4o-2024-11-20' },
        { value: 'gpt-4o-2024-08-06', name: 'GPT-4o-2024-08-06' },
        { value: 'gpt-4o-2024-05-13', name: 'GPT-4o-2024-05-13' },
        { value: 'gpt-4o-mini', name: 'GPT-4o-mini' },
        { value: 'gpt-4o-mini-2024-07-18', name: 'GPT-4o-mini-2024-07-18' },
        { value: 'o1', name: 'o1' },
        { value: 'o1-2024-12-17', name: 'o1-2024-12-17' },
        { value: 'o1-preview', name: 'o1-preview' },
        { value: 'o1-preview-2024-09-12', name: 'o1-preview-2024-09-12' },
        { value: 'o1-mini', name: 'o1-mini' },
        { value: 'o1-mini-2024-09-12', name: 'o1-mini-2024-09-12' },
        { value: 'gpt-4-turbo', name: 'GPT-4 Turbo' },
        { value: 'gpt-4-turbo-2024-04-09', name: 'GPT-4-Turbo-2024-04-09' },
        { value: 'gpt-4-turbo-preview', name: 'GPT-4-Turbo-Preview' },
        { value: 'gpt-4', name: 'GPT-4' },
        { value: 'gpt-4-0613', name: 'GPT-4-0613' },
        { value: 'gpt-3.5-turbo', name: 'GPT-3.5-Turbo' },
        { value: 'gpt-3.5-turbo-0125', name: 'GPT-3.5-Turbo-0125' },
        { value: 'gpt-3.5-turbo-1106', name: 'GPT-3.5-Turbo-1106' },
        { value: 'dall-e-3', name: 'DALL-E-3' },
        { value: 'dall-e-2', name: 'DALL-E-2' },
        { value: 'text-embedding-3-large', name: 'Text-Embedding-3-Large' },
        { value: 'text-embedding-3-small', name: 'Text-Embedding-3-Small' }
    ],
    'Anthropic': [
        { value: 'claude-3-5-sonnet-20241022', name: 'Claude-3-5-Sonnet-20241022' },
        { value: 'claude-3-5-sonnet-20240620', name: 'Claude-3-5-Sonnet-20240620' },
        { value: 'claude-3-opus-20240229', name: 'Claude-3-Opus-20240229' },
        { value: 'claude-3-sonnet-20240229', name: 'Claude-3-Sonnet-20240229' },
        { value: 'claude-3-5-haiku-20241022', name: 'Claude-3-5-Haiku-20241022' },
        { value: 'claude-3-haiku-20240307', name: 'Claude-3-Haiku-20240307' }
    ],
    'Google': [
        { value: 'gemini-2.0-flash-exp', name: 'Gemini-2.0-Flash-Exp (Free)' },
        { value: 'gemini-1.5-pro', name: 'Gemini-1.5-Pro' },
        { value: 'gemini-1.5-pro-002', name: 'Gemini-1.5-Pro-002' },
        { value: 'gemini-1.5-flash', name: 'Gemini-1.5-Flash' },
        { value: 'gemini-1.5-flash-002', name: 'Gemini-1.5-Flash-002' },
        { value: 'gemini-1.5-flash-8b', name: 'Gemini-1.5-Flash-8B' },
        { value: 'gemini-1.0-pro', name: 'Gemini-1.0-Pro' }
    ],
    'Alibaba': [
        { value: 'qwen-max-0919', name: 'Qwen-Max-0919' },
        { value: 'qwen-max-latest', name: 'Qwen-Max-Latest' },
        { value: 'qwen-plus', name: 'Qwen-Plus' },
        { value: 'qwen-plus-latest', name: 'Qwen-Plus-Latest' },
        { value: 'qwen-turbo', name: 'Qwen-Turbo' },
        { value: 'qwen-turbo-latest', name: 'Qwen-Turbo-Latest' },
        { value: 'qwen2.5-72b-instruct', name: 'Qwen2.5-72B-Instruct' },
        { value: 'qwen2.5-32b-instruct', name: 'Qwen2.5-32B-Instruct' },
        { value: 'qwen2.5-14b-instruct', name: 'Qwen2.5-14B-Instruct' },
        { value: 'qwen2.5-7b-instruct', name: 'Qwen2.5-7B-Instruct' },
        { value: 'qwen2.5-coder-32b-instruct', name: 'Qwen2.5-Coder-32B-Instruct' },
        { value: 'qwen2.5-math-72b-instruct', name: 'Qwen2.5-Math-72B-Instruct' },
        { value: 'qwq-32b-preview', name: 'QwQ-32B-Preview' },
        { value: 'qwen-vl-max', name: 'Qwen-VL-Max' },
        { value: 'qwen-vl-plus', name: 'Qwen-VL-Plus' }
    ],
    'DeepSeek': [
        { value: 'deepseek-chat', name: 'DeepSeek-Chat' },
        { value: 'deepseek-reasoner', name: 'DeepSeek-Reasoner' },
        { value: 'deepseek-coder', name: 'DeepSeek-Coder' }
    ],
    'Bytedance': [
        { value: 'doubao-1.5-thinking-pro', name: 'Doubao-1.5-thinking-pro' },
        { value: 'doubao-1.5-pro-32k', name: 'Doubao-1.5-pro-32k' },
        { value: 'doubao-1.5-pro-256k', name: 'Doubao-1.5-pro-256k' },
        { value: 'doubao-1.5-lite-32k', name: 'Doubao-1.5-lite-32k' },
        { value: 'doubao-1.5-lite-256k', name: 'Doubao-1.5-lite-256k' },
        { value: 'doubao-pro-32k', name: 'Doubao-pro-32k' },
        { value: 'doubao-pro-256k', name: 'Doubao-pro-256k' },
        { value: 'doubao-lite-32k', name: 'Doubao-lite-32k' },
        { value: 'doubao-lite-256k', name: 'Doubao-lite-256k' },
        { value: 'doubao-character-32k', name: 'Doubao-character-32k' },
        { value: 'doubao-character-256k', name: 'Doubao-character-256k' },
        { value: 'doubao-vision-pro-32k', name: 'Doubao-vision-pro-32k' },
        { value: 'doubao-vision-pro-256k', name: 'Doubao-vision-pro-256k' },
        { value: 'doubao-vision-lite-32k', name: 'Doubao-vision-lite-32k' }
    ],
    'Baidu': [
        { value: 'ernie-4.0-8k', name: 'ERNIE-4.0-8K' },
        { value: 'ernie-4.0-turbo-8k', name: 'ERNIE-4.0-Turbo-8K' },
        { value: 'ernie-4.0-turbo-128k', name: 'ERNIE-4.0-Turbo-128K' },
        { value: 'ernie-3.5-8k', name: 'ERNIE-3.5-8K' },
        { value: 'ernie-3.5-128k', name: 'ERNIE-3.5-128K' },
        { value: 'ernie-speed-8k', name: 'ERNIE-Speed-8K' },
        { value: 'ernie-speed-128k', name: 'ERNIE-Speed-128K' },
        { value: 'ernie-lite-8k', name: 'ERNIE-Lite-8K' }
    ],
    'xAI': [
        { value: 'grok-beta', name: 'Grok-Beta' },
        { value: 'grok-2-1212', name: 'Grok-2-1212' },
        { value: 'grok-2-vision-1212', name: 'Grok-2-Vision-1212' }
    ],
    'Tencent': [
        { value: 'hunyuan-pro', name: 'Hunyuan-Pro' },
        { value: 'hunyuan-standard', name: 'Hunyuan-Standard' },
        { value: 'hunyuan-lite', name: 'Hunyuan-Lite' },
        { value: 'hunyuan-turbo', name: 'Hunyuan-Turbo' }
    ],
    'Moonshot': [
        { value: 'moonshot-v1-8k', name: 'Moonshot-v1-8k' },
        { value: 'moonshot-v1-32k', name: 'Moonshot-v1-32k' },
        { value: 'moonshot-v1-128k', name: 'Moonshot-v1-128k' }
    ],
    'MiniMax': [
        { value: 'abab6.5s-chat', name: 'abab6.5s-Chat' },
        { value: 'abab6.5-chat', name: 'abab6.5-Chat' },
        { value: 'abab6.5g-chat', name: 'abab6.5g-Chat' },
        { value: 'abab5.5s-chat', name: 'abab5.5s-Chat' },
        { value: 'abab5.5-chat', name: 'abab5.5-Chat' }
    ],
    'SenseTime': [
        { value: 'sensechat-5', name: 'SenseChat-5' },
        { value: 'sensechat-turbo', name: 'SenseChat-Turbo' },
        { value: 'sensechat-character', name: 'SenseChat-Character' },
        { value: 'sensechat-vision', name: 'SenseChat-Vision' }
    ]
};

// Update model options based on selected provider
function updateModelOptions() {
    const providerSelect = document.getElementById('providerSelect');
    const modelSelect = document.getElementById('modelSelect');
    const selectedProvider = providerSelect.value;
    
    // Clear current options
    modelSelect.innerHTML = '';
    
    if (!selectedProvider) {
        modelSelect.innerHTML = '<option value="">-- Select Provider First --</option>';
        modelSelect.disabled = true;
        return;
    }
    
    // Enable model select
    modelSelect.disabled = false;
    
    // Add models for selected provider
    const models = providerModelsMap[selectedProvider] || [];
    modelSelect.innerHTML = '<option value="">-- Select Model --</option>';
    
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model.value;
        option.textContent = model.name;
        modelSelect.appendChild(option);
    });
}

// Update compare model options based on selected provider (for model comparison)
function updateCompareModelOptions(slotNumber) {
    const providerSelect = document.getElementById(`compareProvider${slotNumber}`);
    const modelSelect = document.getElementById(`compareModel${slotNumber}`);
    const selectedProvider = providerSelect.value;
    
    // Clear current options
    modelSelect.innerHTML = '';
    
    if (!selectedProvider) {
        modelSelect.innerHTML = '<option value="">-- Select Provider First --</option>';
        modelSelect.disabled = true;
        return;
    }
    
    // Enable model select
    modelSelect.disabled = false;
    
    // Add models for selected provider (reuse providerModelsMap from Cost Calculator)
    const models = providerModelsMap[selectedProvider] || [];
    modelSelect.innerHTML = '<option value="">-- Select Model --</option>';
    
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model.value;
        option.textContent = model.name;
        modelSelect.appendChild(option);
    });
    
    // Auto-select first model for convenience
    if (models.length > 0) {
        modelSelect.value = models[0].value;
        // Trigger comparison table update
        loadCompareTable();
    }
}
