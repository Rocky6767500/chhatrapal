"use client";

import { motion } from "framer-motion";
import GLSLLab from "@/components/GLSLLab";

export default function LabPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-[#E94560] bg-clip-text text-transparent">
            GLSL Lab
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Experiment with fragment shaders in real-time. Create generative art through code.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GLSLLab />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-[#E94560]/20"
          >
            <h2 className="text-xl font-bold text-[#E94560] mb-3">About GLSL Shaders</h2>
            <p className="text-white/80 mb-4">
              GLSL (OpenGL Shading Language) allows you to program directly on the GPU, 
              creating incredibly efficient and beautiful visual effects. Each pixel is 
              computed in parallel, enabling real-time generative art.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong className="text-[#E94560]">Available Uniforms:</strong>
                <ul className="text-white/70 mt-2 space-y-1">
                  <li>• u_time (float)</li>
                  <li>• u_resolution (vec2)</li>
                  <li>• gl_FragCoord (vec4)</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#E94560]">Tips:</strong>
                <ul className="text-white/70 mt-2 space-y-1">
                  <li>• Use sin/cos for patterns</li>
                  <li>• length() for circles</li>
                  <li>• mix() for gradients</li>
                </ul>
              </div>
              <div>
                <strong className="text-[#E94560]">Output:</strong>
                <ul className="text-white/70 mt-2 space-y-1">
                  <li>• gl_FragColor (vec4)</li>
                  <li>• RGBA format (0.0-1.0)</li>
                  <li>• Alpha channel supported</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
