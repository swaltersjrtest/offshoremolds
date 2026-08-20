import type { Metadata } from "next";
import { Mail } from "lucide-react";
import {
  CtaBand,
  PageHero,
  SiteFooter,
} from "../components/site-shell";
import { capabilities } from "../site-data";

export const metadata: Metadata = {
  title: "Products | Offshore Molds",
  description:
    "Explore Offshore Molds plastic injection mold products and services, including custom tooling, large tools, moldflow, design, sampling, validation, and U.S.-managed offshore support.",
};

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        eyebrow="Products"
        title="Injection mold programs from one managed source."
        copy="OMI connects design, moldflow, offshore build capacity, sampling, inspection, and U.S. project control into one accountable tooling path."
        image="/omi/five-axis-machining-head.jpg"
        imageAlt="Five-axis machining head cutting a polished mold cavity"
      />

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
                Service areas
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">
                Tooling services without the extra maze.
              </h2>
            </div>
            <a
              href="mailto:information@offshoremolds.com?subject=Capabilities%20question"
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
        title="Bring OMI into the product discussion early."
        copy="Send the part files, press target, material, critical tolerances, and launch timing. OMI will shape those requirements into a practical tooling path."
      />
      <SiteFooter />
    </main>
  );
}
