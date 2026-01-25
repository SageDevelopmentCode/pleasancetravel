"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { Destination } from "../data/destinations";

interface DestinationGalleryProps {
  destinations: Destination[];
  activeDestination: Destination;
  onSelectDestination: (destination: Destination) => void;
}

export default function DestinationGallery({
  destinations,
  activeDestination,
  onSelectDestination,
}: DestinationGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    const currentIndex = destinations.findIndex(d => d.id === activeDestination.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : destinations.length - 1;
    onSelectDestination(destinations[previousIndex]);
    scrollToCard(previousIndex);
  };

  const handleNext = () => {
    const currentIndex = destinations.findIndex(d => d.id === activeDestination.id);
    const nextIndex = currentIndex < destinations.length - 1 ? currentIndex + 1 : 0;
    onSelectDestination(destinations[nextIndex]);
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
        // Mobile: w-32 (128px), gap-3 (12px)
        cardWidth = 128;
        gap = 12;
      } else if (screenWidth < 1536) {
        // Tablet & Laptop: w-40 (160px), gap-4 (16px)
        cardWidth = 160;
        gap = 16;
      } else {
        // Extra Large Desktop (2xl): w-48 (192px), gap-6 (24px)
        cardWidth = 192;
        gap = 24;
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

  // Auto-scroll gallery when active destination changes
  useEffect(() => {
    const currentIndex = destinations.findIndex(d => d.id === activeDestination.id);
    if (currentIndex !== -1) {
      scrollToCard(currentIndex);
    }
  }, [activeDestination.id]);

  const activeIndex = destinations.findIndex(d => d.id === activeDestination.id);

  return (
    <div className="absolute bottom-8 left-4 right-4 sm:bottom-12 sm:left-auto sm:right-8 lg:bottom-10 lg:right-18 2xl:bottom-15 2xl:right-18 max-w-4xl lg:max-w-xl 2xl:max-w-4xl">
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-10 lg:-translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/50"
          aria-label="Previous destination"
        >
          <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-10 lg:translate-x-12 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/50"
          aria-label="Next destination"
        >
          <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Gallery Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 2xl:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {destinations.map((destination) => {
            const isActive = destination.id === activeDestination.id;
            return (
              <button
                key={destination.id}
                onClick={() => {
                  onSelectDestination(destination);
                  const index = destinations.findIndex(d => d.id === destination.id);
                  scrollToCard(index);
                }}
                className="relative w-32 h-56 sm:w-40 sm:h-64 2xl:w-48 2xl:h-80 flex-shrink-0 rounded-3xl overflow-hidden group cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
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
                {/* Country name */}
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-white text-2xl font-semibold font-[family-name:var(--font-montserrat)]">
                    {destination.name}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Visual Indicator Bar */}
        <div className="mt-4 flex gap-2 justify-center">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
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
