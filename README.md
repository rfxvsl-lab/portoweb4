# Madelyn Torff - UI/UX Designer Portfolio

## 📋 Overview
A modern, elegant personal portfolio website for Madelyn Torff, a UI/UX Designer. Features a sleek 2-page layout with a vibrant yellow accent color (#FDC435), sophisticated Playfair Display typography, and smooth interactive animations.

## ✨ Key Features

### 🎨 Design Elements
- **Color Scheme**: Yellow accent (#FDC435) with dark charcoal text (#25282B)
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Nunito (sans-serif)
- **Layout**: Responsive 2-page design (Home + About)
- **Animations**: 6 custom animations (fadeInUp, fadeInDown, slideInLeft, slideInRight, scaleIn, pulse)

### 🚀 Functionality
- ✅ **Mobile Menu**: Responsive hamburger menu with auto-close on interaction
- ✅ **Page Switching**: Smooth transitions between Home and About pages
- ✅ **Smooth Scrolling**: Anchor link navigation with offset for headers
- ✅ **Form Validation**: Email validation and user feedback on contact form
- ✅ **Scroll Animations**: Intersection Observer for scroll-reveal effects
- ✅ **Back to Home**: Navigation button on About page to return to homepage
- ✅ **Sticky Navbar**: About page has sticky navbar with back button
- ✅ **Lucide Icons**: 20+ customizable SVG icons

### 📱 Pages

#### **Home Page**
- Hero section with profile image and yellow blob background
- Call-to-action buttons (Projects, LinkedIn)
- 3 featured projects with descriptions and images
- Social media links (Instagram, LinkedIn, Email)
- Wave footer decoration

#### **About Page**
- Sticky navigation with "Back to Home" button
- About section with profile image and bio
- Contact form with validation
- Social media links
- Wave footer decoration

## 📁 File Structure

```
Portofolio-Website4/
├── index.html          # Main HTML file (351 lines)
├── css/
│   └── style.css       # Custom styles & animations (251 lines)
├── js/
│   └── main.js         # Interactive functionality (206 lines)
└── README.md           # This file
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with responsive design
- **Tailwind CSS**: CDN-based utility framework
- **Vanilla JavaScript**: Pure JS (no dependencies)
- **Lucide Icons**: SVG icon library
- **Google Fonts**: Playfair Display & Nunito

## 🚀 Quick Start

### 1. **No Installation Required**
Simply open `index.html` in a modern web browser. All dependencies are loaded from CDN.

```bash
# Open in browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### 2. **Live Server (Optional)**
For better development experience:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Then visit: http://localhost:8000
```

## 🎨 Customization Guide

### Change Primary Color
Edit the color in multiple places:

**In HTML `<style>` tag:**
```css
.bg-primary { background-color: #YOUR_COLOR; }
.text-primary { color: #YOUR_COLOR; }
.border-primary { border-color: #YOUR_COLOR; }
```

**In CSS file (`css/style.css`):**
```css
:root {
    --color-accent: #YOUR_COLOR;
}
```

### Update Content

**Hero Section**:
- Location: `index.html` lines 95-125
- Change name, title, description, and CTA text

**Projects**:
- Location: `index.html` lines 155-210
- Update project names, descriptions, and image URLs
- Modify button links

**About Page**:
- Location: `index.html` lines 240-280
- Update biography and profile information
- Change profile image URL

**Social Links**:
- Location: `index.html` multiple sections
- Update `href="#"` to actual social profiles

### Modify Animations
Edit `css/style.css` for animation timing and effects:

```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### Change Fonts
Update the Google Fonts import in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Mobile menu automatically appears on screens smaller than 768px.

## 🔧 JavaScript Functions

Located in `js/main.js`:

1. **`initMobileMenu()`** - Hamburger menu toggle and management
2. **`initSmoothScroll()`** - Smooth anchor link scrolling
3. **`initFormHandling()`** - Contact form validation
4. **`initScrollReveal()`** - Scroll-triggered animations
5. **`enhanceSwitchPage()`** - Improved page switching
6. **`initAll()`** - Initialize all functions on page load

## ✅ Browser Support

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimization

- CDN-based dependencies (no build required)
- Intersection Observer for lazy animation
- Minimal custom CSS (under 10KB)
- Optimized image loading
- Zero JavaScript dependencies

## 📝 SEO Basics

Meta tags are included in `<head>`:
- Title: "Madelyn Torff - UI/UX Designer"
- Viewport meta for mobile responsiveness
- Semantic HTML5 structure

Enhance with:
- Add meta description
- Add og: tags for social sharing
- Add structured data (schema.org)
- Optimize image alt text

## 🐛 Troubleshooting

### Mobile menu not closing
- Check if `data-mobile-menu-btn` attribute is present on button
- Verify `data-mobile-menu` attribute on menu container

### Animations not working
- Ensure `css/style.css` is linked in `<head>`
- Check browser developer console for CSS errors

### Icons not showing
- Verify Lucide CDN link in `<head>`
- Ensure `lucide.createIcons()` is called after page switches

### Form not validating
- Check browser console for JavaScript errors
- Verify input field names match JavaScript selectors

## 📞 Contact & Social

- **Instagram**: [@maindelyntorff]
- **LinkedIn**: [linkedin.com/in/maindelyntorff]
- **Email**: hello@maidelyntorff.com

## 📄 License

This portfolio template is personal and created for Madelyn Torff. Feel free to use as inspiration for your own portfolio.

---

**Created**: February 2026  
**Version**: 1.0  
**Last Updated**: February 8, 2026
