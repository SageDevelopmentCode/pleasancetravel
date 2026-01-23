import { ArrowUpRight } from "lucide-react";

export default function BookNowButton() {
  return (
    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors">
      Book Now
      <ArrowUpRight size={20} />
    </button>
  );
}
