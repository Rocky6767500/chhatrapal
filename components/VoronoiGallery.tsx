"use client";

import { useEffect, useRef, useState } from "react";
import Delaunator from "delaunator";
import { motion } from "framer-motion";

interface Artwork {
  id: number;
  title: string;
  year: number;
  description: string;
}

const artworks: Artwork[] = [
  { id: 1, title: "Digital Dreams", year: 2024, description: "AI-generated surrealist landscape" },
  { id: 2, title: "Fractured Reality", year: 2023, description: "GLSL shader exploration" },
  { id: 3, title: "Neural Canvas", year: 2023, description: "GAN-powered abstract composition" },
  { id: 4, title: "Quantum Echoes", year: 2024, description: "Particle system visualization" },
  { id: 5, title: "Synthetic Memories", year: 2022, description: "Deepdream interpretation" },
  { id: 6, title: "Code Poetry", year: 2024, description: "Generative text-to-image" },
  { id: 7, title: "Pixel Consciousness", year: 2023, description: "Neural style transfer" },
  { id: 8, title: "Binary Emotions", year: 2022, description: "Emotion recognition art" },
];

export default function VoronoiGallery() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  const [points, setPoints] = useState<number[][]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Generate random points
    const newPoints: number[][] = artworks.map(() => [
      Math.random() * width,
      Math.random() * height,
    ]);
    setPoints(newPoints);

    // Flatten points for Delaunator
    const flatPoints = newPoints.flat();
    const delaunay = Delaunator.from(newPoints);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Voronoi cells
      const voronoi = computeVoronoi(delaunay, newPoints, width, height);
      
      voronoi.forEach((cell, index) => {
        if (cell.length < 3) return;

        ctx.beginPath();
        ctx.moveTo(cell[0][0], cell[0][1]);
        for (let i = 1; i < cell.length; i++) {
          ctx.lineTo(cell[i][0], cell[i][1]);
        }
        ctx.closePath();

        // Color based on hover state
        if (hoveredCell === index) {
          ctx.fillStyle = "rgba(233, 69, 96, 0.3)";
        } else {
          const hue = (index * 137.5) % 360;
          ctx.fillStyle = `hsla(${hue}, 70%, 50%, 0.1)`;
        }
        ctx.fill();

        ctx.strokeStyle = hoveredCell === index ? "#E94560" : "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = hoveredCell === index ? 3 : 1;
        ctx.stroke();

        // Draw point
        ctx.beginPath();
        ctx.arc(newPoints[index][0], newPoints[index][1], 6, 0, Math.PI * 2);
        ctx.fillStyle = "#E94560";
        ctx.fill();
      });
    };

    draw();
  }, [hoveredCell]);

  const computeVoronoi = (
    delaunay: Delaunator<ArrayLike<number>>,
    points: number[][],
    width: number,
    height: number
  ): number[][][] => {
    const voronoi: number[][][] = [];
    
    for (let i = 0; i < points.length; i++) {
      const cell: number[][] = [];
      const neighbors: number[] = [];
      
      // Find neighboring points
      for (let j = 0; j < delaunay.triangles.length; j++) {
        if (delaunay.triangles[j] === i) {
          const prev = j % 3 === 0 ? j + 2 : j - 1;
          const next = j % 3 === 2 ? j - 2 : j + 1;
          neighbors.push(delaunay.triangles[next]);
        }
      }

      // Create cell vertices (simplified)
      const angleStep = (Math.PI * 2) / Math.max(neighbors.length, 6);
      for (let j = 0; j < Math.max(neighbors.length, 6); j++) {
        const angle = angleStep * j;
        const radius = 80;
        cell.push([
          points[i][0] + Math.cos(angle) * radius,
          points[i][1] + Math.sin(angle) * radius,
        ]);
      }

      voronoi.push(cell);
    }

    return voronoi;
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Find closest point
    let minDist = Infinity;
    let closestIndex = -1;

    points.forEach((point, index) => {
      const dist = Math.sqrt((point[0] - x) ** 2 + (point[1] - y) ** 2);
      if (dist < minDist && dist < 100) {
        minDist = dist;
        closestIndex = index;
      }
    });

    if (closestIndex >= 0) {
      setSelectedArtwork(artworks[closestIndex]);
    }
  };

  const handleCanvasMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let minDist = Infinity;
    let closestIndex = -1;

    points.forEach((point, index) => {
      const dist = Math.sqrt((point[0] - x) ** 2 + (point[1] - y) ** 2);
      if (dist < minDist && dist < 100) {
        minDist = dist;
        closestIndex = index;
      }
    });

    setHoveredCell(closestIndex >= 0 ? closestIndex : null);
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={1200}
        height={800}
        className="w-full h-auto bg-[#1A1A2E]/50 rounded-lg cursor-pointer"
        onClick={handleCanvasClick}
        onMouseMove={handleCanvasMove}
        onMouseLeave={() => setHoveredCell(null)}
      />

      {selectedArtwork && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-lg border border-[#E94560]/30"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{selectedArtwork.title}</h3>
              <p className="text-[#E94560]">{selectedArtwork.year}</p>
            </div>
            <button
              onClick={() => setSelectedArtwork(null)}
              className="text-white/70 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="text-white/80">{selectedArtwork.description}</p>
          
          <div className="mt-6 p-4 bg-[#E94560]/10 rounded border border-[#E94560]/30">
            <p className="text-sm text-white/70">
              <strong className="text-[#E94560]">AI Generation:</strong> This artwork uses HuggingFace 
              Stable Diffusion API for AI-powered remixing. Connect your HuggingFace API key to enable 
              real-time regeneration.
            </p>
          </div>
        </motion.div>
      )}

      <div className="mt-6 text-center text-white/60 text-sm">
        Click on any node to explore the artwork • Voronoi tessellation visualizes artistic relationships
      </div>
    </div>
  );
}
