import type { Metadata } from "next";
import { CtaBand, PageHero, SiteFooter, PrimaryLink } from "../components/site-shell";
import { CapabilityGalleries } from "./capability-galleries";

export const metadata: Metadata = {
  title: "Capabilities | Offshore Molds",
  description: "Explore Offshore Molds tooling, collapsible cores, soft gate technology, China team, and shipping through six photo galleries.",
};

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <PageHero
        title="Capabilities"
        copy="Explore our tooling, technology, people, and shipping. Take a closer look at the work behind an OMI mold program."
        image="/omi/capabilities/1500-3500-2.webp"
        imageAlt="Large-format injection mold at Offshore Molds"
      />
      <section className="bg-[#eef1f2] py-18 sm:py-24" aria-labelledby="capabilities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#BD1816]">Our work in focus</p>
              <h2 id="capabilities-heading" className="mt-4 text-balance text-4xl font-black uppercase leading-tight sm:text-5xl">See the capability. Explore the details.</h2>
              <p className="mt-5 text-lg leading-8 text-[#666]">Select a category to browse its photo gallery.</p>
            </div>
            <PrimaryLink href="/contact">Discuss your project</PrimaryLink>
          </div>
          <CapabilityGalleries />
        </div>
      </section>
      <CtaBand title="Let's talk about your next mold." copy="Share your part data, tooling requirements, and timing. OMI can help define the next step for your project." />
      <SiteFooter />
    </main>
  );
}
