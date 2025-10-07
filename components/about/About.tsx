'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  {
    year: '2018',
    title: 'Digital Awakening',
    description: 'First AI-generated artwork exhibited at Digital Dreams Festival',
  },
  {
    year: '2020',
    title: 'Blockchain Pioneer',
    description: 'Launched first NFT collection "Fractal Visions" on Ethereum',
  },
  {
    year: '2022',
    title: 'Sotheby\'s Breakthrough',
    description: 'Sold $1M NFT "Eternal Recursion" at Sotheby\'s Contemporary Art Auction',
  },
  {
    year: '2023',
    title: 'AR Innovation',
    description: 'Premiered interactive AR installation at Venice Biennale',
  },
  {
    year: '2024',
    title: 'Web3 Visionary',
    description: 'Founded "Code Canvas" - decentralized art collective on Polygon',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 px-6 bg-void-navy">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-pulse to-neon-glow bg-clip-text text-transparent">
              Narrative Odyssey
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Exploring the intersection of artificial intelligence, blockchain technology,
            and surrealist expression to create art that transcends physical boundaries
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-2xl mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-neon-pulse">
                The Artist
              </h3>
              <p className="text-lg text-white/80 mb-4 leading-relaxed">
                Elara Voss is a visionary digital artist whose work exists at the convergence
                of cutting-edge technology and timeless artistic expression. Born from the
                digital age, her creations challenge the boundaries between human creativity
                and artificial intelligence.
              </p>
              <p className="text-lg text-white/80 mb-4 leading-relaxed">
                Each piece is a meditation on the nature of consciousness, reality, and the
                infinite possibilities that emerge when code becomes canvas. Her work has been
                featured in prestigious galleries worldwide and collected by prominent museums.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Through blockchain technology, Elara has pioneered new models of artistic
                ownership and community engagement, creating living artworks that evolve
                with their collectors.
              </p>
            </div>
            
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl overflow-hidden glow-effect"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pulse/20 to-void-deep" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <p className="text-white/60 text-sm">Portrait Coming Soon</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Journey Through Time
          </h3>
          
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-pulse to-transparent hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-xl"
                  >
                    <div className="text-3xl font-bold text-neon-pulse mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-white/70">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-2/12 justify-center my-4 md:my-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 rounded-full bg-neon-pulse glow-effect"
                  />
                </div>

                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
