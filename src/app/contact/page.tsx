import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, FileCheck2, Phone } from "lucide-react";
import { ContactPanel, PageHero, SiteFooter } from "../components/site-shell";
import { contactInfo } from "../site-data";

export const metadata: Metadata = {
  title: "Contact | Offshore Molds",
  description:
    "Contact Offshore Molds for plastic injection mold RFQs, tooling questions, project timing, and U.S. or China office support.",
};

const rfqItems = [
  "Part files and drawings",
  "Target press size and annual volume",
  "Material, shrink, and critical tolerances",
  "Launch timing and approval requirements",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#222222]">
      <PageHero
        eyebrow="Contact"
        title="Start An RFQ"
        copy="Send the project data, ask a tooling question, or call the U.S. office to talk through schedule, sampling, validation, and shipment needs."
        image="/omi/slide-3.jpg"
        imageAlt="Precision mold steel detail"
      />

      <section className="bg-[#f7f7f7] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
              Quote conversation
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
              The fastest path is a clear first packet.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#777]">
              Send what you have. OMI can review the program constraints, identify missing
              assumptions, and move the conversation toward a practical tooling plan.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {rfqItems.map((item) => (
                <div key={item} className="flex items-start gap-3 border-l-4 border-[#004ff9] bg-white px-4 py-3">
                  <CheckCircle2 aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-[#004ff9]" />
                  <p className="text-base font-semibold text-[#222222]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactInfo.rfqHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#BD1816] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:brightness-90"
              >
                Email an RFQ <FileCheck2 aria-hidden="true" size={18} />
              </a>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-[#004ff9] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition hover:bg-[#004ff9] hover:text-white"
              >
                Call the U.S. office <Phone aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <ContactPanel />
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
              Offices
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#222222] sm:text-5xl">
              U.S. project support with China-based execution.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#777]">
              The contact path stays simple: start with the U.S. team, then OMI coordinates the
              overseas build, inspection, and shipment details.
            </p>
          </div>
          <div className="relative h-96 overflow-hidden border border-[#ddd]">
            <Image
              src="/omi/shop-1.jpg"
              alt="Offshore Molds tooling shop floor"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
