"use client";

import Image from "next/image";
import { useState } from "react";
import BookNowButton from "./BookNowButton";

const menuItems = [
  "Home",
  "Vacation Search",
  "Cruise Search",
  "Hotel Search",
  "Contact Us",
];

export default function Header() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-8 py-6">
      <div className="flex items-center justify-between font-[family-name:var(--font-montserrat)]">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/assets/Logo.png"
            alt="Pleasance Travel"
            width={180}
            height={60}
            priority
            className="h-auto"
          />
        </div>

        {/* Navigation Menu */}
        <nav
          className="flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-sm"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeItem === item
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Book Now Button */}
        <BookNowButton />
      </div>
    </header>
  );
}
