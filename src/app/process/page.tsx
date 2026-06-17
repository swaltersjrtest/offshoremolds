import type { Metadata } from "next";
import { ClipboardCheck, FileCheck2, Gauge, ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, SiteFooter } from "../components/site-shell";
import { processSteps } from "../site-data";

export const metadata: Metadata = {
  title: "Process | Offshore Molds",
  description:
    "Review the Offshore Molds process from quote review and moldflow through tool build, sampling, first article inspection, and final shipment approval.",
};

const checkpoints = [
  {
    title: "Early technical review",
    icon: Gauge,
    text: "Part data, material, press requirements, tolerances, and launch timing are reviewed before the tool concept is finalized.",
  },
  {
    title: "Documented approvals",
    icon: ClipboardCheck,
    text: "Design approval, schedule updates, moldflow review, and milestone checklists keep each decision visible.",
  },
  {
    title: "Sampling before release",
    icon: FileCheck2,
    text: "Molds are run under normal molding conditions with process sheets and first article reports supplied for approval.",
  },
  {
    title: "Final teardown check",
    icon: ShieldCheck,
    text: "The mold is disassembled, measured, inspected, reassembled, protected, and prepared for shipment after approval.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#222222]">
      <PageHero
        eyebrow="Process"
        title="Visible Handoffs"
        copy="A practical path from quote review to final inspection, built to remove offshore sourcing uncertainty before the mold leaves China."
        image="/omi/slide-2.jpg"
        imageAlt="Precision plastic injection mold tooling process"
      />

      <section className="bg-[#313131] py-18 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#e5402d]">
                Build path
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Every handoff is visible before the tool ships.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#e7e7e7]">
                OMI&apos;s process is strongest where buyers feel the most risk: design approval,
                overseas build visibility, sampling, first article inspection, and final teardown
                review.
              </p>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="grid gap-5 border border-white/12 bg-white/[0.04] p-5 sm:grid-cols-[4rem_1fr]"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#e5402d] text-xl font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#e7e7e7]">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1e5299]">
              Control points
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
              The right proof at the right point in the build.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {checkpoints.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="border border-[#ddd] bg-[#f7f7f7] p-6">
                  <Icon aria-hidden="true" className="text-[#e5402d]" />
                  <h3 className="mt-6 text-2xl font-black text-[#222222]">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#777]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Put the schedule and proof points on the table early."
        copy="Bring OMI in before steel is committed so the team can review timing, build assumptions, sampling requirements, and final approval expectations."
      />
      <SiteFooter />
    </main>
  );
}
