# Elara Voss - Surrealist Artist Portfolio

A bleeding-edge Next.js 15 portfolio website for surrealist artist Elara Voss, featuring Three.js 3D visuals, D3 data visualizations, GLSL shader experimentation, and Web3 NFT integration.

## 🎨 Features

- **Three.js Hero Portal**: Interactive 3D landing page with particle systems and distortion effects
- **D3 Narrative Timeline**: Animated artist journey visualization using D3.js
- **Voronoi AI-Remix Portfolio**: Interactive gallery with Voronoi tessellation and HuggingFace integration stub
- **GLSL Process Lab**: Real-time shader editor with Monaco editor for generative art creation
- **Web3 Contact/Shop**: Ethereum wallet integration with ethers.js for NFT purchases
- **PWA Support**: Installable progressive web app with offline capabilities
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Tailwind v4**: Modern utility-first CSS framework

## 🏗️ Architecture

```mermaid
graph TD
    A[Next.js 15 App Router] --> B[Three.js Portal]
    A --> C[D3 Timeline]
    A --> D[Voronoi Gallery]
    A --> E[GLSL Lab]
    A --> F[Web3 Shop]
    
    B --> G[React Three Fiber]
    G --> H[@react-three/drei]
    
    C --> I[D3.js Visualization]
    
    D --> J[Delaunator Voronoi]
    D --> K[HuggingFace API Stub]
    
    E --> L[Monaco Editor]
    E --> M[WebGL Renderer]
    
    F --> N[ethers.js]
    F --> O[MetaMask Integration]
    
    P[Framer Motion] --> A
    Q[Tailwind CSS v4] --> A
    R[TypeScript] --> A
    
    style A fill:#E94560
    style B fill:#1A1A2E,color:#fff
    style C fill:#1A1A2E,color:#fff
    style D fill:#1A1A2E,color:#fff
    style E fill:#1A1A2E,color:#fff
    style F fill:#1A1A2E,color:#fff
```

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Data Viz**: D3.js
- **Code Editor**: Monaco Editor
- **Web3**: ethers.js v6
- **Animations**: Framer Motion
- **PWA**: next-pwa
- **Geometry**: Delaunator (Voronoi diagrams)

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── about/             # D3 timeline about page
│   ├── portfolio/         # Voronoi gallery
│   ├── lab/               # GLSL shader lab
│   ├── contact/           # Web3 contact/shop
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home with Three.js portal
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Animated navigation
│   ├── ThreePortal.tsx    # Three.js hero
│   ├── D3Timeline.tsx     # D3 visualization
│   ├── VoronoiGallery.tsx # Portfolio gallery
│   ├── GLSLLab.tsx        # Shader editor
│   └── Web3Contact.tsx    # Web3 integration
├── lib/                   # Utility libraries
│   ├── hooks/             # Custom React hooks
│   │   └── useWeb3.ts     # Web3 wallet hook
│   ├── shaders/           # GLSL shaders
│   │   └── default.glsl   # Default fragment shader
│   ├── utils/             # Helper functions
│   └── contracts/         # Smart contract ABIs
├── public/                # Static assets
│   └── manifest.json      # PWA manifest
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🎨 Color Palette

- **Primary Dark**: `#1A1A2E` - Deep navy background
- **Accent Red**: `#E94560` - Vibrant coral/pink for CTAs and highlights
- **White**: `#FFFFFF` - Text and UI elements
- **Gradients**: Smooth transitions between primary colors

## 🚦 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn
- MetaMask wallet (for Web3 features)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# HuggingFace API (for AI art generation)
NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_key_here

# Ethereum Network
NEXT_PUBLIC_ETHEREUM_NETWORK=mainnet
```

### PWA Configuration

The app is configured as a Progressive Web App with:
- Service worker for offline functionality
- App manifest for installation
- Optimized caching strategy

## 🎯 Key Features Explained

### Three.js Portal
The homepage features an interactive 3D sphere with:
- MeshDistortMaterial for organic deformation
- Particle system with 500+ points
- Real-time animation and rotation
- OrbitControls for user interaction

### D3 Timeline
Animated SVG visualization showing:
- Artist's journey from 2015-2024
- Connected timeline nodes
- Hover interactions
- Smooth entrance animations

### Voronoi Gallery
Interactive portfolio display using:
- Delaunator for Voronoi tessellation
- Canvas-based rendering
- Click-to-select artwork details
- HuggingFace API integration stub

### GLSL Lab
Real-time shader programming environment:
- Monaco editor with GLSL syntax
- WebGL rendering pipeline
- Live preview updates
- Preset shader examples
- Uniform variable support (time, resolution)

### Web3 Shop
Ethereum integration for NFT sales:
- MetaMask wallet connection
- Balance display
- NFT marketplace UI
- Transaction simulation
- Web3-gated content access

## 🏆 Performance

Target Lighthouse scores:
- **Performance**: 100
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

Optimizations:
- Next.js 15 Turbopack for faster builds
- Image optimization
- Code splitting
- Tree shaking
- SWC minification
- Package import optimization

## 🌐 Web3 Features

- **Wallet Connection**: MetaMask integration via ethers.js
- **NFT Marketplace**: Browse and purchase digital artworks
- **Gated Content**: Exclusive access for wallet holders
- **Transaction Handling**: Secure Ethereum transactions

## 🎨 Artistic Vision

Elara Voss's portfolio embodies the fusion of traditional surrealist art with cutting-edge technology. The site itself is an artwork, pushing boundaries of web experiences while maintaining accessibility and performance. Every interaction is designed to feel magical and intentional, rival to digital artists like Refik Anadol.

## 📝 License

Private portfolio project. All artwork and code © Elara Voss.

## 🤝 Contributing

This is a private portfolio project. For collaboration inquiries, please connect via the Web3 contact form.

## 🔗 Links

- Portfolio: https://elaravoss.art (example)
- OpenSea: https://opensea.io/elaravoss (example)
- Twitter: @elaravoss (example)
- Foundation: https://foundation.app/@elaravoss (example)

---

Built with ❤️ using Next.js 15, React 19, and modern web technologies.
