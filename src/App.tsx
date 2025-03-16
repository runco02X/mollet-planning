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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <CountrySupport />
        <HowItWorks />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
