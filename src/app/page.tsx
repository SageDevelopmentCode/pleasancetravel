"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";
import BookNowButton from "./components/BookNowButton";
import DestinationGallery from "./components/DestinationGallery";
import { destinations } from "./data/destinations";

export default function Home() {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  return (
    <div className="bg-white">
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          key={activeDestination.id}
          src={activeDestination.image}
          alt={`${activeDestination.name} background`}
          fill
          className="object-cover transition-opacity duration-500"
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
          <h1 className="text-white text-5xl font-semibold text-center max-w-2xl leading-tight">
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
        <div className="absolute bottom-18 left-18 max-w-lg font-[family-name:var(--font-montserrat)]">
          <h2 className="text-white text-5xl font-semibold mb-4">
            {activeDestination.name}
          </h2>
          <p className="text-white text-base leading-relaxed mb-6 max-w-md">
            {activeDestination.description}
          </p>
          <BookNowButton />
        </div>

        {/* Destination Gallery - Bottom Right */}
        <DestinationGallery
          destinations={destinations}
          activeDestination={activeDestination}
          onSelectDestination={setActiveDestination}
        />
      </div>
    </div>
  );
}
