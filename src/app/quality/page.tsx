import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, PrimaryLink, SiteFooter } from "../components/site-shell";
import { faqs, qualityItems } from "../site-data";

export const metadata: Metadata = {
  title: "Quality | Offshore Molds",
  description:
    "See Offshore Molds quality controls, including steel and component standards, CMM first article inspection, sampling, checklists, final teardown, and warranty coverage.",
};

const assuranceStages = [
  {
    number: "01",
    title: "Known build standards",
    text: "Steel, components, cooling, construction decisions, and customer requirements are reviewed before the build moves too far to correct cleanly.",
  },
  {
    number: "02",
    title: "Measured sampling proof",
    text: "The mold is run under normal molding conditions and supported with process information, first articles, and inspection documentation.",
  },
  {
    number: "03",
    title: "Final release discipline",
    text: "Before shipment, the tool is checked, protected, documented, and prepared for the receiving molder so the next step is production readiness.",
  },
];

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        eyebrow="Quality"
        title="Proof before the mold leaves."
        copy="Materials, components, sampling, CMM inspection, checklists, and final teardown review are documented before OMI releases a mold for shipment."
        image="/omi/five-axis-polished-cavity.jpg"
        imageAlt="Polished mold cavity surface after machining"
      />

      <section className="bg-[#061525] py-18 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="omi-cinematic-card relative h-80 overflow-hidden bg-[#08243d] sm:col-span-2">
              <Image
                src="/omi/five-axis-finished-tool.jpg"
                alt="Finished polished mold tool ready for inspection"
                fill
                className="omi-floating-image object-cover object-[55%_center]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div aria-hidden="true" className="omi-card-sweep absolute inset-0" />
              <div className="absolute inset-0 bg-[#061525]/16" />
            </div>
            <div className="relative h-56 overflow-hidden bg-[#08243d]">
              <Image
                src="/omi/polished-components-closeup.png"
                alt="Polished tool components inspection detail"
                fill
                className="omi-floating-image object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative h-56 overflow-hidden bg-[#08243d]">
              <Image
                src="/omi/polished-tooling-plate.png"
                alt="Finished polished tooling plate"
                fill
                className="omi-floating-image object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Inspection and assurance
            </p>
            <h2 className="mt-6 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">
              Built offshore. Checked like it has to run here tomorrow.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              Quality is treated as a working loop, not a final paperwork step. OMI uses mold-maker
              review, sampling, CMM reports, checklist discipline, and teardown inspection to feed
              proof back into the release decision.
            </p>
            <div className="mt-8">
              <PrimaryLink href="/contact">Share quality requirements</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
              Quality path
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
              Assurance follows the tool from concept to release.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#666]">
              The strongest quality systems do not wait until the end. OMI keeps the key
              expectations visible while design, steel, sampling, inspection, and shipment decisions
              are still active.
            </p>
          </div>

          <div className="grid gap-px bg-[#cfd6d9]">
            {assuranceStages.map((stage) => (
              <article key={stage.number} className="grid gap-5 bg-white p-6 sm:grid-cols-[5rem_1fr]">
                <div className="flex h-16 w-16 items-center justify-center bg-[#BD1816] text-xl font-black text-white">
                  {stage.number}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#222222]">{stage.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#666]">{stage.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
              Release standards
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
              The details buyers need before the crate closes.
            </h2>
          </div>

          <div className="grid gap-3">
            {qualityItems.map((item) => (
              <div key={item} className="flex items-start gap-3 border-l-4 border-[#004ff9] bg-[#eef1f2] px-4 py-3">
                <CheckCircle2 aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-[#004ff9]" />
                <p className="text-base font-semibold text-[#222222]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
                Buyer assurance
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
                Answers before procurement has to ask.
              </h2>
            </div>

            <div className="grid gap-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="border border-[#d7dcde] bg-white p-6">
                  <h3 className="flex items-start gap-3 text-xl font-black text-[#222222]">
                    <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-[#BD1816]" size={22} />
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Validate the requirements before the tool leaves China."
        copy="Share inspection standards, material assumptions, part approval needs, and sampling expectations up front so OMI can align the build with your production requirements."
      />
      <SiteFooter />
    </main>
  );
}
