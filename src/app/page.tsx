import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Factory,
  FileCheck2,
  Gauge,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

const proofPoints = [
  {
    value: "6 weeks",
    label: "target build time after design approval",
  },
  {
    value: "0-3500T",
    label: "plastic injection mold programs supported",
  },
  {
    value: "2001",
    label: "founded by experienced mold makers",
  },
  {
    value: "3 hr",
    label: "minimum production-condition sampling run",
  },
];

const pillars = [
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

const capabilities = [
  {
    title: "Custom Tooling",
    eyebrow: "Concept to steel",
    icon: Wrench,
    image: "/omi/custom-tools.jpg",
    text: "Complex plastic injection molds designed, built, sampled, and documented for U.S. production expectations.",
  },
  {
    title: "Large Tools",
    eyebrow: "Up to 3500T",
    icon: Boxes,
    image: "/omi/shop-1.jpg",
    text: "Large-format programs managed through OMI's owned and partner tooling capacity in southern China.",
  },
  {
    title: "Moldflow & Design",
    eyebrow: "Early risk removal",
    icon: Gauge,
    image: "/omi/slide-2.jpg",
    text: "In-house design and moldflow teams review manufacturability, material behavior, and tooling strategy before steel is cut.",
  },
  {
    title: "Sampling & Validation",
    eyebrow: "Run it first",
    icon: Microscope,
    image: "/omi/sampling-8.jpg",
    text: "Molds are sampled under normal molding conditions with process parameters, first articles, and supporting documentation.",
  },
];

const processSteps = [
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

const qualityItems = [
  "Domestic or Finkl P-20 and H-13 steel options",
  "DME or Progressive equivalent standard components",
  "CMM first article inspection against customer drawings",
  "Detailed checklists for major tooling milestones",
  "One-year warranty covering materials and workmanship",
  "Direct-to-molder shipment after final approval",
];

const faqs = [
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6f5] text-[#18201f]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            aria-label="Offshore Molds home"
            className="flex items-center gap-3"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-[4px] bg-white/90 p-1 shadow-sm">
              <Image
                src="/omi/logo.png"
                alt="Offshore Molds logo"
                width={54}
                height={54}
                priority
              />
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-white sm:block">
              Offshore Molds
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 rounded-[4px] bg-[#101716]/70 px-5 py-3 text-sm font-medium text-white backdrop-blur md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#ffb12a]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:3034210712"
            className="inline-flex min-h-11 items-center gap-2 rounded-[4px] bg-[#ef4423] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#c73319]"
          >
            <Phone aria-hidden="true" size={17} />
            <span className="hidden sm:inline">303-421-0712</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-[92vh] items-end overflow-hidden"
      >
        <Image
          src="/omi/slide-1.jpg"
          alt="Offshore Molds tooling facility floor"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#101716]/55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,23,22,0.95)_0%,rgba(16,23,22,0.72)_38%,rgba(16,23,22,0.28)_100%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 pb-10 pt-32 sm:px-6 lg:grid-cols-[1.08fr_0.72fr] lg:px-8 lg:pb-14">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border-l-4 border-[#ffb12a] bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffd58b] backdrop-blur">
              <Sparkles aria-hidden="true" size={15} />
              U.S.-managed offshore tooling
            </div>
            <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              Offshore Molds
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-xl leading-8 text-[#e8efed] sm:text-2xl">
              Plastic injection molds built for aggressive lead times, tight
              process control, and production-ready handoff from the first cut
              of steel to final sampling.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:bstone@offshoremolds.com?subject=Tooling%20RFQ"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ef4423] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#c73319]"
              >
                Start an RFQ <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a
                href="#capabilities"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-white/35 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#18201f]"
              >
                See capabilities <Ruler aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <div className="grid gap-3 self-end sm:grid-cols-2 lg:grid-cols-1">
            <div className="border border-white/15 bg-[#f4f6f5]/95 p-5 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef4423]">
                Lead-time promise
              </p>
              <p className="mt-3 text-3xl font-black text-[#101716]">
                6-week target to T1
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4e5a56]">
                From design approval for molds up to 3500T, backed by daily
                overseas oversight and U.S. customer support.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#ffb12a] p-4 text-[#101716]">
                <p className="text-2xl font-black">1 yr</p>
                <p className="mt-1 text-sm font-bold uppercase leading-5">
                  workmanship warranty
                </p>
              </div>
              <div className="bg-[#0f766e] p-4 text-white">
                <p className="text-2xl font-black">CMM</p>
                <p className="mt-1 text-sm font-bold uppercase leading-5">
                  part inspection reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8dedb] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#d8dedb] px-0 sm:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.value} className="bg-white px-4 py-8 sm:px-6">
              <p className="text-4xl font-black tracking-tight text-[#18201f]">
                {point.value}
              </p>
              <p className="mt-2 max-w-44 text-sm font-semibold leading-5 text-[#58635f]">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f6f5] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ef4423]">
                Built like a tooling partner
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#101716] sm:text-5xl">
                The Cavalier-style clarity and SyBridge-level proof OMI was
                missing.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#4f5b57]">
              Offshore sourcing only works when the buyer can see the work,
              trust the standards, and know who owns the outcome. This rebuild
              puts OMI&apos;s strongest story forward: experienced U.S. mold makers,
              China-based execution, direct QC, and a documented path to
              production readiness.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="border border-[#d8dedb] bg-white p-6 shadow-sm"
                >
                  <Icon aria-hidden="true" className="text-[#ef4423]" />
                  <h3 className="mt-6 text-2xl font-black text-[#101716]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#58635f]">
                    {pillar.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0f766e]">
                Capabilities
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#101716] sm:text-5xl">
                Full-cycle tooling, without the usual offshore blind spots.
              </h2>
            </div>
            <a
              href="mailto:information@offshoremolds.com?subject=Capabilities%20question"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-[#18201f] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#18201f] transition hover:bg-[#18201f] hover:text-white"
            >
              Ask a tooling question <Mail aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group overflow-hidden border border-[#d8dedb] bg-[#f4f6f5]"
                >
                  <div className="relative h-56">
                    <Image
                      src={item.image}
                      alt={`${item.title} at Offshore Molds`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ef4423]">
                        {item.eyebrow}
                      </p>
                      <Icon aria-hidden="true" size={20} className="text-[#0f766e]" />
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-[#101716]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#58635f]">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#111817] py-18 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ffb12a]">
                Process
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Every handoff is visible before the tool leaves China.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#cbd7d2]">
                OMI&apos;s legacy process is strongest where buyers feel the most
                risk: design approval, overseas build visibility, sampling,
                first article inspection, and final teardown review.
              </p>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="grid gap-5 border border-white/12 bg-white/[0.04] p-5 sm:grid-cols-[4rem_1fr]"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#ffb12a] text-xl font-black text-[#101716]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#cbd7d2]">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quality" className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative h-80 overflow-hidden border border-[#d8dedb] sm:col-span-2">
              <Image
                src="/omi/qc-1.jpg"
                alt="CMM inspection at Offshore Molds"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative h-56 overflow-hidden border border-[#d8dedb]">
              <Image
                src="/omi/mold-inspection-1.jpg"
                alt="Tooling inspection detail"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative h-56 overflow-hidden border border-[#d8dedb]">
              <Image
                src="/omi/mold-construction-8.jpg"
                alt="Mold construction detail"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ef4423]">
              Quality control
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#101716] sm:text-5xl">
              Built offshore. Checked like it has to run here tomorrow.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4f5b57]">
              The old site buried OMI&apos;s best risk reducers. The rebuild puts
              them up front: CMM reports, standard components, known steel,
              production-condition sampling, detailed checklists, and final mold
              inspections by experienced mold makers.
            </p>

            <div className="mt-8 grid gap-3">
              {qualityItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-l-4 border-[#0f766e] bg-[#f4f6f5] px-4 py-3"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    size={20}
                    className="mt-0.5 shrink-0 text-[#0f766e]"
                  />
                  <p className="text-base font-semibold text-[#28312e]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f5] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0f766e]">
                Buyer assurance
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#101716] sm:text-5xl">
                Answers before procurement has to ask.
              </h2>
            </div>

            <div className="grid gap-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="border border-[#d8dedb] bg-white p-6"
                >
                  <h3 className="flex items-start gap-3 text-xl font-black text-[#101716]">
                    <ShieldCheck
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-[#ef4423]"
                      size={22}
                    />
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#58635f]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#101716] py-18 text-white sm:py-24"
      >
        <Image
          src="/omi/slide-3.jpg"
          alt="Precision mold steel detail"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#101716]/80" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ffb12a]">
              Start the conversation
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              If the timeline is critical, make the tooling path visible now.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d5dfda]">
              Send part files, target press size, material, annual volume,
              critical tolerances, and launch timing. OMI can turn that into a
              practical quote conversation quickly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:bstone@offshoremolds.com?subject=Tooling%20RFQ&body=Project%20name:%0APart%20files:%0ATarget%20press%20size:%0AMaterial:%0AAnnual%20volume:%0ACritical%20tolerances:%0ALaunch%20timing:%0A"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ef4423] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#c73319]"
              >
                Email an RFQ <FileCheck2 aria-hidden="true" size={18} />
              </a>
              <a
                href="tel:3034210712"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-white/35 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#101716]"
              >
                Call the U.S. office <Phone aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <aside className="border border-white/15 bg-white p-6 text-[#18201f] shadow-2xl">
            <div className="flex items-center gap-3 border-b border-[#d8dedb] pb-5">
              <Building2 aria-hidden="true" className="text-[#ef4423]" />
              <div>
                <h3 className="text-2xl font-black">Offshore Molds, Inc.</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64706c]">
                  U.S. and China support
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5">
              <a
                href="tel:3034210712"
                className="flex items-start gap-3 transition hover:text-[#ef4423]"
              >
                <Phone aria-hidden="true" className="mt-1 shrink-0" size={20} />
                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
                    Phone
                  </span>
                  303-421-0712
                </span>
              </a>
              <a
                href="mailto:information@offshoremolds.com"
                className="flex items-start gap-3 transition hover:text-[#ef4423]"
              >
                <Mail aria-hidden="true" className="mt-1 shrink-0" size={20} />
                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
                    General
                  </span>
                  information@offshoremolds.com
                </span>
              </a>
              <a
                href="mailto:bstone@offshoremolds.com"
                className="flex items-start gap-3 transition hover:text-[#ef4423]"
              >
                <Mail aria-hidden="true" className="mt-1 shrink-0" size={20} />
                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
                    Sales
                  </span>
                  bstone@offshoremolds.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 shrink-0" size={20} />
                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
                    U.S. office
                  </span>
                  4251 Kipling St, Suite 420
                  <br />
                  Wheat Ridge, CO 80033
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 aria-hidden="true" className="mt-1 shrink-0" size={20} />
                <span>
                  <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
                    China office
                  </span>
                  Huang Jiang Town, Dongguan
                  <br />
                  +(86 769) 82330086
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="bg-white px-4 py-8 text-[#58635f] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            Copyright 2026 Offshore Molds, Inc. Rebuilt for a faster, clearer
            tooling conversation.
          </p>
          <div className="flex items-center gap-3 text-sm font-bold">
            <a href="#capabilities" className="hover:text-[#ef4423]">
              Capabilities
            </a>
            <a href="#quality" className="hover:text-[#ef4423]">
              Quality
            </a>
            <a href="#contact" className="hover:text-[#ef4423]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
