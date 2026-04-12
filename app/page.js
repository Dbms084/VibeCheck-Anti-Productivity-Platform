"use client";
import { useState, useCallback } from "react";
import NerdGate from "@/components/NerdGate";
import InfinityPomodoro from "@/components/InfinityPomodoro";
import FlowerGarden from "@/components/FlowerGarden";
import DistractionDashboard from "@/components/DistractionDashboard";
import GuiltFreeGenerator from "@/components/GuiltFreeGenerator";
import MarqueeHeadline from "@/components/MarqueeHeadline";

export default function Home() {
  const [flowerCount, setFlowerCount] = useState(0);

  const addFlower = useCallback(() => {
    setFlowerCount((prev) => prev + 1);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden pb-32 cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 32 32%22><text x=%220%22 y=%2224%22 font-size=%2224%22>🌸</text></svg>'),_auto]">
      <NerdGate />
      
      <div className="relative z-20 flex flex-col items-center">
        <MarqueeHeadline />
        
        <div className="flex flex-col lg:flex-row justify-around w-full max-w-7xl px-4 mt-8 gap-12">
          {/* Pomodoro */}
          <div className="w-full lg:w-1/3 z-30 flex flex-col gap-4">
            <InfinityPomodoro onFlowerGrow={addFlower} />
            <FlowerGarden flowerCount={flowerCount} />
          </div>
          
          {/* AI Diary */}
          <div className="w-full lg:w-2/3 z-30">
            <GuiltFreeGenerator />
          </div>
        </div>

        {/* Dashboard */}
        <div className="w-full px-4 mt-16 z-30">
          <DistractionDashboard />
        </div>
      </div>

    </div>
  );
}
