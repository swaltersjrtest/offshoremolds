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
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-[#eef1f2] pt-20 lg:min-h-[76vh]">
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
          className="absolute inset-y-20 left-0 w-full bg-[#1e5299] md:w-[66%]"
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

            <div className="mt-6 flex max-w-sm overflow-hidden border border-white bg-white text-[#222222] shadow-2xl ring-2 ring-[#e5402d]/80 md:hidden">
              <p className="flex min-w-24 items-center justify-center bg-[#e5402d] px-4 text-5xl font-black leading-none text-white">
                {anniversary.value}
              </p>
              <div className="flex-1 p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#123962]">
                  {anniversary.title}
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-[#555]">
                  Years of U.S.-managed offshore tooling support.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Start an RFQ</PrimaryLink>
              <Link
                href="/capabilities"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/70 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#222222]"
              >
                See capabilities <Ruler aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden max-w-sm gap-3 self-end justify-self-end md:grid">
            <div className="overflow-hidden border border-white bg-white text-[#222222] shadow-2xl ring-2 ring-[#e5402d]/70">
              <div className="h-2 bg-[#e5402d]" />
              <div className="grid grid-cols-[6.5rem_1fr] items-stretch">
                <div className="flex items-center justify-center bg-[#123962] px-4 text-white">
                  <p className="text-5xl font-black leading-none">{anniversary.value}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#123962]">
                    {anniversary.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#555]">
                    Years of OMI tooling support in 2026, grounded in U.S. project ownership and
                    China-based execution.
                  </p>
                </div>
              </div>
              <p className="border-t border-[#ddd] bg-[#f7f7f7] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#e5402d]">
                Founded in 2001
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#e5402d] p-4 text-white">
                <p className="text-xl font-black">6 wk</p>
                <p className="mt-1 text-sm font-bold uppercase leading-5">
                  target after approval
                </p>
              </div>
              <div className="bg-[#123962] p-4 text-white">
                <p className="text-xl font-black">CMM</p>
                <p className="mt-1 text-sm font-bold uppercase leading-5">
                  part inspection reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#cfd6d9] bg-[#e9edef]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#cfd6d9] px-0 sm:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.value} className="bg-[#f8faf9] px-4 py-7 sm:px-6">
              <p className="whitespace-nowrap text-3xl font-black tracking-tight text-[#1e5299] sm:text-4xl">
                {point.value}
              </p>
              <p className="mt-3 max-w-44 text-base font-medium leading-6 text-[#777]">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1e5299]">
              {anniversary.title}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
              Precision molds for programs that cannot drift.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#777]">
              {anniversary.text} The work is still personal: experienced mold makers, clear
              approvals, visible sampling, and direct answers when timing matters.
            </p>
            <div className="mt-8">
              <PrimaryLink href="/process">See the build path</PrimaryLink>
            </div>
          </div>
          <div className="relative min-h-96 overflow-hidden bg-[#123962]">
            <Image
              src="/omi/mold-construction-8.jpg"
              alt="Precision mold construction detail"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div
              className="absolute bottom-0 left-0 h-32 w-56 bg-[#1660c4]"
              style={{ clipPath: "polygon(0 0, 70% 100%, 0 100%)" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#e9edef] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1e5299]">
                Full-lifecycle tooling partner
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
                From tool concept to final handoff, every step has an owner.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#777]">
              Offshore sourcing only works when the buyer can see the work, trust the standards,
              and know who owns the outcome. OMI brings experienced U.S. mold makers, China-based
              execution, direct QC, and a documented path to production readiness.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-[#ddd] md:grid-cols-4">
            {lifecycleHighlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white p-6 transition hover:bg-[#123962]"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#1e5299]">
                  {item.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[#777] transition group-hover:text-white">
                  {item.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-[#222222] transition group-hover:text-[#e5402d]">
                  Learn more <ArrowRight aria-hidden="true" size={18} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article key={pillar.title} className="border border-[#ddd] bg-white p-6 shadow-sm">
                  <Icon aria-hidden="true" className="text-[#1e5299]" />
                  <h3 className="mt-6 text-2xl font-black text-[#222222]">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#777]">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#1e5299]">
              Explore OMI
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#222222] sm:text-5xl">
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
                  className="group border border-[#ddd] bg-[#f7f7f7] p-6 transition hover:border-[#e5402d] hover:bg-white"
                >
                  <Icon aria-hidden="true" className="text-[#e5402d]" />
                  <h3 className="mt-6 text-2xl font-black text-[#222222]">{route.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#777]">{route.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-[#1e5299]">
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
