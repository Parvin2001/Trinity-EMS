import { ChevronRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      {/* Spacer that clears the fixed navbar (matches its color so there is no seam) */}
      <div className="h-20 bg-[#5AB8E8]" />

      {/* Full branded artwork — shown complete, no cropping or zoom */}
      <img
        src="/images/trinity-ems-hero.webp"
        alt="Trinity EMS — Emergency & Non-Emergency Medical Transport Across Georgia"
        className="block w-full h-auto"
      />

      {/* Action buttons */}
      <div className="bg-[#0D1520] px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 bg-[#5AB8E8] hover:bg-[#3AAED8] text-white font-semibold px-8 py-4 rounded-md transition-colors text-base shadow-lg"
          >
            Request Transport
            <ChevronRight size={18} />
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-[#111827] font-semibold px-8 py-4 rounded-md transition-all text-base"
          >
            <Mail size={18} />
            Contact Us
          </a>
        </div>
      </div>

      {/* Accessible headline for SEO and screen readers (the visual headline lives in the artwork) */}
      <h1 className="sr-only">
        Emergency &amp; Non-Emergency Medical Transport Across Georgia — Trinity EMS
      </h1>
    </section>
  );
}
