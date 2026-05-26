import Header from "./components/header";
import HeroTitle from "./components/hero-title";
import HeroPanel from "./components/hero-panel";
import Slider from "./components/slider";
import Description from "./components/description";
import MenuSeparator from "./components/menu-separator";
import TrustedBy from "./components/trusted-by";
import ContactSales from "./components/contact-sales";
import ReadMoreDropdown from "./components/read-more-dropdown";
import Footer from "./components/footer";
import SiteMeta from "./components/site-meta";

function LandingPage() {
  return (
    <div className="landing-shell">
      <header className="landing-inset">
        <Header />
      </header>
      <main className="landing-main">
        <div className="landing-mobile-column lg:hidden">
          <HeroTitle variant="mobile" />
          <Slider variant="mobile" />
          <Description variant="mobile" />
        </div>

        <div className="landing-hero-desktop lg:landing-hero-desktop">
          <HeroPanel>
            <HeroTitle variant="desktop" />
            <Description variant="desktop" />
          </HeroPanel>
          <div className="landing-hero-slider-cell">
            <Slider variant="desktop" />
          </div>
        </div>

        <MenuSeparator />

        <TrustedBy />

        <MenuSeparator />

        <div className="landing-cta-block">
          <ContactSales />
          <ReadMoreDropdown />
        </div>

        <div className="landing-footer-block">
          <Footer />
          <SiteMeta />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
