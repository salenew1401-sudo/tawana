# T4Wr00T - Personal GitHub Pages Site

A modern, responsive personal website with dark/light theme support and multi-language capabilities (English/Persian).

## 🌟 Features

- **🎨 Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **🌍 Multi-language Support** - Full English and Persian (Farsi) support with RTL layout
- **🔍 Search Functionality** - Fast and intuitive search overlay with keyboard shortcuts
- **📱 Fully Responsive** - Perfect display on all devices from mobile to desktop
- **⚡ Fast & Lightweight** - Optimized performance with minimal dependencies
- **🎯 Modern Design** - Clean, professional aesthetics with smooth animations
- **♿ Accessible** - ARIA labels and keyboard navigation support
- **🚀 GitHub Pages Ready** - Automatic deployment via GitHub Actions

## 📁 File Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for automatic deployment
├── css/
│   └── styles.css              # Main stylesheet with theme variables
├── js/
│   ├── theme.js                # Theme management with localStorage
│   ├── search.js               # Search overlay functionality
│   └── language.js             # Multi-language support
├── pages/
│   ├── videos.html             # Video gallery page
│   ├── archive.html            # Blog archive page
│   └── theme.html              # Theme download/info page
├── assets/
│   └── images/                 # Image assets directory
├── index.html                  # Main landing page
└── README.md                   # Project documentation
```

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/salenew1401-sudo/tawana.git
cd tawana
```

2. Open `index.html` in your browser:
```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx http-server

# Or simply open the file
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Go to your repository settings
2. Navigate to **Pages** section
3. Set source to **GitHub Actions**
4. Push to `main` branch to trigger deployment

The deployment workflow is configured in `.github/workflows/deploy.yml`.

## 🎨 Customization

### Changing Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #1a1a1a;
    --text-secondary: #6c757d;
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
    /* ... more variables */
}
```

### Adding Content

1. **Hero Section**: Edit `index.html` - Update title, subtitle, images, and CTA button
2. **Navigation**: Modify navbar links in any HTML file
3. **Videos**: Add video cards in `pages/videos.html`
4. **Archive**: Add blog posts in `pages/archive.html`

### Adding Languages

Edit `js/language.js` and add translations:

```javascript
this.translations = {
    en: {
        'nav-home': 'Home',
        // ... more translations
    },
    fa: {
        'nav-home': 'خانه',
        // ... more translations
    },
    // Add new language
    es: {
        'nav-home': 'Inicio',
        // ... more translations
    }
};
```

Then add language button in HTML:

```html
<button id="lang-es" class="lang-btn" data-lang="es" aria-label="Spanish">
    🇪🇸
</button>
```

### Changing Fonts

The site uses:
- **Inter** - Primary font for English
- **Vazirmatn** - Primary font for Persian
- **Roboto Mono** - Code and monospace text

To change fonts, update the Google Fonts links in HTML files.

## 🖼️ Adding Images

Place your images in the `assets/images/` directory and reference them:

```html
<img src="assets/images/your-image.jpg" alt="Description">
```

For external images, use direct URLs:

```html
<img src="https://example.com/image.jpg" alt="Description">
```

## 🔧 Advanced Configuration

### Theme Settings

The theme persists using localStorage. To change default theme, edit `js/theme.js`:

```javascript
this.theme = localStorage.getItem('theme') || 'dark'; // Change to 'dark'
```

### Language Settings

To change default language, edit `js/language.js`:

```javascript
this.currentLang = localStorage.getItem('language') || 'fa'; // Change to 'fa' for Persian
```

### Search Configuration

Customize search content in `js/search.js`:

```javascript
const searchableContent = [
    { title: 'Home', url: 'index.html', description: 'Main landing page' },
    // Add more searchable content
];
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/) and [Vazirmatn](https://github.com/rastikerdar/vazirmatn)
- Design inspiration from modern web design trends

## 📞 Contact

**T4Wr00T** - Digital Explorer, Coder, and Linux Advocate

- GitHub: [@salenew1401-sudo](https://github.com/salenew1401-sudo)
- Website: [tawana.github.io](https://salenew1401-sudo.github.io/tawana)

---

Made with ❤️ by T4Wr00T
