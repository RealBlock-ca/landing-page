'use client';

import { useEffect, useRef, useState } from "react";
import Condo from "@/public/images/condo.jpg";
import House from "@/public/images/house.webp";
import Retail from "@/public/images/retail.jpeg";

export default function ExampleBusiness() {
  const properties = [
    {
      id: 1,
      title: "Downtown Toronto Condo",
      image: Condo,
      price: "$540,000",
      roi: "Projected ROI: 7.2% APY",
      raised: 325000,
      goal: 540000,
      investors: 356,
    },
    {
      id: 2,
      title: "LA Family Unit",
      image: House,
      price: "$1.2M",
      roi: "Projected ROI: 8.1% APY",
      raised: 980000,
      goal: 1200000,
      investors: 924,
    },
    {
      id: 3,
      title: "Vancouver Retail Space",
      image: Retail,
      price: "$890,000",
      roi: "Projected ROI: 6.5% APY",
      raised: 610000,
      goal: 890000,
      investors: 753,
    },
  ];

  return (
    <div className="bg-[#e9d6ba] min-h-screen">
      {/* Banner */}
      <div className="bg-[#d02218] text-white text-center min-h-[400px] flex flex-col justify-end pb-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Invest in Real-World Properties</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore tokenized real estate offerings that generate steady, real-world yield—now accessible through crypto.
        </p>
      </div>

      {/* Property Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

function PropertyCard({ property }: { property: any }) {
  const progress = (property.raised / property.goal) * 100;
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedProgress(progress);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [progress]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 border border-gray-200"
    >
      <img
        src={property.image.src}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#d02218]">{property.title}</h3>
        <p className="text-gray-700 mt-1"><strong>Price:</strong> {property.price}</p>
        <p className="text-gray-600 text-sm mt-1">{property.roi}</p>
        <p className="text-gray-600 text-sm mt-1"><strong>Raised:</strong> ${property.raised.toLocaleString()}</p>
        <p className="text-gray-600 text-sm"><strong>Investors:</strong> {property.investors}</p>

        {/* Progress Bar */}
        <div className="mt-3">
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden relative">
          <div
            className="h-2 rounded-full transition-all duration-[1500ms] ease-out bg-[#d02218] relative"
            style={{
              width: `${animatedProgress}%`,
              position: 'relative',
            }}
          >
            <div
              className="absolute inset-0 rounded-full animate-[progressFlow_2.5s_linear_infinite]"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 75%, transparent 75%, transparent)',
                backgroundSize: '20px 20px',
                
              }}
            />
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">{animatedProgress.toFixed(1)}% funded</p>
      </div>

        <button className="mt-4 bg-[#d02218] text-white px-4 py-2 rounded hover:bg-[#b81c13] transition-colors w-full">
          Learn More
        </button>
      </div>
    </div>
  );
}
