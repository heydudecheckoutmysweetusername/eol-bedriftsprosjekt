import type { CSSProperties } from "react";

const MARQUEE_COPIES = 2;

function LogoStrip({ copyIndex }: { copyIndex: number }) {
  return (
    <div className="landing-trusted__strip" aria-hidden={copyIndex > 0}>
      <img
        src="/images/customer-logos.svg"
        alt={copyIndex === 0 ? "Customer logos" : ""}
        className="landing-trusted__logo-strip"
        draggable={false}
      />
      <span className="landing-trusted__strip-gap" aria-hidden="true" />
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="landing-trusted lg:landing-trusted-compact">
      <h2 className="landing-trusted__heading lg:landing-trusted-heading">
        Trusted by
      </h2>
      <div className="landing-trusted__logos lg:landing-trusted-logos">
        <div
          className="landing-trusted__marquee animate-marquee"
          style={{ "--marquee-copies": MARQUEE_COPIES } as CSSProperties}
        >
          {Array.from({ length: MARQUEE_COPIES }, (_, index) => (
            <LogoStrip key={index} copyIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
