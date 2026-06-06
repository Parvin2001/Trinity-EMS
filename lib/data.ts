export const PHONE = "(706) 245-0689";
export const PHONE_HREF = "tel:+17062450689";
export const EMAIL = "info@lifecareemsga.com";
export const ADDRESS = "Georgia & Alabama";

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
    name: "Cal Hardwick",
    title: "Regional Manager",
    initials: "CH",
    region: "Valdosta, Gray",
    email: "Calvin@lifecareemsga.com",
    phone: "(470) 998-9419",
  },
  {
    name: "Carole Pence",
    title: "Regional Manager",
    initials: "CP",
    region: "Habersham",
    email: "Carole@lifecareemsga.com",
    phone: "(706) 776-1526",
  },
  {
    name: "Jenn Morgan",
    title: "Regional Manager",
    initials: "JM",
    region: "Columbus, Byron, Phenix City",
    email: "Jenn@lifecareemsga.com",
    phone: "(762) 425-4319",
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
      "LifeCare was there when every second counted. The crew was calm, professional, and took incredible care of my father. I cannot thank them enough.",
    name: "Sandra M.",
    relation: "Family Member",
  },
  {
    quote:
      "We rely on LifeCare for all of our dialysis transport. They are reliable, punctual, and genuinely care about the patients they serve.",
    name: "Dr. James K.",
    relation: "Referring Physician",
  },
  {
    quote:
      "I was transported over 200 miles and the team made the entire journey comfortable and stress-free. Truly a world-class operation.",
    name: "Robert T.",
    relation: "Patient",
  },
  {
    quote:
      "LifeCare consistently goes above and beyond to assist us with our transportation needs. Their teamwork, communication, and genuine concern for those we serve are truly exceptional. Knowing we can count on them gives us peace of mind and helps us better serve our residents and families.",
    name: "Y. Pitts",
    relation: "Healthcare Navigator, Autumn Lane Health & Rehabilitation",
  },
];

export const features = [
  "State-Licensed EMS Provider",
  "HIPAA Compliant",
  "BLS & ALS Certified Crews",
  "GPS-Tracked Fleet",
  "Fully Insured",
  "Serving Georgia & Alabama Since 2009",
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
    name: "Valdosta",
    address: "601 West Hill Ave",
    city: "Valdosta",
    state: "GA",
    zip: "31601",
    lat: 30.8376,
    lng: -83.2887,
  },
  {
    name: "Gray",
    address: "4191 Gray Hwy",
    city: "Gray",
    state: "GA",
    zip: "31032",
    lat: 33.0084,
    lng: -83.5349,
  },
  {
    name: "Habersham",
    address: "363 Baldwin Rd",
    city: "Cornelia",
    state: "GA",
    zip: "30531",
    lat: 34.5107,
    lng: -83.5234,
  },
  {
    name: "Columbus",
    address: "9249 Veterans Pkwy",
    city: "Midland",
    state: "GA",
    zip: "31820",
    lat: 32.5350,
    lng: -84.9196,
  },
  {
    name: "Byron",
    address: "102 Church St",
    city: "Byron",
    state: "GA",
    zip: "31008",
    lat: 32.6550,
    lng: -83.7590,
  },
  {
    name: "Phenix City",
    address: "1178 U.S. Hwy 280",
    city: "Phenix City",
    state: "AL",
    zip: "36867",
    lat: 32.4698,
    lng: -85.0024,
  },
];
