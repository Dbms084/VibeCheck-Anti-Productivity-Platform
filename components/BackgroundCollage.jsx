"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Curated Unsplash IDs for "Aesthetic", "Vintage", "Books"
const IMAGES = [
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  "https://images.unsplash.com/photo-1524578964724-c1042795ec56",
  "https://images.unsplash.com/photo-1455390582262-044cdead27d2",
  "https://images.unsplash.com/photo-1490604001847-b712b0c2f967",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function BackgroundCollage() {
  const [mounted, setMounted] = useState(false);
  const [collageLayers, setCollageLayers] = useState([]);

  useEffect(() => {
    // Generate chaos only on client to prevent hydration mismatch
    const layers = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      src: IMAGES[random(0, IMAGES.length - 1)],
      top: `${random(-10, 90)}%`,
      left: `${random(-10, 90)}%`,
      rotate: `${random(-25, 25)}deg`,
      zIndex: random(0, 5),
      opacity: random(30, 70) / 100, // 0.3 to 0.7
      scale: random(80, 150) / 100,
    }));
    setCollageLayers(layers);
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 bg-black z-0" />; // Fallback

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {collageLayers.map((layer) => (
        <div
          key={layer.id}
          className="absolute shadow-2xl mix-blend-screen"
          style={{
            top: layer.top,
            left: layer.left,
            transform: `rotate(${layer.rotate}) scale(${layer.scale})`,
            zIndex: layer.zIndex,
            opacity: layer.opacity,
            width: '300px',
            height: '400px',
          }}
        >
          {/* Using img tag to avoid next/image strict domains configuration for now */}
          <img
            src={layer.src}
            alt="Aesthetic book"
            className="w-full h-full object-cover grayscale opacity-80"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
    </div>
  );
}
