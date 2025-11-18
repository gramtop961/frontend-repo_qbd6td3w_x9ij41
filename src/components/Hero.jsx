import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return;
    // Floating CTA button subtle motion
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(ctaRef.current, { y: -6, duration: 1.6, ease: 'power1.inOut' })
      .to(ctaRef.current, { y: 0, duration: 1.6, ease: 'power1.inOut' });
  }, []);

  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[640px] overflow-hidden bg-[#1A1A2E] text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient + grid overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/30 via-[#1A1A2E]/60 to-[#1A1A2E]" />
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="#ffffff10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E67E22] animate-pulse" />
            <span className="text-xs tracking-wide uppercase">Global Creative Web Builder</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Build Bold. Scale Global. Craft Experiences that Convert.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            MYRVEX engineers anti-mainstream websites with asymmetrical aesthetics, kinetic interactions and conversion-first strategy. We turn digital presence into global growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              ref={ctaRef}
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E67E22] text-[#1A1A2E] font-semibold shadow-[0_10px_30px_rgba(230,126,34,0.35)] hover:shadow-[0_12px_36px_rgba(230,126,34,0.5)] transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E67E22] focus-visible:ring-offset-[#1A1A2E]"
              aria-label="Ignite Global Growth – Free Audit Now"
            >
              Ignite Global Growth – Free Audit Now
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              View Live Work
            </a>
          </div>
        </div>

        {/* Asymmetrical floating shape */}
        <div className="hidden lg:block relative ml-auto">
          <div className="absolute -top-10 -right-16 w-64 h-64 rotate-12 bg-gradient-to-br from-[#E67E22] to-[#E67E22]/50 rounded-[2rem] blur-2xl opacity-30" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default Hero;
