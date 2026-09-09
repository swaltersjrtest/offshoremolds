import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, SiteFooter } from "../components/site-shell";
import { faqs, qualityItems } from "../site-data";

export const metadata: Metadata = {
  title: "Quality | Offshore Molds",
  description:
    "See Offshore Molds quality controls, including steel and component standards, CMM first article inspection, sampling, checklists, final teardown, and warranty coverage.",
};

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        title="Proof before the mold leaves."
        copy="Materials, components, sampling, CMM inspection, checklists, and final teardown review are documented before OMI releases a mold for shipment."
        image="/omi/five-axis-polished-cavity.jpg"
        imageAlt="Polished mold cavity surface after machining"
      />

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
