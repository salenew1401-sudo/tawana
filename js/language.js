// Language Manager
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.translations = {
            en: {
                'nav-home': 'Home',
                'nav-videos': 'Videos',
                'nav-archive': 'Archive',
                'nav-theme': 'Get Theme',
                'hero-title': "Hi! I'm Alex 👋",
                'hero-subtitle': 'A digital explorer, coder, and Linux advocate',
                'hero-cta': "Let's Work Together",
                'search-placeholder': 'Search...',
                'videos-title': 'Video Gallery',
                'videos-subtitle': 'Watch our latest content',
                'archive-title': 'Archive',
                'archive-subtitle': 'Browse through all posts',
                'theme-title': 'Get Theme',
                'theme-subtitle': 'Download and customize your theme',
                'theme-download': 'Download Theme',
                'theme-preview': 'Preview',
                'theme-docs': 'Documentation'
            },
            fa: {
                'nav-home': 'خانه',
                'nav-videos': 'ویدیوها',
                'nav-archive': 'آرشیو',
                'nav-theme': 'دریافت قالب',
                'hero-title': 'سلام! من الکس هستم 👋',
                'hero-subtitle': 'یک کاوشگر دیجیتال، برنامه‌نویس و طرفدار لینوکس',
                'hero-cta': 'بیایید با هم کار کنیم',
                'search-placeholder': 'جستجو...',
                'videos-title': 'گالری ویدیو',
                'videos-subtitle': 'آخرین محتوای ما را تماشا کنید',
                'archive-title': 'آرشیو',
                'archive-subtitle': 'مرور تمام پست‌ها',
                'theme-title': 'دریافت قالب',
                'theme-subtitle': 'قالب خود را دانلود و سفارشی کنید',
                'theme-download': 'دانلود قالب',
                'theme-preview': 'پیش‌نمایش',
                'theme-docs': 'مستندات'
            }
        };
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.setupEventListeners();
    }

    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);

        // Update HTML attributes
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
        document.body.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

        // Update all translatable elements
        this.updateTranslations();

        // Update active language button
        this.updateActiveButton();
    }

    updateTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (this.translations[this.currentLang][key]) {
                element.placeholder = this.translations[this.currentLang][key];
            }
        });
    }

    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.getElementById(`lang-${this.currentLang}`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }

    switchLanguage(lang) {
        if (lang !== this.currentLang) {
            this.applyLanguage(lang);
        }
    }

    setupEventListeners() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
    }
}

// Initialize language manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.languageManager = new LanguageManager();
    });
} else {
    window.languageManager = new LanguageManager();
}
