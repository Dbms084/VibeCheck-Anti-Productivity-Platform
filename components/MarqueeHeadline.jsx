"use client";

export default function MarqueeHeadline() {
  return (
    <div className="w-full bg-[var(--color-neon-pink)] border-y-8 border-[var(--color-lime-chaos)] overflow-hidden pointer-events-auto py-2 my-10 rot-1 transform scale-105">
      <marquee scrollamount="15" className="flex items-center">
        <span className="text-7xl font-[family-name:var(--font-brush)] text-black mix-blend-color-burn whitespace-nowrap ml-10">
          Stop Working. Start Vibing. ✨ Stop Working. Start Vibing. ✨ Stop Working. Start Vibing. ✨
        </span>
      </marquee>
      <marquee scrollamount="20" direction="right" className="flex items-center mt-2 bg-black">
        <span className="text-3xl font-[family-name:var(--font-comic)] text-[var(--color-lime-chaos)] whitespace-nowrap mr-10 uppercase tracking-widest">
          This platform is strictly prohibited for nerds! No logic allowed beyond this point. ⚠️
        </span>
      </marquee>
    </div>
  );
}
