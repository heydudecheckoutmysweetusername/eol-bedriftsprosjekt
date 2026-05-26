import Header from "./components/header";
import Carousel from "./components/carousel";
import TrustedBy from "./components/trusted-by";
import ButtonPair from "./components/button-pair";
import Faq from "./components/faq";
import AboutSection from "./components/about-section";

export default function LandingPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[402px] flex-col gap-[10px] bg-green-light px-[10px]">
      <Header />

      <main className="flex flex-col items-center gap-[18px] px-[28px]">
        <Carousel />

        <TrustedBy />

        <ButtonPair />

        <div className="w-full px-4 py-2">
          <div className="h-px w-full bg-current opacity-20" />
        </div>

        <Faq />

        <AboutSection />
      </main>
    </div>
  );
}
