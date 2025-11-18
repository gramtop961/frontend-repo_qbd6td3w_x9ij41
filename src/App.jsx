import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) window.AOS.init({ duration: 800, once: true, offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white">
      {/* Skip link for accessibility */}
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 px-3 py-2 bg-white text-black rounded">Skip to content</a>

      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-[#1A1A2E]/60 border-b border-white/10">
        <nav className="container mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-wide text-white">MYRVEX</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-[#E67E22]">About</a>
            <a href="#services" className="hover:text-[#E67E22]">Services</a>
            <a href="#portfolio" className="hover:text-[#E67E22]">Work</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-[#E67E22] text-[#1A1A2E] font-semibold">Free Audit</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-[#121225] border-t border-white/10 py-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} MYRVEX. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-[#E67E22]">Privacy</a>
            <a href="#" className="hover:text-[#E67E22]">Terms</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <a href="#contact" className="fixed bottom-6 right-6 px-4 py-3 rounded-xl bg-[#E67E22] text-[#1A1A2E] font-semibold shadow-lg hover:shadow-xl">
        Ignite Growth
      </a>
    </div>
  );
}

export default App;
