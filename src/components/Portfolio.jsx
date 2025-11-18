import React, { useEffect } from 'react';

const items = [
  { title: 'Aether Labs', tag: 'B2B SaaS', img: 'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Nomad Commerce', tag: 'E‑commerce', img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Vertex Capital', tag: 'FinTech', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Orion Studio', tag: 'Creative', img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop' },
];

const Portfolio = () => {
  useEffect(() => { if (window.AOS) window.AOS.refresh(); }, []);

  return (
    <section id="portfolio" className="relative bg-[#1A1A2E] text-white py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Selected Work</h2>
          <p className="text-white/70 hidden sm:block">Interactive case studies on request</p>
        </div>

        <div className="mt-10 grid md:grid-cols-12 gap-6">
          {items.map((it, idx) => (
            <figure
              key={it.title}
              data-aos={idx % 2 ? 'zoom-in-up' : 'zoom-in'}
              className={`relative overflow-hidden rounded-2xl border border-white/10 group ${idx % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}
            >
              <img src={it.img} alt={`${it.title} – ${it.tag}`} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex items-end">
                <div>
                  <span className="inline-block px-2 py-1 text-xs rounded bg-[#E67E22] text-[#1A1A2E] font-semibold">{it.tag}</span>
                  <h3 className="mt-2 text-xl font-bold">{it.title}</h3>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
