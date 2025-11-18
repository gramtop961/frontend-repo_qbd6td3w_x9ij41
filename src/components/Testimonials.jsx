import React, { useEffect, useRef } from 'react';

const quotes = [
  { name: 'Elena Park', role: 'CMO, Aether Labs', text: 'MYRVEX delivered an avant‑garde site that doubled demo requests in 60 days. The motion language is stunning and purposeful.' },
  { name: 'Luis Romero', role: 'Founder, Nomad Commerce', text: 'Our global rollout was seamless. The asymmetry and interactivity turned visitors into customers. 40% uplift in conversion.' },
  { name: 'Priya Desai', role: 'Head of Growth, Vertex Capital', text: 'They architected our content engine and optimized for Core Web Vitals. We rank and we convert.' },
];

const Testimonials = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    const gsap = window.gsap;
    if (!gsap || !el) return;
    const width = el.scrollWidth / 2;
    gsap.to(el, {
      x: -width,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x) => `${(parseFloat(x) % -width)}`,
      },
    });
  }, []);

  return (
    <section aria-labelledby="testimonials-heading" className="relative bg-[#121225] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold">What leaders say</h2>
      </div>

      <div className="mt-10 overflow-hidden">
        <div ref={trackRef} className="flex gap-6 will-change-transform px-6">
          {[...quotes, ...quotes].map((q, i) => (
            <blockquote key={i} className="min-w-[320px] max-w-[420px] p-6 rounded-2xl bg-white/5 border border-white/10 text-white/90">
              <p className="text-sm">“{q.text}”</p>
              <footer className="mt-4 text-xs text-white/70">— {q.name}, {q.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
