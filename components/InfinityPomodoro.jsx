"use client";
import { useState, useEffect } from "react";

export default function InfinityPomodoro({ onFlowerGrow }) {
  // Start at 24:50 to quickly see the effect, or 25:00. Let's make it 25:00.
  // Actually, for demo purposes, 25 minutes is too long to wait. 
  // Let's start the timer at 5 seconds until "00:00" and then go directly to overtime counting UP.
  const [timeLeft, setTimeLeft] = useState(5); 
  const [isOvertime, setIsOvertime] = useState(false);
  const [overtimeSecs, setOvertimeSecs] = useState(0);
  const [lastSpawnSec, setLastSpawnSec] = useState(-1);

  useEffect(() => {
    let timer;
    if (!isOvertime) {
      if (timeLeft > 0) {
        timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      } else {
        setIsOvertime(true);
        onFlowerGrow(); // First initial flower for breaking the rules
        setLastSpawnSec(0);
      }
    } else {
      timer = setInterval(() => {
        setOvertimeSecs(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isOvertime, onFlowerGrow]);

  useEffect(() => {
    // 15 minutes = 900 seconds. Grow a flower exactly every 15 real minutes in overtime.
    if (isOvertime && overtimeSecs > 0 && overtimeSecs % 900 === 0 && overtimeSecs !== lastSpawnSec) {
      onFlowerGrow();
      setLastSpawnSec(overtimeSecs);
    }
  }, [overtimeSecs, isOvertime, onFlowerGrow, lastSpawnSec]);



  const formatTime = () => {
    if (!isOvertime) {
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    } else {
      const m = Math.floor(overtimeSecs / 60);
      const s = overtimeSecs % 60;
      return `+${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
  };

  return (
    <div className="bg-black/50 p-6 border-4 border-[var(--color-lime-chaos)] transform rot-3 shadow-[10px_10px_0_var(--color-hot-pink)] max-w-sm mx-auto my-12 text-center pointer-events-auto">
      <h2 className="text-3xl font-[family-name:var(--font-comic)] text-[var(--color-hot-pink)] mb-4">
        Vibe Session...
      </h2>
      <div className="text-6xl font-[family-name:var(--font-courier)] glitter-text animate-[shimmer_2s_linear_infinite] mb-2 tracking-widest bg-gray-900 p-4 rounded-xl shadow-inner border border-gray-600">
        {formatTime()}
      </div>
      <p className="text-xl font-[family-name:var(--font-caveat)] text-yellow-300 transform -rotate-2">
        (Do Not Stop)
      </p>
      {isOvertime && (
        <p className="mt-4 text-white font-[family-name:var(--font-marker)] text-xl animate-pulse text-red-400">
          MAXIMUM VIBING ACHIEVED ✨ Wait 15 minutes for your next flower!
        </p>
      )}
    </div>
  );
}
