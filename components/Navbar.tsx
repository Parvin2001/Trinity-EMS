"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/data";

const links = [
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Our Team", href: "/#team" },
  { label: "Locations", href: "/locations" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Pay Bill", href: "https://lifecareems.secure.lq-pay.net", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#5AB8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a href="/">
            <div className="bg-white rounded-lg px-3 py-1.5">
              <Image
                src="/images/logo.jpg"
                alt="LifeCare EMS of Georgia"
                width={150}
                height={56}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-black hover:text-white font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold text-sm px-5 py-2.5 rounded-md transition-colors"
            >
              <Phone size={15} />
              {PHONE}
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#5AB8E8] border-t border-white/20 px-4 py-6 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-base text-black hover:text-white font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold text-sm px-5 py-3 rounded-md transition-colors"
          >
            <Phone size={15} />
            {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
