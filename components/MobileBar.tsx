"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import TelLink from "./TelLink";

/** Sticky bottom action bar for phones and small tablets (< 900px). */
export default function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-line bg-white/95 backdrop-blur nav:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <TelLink location="mobile_bar" className="btn-secondary !min-h-[48px] !rounded-xl text-[15px]">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </TelLink>
        <Link href="/#consult" className="btn-primary !min-h-[48px] !rounded-xl text-[15px]">
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Free Consultation
        </Link>
      </div>
    </div>
  );
}
