import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../assets/images';

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
              src={images.about.studio} 
              alt="Artistic B&W tailoring studio" 
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000"
              loading="eager"
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
                className="bg-primary/5 dark:bg-primary/10 w-4/5 aspect-3/4 absolute -top-8 -left-8 z-0"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src={images.about.fabric} 
                alt="Detail of fabric texture" 
                className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
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

        {/* Core Values Section - New */}
        <section className="py-40 bg-surface border-y border-primary/5">
          <div className="max-w-[1800px] mx-auto px-8 lg:px-24">
             <div className="text-center mb-24">
                <h2 className="text-[10px] tracking-[0.6em] text-primary/30 font-black uppercase mb-4">Our Foundations</h2>
                <h3 className="text-4xl md:text-6xl font-serif italic tracking-tighter">THE ARCHIVE PRINCIPLES</h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                  { 
                    title: 'Sustainable Sourcing', 
                    desc: 'We partner with historic mills that prioritize organic fibers and ethical transparency.',
                    icon: 'Material' 
                  },
                  { 
                    title: 'Timeless Silhouette', 
                    desc: 'Designed to outlive trends, our garments focus on structural integrity and classic form.',
                    icon: 'Design' 
                  },
                  { 
                    title: 'Honest Craft', 
                    desc: 'Transparency in every seam. We value the human hand and the time required for excellence.',
                    icon: 'Craft' 
                  }
                ].map((val, idx) => (
                  <motion.div 
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-12 h-12 border border-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-surface transition-colors duration-500">
                      <span className="text-[10px] font-black">{idx + 1}</span>
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-4">{val.title}</h4>
                    <p className="text-primary/60 font-medium leading-relaxed">{val.desc}</p>
                  </motion.div>
                ))}
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
                  Connect with the archive.
                </motion.h2>
                <div className="space-y-12">
                  <div className="space-y-4">
                    <p className="text-[10px] tracking-widest uppercase font-black opacity-30">London Atelier</p>
                    <p className="text-xl font-medium max-w-xs">22 Savile Row, Mayfair, London W1S 3PR, UK</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] tracking-widest uppercase font-black opacity-30">Client Inquiries</p>
                    <p className="text-xl font-medium">concierge@thearchive.com</p>
                    <p className="text-xl font-medium">+44 (0) 20 7946 0852</p>
                  </div>
                </div>
              </div>

              {/* Story Highlight */}
              <div className="relative group">
                <div className="absolute -bottom-10 -right-10 w-full h-full bg-primary/5 -z-10 group-hover:-bottom-14 group-hover:-right-14 transition-all duration-1000" />
                <img 
                  src={images.about.finishedGarment} 
                  alt="A finished tailored garment" 
                  className="w-full h-full object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
