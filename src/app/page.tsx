"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import BookNowButton from "./components/BookNowButton";
import DestinationGallery from "./components/DestinationGallery";
import ServicesGallery from "./components/ServicesGallery";
import CertificationLogos from "./components/CertificationLogos";
import CruisesGallery from "./components/CruisesGallery";
import Contact from "./components/Contact";
import { destinations } from "./data/destinations";
import { services } from "./data/services";
import { cruiseLines } from "./data/cruises";

export default function Home() {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  const [previousDestination, setPreviousDestination] = useState(destinations[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);

  const [activeCruiseLine, setActiveCruiseLine] = useState(cruiseLines[0]);
  const [previousCruiseLine, setPreviousCruiseLine] = useState(cruiseLines[0]);
  const [isCruiseTransitioning, setIsCruiseTransitioning] = useState(false);
  const [isCruiseAutoPlayActive, setIsCruiseAutoPlayActive] = useState(true);

  const handleDestinationChange = useCallback((newDestination: typeof destinations[0]) => {
    if (newDestination.id === activeDestination.id) return;

    setPreviousDestination(activeDestination);
    setIsTransitioning(true);
    setActiveDestination(newDestination);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [activeDestination]);

  const handleUserInteraction = (newDestination: typeof destinations[0]) => {
    setIsAutoPlayActive(false);
    handleDestinationChange(newDestination);
  };

  const handleCruiseLineChange = useCallback((newCruiseLine: typeof cruiseLines[0]) => {
    if (newCruiseLine.id === activeCruiseLine.id) return;

    setPreviousCruiseLine(activeCruiseLine);
    setIsCruiseTransitioning(true);
    setActiveCruiseLine(newCruiseLine);

    setTimeout(() => {
      setIsCruiseTransitioning(false);
    }, 800);
  }, [activeCruiseLine]);

  const handleCruiseUserInteraction = (newCruiseLine: typeof cruiseLines[0]) => {
    setIsCruiseAutoPlayActive(false);
    handleCruiseLineChange(newCruiseLine);
  };

  // Auto-play carousel for destinations
  useEffect(() => {
    if (!isAutoPlayActive) return;

    const autoAdvance = () => {
      const currentIndex = destinations.findIndex(d => d.id === activeDestination.id);
      const nextIndex = (currentIndex + 1) % destinations.length;
      handleDestinationChange(destinations[nextIndex]);
    };

    const interval = setInterval(autoAdvance, 5000);

    return () => clearInterval(interval);
  }, [activeDestination, isAutoPlayActive, handleDestinationChange]);

  // Auto-play carousel for cruise lines
  useEffect(() => {
    if (!isCruiseAutoPlayActive) return;

    const autoAdvance = () => {
      const currentIndex = cruiseLines.findIndex(c => c.id === activeCruiseLine.id);
      const nextIndex = (currentIndex + 1) % cruiseLines.length;
      handleCruiseLineChange(cruiseLines[nextIndex]);
    };

    const interval = setInterval(autoAdvance, 5000);

    return () => clearInterval(interval);
  }, [activeCruiseLine, isCruiseAutoPlayActive, handleCruiseLineChange]);

  return (
    <div className="bg-white">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Previous/Current Background Image Layer */}
        <Image
          key={`prev-${previousDestination.id}`}
          src={previousDestination.image}
          alt={`${previousDestination.name} background`}
          fill
          className="object-cover"
          priority
        />
        {/* New Background Image Layer - Fades in on top */}
        <Image
          key={`active-${activeDestination.id}`}
          src={activeDestination.image}
          alt={`${activeDestination.name} background`}
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            isTransitioning || activeDestination.id === previousDestination.id ? "opacity-0" : "opacity-100"
          }`}
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
          }}
        />
        <Header />

        {/* Hero Text Section */}
        <div className="absolute top-1/4 left-0 right-0 flex flex-col items-center gap-4 px-8 font-[family-name:var(--font-montserrat)]">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold text-center max-w-2xl leading-tight">
            Pleasant Ways to Travel the World Today
          </h1>

          <div
            className="px-6 py-3 rounded-full backdrop-blur-sm"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <p className="text-white text-sm font-medium">
              A full service travel management agency
            </p>
          </div>
        </div>

        {/* Destination Section - Bottom Left */}
        <div className="absolute bottom-32 left-4 sm:bottom-24 sm:left-8 lg:bottom-20 lg:left-18 2xl:bottom-18 2xl:left-18 max-w-lg font-[family-name:var(--font-montserrat)]">
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <h2 className="text-white text-5xl font-semibold mb-4">
              {activeDestination.name}
            </h2>
            <p className="text-white text-base leading-relaxed mb-6 max-w-md">
              {activeDestination.description}
            </p>
            <BookNowButton />
          </div>
        </div>

        {/* Destination Gallery - Bottom Right */}
        <DestinationGallery
          destinations={destinations}
          activeDestination={activeDestination}
          onSelectDestination={handleUserInteraction}
        />
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-black text-4xl font-semibold text-center font-[family-name:var(--font-montserrat)] mb-12">
          Our Travel Services Range From:
        </h2>
        <ServicesGallery services={services} />
      </div>

      {/* Certification Logos Section */}
      <CertificationLogos />

      {/* Featured Cruises Section */}
      <div className="bg-white px-8 py-8">
        <div className="relative h-screen w-full overflow-hidden rounded-3xl">
          {/* Previous/Current Background Image Layer */}
          <Image
            key={`cruise-prev-${previousCruiseLine.id}`}
            src={previousCruiseLine.image}
            alt={`${previousCruiseLine.name} background`}
            fill
            className="object-cover"
            priority
          />
          {/* New Background Image Layer - Fades in on top */}
          <Image
            key={`cruise-active-${activeCruiseLine.id}`}
            src={activeCruiseLine.image}
            alt={`${activeCruiseLine.name} background`}
            fill
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              isCruiseTransitioning || activeCruiseLine.id === previousCruiseLine.id ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
            }}
          />

          {/* Featured Cruises Heading */}
          <div className="absolute top-20 left-8 lg:left-18 2xl:left-18">
            <h2 className="text-white text-4xl lg:text-5xl font-semibold font-[family-name:var(--font-montserrat)]">
              Featured Cruises
            </h2>
          </div>

          {/* Cruises Gallery - Centered */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 mt-10">
            <CruisesGallery
              cruiseLines={cruiseLines}
              activeCruiseLine={activeCruiseLine}
              onSelectCruiseLine={handleCruiseUserInteraction}
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
