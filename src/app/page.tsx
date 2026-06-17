import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ruler, Sparkles } from "lucide-react";
import { CtaBand, PrimaryLink, SiteFooter, SiteHeader } from "./components/site-shell";
import { homeRoutes, pillars, proofPoints } from "./site-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6f5] text-[#18201f]">
      <section className="relative isolate flex min-h-[82svh] items-end overflow-hidden lg:min-h-[86vh]">
        <SiteHeader variant="overlay" />
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

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 pb-8 pt-32 sm:px-6 md:grid-cols-[1.08fr_0.72fr] lg:px-8 lg:pb-14">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border-l-4 border-[#ffb12a] bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffd58b] backdrop-blur">
              <Sparkles aria-hidden="true" size={15} />
              U.S.-managed offshore tooling
            </div>
            <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              Offshore Molds
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-xl leading-8 text-[#e8efed] sm:text-2xl">
              Plastic injection molds built for aggressive lead times, tight process control, and
              production-ready handoff from the first cut of steel to final sampling.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Start an RFQ</PrimaryLink>
              <Link
                href="/capabilities"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-white/35 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#18201f]"
              >
                See capabilities <Ruler aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden gap-3 self-end md:grid lg:grid-cols-1">
            <div className="border border-white/15 bg-[#f4f6f5]/95 p-5 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ef4423]">
                Lead-time promise
              </p>
              <p className="mt-3 text-3xl font-black text-[#101716]">6-week target to T1</p>
              <p className="mt-2 text-sm leading-6 text-[#4e5a56]">
                From design approval for molds up to 3500T, backed by daily overseas oversight
                and U.S. customer support.
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
              <p className="text-4xl font-black tracking-tight text-[#18201f]">{point.value}</p>
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
                A clearer site for complex offshore tooling decisions.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#4f5b57]">
              Offshore sourcing only works when the buyer can see the work, trust the standards,
              and know who owns the outcome. OMI brings experienced U.S. mold makers, China-based
              execution, direct QC, and a documented path to production readiness.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article key={pillar.title} className="border border-[#d8dedb] bg-white p-6 shadow-sm">
                  <Icon aria-hidden="true" className="text-[#ef4423]" />
                  <h3 className="mt-6 text-2xl font-black text-[#101716]">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#58635f]">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0f766e]">
              Explore OMI
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#101716] sm:text-5xl">
              The details now live where buyers expect them.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {homeRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className="group border border-[#d8dedb] bg-[#f4f6f5] p-6 transition hover:border-[#ef4423] hover:bg-white"
                >
                  <Icon aria-hidden="true" className="text-[#ef4423]" />
                  <h3 className="mt-6 text-2xl font-black text-[#101716]">{route.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#58635f]">{route.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-[#0f766e]">
                    Open page <ArrowRight aria-hidden="true" size={18} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Bring OMI into the quote conversation early."
        copy="Send the program constraints first. OMI can help turn the tooling path, timeline, and validation requirements into a practical next step."
      />
      <SiteFooter />
    </main>
  );
}
