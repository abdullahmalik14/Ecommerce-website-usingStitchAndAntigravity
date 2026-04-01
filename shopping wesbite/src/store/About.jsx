import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-surface transition-colors duration-500">
      <main className="pt-24 min-h-screen">
        {/* Hero Header - High Fidelity */}
        <section className="relative w-full h-[80vh] overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-WUmyrfda7wpNNxjaMNjzHdSS3VLmHUdjl73xHz-FmT22kfOPO1DMDsRIpM69dVHomwjqvvX_AHnXvGGtHnIgJBExLGQy6I-sWJAhH7nf1rlGNJcXVAkhWdClLLjhotmA_5vPdM4Ji7usvFXo2mDQDpep8zjom4wPIuWuaucu4OuzUITzKo5XZQLP_Y6i-P3wUEShDeVcglYZuVxlK8T-6cdiPXeuVH25hRfNU58XYwsJvC-LNN1qXIlzqIxl4qhJiadFlz7qNjc" 
              alt="Artistic B&W tailoring studio" 
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000"
            />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-[0.4em] uppercase mb-6 text-white/80 font-bold"
            >
              Our Heritage
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-5xl md:text-8xl font-serif text-white tracking-tighter italic leading-none"
            >
              THE ATELIER STORY
            </motion.h1>
          </div>
        </section>

        {/* Brand Narrative: Editorial Spread */}
        <section className="py-32 px-8 lg:px-24 bg-surface max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 dark:bg-primary/10 w-4/5 aspect-[3/4] absolute -top-8 -left-8 z-0"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMzuISwDkr0YKh-8wph05jLT0RG3IRmrWnd_xtCjtei_VZnhLtrcYb_eMUhDwBwKYEspKUHlo16flSEJYFiI6N_dtC31XPqb--7cd1ggApEgbmMvcmTwxZG_IcL8Cf5CknXp8kEV8-_7a7sff9racNPZS-mzY_xxdgLg_xVZ30kDVCJO3ijwxrBoWq-7XvoSQq0ihUdQKbyyhugub71ZnWDBjRUTuFxfcFeIqlfnP7Sx5pQTnEXBXWbk7qbuFFUF-_KiHz0iBhoSY" 
                alt="Detail of fabric texture" 
                className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="lg:col-span-7 lg:pt-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif mb-12 leading-tight tracking-tighter"
              >
                A commitment to permanence in a world of transition.
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8 text-primary/70 dark:text-primary/60 leading-relaxed text-lg max-w-2xl font-sans"
              >
                <p>Established in the heart of London, THE EDITORIAL ARCHIVE was born from a singular obsession: the architecture of the garment. We do not follow seasons; we follow the thread of timelessness. Every stitch in our atelier is a deliberate choice, a fusion of ancestral knowledge and contemporary silhouette.</p>
                <p>Our philosophy is rooted in the "Digital Atelier" – a space where the tactile world of heavy-stock patterns meets the precision of modern design. We source exclusively from mills that share our reverence for the raw material, ensuring that every piece that leaves our doors is not just worn, but archived.</p>
                <div className="pt-8">
                  <a href="#" className="inline-block text-primary font-black tracking-widest uppercase text-xs border-b border-primary/30 pb-2 hover:border-primary transition-all">
                    Discover Our Craftsmanship
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Connection Section */}
        <section className="py-32 bg-primary/5 dark:bg-primary/5 transition-colors duration-500">
          <div className="max-w-[1800px] mx-auto px-8 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Contact Information */}
              <div>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-serif italic mb-16 tracking-tight"
                >
                  Connect with the Archive
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    { label: 'General Inquiries', detail: 'studio@the-editorial-archive.com' },
                    { label: 'Press', detail: 'press@the-editorial-archive.com' },
                    { label: 'Wholesale', detail: 'wholesale@the-editorial-archive.com' },
                    { label: 'Flagship Studio', detail: '42 Savile Row, Mayfair, London' }
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="space-y-4"
                    >
                      <h3 className="text-[10px] tracking-[0.3em] uppercase font-black text-primary/40">{item.label}</h3>
                      <p className="text-primary font-sans font-medium">{item.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Contact Form - Simplified Modern */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surface p-12 shadow-2xl dark:shadow-none dark:border dark:border-primary/10 transition-all duration-500"
              >
                <h2 className="text-xl font-sans font-black tracking-widest mb-12 uppercase">Get in Touch</h2>
                <form className="space-y-10">
                  <div className="relative group">
                    <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-primary/10 py-4 text-xs font-black tracking-[0.2em] focus:border-primary focus:ring-0 transition-all outline-none" />
                  </div>
                  <div className="relative group">
                    <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-primary/10 py-4 text-xs font-black tracking-[0.2em] focus:border-primary focus:ring-0 transition-all outline-none" />
                  </div>
                  <div className="relative group">
                     <textarea placeholder="MESSAGE" rows="4" className="w-full bg-transparent border-b border-primary/10 py-4 text-xs font-black tracking-[0.2em] focus:border-primary focus:ring-0 transition-all outline-none resize-none" />
                  </div>
                  <button className="w-full bg-primary text-surface py-6 text-xs font-black tracking-[0.3em] uppercase hover:opacity-90 transition-opacity">
                    Send Inquiry
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Closing Narrative Image */}
        <section className="w-full h-[60vh] overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn9iyMmMkLW868bFQDV90gkp7_NUlAFLGVuUORjHRMb8ujQbWL7i5zcN08v93jLNZAnqwwiD-jMOG_NFgpqKu_aq3lyenUdmy_APUpx5cPi8xNO1BgwVTUDHoxbD44XKI3Cug1q-FTdU8nPqRqdtJrUW2aQ0sZ7IsrPv6UmY7J7mdsjd4Mmz6rkNA-3rU8ALACfyQgagTZVFaxKDxQ4TlUlRKtK1HpyOkQ2VnpMStzufT7zA7Wb7Ap3vs6xbcKYu3fYWqrnfyhSnM" 
            alt="Finished archive garment" 
            className="w-full h-full object-cover grayscale active:grayscale-0 transition-all duration-1000"
          />
        </section>
      </main>
    </div>
  );
};

export default About;
