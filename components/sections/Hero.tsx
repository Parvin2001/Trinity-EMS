import { ChevronRight, Mail } from "lucide-react";

function Ctas() {
  return (
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
        className="flex items-center justify-center gap-2 border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#111827] font-semibold px-8 py-4 rounded-md transition-all text-base"
      >
        <Mail size={18} />
        Contact Us
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative">
      {/* Desktop / tablet: immersive full-bleed branded artwork with buttons over the bottom */}
      <div className="relative hidden md:flex min-h-screen items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/trinity-ems-hero.webp')" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0D1520]/85 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <Ctas />
        </div>
      </div>

      {/* Mobile: full branded artwork shown uncropped, buttons on a bar below */}
      <div className="md:hidden">
        <div className="h-16" />
        <img
          src="/images/trinity-ems-hero.webp"
          alt="Trinity EMS — Emergency & Non-Emergency Medical Transport Across Georgia"
          className="block w-full h-auto"
        />
        <div className="bg-[#0D1520] px-4 py-6">
          <Ctas />
        </div>
      </div>

      {/* Accessible headline for SEO and screen readers (the visual headline lives in the artwork) */}
      <h1 className="sr-only">
        Emergency &amp; Non-Emergency Medical Transport Across Georgia — Trinity EMS
      </h1>
    </section>
  );
}
