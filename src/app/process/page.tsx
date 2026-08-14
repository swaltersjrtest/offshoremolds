import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, FileCheck2, Gauge, ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, PrimaryLink, SiteFooter } from "../components/site-shell";
import { processSteps } from "../site-data";

export const metadata: Metadata = {
  title: "One Source | Offshore Molds",
  description:
    "Review Offshore Molds' One Source process from quote review and moldflow through design, tool build, sampling, first article inspection, final teardown, and shipment approval.",
};

const checkpoints = [
  {
    title: "Early technical review",
    icon: Gauge,
    text: "Part data, material, press requirements, tolerances, cosmetic expectations, and launch timing are reviewed before the tool concept is finalized.",
  },
  {
    title: "Documented approvals",
    icon: ClipboardCheck,
    text: "Design approval, schedule updates, moldflow review, and milestone checklists keep decisions visible before they become expensive.",
  },
  {
    title: "Local supply network",
    icon: Gauge,
    text: "Key tooling suppliers and partner resources are concentrated within roughly a 25-mile radius, reducing backorder exposure and keeping the build path moving.",
  },
  {
    title: "Sampling before release",
    icon: FileCheck2,
    text: "Molds are run under normal molding conditions with process sheets, first articles, and inspection reports supplied for approval.",
  },
  {
    title: "Final teardown check",
    icon: ShieldCheck,
    text: "The mold is disassembled, measured, inspected, reassembled, protected, and prepared for shipment after customer release.",
  },
];

const loopSteps = ["Review", "Design", "Build", "Sample", "Inspect", "Ship"];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        eyebrow="One Source"
        title="Everything important stays in one tooling path."
        copy="From first quote review to final shipment approval, OMI keeps design, offshore build execution, sampling, inspection, and customer communication connected."
        image="/omi/five-axis-cutting-detail.jpg"
        imageAlt="Five-axis cutting detail on a polished mold tool"
      />

      <section className="bg-[#061525] py-18 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div>
            <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              One Source
            </p>
            <h2 className="mt-6 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">
              The all-around tooling package, without the handoff fog.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              OMI brings the pieces together: product review, moldflow, tool design, China-based
              build oversight, production-condition sampling, inspection documentation, final
              teardown, and shipment preparation. Each phase feeds the next instead of disappearing
              into a separate sourcing lane. The result is a smoother offshore build process, helped
              by logistics partners and nearby tooling suppliers that keep critical resources close
              to the work instead of waiting on distant backorder channels.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="border border-white/14 bg-white/8 p-4">
                <p className="text-3xl font-black text-white">25 mi</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/72">
                  approximate radius for key suppliers and partner resources
                </p>
              </div>
              <div className="border border-white/14 bg-white/8 p-4">
                <p className="text-3xl font-black text-white">Seamless</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/72">
                  fewer sourcing delays between design, build, sampling, and release
                </p>
              </div>
            </div>
            <div className="mt-8">
              <PrimaryLink href="/contact">Start an RFQ</PrimaryLink>
            </div>
          </div>

          <div className="omi-loop-visual relative min-h-[34rem] overflow-hidden bg-[#061525] shadow-2xl">
            <Image
              src="/omi/five-axis-finished-cavity.jpg"
              alt="Finished mold cavity used for a closed-loop tooling review"
              fill
              className="omi-floating-image object-cover object-[52%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[#061525]/38" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061525]/82 via-[#061525]/10 to-transparent" />
            <div aria-hidden="true" className="omi-loop-orbit absolute inset-8 hidden sm:block">
              <span className="omi-loop-ring omi-loop-ring-one" />
              <span className="omi-loop-ring omi-loop-ring-two" />
              <span className="omi-loop-dot omi-loop-dot-one" />
              <span className="omi-loop-dot omi-loop-dot-two" />
            </div>
            <div
              className="absolute right-0 top-0 h-36 w-52 bg-[#BD1816]"
              style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%)" }}
            />
            <div className="absolute bottom-5 left-5 right-5 z-10 max-w-xl bg-[#061525]/84 p-5 backdrop-blur">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
                Closed-loop tooling
              </p>
              <p className="mt-2 text-base font-semibold leading-7 text-white/78">
                Build feedback returns to design, sampling, and the next practical decision.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {loopSteps.map((step, index) => (
                  <div key={step} className="omi-loop-step border border-white/14 bg-white/8 px-3 py-2">
                    <span className="block text-xs font-black text-[#004ff9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
                Build path
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
                From product idea to production-ready mold.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#666]">
              The sequence is simple on purpose. OMI keeps each phase visible so the customer can
              approve the right decisions at the right time and receive a tool with fewer unknowns.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-[#cfd6d9]">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-5 bg-white p-5 sm:grid-cols-[5rem_1fr] sm:p-7"
              >
                <div className="flex h-16 w-16 items-center justify-center bg-[#004ff9] text-xl font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#222222]">{step.title}</h3>
                  <p className="mt-2 max-w-4xl text-base leading-7 text-[#666]">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
              Control points
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
              The right proof at the right point in the build.
            </h2>
          </div>

          <div className="mt-12 grid gap-px bg-[#d7dcde] md:grid-cols-2 lg:grid-cols-4">
            {checkpoints.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="group bg-white p-6 transition hover:bg-[#004ff9]">
                  <Icon aria-hidden="true" className="text-[#BD1816] transition group-hover:text-white" size={30} />
                  <h3 className="mt-6 text-2xl font-black text-[#222222] transition group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#666] transition group-hover:text-white/84">
                    {item.text}
                  </p>
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
