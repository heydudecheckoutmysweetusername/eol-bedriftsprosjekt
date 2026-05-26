import { useEffect, useId, useRef, useState } from "react";

function scrollPanelIntoView(panel: HTMLElement) {
  const margin = 24;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";
  const rect = panel.getBoundingClientRect();
  const docTop = window.scrollY + rect.top - margin;
  const docBottom = window.scrollY + rect.bottom + margin;
  const viewHeight = window.innerHeight;

  const top =
    rect.height + 2 * margin <= viewHeight
      ? docTop
      : docBottom - viewHeight;

  window.scrollTo({ top: Math.max(0, top), behavior });
}

const aboutParagraphs = [
  "At our core, we empower businesses that might lack the budget, resources, or specific components needed for future-proof support. We're here to safeguard your company from lost revenue and the massive overhead of developing, maintaining, and installing new software.",
  "Let's face it: most \"new\" tech isn't built for everyone, and software providers often overlook that reality. Technology is inherently unstable—so we stabilize it for you.",
  "We ensure your existing software continues to carry the weight of your infrastructure, preventing collapse caused by forced implementations, feature bloat, or the removal of legacy systems. Keep your foundation solid.",
];

export default function ReadMoreDropdown() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const frame = requestAnimationFrame(() => {
      scrollPanelIntoView(panel);
    });

    return () => cancelAnimationFrame(frame);
  }, [open]);

  return (
    <div className="landing-read-more lg:landing-read-more-wide">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="landing-read-more__toggle lg:landing-read-more-toggle"
      >
        Read more
        <img
          src="/images/caret-down.svg"
          alt=""
          className={`landing-read-more__caret ${open ? "landing-read-more__caret--open" : ""}`}
        />
      </button>
      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          className="landing-read-more__panel lg:landing-read-more-panel"
        >
          <h2 className="landing-read-more__about-heading lg:landing-read-more-about-heading">
            <span className="landing-read-more__about-phrase">
              <span className="landing-read-more__about-word">Maintaining</span>{" "}
              <span className="landing-read-more__about-eol">EOL</span>
            </span>{" "}
            <span className="landing-read-more__about-word">software</span>
          </h2>
          <div className="landing-read-more__about-body lg:landing-read-more-about-body">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
