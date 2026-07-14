import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  Gauge,
  Microscope,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export type IconItem = {
  title: string;
  icon: LucideIcon;
  text: string;
};

export type ProofPoint = {
  value: string;
  label: string;
};

export type IndustryItem = {
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  image: string;
  text: string;
  details: string[];
};

export const mainNav = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  phone: "303-421-0712",
  phoneHref: "tel:3034210712",
  generalEmail: "information@offshoremolds.com",
  salesEmail: "bstone@offshoremolds.com",
  rfqHref:
    "mailto:bstone@offshoremolds.com?subject=Tooling%20RFQ&body=Project%20name:%0APart%20files:%0ATarget%20press%20size:%0AMaterial:%0AAnnual%20volume:%0ACritical%20tolerances:%0ALaunch%20timing:%0A",
  usOffice: ["4251 Kipling St, Suite 420", "Wheat Ridge, CO 80033"],
  chinaOffice: ["Huang Jiang Town, Dongguan", "+(86 769) 82330086"],
};

export const proofPoints: ProofPoint[] = [
  {
    value: "6 Weeks to T1",
    label: "Target after design approval",
  },
  {
    value: "50-3500T",
    label: "Plastic injection mold programs supported",
  },
  {
    value: "500 - 1500T",
    label: "Medium mold tonnage single to multicavity tool.",
  },
  {
    value: "1500T - 3500T",
    label: "Large single to multicavity tools.",
  },
];

export const anniversary = {
  value: "25",
  title: "Celebrating 25 years",
  text: "Founded in 2001, OMI is marking 25 years of offshore tooling support and building in 2026.",
};

export const pillars: IconItem[] = [
  {
    title: "People",
    icon: BadgeCheck,
    text: "Senior U.S. project managers, in-house designers, moldflow analysts, process technicians, and China-based QC inspectors stay close to every job.",
  },
  {
    title: "Process",
    icon: ClipboardCheck,
    text: "Design approval, schedule updates, moldflow, first article inspection, sampling data, and final teardown checks keep risk visible before shipment.",
  },
  {
    title: "Equipment",
    icon: Factory,
    text: "Dongguan-area tooling capacity, CMM inspection, production-condition sampling partners, and large-format machining support complex programs at speed.",
  },
];

export const capabilities = [
  {
    title: "Custom Tooling",
    eyebrow: "Concept to steel",
    icon: Wrench,
    image: "/omi/eight-core-mold-composite.jpg",
    text: "Complex plastic injection molds designed, built, sampled, and documented for U.S. production expectations.",
  },
  {
    title: "Large Tools",
    eyebrow: "Up to 3500T",
    icon: Boxes,
    image: "/omi/five-axis-machining-head.jpg",
    text: "Large-format programs managed through OMI's owned and partner tooling capacity in southern China.",
  },
  {
    title: "Moldflow & Design",
    eyebrow: "Early risk removal",
    icon: Gauge,
    image: "/omi/moldflow-design.png",
    text: "In-house design and moldflow teams review manufacturability, material behavior, and tooling strategy before steel is cut.",
  },
  {
    title: "Sampling & Validation",
    eyebrow: "Run it first",
    icon: Microscope,
    image: "/omi/sampling-validation.jpg",
    text: "Molds are sampled under normal molding conditions with process parameters, first articles, and supporting documentation.",
  },
];

export const industries: IndustryItem[] = [
  {
    title: "Automotive",
    eyebrow: "Interior, exterior, lighting, and underhood",
    icon: Gauge,
    image: "/omi/five-axis-polished-cavity.jpg",
    text: "Plastic injection mold programs for visible and functional parts where fit, finish, and repeatability have to survive launch pressure.",
    details: ["Class-A surfaces", "Complex shutoffs", "Launch timing support"],
  },
  {
    title: "Consumer Products",
    eyebrow: "Durable goods and molded assemblies",
    icon: Boxes,
    image: "/omi/polished-components.png",
    text: "Tooling support for products with cosmetic expectations, frequent design revisions, and buyer-facing quality requirements.",
    details: ["Cosmetic finish planning", "Multi-cavity tooling", "Documented samples"],
  },
  {
    title: "Recreational",
    eyebrow: "Outdoor, power sport, and lifestyle parts",
    icon: Ruler,
    image: "/omi/five-axis-finished-cavity.jpg",
    text: "Molds for rugged plastic components where structure, texture, and visible surfaces need to line up before production starts.",
    details: ["Large part geometry", "Texture-ready steel", "Sampling visibility"],
  },
  {
    title: "Agriculture & Equipment",
    eyebrow: "Utility parts and machine components",
    icon: Factory,
    image: "/omi/eight-core-mold-composite.jpg",
    text: "Tooling for heavy-use molded parts with practical design requirements, robust construction, and clear approval checkpoints.",
    details: ["Thick-wall considerations", "Serviceable designs", "Steel and component review"],
  },
  {
    title: "Heavy Truck",
    eyebrow: "Large-format molded parts",
    icon: Wrench,
    image: "/omi/five-axis-large-tool-machining.jpg",
    text: "Support for big tools, large press programs, and molded parts that need coordinated machining, validation, and final handoff.",
    details: ["1500T - 3500T programs", "Large tool machining", "Final teardown checks"],
  },
  {
    title: "Industrial & Technical",
    eyebrow: "Tight-tolerance functional plastic",
    icon: ShieldCheck,
    image: "/omi/moldflow-design.png",
    text: "Mold programs for technical parts where risk needs to be removed early through moldflow, design review, and measured sampling.",
    details: ["Moldflow review", "CMM-backed approval", "Process documentation"],
  },
];

export const processSteps = [
  {
    title: "Quote & Program Review",
    text: "OMI reviews part data, press requirements, tolerances, material, timing, and sourcing assumptions.",
  },
  {
    title: "Moldflow & 3D Design",
    text: "Designers and moldflow technicians refine the tool concept and submit 3D design for customer approval.",
  },
  {
    title: "Tool Build",
    text: "Steel, components, machining, and assembly move through daily oversight by OMI's China-based team.",
  },
  {
    title: "Sampling & FAI",
    text: "Tools are sampled for a minimum of three hours, with process sheets and first article inspection reports.",
  },
  {
    title: "Final Inspection",
    text: "The mold is disassembled, measured, reviewed by mold inspectors, reassembled, protected, and prepared to ship.",
  },
];

export const qualityItems = [
  "Domestic or Finkl P-20 and H-13 steel options",
  "DME or Progressive equivalent standard components",
  "CMM first article inspection against customer drawings",
  "Detailed checklists for major tooling milestones",
  "One-year warranty covering materials and workmanship",
  "Direct-to-molder shipment after final approval",
];

export const faqs = [
  {
    question: "Will the mold be sampled before shipment?",
    answer:
      "Yes. Tools are sampled in China under production conditions for at least three hours, with random samples, process data, and inspection reports supplied for approval.",
  },
  {
    question: "Can we visit the facility?",
    answer:
      "Yes. OMI encourages customer visits in Colorado or China and can help coordinate transportation arrangements.",
  },
  {
    question: "What files can OMI accept?",
    answer:
      "The legacy workflow lists native Pro-E, SolidWorks, CATIA, Siemens NX, plus IGS, STP, Parasolid, and DXF formats.",
  },
];

export const homeRoutes = [
  {
    title: "Capabilities",
    href: "/capabilities",
    icon: Ruler,
    text: "See tooling capacity, moldflow support, sampling, and validation details.",
  },
  {
    title: "Industries",
    href: "/industries",
    icon: Factory,
    text: "Review the markets and part types OMI supports with offshore tooling programs.",
  },
  {
    title: "Process",
    href: "/process",
    icon: ClipboardCheck,
    text: "Follow the path from quote review through final inspection and shipment.",
  },
  {
    title: "Quality",
    href: "/quality",
    icon: ShieldCheck,
    text: "Review the checks, reports, materials, and warranty behind the build.",
  },
];

export const lifecycleHighlights = [
  {
    title: "Design & Engineering",
    text: "Moldflow, tool concept, manufacturability review, and customer design approval before the build begins.",
    href: "/process",
  },
  {
    title: "Tool Build",
    text: "China-based execution with daily oversight, milestone visibility, and U.S. program ownership.",
    href: "/capabilities",
  },
  {
    title: "Sampling & Validation",
    text: "Production-condition sampling, first article inspection, process data, and approval documentation.",
    href: "/quality",
  },
  {
    title: "Final Handoff",
    text: "Teardown inspection, protection, shipment planning, and direct support for the receiving molder.",
    href: "/contact",
  },
];
