import AboutSection from "./AboutUs";
import CryptoCards from "./CryptoCards";
import CryptoCharts from "./CryptoCharts";
import CTASection from "./CTASection";
import Footer from "./Footer";
import NewsSection from "./ForexNews";
import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

function LandingPage() {
  return (
    <div className="flex flex-col">
        <Header/>
        <Hero/>
        <HowItWorks/>
        <CryptoCards/>
        <CryptoCharts/>
        <NewsSection/>
        <AboutSection/>
        <Testimonials/>
        <CTASection/>
        <Footer/>
    </div>
  );
}

export default LandingPage; 