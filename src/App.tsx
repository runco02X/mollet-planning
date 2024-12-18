import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CountrySupport from "./components/CountrySupport";
import SocialProof from "./components/SocialProof";

function App() {
  return (
    <div className="bg-cream">
      <Header />
      <Hero />
      <Features />
      <CountrySupport />
      <HowItWorks />
      <SocialProof />
      <CTA />

      <Footer />
    </div>
  );
}

export default App;
