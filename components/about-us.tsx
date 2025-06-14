import Image from "next/image";
import Avatar01 from "@/public/images/avatar-01.jpg" 
import Avatar02 from "@/public/images/avatar-03.jpg" 
import Avatar03 from "@/public/images/avatar-02.jpg" 

import Logo01 from "@/public/images/logo-01.svg" 
import Logo02 from "@/public/images/logo-02.svg" 
import Logo03 from "@/public/images/logo-03.svg" 

export default function AboutUs() {
  const team = [
    {
      name: "Mika Q.",
      role: "Founder & CEO",
      img: Avatar01.src,
      desc: "Web3 visionary leading Real Block with clarity and purpose.",
    },
    {
      name: "Alex T.",
      role: "Blockchain Engineer",
      img: Avatar02.src,
      desc: "Building bridges between code and real-world assets.",
    },
    {
      name: "Sophia L.",
      role: "Product Designer",
      img: Avatar03.src,
      desc: "Designing seamless DeFi experiences that users love.",
    },
  ];

  const partners = [
    { name: "Polygon", logo: Logo01.src },
    { name: "Chainlink", logo: Logo02.src },
    { name: "Circle", logo: Logo03.src },
  ];

  return (
    <>
      {/* Team Section */}
     <section className="w-full bg-[#e9d6ba] px-4 py-20 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#d02218] mb-6">Our Team</h2>
          <p className="text-lg text-[#7a1c13] mb-12">
            Crypto-native builders reshaping real-world asset finance 🌍
          </p>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md border border-[#d02218] p-6 rounded-xl shadow-md text-center"
              >
                <div className="mb-4">
                  <Image
                    src={member.img}
                    alt="Partner"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#d02218]">{member.name}</h4>
                <p className="text-sm text-[#b81c13]">{member.role}</p>
                <p className="mt-2 text-sm text-gray-700">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full h-full bg-[#fff5e6] px-4 py-33">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#d02218] mb-6">Our Partners</h2>
          <p className="text-lg text-[#7a1c13] mb-12">
            We collaborate with the best in Web3 to deliver trust, transparency & scale 
          </p>

          <div className="flex flex-wrap justify-center gap-10 items-center">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="w-40 h-20 flex items-center justify-center bg-white/60 border border-[#d02218] rounded-xl shadow-sm p-2"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={40}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
