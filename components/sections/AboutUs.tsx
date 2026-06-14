import { CheckCircle, ChevronRight } from "lucide-react";
import { features } from "@/lib/data";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/TrinityEMSTransport",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/trinity.ems.ga/",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/trinity-ems-transport/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#D42A22] text-sm font-semibold tracking-widest uppercase mb-4">
              About Trinity EMS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-8 leading-tight">
              Serving Georgia with Compassion and Clinical Excellence
            </h2>

            <div className="space-y-5 text-gray-500 leading-relaxed">
              <p>
                Trinity EMS is a fully licensed and insured emergency medical services provider with over 15 years of experience serving patients and communities across Georgia.
              </p>
              <p>
                Our mission is simple: treat every patient with dignity, arrive prepared, and deliver the highest standard of care from the first moment of contact. We believe access to quality medical transport should never be a barrier.
              </p>
              <p>
                Our team of licensed EMTs and paramedics undergo continuous training and certification to meet and exceed state and federal requirements. Every crew member is selected not just for their clinical skills, but for their character — because the right person makes all the difference for you and your family when it matters most.
              </p>
            </div>

            <a
              href="#team"
              className="inline-flex items-center gap-2 mt-8 text-[#5AB8E8] font-semibold text-sm hover:gap-3 transition-all"
            >
              Meet Our Team
              <ChevronRight size={16} />
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">Follow Us</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#F7F8FA] border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#5AB8E8] hover:border-[#5AB8E8]/40 transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Feature checklist */}
          <div className="bg-[#F7F8FA] border border-gray-200 rounded-2xl p-8">
            <h3 className="text-[#111827] font-semibold text-lg mb-6">
              Why Patients &amp; Partners Choose Trinity EMS
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
