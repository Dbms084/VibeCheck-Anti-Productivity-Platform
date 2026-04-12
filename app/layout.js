import { Caveat, Dancing_Script, Indie_Flower, Permanent_Marker, Homemade_Apple } from "next/font/google";
import "./globals.css";
import BackgroundCollage from "@/components/BackgroundCollage";

const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });
const dancingScript = Dancing_Script({ variable: "--font-dancing", subsets: ["latin"] });
const indieFlower = Indie_Flower({ variable: "--font-indie", weight: "400", subsets: ["latin"] });
const permanentMarker = Permanent_Marker({ variable: "--font-marker", weight: "400", subsets: ["latin"] });
const homemadeApple = Homemade_Apple({ variable: "--font-apple", weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "VibeCheck™ — Stop Working. Start Vibing.",
  description: "This platform is strictly prohibited for nerds. No logic allowed beyond this point.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${caveat.variable} ${dancingScript.variable} ${indieFlower.variable} ${permanentMarker.variable} ${homemadeApple.variable} overflow-x-hidden`}>
      <body suppressHydrationWarning className="min-h-screen overflow-x-hidden cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22 viewBox=%220 0 32 32%22><text x=%220%22 y=%2224%22 font-size=%2224%22>🌸</text></svg>'),_auto]">
        <BackgroundCollage />
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
