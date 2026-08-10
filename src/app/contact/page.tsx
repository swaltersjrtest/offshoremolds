import type { Metadata } from "next";
import Image from "next/image";
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

const conversationSteps = [
  {
    number: "01",
    title: "Send the packet",
    text: "Start with what you have. OMI can review complete data or help identify the missing assumptions that matter before quote work moves forward.",
  },
  {
    number: "02",
    title: "Review the path",
    text: "The team looks at press target, material, schedule, part risk, sampling needs, and final approval requirements before the tooling path is framed.",
  },
  {
    number: "03",
    title: "Build the next step",
    text: "From there, OMI can turn the conversation into a practical quote, a design review, or a clearer set of tooling questions for your team.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        eyebrow="Contact"
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

      <section className="bg-[#eef1f2] py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#004ff9]">
              How to begin
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
              A better tooling conversation starts before steel is committed.
            </h2>
          </div>
          <div className="grid gap-px bg-[#cfd6d9]">
            {conversationSteps.map((step) => (
              <article key={step.number} className="grid gap-5 bg-white p-6 sm:grid-cols-[5rem_1fr]">
                <div className="flex h-16 w-16 items-center justify-center bg-[#004ff9] text-xl font-black text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#222222]">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#666]">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">
              Offices
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black uppercase leading-tight text-[#222222] sm:text-5xl">
              U.S. project support with China-based execution.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#666]">
              The contact path stays simple: start with the U.S. team, then OMI coordinates the
              overseas build, inspection, sampling, and shipment details through the same managed
              channel.
            </p>
          </div>
          <div className="omi-cinematic-card relative h-96 overflow-hidden bg-[#061525] shadow-2xl">
            <Image
              src="/omi/eight-core-mold-composite.jpg"
              alt="Eight-core mold tooling machine detail"
              fill
              className="omi-floating-image object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div aria-hidden="true" className="omi-card-sweep absolute inset-0" />
            <div
              className="absolute bottom-0 left-0 h-32 w-56 bg-[#BD1816]"
              style={{ clipPath: "polygon(0 0, 72% 100%, 0 100%)" }}
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
