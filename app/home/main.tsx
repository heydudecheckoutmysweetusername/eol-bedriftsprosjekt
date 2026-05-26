import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ContactSales from "./components/contact-sales";
import ReadMoreDropdown from "./components/read-more-dropdown";
import Footer from "./components/footer";

function MenuSeparator() {
  return (
    <div className="flex w-full justify-center py-[7.5px] xl:py-[8px]">
      <div className="h-[1px] w-[370px] bg-green-normal xl:w-full xl:max-w-[1248px]" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[402px] flex-col gap-[10px] bg-green-light px-[10px] xl:w-full xl:items-center">
      <Header />

      <main className="flex w-full flex-col items-center xl:gap-[101px] xl:px-[65px] xl:py-[35px] xl:flex-row xl:items-start">
        {/* Left Side (Title + Description) */}
        <div className="flex flex-col xl:w-[472px] xl:shrink-0 xl:border-3 xl:border-[rgba(22,132,21,0.25)] xl:bg-[#ace1af] xl:pr-[15px] xl:py-[13px] xl:items-center xl:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] xl:gap-[10px]">
          {/* Title */}
          <div className="w-full px-[19px] py-[8px] xl:px-0 xl:py-0 xl:pl-[15px]">
            <h1 className="font-sora text-[26px] font-bold leading-[32.76px] text-black xl:w-[427px]">
              We keep your old software alive
            </h1>
          </div>

          {/* Description */}
          <div className="mt-[10px] w-full pl-[17px] py-[10px] xl:mt-0 xl:bg-[rgba(255,255,255,0.5)] xl:w-[402px] xl:flex xl:items-center xl:gap-[10px]">
            <p className="font-body text-[14px] font-bold leading-[16.4px] text-[#1A5121] xl:w-[257px]">
              We build and maintain the systems that keep your business running. No hype, no rewrites, just reliable software.
            </p>
            <div className="hidden xl:block h-[2px] w-[32px] shrink-0 bg-[#39b54a]" />
            <p className="hidden xl:block whitespace-nowrap font-sora text-[10px] font-bold leading-normal text-[#33a343]">
              Since 2026
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-[20px] w-full xl:mt-0 xl:w-[568.91px] xl:shrink-0 xl:px-[10px]">
          <div className="xl:border-[1.086px] xl:border-solid xl:border-[#39b54a]">
            <Carousel />
          </div>
        </div>
      </main>

      <MenuSeparator />

      {/* Trusted By Section */}
      <section className="w-full xl:flex xl:flex-col xl:items-center xl:py-[30px]">
        <h2 className="text-center font-sora text-[24px] font-bold leading-[30.24px] text-[#2A2D2A]">
          Trusted by
        </h2>
        <div className="mt-[22px]">
          <TrustedBy />
        </div>
      </section>

      <MenuSeparator />

      {/* Interactive Elements */}
      <section className="flex w-[370px] flex-col gap-5 py-[10px] xl:w-full xl:max-w-[643px] xl:items-start xl:gap-0 xl:py-0">
        <ContactSales />
        <div className="mt-[20px] w-full xl:mt-[10px]">
          <ReadMoreDropdown />
        </div>
      </section>

      <MenuSeparator />

      <Footer />
    </div>
  );
}
