'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const exhibitions = [
  {
    id: 1,
    title: 'Venice Biennale 2023',
    location: 'Venice, Italy',
    type: 'AR Installation',
    year: '2023',
    description: 'Premiered "Portal Visions" - an immersive AR experience exploring digital consciousness',
    coordinates: { lat: 45.4408, lng: 12.3155 },
  },
  {
    id: 2,
    title: 'Art Basel Miami',
    location: 'Miami, USA',
    type: 'Solo Exhibition',
    year: '2022',
    description: 'Showcased "Fractal Dreams" collection with live minting events',
    coordinates: { lat: 25.7617, lng: -80.1918 },
  },
  {
    id: 3,
    title: 'Digital Dreams Festival',
    location: 'Tokyo, Japan',
    type: 'Group Show',
    year: '2018',
    description: 'First exhibition featuring AI-generated artworks',
    coordinates: { lat: 35.6762, lng: 139.6503 },
  },
  {
    id: 4,
    title: 'Sotheby\'s Contemporary',
    location: 'New York, USA',
    type: 'Auction',
    year: '2022',
    description: 'Historic $1M sale of "Eternal Recursion" NFT',
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
  {
    id: 5,
    title: 'Tate Modern Digital',
    location: 'London, UK',
    type: 'Featured Artist',
    year: '2024',
    description: 'Month-long digital exhibition exploring Web3 and art',
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
]

const press = [
  {
    id: 1,
    publication: 'Artforum',
    title: 'The New Digital Renaissance',
    sentiment: 'rave',
    excerpt: 'Elara Voss is redefining what it means to be an artist in the 21st century...',
    date: '2024',
  },
  {
    id: 2,
    publication: 'The Art Newspaper',
    title: 'Blockchain Meets Canvas',
    sentiment: 'rave',
    excerpt: 'A groundbreaking approach to digital ownership and artistic expression...',
    date: '2023',
  },
  {
    id: 3,
    publication: 'Frieze Magazine',
    title: 'AI as Co-Creator',
    sentiment: 'critique',
    excerpt: 'Questions arise about authorship when algorithms generate art...',
    date: '2022',
  },
  {
    id: 4,
    publication: 'Hyperallergic',
    title: 'The Future is Now',
    sentiment: 'rave',
    excerpt: 'Voss demonstrates that technology and artistry are not mutually exclusive...',
    date: '2024',
  },
]

export default function Exhibitions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="exhibitions" className="relative py-32 px-6 bg-gradient-void">
      <div className="container mx-auto max-w-7xl">
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
              Echo Chamber
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Global exhibitions, prestigious auctions, and critical acclaim from
            the world&apos;s leading art institutions
          </p>
        </motion.div>

        {/* Exhibitions Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-10">Exhibitions & Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">🎨</div>
                  <span className="glass px-3 py-1 text-xs rounded-full text-neon-pulse">
                    {exhibition.year}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">{exhibition.title}</h4>
                <p className="text-sm text-neon-pulse mb-2">
                  📍 {exhibition.location}
                </p>
                <p className="text-sm text-white/60 mb-4">{exhibition.type}</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {exhibition.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Press Coverage */}
        <div>
          <h3 className="text-3xl font-bold mb-10">Press & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {press.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold mb-1">{article.publication}</h4>
                    <p className="text-sm text-white/60">{article.date}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      article.sentiment === 'rave'
                        ? 'bg-emerald-rave/20 text-emerald-rave'
                        : 'bg-crimson-critique/20 text-crimson-critique'
                    }`}
                  >
                    {article.sentiment === 'rave' ? '⭐ Rave' : '💭 Critique'}
                  </span>
                </div>
                <h5 className="text-xl font-semibold mb-3 text-neon-glow">
                  {article.title}
                </h5>
                <p className="text-white/70 italic leading-relaxed">
                  &quot;{article.excerpt}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Awards & Honors
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="text-xl font-bold mb-2">Digital Art Pioneer</h4>
              <p className="text-white/70 text-sm">NFT.NYC Awards 2023</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🎖️</div>
              <h4 className="text-xl font-bold mb-2">Innovation in Art</h4>
              <p className="text-white/70 text-sm">Web3 Creative Awards 2024</p>
            </div>
            <div>
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-xl font-bold mb-2">Top 10 Digital Artists</h4>
              <p className="text-white/70 text-sm">Artforum International 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
