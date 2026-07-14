import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import {
  CtaBand,
  PageHero,
  SecondaryLink,
  SiteFooter,
} from "../components/site-shell";
import { industries } from "../site-data";

export const metadata: Metadata = {
  title: "Industries Served | Offshore Molds",
  description:
    "See the industries Offshore Molds supports with plastic injection mold programs, from automotive and consumer products to heavy truck, agriculture, and technical industrial parts.",
};

const programSignals = [
  {
    title: "Press range first",
    icon: Gauge,
    text: "Tooling plans stay tied to press size, part envelope, cavitation, and the production reality the mold has to meet.",
  },
  {
    title: "Finish expectations",
    icon: Layers3,
    text: "Visible surfaces, texture needs, shutoffs, and cosmetic requirements are reviewed before the build path is locked.",
  },
  {
    title: "Proof before shipment",
    icon: ClipboardCheck,
    text: "Sampling, inspection, teardown review, and approval documents help teams receive tools with fewer surprises.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        eyebrow="Industries"
        title="Markets Served"
        copy="Plastic injection mold programs for visible, functional, technical, and large-format parts that need fast timing without loose handoffs."
        image="/omi/five-axis-finished-tool.jpg"
        imageAlt="Finished polished injection mold tool for demanding production programs"
      />

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
              Built around the part
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
              Different markets. Same need for clean steel, clear proof, and a mold that runs.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#777]">
              OMI supports buyers who need offshore speed with practical mold-maker oversight.
              The part may be cosmetic, structural, technical, or oversized, but the program still
              needs the same fundamentals: early review, controlled construction, sampling, and
              documentation.
            </p>
            <div className="mt-8">
              <SecondaryLink href="/capabilities">Review capabilities</SecondaryLink>
            </div>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden bg-[#313131] shadow-xl">
            <Image
              src="/omi/eight-core-mold-composite.jpg"
              alt="Eight-core injection mold tooling prepared for an industrial program"
              fill
              className="object-cover object-[45%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#313131]/60 via-transparent to-transparent" />
            <div
              className="absolute bottom-0 left-0 h-40 w-64 bg-[#004ff9]"
              style={{ clipPath: "polygon(0 0, 74% 100%, 0 100%)" }}
            />
            <div
              className="absolute right-0 top-0 h-36 w-48 bg-[#BD1816]"
              style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%)" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#313131] py-18 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
                Industry-ready tooling
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl">
                The mold strategy changes with the market.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#e7e7e7]">
              Automotive launch pressure, consumer-product cosmetics, agriculture durability, and
              heavy-truck scale each create different tooling risks. OMI keeps those risks visible
              before steel is released and before the tool is packed.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-white/15 md:grid-cols-3">
            {programSignals.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="bg-[#262626] p-6">
                  <Icon aria-hidden="true" className="text-[#004ff9]" size={30} />
                  <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#e7e7e7]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e9edef] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
                Markets supported
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
                Tooling experience for parts buyers can see, measure, install, and trust.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#BD1816] px-6 pl-8 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:brightness-90"
              style={{ clipPath: "polygon(16px 0, 100% 0, 100% 100%, 0 100%)" }}
            >
              Discuss your market <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="group flex min-h-full flex-col overflow-hidden border border-[#d6dcde] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#BD1816] hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden bg-[#313131]">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} injection mold tooling support by Offshore Molds`}
                      fill
                      className="object-cover object-[45%_center] transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-[#004ff9] text-white shadow-lg">
                      <Icon aria-hidden="true" size={24} />
                    </div>
                  </div>

                  <div className="flex grow flex-col p-6">
                    <p className="text-xs font-extrabold uppercase leading-5 tracking-[0.16em] text-[#BD1816]">
                      {industry.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-[#222222]">
                      {industry.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#777]">{industry.text}</p>

                    <div className="mt-6 grid gap-3 border-t border-[#ddd] pt-5">
                      {industry.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <CheckCircle2
                            aria-hidden="true"
                            size={18}
                            className="mt-1 shrink-0 text-[#004ff9]"
                          />
                          <span className="text-sm font-bold leading-6 text-[#313131]">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
              Buyer fit
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
              Bring the part requirements. OMI will shape the build plan.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="border border-[#d6dcde] bg-white p-6">
              <ShieldCheck aria-hidden="true" className="text-[#004ff9]" size={30} />
              <h3 className="mt-5 text-2xl font-black text-[#222222]">
                Cosmetic and functional proof
              </h3>
              <p className="mt-3 text-base leading-7 text-[#777]">
                Surface expectations, parting lines, shutoffs, and critical dimensions are treated
                as approval points, not afterthoughts.
              </p>
            </article>
            <article className="border border-[#d6dcde] bg-white p-6">
              <Gauge aria-hidden="true" className="text-[#BD1816]" size={30} />
              <h3 className="mt-5 text-2xl font-black text-[#222222]">
                Small to large tool programs
              </h3>
              <p className="mt-3 text-base leading-7 text-[#777]">
                From medium mold tonnage to 3500T programs, the team aligns tool size, sampling,
                and final inspection with the receiving molder.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a market-specific tooling challenge?"
        copy="Send the part data, press target, annual volume, material, finish expectations, and launch date. OMI can help turn those requirements into a practical tooling path."
      />
      <SiteFooter />
    </main>
  );
}
