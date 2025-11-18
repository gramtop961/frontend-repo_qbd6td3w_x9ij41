import React, { useEffect } from 'react';

const services = [
  { title: 'Experimental Web Design', desc: 'Anti-template compositions, asymmetry, and kinetic typography that stand out internationally.' },
  { title: 'Headless CMS & Commerce', desc: 'Enterprise-grade content architectures with fast global delivery.' },
  { title: 'Interactive 3D & WebGL', desc: 'Spline and Three.js scenes that enrich storytelling and conversion paths.' },
  { title: 'SEO + Growth Engineering', desc: 'Technical SEO, Core Web Vitals, and CRO baked into the build.' },
  { title: 'Localization at Scale', desc: 'Multilingual, multi-region setups with cultural nuance and accessibility.' },
  { title: 'Performance & Analytics', desc: 'Observability stacks, A/B testing, and growth loops.' },
];

const Services = () => {
  useEffect(() => { if (window.AOS) window.AOS.refresh(); }, []);
  return (
    <section id="services" className="relative bg-[#121225] text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(230,126,34,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(230,126,34,0.08),transparent_45%)]" aria-hidden />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Services engineered for global scale</h2>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-[#E67E22] text-[#1A1A2E] font-semibold">Start a Project</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-aos={i % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
              className={`relative overflow-hidden p-6 rounded-2xl border border-white/10 backdrop-blur bg-white/5 ${i % 3 === 1 ? 'md:translate-y-10' : ''}`}
            >
              <div className="absolute -left-10 -top-10 w-28 h-28 rotate-12 bg-[#E67E22]/30 rounded-2xl opacity-30" aria-hidden />
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/80">{s.desc}</p>
              <button className="mt-4 text-[#E67E22] hover:underline">Learn more</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
