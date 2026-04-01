import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Grid, Filter, ChevronDown, Monitor, Sparkle, Globe, UserCheck, ShieldCheck, ConciergeBell } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  const [selectedSort, setSelectedSort] = useState('Newest');

  const categories = [
    { name: 'Shirts', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQbN6m6DPnELVSdLbkhTku4p47h-uzOiDB_mxEivBLKQsf2Cb2hyfwXb2UDKx3gZ8ZFxiGZgFxEzvfM9rfwc5lAkFYk-6L54izNThtqwoJHdMJ-_JWi_i9LaiUcLXkRsCU16-AEcJbheYjATQUs7k84KIVZaf0JVsTdfoXMO6NYL3yE3i6Dn9xs3e5dmhdu-dyLKB7dfbvOcqS2p0k6kSKbUFG4dt2oGcT4YYrlnTM5kzScWCfXkKUfQz9DzF9lkWkrOpbCGEZbSE' },
    { name: 'Pants', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwA-Y7-sRMMluDYLmKMTCAH-EQVXkKts7HrhMho0Bqn-r6yP4avTIEajmgO5trGbWnQUzrYcORQHTUKkdlilXriZVj0ZUZErlWRs_7UKiom2GICW58bFBeQ_IQM56b3UqpIbIN2iRjoCEhFSm-6__BRacZf_wAigKtNF0NUHvESadiEe2dzzGKL3GdkP2iSDGzsJmi7rmE0F5oTFmPoZJjoq5PAaFdQ8sYou3IWdg2TIfWtF13AAMwf6tGCKmQPGwu4mgT_6aoa6c' },
    { name: 'Shoes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2oPxwCUhycHBp6dXYtZVDw3LbY0xdsDplRVgG6U0YKXGWNB0KvRxfuzOyrHdohBSKywgpRkOMpxZxIpvHywSR1oHjOwPDdugGkxs_NjHbDxVPpS1UBTFIn1e71ChvV1V5XUDRZRqBXc6LkRBVLUuigqZQO9Ws0iuJ4c_ImauuG0TFxhHwIsnvQHJaEU0AO8RMoMiYzYv8kwXQj3PQOlHDI-Rc8396uW5MIIiJYPINkZo9yNXHQKN6kRaUSE-w8hITrZTm7CKa1xI' },
    { name: 'Watches', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlG-Q4YCKYlEvF1X0zyu9O57h1qJkPn_w43vkJp76wr0dxRXWQKIO6owSP0O-fZUwUXmyioIfdNDECERpZ5KzSTvvV0XYkByID8y47XxYLm-tcNt7bhALfOB-gZi-0-sAVDdBlsDY7C7fHGcU68r_3WlDANkIoTbPG0H9apYIHJGW4euCQUky75Jo1QOJwWCxPCt_IL4rlhBxUZ3_1bN7UMd3YsJHCc6iIViv2RZzq6arKbiRaXkF6_Eo-DpaDHoE3a5nZ3kCi_Cs' },
  ];

  return (
    <div className="bg-surface transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. Hero Section - Exact Design Parity */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 z-10"></div>
        <img 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9kYwygTkEbEerkwQgdisTU9-vtBFzKlRZtbAXFsEMEJguFM_Q0cZ3cZWIW8PfuECwIp3jAqYIRbzGPPUa-9x1j3237n6FIDaSS8zrkp1vq_-8L-FePB-SspyWkAnzQChQXboD9ju7hXsgVw02F4b166wfSJekCH-uKMveqI7jWDNDDJkaNGhQrPKo9ruq7F8PqKGHL7kBLjc-pCJMB5QOaNn6H9bXw3Omt2nS3lpWr4uQo9x-UjhTbyZdksj5_G4N7T2h-ClffY8"
          alt="Male model in sharp black tailored overcoat"
        />
        <div className="relative z-20 px-8 md:px-20 max-w-5xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[10px] md:text-sm uppercase tracking-[0.6em] font-sans font-black mb-6 text-white text-on-primary font-bold"
          >
            Fall/Winter 2024 Archive
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl text-white font-sans font-black leading-none tracking-tighter uppercase mb-12"
          >
            THE NEW <br /> ELEGANCE
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button className="bg-primary text-on-primary px-12 py-6 text-sm tracking-widest font-bold hover:bg-tertiary transition-all duration-300 active:scale-95">
              SHOP NOW
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Collections - 3 Column Grid */}
      <section className="py-32 px-8 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Outerwear */}
          <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLbh-KriRCvTNuE7yHfF0AFWVz67mO2NKCJRNrl-rdlka_Eb-CuCoLZf1G6NeQTYnm16_X5yEWhV_uvnt6Y2hytqvRg6xM6hoaT8eUQMiaaBY7exV3u6rgADfux9E0nmPusXGv4JpEstaGJMDH9lrLDB5xsoP0luRR-0gDwRTLnmYD5N2NPnwlL6ioBlq3YbH6x9MQc4MWstmoAfvasxZLntiz-Du-DN8FEwSKg2DYBLbG5dnCA8vWHQRShMrG0UVzNVTRoCBYOAs"
              alt="Outerwear collection"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl text-white font-sans font-black uppercase">Outerwear</h3>
              <p className="text-white/70 text-[10px] tracking-widest mt-2 uppercase font-black">EXPLORE COLLECTION</p>
            </div>
          </div>
          {/* Tailoring */}
          <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPhIkV9WhTDuQG6ChYxr9ofZy2AYMQ15S2a5SBdKtKcy7MUZnpP2iRnIw7LvE86Sd0l5TcsH9wo4W7pW75Y2D6FQw1TD6u95XpCNxCgO0s4CvObnBSLJMgnb8W8AdQ6_7cpK-gmMCrV3ywqBacO0Vx5LXZ1-C0bgIpan-qcGpClDOCYLzoWVSfqeMSoyRFake3-yNxKVIPOb-0LP7wfGlRrImlMS_FnpSj14w0ZKMAWAyne5tMOk_CgmaKJ-GtH5i2YULeVmSr2Wg"
              alt="Tailoring collection"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl text-white font-sans font-black uppercase">Tailoring</h3>
              <p className="text-white/70 text-[10px] tracking-widest mt-2 uppercase font-black">EXPLORE COLLECTION</p>
            </div>
          </div>
          {/* Accessories */}
          <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG5LmFMcU9FKhomV0OC92bvi5Io_EA4lDEBpygcgZpKrvzzqXsXAQIG3xqp0bz7JwllYB4H0P6HZ3FfTYVOFv0HFVMhprfrvSrnbDrNVPMopWcuH-jh-8welLOESmQcVr-BZUblR84KbzvZeG32h9lijawU3XsXTgqKR-KDvXp6RDY3RRTiNsj6dmPb6bzCYztMon8rAwKc72TH1CLEYSOdHDIXkKpxwL1dD0VbNiRIWIWRjwyokBAjOK5OY_z6DVB1JSpN5s4pro"
              alt="Accessories collection"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/30 transition-colors"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl text-white font-sans font-black uppercase">Accessories</h3>
              <p className="text-white/70 text-[10px] tracking-widest mt-2 uppercase font-black">EXPLORE COLLECTION</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Showcase - Horizontal Scroll */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="px-8 mb-16">
          <h2 className="text-4xl font-sans font-black tracking-tighter uppercase">SHOP BY CATEGORY</h2>
        </div>
        <div className="flex gap-8 overflow-x-auto no-scrollbar px-8 pb-4">
          {categories.map((cat) => (
            <div key={cat.name} className="flex-none w-72 md:w-80 group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 shadow-xl">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                  src={cat.image} 
                  alt={cat.name}
                />
              </div>
              <p className="text-[10px] tracking-[0.4em] uppercase font-sans font-black opacity-40 group-hover:opacity-100 transition-opacity">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Promotional Banner - Exact Style */}
      <section className="relative py-48 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/60 z-10"></div>
        <img 
          className="absolute inset-0 w-full h-full object-cover scale-110" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-PPCXIx6kyhvVzt7CUqwVykotBmAk4C29dAIWaFSzXdQYneqFYnIMBBdPSbiwSA0PTRZIbzTbojbj-9Gkzla52KMxBulUIepEjx6d0P3Gyc5bl-80F3xXCZyAlIH68cRC4Iu1mHlTTanSYHH31ArpS9CZXlwiDyEMbHlC8kj-phdwPrKt0OVf2YsdP9xn18f79-f0O8t64KXeyxvsXdBfEfK3eyj0jvDxHDpwJvjtoCFGGIqLx4eSLsgKVUPAysQbFWu5aGD6qTI"
          alt="Knitwear sale background"
        />
        <div className="relative z-20 px-8">
          <h2 className="text-5xl md:text-8xl text-white font-sans font-black mb-12 tracking-tighter uppercase leading-none">
            30% OFF ALL <br /> <span className="italic">KNITWEAR</span>
          </h2>
          <button className="border-2 border-white text-white px-16 py-6 hover:bg-white hover:text-black transition-all duration-500 tracking-widest text-xs font-black uppercase">
            EXPLORE SALE
          </button>
        </div>
      </section>

      {/* 5. Brand Philosophy - Editorial Spread with Geometry */}
      <section className="py-40 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-32 items-center bg-surface">
        <div className="order-2 md:order-1 space-y-12">
          <h2 className="text-5xl md:text-7xl font-sans font-black uppercase leading-[0.85] tracking-tighter">
            CRAFTED FOR THE <br /> <span className="italic">TIMELESS</span> INDIVIDUAL
          </h2>
          <div className="space-y-8 text-primary/60 font-medium leading-loose text-sm max-w-lg">
            <p>The Archive represents more than fashion. It is a commitment to the permanence of style, utilizing only the finest sustainable materials sourced from historic Italian and Japanese mills.</p>
            <p>Every stitch is an intentional act of craftsmanship. We believe in buying fewer things of higher quality—creating a wardrobe that evolves with you through decades, not seasons.</p>
          </div>
          <button className="text-tertiary border-b-2 border-tertiary pb-3 tracking-[0.3em] font-black text-[10px] uppercase hover:italic transition-all">
            VIEW CRAFTSMANSHIP
          </button>
        </div>
        <div className="order-1 md:order-2 relative group">
          <div className="absolute -bottom-12 -right-12 w-full h-full bg-surface-container -z-10 group-hover:-bottom-16 group-hover:-right-16 transition-all duration-700"></div>
          <img 
            className="w-full aspect-[4/5] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3yfuyhzA3f9ORG6j28olZ-7BAVQzcMOQRNE23oJxqn2qy2KUVSApKNYLVKlSHoGggmlWExEYM2xW3Ih473xNHis1qKBwzeEbi74DRQ7ElyVRYjW_nqjXdJI9AZ5aKxWRO9sbEK_cEhqgr7CkbiiJApm1GiPJCWrtBXN_9vbyEzN-PqaLE5fd8Rx2BfC99uODMeH8QZ4_JY67eelFeVKlBb9ifH7o1oK9Ne5GwNqooVUoJ5NOf0nAxCltI5I4SyQ07KHNymd-QiDk"
            alt="Tailor at work"
          />
        </div>
      </section>

      {/* 6. Testimonials - 3 Column Star Grid */}
      <section className="py-32 bg-surface-container px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {[
            { quote: "The silhouette of the cashmere overcoat is unparalleled. It's an architectural masterpiece for the body.", author: "JULIAN R., LONDON" },
            { quote: "Finally, a brand that understands the balance between heritage tailoring and modern minimalism.", author: "MARCUS T., TOKYO" },
            { quote: "The customer service feels like a private concierge. The entire experience is pure luxury.", author: "DAVID K., NEW YORK" }
          ].map((t, i) => (
            <div key={i} className="space-y-6">
              <div className="flex gap-1 text-tertiary">
                {[1, 2, 3, 4, 5].map(s => <Sparkle key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xl font-sans font-black italic tracking-tighter leading-relaxed text-primary">
                "{t.quote}"
              </p>
              <p className="text-[10px] tracking-widest font-black uppercase opacity-30">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Newsletter Signup - Join the Archive */}
      <section className="py-40 px-8 text-center bg-surface-container-low border-y border-primary/5">
        <h2 className="text-4xl md:text-6xl font-sans font-black mb-6 uppercase tracking-tighter italic">JOIN THE <span className="not-italic">ARCHIVE</span></h2>
        <p className="text-primary/50 max-w-md mx-auto mb-16 font-medium text-sm tracking-tight">Register for early access to our seasonal drops and exclusive editorial content.</p>
        <form className="max-w-md mx-auto flex border-b-2 border-primary/20 pb-4 group focus-within:border-primary transition-colors">
          <input 
            className="bg-transparent border-none focus:ring-0 w-full text-sm tracking-widest font-black uppercase placeholder:opacity-20" 
            placeholder="ENTER YOUR EMAIL ACCESS KEY" 
            type="email"
          />
          <button className="font-black text-[10px] tracking-[0.4em] uppercase hover:text-tertiary transition-colors" type="submit">JOIN</button>
        </form>
      </section>

      {/* 8. Brand Highlights - World-wide Logistics */}
      <section className="py-32 px-8 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center container mx-auto max-w-6xl">
          <div className="space-y-6">
            <Globe className="mx-auto text-primary opacity-20" size={48} strokeWidth={1} />
            <h4 className="text-[10px] font-black tracking-widest uppercase">World-wide Logistics</h4>
            <p className="text-xs text-primary/40 font-medium tracking-tight">Global fulfillment for a global aesthetic.</p>
          </div>
          <div className="space-y-6">
            <ShieldCheck className="mx-auto text-primary opacity-20" size={48} strokeWidth={1} />
            <h4 className="text-[10px] font-black tracking-widest uppercase">Guaranteed Quality</h4>
            <p className="text-xs text-primary/40 font-medium tracking-tight">Uncompromising material sourcing from historic mills.</p>
          </div>
          <div className="space-y-6">
            <ConciergeBell className="mx-auto text-primary opacity-20" size={48} strokeWidth={1} />
            <h4 className="text-[10px] font-black tracking-widest uppercase">Atelier Support</h4>
            <p className="text-xs text-primary/40 font-medium tracking-tight">Dedicated 24/7 concierge for precise tailoring.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
