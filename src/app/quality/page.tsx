import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, SiteFooter } from "../components/site-shell";
import { faqs, qualityItems } from "../site-data";

export const metadata: Metadata = {
  title: "Quality | Offshore Molds",
  description:
    "See Offshore Molds quality controls, including steel and component standards, CMM first article inspection, sampling, checklists, and warranty coverage.",
};

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-white text-[#18201f]">
      <PageHero
        eyebrow="Quality Control"
        title="Checked To Run"
        copy="Materials, components, reports, sampling, and final teardown inspection are documented before the mold is released for shipment."
        image="/omi/qc-1.jpg"
        imageAlt="CMM inspection at Offshore Molds"
      />

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative h-80 overflow-hidden border border-[#d8dedb] sm:col-span-2">
              <Image
                src="/omi/qc-1.jpg"
                alt="CMM inspection at Offshore Molds"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative h-56 overflow-hidden border border-[#d8dedb]">
              <Image
                src="/omi/mold-inspection-1.jpg"
                alt="Tooling inspection detail"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative h-56 overflow-hidden border border-[#d8dedb]">
              <Image
                src="/omi/mold-construction-8.jpg"
                alt="Mold construction detail"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ef4423]">
              Inspection and assurance
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#101716] sm:text-5xl">
              Built offshore. Checked like it has to run here tomorrow.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4f5b57]">
              OMI&apos;s risk reducers include CMM reports, standard components, known steel,
              production-condition sampling, detailed checklists, and final mold inspections by
              experienced mold makers.
            </p>

            <div className="mt-8 grid gap-3">
              {qualityItems.map((item) => (
                <div key={item} className="flex items-start gap-3 border-l-4 border-[#0f766e] bg-[#f4f6f5] px-4 py-3">
                  <CheckCircle2 aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-[#0f766e]" />
                  <p className="text-base font-semibold text-[#28312e]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f5] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0f766e]">
                Buyer assurance
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#101716] sm:text-5xl">
                Answers before procurement has to ask.
              </h2>
            </div>

            <div className="grid gap-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="border border-[#d8dedb] bg-white p-6">
                  <h3 className="flex items-start gap-3 text-xl font-black text-[#101716]">
                    <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-[#ef4423]" size={22} />
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#58635f]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Validate the requirements before the tool leaves China."
        copy="Share the inspection standards, material assumptions, and approval needs up front so OMI can align the build with your production expectations."
      />
      <SiteFooter />
    </main>
  );
}
