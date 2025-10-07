# Architecture Documentation

## System Overview

This is a modern, production-ready artist portfolio built with cutting-edge web technologies. The architecture follows Next.js 15 App Router patterns with server-side rendering, static generation, and client-side interactivity.

## Technology Stack

### Core Framework
- **Next.js 15**: React framework with App Router
- **React 18**: UI library with Server Components
- **TypeScript**: Type-safe development

### Styling & Animation
- **Tailwind CSS 3**: Utility-first CSS framework
- **Framer Motion 11**: Animation library
- **Custom CSS**: Glass morphism, gradients, effects

### 3D Graphics
- **Three.js**: WebGL 3D library
- **React Three Fiber**: React renderer for Three.js
- **@react-three/drei**: Helpers for R3F

### Data & Forms
- **React Hook Form**: Form management
- **Yup**: Schema validation
- **D3.js**: Data visualization

### Utilities
- **clsx & tailwind-merge**: Class name management
- **Sharp**: Image optimization
- **next-intl**: Internationalization

## Project Structure

```
chhatrapal/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page (main entry)
│   └── globals.css          # Global styles
│
├── components/              # React components
│   ├── hero/               # Hero section
│   │   ├── Hero.tsx        # Main hero component
│   │   └── WebGLScene.tsx  # Three.js scene
│   ├── about/              # About section
│   │   └── About.tsx       # Biography & timeline
│   ├── portfolio/          # Portfolio section
│   │   └── Portfolio.tsx   # Project grid & modals
│   ├── process/            # Process section
│   │   └── Process.tsx     # Workflow visualization
│   ├── exhibitions/        # Exhibitions section
│   │   └── Exhibitions.tsx # Events & press
│   ├── contact/            # Contact section
│   │   └── Contact.tsx     # Form & Web3 integration
│   └── shared/             # Shared components
│       └── Navigation.tsx  # Global navigation
│
├── lib/                     # Utilities & hooks
│   ├── hooks/              # Custom React hooks
│   │   └── useMediaQuery.ts
│   └── utils/              # Utility functions
│       └── cn.ts           # Class name merger
│
├── public/                  # Static assets
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO configuration
│
├── styles/                  # Additional styles
│
├── genesis.json            # Customization seed file
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
├── vercel.json             # Deployment configuration
├── package.json            # Dependencies
├── README.md               # Documentation
├── CHANGELOG.md            # Version history
└── ARCHITECTURE.md         # This file
```

## Component Architecture

### Page Structure

```
HomePage
├── Hero (WebGL Canvas)
├── About (Timeline)
├── Portfolio (Grid + Modal)
├── Process (Stepper)
├── Exhibitions (Cards)
└── Contact (Form + Web3)
```

### Data Flow

1. **Server-Side**: Metadata and initial HTML generation
2. **Client-Side**: Interactive components with state management
3. **Component State**: Local state with useState/useRef
4. **Animation State**: Framer Motion hooks (useInView, etc.)

### Rendering Strategy

- **SSR**: Initial page load with server-rendered HTML
- **SSG**: Static generation of routes at build time
- **CSR**: Client-side hydration and interactivity
- **Lazy Loading**: Dynamic imports for heavy components (Three.js)

## Design System

### Color Palette

```css
--void-navy:   #1A1A2E  /* Primary background */
--void-light:  #16213E  /* Secondary background */
--void-deep:   #0F3460  /* Tertiary background */
--neon-pulse:  #E94560  /* Primary accent */
--neon-glow:   #FF6B9D  /* Secondary accent */
```

### Typography

- **Primary**: System fonts (sans-serif)
- **Display**: Variable fonts for artistic drift
- **Sizes**: Responsive scaling (text-sm to text-6xl)

### Spacing

- **Container**: max-w-7xl centered
- **Sections**: py-32 (vertical padding)
- **Grid**: Responsive gaps (gap-4 to gap-12)

### Effects

- **Glass Morphism**: backdrop-blur with transparency
- **Glow Effects**: box-shadow with accent colors
- **Gradients**: Linear and radial gradients
- **Animations**: Framer Motion with cubic-bezier easing

## Performance Optimizations

### Build Time
- Code splitting by route
- Tree shaking of unused code
- Minification and compression
- Image optimization with Sharp

### Runtime
- Lazy loading of Three.js components
- RequestAnimationFrame for smooth animations
- Debounced scroll handlers
- Optimized re-renders with React.memo

### Bundle Analysis
- First Load JS: ~102 KB (shared)
- Route JS: ~10.6 KB (home page)
- Total: ~149 KB First Load

## Accessibility

### WCAG Compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Alt text for images
- Color contrast ratios

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable/reduce animations */
}
```

### Screen Reader Support
- Proper heading hierarchy
- Descriptive link text
- Form labels and validation
- Skip links (can be added)

## SEO Strategy

### Metadata
- Comprehensive title and description
- Open Graph tags
- Twitter Cards
- Keywords and authors

### Technical SEO
- Robots.txt configuration
- Sitemap (can be generated)
- Canonical URLs
- Structured data (can be added)

### Performance
- Fast load times (< 2s)
- Mobile-first design
- Core Web Vitals optimization

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Features**:
- Automatic HTTPS
- Global CDN
- Edge functions
- Preview deployments
- Environment variables

### Cloudflare Pages

```bash
# Build command
npm run build

# Output directory
.next
```

**Features**:
- Global CDN
- DDoS protection
- Analytics
- Web3 gateway

### Self-Hosted

```bash
# Build
npm run build

# Start
npm start
```

**Requirements**:
- Node.js 18+
- PM2 or similar process manager
- Reverse proxy (Nginx/Apache)
- SSL certificate

## Security

### Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: enabled
- Referrer-Policy: origin-when-cross-origin

### Best Practices
- No exposed secrets
- Input validation
- CSRF protection (forms)
- Content Security Policy (can be added)

## Testing Strategy

### Unit Tests
- Component testing with Vitest
- Utility function tests
- Hook testing with React Testing Library

### Integration Tests
- User flow testing
- Form submission
- Navigation testing

### E2E Tests
- Playwright for browser automation
- Critical user journeys
- Cross-browser testing

## Monitoring & Analytics

### Recommended Tools
- **Plausible.io**: Privacy-friendly analytics
- **Vercel Analytics**: Core Web Vitals
- **Sentry**: Error tracking
- **LogRocket**: Session replay

## Future Considerations

### Scalability
- CDN for static assets
- Database for dynamic content
- Caching strategies
- Load balancing

### Features
- CMS integration (Sanity, Contentful)
- Real-time updates (WebSocket)
- Progressive image loading
- Video support

### Web3 Integration
- Wallet connection (MetaMask, WalletConnect)
- Smart contract interaction (ethers.js)
- IPFS for decentralized storage
- NFT minting and viewing

## Development Workflow

### Local Development
```bash
npm run dev    # Start dev server
npm run lint   # Lint code
npm run build  # Build for production
```

### Git Workflow
1. Feature branch from main
2. Develop and test locally
3. Create pull request
4. Review and merge
5. Automatic deployment

### Code Style
- ESLint for linting
- Prettier for formatting (can be added)
- TypeScript strict mode
- Consistent naming conventions

## Documentation

### Code Comments
- JSDoc for functions
- Inline comments for complex logic
- Component prop documentation

### External Documentation
- README.md: Getting started
- CHANGELOG.md: Version history
- ARCHITECTURE.md: This document
- API docs (if applicable)

---

**Last Updated**: 2024  
**Version**: 1.0.0  
**Maintainer**: Development Team
