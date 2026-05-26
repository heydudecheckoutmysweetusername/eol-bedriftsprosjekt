import { useEffect, useState } from "react";

const slides = [
  { src: "/images/carousel-1.png", alt: "Slide 1" },
  { src: "/images/carousel-2.png", alt: "Slide 2" },
  { src: "/images/carousel-3.png", alt: "Slide 3" },
  { src: "/images/carousel-4.png", alt: "Slide 4" },
  { src: "/images/carousel-5.png", alt: "Slide 5" },
];

type SliderProps = {
  variant?: "mobile" | "desktop";
};

export default function Slider({ variant = "mobile" }: SliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const viewportClass =
    variant === "desktop"
      ? "landing-slider landing-slider--desktop"
      : "landing-slider landing-slider--mobile";

  return (
    <div className={viewportClass} data-testid="slider">
      <div
        className="landing-slider__track"
        style={{ transform: `translateX(calc(-${current} * 100cqw))` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className="landing-slider__slide"
          />
        ))}
      </div>
    </div>
  );
}
