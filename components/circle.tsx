'use client';

import { useState } from 'react';

export default function CircleSection() {

  type CardPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  const [activeCard, setActiveCard] = useState<CardPosition>('top-left');


  const contentMap: Record<CardPosition, { title: string; description: string }> = {
    'top-left': {
        title: 'Web3 Asset Gateway',
        description: 'Real Block is a decentralized platform that turns cryptocurrency into ownership of real-world assets like real estate.'
    },
    'top-right': {
        title: 'Wallet-to-Asset',
        description: 'Users connect crypto wallets, select verified assets, and invest directly; smart contracts handle secure ownership and returns.',
    },
    'bottom-left': {
        title: 'Transparent & Borderless',
        description: 'Real Block offers global access, liquidity, and trustless transactions—bridging crypto and real assets without middlemen.',
    },
    'bottom-right': {
        title: 'User-Centric Future',
        description: 'Our goal is to give crypto holders real economic power—not just speculation—through accessible, secure investing.',
    },
   };

  const baseCardStyle = `
    w-70 p-7 bg-white text-[#d02218] rounded-xl shadow-xl cursor-pointer
    transition-all duration-500 ease-in-out transform
  `;

  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#e9d6ba] relative ">
      {/* Central Circle */}
      <div className="w-[600px] h-[600px] rounded-full border-8 border-[#d02218] absolute z-0 animate-pulse" />

      {/* Inner Square Content */}
        <div className="w-[360px] h-[360px] bg-white text-[#d02218] p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center z-10 transition-all duration-500 ease-in-out">
        <h3 className="text-xl font-bold mb-2">{contentMap[activeCard].title}</h3>
        <p className="text-left">{contentMap[activeCard].description}</p>
        <button className="mt-6 px-4 py-2 bg-[#d02218] text-white rounded hover:bg-[#b81c13] transition-colors duration-300">
            Learn More
        </button>
        </div>


      {/* Top Left Card */}
      <div
        onClick={() => setActiveCard('top-left')}
        className={`
          ${baseCardStyle} absolute top-[15%] left-[15%]
          ${activeCard === 'top-left' ? 'border-[5px] border-[#d02218] scale-105' : 'border border-transparent'}
        `}
      >
        <h3 className="text-lg font-bold mb-2">What is Real Block</h3>
        <p className="text-sm">We are bridging crypto with tangible assets in the real world.</p>
      </div>
      {activeCard === 'top-left' && (
        <div className="absolute top-[28%] left-[29.3%] w-[320px] h-[4px] bg-[#d02218] rotate-[45deg] origin-left transition-all duration-500 z-0" />
      )}

      {/* Top Right Card */}
      <div
        onClick={() => setActiveCard('top-right')}
        className={`
          ${baseCardStyle} absolute top-[15%] right-[15%]
          ${activeCard === 'top-right' ? 'border-[5px] border-[#d02218] scale-105' : 'border border-transparent'}
        `}
      >
        <h3 className="text-lg font-bold mb-2">How It Works</h3>
        <p className="text-sm">Stake your crypto. Receive interest from real-world assets.</p>
      </div>
      {activeCard === 'top-right' && (
        <div className="absolute top-[28%] right-[29.3%] w-[320px] h-[4px] bg-[#d02218] -rotate-[45deg] origin-right transition-all duration-500 z-0" />
      )}

      {/* Bottom Left Card */}
      <div
        onClick={() => setActiveCard('bottom-left')}
        className={`
          ${baseCardStyle} absolute bottom-[15%] left-[15%]
          ${activeCard === 'bottom-left' ? 'border-[5px] border-[#d02218] scale-105' : 'border border-transparent'}
        `}
      >
        <h3 className="text-lg font-bold mb-2">Why Real Block</h3>
        <p className="text-sm">Empowering users with real-world returns from crypto.</p>
      </div>
      {activeCard === 'bottom-left' && (
        <div className="absolute bottom-[28%] left-[29.3%] w-[320px] h-[4px] bg-[#d02218] -rotate-[45deg] origin-left transition-all duration-500 z-0" />
      )}

      {/* Bottom Right Card */}
      <div
        onClick={() => setActiveCard('bottom-right')}
        className={`
          ${baseCardStyle} absolute bottom-[15%] right-[15%]
          ${activeCard === 'bottom-right' ? 'border-[5px] border-[#d02218] scale-105' : 'border border-transparent'}
        `}
      >
        <h3 className="text-lg font-bold mb-2">Our Vision</h3>
        <p className="text-sm">We’re moving ownership from paperwork to protocol.</p>
      </div>
      {activeCard === 'bottom-right' && (
        <div className="absolute bottom-[28%] right-[29.3%] w-[320px] h-[4px] bg-[#d02218] rotate-[45deg] origin-right transition-all duration-500 z-0" />
      )}
    </section>
  );
}
