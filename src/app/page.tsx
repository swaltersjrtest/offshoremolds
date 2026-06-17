import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ruler } from "lucide-react";
import { CtaBand, PrimaryLink, SiteFooter, SiteHeader } from "./components/site-shell";
import {
  anniversary,
  homeRoutes,
  lifecycleHighlights,
  pillars,
  proofPoints,
} from "./site-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#18201f]">
      <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-white pt-20 lg:min-h-[76vh]">
        <SiteHeader variant="overlay" />
        <Image
          src="/omi/slide-1.jpg"
          alt="Offshore Molds tooling facility floor"
          fill
          priority
          className="object-cover object-[68%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/20" />
        <div
          className="absolute inset-y-20 left-0 w-full bg-[#087f93] md:w-[66%]"
          style={{ clipPath: "polygon(0 0, 78% 0, 100% 100%, 0 100%)" }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 pb-8 pt-20 sm:px-6 md:grid-cols-[0.95fr_0.85fr] lg:px-8 lg:pb-12">
          <div className="max-w-2xl text-white">
            <div className="mb-5 inline-flex items-center border-l-4 border-white bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              U.S.-managed offshore tooling
            </div>
            <h1 className="text-balance text-4xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
              Precision tooling.
              <br />
              Offshore speed.
              <br />
              U.S. control.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-white sm:text-xl">
              Offshore Molds builds plastic injection molds with the clear ownership,
              documented validation, and fast handoff complex programs need.
            </p>

            <div className="mt-6 flex max-w-sm items-center gap-4 border border-white/70 bg-white/95 p-4 text-[#101716] shadow-xl md:hidden">
              <p className="text-4xl font-black leading-none text-[#087f93]">
                {anniversary.value}
              </p>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087f93]">
                  {anniversary.title}
                </p>
                <p className="mt-1 text-sm font-medium leading-5 text-[#4e5a56]">
                  U.S.-managed offshore tooling support.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Start an RFQ</PrimaryLink>
              <Link
                href="/capabilities"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/70 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#18201f]"
              >
                See capabilities <Ruler aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden max-w-sm gap-3 self-end justify-self-end md:grid">
            <div className="border border-white/70 bg-white/95 p-5 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#14a8bd]">
                {anniversary.title}
              </p>
              <p className="mt-3 text-4xl font-black text-[#101716]">{anniversary.value}</p>
              <p className="mt-2 text-sm leading-6 text-[#4e5a56]">
                years of OMI tooling support in 2026, grounded in U.S. project ownership and
                China-based execution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#a8e451] p-4 text-[#101716]">
                <p className="text-xl font-black">6 wk</p>
                <p className="mt-1 text-sm font-bold uppercase leading-5">
                  target after approval
                </p>
              </div>
              <div className="bg-[#101716] p-4 text-white">
                <p className="text-xl font-black">CMM</p>
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
            <div key={point.value} className="bg-white px-4 py-7 sm:px-6">
              <p className="whitespace-nowrap text-3xl font-black tracking-tight text-[#087f93] sm:text-4xl">
                {point.value}
              </p>
              <p className="mt-3 max-w-44 text-base font-medium leading-6 text-[#4d5a5a]">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#14a8bd]">
              {anniversary.title}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#101716] sm:text-5xl">
              Precision molds for programs that cannot drift.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4f5b57]">
              {anniversary.text} The work is still personal: experienced mold makers, clear
              approvals, visible sampling, and direct answers when timing matters.
            </p>
            <div className="mt-8">
              <PrimaryLink href="/process">See the build path</PrimaryLink>
            </div>
          </div>
          <div className="relative min-h-96 overflow-hidden bg-[#101716]">
            <Image
              src="/omi/mold-construction-8.jpg"
              alt="Precision mold construction detail"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div
              className="absolute bottom-0 left-0 h-32 w-56 bg-[#12aec4]"
              style={{ clipPath: "polygon(0 0, 70% 100%, 0 100%)" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f5] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#14a8bd]">
                Full-lifecycle tooling partner
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#101716] sm:text-5xl">
                From tool concept to final handoff, every step has an owner.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#4f5b57]">
              Offshore sourcing only works when the buyer can see the work, trust the standards,
              and know who owns the outcome. OMI brings experienced U.S. mold makers, China-based
              execution, direct QC, and a documented path to production readiness.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-[#d8dedb] md:grid-cols-4">
            {lifecycleHighlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white p-6 transition hover:bg-[#101716]"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#14a8bd]">
                  {item.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[#58635f] transition group-hover:text-white">
                  {item.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-[#101716] transition group-hover:text-[#a8e451]">
                  Learn more <ArrowRight aria-hidden="true" size={18} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article key={pillar.title} className="border border-[#d8dedb] bg-white p-6 shadow-sm">
                  <Icon aria-hidden="true" className="text-[#14a8bd]" />
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
