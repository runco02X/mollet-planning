import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CountrySupport from "./components/CountrySupport";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Features />
      <CountrySupport />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
