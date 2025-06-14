'use client';

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/hero-home";
import CircleSection from "@/components/circle";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  // Section refs
  const sectionsRef = [
    useRef<HTMLDivElement>(null), // Hero
    useRef<HTMLDivElement>(null), // Circle
    useRef<HTMLDivElement>(null), // Business
    useRef<HTMLDivElement>(null), // Features
    useRef<HTMLDivElement>(null), // Testimonial
    useRef<HTMLDivElement>(null), // CTA
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        sectionsRef.length - 1
      );

      if (nextIndex !== currentIndex) {
        setCurrentIndex(nextIndex);
        sectionsRef[nextIndex].current?.scrollIntoView({ behavior: "smooth" });
      }

      // Delay to prevent too rapid scrolling
      setTimeout(() => {
        isScrolling.current = false;
      }, 700); // adjust delay as needed
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex]);

  return (
    <>
      <div ref={sectionsRef[0]}>
        <Hero onScrollClick={() => sectionsRef[1].current?.scrollIntoView({ behavior: "smooth" })} />
      </div>
      <div ref={sectionsRef[1]}>
        <CircleSection />
      </div>
      <div ref={sectionsRef[2]}>
        <BusinessCategories />
      </div>
      <div ref={sectionsRef[3]}>
        <FeaturesPlanet />
      </div>
      <div ref={sectionsRef[4]}>
        <LargeTestimonial />
      </div>
      <div ref={sectionsRef[5]}>
        <Cta />
      </div>
    </>
  );
}
