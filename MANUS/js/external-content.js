// External Content Integration for Luli Radfahrer Website

// Radio Program Integration
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the media page
    if (window.location.pathname.includes('media.html')) {
        fetchRadioEpisodes();
    }
    
    // Check if we're on the homepage
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        fetchLatestRadioEpisode();
        fetchLatestBlogPosts();
        fetchSocialMediaPosts();
    }
    
    // Check if we're on the blog page
    if (window.location.pathname.includes('blog.html')) {
        fetchAllBlogPosts();
    }
});

// Function to fetch radio episodes from Radio USP
function fetchRadioEpisodes() {
    // This would normally use fetch API to get data from an external source
    // For demonstration, we'll simulate the data
    
    const episodesContainer = document.querySelector('.episode-grid');
    if (!episodesContainer) return;
    
    // Simulate loading state
    episodesContainer.innerHTML = '<div class="loading">Loading episodes...</div>';
    
    // Simulate API call delay
    setTimeout(() => {
        // This would be replaced with actual data from Radio USP API
        const episodes = [
            {
                title: "E-learning and edtech with artificial intelligence",
                date: "April 4, 2025",
                description: "The professor continues to be essential for guiding, inspiring, and developing socioemotional skills, while AI handles repetitive tasks and data analysis.",
                audioUrl: "https://radiousp.usp.br/episodes/e-learning-ai.mp3"
            },
            {
                title: ""Vibe coding", a new form of software development",
                date: "March 21, 2025",
                description: ""One thing is certain: of all professions affected by artificial intelligence, none will undergo more transformations than software development itself."",
                audioUrl: "https://radiousp.usp.br/episodes/vibe-coding.mp3"
            },
            {
                title: "Digital dependency or behavioral problem?",
                date: "March 7, 2025",
                description: "For Luli Radfahrer, most people don't have digital addiction but rather behavioral problems that manifest through technology use.",
                audioUrl: "https://radiousp.usp.br/episodes/digital-dependency.mp3"
            }
        ];
        
        // Update the DOM with episode data
        episodesContainer.innerHTML = '';
        episodes.forEach(episode => {
            const episodeCard = document.createElement('div');
            episodeCard.className = 'episode-card';
            episodeCard.innerHTML = `
                <div class="audio-player">
                    <audio controls>
                        <source src="${episode.audioUrl}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div class="episode-info">
                    <h3>${episode.title}</h3>
                    <p class="episode-date">${episode.date}</p>
                    <p>${episode.description}</p>
                </div>
            `;
            episodesContainer.appendChild(episodeCard);
        });
    }, 1000);
}

// Function to fetch the latest radio episode for the homepage
function fetchLatestRadioEpisode() {
    const programCard = document.querySelector('.program-card');
    if (!programCard) return;
    
    // Simulate loading state
    const loadingElement = document.createElement('p');
    loadingElement.className = 'loading-text';
    loadingElement.textContent = 'Loading latest episode...';
    programCard.appendChild(loadingElement);
    
    // Simulate API call delay
    setTimeout(() => {
        // This would be replaced with actual data from Radio USP API
        const latestEpisode = {
            title: "E-learning and edtech with artificial intelligence",
            date: "April 4, 2025",
            audioUrl: "https://radiousp.usp.br/episodes/e-learning-ai.mp3"
        };
        
        // Remove loading text
        programCard.removeChild(loadingElement);
        
        // Add latest episode info
        const episodeInfo = document.createElement('div');
        episodeInfo.className = 'latest-episode';
        episodeInfo.innerHTML = `
            <h4>Latest Episode: ${latestEpisode.title}</h4>
            <p>${latestEpisode.date}</p>
            <audio controls>
                <source src="${latestEpisode.audioUrl}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        programCard.appendChild(episodeInfo);
    }, 1000);
}

// Function to fetch latest blog posts for the homepage
function fetchLatestBlogPosts() {
    const articleGrid = document.querySelector('.article-grid');
    if (!articleGrid) return;
    
    // Simulate loading state
    articleGrid.innerHTML = '<div class="loading">Loading latest articles...</div>';
    
    // Simulate API call delay
    setTimeout(() => {
        // This would be replaced with actual data from a CMS or blog API
        const blogPosts = [
            {
                title: "E-learning and edtech with artificial intelligence",
                date: "April 4, 2025",
                category: "Digital Innovation",
                excerpt: "The professor continues to be essential for guiding, inspiring, and developing socioemotional skills, while AI handles repetitive tasks and data analysis.",
                imageUrl: "img/article1.jpg",
                url: "blog/e-learning-ai.html"
            },
            {
                title: ""Vibe coding", a new form of software development",
                date: "March 21, 2025",
                category: "AI & Society",
                excerpt: ""One thing is certain: of all professions affected by artificial intelligence, none will undergo more transformations than software development itself."",
                imageUrl: "img/article2.jpg",
                url: "blog/vibe-coding.html"
            },
            {
                title: "Digital dependency or behavioral problem?",
                date: "March 7, 2025",
                category: "Digital Behavior",
                excerpt: "For Luli Radfahrer, most people don't have digital addiction but rather behavioral problems that manifest through technology use.",
                imageUrl: "img/article3.jpg",
                url: "blog/digital-dependency.html"
            }
        ];
        
        // Update the DOM with blog post data
        articleGrid.innerHTML = '';
        blogPosts.forEach(post => {
            const articleCard = document.createElement('article');
            articleCard.className = 'card';
            articleCard.innerHTML = `
                <div class="card-image">
                    <img src="${post.imageUrl}" alt="${post.title}">
                </div>
                <div class="card-content">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}" class="read-more">Read More</a>
                </div>
            `;
            articleGrid.appendChild(articleCard);
        });
    }, 1000);
}

// Function to fetch all blog posts for the blog page
function fetchAllBlogPosts() {
    const latestArticles = document.querySelector('.latest-articles .article-grid');
    const moreArticles = document.querySelector('.more-articles .article-grid');
    if (!latestArticles || !moreArticles) return;
    
    // Simulate loading state
    latestArticles.innerHTML = '<div class="loading">Loading articles...</div>';
    moreArticles.innerHTML = '<div class="loading">Loading more articles...</div>';
    
    // Simulate API call delay
    setTimeout(() => {
        // This would be replaced with actual data from a CMS or blog API
        const recentPosts = [
            {
                title: "E-learning and edtech with artificial intelligence",
                date: "April 4, 2025",
                category: "Digital Innovation",
                excerpt: "The professor continues to be essential for guiding, inspiring, and developing socioemotional skills, while AI handles repetitive tasks and data analysis.",
                imageUrl: "img/article1.jpg",
                url: "blog/e-learning-ai.html"
            },
            {
                title: ""Vibe coding", a new form of software development",
                date: "March 21, 2025",
                category: "AI & Society",
                excerpt: ""One thing is certain: of all professions affected by artificial intelligence, none will undergo more transformations than software development itself."",
                imageUrl: "img/article2.jpg",
                url: "blog/vibe-coding.html"
            },
            {
                title: "Digital dependency or behavioral problem?",
                date: "March 7, 2025",
                category: "Digital Behavior",
                excerpt: "For Luli Radfahrer, most people don't have digital addiction but rather behavioral problems that manifest through technology use.",
                imageUrl: "img/article3.jpg",
                url: "blog/digital-dependency.html"
            }
        ];
        
        const olderPosts = [
            {
                title: "Human art and machine-generated art",
                date: "February 21, 2025",
                category: "Future Trends",
                excerpt: ""We will see an increasing coexistence between human art and machine-generated art," affirms Luli Radfahrer.",
                imageUrl: "img/article4.jpg",
                url: "blog/human-machine-art.html"
            },
            {
                title: "Synthetic data imitating real data... Up to a point",
                date: "February 7, 2025",
                category: "Digital Innovation",
                excerpt: "According to Luli Radfahrer, the biggest problems with artificial data are bias and imprecision.",
                imageUrl: "img/article5.jpg",
                url: "blog/synthetic-data.html"
            },
            {
                title: "Technology addiction is real",
                date: "December 20, 2024",
                category: "Digital Behavior",
                excerpt: "According to Luli Radfahrer, technology was designed to capture attention, which necessitates conscious consumption habits.",
                imageUrl: "img/article6.jpg",
                url: "blog/technology-addiction.html"
            }
        ];
        
        // Update the DOM with recent blog posts
        latestArticles.innerHTML = '';
        recentPosts.forEach(post => {
            const articleCard = document.createElement('article');
            articleCard.className = 'article-card';
            articleCard.innerHTML = `
                <div class="article-image">
                    <img src="${post.imageUrl}" alt="${post.title}">
                </div>
                <div class="article-content">
                    <div class="article-meta">
                        <span class="category">${post.category}</span>
                        <span class="date">${post.date}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}" class="read-more">Read More</a>
                </div>
            `;
            latestArticles.appendChild(articleCard);
        });
        
        // Update the DOM with older blog posts
        moreArticles.innerHTML = '';
        olderPosts.forEach(post => {
            const articleCard = document.createElement('article');
            articleCard.className = 'article-card';
            articleCard.innerHTML = `
                <div class="article-image">
                    <img src="${post.imageUrl}" alt="${post.title}">
                </div>
                <div class="article-content">
                    <div class="article-meta">
                        <span class="category">${post.category}</span>
                        <span class="date">${post.date}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}" class="read-more">Read More</a>
                </div>
            `;
            moreArticles.appendChild(articleCard);
        });
    }, 1000);
}

// Function to fetch social media posts
function fetchSocialMediaPosts() {
    // This would normally connect to social media APIs
    // For demonstration, we'll simulate the integration
    
    // This function would be expanded to connect to LinkedIn, Instagram, Twitter, and TikTok APIs
    console.log('Social media integration would fetch latest posts from LinkedIn, Instagram, Twitter, and TikTok');
}

// Function to handle language switching
function switchLanguage(lang) {
    // This would normally load language-specific content
    // For demonstration, we'll simulate the language switch
    
    const languageToggles = document.querySelectorAll('.language-toggle a');
    languageToggles.forEach(toggle => {
        toggle.classList.remove('active');
        if (toggle.textContent === lang) {
            toggle.classList.add('active');
        }
    });
    
    console.log(`Language switched to ${lang}`);
    // In a real implementation, this would load language-specific content from a database or JSON files
}

// Add event listeners for language toggles
document.addEventListener('DOMContentLoaded', function() {
    const languageToggles = document.querySelectorAll('.language-toggle a');
    languageToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage(this.textContent);
        });
    });
});
