"use client";

import { useState } from "react";
import { Phone, Mail, AlertTriangle, CheckCircle, Send, ChevronRight } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data";

const serviceOptions = [
  "General Inquiry",
  "Schedule a Transport",
  "Inter-facility Transport",
  "Dialysis Transport",
  "Hospice Transport",
  "Event EMS",
  "Long-Distance Transport",
  "Billing Question",
  "Other",
];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

function isValidPhone(phone: string): boolean {
  return phone.replace(/\D/g, "").length === 10;
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });
  const [touched, setTouched] = useState({ phone: false, email: false });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (name === "phone" || name === "email") {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const phoneError = touched.phone && form.phone && !isValidPhone(form.phone);
  const emailError = touched.email && form.email && !isValidEmail(form.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mark both as touched so errors show on submit
    setTouched({ phone: true, email: true });
    if (!isValidPhone(form.phone) || !isValidEmail(form.email)) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", serviceType: "", message: "" });
        setTouched({ phone: false, email: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean | "" | null | undefined) =>
    `w-full border rounded-lg px-4 py-3 text-[#111827] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition ${
      hasError
        ? "border-[#D42A22] focus:ring-[#D42A22]/40"
        : "border-gray-300 focus:ring-[#5AB8E8]"
    }`;

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#5AB8E8] pt-36 pb-16 text-center">
        <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Have a question or need to discuss a transport? We&apos;re here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* HIPAA Notice */}
        <div className="flex gap-4 bg-amber-50 border border-amber-300 rounded-xl p-5 mb-12">
          <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-800 font-semibold text-sm mb-1">Important — HIPAA Notice</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Do <strong>not</strong> include any Protected Health Information (PHI) in this form — no medical records, diagnoses, insurance details, or patient history. For transport scheduling or medical inquiries, please <a href={PHONE_HREF} className="underline font-semibold">call us directly</a>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#111827] mb-8">Send Us a Message</h2>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-[#5AB8E8]/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-[#5AB8E8]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">We&apos;ll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#5AB8E8] font-semibold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">Full Name <span className="text-[#D42A22]">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className={inputClass(false)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">Phone Number <span className="text-[#D42A22]">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="(706) 000-0000"
                      className={inputClass(phoneError)}
                    />
                    {phoneError && (
                      <p className="text-[#D42A22] text-xs mt-1">Please enter a valid 10-digit phone number.</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-2">Email Address <span className="text-[#D42A22]">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="you@example.com"
                    className={inputClass(emailError)}
                  />
                  {emailError && (
                    <p className="text-[#D42A22] text-xs mt-1">Please enter a valid email address (e.g. you@example.com).</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-2">Service Type</label>
                  <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-[#5AB8E8] focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-2">
                    Message <span className="text-[#D42A22]">*</span>
                    <span className="text-gray-400 font-normal ml-2">(Do not include medical information)</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-[#111827] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5AB8E8] focus:border-transparent transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[#D42A22] text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" required className="mt-1 accent-[#5AB8E8]" />
                  <label htmlFor="privacy" className="text-gray-500 text-xs leading-relaxed">
                    I confirm I have not included any Protected Health Information (PHI) in this message and agree to the privacy policy of LifeCare EMS of Georgia, LLC.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center gap-2 bg-[#5AB8E8] hover:bg-[#3AAED8] disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-6">
              <h3 className="text-[#111827] font-semibold text-base mb-5">Prefer to Call?</h3>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 bg-[#5AB8E8] hover:bg-[#3AAED8] text-white font-semibold px-5 py-3.5 rounded-lg transition-colors mb-4"
              >
                <Phone size={18} />
                {PHONE}
              </a>
              <p className="text-gray-500 text-xs leading-relaxed">
                For emergency transport or to discuss medical transport needs, calling is always the fastest option.
              </p>
            </div>

            <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-6">
              <h3 className="text-[#111827] font-semibold text-base mb-5">Email Us</h3>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-[#5AB8E8] hover:text-[#3AAED8] font-medium text-sm transition-colors"
              >
                <Mail size={16} />
                {EMAIL}
              </a>
            </div>

            <div className="bg-[#F7F8FA] border border-gray-200 rounded-xl p-6">
              <h3 className="text-[#111827] font-semibold text-base mb-3">Service Area</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Proudly serving patients and facilities across <strong className="text-[#111827]">Georgia and Alabama</strong> for over 15 years.
              </p>
              <a href="/#services" className="inline-flex items-center gap-1 text-[#5AB8E8] text-sm font-medium mt-3 hover:underline">
                View all services <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
