import { Activity, Trophy, Users, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import TelLink from "@/components/TelLink";

const ITEMS = [
  { Icon: Activity, text: "DRX-9000 technology" },
  { Icon: Trophy, text: "Featured with NFL veteran Duane Clemons" },
  { Icon: Users, text: "Thousands treated in Henderson" },
];

export default function TrustBar() {
  return (
    <section aria-label="Why patients trust us" className="border-b border-brand-line bg-white">
      <ul className="wrap grid grid-cols-2 gap-x-6 gap-y-4 py-5 text-sm font-semibold text-brand-blue md:grid-cols-4 md:py-4">
        {ITEMS.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-bluesoft text-brand-bluemid">
              <Icon className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <span className="leading-tight">{text}</span>
          </li>
        ))}
        <li className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <TelLink location="trust_bar" className="tabular leading-tight hover:text-brand-bluemid">
            {SITE.phoneDisplay}
          </TelLink>
        </li>
      </ul>
    </section>
  );
}
