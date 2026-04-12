"use client";
import { useState } from "react";

export default function DistractionDashboard() {
  const [vibePoints, setVibePoints] = useState(0);

  const handleClick = (e) => {
    // Add point, but let the link open
    setVibePoints(prev => prev + 1);
  };

  return (
    <div className="relative max-w-4xl mx-auto my-20 p-8 border-8 border-dashed border-[var(--color-vibe-purple)] bg-[var(--color-neon-pink)]/20 rotate-1 rounded-3xl pointer-events-auto">
      <h2 className="text-5xl font-[family-name:var(--font-brush)] text-[var(--color-lime-chaos)] mb-8 text-center drop-shadow-lg -rotate-3">
        The Distraction Dashboard
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <a 
          href="https://pinterest.com/search/pins/?q=aesthetic" 
          target="_blank" 
          rel="noreferrer"
          onClick={handleClick}
          className="bg-yellow-200 text-black p-4 font-[family-name:var(--font-apple)] text-2xl shadow-[5px_5px_0_#000] rotate-3 hover:rotate-6 transition-transform hover:scale-110"
        >
          Researching Aesthetics 📌
        </a>
        <a 
          href="https://www.amazon.com/s?k=self+help+books+aesthetic" 
          target="_blank" 
          rel="noreferrer"
          onClick={handleClick}
          className="bg-[var(--color-neon-pink)] text-white p-4 font-[family-name:var(--font-impact)] text-3xl shadow-[5px_5px_0_#000] -rotate-2 hover:-rotate-12 transition-transform hover:scale-110 border-4 border-black"
        >
          BUYING SELF HELP 📚
        </a>
        <a 
          href="https://www.reddit.com/r/Aesthetic/" 
          target="_blank" 
          rel="noreferrer"
          onClick={handleClick}
          className="bg-blue-400 text-white p-5 font-[family-name:var(--font-dancing)] text-4xl shadow-[8px_8px_0_var(--color-hot-pink)] rotate-6 hover:-rotate-2 transition-transform hover:scale-110 rounded-full"
        >
          Reading Threads 🧵
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer"
          onClick={handleClick}
          className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white p-4 font-[family-name:var(--font-marker)] text-2xl shadow-[5px_5px_0_#fff] -rotate-4 hover:rotate-12 transition-transform hover:scale-110"
        >
          Watching Lives 📱
        </a>
      </div>

      <div className="text-center bg-black/60 p-4 border border-[var(--color-lime-chaos)] max-w-xs mx-auto">
        <p className="text-lg font-[family-name:var(--font-courier)] text-white">Vibe Points Earned:</p>
        <p className="text-6xl font-[family-name:var(--font-comic)] text-[var(--color-vibe-purple)] glitter-text">
          {vibePoints}
        </p>
      </div>
    </div>
  );
}
