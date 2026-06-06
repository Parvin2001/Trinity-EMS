import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#D42A22] text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            The families and patients we serve are our greatest measure of success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col shadow-sm"
            >
              <div className="text-6xl font-serif text-[#5AB8E8]/30 leading-none mb-4 select-none">&ldquo;</div>
              <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-6">
                {t.quote}
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#5AB8E8] fill-[#5AB8E8]" />
                ))}
              </div>
              <div>
                <div className="text-[#111827] font-semibold text-sm">— {t.name}</div>
                <div className="text-gray-400 text-xs mt-0.5">{t.relation}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
