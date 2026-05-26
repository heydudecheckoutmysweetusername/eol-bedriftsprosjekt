export default function AboutSection() {
  return (
    <section className="mx-auto w-[330px]">
      <h2 className="font-heading text-[28px] leading-tight text-green-dark">
        <span className="font-body font-bold">Maintaining</span>{" "}
        <span className="font-heading-condensed font-bold italic" style={{ color: "#1F211F" }}>EOL</span>{" "}
        <span className="font-body font-bold">software</span>
      </h2>
      <div className="mt-6 flex flex-col gap-[10px]">
        <p className="font-body text-sm leading-relaxed text-green-darker">
          At our core, we empower businesses that might lack the budget,
          resources, or specific components needed for future-proof support.
          We're here to safeguard your company from lost revenue and the massive
          overhead of developing, maintaining, and installing new software.
        </p>
        <p className="font-body text-sm leading-relaxed text-green-darker">
          Let's face it: most "new" tech isn't built for everyone, and software
          providers often overlook that reality. Technology is inherently
          unstable—so we stabilize it for you.
        </p>
        <p className="font-body text-sm leading-relaxed text-green-darker">
          We ensure your existing software continues to carry the weight of your
          infrastructure, preventing collapse caused by forced implementations,
          feature bloat, or the removal of legacy systems. Keep your foundation
          solid.
        </p>
      </div>
    </section>
  );
}
