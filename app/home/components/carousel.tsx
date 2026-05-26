import { useState, useEffect } from "react";

const slides = [
  { src: "/images/carousel-1.png", alt: "Slide 1" },
  { src: "/images/carousel-2.png", alt: "Slide 2" },
  { src: "/images/carousel-3.png", alt: "Slide 3" },
  { src: "/images/carousel-4.png", alt: "Slide 4" },
  { src: "/images/carousel-5.png", alt: "Slide 5" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto w-[262px] lg:w-[568px] overflow-hidden" data-testid="carousel">
      <div
        className="flex gap-[23px] transition-transform duration-500 ease-in-out max-lg:-translate-x-[calc(var(--c)*285px)] lg:-translate-x-[calc(var(--c)*591px)]"
        style={{ "--c": current } as React.CSSProperties}
      >
        {slides.map((slide, i) => (
          <div key={i} className="h-[175px] w-[262px] shrink-0 lg:h-[380px] lg:w-[568px]">
            <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover rounded-[5px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
