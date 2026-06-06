"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locations, type Location } from "@/lib/data";
import { MapPin, ExternalLink, Navigation } from "lucide-react";

// ─── Fly to selected location ─────────────────────────────────────────────────

function MapController({ location }: { location: Location | null }) {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 14, { duration: 1.2 });
    }
  }, [location, map]);
  return null;
}

// ─── Custom pin icon ──────────────────────────────────────────────────────────

function buildIcon(isSelected: boolean) {
  const color = isSelected ? "#D42A22" : "#5AB8E8";
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width:28px;height:34px;position:relative;
      ">
        <div style="
          width:28px;height:28px;
          background:${color};
          border:3px solid white;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          box-shadow:0 2px 8px rgba(0,0,0,0.30);
        "></div>
      </div>
    `,
    iconSize: [28, 34],
    iconAnchor: [14, 34],
  });
}

// ─── Map component ────────────────────────────────────────────────────────────

export default function LocationsMap() {
  const [selected, setSelected] = useState<Location | null>(null);

  return (
    <div className="flex flex-col lg:flex-row" style={{ height: "calc(100vh - 224px)", minHeight: 520 }}>

      {/* ── Sidebar ── */}
      <div className="w-full lg:w-80 shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            {locations.length} Locations
          </p>
        </div>

        {locations.map((loc) => {
          const active = selected?.name === loc.name;
          return (
            <button
              key={loc.name}
              onClick={() => setSelected(loc)}
              className={`w-full text-left px-5 py-4 border-b border-gray-100 transition-all hover:bg-[#F7F8FA] ${
                active
                  ? "bg-[#5AB8E8]/8 border-l-4 border-l-[#5AB8E8]"
                  : "border-l-4 border-l-transparent"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin
                  size={13}
                  className={active ? "text-[#5AB8E8]" : "text-gray-400"}
                />
                <span
                  className={`font-semibold text-sm ${
                    active ? "text-[#5AB8E8]" : "text-[#111827]"
                  }`}
                >
                  {loc.name}
                </span>
              </div>

              <p className="text-gray-500 text-xs ml-5">{loc.address}</p>
              <p className="text-gray-500 text-xs ml-5">
                {loc.city}, {loc.state} {loc.zip}
              </p>

              {active && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 mt-2.5 ml-5 text-xs text-[#5AB8E8] hover:underline font-medium"
                >
                  <Navigation size={11} />
                  Get Directions
                  <ExternalLink size={10} />
                </a>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Map ── */}
      <div className="flex-1 min-h-[360px]">
        <MapContainer
          center={[32.8, -83.9]}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom
        >
          {/* CartoDB Positron — clean, minimal tile style, free, no API key */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          <MapController location={selected} />

          {locations.map((loc) => (
            <Marker
              key={loc.name}
              position={[loc.lat, loc.lng]}
              icon={buildIcon(selected?.name === loc.name)}
              eventHandlers={{ click: () => setSelected(loc) }}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
