import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ContactSales from "./components/contact-sales";
import ReadMoreDropdown from "./components/read-more-dropdown";
import Footer from "./components/footer";

function MenuSeparator() {
  return (
    <div className="flex w-full justify-center py-[7.5px] lg:py-[8px]">
      <div className="h-[1px] w-[370px] bg-green-normal lg:w-full lg:max-w-[1248px]" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[402px] flex-col gap-[10px] bg-green-light px-[10px] lg:w-full lg:items-center">
      <Header />

      <main className="flex w-full flex-col items-center lg:gap-[101px] lg:px-[65px] lg:py-[35px] lg:flex-row lg:items-start">
        {/* Left Side (Title + Description) */}
        <div className="flex flex-col lg:w-[472px] lg:shrink-0 lg:border-[3px] lg:border-[rgba(22,132,21,0.25)] lg:bg-[#ace1af] lg:pr-[15px] lg:py-[13px] lg:items-center lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] lg:gap-[10px]">
          {/* Title */}
          <div className="w-full px-[19px] py-[8px] lg:px-0 lg:py-0 lg:pl-[15px]">
            <h1 className="font-sora text-[26px] font-bold leading-[32.76px] text-black lg:w-[427px]">
              We keep your old software alive
            </h1>
          </div>

          {/* Description */}
          <div className="mt-[10px] w-full pl-[17px] py-[10px] lg:mt-0 lg:bg-[rgba(255,255,255,0.5)] lg:w-[402px] lg:flex lg:items-center lg:gap-[10px]">
            <p className="font-body text-[14px] font-bold leading-[16.4px] text-[#1A5121] lg:w-[257px]">
              We build and maintain the systems that keep your business running. No hype, no rewrites, just reliable software.
            </p>
            <div className="hidden lg:block h-[2px] w-[32px] shrink-0 bg-[#39b54a]" />
            <p className="hidden lg:block whitespace-nowrap font-sora text-[10px] font-bold leading-normal text-[#33a343]">
              Since 2026
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-[20px] w-full lg:mt-0 lg:w-[568.91px] lg:shrink-0 lg:px-[10px]">
          <div className="lg:border-[1.086px] lg:border-solid lg:border-[#39b54a]">
            <Carousel />
          </div>
        </div>
      </main>

      <MenuSeparator />

      {/* Trusted By Section */}
      <section className="w-full lg:flex lg:flex-col lg:items-center lg:py-[30px]">
        <h2 className="text-center font-sora text-[24px] font-bold leading-[30.24px] text-[#2A2D2A]">
          Trusted by
        </h2>
        <div className="mt-[22px]">
          <TrustedBy />
        </div>
      </section>

      <MenuSeparator />

      {/* Interactive Elements */}
      <section className="flex w-[370px] flex-col gap-5 py-[10px] lg:w-full lg:max-w-[643px] lg:items-start lg:gap-0 lg:py-0">
        <ContactSales />
        <div className="mt-[20px] w-full lg:mt-[10px]">
          <ReadMoreDropdown />
        </div>
      </section>

      <MenuSeparator />

      <Footer />
    </div>
  );
}
