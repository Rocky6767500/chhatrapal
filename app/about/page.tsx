"use client";

import { motion } from "framer-motion";
import D3Timeline from "@/components/D3Timeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-[#E94560] bg-clip-text text-transparent">
            About Elara Voss
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#E94560]">The Artist</h2>
              <p className="text-white/80 leading-relaxed">
                Elara Voss is a pioneering digital surrealist whose work exists at the 
                intersection of human creativity and artificial intelligence. Through her 
                innovative use of generative algorithms, GLSL shaders, and Web3 technologies, 
                she creates immersive experiences that challenge our perception of reality.
              </p>
              <p className="text-white/80 leading-relaxed">
                Drawing inspiration from the surrealist masters while embracing cutting-edge 
                technology, Elara&apos;s work explores themes of consciousness, digital identity, 
                and the evolving relationship between humans and machines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#E94560]">Philosophy</h2>
              <p className="text-white/80 leading-relaxed">
                &ldquo;Art is not about perfection, but about exploration. In the liminal space 
                between the programmed and the spontaneous, between the digital and the 
                organic, we find new forms of beauty that could never exist otherwise.&rdquo;
              </p>
              <p className="text-white/80 leading-relaxed">
                Her practice involves collaborative relationships with AI systems, treating 
                them as creative partners rather than mere tools. This philosophy has 
                positioned her as a leading voice in the discourse around AI-generated art 
                and its place in contemporary culture.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              Artistic Journey
            </h2>
            <D3Timeline />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-[#E94560]/20">
              <h3 className="text-xl font-bold text-[#E94560] mb-3">Exhibitions</h3>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Venice Biennale (2023)</li>
                <li>• Art Basel Miami (2022)</li>
                <li>• Tate Modern, London (2021)</li>
                <li>• MoMA PS1, NYC (2020)</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-[#E94560]/20">
              <h3 className="text-xl font-bold text-[#E94560] mb-3">Awards</h3>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Ars Electronica Prix (2023)</li>
                <li>• Digital Arts Award (2022)</li>
                <li>• NFT Art Prize (2021)</li>
                <li>• Emerging Artist Grant (2019)</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-[#E94560]/20">
              <h3 className="text-xl font-bold text-[#E94560] mb-3">Collections</h3>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>• Guggenheim Museum</li>
                <li>• V&A Museum</li>
                <li>• Centre Pompidou</li>
                <li>• Private Collections</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
