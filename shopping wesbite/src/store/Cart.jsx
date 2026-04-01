import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, X, Lock, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'RAW-EDGE WOOL TRENCH',
      variant: 'Anthracite / Size 48',
      price: 1450,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRpfG5BBlnLbH7luuZqkMoDC9R7Vd4hGz8scG4q29aJ8VfiBg4hCyvPiwWTDIsPRtzvU5KCVcjQAeLf06Pi2GnAdSLCBh-iyqqMC0FuzBO-1tejNsA_MSq0sYWFEBLeQZv8NIcXS2A_2vqMGGJqjhsR7QNgZP1QuZ5XL-XaZD_Z_ySUgRmlOwQATqnE92DCIiWzJ1Cdx2GXxwFfceA5wzT68okLm9X49TdKKKpx3rnraxp7V3L_0jlcIf3Asd6kYudBXF2zpb9A6o'
    },
    {
      id: 2,
      name: 'ARCHIVE SILK OXFORD',
      variant: 'Optic White / Size M',
      price: 420,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfbaUvHjY0qZJ56Nj9_LxtlwBmQ4FYy7UlgDI53b-xrrKBz9l5tWswsMqKmCUaspcHdlgo6ZnNh5Ev4bOyFxbqcMdSvnbif17ttiNmGea_Toz19MQ_eVFIeJB8oKNoxUcY6nVikh_l3Z-vZW2j_5EQxFSORYFktmA2WpzR5virj1fMbC1p4CsCjUSWs1OmiTfrF-cviVsSjMtYkna50JJdaNGfYP9HpiQhlwYeya1w5ZSd6rSyvYo2jNSPKHrCSv2-JEGGafgKJmM'
    }
  ]);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen transition-colors duration-500 font-sans">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1600px]">
        {/* Cart Header */}
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-primary leading-none uppercase"
          >
            Shopping Bag
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-sans text-[10px] tracking-[0.4em] uppercase text-primary/40 font-black"
          >
            {items.length} ITEMS IN YOUR CURATION
          </motion.p>
        </header>

        <div className="flex flex-col lg:flex-row gap-24">
          {/* Item List (Main Canvas) */}
          <div className="flex-grow space-y-16">
            <AnimatePresence>
              {items.map((item, i) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-12 pb-16 items-start border-b border-primary/5 group"
                >
                  <div className="w-full sm:w-56 aspect-[3/4] bg-primary/5 dark:bg-primary/10 overflow-hidden border border-primary/[0.03]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-2 w-full h-full">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-serif font-black tracking-tighter uppercase leading-none">{item.name}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-primary/40 font-black">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-primary/30 hover:text-primary transition-colors hover:scale-110"
                      >
                        <X size={20} strokeWidth={1} />
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap items-end justify-between mt-12 gap-8">
                       <div className="flex items-center space-x-10 p-4 border border-primary/5 bg-primary/[0.02]">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-primary/70 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-[10px] font-black uppercase tracking-widest">{item.quantity}</span>
                          <button 
                             onClick={() => updateQuantity(item.id, 1)}
                             className="p-1 hover:text-primary/70 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                       </div>
                       <div className="font-serif text-2xl font-black tracking-tighter">
                          €{(item.price * item.quantity).toLocaleString()}
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {items.length === 0 && (
              <div className="py-20 text-center">
                 <ShoppingBag size={48} className="mx-auto mb-8 opacity-10" strokeWidth={1} />
                 <p className="text-sm font-black opacity-30 tracking-widest uppercase">Your bag is currently empty.</p>
                 <Link to="/collections" className="mt-8 inline-block text-xs font-black tracking-widest uppercase underline underline-offset-8">Continue Browsing</Link>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <aside className="w-full lg:w-[450px]">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary/5 dark:bg-primary/10 p-12 sticky top-32 border border-primary/[0.03] shadow-2xl dark:shadow-none transition-all duration-500"
            >
              <h2 className="text-2xl font-serif font-black tracking-tighter mb-10 uppercase italic">Summary</h2>
              
              <div className="space-y-8 mb-12">
                 <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-black">
                    <span className="text-primary/40">Item Subtotal</span>
                    <span>€{subtotal.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-black">
                    <span className="text-primary/40">Shipping</span>
                    <span>Calculated at Checkout</span>
                 </div>
                 <div className="pt-8 border-t border-primary/10 flex justify-between items-baseline">
                    <span className="text-lg font-black tracking-tighter uppercase italic">Total</span>
                    <span className="text-3xl font-serif font-black tracking-tighter leading-none whitespace-nowrap">€{subtotal.toLocaleString()}</span>
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                 <Link 
                   to="/checkout"
                   className="w-full bg-primary text-surface py-6 text-xs font-black tracking-[0.3em] uppercase flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
                 >
                    SECURE CHECKOUT
                    <Lock size={12} />
                 </Link>
                 <Link 
                   to="/collections"
                   className="block w-full text-center py-4 text-[10px] font-black tracking-[0.3em] uppercase underline underline-offset-8 text-primary/40 hover:text-primary transition-all"
                 >
                    CONTINUE BROWSING
                 </Link>
              </div>

              {/* Brand Note */}
              <div className="mt-16 pt-8 border-t border-primary/10 opacity-30 italic">
                <p className="text-[10px] leading-relaxed">
                  Each piece in the Archive collection is meticulously handcrafted by our artisans. Complimentary carbon-neutral shipping is included on all eligible orders.
                </p>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
