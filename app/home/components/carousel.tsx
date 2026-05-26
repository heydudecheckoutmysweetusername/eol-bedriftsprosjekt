import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/carousel-1.png", alt: "Slide 1" },
  { src: "/images/carousel-2.png", alt: "Slide 2" },
  { src: "/images/carousel-3.png", alt: "Slide 3" },
  { src: "/images/carousel-4.png", alt: "Slide 4" },
  { src: "/images/carousel-5.png", alt: "Slide 5" },
];

const indicatorCount = 3;
const autoAdvanceMs = 4000;

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const indicatorCurrent = Math.min(activeSlide, indicatorCount - 1);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAutoPlay(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const scrollTrackToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const track = trackRef.current;
      if (!track) return;
      const slide = track.children[index] as HTMLElement | undefined;
      if (!slide) return;
      track.scrollTo({ left: slide.offsetLeft, behavior });
    },
    [],
  );

  const goToSlide = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      scrollTrackToIndex(index, behavior);
      setActiveSlide(index);
    },
    [scrollTrackToIndex],
  );

  useEffect(() => {
    if (!autoPlay || paused) return;

    const id = window.setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length;
        scrollTrackToIndex(next);
        return next;
      });
    }, autoAdvanceMs);

    return () => window.clearInterval(id);
  }, [autoPlay, paused, scrollTrackToIndex]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;

    const { scrollLeft } = track;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveSlide(closest);
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [overflow-anchor:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected work slides"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.alt}
            className="relative shrink-0 snap-start overflow-hidden border border-rule"
            style={{ width: "min(85vw, 480px)" }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="aspect-[3/2] w-full object-cover"
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-rule bg-surface-raised px-4 py-2">
              <span className="text-xs font-medium text-text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="h-2 w-2 bg-accent" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        {Array.from({ length: indicatorCount }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === indicatorCurrent ? "true" : undefined}
            className={`h-1 transition-all duration-300 ${
              i === indicatorCurrent
                ? "w-8 bg-accent"
                : "w-4 bg-rule hover:bg-text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
