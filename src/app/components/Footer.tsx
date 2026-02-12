import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "Vacation Search", href: "#" },
    { name: "Cruise Search", href: "#" },
    { name: "Hotel Search", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const certificationLogos = [
    { src: "/assets/Logos/IATA.png", alt: "IATA", width: 80, height: 40 },
    { src: "/assets/Logos/CLIA.png", alt: "CLIA", width: 80, height: 40 },
    { src: "/assets/Logos/Asta.png", alt: "ASTA", width: 80, height: 40 },
  ];

  return (
    <div className="bg-white py-8 px-8">
      <div className="bg-black rounded-3xl px-8 py-12 lg:px-16 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & About Section */}
            <div className="flex flex-col">
              <div className="mb-6">
                <Image
                  src="/assets/Logo.png"
                  alt="Pleasance Travel"
                  width={180}
                  height={60}
                  className="brightness-0 invert"
                />
              </div>
              <p className="text-white/80 text-sm font-[family-name:var(--font-montserrat)] leading-relaxed mb-4">
                Discover the awe-inspiring beauty of world destinations with our
                exclusive travel services. Experience breathtaking adventures and
                immerse yourself in rich local cultures.
              </p>
              <Link
                href="#"
                className="text-white text-sm font-[family-name:var(--font-montserrat)] hover:text-white/80 transition-colors inline-flex items-center gap-2"
              >
                More About us
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col">
              <h3 className="text-white text-lg font-semibold font-[family-name:var(--font-montserrat)] mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 text-sm font-[family-name:var(--font-montserrat)] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col">
              <h3 className="text-white text-lg font-semibold font-[family-name:var(--font-montserrat)] mb-6">
                Contact Us
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+17146469202"
                  className="text-white/80 text-sm font-[family-name:var(--font-montserrat)] hover:text-white transition-colors block"
                >
                  +1 (714) 646-9202
                </a>
                <a
                  href="mailto:pleasancetravel@roadrunner.com"
                  className="text-white/80 text-sm font-[family-name:var(--font-montserrat)] hover:text-white transition-colors block break-all"
                >
                  pleasancetravel@roadrunner.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <h3 className="text-white text-lg font-semibold font-[family-name:var(--font-montserrat)] mb-6">
                Location
              </h3>
              <address className="not-italic text-white/80 text-sm font-[family-name:var(--font-montserrat)] leading-relaxed">
                Pleasance Travel Services
                <br />
                California, United States
              </address>
            </div>
          </div>

          {/* Certification Logos */}
          <div className="flex justify-center items-center gap-8 py-8 border-t border-white/10 mb-8">
            {certificationLogos.map((logo) => (
              <div key={logo.alt} className="opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="brightness-0 invert"
                />
              </div>
            ))}
          </div>

          {/* Bottom Section - Social Media & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">

            {/* Copyright & License */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-white/60 text-sm font-[family-name:var(--font-montserrat)]">
              <p>© 2026 Pleasance Travel. All Rights Reserved</p>
              <span className="hidden md:block">•</span>
              <p>CST# 2086018-40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
