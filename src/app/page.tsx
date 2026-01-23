import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="/assets/Hawaii.jpg"
          alt="Hawaii background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
          }}
        />
        <Header />
      </div>
    </div>
  );
}
