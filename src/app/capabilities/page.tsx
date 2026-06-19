import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import {
  CtaBand,
  PageHero,
  SecondaryLink,
  SiteFooter,
} from "../components/site-shell";
import { capabilities, proofPoints } from "../site-data";

export const metadata: Metadata = {
  title: "Capabilities | Offshore Molds",
  description:
    "Explore Offshore Molds tooling capabilities, including custom injection molds, large tools, moldflow, design, sampling, and validation.",
};

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-white text-[#222222]">
      <PageHero
        eyebrow="Capabilities"
        title="Tooling Capacity"
        copy="Full-cycle plastic injection mold programs with design, moldflow, overseas build oversight, production-condition sampling, and U.S. project support."
        image="/omi/custom-tools.jpg"
        imageAlt="Custom plastic injection tooling at Offshore Molds"
      />

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
                What OMI builds
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#222222] sm:text-5xl">
                Molds with the documentation and oversight buyers need.
              </h2>
            </div>
            <a
              href="mailto:information@offshoremolds.com?subject=Capabilities%20question"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-[#004ff9] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition hover:bg-[#004ff9] hover:text-white"
            >
              Ask a tooling question <Mail aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="group overflow-hidden border border-[#ddd] bg-[#f7f7f7]">
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
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#BD1816]">
                        {item.eyebrow}
                      </p>
                      <Icon aria-hidden="true" size={20} className="text-[#004ff9]" />
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-[#222222]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#777]">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
              Program range
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
              Built for demanding programs, not mystery sourcing.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#777]">
              OMI supports programs from small parts to large tools, using documented approvals
              and close inspection before tools are released for shipment.
            </p>
            <div className="mt-8">
              <SecondaryLink href="/process">See the build process</SecondaryLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#ddd]">
            {proofPoints.map((point) => (
              <div key={point.value} className="bg-white px-4 py-8 sm:px-6">
                <p className="text-4xl font-black tracking-tight text-[#222222]">{point.value}</p>
                <p className="mt-2 max-w-44 text-sm font-semibold leading-5 text-[#777]">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </main>
  );
}
