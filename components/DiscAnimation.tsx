"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Signature visual: two vertebrae with a compressed, bulging disc that opens and
 * rehydrates when scrolled into view. Visitors can toggle Before / After.
 */
export default function DiscAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(false); // auto-advance after scroll-in
  const [manual, setManual] = useState<boolean | null>(null); // visitor toggle wins

  useEffect(() => {
    if (!inView || reduce) return;
    const t = setTimeout(() => setRevealed(true), 700);
    return () => clearTimeout(t);
  }, [inView, reduce]);

  const after = manual ?? (reduce ? true : revealed);

  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 70, damping: 16 };
  const discH = after ? 56 : 24;
  const gapShift = after ? 16 : 0;

  return (
    <div ref={ref} className="card overflow-hidden p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-brand-blue">
          {after ? "After: disc rehydrated, nerve freed" : "Before: compressed disc pressing on the nerve"}
        </p>
        <div
          role="group"
          aria-label="Show disc before or after decompression"
          className="flex shrink-0 rounded-full border border-brand-line p-0.5"
        >
          {(["Before", "After"] as const).map((label) => {
            const active = label === "After" ? after : !after;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setManual(label === "After")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  active ? "bg-brand-blue text-white" : "text-brand-grey hover:text-brand-blue"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <svg
        viewBox="0 0 340 260"
        role="img"
        aria-label="Illustration of two vertebrae. Before treatment the disc between them is compressed and bulges against the nerve. After decompression the disc is taller, rehydrated, and the nerve is no longer pinched."
        className="mt-4 h-auto w-full"
      >
        <motion.ellipse
          cx="160"
          cy="130"
          rx="120"
          ry="60"
          fill="#1E6FB8"
          animate={{ opacity: after ? 0.12 : 0 }}
          transition={{ duration: reduce ? 0 : 0.8 }}
        />

        {/* top vertebra */}
        <motion.g animate={{ y: -gapShift }} transition={spring}>
          <rect x="52" y="30" width="216" height="72" rx="20" fill="#0E3A5E" />
          <rect x="70" y="44" width="180" height="12" rx="6" fill="#1E6FB8" opacity="0.35" />
        </motion.g>

        {/* bottom vertebra */}
        <motion.g animate={{ y: gapShift }} transition={spring}>
          <rect x="52" y="158" width="216" height="72" rx="20" fill="#0E3A5E" />
          <rect x="70" y="204" width="180" height="12" rx="6" fill="#1E6FB8" opacity="0.35" />
        </motion.g>

        {/* disc */}
        <motion.rect
          x="62"
          width="196"
          rx="16"
          stroke="#1E6FB8"
          strokeWidth="3"
          animate={{ height: discH, y: 130 - discH / 2, fill: after ? "#EAF2F9" : "#D6E2EE" }}
          transition={spring}
        />
        {/* nucleus */}
        <motion.ellipse
          cx="160"
          cy="130"
          fill="#1E6FB8"
          animate={{ rx: after ? 44 : 30, ry: after ? 16 : 6, opacity: after ? 0.55 : 0.35 }}
          transition={spring}
        />
        {/* bulge pressing on the nerve (red = the problem) */}
        <motion.ellipse
          cx="262"
          cy="130"
          fill="#C8102E"
          animate={{ rx: after ? 4 : 22, ry: after ? 8 : 16, opacity: after ? 0 : 1 }}
          transition={spring}
        />

        {/* nerve */}
        <motion.path
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          animate={{
            d: after
              ? "M296 26 C296 70 296 100 296 130 C296 160 296 190 296 236"
              : "M296 26 C296 70 300 105 284 130 C300 155 296 190 296 236",
            stroke: after ? "#1E6FB8" : "#C8102E",
          }}
          transition={spring}
        />
        <motion.path
          d="M296 130 C310 130 322 122 334 118"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          animate={{ stroke: after ? "#1E6FB8" : "#C8102E" }}
          transition={spring}
        />

        {/* hydration droplets flowing in (after only) */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#1E6FB8"
            initial={false}
            animate={
              after && !reduce
                ? { cx: [40, 62], cy: [100 + i * 22, 118 + i * 12], opacity: [0, 0.8, 0] }
                : { opacity: 0 }
            }
            transition={
              after && !reduce
                ? { duration: 1.4, delay: 0.4 + i * 0.25, repeat: 2, ease: "easeOut" }
                : { duration: 0 }
            }
          />
        ))}
      </svg>

      <div className="mt-3 flex items-center justify-between text-xs text-brand-grey">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-red" aria-hidden="true" />
          Bulge on the nerve
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-bluemid" aria-hidden="true" />
          Rehydrated disc
        </span>
      </div>
    </div>
  );
}
