import { useState } from "react";

export default function ReadMoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between bg-[#33A343] px-4 py-[7px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <span className="font-body text-[14px] leading-[16.4px] text-white">Read more</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`text-white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pb-4 pt-2">
          <h2 className="font-heading text-[28px] leading-tight text-green-dark">
            <span className="font-body font-bold text-green-dark">Maintaining</span>{" "}
            <span className="font-heading-condensed font-bold italic" style={{ color: "#1F211F" }}>EOL</span>{" "}
            <span className="font-body font-bold text-green-dark">software</span>
          </h2>
          <div className="mt-4 flex flex-col gap-4 font-body text-sm leading-relaxed text-green-darker">
            <p>
              At our core, we empower businesses that might lack the budget, resources, or specific components needed for future-proof support. We're here to safeguard your company from lost revenue and the massive overhead of developing, maintaining, and installing new software.
            </p>
            <p>
              Let's face it: most "new" tech isn't built for everyone, and software providers often overlook that reality. Technology is inherently unstable—so we stabilize it for you.
            </p>
            <p>
              We ensure your existing software continues to carry the weight of your infrastructure, preventing collapse caused by forced implementations, feature bloat, or the removal of legacy systems. Keep your foundation solid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
