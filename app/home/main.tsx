import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ContactSales from "./components/contact-sales";
import ReadMoreDropdown from "./components/read-more-dropdown";
import Footer from "./components/footer";

function MenuSeparator() {
  return (
    <div className="w-full py-[7.5px] flex justify-center">
      <div className="h-[1px] w-[370px] bg-green-normal" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[402px] flex-col gap-[10px] bg-green-light px-[10px]">
      <Header />

      <main className="flex w-full flex-col items-center">
        {/* Title */}
        <div className="w-full px-[19px] py-[8px]">
          <h1 className="font-sora text-[26px] font-bold leading-[32.76px] text-black">
            We keep your old software alive
          </h1>
        </div>

        {/* Carousel */}
        <div className="mt-[10px] w-full pl-[70px]">
          <Carousel />
        </div>

        {/* Description */}
        <div className="mt-[10px] w-full pl-[17px] py-[10px]">
          <p className="font-body text-[14px] font-bold leading-[16.4px] text-[#1A5121]">
            We build and maintain the systems that keep your business running. No hype, no rewrites, just reliable software.
          </p>
          <div className="mt-[23px] flex items-center gap-[10px] pl-[267px]">
            <div className="h-[2px] w-[32px] rounded-sm bg-black" />
            <span className="font-sora text-[10px] font-bold leading-[12.6px] text-[#33A343]">
              Since 2026
            </span>
          </div>
        </div>

        <MenuSeparator />

        {/* Trusted By */}
        <div className="w-full py-[10px]">
          <h2 className="text-center font-sora text-[24px] font-bold leading-[30.24px] text-[#2A2D2A]">
            Trusted by
          </h2>
          <div className="mt-[22px]">
            <TrustedBy />
          </div>
        </div>

        <MenuSeparator />

        <ContactSales />
        
        <ReadMoreDropdown />

        <MenuSeparator />

        <Footer />
      </main>
    </div>
  );
}
