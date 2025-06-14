'use client';

import Image from "next/image";
import BannerBg from "@/public/images/BannerBg.png";

type HeroProps = {
  onScrollClick?: () => void;
};

export default function HeroHome({ onScrollClick }: HeroProps) {
  return (
    <section className="relative w-full h-screen">
      <Image
        className="w-full h-screen"
        src={BannerBg}
        alt="Avatar 01"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-2">
        <h1
          className="text-white text-9xl -translate-x-13.5 font-extrabold opacity-0 animate-[ascend_1.5s_ease-out_0.3s_forwards]"
          style={{
            letterSpacing: '0.05em',
            textShadow: '4px 4px 10px rgba(0, 0, 0, 0.45)', // shadow cast bottom-right
          }}
        >
          REAL
        </h1>
        <h1
          className="text-white text-9xl font-extrabold opacity-0 animate-[ascend_1.5s_ease-out_0.3s_forwards]"
          style={{
            letterSpacing: '0.05em',
            textShadow: '4px 4px 10px rgba(0, 0, 0, 0.45)', // same shadow direction
          }}
        >
          BLOCK
        </h1>
        <h2
          className="text-white text-2xl translate-x-13.5 font-extrabold opacity-0 animate-[ascend_1.5s_ease-out_0.3s_forwards]"
          style={{
            letterSpacing: '0.03em',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
          }}
        >
          Bringing Your Crypto into the Real World
        </h2>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-[bounceDown_2s_infinite_ease-in-out] animate-[ascend_1.5s_ease-out_0.6s_forwards]">
        <button
          onClick={onScrollClick}
          className="text-white text-2xl hover:opacity-80 transition-opacity"
        >
          ↓ Scroll Down
        </button>
      </div>
    </section>
  );
}
