import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { CtaBand, PageHero, SiteFooter } from "../components/site-shell";
import { capabilities, contactInfo, industries } from "../site-data";

export const metadata: Metadata = {
  title: "Industries Served | Offshore Molds",
  description:
    "See the recreation, consumer product, medical, agriculture, heavy truck, and technical industrial plastic injection mold programs Offshore Molds supports.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        title="Molds for products the market has to trust."
        copy="OMI supports recreation, consumer product, medical, agriculture, heavy truck, and technical molded part programs where speed and quality matter when going to market."
        image="/omi/industry-recreation-atv-owner.jpg"
        imageAlt="Generic ATV vehicle representing recreation molded part programs"
      />

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
                      alt={`${industry.title} molded product examples supported by Offshore Molds`}
                      fill
                      loading="eager"
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
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
                Service areas
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
                Tooling services without the extra maze.
              </h2>
            </div>
            <a
              href={`mailto:${contactInfo.generalEmail}?subject=Tooling%20question`}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#004ff9] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition hover:bg-[#004ff9] hover:text-white"
            >
              Ask a tooling question <Mail aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="mt-12 grid gap-px bg-[#d7dcde] md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="group bg-white p-6 transition hover:bg-[#004ff9]">
                  <Icon aria-hidden="true" className="text-[#BD1816] transition group-hover:text-white" size={28} />
                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-[#BD1816] transition group-hover:text-white">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-[#222222] transition group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666] transition group-hover:text-white/84">
                    {item.text}
                  </p>
                </article>
              );
            })}
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
