# Cybersecurity Portfolio - Vimalatithyan S

A professional, cinematic portfolio website designed to attract recruiters and showcase cybersecurity expertise.

## Features

- **Cinematic Background** - Multi-layered animated background with grid patterns, scanlines, and particles
- **Professional Design** - Recruiter-grade, modern, and impressive
- **Dark Theme** - Cybersecurity aesthetic with neon green accents
- **Fully Responsive** - Works perfectly on all devices
- **Smooth Animations** - Professional fade-in effects and interactions
- **Interactive Elements** - Hover effects, scroll animations, and smooth transitions

## Sections

1. **Hero** - Impressive introduction with stats and CTAs
2. **About** - Professional background with profile image
3. **Skills** - Offensive Security, Defensive Security, Tools, Scripting
4. **Experience** - Timeline view of professional experience
5. **Vulnerability Disclosures** - Recognition cards from global organizations
6. **Certifications** - Professional certifications showcase
7. **Projects** - Case studies and automation tools
8. **Resume & Reports** - Download links
9. **Contact** - Professional contact information

## Getting Started

### Prerequisites

No prerequisites needed. Just open the HTML file in a browser.

### Installation

1. Clone or download this repository
2. Add your profile image as `profile.jpg` in the root directory
3. Open `index.html` in your web browser

### Using Local Server

**Python:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npm start
```

Then open `http://localhost:8000`

## Customization

### Update Personal Information

Edit `index.html` to update:
- Name, role, and description in hero section
- About section content
- Experience details
- Skills and certifications
- Contact information

### Add Profile Image

1. Save your image as `profile.jpg` in the root directory
2. Or update the image path in the About section:
   ```html
   <img src="your-image.jpg" alt="Your Name" class="profile-image">
   ```

### Update Resume Links

Update the resume and report download links in the Resume section:
```html
<a href="your-resume.pdf" class="btn btn-primary btn-large">
```

## Color Scheme

The color palette is defined in `styles.css`:

```css
:root {
    --bg-primary: #050b07;
    --bg-secondary: #0b1f14;
    --accent-green: #00ff88;
    --accent-muted: #1aff9c;
    --text-primary: #d8ffe9;
    --text-secondary: #8fd9b6;
    --border-dark: #0f3d2a;
}
```

## Hosting

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (usually `main`)
4. Site will be live at `https://yourusername.github.io/portfolio`

### Netlify

1. Sign up at [Netlify](https://www.netlify.com)
2. Drag and drop your project folder
3. Site goes live instantly

### Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Import GitHub repository
3. Deploy with one click

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet with cinematic effects
├── script.js       # JavaScript interactions
├── profile.jpg     # Your profile image (add this)
├── package.json    # npm configuration
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations
- Smooth 60fps scroll effects
- Efficient CSS animations
- Minimal JavaScript

## License

This project is open source and available for personal and commercial use.

---

**Built with security in mind.**

For questions or customization help, feel free to reach out!

