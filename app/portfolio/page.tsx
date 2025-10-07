"use client";

import { motion } from "framer-motion";
import VoronoiGallery from "@/components/VoronoiGallery";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-[#E94560] bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-xl text-white/70 mb-12">
            Explore my AI-enhanced surrealist works through an interactive Voronoi visualization
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <VoronoiGallery />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-[#E94560]/20">
              <h2 className="text-2xl font-bold text-[#E94560] mb-4">AI Collaboration</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Each piece is created through a collaborative process with AI systems, 
                primarily using HuggingFace&apos;s Stable Diffusion models. The AI doesn&apos;t 
                replace artistic vision but amplifies it, allowing exploration of forms 
                and concepts that exist beyond traditional boundaries.
              </p>
              <p className="text-white/70 text-sm italic">
                &ldquo;The machine dreams, but I guide the dream.&rdquo; - Elara Voss
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-[#E94560]/20">
              <h2 className="text-2xl font-bold text-[#E94560] mb-4">Technical Process</h2>
              <ul className="text-white/80 space-y-2">
                <li>• Initial concept sketching & ideation</li>
                <li>• AI prompt engineering & iteration</li>
                <li>• GLSL shader post-processing</li>
                <li>• Manual digital painting refinement</li>
                <li>• NFT minting on Ethereum</li>
              </ul>
              <div className="mt-4 p-3 bg-[#E94560]/10 rounded text-sm text-white/70">
                <strong>Tech Stack:</strong> Stable Diffusion, GLSL, Blender, TouchDesigner
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
