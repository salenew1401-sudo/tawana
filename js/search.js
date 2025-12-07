// Search Manager
class SearchManager {
    constructor() {
        this.overlay = document.getElementById('search-overlay');
        this.input = document.getElementById('search-input');
        this.results = document.getElementById('search-results');
        this.isOpen = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    open() {
        this.overlay.classList.add('active');
        this.isOpen = true;
        setTimeout(() => {
            this.input.focus();
        }, 100);
    }

    close() {
        this.overlay.classList.remove('active');
        this.isOpen = false;
        this.input.value = '';
        this.results.innerHTML = '';
    }

    search(query) {
        // Simple search implementation
        // In a real application, this would search through site content
        if (!query.trim()) {
            this.results.innerHTML = '';
            return;
        }

        const searchableContent = [
            { title: 'Home', url: 'index.html', description: 'Main landing page' },
            { title: 'Videos', url: 'pages/videos.html', description: 'Video gallery' },
            { title: 'Archive', url: 'pages/archive.html', description: 'Post archive' },
            { title: 'Get Theme', url: 'pages/theme.html', description: 'Download theme' }
        ];

        const filteredResults = searchableContent.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        this.displayResults(filteredResults);
    }

    displayResults(results) {
        if (results.length === 0) {
            this.results.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No results found</p>';
            return;
        }

        const html = results.map(result => `
            <div class="card fade-in">
                <h3 class="card-title">${result.title}</h3>
                <p class="card-description">${result.description}</p>
                <a href="${result.url}" style="color: var(--gradient-start); text-decoration: none;">View →</a>
            </div>
        `).join('');

        this.results.innerHTML = html;
    }

    setupEventListeners() {
        // Search button
        const searchBtn = document.getElementById('search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.open());
        }

        // Close button
        const closeBtn = document.getElementById('search-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Click outside
        if (this.overlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }

        // Search input
        if (this.input) {
            this.input.addEventListener('input', (e) => {
                this.search(e.target.value);
            });
        }
    }
}

// Initialize search manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.searchManager = new SearchManager();
    });
} else {
    window.searchManager = new SearchManager();
}
