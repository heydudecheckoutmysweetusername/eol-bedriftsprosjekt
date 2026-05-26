export default function PromoVideo() {
  return (
    <section
      id="reklame-video"
      aria-labelledby="reklame-video-heading"
      className="scroll-mt-24 px-6 pt-[clamp(3rem,6vw,5rem)] md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-2 w-2 bg-accent" />
          <h2
            id="reklame-video-heading"
            className="font-display text-xl font-semibold text-text"
          >
            See how we work
          </h2>
        </div>
        <div className="overflow-hidden border border-rule bg-surface-deep">
          <video
            className="aspect-video w-full bg-text object-contain"
            controls
            playsInline
            preload="metadata"
            src="/videos/reklame.mp4"
          >
            <track kind="captions" />
            Your browser does not support embedded video.
          </video>
        </div>
      </div>
    </section>
  );
}
