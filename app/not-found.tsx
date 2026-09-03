import Link from "next/link";
import TelLink from "@/components/TelLink";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section bg-brand-surface">
      <div className="wrap">
        <div className="card mx-auto max-w-lg p-10 text-center">
          <p className="eyebrow justify-center">404</p>
          <h1 className="mt-3 text-3xl font-extrabold">That page isn&apos;t here.</h1>
          <p className="mt-3 text-brand-grey">But relief might be. Start with a free consultation.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/#consult" className="btn-primary">
              Free Consultation
            </Link>
            <TelLink location="404" className="btn-secondary tabular">
              Call {SITE.phoneDisplay}
            </TelLink>
          </div>
        </div>
      </div>
    </section>
  );
}
