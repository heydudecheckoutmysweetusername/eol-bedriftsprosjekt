type HeroTitleProps = {
  variant?: "mobile" | "desktop";
};

export default function HeroTitle({ variant = "mobile" }: HeroTitleProps) {
  if (variant === "desktop") {
    return (
      <h1 className="landing-hero-title-desktop">
        We keep your old software alive
      </h1>
    );
  }

  return (
    <section className="landing-hero-title-mobile">
      <h1>We keep your old software alive</h1>
    </section>
  );
}
