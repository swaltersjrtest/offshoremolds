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
import { CtaBand, PageHero, SiteFooter } from "../components/site-shell";
import { industries } from "../site-data";

export const metadata: Metadata = {
  title: "Industries Served | Offshore Molds",
  description:
    "See the industries Offshore Molds supports with plastic injection mold programs, from automotive and consumer products to heavy truck, agriculture, and technical industrial parts.",
};

const programSignals = [
  {
    title: "Part use first",
    icon: Gauge,
    text: "The tooling plan stays tied to part function, press size, material, finish expectations, and the production reality the mold has to meet.",
  },
  {
    title: "Surface and structure",
    icon: Layers3,
    text: "Visible surfaces, texture needs, shutoffs, parting lines, and thick-wall concerns are reviewed before the build path is locked.",
  },
  {
    title: "Proof before shipment",
    icon: ClipboardCheck,
    text: "Sampling, inspection, teardown review, and approval documentation help teams receive tools with fewer surprises.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        eyebrow="Industries"
        title="Molds for parts the market has to trust."
        copy="OMI supports visible, functional, technical, and large-format plastic injection mold programs where speed only matters if the tool arrives ready to prove itself."
        image="/omi/five-axis-finished-tool.jpg"
        imageAlt="Finished polished injection mold tool for demanding production programs"
      />

      <section className="bg-[#061525] py-18 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Built around the part
            </p>
            <h2 className="mt-6 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">
              Different markets. Same need for clean steel and visible proof.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              Automotive launch pressure, consumer-product cosmetics, heavy-truck scale, and
              technical industrial requirements all create different tooling risks. OMI keeps those
              risks visible before steel is released and before the tool is packed.
            </p>
            <div className="mt-8">
              <Link
                href="/capabilities"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/35 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#222222]"
              >
                Review products <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>

          <div className="omi-motion-stage relative min-h-[32rem] overflow-hidden bg-[#061525] shadow-2xl">
            <Image
              src="/omi/eight-core-mold-composite.jpg"
              alt="Eight-core injection mold tooling prepared for an industrial program"
              fill
              className="omi-reel-image omi-reel-image-one object-cover object-[45%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Image
              src="/omi/five-axis-polished-cavity.jpg"
              alt=""
              fill
              aria-hidden="true"
              className="omi-reel-image omi-reel-image-two object-cover object-[48%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <Image
              src="/omi/polished-components.png"
              alt=""
              fill
              aria-hidden="true"
              className="omi-reel-image omi-reel-image-three object-cover object-[48%_center]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-[#061525]/30" />
            <div aria-hidden="true" className="omi-motion-grid absolute inset-0" />
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

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
                Industry-ready tooling
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
                The mold strategy changes with the part.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#666]">
              OMI is not trying to force every market into one mold template. The build plan changes
              around cosmetic surfaces, structural loads, tool size, cavitation, material behavior,
              and the production environment that will receive the mold.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-[#d7dcde] md:grid-cols-3">
            {programSignals.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="bg-[#eef1f2] p-6">
                  <Icon aria-hidden="true" className="text-[#BD1816]" size={30} />
                  <h3 className="mt-6 text-2xl font-black text-[#222222]">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#666]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
                Markets supported
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
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
                  className="group flex min-h-full flex-col overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden bg-[#061525]">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} injection mold tooling support by Offshore Molds`}
                      fill
                      className="object-cover object-[45%_center] transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
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
                    <p className="mt-3 text-base leading-7 text-[#666]">{industry.text}</p>

                    <div className="mt-6 grid gap-3 border-t border-[#d7dcde] pt-5">
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

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
              Buyer fit
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
              Bring the part requirements. OMI will shape the build plan.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="bg-[#eef1f2] p-6">
              <ShieldCheck aria-hidden="true" className="text-[#004ff9]" size={30} />
              <h3 className="mt-5 text-2xl font-black text-[#222222]">
                Cosmetic and functional proof
              </h3>
              <p className="mt-3 text-base leading-7 text-[#666]">
                Surface expectations, parting lines, shutoffs, and critical dimensions are treated
                as approval points, not afterthoughts.
              </p>
            </article>
            <article className="bg-[#eef1f2] p-6">
              <Gauge aria-hidden="true" className="text-[#BD1816]" size={30} />
              <h3 className="mt-5 text-2xl font-black text-[#222222]">
                Medium to large tool programs
              </h3>
              <p className="mt-3 text-base leading-7 text-[#666]">
                From 500T medium mold tonnage through 3500T large tools, the team aligns tool size,
                sampling, and final inspection with the receiving molder.
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
