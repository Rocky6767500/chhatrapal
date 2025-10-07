"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useWeb3 } from "@/lib/hooks/useWeb3";

interface NFT {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

const nfts: NFT[] = [
  {
    id: 1,
    name: "Digital Dreams #001",
    price: "0.5",
    description: "Limited edition AI-generated surrealist piece",
    image: "🎨",
  },
  {
    id: 2,
    name: "Quantum Echo #042",
    price: "0.8",
    description: "Part of the Quantum series exploring consciousness",
    image: "🌌",
  },
  {
    id: 3,
    name: "Neural Canvas #013",
    price: "1.2",
    description: "Generative artwork from the Neural Canvas collection",
    image: "🧠",
  },
];

export default function Web3Contact() {
  const { account, balance, isConnecting, error, connectWallet, disconnectWallet } = useWeb3();
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [purchaseStatus, setPurchaseStatus] = useState<string | null>(null);

  const handlePurchase = async (nft: NFT) => {
    if (!account) {
      setPurchaseStatus("Please connect your wallet first");
      return;
    }

    setPurchaseStatus(`Processing purchase of ${nft.name}...`);
    
    // Simulate transaction
    setTimeout(() => {
      setPurchaseStatus(`✅ Successfully purchased ${nft.name}!`);
      setTimeout(() => setPurchaseStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Wallet Connection */}
      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-[#E94560]/20">
        <h2 className="text-2xl font-bold text-white mb-4">Web3 Wallet</h2>
        
        {!account ? (
          <div>
            <p className="text-white/70 mb-4">
              Connect your Web3 wallet to access exclusive content and purchase NFTs
            </p>
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="px-6 py-3 bg-[#E94560] text-white rounded-lg hover:bg-[#ff5577] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {isConnecting ? "Connecting..." : "🦊 Connect MetaMask"}
            </button>
            {error && (
              <p className="mt-3 text-red-400 text-sm">{error}</p>
            )}
          </div>
        ) : (
          <div>
            <div className="space-y-2 mb-4">
              <p className="text-white/70">
                <strong className="text-[#E94560]">Address:</strong>{" "}
                {account.slice(0, 6)}...{account.slice(-4)}
              </p>
              <p className="text-white/70">
                <strong className="text-[#E94560]">Balance:</strong>{" "}
                {balance ? `${parseFloat(balance).toFixed(4)} ETH` : "Loading..."}
              </p>
            </div>
            <button
              onClick={disconnectWallet}
              className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition-colors text-sm"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>

      {/* NFT Shop */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Exclusive NFT Collection</h2>
        
        {purchaseStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-[#E94560]/20 border border-[#E94560]/50 rounded-lg text-white"
          >
            {purchaseStatus}
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {nfts.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-[#E94560]/50 transition-colors"
            >
              <div className="aspect-square bg-gradient-to-br from-[#1A1A2E] to-[#E94560]/30 flex items-center justify-center text-8xl">
                {nft.image}
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{nft.name}</h3>
                <p className="text-white/60 text-sm mb-4">{nft.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#E94560] font-bold text-lg">
                    {nft.price} ETH
                  </span>
                  <button
                    onClick={() => handlePurchase(nft)}
                    disabled={!account}
                    className="px-4 py-2 bg-[#E94560] text-white rounded hover:bg-[#ff5577] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-[#E94560]/20">
        <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#E94560] font-semibold mb-2">Commission Work</h3>
            <p className="text-white/70 text-sm mb-2">
              Interested in commissioning a custom AI-generated artwork? 
              Connect your wallet and reach out through our Web3 contact form.
            </p>
          </div>
          <div>
            <h3 className="text-[#E94560] font-semibold mb-2">Collaborations</h3>
            <p className="text-white/70 text-sm mb-2">
              Open to collaborations with galleries, tech companies, and fellow artists. 
              Web3 verification required for partnership inquiries.
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#"
            className="flex items-center gap-2 text-white/70 hover:text-[#E94560] transition-colors"
          >
            <span>🐦</span> Twitter
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-white/70 hover:text-[#E94560] transition-colors"
          >
            <span>📷</span> Instagram
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-white/70 hover:text-[#E94560] transition-colors"
          >
            <span>💼</span> OpenSea
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-white/70 hover:text-[#E94560] transition-colors"
          >
            <span>🎨</span> Foundation
          </a>
        </div>
      </div>
    </div>
  );
}
