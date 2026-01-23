"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Service } from "../data/services";

interface ServicesGalleryProps {
  services: Service[];
}

export default function ServicesGallery({ services }: ServicesGalleryProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setIsAutoPlayActive(false);
    const previousIndex = activeServiceIndex > 0 ? activeServiceIndex - 1 : services.length - 1;
    setActiveServiceIndex(previousIndex);
    scrollToCard(previousIndex);
  };

  const handleNext = () => {
    setIsAutoPlayActive(false);
    const nextIndex = activeServiceIndex < services.length - 1 ? activeServiceIndex + 1 : 0;
    setActiveServiceIndex(nextIndex);
    scrollToCard(nextIndex);
  };

  const handleCardClick = (index: number) => {
    setIsAutoPlayActive(false);
    setActiveServiceIndex(index);
    scrollToCard(index);
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320; // w-80 actual width
      const gap = 24; // gap-6
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

  // Auto-scroll gallery every 7 seconds
  useEffect(() => {
    if (!isAutoPlayActive) return;

    const autoAdvance = () => {
      const nextIndex = (activeServiceIndex + 1) % services.length;
      setActiveServiceIndex(nextIndex);
      scrollToCard(nextIndex);
    };

    const interval = setInterval(autoAdvance, 7000);

    return () => clearInterval(interval);
  }, [activeServiceIndex, isAutoPlayActive, services.length]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-20">
      {/* Navigation Arrows - Positioned outside on white background */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-40 -translate-y-1/2 z-10 w-12 h-12 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/20 transition-colors border border-black/20"
        aria-label="Previous service"
      >
        <ChevronLeft className="text-black" size={28} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-40 -translate-y-1/2 z-10 w-12 h-12 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/20 transition-colors border border-black/20"
        aria-label="Next service"
      >
        <ChevronRight className="text-black" size={28} />
      </button>

      <div className="relative">
        {/* Gallery Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => {
            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(index)}
                className="relative w-80 shrink-0 cursor-pointer"
              >
                {/* Image Card */}
                <div className="relative w-80 h-80 rounded-3xl overflow-hidden mb-6 group">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                {/* Service Info */}
                <div className="px-2">
                  <h3 className="text-black text-xl font-semibold mb-3 font-[family-name:var(--font-montserrat)] leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-[family-name:var(--font-montserrat)]">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Indicator Bar */}
        <div className="mt-8 flex gap-2 justify-center">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="h-1 rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(index)}
              style={{
                width: index === activeServiceIndex ? "48px" : "24px",
                backgroundColor: index === activeServiceIndex ? "#000000" : "rgba(0, 0, 0, 0.3)"
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
