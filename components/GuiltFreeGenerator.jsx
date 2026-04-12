"use client";
import { useState } from "react";

const FONTS = [
  "font-[family-name:var(--font-caveat)]",
  "font-[family-name:var(--font-indie)]",
  "font-[family-name:var(--font-apple)]",
];

export default function GuiltFreeGenerator() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseFont, setResponseFont] = useState(FONTS[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/generate-vibe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.response);
        setResponseFont(FONTS[Math.floor(Math.random() * FONTS.length)]);
      } else {
        setResponse(data.error || "Too much logic right now. Try again.");
      }
    } catch (err) {
      setResponse("The vibes are off right now. Tell me your feelings later.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-16 bg-[#fdf5e6] text-[#333] p-8 shadow-[15px_15px_0_var(--color-neon-pink)] transform -rotate-2 relative z-20 pointer-events-auto border-l-8 border-blue-300 pointer-events-auto filter drop-shadow-2xl">
      {/* Lined paper effect background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #a3d2ca 31px, #a3d2ca 32px)",
          backgroundSize: "100% 32px",
          marginTop: "40px"
        }}
      />
      
      <h2 className="text-4xl font-[family-name:var(--font-marker)] text-blue-800 mb-6 relative">
        The Guilt-Free Generator 🌸
      </h2>
      
      <p className="font-[family-name:var(--font-comic)] mb-6 font-bold text-pink-600 relative">
        Talk to your anti-nerd life coach. Logic is banned here.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Dear Diary..."
          className="w-full h-32 bg-transparent border-none outline-none resize-none font-[family-name:var(--font-indie)] text-2xl placeholder-gray-500 text-blue-900"
          style={{ lineHeight: "32px", marginBottom: "-10px" }}
        />
        <div className="flex justify-end mt-4">
          <button 
            type="submit"
            disabled={loading}
            className="bg-pink-500 text-white px-6 py-2 rounded-full font-[family-name:var(--font-brush)] text-2xl hover:bg-pink-600 hover:scale-110 transition-transform shadow-md disabled:bg-gray-400"
          >
            {loading ? "Vibing..." : "Send Feelings"}
          </button>
        </div>
      </form>

      {response && (
        <div className={`mt-8 pt-6 border-t-2 border-dashed border-pink-300 relative z-10 ${responseFont} text-4xl leading-relaxed text-purple-800`}>
          "{response}"
        </div>
      )}
    </div>
  );
}
