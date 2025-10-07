# Elara Voss - Artist Portfolio

A bleeding-edge, immersive digital portfolio for visionary surrealist digital artist Elara Voss. Built with Next.js 15, Three.js, and Web3 technologies.

## 🎨 Features

- **Immersive Hero**: WebGL-powered portal with Three.js shader effects and procedural animations
- **Interactive Portfolio**: AI-augmented grid with dynamic filtering and modal views
- **Genesis Lab**: Step-by-step process visualization of the artistic workflow
- **Echo Chamber**: Global exhibitions map and press coverage
- **Web3 Integration**: Wallet connection stubs for NFT interactions
- **Performance First**: Optimized for Lighthouse 100 scores
- **Accessibility**: WCAG compliant with screen reader support
- **PWA Ready**: Offline-first with service worker configuration
- **Responsive**: Mobile-first design that works on all devices

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion v11
- **3D Graphics**: Three.js, React Three Fiber
- **Form Handling**: React Hook Form with Yup validation
- **Internationalization**: next-intl
- **Deployment**: Vercel/Cloudflare ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Rocky6767500/chhatrapal.git
cd chhatrapal

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Development

```bash
# Run linter
npm run lint

# Analyze bundle size
npm run analyze
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── hero/             # Hero section with WebGL
│   ├── about/            # About/Biography section
│   ├── portfolio/        # Portfolio grid
│   ├── process/          # Process/Genesis Lab
│   ├── exhibitions/      # Exhibitions & press
│   ├── contact/          # Contact form & Web3
│   └── shared/           # Shared components
├── lib/                   # Utilities and hooks
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎯 Performance

This portfolio is optimized for:
- ✅ Lighthouse Performance: 100
- ✅ Lighthouse Accessibility: 100
- ✅ Lighthouse Best Practices: 100
- ✅ Lighthouse SEO: 100

## 🔧 Customization

### Artist Information

Edit the content in:
- `components/about/About.tsx` - Biography and timeline
- `components/portfolio/Portfolio.tsx` - Project data
- `components/exhibitions/Exhibitions.tsx` - Exhibition history

### Styling

Customize colors in `tailwind.config.js`:
```javascript
colors: {
  void: { /* Background colors */ },
  neon: { /* Accent colors */ },
}
```

### Web3 Integration

Add wallet connection logic in:
- `components/contact/Contact.tsx`

## 📝 License

© 2024 Elara Voss. All rights reserved.

## 🤝 Contributing

This is a portfolio template. Feel free to fork and customize for your own use.

## 🌟 Acknowledgments

Built with passion for the intersection of art, technology, and blockchain.

---

**Art as Living Code** - Every element designed to feel alive with procedural generation and seamless interactions.