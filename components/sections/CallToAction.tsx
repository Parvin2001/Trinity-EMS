import { Phone, ChevronRight } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/data";

export default function CallToAction() {
  return (
    <section className="bg-[#5AB8E8] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Schedule a Transport?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Emergency and non-emergency transport across Georgia and Alabama — call us anytime.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-[#0D1B2A] hover:bg-[#1A2D42] text-white font-semibold px-8 py-4 rounded-md transition-colors text-base"
          >
            <Phone size={18} />
            Call Now — {PHONE}
          </a>
          <a
            href="/contact"
            className="flex items-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors text-base"
          >
            Contact Us
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
