import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, PrimaryLink, SiteFooter, SiteHeader } from "./components/site-shell";
import { homeRoutes, proofPoints } from "./site-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <section className="omi-hero-motion relative isolate min-h-[680px] overflow-hidden bg-[#061525] pt-20 text-white">
        <SiteHeader variant="overlay" />
        <Image
          src="/omi/five-axis-large-tool-machining.jpg"
          alt="Five-axis machining a large polished injection mold tool"
          fill
          priority
          className="omi-hero-image object-cover object-[62%_center]"
          sizes="100vw"
        />
        <Image
          src="/omi/five-axis-cutting-detail.jpg"
          alt=""
          fill
          aria-hidden="true"
          className="omi-hero-cycle omi-hero-cycle-two object-cover object-[48%_center]"
          sizes="100vw"
        />
        <Image
          src="/omi/eight-core-mold-closeup.jpg"
          alt=""
          fill
          aria-hidden="true"
          className="omi-hero-cycle omi-hero-cycle-three object-cover object-[50%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#061525]/68" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#061525_0%,rgba(0,79,249,0.72)_47%,rgba(6,21,37,0.26)_100%)]" />
        <div aria-hidden="true" className="omi-hero-grid absolute inset-0" />
        <div aria-hidden="true" className="omi-hero-scan absolute inset-0" />
        <div aria-hidden="true" className="omi-hero-pulse absolute inset-0" />
        <div aria-hidden="true" className="omi-hero-lightbar absolute inset-x-0 top-20" />
        <div
          className="omi-hero-red-wedge absolute bottom-0 left-0 h-36 w-72 bg-[#BD1816]"
          style={{ clipPath: "polygon(0 35%, 74% 100%, 0 100%)" }}
        />

        <div className="relative z-10 mx-auto grid min-h-[600px] max-w-7xl gap-10 px-4 pb-12 pt-20 sm:px-6 lg:grid-cols-[1fr_20rem] lg:items-end lg:px-8">
          <div className="max-w-4xl">
            <p className="omi-intro-kicker inline-flex border-l-4 border-[#BD1816] bg-white/10 px-4 py-2 text-xs font-extrabold uppercase leading-5 tracking-[0.18em] text-white backdrop-blur">
              World Leader of Zero Tolerance Plastic Injection Molds in 6 Weeks
            </p>
            <h1 className="omi-intro-title mt-7 text-balance text-5xl font-black uppercase leading-[0.98] text-white sm:text-6xl lg:text-[5.1rem]">
              OMI - Fast tooling.
              <br />
              Clear control.
              <br />
              Proven molds.
            </h1>
            <p className="omi-intro-copy mt-7 max-w-3xl text-pretty text-lg font-medium leading-8 text-white/86 sm:text-xl">
              For more than 25 years, Offshore Molds has helped manufacturers move plastic
              injection mold programs from part data to press-ready tooling with western standards,
              offshore speed, and direct U.S. ownership.
            </p>
            <div className="omi-intro-actions mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Start an RFQ</PrimaryLink>
              <Link
                href="/process"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/40 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#222222]"
              >
                One source path <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="omi-intro-badge max-w-52 lg:max-w-none">
            <div className="relative">
              <div
                className="absolute -inset-3 bg-[#BD1816] shadow-2xl"
                style={{ clipPath: "polygon(9% 0, 100% 0, 91% 100%, 0 100%)" }}
              />
              <div className="relative overflow-hidden border-4 border-white bg-white shadow-[0_30px_80px_rgba(0,0,0,0.38)] ring-2 ring-[#004ff9]">
                <Image
                  src="/omi/anniversary-25-years.png"
                  alt="Celebrating 25 years in business with Offshore Molds"
                  width={900}
                  height={900}
                  className="h-auto w-full object-contain"
                  sizes="(min-width: 1024px) 320px, 208px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="omi-hero-progress absolute bottom-0 left-0 right-0 z-20" />
      </section>

      <section className="border-y border-[#cfd6d9] bg-[#e9edef]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#cfd6d9] sm:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.value}
              className="omi-proof-cell flex min-h-36 flex-col items-center justify-center bg-white px-4 py-7 text-center sm:px-6"
            >
              <p className="omi-proof-value text-2xl font-black tracking-tight text-[#004ff9] sm:text-3xl lg:text-4xl">
                {point.value}
              </p>
              <p className="mt-3 max-w-44 text-base font-medium leading-6 text-[#666]">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0b304d] py-18 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              One Source
            </p>
            <h2 className="mt-6 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">
              Everything important stays in one accountable tooling path.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              At OMI, you get experienced guidance, documented decisions, and mold-building
              capacity through one managed channel. Key tooling suppliers and partner resources are
              concentrated within roughly a 25-mile radius, helping reduce backorder delays and keep
              each build moving.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="border border-white/14 bg-white/8 p-4">
                <p className="text-3xl font-black text-white">25 mi</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/72">
                  supply network radius for key tooling resources
                </p>
              </div>
              <div className="border border-white/14 bg-white/8 p-4">
                <p className="text-3xl font-black text-white">Less Wait</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/72">
                  fewer supply handoffs and less exposure to backorder parts
                </p>
              </div>
            </div>
            <div className="mt-8">
              <PrimaryLink href="/process">More about One Source</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
                Explore OMI
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
                The details are organized around the buyer&apos;s next question.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#666]">
              Review the products, the One Source build path, supported industries, and quality
              proof points in their own sections. The homepage gives the story; the detail pages
              carry the evidence.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-[#d7dcde] md:grid-cols-2 lg:grid-cols-4">
            {homeRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className="group bg-white p-6 transition hover:bg-[#004ff9]"
                >
                  <Icon aria-hidden="true" className="text-[#BD1816] transition group-hover:text-white" />
                  <h3 className="mt-6 text-2xl font-black text-[#222222] transition group-hover:text-white">
                    {route.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666] transition group-hover:text-white/84">
                    {route.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition group-hover:text-white">
                    More <ArrowRight aria-hidden="true" size={18} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Build strong tooling together."
        copy="Send part files, press target, material, tolerance concerns, annual volume, and timing. OMI will shape those details into a practical quote conversation."
      />
      <SiteFooter />
    </main>
  );
}
