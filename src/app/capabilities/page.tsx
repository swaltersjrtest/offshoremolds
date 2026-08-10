import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import {
  CtaBand,
  PageHero,
  PrimaryLink,
  SiteFooter,
} from "../components/site-shell";
import { capabilities, proofPoints } from "../site-data";

export const metadata: Metadata = {
  title: "Products | Offshore Molds",
  description:
    "Explore Offshore Molds plastic injection mold products and services, including custom tooling, large tools, moldflow, design, sampling, validation, and U.S.-managed offshore support.",
};

const productSections = [
  {
    number: "01",
    title: "Plastic injection molds",
    image: "/omi/eight-core-mold-composite.jpg",
    imageAlt: "Eight-core plastic injection mold tooling",
    copy:
      "OMI builds western-standard SPI molds for production programs that need speed without loose ownership. Tool concepts, steel choices, components, design approvals, and sampling expectations are kept visible from the start.",
    href: "/process",
  },
  {
    number: "02",
    title: "Large tool programs",
    image: "/omi/five-axis-large-tool-machining.jpg",
    imageAlt: "Five-axis machining a large mold tool",
    copy:
      "Medium and large press programs need more than available capacity. OMI aligns part size, press target, mold construction, handling requirements, sampling, inspection, and shipment around the receiving molder.",
    href: "/industries",
    reverse: true,
  },
  {
    number: "03",
    title: "Moldflow, design, sampling",
    image: "/omi/moldflow-design.png",
    imageAlt: "Moldflow design review for injection mold tooling",
    copy:
      "The tooling path starts before steel. OMI reviews the product data, simulation needs, cavitation, cooling, shutoffs, materials, and validation plan so each build decision has a practical reason.",
    href: "/quality",
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        eyebrow="Products"
        title="Injection mold programs from one managed source."
        copy="OMI connects design, moldflow, offshore build capacity, sampling, inspection, and U.S. project control into one accountable tooling path."
        image="/omi/five-axis-machining-head.jpg"
        imageAlt="Five-axis machining head cutting a polished mold cavity"
      />

      <section className="bg-[#061525] py-18 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Products and services
            </p>
            <h2 className="mt-6 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">
              The product idea enters as data. It leaves as a sampled mold.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              OMI&apos;s role is to keep the build connected. The customer brings the part, press
              target, material, and launch need. OMI turns those inputs into a mold plan, manages
              the offshore work, proves the tool, and prepares it for production.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Start an RFQ</PrimaryLink>
              <Link
                href="/process"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/35 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#222222]"
              >
                See One Source <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="omi-motion-stage relative min-h-[32rem] overflow-hidden bg-[#061525] shadow-2xl">
            <Image
              src="/omi/five-axis-machining-pass.jpg"
              alt="Five-axis machining pass on a precision injection mold"
              fill
              className="omi-reel-image omi-reel-image-one object-cover object-[50%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Image
              src="/omi/polished-inserts.png"
              alt=""
              fill
              aria-hidden="true"
              className="omi-reel-image omi-reel-image-two object-cover object-[48%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Image
              src="/omi/sampling-validation.jpg"
              alt=""
              fill
              aria-hidden="true"
              className="omi-reel-image omi-reel-image-three object-cover object-[48%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[#061525]/36" />
            <div aria-hidden="true" className="omi-motion-grid absolute inset-0" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="omi-motion-track mb-4 h-1 overflow-hidden bg-white/20" />
              <p className="max-w-lg text-xl font-black uppercase leading-tight text-white">
                Design. Build. Sample. Inspect. Ship ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
                What OMI builds
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
                Tooling competence for programs that need proof.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#666]">
              The capability is not only machining capacity. It is the combination of mold-maker
              judgement, simulation review, build oversight, sampling feedback, and final inspection
              that makes offshore tooling practical.
            </p>
          </div>

          <div className="mt-12 grid gap-14">
            {productSections.map((section) => (
              <article
                key={section.number}
                className="omi-number-panel grid overflow-hidden bg-[#0b304d] text-white shadow-2xl lg:grid-cols-2"
              >
                <div
                  className={[
                    "omi-panel-media relative min-h-80 overflow-hidden bg-[#08243d]",
                    section.reverse ? "lg:order-2" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="omi-floating-image object-cover object-[48%_center]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div aria-hidden="true" className="omi-card-sweep absolute inset-0" />
                  <div className="absolute inset-0 bg-[#061525]/18" />
                </div>

                <div className="relative flex min-h-80 flex-col justify-center p-6 sm:p-10 lg:p-14">
                  <span className="omi-section-number absolute -left-4 top-4 select-none text-[7rem] font-black leading-none text-white/12 sm:text-[10rem]">
                    {section.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="max-w-2xl text-balance text-3xl font-black uppercase leading-tight sm:text-4xl">
                      {section.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                      {section.copy}
                    </p>
                    <Link
                      href={section.href}
                      className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 border border-[#BD1816] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#BD1816]"
                    >
                      More <ArrowRight aria-hidden="true" size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
                Service areas
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">
                One tooling path. Multiple points of control.
              </h2>
            </div>
            <a
              href="mailto:information@offshoremolds.com?subject=Capabilities%20question"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#004ff9] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition hover:bg-[#004ff9] hover:text-white"
            >
              Ask a tooling question <Mail aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="mt-12 grid gap-px bg-[#d7dcde] md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="group bg-white p-6 transition hover:bg-[#004ff9]">
                  <Icon aria-hidden="true" className="text-[#BD1816] transition group-hover:text-white" size={28} />
                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-[#BD1816] transition group-hover:text-white">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-[#222222] transition group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666] transition group-hover:text-white/84">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
              Program range
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
              The numbers stay attached to the build plan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#666]">
              Press range, timing, sampling, and tonnage expectations are not treated as marketing
              claims. They are inputs that shape the mold design, build strategy, and final release.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#cfd6d9]">
            {proofPoints.map((point) => (
              <div key={point.value} className="omi-proof-cell flex min-h-36 flex-col items-center justify-center bg-white px-4 py-7 text-center sm:px-6">
                <p className="omi-proof-value text-2xl font-black tracking-tight text-[#004ff9] sm:text-3xl">
                  {point.value}
                </p>
                <p className="mt-3 max-w-44 text-sm font-semibold leading-5 text-[#666]">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Bring OMI into the product discussion early."
        copy="Send the part files, press target, material, critical tolerances, and launch timing. OMI will shape those requirements into a practical tooling path."
      />
      <SiteFooter />
    </main>
  );
}
