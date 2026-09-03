type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event" | "config" | "js", target: string | Date, params?: GtagParams) => void;
    dataLayer?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Fire a GA4 event if gtag is present. Safe to call when analytics is not configured. */
export function track(event: string, params?: GtagParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
