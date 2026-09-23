import type { Metadata } from "next";
import { CheckCircle2, FileCheck2, Phone } from "lucide-react";
import { ContactPanel, PageHero, SiteFooter } from "../components/site-shell";
import { contactInfo } from "../site-data";

export const metadata: Metadata = {
  title: "Contact | Offshore Molds",
  description:
    "Contact Offshore Molds for plastic injection mold RFQs, tooling questions, project timing, sampling, validation, and U.S. or China office support.",
};

const rfqItems = [
  "Part files, drawings, and current revision level",
  "Target press size, annual volume, and timing",
  "Material, shrink, finish, and critical tolerance notes",
  "Sampling, inspection, approval, and shipment expectations",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        title="Build strong tooling together."
        copy="Send the project data, ask a tooling question, or call the U.S. office to talk through schedule, sampling, validation, and shipment needs."
        image="/omi/eight-core-mold-composite.jpg"
        imageAlt="Eight-core mold tool running in a press"
      />

      <section className="bg-[#061525] py-18 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:px-8">
          <div>
            <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Start the conversation
            </p>
            <h2 className="mt-6 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">
              The fastest path is a clear first packet.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
              Send the program constraints early. OMI can review the part, identify the questions
              that affect tooling, and move the discussion toward a practical mold plan.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {rfqItems.map((item) => (
                <div key={item} className="flex items-start gap-3 border-l-4 border-[#004ff9] bg-white/8 px-4 py-3">
                  <CheckCircle2 aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-[#004ff9]" />
                  <p className="text-base font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactInfo.rfqHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#BD1816] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:brightness-90"
              >
                Email an RFQ <FileCheck2 aria-hidden="true" size={18} />
              </a>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/35 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#222222]"
              >
                Call the U.S. office <Phone aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <ContactPanel />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
