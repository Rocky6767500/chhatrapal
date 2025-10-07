'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const socialLinks = [
  { name: 'Twitter', icon: '𝕏', url: '#', color: '#1DA1F2' },
  { name: 'Instagram', icon: '📷', url: '#', color: '#E1306C' },
  { name: 'Discord', icon: '💬', url: '#', color: '#5865F2' },
  { name: 'OpenSea', icon: '🌊', url: '#', color: '#2081E2' },
]

const testimonials = [
  {
    id: 1,
    name: 'Marcus Chen',
    role: 'Collector',
    content: 'Elara\'s work transcends the digital realm. Each piece tells a story that evolves with time.',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Art Critic',
    content: 'A visionary who understands that the future of art is decentralized and democratized.',
    avatar: '👩‍🎨',
  },
  {
    id: 3,
    name: 'David Park',
    role: 'Gallery Owner',
    content: 'Working with Elara has been transformative. Her pieces consistently sell out within hours.',
    avatar: '🎭',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-32 px-6 bg-void-navy">
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
              Symbiosis Hub
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Let&apos;s create something extraordinary together. Connect, collaborate,
            and collect art that lives on the blockchain
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-void-deep/50 border border-white/10 rounded-lg focus:outline-none focus:border-neon-pulse transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-void-deep/50 border border-white/10 rounded-lg focus:outline-none focus:border-neon-pulse transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-void-deep/50 border border-white/10 rounded-lg focus:outline-none focus:border-neon-pulse transition-colors resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  isSubmitting
                    ? 'bg-white/10 text-white/50 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-emerald-rave text-white'
                    : 'bg-neon-pulse text-white glow-effect'
                }`}
              >
                {isSubmitting
                  ? 'Sending...'
                  : submitStatus === 'success'
                  ? '✓ Message Sent!'
                  : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Web3 Integration & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Web3 Connection */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Connect Wallet</h3>
              <p className="text-white/70 mb-6">
                Connect your Web3 wallet to access exclusive content and collector benefits
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-neon-pulse to-neon-glow rounded-full font-semibold glow-effect flex items-center justify-center space-x-2"
              >
                <span>🦊</span>
                <span>Connect MetaMask</span>
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Follow the Journey</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-4 rounded-xl text-center hover:bg-white/10 transition-colors"
                  >
                    <div className="text-3xl mb-2">{social.icon}</div>
                    <div className="text-sm font-semibold">{social.name}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/70 mb-4 text-sm">
                Get notified about new drops, exhibitions, and exclusive releases
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-void-deep/50 border border-white/10 rounded-lg focus:outline-none focus:border-neon-pulse"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-neon-pulse rounded-lg font-semibold"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center">
            Collector Voices
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <p className="text-white/80 italic mb-4 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-neon-pulse">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-white/60 mb-4">
            © 2024 Elara Voss. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Built with Next.js, Three.js, and Web3 technologies
          </p>
        </motion.div>
      </div>
    </section>
  )
}
