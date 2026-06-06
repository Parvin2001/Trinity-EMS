import { CheckCircle, ChevronRight } from "lucide-react";
import { features } from "@/lib/data";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#D42A22] text-sm font-semibold tracking-widest uppercase mb-4">
              About LifeCare EMS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-8 leading-tight">
              Serving Georgia with Compassion and Clinical Excellence
            </h2>

            <div className="space-y-5 text-gray-500 leading-relaxed">
              <p>
                LifeCare EMS of Georgia, LLC is a fully licensed and insured emergency medical services provider with over 15 years of experience serving patients and communities across the state.
              </p>
              <p>
                Our mission is simple: treat every patient with dignity, arrive prepared, and deliver the highest standard of care from the first moment of contact. We believe access to quality medical transport should never be a barrier.
              </p>
              <p>
                Our team of nationally registered EMTs and paramedics undergoes continuous training and certification to meet and exceed state and federal requirements. Every crew member is selected not just for their clinical skills, but for their character.
              </p>
            </div>

            <a
              href="#team"
              className="inline-flex items-center gap-2 mt-8 text-[#5AB8E8] font-semibold text-sm hover:gap-3 transition-all"
            >
              Meet Our Team
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Feature checklist */}
          <div className="bg-[#F7F8FA] border border-gray-200 rounded-2xl p-8">
            <h3 className="text-[#111827] font-semibold text-lg mb-6">
              Why Patients &amp; Partners Choose LifeCare
            </h3>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#5AB8E8]/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle size={16} className="text-[#5AB8E8]" />
                  </div>
                  <span className="text-[#111827] text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl font-extrabold text-[#5AB8E8] leading-none">15+</div>
                <div>
                  <div className="text-[#111827] font-semibold text-sm">Years of Service</div>
                  <div className="text-gray-500 text-xs mt-1">
                    Trusted by patients, physicians, and facilities across Georgia since 2009.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
