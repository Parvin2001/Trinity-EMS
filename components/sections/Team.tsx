import { Mail, Phone, MapPin } from "lucide-react";
import { leadership, regionalManagers, adminCompliance, TeamMember } from "@/lib/data";

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#5AB8E8]/40 hover:shadow-md transition-all group">
      <div className="py-8 flex items-center justify-center bg-[#F7F8FA]">
        <div className="w-20 h-20 rounded-full bg-[#5AB8E8]/10 border-2 border-[#5AB8E8]/20 flex items-center justify-center group-hover:border-[#5AB8E8]/50 transition-colors">
          <span className="text-[#5AB8E8] text-2xl font-bold tracking-tight">
            {member.initials}
          </span>
        </div>
      </div>

      <div className="p-5 border-t border-gray-100">
        <h3 className="text-[#111827] font-semibold text-base mb-0.5">{member.name}</h3>
        <p className="text-[#5AB8E8] text-xs font-medium mb-1">{member.title}</p>
        {member.region && (
          <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
            <MapPin size={11} />
            {member.region}
          </div>
        )}
        {!member.region && <div className="mb-3" />}

        <div className="space-y-2">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-gray-500 hover:text-[#5AB8E8] text-xs transition-colors"
            >
              <Mail size={12} className="text-[#5AB8E8] shrink-0" />
              {member.email}
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:${member.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-gray-500 hover:text-[#5AB8E8] text-xs transition-colors"
            >
              <Phone size={12} className="text-[#5AB8E8] shrink-0" />
              {member.phone}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#D42A22] text-sm font-semibold tracking-widest uppercase mb-3">
            Our People
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Experienced, certified, and dedicated to delivering exceptional care on every call.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-14">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 text-center mb-8">Leadership</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto">
            {leadership.map((member) => (
              <div key={member.name} className="w-full sm:w-72">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Regional Managers */}
        <div className="mb-14">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 text-center mb-8">Regional Managers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {regionalManagers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Admin & Compliance */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-400 text-center mb-8">Admin &amp; Compliance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {adminCompliance.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
