"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/gtag";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  location: string;
  children: ReactNode;
};

/** Click-to-call link that reports a GA4 `click_to_call` event. */
export default function TelLink({ location, children, onClick, ...rest }: Props) {
  return (
    <a
      href={SITE.phoneHref}
      onClick={(e) => {
        track("click_to_call", { location, phone: SITE.phoneDisplay });
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
