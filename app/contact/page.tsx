"use client";

import { motion } from "framer-motion";
import Web3Contact from "@/components/Web3Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-[#E94560] bg-clip-text text-transparent">
            Contact & Shop
          </h1>
          <p className="text-xl text-white/70 mb-12">
            Connect your Web3 wallet to access exclusive NFTs and collaboration opportunities
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Web3Contact />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
