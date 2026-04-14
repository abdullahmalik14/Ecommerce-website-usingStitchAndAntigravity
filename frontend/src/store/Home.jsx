import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkle, Globe, ShieldCheck, ConciergeBell, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { images } from '../assets/images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Outerwear', image: images.collections.outerwear },
    { name: 'Tailoring', image: images.collections.tailoring },
    { name: 'Knitwear', image: images.categories.shirts },
    { name: 'Shirts', image: images.categories.pants },
    { name: 'Shoes', image: images.categories.shoes },
    { name: 'Accessories', image: images.collections.accessories },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/collections?category=${categoryName}`);
  };

  return (
    <div className="bg-surface transition-colors duration-500 overflow-x-hidden">
      
      {/* 1. Hero Section - Cinematic Entrance */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <motion.div 
          style={{ 
            translateY: 'var(--scroll-y)',
            scale: 'var(--scroll-scale)'
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-primary/30 z-10 transition-opacity duration-1000"></div>
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src={images.hero}
            alt="Male model in sharp black tailored overcoat"
          />
        </motion.div>
        
        <div className="relative z-20 px-8 md:px-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] md:text-sm uppercase tracking-[0.6em] font-sans font-black mb-6 text-white/90 drop-shadow-sm">
              Fall/Winter 2024 Archive
            </p>
            
            <h1 className="text-6xl md:text-9xl text-white font-sans font-black leading-none tracking-tighter uppercase mb-12 drop-shadow-2xl">
              THE NEW <br /> <span className="italic font-serif">ELEGANCE</span>
            </h1>
            
            <div className="flex flex-wrap gap-8 items-center">
              <Link to="/collections">
                <button className="group relative bg-primary text-on-primary px-16 py-6 text-xs tracking-[0.3em] font-black uppercase overflow-hidden transition-all duration-500 hover:tracking-[0.5em]">
                  <span className="relative z-10">SHOP NOW</span>
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    className="absolute inset-0 bg-tertiary transition-transform duration-500 -z-0"
                  />
                </button>
              </Link>
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="text-white text-[10px] tracking-[0.4em] font-black uppercase border-b border-white/30 pb-2 hover:border-white transition-all"
              >
                EXPLORE ARCHIVE
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* 2. Featured Collections - Staggered Scroll Reveal */}
      <section className="py-32 px-8 bg-surface">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { title: 'Outerwear', img: images.collections.outerwear },
            { title: 'Tailoring', img: images.collections.tailoring },
            { title: 'Accessories', img: images.collections.accessories },
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              onClick={() => handleCategoryClick(item.title)}
              className="group relative aspect-3/4 overflow-hidden cursor-pointer"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-700"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                 <h3 className="text-4xl text-white font-sans font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                 <p className="text-white/80 text-[10px] tracking-[0.4em] uppercase font-black border-b border-white/30 pb-2">EXPLORE</p>
              </div>
              <div className="absolute bottom-10 left-10 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-2xl text-white font-sans font-black uppercase tracking-tight">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Category Showcase - High-Fidelity Swiper Slider */}
      <section className="py-40 bg-surface-container-low overflow-hidden">
        <div className="px-8 md:px-20 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[10px] tracking-[0.6em] text-primary/30 font-black uppercase mb-4 italic">The Curated Archive</h4>
            <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter uppercase leading-none">SHOP BY <br /> CATEGORY</h2>
          </motion.div>
          
          <div className="flex gap-4 mb-2">
            <button className="category-prev w-14 h-14 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-surface transition-all active:scale-90">
              <ChevronLeft size={20} />
            </button>
            <button className="category-next w-14 h-14 border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-surface transition-all active:scale-90">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="px-8 md:px-20">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1.2}
            navigation={{
              prevEl: '.category-prev',
              nextEl: '.category-next',
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1440: { slidesPerView: 4.5 },
            }}
            className="category-swiper overflow-visible"
          >
            {categories.map((cat, idx) => (
              <SwiperSlide key={cat.name}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => handleCategoryClick(cat.name)}
                >
                  <div className="aspect-[4/5] overflow-hidden mb-8 shadow-2xl relative">
                    <img 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                      src={cat.image} 
                      alt={cat.name}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="flex items-center justify-between overflow-hidden">
                    <p className="text-[10px] tracking-[0.4em] uppercase font-sans font-black text-primary/40 group-hover:text-primary transition-colors">
                      {cat.name}
                    </p>
                    <div className="h-[1px] flex-1 bg-primary/10 mx-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    <span className="text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 4. Promotional Banner - High Fidelity Motion */}
      <section className="relative py-64 flex items-center justify-center text-center overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover" 
          src={images.promotions.knitwearSale}
          alt="Knitwear sale background"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 px-8"
        >
          <h2 className="text-6xl md:text-9xl text-white font-sans font-black mb-12 tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">
            THE ARCHIVE <br /> <span className="italic font-serif font-black opacity-80 text-white">SEASON SALE</span>
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button 
              onClick={() => handleCategoryClick('Knitwear')}
              className="bg-white text-primary px-20 py-8 hover:bg-white/90 transition-all duration-500 tracking-[0.4em] text-[10px] font-black uppercase shadow-2xl"
            >
              EXPLORE THE SALE 
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 4a. Trending Now - New Section */}
      <section className="py-40 bg-white">
        <div className="px-8 md:px-20 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
             <h4 className="text-[10px] tracking-[0.6em] text-primary/30 font-black uppercase mb-4">In Demand</h4>
             <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter uppercase leading-none">TRENDING <br /> NOW</h2>
          </div>
          <p className="text-primary/60 max-w-sm text-sm font-medium leading-relaxed pb-2">
            The most sought-after silhouettes from our latest drop, redefined for the modern archive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 px-8 md:px-20">
          {[
            { id: 1, name: 'Wool Overcoat', price: '€2,450', img: images.listing.woolOvercoat, cat: 'Outerwear' },
            { id: 2, name: 'Cashmere Knit', price: '€850', img: images.listing.cashmereKnit, cat: 'Knitwear' },
            { id: 3, name: 'Tech Blazer', price: '€1,200', img: images.listing.techBlazer, cat: 'Tailoring' },
            { id: 4, name: 'Oxford Boots', price: '€1,100', img: images.listing.oxfordBoots, cat: 'Shoes' },
          ].map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-primary/5">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                   <p className="text-[10px] tracking-widest text-primary/40 font-black uppercase mb-1">{item.cat}</p>
                   <h3 className="text-sm font-black uppercase tracking-tight">{item.name}</h3>
                </div>
                <p className="text-sm font-black tracking-tighter">{item.price}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Limited Archive
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Brand Philosophy - Editorial Animation */}
      <section className="py-40 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-32 items-center bg-surface">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1 space-y-12"
        >
          <h2 className="text-5xl md:text-7xl font-sans font-black uppercase leading-[0.85] tracking-tighter">
            CRAFTED FOR THE <br /> <span className="italic font-serif text-tertiary">PERMANENT</span> WARDROBE
          </h2>
          <div className="space-y-8 text-primary/60 font-medium leading-relaxed text-lg max-w-lg font-serif italic">
            <p>"The Archive represents more than fashion. It is a commitment to the architecture of the garment, utilizing only the finest sustainable materials."</p>
          </div>
          <div className="text-sm text-primary/80 leading-loose max-w-lg">
             Every stitch is an intentional act of craftsmanship. We believe in buying fewer things of higher quality—creating a wardrobe that evolves with you through decades.
          </div>
          <motion.button 
            whileHover={{ x: 10 }}
            className="text-primary border-b-2 border-primary pb-3 tracking-[0.3em] font-black text-[10px] uppercase hover:text-tertiary hover:border-tertiary transition-all"
          >
            DISCOVER OUR STORY
          </motion.button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 relative group"
        >
          <div className="absolute -inset-4 border border-primary/5 -z-10 group-hover:-inset-8 transition-all duration-1000"></div>
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          <img 
            className="w-full aspect-4/5 object-cover shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] grayscale hover:grayscale-0 transition-all duration-1000" 
            src={images.editorial.tailorAtWork}
            alt="Tailor at work"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* 5a. Featured Quote - New Section */}
      <section className="py-40 bg-primary/5">
        <div className="container mx-auto px-8 max-w-4xl text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
           >
             <Sparkle className="mx-auto text-primary/20 mb-12" size={60} strokeWidth={0.5} />
             <h3 className="text-3xl md:text-5xl font-serif italic leading-tight text-primary/80">
               "Quality is not an act, it is a habit. At The Archive, we don't just dress the individual, we honor the legacy of craftsmanship."
             </h3>
             <div className="mt-12 flex flex-col items-center">
                <div className="w-12 h-[1px] bg-primary/20 mb-6"></div>
                <p className="text-[10px] tracking-[0.5em] font-black uppercase text-primary">Julian Thorne, Founder</p>
             </div>
           </motion.div>
        </div>
      </section>

      {/* 6. Newsletter - Minimal & Professional */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="py-40 px-8 text-center bg-primary text-on-primary border-y border-white/5"
      >
        <h2 className="text-4xl md:text-7xl font-sans font-black mb-6 uppercase tracking-tighter italic opacity-90">THE EDITORIAL LIST</h2>
        <p className="text-white/40 max-w-md mx-auto mb-16 font-medium text-sm tracking-widest uppercase">Early access and exclusive storytelling.</p>
        <form className="max-w-md mx-auto flex border-b border-white/20 pb-4 group focus-within:border-white transition-colors">
          <input 
            className="bg-transparent border-none focus:ring-0 w-full text-xs tracking-[0.3em] font-black uppercase placeholder:text-white/10" 
            placeholder="YOUR EMAIL ARCHIVE KEY" 
            type="email"
          />
          <button className="font-black text-[10px] tracking-[0.4em] uppercase hover:text-tertiary transition-colors" type="submit">ARCHIVE</button>
        </form>
      </motion.section>

      {/* 7. Brand Highlights - World-wide Logistics */}
      <section className="py-32 px-8 bg-surface">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center container mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-6 group">
            <Globe className="mx-auto text-primary opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" size={48} strokeWidth={1} />
            <h4 className="text-[10px] font-black tracking-widest uppercase">Global Distribution</h4>
            <p className="text-xs text-primary/40 font-medium tracking-tight px-10">Express fulfillment to over 120 countries worldwide.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6 group">
            <ShieldCheck className="mx-auto text-primary opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" size={48} strokeWidth={1} />
            <h4 className="text-[10px] font-black tracking-widest uppercase">Lifetime Craftsmanship</h4>
            <p className="text-xs text-primary/40 font-medium tracking-tight px-10">Every archive piece is backed by our lifetime repair guarantee.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6 group">
            <ConciergeBell className="mx-auto text-primary opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" size={48} strokeWidth={1} />
            <h4 className="text-[10px] font-black tracking-widest uppercase">Private Concierge</h4>
            <p className="text-xs text-primary/40 font-medium tracking-tight px-10">Dedicated tailoring consultants available by appointment.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
