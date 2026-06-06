"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  ExternalLink,
  MapPin,
  DollarSign,
  BookOpen,
  Heart,
  Users,
} from "lucide-react";

const APPLY_URL =
  "https://recruiting.paylocity.com/recruiting/jobs/All/36034039-ca9d-437b-9420-1b01f6c9bb23/Lifecare-EMS-of-Georgia-LLC";

// ─── Why Work With Us ────────────────────────────────────────────────────────

const perks = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description:
      "Compensation packages that reflect your experience, certifications, and commitment to patient care.",
  },
  {
    icon: BookOpen,
    title: "Ongoing Training",
    description:
      "We invest in your growth with continuous education, certification support, and hands-on development opportunities.",
  },
  {
    icon: Heart,
    title: "Make a Real Difference",
    description:
      "Every shift is an opportunity to positively impact lives across Georgia and Alabama.",
  },
  {
    icon: Users,
    title: "Supportive Team Culture",
    description:
      "Join a team of professionals who have your back on every call, in every situation.",
  },
];

// ─── Hiring Process ──────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your application through our Paylocity careers portal — takes just a few minutes.",
  },
  {
    number: "02",
    title: "We Review",
    description: "Our team carefully reviews your application and reaches out within a few business days.",
  },
  {
    number: "03",
    title: "Interview",
    description: "Meet with our team to talk through the role, your experience, and what to expect.",
  },
  {
    number: "04",
    title: "Welcome Aboard",
    description: "Get onboarded, meet your crew, and start making a difference from day one.",
  },
];

// ─── Job Listings ────────────────────────────────────────────────────────────

type Job = {
  title: string;
  overview: string;
  type: string;
  location: string;
  responsibilities: { heading?: string; items: string[] }[];
  qualifications: string[];
  essentialFunctions: string[];
  workEnvironment: string;
  pdf: string;
};

const jobs: Job[] = [
  {
    title: "Regional Director",
    overview:
      "Senior operational leader responsible for the performance, compliance, and strategic execution of multiple Lifecare EMS locations. Ensures operational excellence, supports company growth initiatives, and provides coaching and accountability for operational leaders.",
    type: "Full Time",
    location: "Georgia & Alabama",
    responsibilities: [
      {
        heading: "Regional Operational Oversight",
        items: [
          "Oversee multiple EMS office locations, including direct supervision, mentorship, and leadership development of on-site management teams",
          "Serve as the primary liaison between regional operations and corporate leadership",
          "Ensure consistent adherence to company policies, clinical standards, and regulatory compliance",
        ],
      },
      {
        heading: "Performance & KPI Management",
        items: [
          "Monitor daily/weekly/monthly performance metrics including call volume, overtime/staffing, budget adherence, and clinical quality indicators",
        ],
      },
      {
        heading: "Strategic Growth & Business Support",
        items: [
          "Support company growth initiatives including service expansions and new office onboarding",
          "Analyze regional operational trends to identify risks, efficiencies, and opportunities",
          "Manage regional resource allocation to maximize operational efficiency and profitability",
        ],
      },
      {
        heading: "Employee Relations & Culture",
        items: [
          "Promote a positive, accountable culture that aligns with Lifecare's mission and values",
          "Maintain high standards of professionalism and patient-focused care throughout all locations",
          "Occasional field response or clinical support; travel between assigned offices required",
        ],
      },
    ],
    qualifications: [
      "Valid EMT certification/license required",
      "Extensive knowledge of EMS clinical protocols and operational best practices",
      "Demonstrated ability to lead multiple teams and hold leaders accountable",
      "Strong analytical capability; ability to interpret financial and operational data",
      "Valid driver's license with acceptable driving record",
      "Active CPR Certification",
    ],
    essentialFunctions: [
      "Ability to travel frequently and adapt to varied work environments",
      "Ability to stand, sit, climb stairs, and lift equipment as needed when supporting clinical operations",
      "Lift and/or carry up to 25lb regularly; occasionally up to 400 pounds with assistance",
      "Remain calm and decisive in high-pressure situations",
    ],
    workEnvironment:
      "Hybrid environment including the EMS organization, ambulance, and medical facilities.",
    pdf: "/careers/regional-director.pdf",
  },
  {
    title: "Operations Manager",
    overview:
      "We are seeking a motivated operations manager who believes in treating every patient equally, has a high standard of professionalism, can problem solve, and understands the importance of team dynamics.",
    type: "Full Time",
    location: "Georgia & Alabama",
    responsibilities: [
      {
        items: [
          "Transport patients to and from medical facilities, prioritizing their safety, comfort and well-being",
          "Maintain accurate and organized records of each patient's transportation details",
          "Long-term planning to support the company's goals",
          "Coordinating different teams to foster cross-team learning opportunities",
          "Assessing and analyzing departmental budgets to optimize profitability",
          "Inspiring and motivating employees through positive encouragement and incentive initiatives",
          "Communicating with leadership about shifting company priorities and projects",
          "Identifying potential problems and finding solutions to maximize efficiency and revenue",
          "Employee relations including hiring, scheduling and counseling",
          "Upholding all company policies; travel to different facilities as needed",
          "If you have a valid EMT license, you may be required to work on the truck from time to time",
        ],
      },
    ],
    qualifications: [
      "Valid EMT certification/license",
      "Proficient knowledge of medical protocols and emergency procedures",
      "Professionally driven and patient-focused with excellent communication skills",
      "Ability to remain composed, professional and empathetic in all situations",
      "Valid driver's license with a clean driving record",
      "Active CPR Certification",
    ],
    essentialFunctions: [
      "Stand for long periods of time during your shift",
      "Lift and/or carry up to 25lb regularly; frequently lift up to 180 pounds, occasionally up to 400 pounds with assistance",
      "Grip, grasp, and twist using your hands and wrists",
      "Climb stairs during your shift",
    ],
    workEnvironment:
      "Hybrid environment including the EMS organization, ambulance, and medical facilities.",
    pdf: "/careers/operations-manager.pdf",
  },
  {
    title: "Operations Specialist",
    overview:
      "We are seeking a dedicated operations specialist with a strong sense of leadership and a variety of skills to support our Lifecare team.",
    type: "Full Time",
    location: "Georgia & Alabama",
    responsibilities: [
      {
        items: [
          "Answer and direct phone calls in a professional manner",
          "Assist in maintaining office policies and procedures",
          "Work closely with operational teams to promote a culture of quality, safety, and continuous improvement",
          "Assist with maintenance as needed on EMS or facility equipment",
          "Assist the operations manager and administrators as needed",
          "Work with employees on a variety of EMT duties as required",
          "If you have a valid EMT license, you may be required to work on the truck from time to time",
        ],
      },
    ],
    qualifications: [
      "Valid Driver's License with a clean driving record",
      "Valid EMT License within their state of practice",
      "Active CPR Certification",
      "Proficient knowledge of medical protocols and emergency procedures",
      "Professionally driven and patient-focused with excellent communication skills",
      "Ability to remain composed, professional and empathetic in all situations",
    ],
    essentialFunctions: [
      "Must be able to frequently lift patients with assistance",
      "Stand for long periods of time during your shift",
      "Lift and/or carry up to 25lb regularly during your shift",
      "Climb stairs during your shift",
    ],
    workEnvironment:
      "Hybrid environment including the EMS organization, ambulance, and medical facilities.",
    pdf: "/careers/operations-specialist.pdf",
  },
  {
    title: "Emergency Medical Service Provider (EMT/B/A/P)",
    overview:
      "We are seeking all levels of EMT/B/A/P to join our team. We are looking for self-starting EMTs who believe in treating every patient equally, have a high standard of professionalism, can problem solve, and understand team dynamics.",
    type: "Full Time",
    location: "Georgia & Alabama",
    responsibilities: [
      {
        items: [
          "Safely transport patients to and from medical facilities, prioritizing their comfort and well-being",
          "Strong communication with facility staff to clearly communicate a plan of action",
          "Monitor patients' condition during transportation",
          "Provide patient care within your scope of practice",
          "Maintain a clean and safe environment for patients and staff",
          "Maintain accurate and organized records of each patient's transportation details",
          "Collaborate with our team of healthcare professionals to ensure seamless coordination of patient care",
        ],
      },
    ],
    qualifications: [
      "Valid EMT certification/license",
      "Proficient knowledge of medical protocols and emergency procedures",
      "Professionally driven and patient-focused with excellent communication skills",
      "Ability to remain composed, professional and empathetic in all situations",
      "Valid driver's license with a clean driving record",
      "Active CPR Certification",
    ],
    essentialFunctions: [
      "Must be able to frequently lift patients with assistance",
      "Stand for long periods of time during your shift",
      "Lift and/or carry up to 25lb regularly; frequently lift up to 180 pounds, occasionally up to 400 pounds with assistance",
      "Climb stairs during your shift",
    ],
    workEnvironment:
      "Hybrid environment including the EMS organization, ambulance, and medical facilities.",
    pdf: "/careers/ems-provider.pdf",
  },
  {
    title: "Inter Facility Transfer (IFT)",
    overview:
      "We are seeking all levels of licensed EMTs to meet our dialysis and transport needs. We are looking for motivated applicants who prioritize patient care and professionalism, can problem solve, and understand team dynamics.",
    type: "Full Time",
    location: "Georgia & Alabama",
    responsibilities: [
      {
        items: [
          "Safely transport patients to and from medical facilities, prioritizing their comfort and well-being",
          "Strong communication with facility staff to clearly communicate a plan of action",
          "Maintain a clean and safe environment for patients and staff",
          "Maintain accurate and organized records of each patient's transportation details",
          "Collaborate with our team of healthcare professionals to ensure seamless coordination of patient care",
          "Travel to different facilities as needed",
          "ALS or BLS calls",
          "Monitor patients' condition during transportation",
          "Provide patient care within your scope of practice",
        ],
      },
    ],
    qualifications: [
      "Valid EMT certification/license",
      "Proficient knowledge of medical protocols and emergency procedures",
      "Professionally driven and patient-focused with excellent communication skills",
      "Ability to remain composed, professional and empathetic in all situations",
      "Valid driver's license with a clean driving record",
    ],
    essentialFunctions: [
      "Stand for long periods of time during your shift",
      "Lift and/or carry up to 25lb regularly; frequently lift up to 180 pounds, occasionally up to 400 pounds with assistance",
      "Grip, grasp, and twist using your hands and wrists",
      "Climb stairs during your shift",
    ],
    workEnvironment:
      "Hybrid environment including the EMS organization, ambulance, and medical facilities.",
    pdf: "/careers/ift.pdf",
  },
  {
    title: "EMT-R",
    overview:
      "We are seeking EMT-Rs to join our team to meet our dialysis and transport needs. We are looking for self-starting EMT-Rs who believe in treating every patient equally, have a high standard of professionalism, and understand team dynamics.",
    type: "Full Time",
    location: "Georgia & Alabama",
    responsibilities: [
      {
        items: [
          "Safely transport patients to and from medical facilities, prioritizing their comfort and well-being",
          "Strong communication with facility staff to clearly communicate a plan of action",
          "Maintain a clean and safe environment for patients and staff",
          "Maintain accurate and organized records of each patient's transportation details",
          "Collaborate with our team of healthcare professionals to ensure seamless coordination of patient care",
        ],
      },
    ],
    qualifications: [
      "Valid EMR certification/license",
      "Proficient knowledge of medical protocols and emergency procedures",
      "Professionally driven and patient-focused with excellent communication skills",
      "Ability to remain composed and empathetic in all situations",
      "Valid driver's license with a clean driving record",
    ],
    essentialFunctions: [
      "Stand for long periods of time during your shift",
      "Lift and/or carry up to 25lb regularly during your shift",
      "Grip, grasp, and twist using your hands and wrists",
      "Climb stairs during your shift",
    ],
    workEnvironment:
      "Hybrid environment including the EMS organization, ambulance, and medical facilities.",
    pdf: "/careers/emt-r.pdf",
  },
  {
    title: "FTO (Field Training Officer) / Shift Lead",
    overview:
      "We are seeking a dedicated EMT/B/A/P with a strong sense of leadership. This role primarily focuses on training new employees and supporting shift operations.",
    type: "Full Time",
    location: "Georgia & Alabama",
    responsibilities: [
      {
        items: [
          "Primarily training new employees based on company policies and expectations",
          "Resolve and assist with low-level conflicts and concerns",
          "Maintain integrity and compliance in day-to-day operations including cleanliness of trucks and stocking supplies",
          "Work closely with operational teams to promote a culture of quality, safety, and continuous improvement",
          "Support operations manager and specialist as needed",
          "Assist with maintenance as needed on EMS or facility equipment",
          "If you have a valid EMT license, you may be required to work on the truck from time to time",
        ],
      },
    ],
    qualifications: [
      "Valid Driver's License with a clean driving record",
      "Valid EMT License within their state of practice",
      "Active CPR Certification",
      "Proficient knowledge of medical protocols and emergency procedures",
      "Professionally driven and patient-focused with excellent communication skills",
      "Ability to remain composed, professional and empathetic in all situations",
    ],
    essentialFunctions: [
      "Must be able to frequently lift patients with assistance",
      "Stand for long periods of time during your shift",
      "Lift and/or carry up to 25lb regularly during your shift",
      "Climb stairs during your shift",
    ],
    workEnvironment:
      "Hybrid environment including the EMS organization, ambulance, and medical facilities.",
    pdf: "/careers/fto-field-training-officer.pdf",
  },
  {
    title: "EMS Compliance Officer",
    overview:
      "Responsible for ensuring that all EMS operations comply with regulatory standards and internal policies. This role involves managing documentation, overseeing patient accounts, and ensuring overall compliance with healthcare regulations.",
    type: "Full Time",
    location: "Georgia & Alabama (Remote Eligible)",
    responsibilities: [
      {
        heading: "Patient Account Management",
        items: [
          "Manage all Prior Authorizations (PAs) and PA patients",
          "Work on denied PA appeals to ensure proper reimbursement",
          "Handle paperwork compliance related to patient accounts",
          "Verification of insurance",
        ],
      },
      {
        heading: "Transport Compliance & Documentation",
        items: [
          "Ensure compliance with transport protocols and regulations",
          "Review and verify medical necessity for services provided (PCS, H&P, purpose of stretcher)",
          "Submit documentation requests and regularly update team on compliance status",
        ],
      },
      {
        heading: "Communication & Reporting",
        items: [
          "Regularly update team members and management on compliance status and necessary actions",
          "Participate in training and continuing education to stay current with EMS regulations",
          "Quarterly audit review reports",
        ],
      },
    ],
    qualifications: [
      "Bachelor's degree or certification in healthcare administration, nursing, or a related field",
      "Relevant experience in EMS, healthcare compliance, or insurance billing",
      "Familiarity with healthcare regulations and medical necessity guidelines",
      "Strong organizational and communication skills",
      "Proficiency in documentation and compliance tracking software",
    ],
    essentialFunctions: [
      "Must be physically able to type or work at a keyboard for most of the day",
      "Must be able to view and read from a screen for long periods of time",
    ],
    workEnvironment:
      "Primarily office-based within an EMS organization, with occasional visits to medical facilities. Remote work is a possibility upon approval.",
    pdf: "/careers/ems-compliance-officer.pdf",
  },
  {
    title: "Quality Assurance Specialist",
    overview:
      "We are seeking a dedicated QA Specialist to ensure our operations meet the highest quality and compliance standards, ultimately enhancing patient care and safety.",
    type: "Full Time",
    location: "Georgia & Alabama (Remote Eligible)",
    responsibilities: [
      {
        items: [
          "Develop, implement, and maintain quality assurance programs and procedures to ensure compliance with local, state, and federal regulations",
          "Conduct regular audits and evaluations of EMS operations, patient transport processes, and documentation",
          "Collect and analyze data on service quality, patient outcomes, and operational efficiency; prepare reports and recommendations",
          "Design and deliver education training for EMTs/medics on quality assurance practices and compliance requirements",
          "Lead investigations into quality-related incidents, ensuring proper documentation and corrective actions are implemented",
          "Stay updated on industry regulations and standards; ensure company practices align with requirements",
        ],
      },
    ],
    qualifications: [
      "Experience in quality assurance, preferably within healthcare or EMS (training provided)",
      "Familiarity with relevant regulations (e.g., HIPAA, ISO standards) and quality improvement methodologies (e.g., Six Sigma, Lean)",
      "Strong analytical skills, attention to detail, and ability to communicate effectively",
      "Company will provide opportunities to be certified in ambulance compliance",
    ],
    essentialFunctions: [
      "Must be physically able to type or work at a keyboard for most of the day",
      "Must be able to view and read from a screen for long periods of time",
    ],
    workEnvironment:
      "Office environment within an EMS organization, with occasional visits to medical facilities. Remote work is a possibility upon approval.",
    pdf: "/careers/qa-specialist.pdf",
  },
  {
    title: "Administrative Support",
    overview:
      "We are seeking a dedicated administrative support assistant. Although medical experience is a plus, it is not necessary. The ideal candidate should have excellent oral and written communication skills and be able to organize their work using tools like Microsoft Excel.",
    type: "Full Time",
    location: "Georgia & Alabama",
    responsibilities: [
      {
        items: [
          "Answer and direct phone calls in a professional manner",
          "Assist in maintaining office policies and procedures",
          "Work closely with operational teams to promote a culture of quality, safety, and continuous improvement",
          "Complete tasks assigned by the operations manager and specialist as needed",
          "Assist with maintenance as needed on EMS or facility equipment",
          "Maintain integrity and compliance in day-to-day operations including cleanliness of trucks and stocking supplies",
          "If you have a valid EMT license, you may be required to work on the truck from time to time",
        ],
      },
    ],
    qualifications: [
      "Strong analytical skills, attention to detail, and the ability to communicate effectively",
      "Familiarity with Microsoft (Outlook, Excel, Word, etc.)",
    ],
    essentialFunctions: [
      "Must be physically able to type or work at a keyboard for most of the day",
      "Must be able to view and read from a screen for long periods of time",
      "Must be able to professionally communicate with internal employees and external vendors",
    ],
    workEnvironment:
      "Office environment within an EMS organization, with occasional visits to medical facilities.",
    pdf: "/careers/administrative-support.pdf",
  },
  {
    title: "Social Media Manager",
    overview:
      "Responsible for overseeing and enhancing the online presence of multiple affiliated companies specializing in private EMS transport, billing, and consulting services. This is a part-time position (approximately 10–20 hours per week) with flexible scheduling.",
    type: "Part Time (10–20 hrs/week)",
    location: "Remote (Flexible)",
    responsibilities: [
      {
        items: [
          "Develop and implement social media strategies that align with each company's goals and target audiences",
          "Create professional, high-quality content including photos, videos, graphics, and written posts",
          "Manage posting schedules and maintain consistent activity across Facebook, Instagram, and LinkedIn",
          "Monitor engagement, respond to comments and messages, and ensure a cohesive brand voice",
          "Track and analyze performance metrics to evaluate campaign success",
          "Collaborate with leadership and HR to showcase company culture and organizational achievements",
          "Lead a monthly marketing meeting to review performance metrics and plan upcoming content",
        ],
      },
    ],
    qualifications: [
      "Strong understanding of social media management for multiple brands or organizations",
      "Excellent written, visual, and creative communication skills",
      "Proficiency with tools such as Canva, scheduling/analytics platforms, and all social media platforms",
      "Basic photography and video editing experience",
      "Ability to prioritize tasks, meet deadlines, and adapt to changing needs",
      "Familiarity with healthcare, EMS, or related professional services is a plus",
    ],
    essentialFunctions: [
      "Ability to sit for extended periods while working on a computer or mobile device",
      "Ability to lift up to 25 pounds for transporting equipment during on-site events",
      "Must be able to manage multiple tasks simultaneously and meet project deadlines",
      "Reliable internet connection and access to necessary devices for remote work",
    ],
    workEnvironment:
      "Part-time with flexible scheduling and occasional on-site content needs.",
    pdf: "/careers/social-media-manager.pdf",
  },
];

// ─── Job Accordion ────────────────────────────────────────────────────────────

function JobAccordion({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${open ? "border-[#5AB8E8]" : "border-gray-200"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F7F8FA] transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className="mt-0.5">
            <h3 className="text-[#111827] font-semibold text-base">{job.title}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <span className="inline-block text-xs font-medium text-[#5AB8E8] bg-[#5AB8E8]/10 px-2.5 py-0.5 rounded-full">
                {job.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <MapPin size={11} />
                {job.location}
              </span>
            </div>
          </div>
        </div>
        <div className="shrink-0 ml-4 text-gray-400">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <p className="text-gray-500 text-sm leading-relaxed mt-5 mb-6">{job.overview}</p>

          {/* Responsibilities */}
          <div className="mb-5">
            <h4 className="text-[#111827] font-semibold text-sm mb-3">Key Responsibilities</h4>
            {job.responsibilities.map((section, i) => (
              <div key={i} className="mb-3">
                {section.heading && (
                  <p className="text-[#5AB8E8] text-xs font-semibold uppercase tracking-wide mb-1.5">{section.heading}</p>
                )}
                <ul className="space-y-1.5">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5AB8E8] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Qualifications */}
          <div className="mb-5">
            <h4 className="text-[#111827] font-semibold text-sm mb-3">Qualifications</h4>
            <ul className="space-y-1.5">
              {job.qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5AB8E8] shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* Work Environment */}
          <div className="mb-6">
            <h4 className="text-[#111827] font-semibold text-sm mb-2">Work Environment</h4>
            <p className="text-gray-600 text-sm">{job.workEnvironment}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#5AB8E8] hover:bg-[#3AAED8] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Apply Now
              <ExternalLink size={14} />
            </a>
            <a
              href={job.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-300 hover:border-[#5AB8E8] text-gray-600 hover:text-[#5AB8E8] font-medium px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              <FileText size={14} />
              Download Full Description
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#5AB8E8] pt-36 pb-16 text-center">
        <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-3">Join Our Team</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Careers</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Be part of a team committed to delivering exceptional care across Georgia and Alabama.
        </p>
      </div>

      {/* Why Work With Us */}
      <div className="bg-[#F7F8FA] border-b border-gray-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#D42A22] text-xs font-semibold tracking-widest uppercase mb-2">Why LifeCare EMS</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">Why Work With Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-[#5AB8E8]/40 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-[#5AB8E8]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <perk.icon size={22} className="text-[#5AB8E8]" />
                </div>
                <h3 className="text-[#111827] font-semibold text-sm mb-2">{perk.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#D42A22] text-xs font-semibold tracking-widest uppercase mb-2">Simple & Straightforward</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">Our Hiring Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-gray-200" />
                )}
                <div className="w-12 h-12 rounded-full bg-[#5AB8E8] text-white font-bold text-sm flex items-center justify-center mb-4 relative z-10 shrink-0">
                  {step.number}
                </div>
                <h3 className="text-[#111827] font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F7F8FA] border border-gray-200 rounded-xl p-6 mb-10">
          <div>
            <h2 className="text-[#111827] font-bold text-lg mb-1">Ready to join LifeCare EMS?</h2>
            <p className="text-gray-500 text-sm">Browse our open positions below and apply through our careers portal.</p>
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-[#5AB8E8] hover:bg-[#3AAED8] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View All & Apply
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Job count */}
        <p className="text-gray-400 text-sm mb-6">{jobs.length} open positions</p>

        {/* Accordion list */}
        <div className="space-y-3">
          {jobs.map((job) => (
            <JobAccordion key={job.title} job={job} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 text-sm mb-4">Don&apos;t see the right fit? We&apos;re always looking for great people.</p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5AB8E8] hover:bg-[#3AAED8] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Ready to Apply
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
