type DescriptionProps = {
  variant?: "mobile" | "desktop";
};

export default function Description({ variant = "mobile" }: DescriptionProps) {
  const className =
    variant === "desktop"
      ? "landing-description landing-description--desktop"
      : "landing-description landing-description--mobile";

  return (
    <section className={className} data-testid={`description-${variant}`}>
      <DescriptionContent />
    </section>
  );
}

function DescriptionContent() {
  return (
    <>
      <p className="landing-description__copy">
        We build and maintain the systems that keep your business running. No
        hype, no rewrites, just reliable software.
      </p>
      <div className="landing-description__rule" aria-hidden />
      <p className="landing-description__since">Since 2026</p>
    </>
  );
}
