import { Clock, Ambulance, MapPin, LucideIcon } from "lucide-react";
import { stats } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Ambulance,
  MapPin,
};

export default function TrustBar() {
  return (
    <section className="bg-[#5AB8E8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-0">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center px-6 ${
                  i < stats.length - 1 ? "lg:border-r lg:border-white/20" : ""
                }`}
              >
                {Icon && (
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                )}
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
