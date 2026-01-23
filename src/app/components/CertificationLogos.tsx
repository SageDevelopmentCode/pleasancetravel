import Image from "next/image";

export default function CertificationLogos() {
  return (
    <div className="border-t border-b border-gray-200 bg-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <Image
              src="/assets/Logos/Asta.png"
              alt="ASTA Certified"
              width={180}
              height={102}
            />
            <Image
              src="/assets/Logos/CLIA.png"
              alt="CLIA Member"
              width={180}
              height={100}
            />
            <Image
              src="/assets/Logos/IATA.png"
              alt="IATA Accredited"
              width={209}
              height={60}
            />
        </div>
      </div>
    </div>
  );
}
