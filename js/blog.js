// Blog functionality
let currentBlogPage = 1;
const articlesPerPage = 10;
let allArticles = [];

// API Configuration - Auto detect environment
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5001/api/blog'
    : 'https://aitoday.me.uk/api/blog';  // 改成你的实际域名

// Load articles from backend
async function loadBlogArticles() {
    try {
        const response = await fetch(`${API_BASE_URL}/articles`);
        const data = await response.json();
        
        if (data.status === 'success') {
            allArticles = data.articles;
            // Sort by date descending (newest first)
            allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
            renderBlogList();
        } else {
            showEmptyBlogState();
        }
    } catch (error) {
        console.error('Failed to load blog articles:', error);
        showEmptyBlogState();
    }
}

// Render blog article list
function renderBlogList() {
    const container = document.getElementById('blogArticlesList');
    const totalPages = Math.ceil(allArticles.length / articlesPerPage);
    
    if (allArticles.length === 0) {
        showEmptyBlogState();
        return;
    }
    
    // Calculate start and end index
    const startIndex = (currentBlogPage - 1) * articlesPerPage;
    const endIndex = Math.min(startIndex + articlesPerPage, allArticles.length);
    const pageArticles = allArticles.slice(startIndex, endIndex);
    
    // Render articles
    let html = '';
    pageArticles.forEach(article => {
        const excerpt = article.content.substring(0, 150) + '...';
        html += `
            <div class="blog-article-item" onclick="showBlogDetail(${article.id})">
                <h2 class="blog-article-title">${article.title}</h2>
                <div class="blog-article-meta">
                    <div class="blog-meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${formatDate(article.date)}</span>
                    </div>
                    <div class="blog-meta-item">
                        <i class="fas fa-user"></i>
                        <span>${article.author}</span>
                    </div>
                </div>
                <div class="blog-article-excerpt">${excerpt}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Update pagination
    if (totalPages > 1) {
        document.getElementById('blogPagination').style.display = 'flex';
        document.getElementById('blogCurrentPage').textContent = currentBlogPage;
        document.getElementById('blogTotalPages').textContent = totalPages;
        
        // Update button states
        document.getElementById('blogPrevBtn').disabled = currentBlogPage === 1;
        document.getElementById('blogNextBtn').disabled = currentBlogPage === totalPages;
    } else {
        document.getElementById('blogPagination').style.display = 'none';
    }
}

// Show empty state
function showEmptyBlogState() {
    const container = document.getElementById('blogArticlesList');
    container.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-inbox"></i>
            <p>No articles yet. Check back soon!</p>
        </div>
    `;
    document.getElementById('blogPagination').style.display = 'none';
}

// Change blog page
function changeBlogPage(direction) {
    const totalPages = Math.ceil(allArticles.length / articlesPerPage);
    const newPage = currentBlogPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentBlogPage = newPage;
        renderBlogList();
        // Scroll to top
        document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
    }
}

// Show blog detail
function showBlogDetail(articleId) {
    const article = allArticles.find(a => a.id === articleId);
    if (!article) return;
    
    const detailContent = document.getElementById('blogArticleDetail');
    detailContent.innerHTML = `
        <h1 class="blog-detail-title">${article.title}</h1>
        <div class="blog-detail-meta">
            <div class="blog-detail-meta-item">
                <i class="fas fa-calendar-alt"></i>
                <span>${formatDate(article.date)}</span>
            </div>
            <div class="blog-detail-meta-item">
                <i class="fas fa-user"></i>
                <span>${article.author}</span>
            </div>
        </div>
        <div class="blog-detail-content">${formatContent(article.content)}</div>
    `;
    
    // Show detail view, hide list view
    document.getElementById('blogListView').style.display = 'none';
    document.getElementById('blogDetailView').style.display = 'block';
    
    // Scroll to top
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// Back to blog list
function backToBlogList() {
    document.getElementById('blogDetailView').style.display = 'none';
    document.getElementById('blogListView').style.display = 'block';
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Format content (convert line breaks to paragraphs)
function formatContent(content) {
    return content
        .split('\n\n')
        .map(para => `<p>${para.replace(/\n/g, '<br>')}</p>`)
        .join('');
}

// Initialize blog when tab is shown
document.addEventListener('DOMContentLoaded', function() {
    // Listen for blog tab activation
    const blogNavLink = document.querySelector('a[onclick*="blog"]');
    if (blogNavLink) {
        blogNavLink.addEventListener('click', function() {
            if (allArticles.length === 0) {
                loadBlogArticles();
            }
        });
    }
});
