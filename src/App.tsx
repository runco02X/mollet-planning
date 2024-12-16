import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;