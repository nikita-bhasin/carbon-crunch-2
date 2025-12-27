# Carbon2 Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates professional UI engineering practices with pixel-accurate design implementation and comprehensive responsiveness across all device sizes.

## 🚀 Features

- **Responsive Design**: Fully responsive across Desktop, Tablet, and Mobile devices
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Multiple Pages**: Landing page, About, Features/Pricing, and Contact pages
- **Professional UI**: Clean, modern interface with smooth transitions and hover effects
- **Accessible**: Semantic HTML and proper ARIA labels
- **Performance Optimized**: Next.js server-side rendering and optimized builds

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.x or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd carbon2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Build for Production

1. **Build the application**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the production server**
   ```bash
   npm start
   # or
   yarn start
   ```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

### Deploy to Netlify

1. Build the application: `npm run build`
2. Set the build command: `npm run build`
3. Set the publish directory: `.next`
4. Push to GitHub and connect your repository on Netlify

### Deploy to GitHub Pages

For GitHub Pages deployment, you'll need to configure Next.js for static export:

1. Update `next.config.js` to include `output: 'export'`
2. Run `npm run build`
3. Deploy the `out` folder to GitHub Pages

## 📱 Responsive Breakpoints

The application uses Tailwind CSS responsive breakpoints:

- **Mobile**: Default (up to 640px)
- **Tablet**: `sm:` (640px and up)
- **Desktop**: `md:` (768px and up), `lg:` (1024px and up), `xl:` (1280px and up)

## 📄 Pages

- **Home** (`/`): Landing page with hero section, features, stats, and CTA
- **About** (`/about`): Company information, mission, team, and history
- **Features** (`/features`): Detailed features list and pricing plans
- **Contact** (`/contact`): Contact form and company contact information

## 🎨 Design System

### Colors

- **Primary**: Blue (#0ea5e9 and variations)
- **Background**: White and light gray shades
- **Text**: Dark gray (#111827) and medium gray (#6b7280)

### Typography

- **Headings**: Bold, various sizes (text-3xl to text-7xl)
- **Body**: Regular weight, readable sizes
- **Font**: System font stack for optimal performance

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📝 Project Structure

```
carbon2/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── features/
│   │   └── page.tsx          # Features/Pricing page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/
│   ├── Footer.tsx            # Footer component
│   └── Navbar.tsx            # Navigation component
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## ✨ Key Features Implementation

### Responsiveness

- Mobile-first approach with Tailwind CSS
- Flexible grid layouts that adapt to screen sizes
- Responsive navigation with mobile menu
- Typography scaling for different viewports
- Touch-friendly button sizes on mobile

### Performance

- Server-side rendering with Next.js
- Optimized images and assets
- Minimal JavaScript bundle
- CSS purging with Tailwind

### Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast

## 📸 Screenshots

Please take responsive screenshots for:
- Desktop (1920x1080 or similar)
- Tablet (768x1024 or similar)
- Mobile (375x667 or similar)

---

**Live Preview**: [Add your deployment URL here]
**Figma Design**: https://www.figma.com/design/U5oWZGnEQjv3ckO42dWzbV/Untitled?node-id=0-1&t=AiUq7auJiqgyDxUJ-1

