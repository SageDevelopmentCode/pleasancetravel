import { Phone, Mail, FileText, Star } from "lucide-react";

export default function Contact() {
  const specializations = [
    "Disney",
    "Marriott",
    "Hawaii",
    "Philippines",
    "Weddings",
    "Honeymoons",
    "Europe",
    "Caribbean",
    "All-Inclusive",
    "Group Travel",
    "River Cruises",
    "Ocean Cruises",
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black text-5xl font-semibold text-center font-[family-name:var(--font-montserrat)] mb-8">
          Get In Touch
        </h2>

        {/* Auto-Scrolling Specializations */}
        <div className="mb-12 overflow-hidden">
          <div className="relative">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set */}
              {specializations.map((item, index) => (
                <div key={`first-${index}`} className="inline-flex items-center mx-4">
                  <span className="text-gray-600 text-lg font-[family-name:var(--font-montserrat)]">
                    {item}
                  </span>
                  <Star className="w-4 h-4 text-gray-400 mx-4 fill-gray-400" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {specializations.map((item, index) => (
                <div key={`second-${index}`} className="inline-flex items-center mx-4">
                  <span className="text-gray-600 text-lg font-[family-name:var(--font-montserrat)]">
                    {item}
                  </span>
                  <Star className="w-4 h-4 text-gray-400 mx-4 fill-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="bg-white rounded-3xl px-8 py-10 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-5 h-5 text-black flex-shrink-0" />
                <h3 className="text-black text-2xl font-semibold font-[family-name:var(--font-montserrat)]">
                  01.
                </h3>
              </div>
              <h4 className="text-black text-lg font-semibold font-[family-name:var(--font-montserrat)] mb-3">
                Phone
              </h4>
              <a
                href="tel:+17146469202"
                className="text-gray-600 text-base font-[family-name:var(--font-montserrat)] hover:text-black hover:underline transition-colors"
              >
                (714) 646-9202
              </a>
            </div>
          </div>

          {/* Fax Card */}
          <div className="bg-white rounded-3xl px-8 py-10 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-5 h-5 text-black flex-shrink-0" />
                <h3 className="text-black text-2xl font-semibold font-[family-name:var(--font-montserrat)]">
                  02.
                </h3>
              </div>
              <h4 className="text-black text-lg font-semibold font-[family-name:var(--font-montserrat)] mb-3">
                Fax
              </h4>
              <p className="text-gray-600 text-base font-[family-name:var(--font-montserrat)]">
                (714) 577-9299
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl px-8 py-10 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-5 h-5 text-black flex-shrink-0" />
                <h3 className="text-black text-2xl font-semibold font-[family-name:var(--font-montserrat)]">
                  03.
                </h3>
              </div>
              <h4 className="text-black text-lg font-semibold font-[family-name:var(--font-montserrat)] mb-3">
                Email
              </h4>
              <a
                href="mailto:pleasancetravel@roadrunner.com"
                className="text-gray-600 text-base font-[family-name:var(--font-montserrat)] hover:text-black hover:underline transition-colors break-all"
              >
                pleasancetravel@roadrunner.com
              </a>
            </div>
          </div>
        </div>

        {/* CST License */}
        <div className="text-center">
          <p className="text-gray-600 text-sm font-[family-name:var(--font-montserrat)]">
            CST# 2086018-40
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
