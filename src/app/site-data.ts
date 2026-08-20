import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  Gauge,
  HeartPulse,
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
};

export const mainNav = [
  { label: "Products", href: "/capabilities" },
  { label: "One Source", href: "/process" },
  { label: "Industries", href: "/industries" },
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
    text: "Complex plastic injection molds shaped from product data, reviewed for build risk, sampled, and documented for production expectations.",
  },
  {
    title: "Large Tools",
    eyebrow: "Up to 3500T",
    icon: Boxes,
    image: "/omi/five-axis-machining-head.jpg",
    text: "Large-format programs managed through OMI's tooling capacity, China-based oversight, sampling review, and U.S. project communication.",
  },
  {
    title: "Moldflow & Design",
    eyebrow: "Early risk removal",
    icon: Gauge,
    image: "/omi/moldflow-design.png",
    text: "Design and moldflow review connect material behavior, cooling, shutoffs, cavitation, and tooling strategy before steel is cut.",
  },
  {
    title: "Sampling & Validation",
    eyebrow: "Run it first",
    icon: Microscope,
    image: "/omi/sampling-validation.jpg",
    text: "Molds are sampled under normal molding conditions with process parameters, first articles, inspection feedback, and release documentation.",
  },
];

export const industries: IndustryItem[] = [
  {
    title: "Recreation",
    eyebrow: "ATV, UTV, and personal watercraft programs",
    icon: Gauge,
    image: "/omi/industry-recreation-atv-owner.jpg",
    text: "OMI supports recreation vehicle and watercraft programs with tooling for rugged molded parts where fit, texture, durability, outdoor exposure, and repeatable production matter.",
  },
  {
    title: "Consumer Products",
    eyebrow: "Trash cans, blenders, and molded goods",
    icon: Boxes,
    image: "/omi/industry-consumer-products-owner.jpg",
    text: "Tooling support for everyday molded products such as trash containers, blender housings, appliance parts, and durable goods with buyer-facing quality requirements.",
  },
  {
    title: "Medical",
    eyebrow: "Beds, equipment, and molded medical components",
    icon: HeartPulse,
    image: "/omi/industry-medical-bed-owner.jpg",
    text: "Tooling support for medical equipment components such as adjustable bed structures, covers, rails, housings, and functional plastic parts that need consistent fit and repeatable production.",
  },
  {
    title: "Agriculture & Equipment",
    eyebrow: "Tractor, utility, and equipment plastics",
    icon: Factory,
    image: "/omi/industry-agriculture-tractor-owner.jpg",
    text: "Molds for agriculture and equipment components that need robust plastic construction, outdoor durability, clean fit, and practical service-life performance.",
  },
  {
    title: "Heavy Truck",
    eyebrow: "Large-format molded parts",
    icon: Wrench,
    image: "/omi/industry-heavy-truck-owner.jpg",
    text: "Support for truck-related molded components where large geometry, repeatability, structural performance, and final handoff have to stay aligned.",
  },
  {
    title: "Technical & Industrial",
    eyebrow: "Fiber enclosures, ice machines, and housings",
    icon: ShieldCheck,
    image: "/omi/industry-technical-industrial-owner.jpg",
    text: "Mold programs for fiber enclosure boxes, commercial ice-machine components, technical housings, power-tool components, vacuum products, and functional plastic parts with measurable fit requirements.",
  },
];

export const processSteps = [
  {
    title: "Program Review",
    text: "OMI reviews part data, press requirements, material, tolerances, cosmetics, timing, and tooling assumptions before the mold path is framed.",
  },
  {
    title: "Moldflow & 3D Design",
    text: "Design and moldflow review refine the tool concept, cooling approach, cavitation, steel decisions, and 3D design package for customer approval.",
  },
  {
    title: "Tool Build & Assembly",
    text: "Steel, components, machining, bench work, and assembly move through direct oversight by OMI's China-based team.",
  },
  {
    title: "Sampling & FAI",
    text: "Tools are sampled under production conditions with process sheets, first article inspection reports, and reviewable sample feedback.",
  },
  {
    title: "Final Teardown & Release",
    text: "The mold is disassembled, measured, reviewed by mold inspectors, reassembled, protected, and prepared for shipment after release.",
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
    title: "Products",
    href: "/capabilities",
    icon: Ruler,
    text: "See tooling capacity, moldflow support, sampling, and validation details.",
  },
  {
    title: "One Source",
    href: "/process",
    icon: ClipboardCheck,
    text: "Follow the managed path from quote review through final inspection and shipment.",
  },
  {
    title: "Industries",
    href: "/industries",
    icon: Factory,
    text: "Review the markets and part types OMI supports with offshore tooling programs.",
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
