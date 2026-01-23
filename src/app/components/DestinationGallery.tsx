"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
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
      const cardWidth = 280; // w-64 (256px) + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const activeIndex = destinations.findIndex(d => d.id === activeDestination.id);

  return (
    <div className="absolute bottom-15 right-18 max-w-4xl">
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/50"
          aria-label="Previous destination"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/50"
          aria-label="Next destination"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Gallery Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
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
                className="relative w-48 h-80 flex-shrink-0 rounded-3xl overflow-hidden group cursor-pointer transition-transform hover:scale-105"
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
