'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'

const categories = ['All', 'Fractal Dreams', 'AR Echoes', 'Blockchain Visions', 'Interactive']

const projects = [
  {
    id: 1,
    title: 'Eternal Recursion',
    category: 'Fractal Dreams',
    year: '2022',
    price: '$1,000,000',
    description: 'AI-generated fractal exploring infinite self-similarity',
    nft: 'Sold at Sotheby\'s',
  },
  {
    id: 2,
    title: 'Digital Dreamscape',
    category: 'AR Echoes',
    year: '2023',
    price: '$250,000',
    description: 'Immersive AR installation merging physical and digital realms',
    nft: 'Ethereum',
  },
  {
    id: 3,
    title: 'Code Genesis',
    category: 'Blockchain Visions',
    year: '2024',
    price: '$500,000',
    description: 'Living NFT that evolves based on blockchain activity',
    nft: 'Polygon',
  },
  {
    id: 4,
    title: 'Neural Symphony',
    category: 'Interactive',
    year: '2023',
    price: '$350,000',
    description: 'Generative artwork responding to viewer\'s biometric data',
    nft: 'Ethereum',
  },
  {
    id: 5,
    title: 'Quantum Entanglement',
    category: 'Fractal Dreams',
    year: '2024',
    price: '$450,000',
    description: 'Paired NFTs exhibiting quantum-like correlation',
    nft: 'Solana',
  },
  {
    id: 6,
    title: 'Metaverse Portal',
    category: 'AR Echoes',
    year: '2024',
    price: '$600,000',
    description: 'Gateway between physical gallery and virtual world',
    nft: 'Ethereum',
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-gradient-void">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-pulse to-neon-glow bg-clip-text text-transparent">
              Portfolio Nexus
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Curated collection of digital masterpieces spanning AI-generated art,
            blockchain-verified NFTs, and immersive AR experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-neon-pulse text-white glow-effect'
                  : 'glass text-white/70 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="glass rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Project Image Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-void-light to-void-deep overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-pulse/20 to-neon-glow/20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🎨</div>
                  </div>
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-void-navy/90 flex items-center justify-center"
                  >
                    <span className="text-neon-pulse font-semibold">View Details</span>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-white/60">{project.year}</span>
                  </div>
                  <p className="text-sm text-neon-pulse mb-2">{project.category}</p>
                  <p className="text-white/70 text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-neon-glow">{project.price}</span>
                    <span className="text-xs glass px-3 py-1 rounded-full">{project.nft}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-void-navy/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-neon-pulse text-lg">{selectedProject.category}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white/60 hover:text-white text-3xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-square bg-gradient-to-br from-void-light to-void-deep rounded-xl flex items-center justify-center">
                    <div className="text-8xl opacity-50">🎨</div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-white/60 mb-1">Year</h4>
                      <p className="text-lg">{selectedProject.year}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-white/60 mb-1">Value</h4>
                      <p className="text-2xl font-bold text-neon-glow">{selectedProject.price}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-white/60 mb-1">Blockchain</h4>
                      <p className="text-lg">{selectedProject.nft}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-white/60 mb-1">Description</h4>
                      <p className="text-white/80 leading-relaxed">{selectedProject.description}</p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 px-6 py-4 bg-neon-pulse rounded-full font-semibold glow-effect"
                    >
                      View on Blockchain
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
