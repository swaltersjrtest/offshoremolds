import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, PrimaryLink, SiteFooter, SiteHeader } from "./components/site-shell";
import { anniversary, homeRoutes, lifecycleHighlights, proofPoints } from "./site-data";

const homeFeaturePanels = [
  {
    number: "01",
    eyebrow: "Injection mold programs",
    title: "High-precision molds built for western production standards.",
    image: "/omi/eight-core-mold-composite.jpg",
    imageAlt: "Eight-core injection mold tooling built for a production program",
    href: "/capabilities",
    cta: "See capabilities",
    copy:
      "OMI supports single-cavity and multicavity tools from medium mold tonnage through large 3500T programs. Each build is managed around the receiving molder's standards, not around vague offshore assumptions.",
  },
  {
    number: "02",
    eyebrow: "Moldflow, design, build",
    title: "One controlled path from part data to steel approval.",
    image: "/omi/moldflow-design.png",
    imageAlt: "Moldflow and design review for plastic injection mold tooling",
    href: "/process",
    cta: "See process",
    copy:
      "Design review, moldflow, tool concept, machining, and build checkpoints are tied together by a visible process. Buyers get clear decisions before steel moves and direct answers when timing gets tight.",
    reverse: true,
  },
  {
    number: "03",
    eyebrow: "Sampling and validation",
    title: "Proof before shipment, support after arrival.",
    image: "/omi/sampling-validation.jpg",
    imageAlt: "Injection mold sampling and validation before shipment",
    href: "/quality",
    cta: "See quality",
    copy:
      "Tools are sampled, checked, documented, torn down, protected, and prepared for handoff before release. The goal is simple: unpack the mold, put it in the press, and have fewer surprises.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#061525] text-white">
      <section className="relative isolate overflow-hidden bg-[#061525] pt-20">
        <SiteHeader variant="overlay" />
        <Image
          src="/omi/five-axis-large-tool-machining.jpg"
          alt="Five-axis machining a large polished mold tool"
          fill
          priority
          className="object-cover object-[72%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#061525]/76" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#061525_0%,rgba(0,79,249,0.48)_46%,rgba(6,21,37,0.16)_100%)]" />
        <div
          className="absolute bottom-0 left-0 h-40 w-72 bg-[#BD1816]/90"
          style={{ clipPath: "polygon(0 34%, 68% 100%, 0 100%)" }}
        />

        <div className="relative z-10 mx-auto grid min-h-[680px] w-full max-w-7xl gap-10 px-4 pb-14 pt-20 sm:px-6 lg:grid-cols-[1fr_22rem] lg:items-end lg:px-8">
          <div className="max-w-4xl">
            <p className="inline-block border-l-4 border-[#BD1816] bg-white/8 px-4 py-2 text-xs font-extrabold uppercase leading-5 tracking-[0.18em] text-white backdrop-blur">
              World Leader of Zero Tolerance Plastic Injection Molds in 6 Weeks
            </p>
            <h1 className="mt-7 max-w-5xl text-balance text-5xl font-black uppercase leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-[5.8rem]">
              Precision tooling.
              <br />
              Offshore speed.
              <br />
              U.S. control.
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg font-medium leading-8 text-white/86 sm:text-xl">
              Offshore Molds has been delivering fast western standard SPI molds for over 25
              years. With clear ownership and service second to none, our tools are designed,
              built, and proven to be unpacked and put in the press to run.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/contact">Start an RFQ</PrimaryLink>
              <Link
                href="/process"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/45 bg-white/8 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#222222]"
              >
                View build path <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="max-w-56 lg:max-w-none">
            <div className="relative">
              <div
                className="absolute -inset-3 bg-[#BD1816] shadow-2xl"
                style={{ clipPath: "polygon(9% 0, 100% 0, 91% 100%, 0 100%)" }}
              />
              <div className="relative overflow-hidden border-4 border-white bg-white shadow-[0_30px_80px_rgba(0,0,0,0.42)] ring-2 ring-[#004ff9]">
                <Image
                  src="/omi/anniversary-25-years.png"
                  alt="Celebrating 25 years in business with Offshore Molds"
                  width={900}
                  height={900}
                  className="h-auto w-full object-contain"
                  sizes="(min-width: 1024px) 352px, 224px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#061525]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 px-0 sm:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.value}
              className="flex min-h-36 flex-col items-center justify-center bg-[#08243d] px-4 py-7 text-center sm:px-6"
            >
              <p className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                {point.value}
              </p>
              <p className="mt-3 max-w-44 text-base font-medium leading-6 text-white/62">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#061525] py-18 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#BD1816]">
            OMI - offshore tooling made visible
          </p>
          <h2 className="mx-auto mt-5 max-w-5xl text-balance text-4xl font-black uppercase leading-tight text-white sm:text-6xl">
            Zero tolerance tooling without the offshore guesswork.
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg font-medium leading-8 text-white/72 sm:text-xl">
            {anniversary.text} The work stays practical: experienced mold makers, direct U.S.
            communication, China-based execution, production-condition sampling, and final checks
            before a tool is approved to ship.
          </p>

          <div className="relative mt-14 overflow-hidden bg-[#0b304d] shadow-2xl">
            <div className="relative aspect-[16/7] min-h-72">
              <Image
                src="/omi/five-axis-finished-tool.jpg"
                alt="Finished polished mold tool ready for inspection"
                fill
                className="object-cover object-[52%_center]"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
              <div className="absolute inset-0 bg-[#061525]/28" />
              <div className="absolute bottom-0 left-0 right-0 grid gap-4 bg-[#061525]/78 p-5 text-left backdrop-blur sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
                <p className="text-xl font-black uppercase leading-tight tracking-normal text-white">
                  Designed, built, sampled, and checked before handoff.
                </p>
                <Link
                  href="/quality"
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#BD1816] px-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#BD1816]"
                >
                  Review quality <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b304d] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div>
            <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              One controlled source
            </p>
            <h2 className="mt-6 text-balance text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              From part files to production handoff, every step has an owner.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              OMI gives buyers a practical single path through design review, tool build,
              sampling, inspection, teardown, and shipment. That is where offshore sourcing stops
              feeling distant and starts feeling managed.
            </p>
            <div className="mt-8 grid gap-px bg-white/12 sm:grid-cols-2">
              {lifecycleHighlights.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-[#09263d] p-5 transition hover:bg-[#004ff9]"
                >
                  <span className="text-sm font-black text-[#BD1816] transition group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-black uppercase text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/64 transition group-hover:text-white/86">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative min-h-[30rem] overflow-hidden bg-[#061525] shadow-2xl">
            <Image
              src="/omi/five-axis-cutting-detail.jpg"
              alt="Five-axis cutting detail on precision injection mold tooling"
              fill
              className="object-cover object-[52%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061525]/60 via-transparent to-transparent" />
            <div
              className="absolute right-0 top-0 h-40 w-56 bg-[#BD1816]"
              style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%)" }}
            />
            <div className="absolute bottom-5 left-5 max-w-sm bg-[#061525]/82 p-5 backdrop-blur">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
                {anniversary.title}
              </p>
              <p className="mt-2 text-base font-semibold leading-7 text-white/78">
                Mold makers, inspectors, designers, and project owners aligned around one build
                plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#061525] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Tooling competencies
            </p>
            <h2 className="mt-5 text-balance text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Built around the production problem, not just the purchase order.
            </h2>
          </div>

          <div className="mt-12 grid gap-14">
            {homeFeaturePanels.map((panel) => (
              <article
                key={panel.number}
                className="grid overflow-hidden bg-[#0b304d] shadow-2xl lg:grid-cols-2"
              >
                <div
                  className={[
                    "relative min-h-80 overflow-hidden bg-[#08243d]",
                    panel.reverse ? "lg:order-2" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Image
                    src={panel.image}
                    alt={panel.imageAlt}
                    fill
                    className="object-cover object-[48%_center]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#061525]/12" />
                </div>

                <div className="relative flex min-h-80 flex-col justify-center p-6 sm:p-10 lg:p-14">
                  <span className="absolute -left-4 top-4 select-none text-[7rem] font-black leading-none text-white/12 sm:text-[10rem]">
                    {panel.number}
                  </span>
                  <div className="relative z-10">
                    <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
                      {panel.eyebrow}
                    </p>
                    <h3 className="mt-6 max-w-2xl text-balance text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                      {panel.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                      {panel.copy}
                    </p>
                    <Link
                      href={panel.href}
                      className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 border border-[#BD1816] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#BD1816]"
                    >
                      {panel.cta} <ArrowRight aria-hidden="true" size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 text-[#222222] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
                Explore OMI
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
                The details live where buyers expect them.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#777]">
              Review capabilities, industries, process checkpoints, and quality controls in their
              own sections. The homepage sets the pace; the detail pages carry the proof.
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
                  <p className="mt-3 text-base leading-7 text-[#777] transition group-hover:text-white/84">
                    {route.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition group-hover:text-white">
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
