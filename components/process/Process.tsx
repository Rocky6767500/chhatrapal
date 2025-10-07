'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Conceptual Spark',
    description: 'Every piece begins with an idea - a question about reality, consciousness, or the nature of creation itself',
    icon: '💡',
  },
  {
    id: 2,
    title: 'AI Collaboration',
    description: 'Using cutting-edge generative AI models to explore infinite variations and possibilities',
    icon: '🤖',
  },
  {
    id: 3,
    title: 'Digital Sculpting',
    description: 'Refining the AI output through iterative editing, adding layers of meaning and complexity',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Blockchain Minting',
    description: 'Immortalizing the artwork on the blockchain, creating verifiable digital ownership',
    icon: '⛓️',
  },
  {
    id: 5,
    title: 'Community Release',
    description: 'Sharing with collectors and art enthusiasts, allowing the work to take on new life',
    icon: '🌍',
  },
]

const tools = [
  { name: 'Stable Diffusion', category: 'AI Generation' },
  { name: 'Midjourney', category: 'AI Generation' },
  { name: 'Three.js', category: 'WebGL' },
  { name: 'Blender', category: '3D Modeling' },
  { name: 'TouchDesigner', category: 'Generative' },
  { name: 'Ethereum', category: 'Blockchain' },
  { name: 'Polygon', category: 'Blockchain' },
  { name: 'IPFS', category: 'Storage' },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="relative py-32 px-6 bg-void-navy">
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
              Genesis Lab
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A glimpse into the creative process where technology meets imagination,
            and algorithms dance with artistic vision
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-5 gap-4 mb-8">
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-xl transition-all ${
                  activeStep === index
                    ? 'bg-neon-pulse text-white glow-effect'
                    : 'glass text-white/70 hover:text-white'
                }`}
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="text-sm font-semibold">Step {step.id}</div>
              </motion.button>
            ))}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass p-8 md:p-12 rounded-2xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-6xl">{steps[activeStep].icon}</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{steps[activeStep].title}</h3>
                <p className="text-neon-pulse">Step {steps[activeStep].id} of {steps.length}</p>
              </div>
            </div>
            <p className="text-xl text-white/80 leading-relaxed">
              {steps[activeStep].description}
            </p>

            {/* Navigation */}
            <div className="flex space-x-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className={`px-6 py-3 rounded-full font-semibold ${
                  activeStep === 0
                    ? 'glass text-white/30 cursor-not-allowed'
                    : 'glass text-white hover:bg-white/10'
                }`}
              >
                ← Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className={`px-6 py-3 rounded-full font-semibold ${
                  activeStep === steps.length - 1
                    ? 'glass text-white/30 cursor-not-allowed'
                    : 'bg-neon-pulse text-white glow-effect'
                }`}
              >
                Next →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Tools & Technology */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass p-6 rounded-xl text-center"
              >
                <h4 className="font-semibold mb-1">{tool.name}</h4>
                <p className="text-sm text-neon-pulse">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Creative Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 glass p-8 md:p-12 rounded-2xl text-center"
        >
          <blockquote className="text-2xl md:text-3xl italic text-white/90 mb-6">
            &quot;Technology is not the enemy of art - it&apos;s a new canvas.
            Each algorithm, each line of code, is a brushstroke in the infinite
            digital landscape.&quot;
          </blockquote>
          <cite className="text-neon-pulse text-lg">— Elara Voss</cite>
        </motion.div>
      </div>
    </section>
  )
}
