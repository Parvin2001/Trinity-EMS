import LocationsMapWrapper from "@/components/LocationsMapWrapper";

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Page header */}
      <div className="bg-[#5AB8E8] pt-36 pb-16 text-center">
        <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-3">
          Where We Are
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Our Locations
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Serving communities across Georgia and Alabama from multiple stations.
        </p>
      </div>

      {/* Interactive map — fills remaining viewport */}
      <LocationsMapWrapper />
    </div>
  );
}
