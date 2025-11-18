import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  useEffect(() => { if (window.AOS) window.AOS.refresh(); }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending…');
    // Simulate async submit
    setTimeout(() => setStatus('Thanks! We will reach out within 24 hours.'), 800);
  };

  return (
    <section id="contact" className="relative bg-[#1A1A2E] text-white py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Let’s ignite your next leap</h2>
          <p className="mt-3 text-white/80">Request a free growth audit. We’ll map quick wins and long‑term compounding gains across UX, content, and performance.</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
            <li>Actionable recommendations within 24 hours</li>
            <li>Benchmarking vs. global leaders</li>
            <li>No obligation. High impact.</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 grid sm:grid-cols-2 gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur" data-aos="fade-left" aria-label="Contact form">
          <label className="block text-sm">
            <span className="text-white/80">Full Name</span>
            <input required type="text" name="name" className="mt-1 w-full px-3 py-2 rounded-lg bg-[#0f0f20] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#E67E22]" />
          </label>
          <label className="block text-sm">
            <span className="text-white/80">Work Email</span>
            <input required type="email" name="email" className="mt-1 w-full px-3 py-2 rounded-lg bg-[#0f0f20] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#E67E22]" />
          </label>
          <label className="block text-sm sm:col-span-2">
            <span className="text-white/80">Project Goals</span>
            <textarea name="message" rows="4" className="mt-1 w-full px-3 py-2 rounded-lg bg-[#0f0f20] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#E67E22]" placeholder="Tell us about the impact you want." />
          </label>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <button type="submit" className="px-6 py-3 rounded-xl bg-[#E67E22] text-[#1A1A2E] font-semibold hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22]">Request Free Audit</button>
            <p aria-live="polite" className="text-sm text-white/70">{status}</p>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <iframe title="MYRVEX Global Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531683!3d-37.8162797420135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0fdfb%3A0x5045675218ceed0!2sWorld%20Trade%20Center!5e0!3m2!1sen!2s!4v1614289041234!5m2!1sen!2s" width="100%" height="320" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default Contact;
