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
    <div className="mx-auto w-full overflow-hidden" data-testid="carousel">
      <div
        className="flex gap-[23px] transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(${current} * -1 * (100% + 23px)))`,
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="h-[175px] w-full shrink-0 lg:h-[380px]">
            <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover rounded-[5px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
