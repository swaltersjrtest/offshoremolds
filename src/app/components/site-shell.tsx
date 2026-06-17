import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  FileCheck2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { contactInfo, mainNav } from "../site-data";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SiteHeader({ variant = "solid" }: HeaderProps) {
  const isOverlay = variant === "overlay";

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-30",
        isOverlay
          ? "absolute"
          : "sticky border-b border-[#d8dedb] bg-white/95 shadow-sm backdrop-blur",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Offshore Molds home" className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center rounded-[4px] p-1 shadow-sm",
              isOverlay ? "bg-white/90" : "bg-[#f4f6f5]",
            )}
          >
            <Image
              src="/omi/logo.png"
              alt="Offshore Molds logo"
              width={54}
              height={54}
              priority
            />
          </span>
          <span
            className={cn(
              "hidden text-sm font-semibold uppercase tracking-[0.18em] sm:block",
              isOverlay ? "text-white" : "text-[#101716]",
            )}
          >
            Offshore Molds
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className={cn(
            "hidden items-center gap-6 rounded-[4px] px-5 py-3 text-sm font-medium backdrop-blur md:flex",
            isOverlay
              ? "bg-[#101716]/70 text-white"
              : "bg-[#f4f6f5] text-[#18201f]",
          )}
        >
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#ef4423]">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={contactInfo.phoneHref}
          className="inline-flex min-h-11 items-center gap-2 rounded-[4px] bg-[#ef4423] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#c73319]"
        >
          <Phone aria-hidden="true" size={17} />
          <span className="hidden sm:inline">{contactInfo.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

export function PageHero({ eyebrow, title, copy, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden bg-[#101716]">
      <SiteHeader variant="overlay" />
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#101716]/55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,23,22,0.94)_0%,rgba(16,23,22,0.7)_44%,rgba(16,23,22,0.24)_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-3xl">
          <p className="border-l-4 border-[#ffb12a] pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#ffd58b]">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-balance text-5xl font-black uppercase leading-[0.95] text-white sm:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-xl leading-8 text-[#e8efed]">
            {copy}
          </p>
        </div>
      </div>
    </section>
  );
}

export function PrimaryLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ef4423] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#c73319]"
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-[#18201f] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-[#18201f] transition hover:bg-[#18201f] hover:text-white"
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
}

export function ContactPanel() {
  return (
    <aside className="border border-[#d8dedb] bg-white p-6 text-[#18201f] shadow-sm">
      <div className="flex items-center gap-3 border-b border-[#d8dedb] pb-5">
        <Building2 aria-hidden="true" className="text-[#ef4423]" />
        <div>
          <h2 className="text-2xl font-black">Offshore Molds, Inc.</h2>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64706c]">
            U.S. and China support
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        <a href={contactInfo.phoneHref} className="flex items-start gap-3 transition hover:text-[#ef4423]">
          <Phone aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
              Phone
            </span>
            {contactInfo.phone}
          </span>
        </a>
        <a
          href={`mailto:${contactInfo.generalEmail}`}
          className="flex items-start gap-3 transition hover:text-[#ef4423]"
        >
          <Mail aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
              General
            </span>
            {contactInfo.generalEmail}
          </span>
        </a>
        <a
          href={`mailto:${contactInfo.salesEmail}`}
          className="flex items-start gap-3 transition hover:text-[#ef4423]"
        >
          <Mail aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
              Sales
            </span>
            {contactInfo.salesEmail}
          </span>
        </a>
        <div className="flex items-start gap-3">
          <MapPin aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
              U.S. office
            </span>
            {contactInfo.usOffice[0]}
            <br />
            {contactInfo.usOffice[1]}
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Clock3 aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#64706c]">
              China office
            </span>
            {contactInfo.chinaOffice[0]}
            <br />
            {contactInfo.chinaOffice[1]}
          </span>
        </div>
      </div>
    </aside>
  );
}

export function CtaBand({
  title = "Ready to make the tooling path visible?",
  copy = "Send part files, target press size, material, annual volume, critical tolerances, and launch timing. OMI can turn that into a practical quote conversation quickly.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-[#101716] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ffb12a]">
            Start the conversation
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-[#d5dfda]">{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href={contactInfo.rfqHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ef4423] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#c73319]"
          >
            Email an RFQ <FileCheck2 aria-hidden="true" size={18} />
          </a>
          <a
            href={contactInfo.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-white/35 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#101716]"
          >
            Call OMI <Phone aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white px-4 py-8 text-[#58635f] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          Copyright 2026 Offshore Molds, Inc. Rebuilt for a faster, clearer tooling conversation.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#ef4423]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
