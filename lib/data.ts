export const PHONE = "(770) 680-2427";
export const PHONE_HREF = "tel:+17706802427";
export const EMAIL = "info@lifecareemsga.com";
export const ADDRESS = "Georgia";

export type Service = {
  icon: string;
  title: string;
  description: string;
  details: string;
  badge?: string;
};

export const services: Service[] = [
  {
    icon: "ArrowLeftRight",
    title: "Inter-facility Transport",
    description:
      "Safe, reliable transport between hospitals, clinics, nursing homes, and medical facilities with certified crews on board.",
    details:
      "We recognize the critical importance of inter-facility transport in providing seamless continuity of care. Our team uses advanced equipment and highly trained professionals to ensure every transfer is timely, safe, and dignified — with a focus on patient comfort and well-being from start to finish.",
  },
  {
    icon: "Droplets",
    title: "Dialysis Transport",
    description:
      "Dependable, on-time transport for dialysis patients to and from treatment centers — focused on comfort and care.",
    details:
      "Our dialysis transport service is built around the needs of each patient. Our trained professionals handle everything — moving patients from bed to stretcher, loading and unloading from the ambulance, securing patients safely, and maintaining clean equipment — so every patient arrives at their treatment facility comfortable and on time.",
  },
  {
    icon: "HeartPulse",
    title: "Basic Life Support (BLS)",
    description:
      "BLS transport staffed by trained professionals, equipped to provide immediate assistance in critical situations.",
    details:
      "Our BLS service puts patient safety first. Our trained professionals are equipped to provide immediate, life-saving assistance in critical situations. Our team is continuously trained and prepared to respond effectively — delivering prompt, compassionate support and maintaining the highest standards of care on every call.",
  },
  {
    icon: "Heart",
    title: "Hospice Transport",
    description:
      "Compassionate hospice care that honors the dignity and wishes of patients and their families.",
    details:
      "We provide compassionate hospice care that honors the dignity and wishes of our patients and their families during life's most challenging moments. Our team addresses physical, emotional, and spiritual needs — creating a peaceful, comforting environment where every individual is treated with the grace, understanding, and respect they deserve.",
  },
  {
    icon: "ShieldCheck",
    title: "Event EMS",
    description:
      "On-site medical coverage for sporting events, concerts, film productions, government functions, and more.",
    details:
      "We provide experienced EMTs, paramedics, and firefighters for on-site medical coverage at sporting events, concerts, film productions, corporate events, government functions, conventions, and festivals. Our teams are positioned and ready to respond immediately if medical attention is needed at your event.",
  },
  {
    icon: "MapPin",
    title: "Long-Distance Transport",
    description:
      "Interstate and out-of-state medical transport with experienced crew support for every mile of the journey.",
    details:
      "For patients who need to travel across state lines or over long distances, our experienced crews are equipped to provide safe, reliable medical transport the entire way. We handle the logistics so patients and their families can focus on what matters most.",
  },
];

export const additionalServices = [
  "Hospital Discharges",
  "Psychiatric Transport",
  "Wound Care Management",
  "Radiation Treatment & Chemotherapy",
  "Surgical Procedure Transport",
  "Physician Appointment Transport",
  "Nursing Home Transport",
];

export type Stat = {
  value: string;
  label: string;
  icon: string;
};

export const stats: Stat[] = [
  { value: "15+", label: "Years in Service", icon: "Clock" },
  { value: "60,000+", label: "Transports Done in 2025", icon: "Ambulance" },
  { value: "50+", label: "Counties Served", icon: "MapPin" },
];

export type TeamMember = {
  name: string;
  title: string;
  initials: string;
  region?: string;
  email?: string;
  phone?: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Brian Haney",
    title: "Chief Executive Officer / Owner",
    initials: "BH",
    email: "Brian@lifecareemsga.com",
  },
  {
    name: "Tru Patel",
    title: "Chief Operating Officer",
    initials: "TP",
    email: "Tru@lifecareemsga.com",
  },
];

export const regionalManagers: TeamMember[] = [
  {
    name: "Jerrik Deuell",
    title: "Operations Manager",
    initials: "JD",
    email: "Jerrik@trinityemsga.com",
    phone: "(762) 347-7023",
  },
  {
    name: "Ashley Dunkerly",
    title: "Operations Manager",
    initials: "AD",
    email: "dunkerly@trinityemsga.com",
    phone: "(478) 235-8636",
  },
  {
    name: "Joe Rogers, EMT",
    title: "Operations Manager",
    initials: "JR",
    email: "joer@trinityemsga.com",
    phone: "(678) 591-0304",
  },
];

export const adminCompliance: TeamMember[] = [
  {
    name: "Jonathan Herpst",
    title: "Public Relations",
    initials: "JH",
    email: "Jonathan@lifecareemsga.com",
    phone: "(706) 921-9099",
  },
  {
    name: "Grace Haney",
    title: "Compliance (CAC CACO)",
    initials: "GH",
    email: "Grace@temsconsultants.com",
    phone: "(706) 534-0536",
  },
  {
    name: "Sierra Crowe",
    title: "Human Resources Director",
    initials: "SC",
    email: "Sierra@temsconsultants.com",
    phone: "(762) 425-4323",
  },
];

// Keep backward compat
export const team: TeamMember[] = [...leadership, ...regionalManagers, ...adminCompliance];

export type Testimonial = {
  quote: string;
  name: string;
  relation: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Trinity EMS has provided transportation for our patients for several years. Their service and professionalism go beyond the norm. Staff take time to get to know the patients — the trust and rapport is obvious. Their attention to schedules and dependability makes our job and patient treatment seamless. Trinity EMS is THE standard for medical transportation.",
    name: "T.S.",
    relation: "Office Manager, FMC Hall County",
  },
  {
    quote:
      "I am beyond thankful to have the crews at Trinity EMS pick me up — they have always been patient and kind. They work hard to help me get to all my treatments and important appointments. They are great.",
    name: "J.R.",
    relation: "Current Patient",
  },
  {
    quote:
      "Words cannot express the love that everyone at Trinity EMS showed to my sister throughout all her years of care. No one ever said no to any trip she needed. For all the prayers and love shown, I want to say thank you to each and every one of you. She loved you guys.",
    name: "B.L.",
    relation: "Family Member",
  },
];

export const features = [
  "State-Licensed EMS Provider",
  "HIPAA Compliant",
  "BLS & ALS Certified Crews",
  "GPS-Tracked Fleet",
  "Fully Insured",
  "Serving Georgia Since 2009",
];

// ─── Locations ────────────────────────────────────────────────────────────────
// To add a new location: copy one object below and fill in the details.
// lat/lng = GPS coordinates (search the address on maps.google.com,
// right-click the pin → the numbers shown are lat, lng).

export type Location = {
  name: string;       // Display name shown in sidebar (e.g. "Valdosta")
  address: string;    // Street address
  city: string;       // City
  state: string;      // 2-letter state code
  zip: string;        // ZIP code
  lat: number;        // Latitude  (decimal degrees)
  lng: number;        // Longitude (decimal degrees, negative for USA)
};

export const locations: Location[] = [
  {
    name: "Athens",
    address: "165 Colie Dr",
    city: "Athens",
    state: "GA",
    zip: "30606",
    lat: 33.9428,
    lng: -83.4541,
  },
  {
    name: "Gainesville",
    address: "1013 Airport Street",
    city: "Gainesville",
    state: "GA",
    zip: "30501",
    lat: 34.2769,
    lng: -83.8174,
  },
  {
    name: "Greensboro (Inter-Facility Transport)",
    address: "4720 Carey Station Rd",
    city: "Greensboro",
    state: "GA",
    zip: "30642",
    lat: 33.4916,
    lng: -83.2458,
  },
];
