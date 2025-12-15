// Supabase Google Authentication
// Project URL: https://nuvfdstxwxmdobipzlbf.supabase.co
// Google Client ID: 524383862092-tut5vno5s2gt1oeb1rkttaj6dhtk1g32.apps.googleusercontent.com

// Supabase配置
const SUPABASE_URL = 'https://nuvfdstxwxmdobipzlbf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dmZkc3R4d3htZG9iaXB6bGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMzgxNzgsImV4cCI6MjA3OTYxNDE3OH0.46-tn_DaSzJvnG5NW7PKi_EM9CMk23hD684og6SFjlw';

// ⚠️ 重要提示：
// 你提供的 524383862092-tut5vno5s2gt1oeb1rkttaj6dhtk1g32.apps.googleusercontent.com 是 Google Client ID
// 但这里需要的是 Supabase 项目的 anon key
// 请按以下步骤获取：
// 1. 访问 https://app.supabase.com/project/nuvfdstxwxmdobipzlbf/settings/api
// 2. 复制 "anon" 或 "public" key
// 3. 替换上面的 YOUR_SUPABASE_ANON_KEY

// 初始化Supabase客户端
let supabase;

// 加载Supabase客户端库
function loadSupabaseClient() {
    return new Promise((resolve, reject) => {
        if (window.supabase) {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Supabase library'));
        document.head.appendChild(script);
    });
}

// 初始化认证
async function initAuth() {
    try {
        // 加载Supabase客户端库
        await loadSupabaseClient();
        
        // 创建Supabase客户端
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        
        // 检查当前登录状态
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
            updateUIForLoggedInUser(session.user);
        }
        
        // 监听认证状态变化
        supabase.auth.onAuthStateChange((event, session) => {
            console.log('Auth state changed:', event);
            
            if (event === 'SIGNED_IN' && session) {
                updateUIForLoggedInUser(session.user);
            } else if (event === 'SIGNED_OUT') {
                updateUIForLoggedOutUser();
            }
        });
        
    } catch (error) {
        console.error('Failed to initialize auth:', error);
        // 显示友好的错误提示
        showAuthError('Authentication service is temporarily unavailable. Please try again later.');
    }
}

// Google登录
async function signInWithGoogle() {
    try {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin,
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                }
            }
        });
        
        if (error) throw error;
        
        // OAuth登录会自动重定向到Google登录页面
        
    } catch (error) {
        console.error('Google sign in error:', error);
        showAuthError('Failed to sign in with Google: ' + error.message);
    }
}

// 登出
async function signOut() {
    try {
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        
        const { error } = await supabase.auth.signOut();
        
        if (error) throw error;
        
        updateUIForLoggedOutUser();
        
    } catch (error) {
        console.error('Sign out error:', error);
        showAuthError('Failed to sign out: ' + error.message);
    }
}

// 更新UI显示已登录用户
function updateUIForLoggedInUser(user) {
    const loginBtn = document.getElementById('loginBtn');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');
    const userAvatar = document.getElementById('userAvatar');
    
    if (loginBtn) loginBtn.style.display = 'none';
    
    if (userProfile) {
        userProfile.style.display = 'flex';
        
        if (userName) {
            userName.textContent = user.user_metadata?.full_name || user.email;
        }
        
        if (userAvatar && user.user_metadata?.avatar_url) {
            userAvatar.src = user.user_metadata.avatar_url;
        }
    }
    
    console.log('User logged in:', user);
}

// 更新UI显示未登录状态
function updateUIForLoggedOutUser() {
    const loginBtn = document.getElementById('loginBtn');
    const userProfile = document.getElementById('userProfile');
    
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (userProfile) userProfile.style.display = 'none';
    
    console.log('User logged out');
}

// 显示错误信息
function showAuthError(message) {
    // 创建简单的错误提示
    const errorDiv = document.createElement('div');
    errorDiv.className = 'auth-error-toast';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff4444;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
    `;
    
    document.body.appendChild(errorDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', initAuth);

// 导出函数供HTML调用
window.signInWithGoogle = signInWithGoogle;
window.signOut = signOut;
