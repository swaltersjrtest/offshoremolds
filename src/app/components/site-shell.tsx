import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  FileCheck2,
  Mail,
  Menu,
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
        "fixed inset-x-0 top-0 z-50 border-b border-[#ddd] shadow-sm backdrop-blur",
        isOverlay ? "bg-white/95" : "bg-white",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Offshore Molds home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] p-1 shadow-sm sm:h-14 sm:w-14",
              isOverlay ? "bg-[#f7f7f7]" : "bg-[#f7f7f7]",
            )}
          >
            <Image
              src="/omi/logo-white-bg.jpg"
              alt="Offshore Molds logo"
              width={1024}
              height={1110}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span
            className={cn(
              "block truncate text-[0.68rem] font-semibold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.18em]",
              isOverlay ? "text-[#222222]" : "text-[#222222]",
            )}
          >
            Offshore Molds
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className={cn(
            "hidden shrink-0 items-center gap-3 px-3 py-3 text-xs font-bold uppercase text-[#313131] md:flex lg:gap-5 lg:px-5 lg:text-sm",
            isOverlay
              ? "bg-white/0"
              : "bg-white/0",
          )}
        >
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#004ff9]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden min-h-12 items-center gap-2 bg-[#BD1816] px-5 pl-7 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-sm transition hover:brightness-90 md:inline-flex"
          style={{ clipPath: "polygon(18px 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Phone aria-hidden="true" size={17} />
          <span className="hidden sm:inline">Start the conversation</span>
          <span className="sm:hidden">Contact</span>
        </Link>

        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center gap-2 bg-[#BD1816] px-4 pl-6 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-sm transition hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004ff9] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" size={18} />
            Menu
          </summary>
          <div className="fixed left-3 right-3 top-[4.75rem] z-[60] border border-[#d7dcde] bg-white p-3 text-[#222222] shadow-2xl">
            <nav aria-label="Mobile navigation" className="grid gap-2">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-11 items-center justify-between border border-[#e1e5e7] bg-[#f8faf9] px-4 text-sm font-extrabold uppercase tracking-[0.12em] transition hover:border-[#004ff9] hover:text-[#004ff9]"
                >
                  {item.label}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              ))}
            </nav>
            <div className="mt-3 grid gap-2 border-t border-[#e1e5e7] pt-3">
              <a
                href={contactInfo.rfqHref}
                className="flex min-h-11 items-center justify-center gap-2 bg-[#BD1816] px-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white"
              >
                Email an RFQ <FileCheck2 aria-hidden="true" size={17} />
              </a>
              <a
                href={contactInfo.phoneHref}
                className="flex min-h-11 items-center justify-center gap-2 border border-[#004ff9] px-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9]"
              >
                Call OMI <Phone aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export function PageHero({ eyebrow, title, copy, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[390px] items-end overflow-hidden bg-[#eef1f2] pt-20 md:min-h-[48vh]">
      <SiteHeader variant="overlay" />
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-contain object-[78%_bottom]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 w-full bg-[#004ff9]/92 md:hidden" />
      <div
        className="absolute inset-y-0 left-0 hidden bg-[#004ff9] md:block md:w-[82%] lg:w-[66%] xl:w-[60%] 2xl:w-[56%]"
        style={{ clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)" }}
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-12">
        <div className="max-w-lg">
          <p className="inline-block border-l-4 border-white pl-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-black uppercase leading-[1.02] text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-white sm:text-xl">
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
      className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#BD1816] px-6 pl-8 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:brightness-90"
      style={{ clipPath: "polygon(16px 0, 100% 0, 100% 100%, 0 100%)" }}
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
      className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#004ff9] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition hover:bg-[#004ff9] hover:text-white"
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
}

export function ContactPanel() {
  return (
    <aside className="border border-[#ddd] bg-white p-6 text-[#222222] shadow-sm">
      <div className="flex items-center gap-3 border-b border-[#ddd] pb-5">
        <Building2 aria-hidden="true" className="text-[#BD1816]" />
        <div>
          <h2 className="text-2xl font-black">Offshore Molds, Inc.</h2>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#777]">
            U.S. and China support
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        <a href={contactInfo.phoneHref} className="flex items-start gap-3 transition hover:text-[#BD1816]">
          <Phone aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#777]">
              Phone
            </span>
            {contactInfo.phone}
          </span>
        </a>
        <a
          href={`mailto:${contactInfo.generalEmail}`}
          className="flex items-start gap-3 transition hover:text-[#BD1816]"
        >
          <Mail aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#777]">
              General
            </span>
            {contactInfo.generalEmail}
          </span>
        </a>
        <a
          href={`mailto:${contactInfo.salesEmail}`}
          className="flex items-start gap-3 transition hover:text-[#BD1816]"
        >
          <Mail aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#777]">
              Sales
            </span>
            {contactInfo.salesEmail}
          </span>
        </a>
        <div className="flex items-start gap-3">
          <MapPin aria-hidden="true" className="mt-1 shrink-0" size={20} />
          <span>
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#777]">
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
            <span className="block text-sm font-extrabold uppercase tracking-[0.14em] text-[#777]">
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
    <section className="relative overflow-hidden bg-[#004ff9] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div
        className="absolute bottom-0 right-0 hidden h-32 w-64 bg-[#BD1816] sm:block"
        style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="inline-flex bg-[#BD1816] px-3 py-1 text-sm font-extrabold uppercase tracking-[0.18em] text-white">
            Start the conversation
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-[#e7e7e7]">{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href={contactInfo.rfqHref}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-[#BD1816] px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:brightness-90 sm:w-auto"
          >
            Email an RFQ <FileCheck2 aria-hidden="true" size={18} />
          </a>
          <a
            href={contactInfo.phoneHref}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] border border-white/35 bg-white/10 px-6 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#222222] sm:w-auto"
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
    <footer className="border-t-4 border-[#BD1816] bg-[#232323] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="Offshore Molds home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-white p-1 shadow-sm">
              <Image
                src="/omi/logo-white-bg.jpg"
                alt="Offshore Molds logo"
                width={1024}
                height={1110}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-sm font-extrabold uppercase tracking-[0.18em]">
              Offshore Molds
            </span>
          </Link>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-end">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white/7 px-3 py-2 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-[#222222]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/12 pt-5">
          <p className="text-xs leading-6 text-white/68">
            Copyright 2026 Offshore Molds, Inc. Built by ZUVIX.NET
          </p>
        </div>
      </div>
    </footer>
  );
}
