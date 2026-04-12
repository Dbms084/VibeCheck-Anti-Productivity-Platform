"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NerdGate() {
  const [isOpen, setIsOpen] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("nerd-check-passed")) {
      setIsOpen(false);
    }
  }, []);

  const handleVibes = () => {
    sessionStorage.setItem("nerd-check-passed", "true");
    setIsOpen(false);
  };

  const handleCode = () => {
    setErrorMsg("Access Denied. Too much logic detected. Please go touch grass.");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-white text-black p-8 max-w-lg w-full text-center shadow-[0_0_50px_var(--color-neon-pink)] animate-[wiggle_2s_infinite]">
          <h1 className="text-5xl font-[family-name:var(--font-impact)] text-[var(--color-neon-pink)] animate-pulse mb-6">
            ⚠️ NERDS PROHIBITED ⚠️
          </h1>
          <p className="text-2xl font-[family-name:var(--font-comic)] mb-8">
            Stop right there. Are you here to be productive?
          </p>
          
          <div className="flex flex-col gap-6">
            <button 
              onClick={handleVibes}
              className="py-4 px-6 text-3xl font-[family-name:var(--font-dancing)] bg-[var(--color-lime-chaos)] rounded-full hover:scale-110 transition-transform cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 32 32%22><text x=%220%22 y=%2224%22 font-size=%2224%22>✨</text></svg>'),_auto]"
            >
              I love vibes ✨
            </button>
            <button 
              onClick={handleCode}
              className="py-2 px-4 text-sm font-[family-name:var(--font-courier)] bg-gray-300 rounded hover:bg-red-500 hover:text-white transition-colors border-2 border-dashed border-gray-500"
            >
              I like code 🤓
            </button>
          </div>

          {errorMsg && (
            <motion.div 
              className="mt-6 text-xl text-red-600 font-[family-name:var(--font-marker)] border-4 border-red-600 p-4 rot-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {errorMsg}
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
