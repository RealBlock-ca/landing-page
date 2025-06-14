'use client';

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/hero-home";
import CircleSection from "@/components/circle";
import ExampleBusiness from "@/components/example-business";
import WorkFlow from "@/components/works-flow";
import LargeTestimonial from "@/components/large-testimonial";
import AboutUs from "@/components/about-us";

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
      // Prevent scrolling when inside scrollable child (like modals or cards)
      if ((e.target as HTMLElement)?.closest('[data-scrollable="true"]')) return;

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

      setTimeout(() => {
        isScrolling.current = false;
      }, 700); // Adjust this duration to match animation speed
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
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
        <ExampleBusiness />
      </div>
      <div ref={sectionsRef[3]}>
        <WorkFlow />
      </div>
      <div ref={sectionsRef[4]}>
        <AboutUs/>
      </div>
      <div ref={sectionsRef[5]}>
        <LargeTestimonial />
      </div>
    </>
  );
}
