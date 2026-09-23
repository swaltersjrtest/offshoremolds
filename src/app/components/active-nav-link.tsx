"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import type { mainNav } from "../site-data";

type NavItem = (typeof mainNav)[number];

type ActiveNavLinkProps = Readonly<{
  item: NavItem;
  variant?: "desktop" | "mobile" | "footer";
}>;

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function ActiveNavLink({ item, variant = "desktop" }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, item.href);

  if (variant === "mobile") {
    return (
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={[
          "flex min-h-11 items-center justify-between border px-4 text-sm font-extrabold uppercase tracking-[0.12em] transition hover:border-[#004ff9] hover:text-[#004ff9]",
          isActive
            ? "border-[#004ff9] bg-[#004ff9] text-white"
            : "border-[#e1e5e7] bg-[#f8faf9] text-[#222222]",
        ].join(" ")}
      >
        {item.label}
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={[
          "px-3 py-2 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-[#222222]",
          isActive ? "bg-[#004ff9]" : "bg-white/7",
        ].join(" ")}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "relative px-1 py-2 transition after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:origin-left after:transition",
        isActive
          ? "text-[#004ff9] after:scale-x-100 after:bg-[#BD1816]"
          : "after:scale-x-0 after:bg-[#BD1816] hover:text-[#004ff9] hover:after:scale-x-100",
      ].join(" ")}
    >
      {item.label}
    </Link>
  );
}
