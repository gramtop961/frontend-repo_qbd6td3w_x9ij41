import React, { useEffect } from 'react';

const values = [
  { title: 'Asymmetry as Strategy', text: 'We design asymmetric layouts that guide attention and spark curiosity, increasing dwell time and engagement.' },
  { title: 'Motion with Meaning', text: 'GSAP-driven micro-interactions that communicate brand character and nudge action.' },
  { title: 'Conversion First', text: 'Every section engineered to reduce friction and amplify outcomes across global markets.' },
];

const About = () => {
  useEffect(() => {
    if (window.AOS) window.AOS.refresh();
  }, []);

  return (
    <section id="about" className="relative bg-[#1A1A2E] text-white py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5" data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-extrabold">We turn bold ideas into living web systems</h2>
            <p className="mt-4 text-white/80">From strategy to ship, MYRVEX fuses visual rebellion with technical rigor. We build immersive experiences that feel premium and perform globally.</p>
            <a href="#services" className="inline-block mt-6 text-[#E67E22] font-semibold hover:underline">Explore Services</a>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6" data-aos="fade-left">
            {values.map((v) => (
              <div key={v.title} className="relative p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur group overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E67E22]/40 rotate-45 opacity-20 group-hover:opacity-40 transition" aria-hidden />
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/80">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
