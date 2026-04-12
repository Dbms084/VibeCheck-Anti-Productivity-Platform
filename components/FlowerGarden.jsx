"use client";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlowerGarden({ flowerCount }) {
  const [mounted, setMounted] = useState(false);
  
  // Randomize positions on mount/change, but safely for SSR.
  const flowers = useMemo(() => {
    return Array.from({ length: flowerCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      scale: Math.random() * 1.5 + 1, // Size from 1 to 2.5
      rotate: Math.random() * 360,
    }));
  }, [flowerCount]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-sm h-64 bg-[#3E2723] border-[12px] border-[#5D4037] rounded-3xl mx-auto shadow-[0_10px_0_#4E342E] overflow-hidden flex items-center justify-center mt-8 rot-1 pointer-events-auto group">
      {/* Dirt Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#1a110a_4px,transparent_4px)] [background-size:24px_24px]" />
      
      {flowerCount === 0 && (
        <p className="text-[#a1887f] font-[family-name:var(--font-caveat)] text-3xl z-10 p-4 text-center">
          Planting procrastination... wait for it.
        </p>
      )}

      <AnimatePresence>
        {flowers.map((f) => (
          <motion.div
            key={f.id}
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: f.scale, opacity: 1, y: 0, rotate: f.rotate }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute text-5xl origin-bottom"
            style={{ left: f.left, top: f.top }}
          >
            🌸
          </motion.div>
        ))}
      </AnimatePresence>

      <a 
        href="/api/brew" 
        target="_blank"
        className="absolute bottom-2 right-2 text-xl opacity-0 group-hover:opacity-40 hover:opacity-100 transition-opacity z-20"
        title="HTCPCP Easter Egg"
      >
        ☕
      </a>
    </div>
  );
}
