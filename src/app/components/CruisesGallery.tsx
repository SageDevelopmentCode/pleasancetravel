"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { CruiseLine } from "../data/cruises";

interface CruisesGalleryProps {
  cruiseLines: CruiseLine[];
  activeCruiseLine: CruiseLine;
  onSelectCruiseLine: (cruiseLine: CruiseLine) => void;
}

export default function CruisesGallery({
  cruiseLines,
  activeCruiseLine,
  onSelectCruiseLine,
}: CruisesGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    const currentIndex = cruiseLines.findIndex(c => c.id === activeCruiseLine.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : cruiseLines.length - 1;
    onSelectCruiseLine(cruiseLines[previousIndex]);
    scrollToCard(previousIndex);
  };

  const handleNext = () => {
    const currentIndex = cruiseLines.findIndex(c => c.id === activeCruiseLine.id);
    const nextIndex = currentIndex < cruiseLines.length - 1 ? currentIndex + 1 : 0;
    onSelectCruiseLine(cruiseLines[nextIndex]);
    scrollToCard(nextIndex);
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      // Get responsive card width and gap based on screen size
      const screenWidth = window.innerWidth;
      let cardWidth: number;
      let gap: number;

      if (screenWidth < 640) {
        // Mobile: w-48 (192px), gap-4 (16px)
        cardWidth = 192;
        gap = 16;
      } else if (screenWidth < 1024) {
        // Tablet: w-56 (224px), gap-5 (20px)
        cardWidth = 224;
        gap = 20;
      } else if (screenWidth < 1536) {
        // Laptop: w-64 (256px), gap-6 (24px)
        cardWidth = 256;
        gap = 24;
      } else {
        // Extra Large Desktop (2xl): w-80 (320px), gap-8 (32px)
        cardWidth = 320;
        gap = 32;
      }

      const totalCardWidth = cardWidth + gap;

      // Calculate position to center the card in viewport
      const cardPosition = index * totalCardWidth;
      const containerWidth = container.offsetWidth;
      const scrollPosition = cardPosition - (containerWidth / 2) + (cardWidth / 2);

      container.scrollTo({
        left: Math.max(0, scrollPosition), // Prevent negative scroll
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll gallery when active cruise line changes
  useEffect(() => {
    const currentIndex = cruiseLines.findIndex(c => c.id === activeCruiseLine.id);
    if (currentIndex !== -1) {
      scrollToCard(currentIndex);
    }
  }, [activeCruiseLine.id, cruiseLines, scrollToCard]);

  const activeIndex = cruiseLines.findIndex(c => c.id === activeCruiseLine.id);

  return (
    <div className="flex flex-col items-center justify-center w-full px-8 lg:px-16">
      <div className="relative w-full max-w-6xl">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-10 lg:-translate-x-16 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/50"
          aria-label="Previous cruise line"
        >
          <ChevronLeft className="text-white w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-10 lg:translate-x-16 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/50"
          aria-label="Next cruise line"
        >
          <ChevronRight className="text-white w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Gallery Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 2xl:gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cruiseLines.map((cruiseLine) => {
            const isActive = cruiseLine.id === activeCruiseLine.id;
            return (
              <button
                key={cruiseLine.id}
                onClick={() => {
                  onSelectCruiseLine(cruiseLine);
                  const index = cruiseLines.findIndex(c => c.id === cruiseLine.id);
                  scrollToCard(index);
                }}
                className="relative w-48 h-80 sm:w-56 sm:h-96 lg:w-64 lg:h-[28rem] 2xl:w-80 2xl:h-[32rem] shrink-0 rounded-3xl overflow-hidden group cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  src={cruiseLine.image}
                  alt={cruiseLine.name}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay for inactive cards */}
                {!isActive && (
                  <div
                    className="absolute inset-0 transition-opacity"
                    style={{
                      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"
                    }}
                  />
                )}
                {/* Cruise line name */}
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-white text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-montserrat)] text-left">
                    {cruiseLine.name}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual Indicator Bar */}
        <div className="mt-6 flex gap-2 justify-center">
          {cruiseLines.map((cruiseLine, index) => (
            <div
              key={cruiseLine.id}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: index === activeIndex ? "48px" : "24px",
                backgroundColor: index === activeIndex ? "white" : "rgba(255, 255, 255, 0.4)"
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
