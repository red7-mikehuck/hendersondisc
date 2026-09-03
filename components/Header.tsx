"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";
import TelLink from "./TelLink";

const NAV = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#conditions", label: "Conditions" },
  { href: "/#results", label: "Results" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled
          ? "shadow-[0_1px_0_#E4E9EF,0_10px_28px_-18px_rgba(14,58,94,.45)]"
          : "shadow-[0_1px_0_#E4E9EF]"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4 sm:h-[68px]">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${SITE.name} — home`}>
          <Image
            src="/images/dcoa-logo-720.png"
            alt={SITE.name}
            width={720}
            height={258}
            priority
            sizes="(max-width: 640px) 150px, 190px"
            className="h-[38px] w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 nav:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[15px] font-medium text-brand-grey transition-colors hover:text-brand-blue"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 nav:flex">
          <TelLink
            location="header"
            className="tabular inline-flex items-center gap-2 text-[15px] font-semibold text-brand-blue hover:text-brand-bluemid"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phoneDisplay}
          </TelLink>
          <Link href="/#consult" className="btn-primary !min-h-[44px] !px-5 text-[15px]">
            Free Consultation
          </Link>
        </div>

        <button
          ref={toggle}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-blue hover:bg-brand-bluesoft nav:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-line bg-white nav:hidden">
          <nav aria-label="Mobile" className="wrap flex flex-col py-3">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                ref={i === 0 ? firstLink : undefined}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-brand-line py-3.5 text-base font-medium text-brand-ink last:border-0"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 pb-2">
              <TelLink location="mobile_menu" className="btn-secondary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </TelLink>
              <Link href="/#consult" onClick={() => setOpen(false)} className="btn-primary">
                Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
