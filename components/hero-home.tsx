import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import BannerBg from "@/public/images/BannerBg.png";

export default function HeroHome() {
  return (
    <section className="relative">
      <Image
          className="w-full h-screen"
          src={BannerBg}
          alt="Avatar 01"
        />

      {/* Centered Two-Line Animated Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-2">
        <h1
          className="text-white text-9xl -translate-x-30 font-extrabold opacity-0 animate-[ascend_1.5s_ease-out_0.3s_forwards]"
          style={{ letterSpacing: '0.1em' }}
        >
          REAL
        </h1>
        <h1
          className="text-white text-9xl font-extrabold opacity-0 animate-[ascend_1.5s_ease-out_0.3s_forwards]"
          style={{ letterSpacing: '0.1em' }}
        >
          BLOCK
        </h1>
      </div>

       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-[bounceDown_2s_infinite_ease-in-out] animate-[ascend_1.5s_ease-out_0.6s_forwards]">
        <button
          // onClick={() => {
          //   const next = document.getElementById('next-section');
          //   next?.scrollIntoView({ behavior: 'smooth' });
          // }}
          className="text-white text-2xl hover:opacity-80 transition-opacity"
        >
          ↓ Scroll Down
        </button>
      </div>
     
    </section>
  );
}
