'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import Three.js scene to avoid SSR issues
const WebGLScene = dynamic(() => import('./WebGLScene'), { ssr: false })

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* WebGL Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-void-navy" />}>
        <WebGLScene />
      </Suspense>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl"
        >
          {/* Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="bg-gradient-to-r from-white via-neon-glow to-neon-pulse bg-clip-text text-transparent">
              Art as Living Code
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Elara Voss · Visionary Digital Artist
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            className="text-lg md:text-xl italic text-neon-pulse mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            &quot;In the code of chaos, I paint eternity&quot;
          </motion.blockquote>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToNext}
            className="group relative px-8 py-4 text-lg font-semibold overflow-hidden rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pulse to-neon-glow opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pulse to-neon-glow blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            
            {/* Button Text */}
            <span className="relative z-10 flex items-center space-x-2">
              <span>Enter the Void</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-neon-pulse rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
