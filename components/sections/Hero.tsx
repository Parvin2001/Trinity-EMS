import { ChevronRight, CheckCircle, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      {/* Gradient overlay — dark on left for text, fades to transparent on right so ambulance shows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1520]/85 via-[#0D1520]/60 to-[#0D1520]/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/25 bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            Georgia&apos;s Trusted EMS Provider · 15+ Years
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Emergency &amp;{" "}
            <span className="whitespace-nowrap">Non-Emergency</span>{" "}
            <span className="text-[#5AB8E8]">Medical Transport</span>{" "}
            Across Georgia
          </h1>

          {/* Sub-copy */}
          <p className="text-white/75 text-lg sm:text-xl mb-10 leading-relaxed max-w-xl">
            From 911 emergencies to scheduled medical appointments — LifeCare EMS delivers compassionate, professional transport when it matters most.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
            <a
              href="#services"
              className="flex items-center gap-2 bg-[#5AB8E8] hover:bg-[#3AAED8] text-white font-semibold px-8 py-4 rounded-md transition-colors text-base shadow-lg"
            >
              Request Transport
              <ChevronRight size={18} />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-[#111827] font-semibold px-8 py-4 rounded-md transition-all text-base"
            >
              <Mail size={18} />
              Contact Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-white/65">
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#5AB8E8]" />
              State Licensed &amp; Insured
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/25" />
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#5AB8E8]" />
              BLS &amp; ALS Certified Crews
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/25" />
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-[#5AB8E8]" />
              15+ Years Serving Georgia &amp; Alabama
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
