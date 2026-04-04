import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { images } from '../assets/images';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Midnight Black');
  const [activeTab, setActiveTab] = useState('materials');

  const mainImage = images.details.main;
  const thumbnails = images.details.thumbs;

  const relatedProducts = [
    { name: 'THE ARCHIVE BLAZER', price: 1200, image: images.details.related.blazer },
    { name: 'POPLIN DRESS SHIRT', price: 450, image: images.details.related.shirt },
    { name: 'TAPERED WOOL TROUSER', price: 850, image: images.details.related.trouser },
    { name: 'CHELSEA BOOT 01', price: 1100, image: images.details.related.boot }
  ];

  return (
    <div className="bg-surface pt-32 pb-24 transition-colors duration-500">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Image Gallery - High Fidelity */}
          <div className="flex-1 flex flex-col md:flex-row-reverse gap-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 aspect-3/4 bg-primary/5 dark:bg-primary/10 overflow-hidden relative border border-primary/3"
            >
              <img 
                src={mainImage} 
                alt="Product Featured" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                loading="eager"
              />
            </motion.div>
            
            {/* Vertical Thumbnail Strip */}
            <div className="flex md:flex-col gap-4 md:w-24 overflow-x-auto no-scrollbar">
              {thumbnails.map((thumb, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-3/4 min-w-[80px] md:min-w-full bg-primary/5 border border-primary/10 hover:border-primary transition-all overflow-hidden"
                >
                  <img src={thumb} alt="Preview" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" loading="lazy" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side: Sticky Info Panel */}
          <div className="lg:w-[450px]">
            <div className="lg:sticky lg:top-32 space-y-12">
               <motion.header 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-4"
               >
                 <nav className="flex gap-2 text-[10px] tracking-widest uppercase text-primary/40 font-black">
                   <Link to="/" className="hover:text-primary transition-colors">Archive</Link>
                   <span>/</span>
                   <Link to="/collections" className="hover:text-primary transition-colors">Outerwear</Link>
                 </nav>
                 <h1 className="text-4xl lg:text-5xl font-serif font-black tracking-tighter leading-none uppercase">THE MIDNIGHT OVERCOAT</h1>
                 <p className="text-xl font-sans font-black tracking-tighter">€2,450.00</p>
               </motion.header>

               <div className="space-y-8 font-sans">
                 <p className="text-sm leading-relaxed text-primary/60 max-w-sm">
                   Hand-finished in our London atelier from double-faced 100% Mongolian Cashmere. A timeless silhouette defined by sculptural shoulders and a dramatic floor-length drape.
                 </p>

                 {/* Options */}
                 <div className="space-y-6">
                   <div className="space-y-3">
                     <label className="text-[10px] tracking-widest uppercase font-black text-primary/30">Color: {selectedColor}</label>
                     <div className="flex gap-3">
                       {['#000000', '#2d3035', '#4a4138'].map(c => (
                         <button 
                           key={c}
                           onClick={() => setSelectedColor(c === '#000000' ? 'Midnight Black' : (c === '#2d3035' ? 'Anthracite' : 'Oatmeal'))}
                           className={`w-8 h-8 rounded-full border border-primary/10 transition-all hover:scale-110 
                           ${(c === '#000000' && selectedColor === 'Midnight Black') || (c === '#2d3035' && selectedColor === 'Anthracite') || (c === '#4a4138' && selectedColor === 'Oatmeal') ? 'ring-1 ring-offset-2 ring-primary ring-offset-surface' : ''}`}
                           style={{ backgroundColor: c }}
                         />
                       ))}
                     </div>
                   </div>

                   <div className="space-y-3">
                     <div className="flex justify-between items-end">
                       <label className="text-[10px] tracking-widest uppercase font-black text-primary/30">Select Size</label>
                       <button className="text-[10px] tracking-widest uppercase text-primary underline underline-offset-4 font-black">Size Guide</button>
                     </div>
                     <div className="grid grid-cols-4 gap-2">
                       {['S', 'M', 'L', 'XL'].map(size => (
                         <button 
                           key={size}
                           onClick={() => setSelectedSize(size)}
                           className={`py-3 border text-xs font-black transition-all
                           ${selectedSize === size ? 'bg-primary text-surface border-primary' : 'border-primary/10 hover:border-primary opacity-40 hover:opacity-100'}`}
                         >
                           {size}
                         </button>
                       ))}
                     </div>
                   </div>
                 </div>

                 {/* Action Buttons */}
                 <div className="space-y-4 pt-4">
                   <button className="w-full py-6 bg-primary text-surface text-xs font-black tracking-[0.3em] uppercase hover:opacity-90 transition-opacity">
                     ADD TO BAG
                   </button>
                   <button className="w-full py-6 flex items-center justify-center gap-2 text-xs font-black tracking-[0.3em] uppercase border border-primary/10 hover:bg-primary/5 transition-all">
                     <Heart size={14} />
                     ADD TO WISHLIST
                   </button>
                 </div>

                 {/* Accordions */}
                 <div className="border-t border-primary/10 pt-10 space-y-6">
                    {['materials', 'shipping', 'sustainability'].map(tab => (
                      <div key={tab} className="border-b border-primary/5 pb-6">
                        <button 
                          onClick={() => setActiveTab(activeTab === tab ? '' : tab)}
                          className="w-full flex justify-between items-center text-[10px] font-black uppercase tracking-widest"
                        >
                          {tab === 'materials' ? 'Materials & Care' : (tab === 'shipping' ? 'Shipping & Returns' : 'Sustainability')}
                          {activeTab === tab ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                        <AnimatePresence>
                          {activeTab === tab && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="pt-6 text-xs leading-relaxed text-primary/60 font-medium">
                                {tab === 'materials' && "100% Mongolian Cashmere. Double-faced construction for maximum warmth. Dry clean only. Store on a wide-shoulder hanger."}
                                {tab === 'shipping' && "Complimentary express shipping on all orders over €1,500. Returns are accepted within 14 days for a full refund or exchange."}
                                {tab === 'sustainability' && "Ethically sourced fibers and produced in small batches to reduce waste. Our atelier operates on 100% renewable energy."}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <section className="mt-32 pt-20 border-t border-primary/5">
           <h2 className="text-3xl font-serif font-black tracking-tighter mb-16 uppercase">You May Also Like</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-3/4 bg-primary/5 mb-6 overflow-hidden border border-primary/3">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-black tracking-tight">{p.name}</h3>
                    <p className="text-xs font-medium text-primary/40 uppercase tracking-widest">€{p.price}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
