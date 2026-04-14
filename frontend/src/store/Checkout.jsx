import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ChevronLeft, ChevronRight, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review

  
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen transition-colors duration-500 font-sans">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1600px]">
        {/* Minimal Stepper */}
        <div className="flex justify-center mb-24">
          <div className="flex items-center space-x-6">
            {['Shipping', 'Payment', 'Review'].map((label, i) => (
              <React.Fragment key={label}>
                <div className={`flex items-center space-x-3 
                  ${step >= i + 1 ? 'text-primary' : 'text-primary/20'}`}>
                  <span className={`text-[10px] w-6 h-6 flex items-center justify-center font-black rounded-full border
                    ${step >= i + 1 ? 'border-primary' : 'border-primary/10'}`}>{i + 1}</span>
                  <span className="text-[10px] uppercase font-black tracking-widest">{label}</span>
                </div>
                {i < 2 && <div className="w-12 h-px bg-primary/10" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Left Column: Form Sections */}
          <div className="lg:col-span-7 space-y-24">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.section 
                  key="shipping"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-16"
                >
                  <h2 className="text-4xl font-serif font-black tracking-tighter uppercase italic leading-none">Shipping Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[9px] uppercase font-black tracking-[0.4em] text-primary/40 block">Full Name</label>
                      <input type="text" placeholder="JULIANNE MOORE" className="w-full bg-transparent border-b border-primary/20 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all" />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <label className="text-[9px] uppercase font-black tracking-[0.4em] text-primary/40 block">Address</label>
                      <input type="text" placeholder="124 FIFTH AVENUE, APARTMENT 4B" className="w-full bg-transparent border-b border-primary/20 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[9px] uppercase font-black tracking-[0.4em] text-primary/40 block">City</label>
                      <input type="text" placeholder="NEW YORK" className="w-full bg-transparent border-b border-primary/20 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[9px] uppercase font-black tracking-[0.4em] text-primary/40 block">Country</label>
                      <input type="text" placeholder="UNITED STATES" className="w-full bg-transparent border-b border-primary/20 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div className="pt-8 flex justify-between items-center">
                    <Link to="/cart" className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                      <ChevronLeft size={16} />
                      Back to Bag
                    </Link>
                    <button 
                      onClick={() => setStep(2)}
                      className="bg-primary text-surface px-12 py-5 text-xs font-black tracking-[0.3em] uppercase hover:opacity-90 transition-opacity flex items-center gap-4"
                    >
                      Payment Details
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.section>
              )}

              {step === 2 && (
                <motion.section 
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-16"
                >
                  <h2 className="text-4xl font-serif font-black tracking-tighter uppercase italic leading-none">Payment Information</h2>
                  
                  <div className="grid grid-cols-3 gap-4 mb-12">
                     {['Credit Card', 'PayPal', 'Apple Pay'].map((method, i) => (
                       <button key={method} className={`py-6 border flex flex-col items-center justify-center gap-4 transition-all
                         ${i === 0 ? 'border-primary bg-primary/5' : 'border-primary/10 opacity-40 hover:opacity-100'}`}>
                         {i === 0 && <CreditCard size={18} strokeWidth={1} />}
                         <span className="text-[10px] font-black uppercase tracking-widest leading-none">{method}</span>
                       </button>
                     ))}
                  </div>

                  <div className="bg-primary/[0.02] p-12 space-y-12 border border-primary/5">
                    <div className="space-y-4">
                      <label className="text-[9px] uppercase font-black tracking-[0.4em] text-primary/40 block">Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border-b border-primary/20 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[9px] uppercase font-black tracking-[0.4em] text-primary/40 block">Expiry Date</label>
                        <input type="text" placeholder="MM / YY" className="w-full bg-transparent border-b border-primary/20 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[9px] uppercase font-black tracking-[0.4em] text-primary/40 block">CVV</label>
                        <input type="password" placeholder="***" className="w-full bg-transparent border-b border-primary/20 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex justify-between items-center">
                    <button 
                      onClick={() => setStep(1)}
                      className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft size={16} />
                      Back to Shipping
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="bg-primary text-surface px-12 py-5 text-xs font-black tracking-[0.3em] uppercase hover:opacity-90 transition-opacity flex items-center gap-4"
                    >
                      Final Review
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.section>
              )}

              {step === 3 && (
                <motion.section 
                  key="review"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-16"
                >
                  <h2 className="text-4xl font-serif font-black tracking-tighter uppercase italic leading-none">Order Review</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                     <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Shipping Destination</h3>
                        <p className="text-sm font-black leading-relaxed">
                          Julianne Moore<br />
                          124 Fifth Avenue, Apt 4B<br />
                          New York, NY 10011<br />
                          United States
                        </p>
                     </div>
                     <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Payment Selection</h3>
                        <p className="text-sm font-black leading-relaxed">
                          Visa ending in •••• 4242<br />
                          Expires 12/26
                        </p>
                     </div>
                  </div>

                  <div className="pt-8 flex justify-between items-center">
                    <button 
                      onClick={() => setStep(2)}
                      className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft size={16} />
                      Back to Payment
                    </button>
                    <button 
                      className="bg-primary text-surface px-16 py-6 text-xs font-black tracking-[0.4em] uppercase hover:opacity-90 transition-opacity flex items-center gap-4"
                    >
                      COMPLETE PURCHASE
                      <Lock size={16} />
                    </button>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Order Overview */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/[0.02] dark:bg-primary/5 p-12 border border-primary/5 transition-all duration-500"
              >
                <h3 className="text-2xl font-serif font-black tracking-tighter mb-10 leading-none uppercase italic">Overview</h3>
                
                {/* Items */}
                <div className="space-y-8 mb-12">
                   {[
                     { name: 'Sculptural Wool Coat', variant: 'Oatmeal / Size 38', price: 840, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWqjuwWOsPmS_9fwymgYEO7lZRszfhJZHPRDqoL0RB9LYN_Kv9E994Xfj9EDoeKAOHehd3iyAFCvcxv2uNHXO0fA7Gk2gokMPlIo65IsvSlGb75tn3yCzvN-eifv88QHBR7AiOjM-x4gmfdp6-2whdjqSRMuBSxeeZlqHlPxH47JCDy7GRiW58dNLKN7SJ4ywMJm-usoJLEaHT2-hFZGqo_PHAvJOTcLSuqrvXVqg2dKE6bClu6acnE3W8OhKJOLvrBpV9loEy7UA' },
                     { name: 'Archival Leather Boots', variant: 'Noir / Size 39', price: 1250, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJJA1gqinUwoubmkH95-LxJEJ9hE4h8NBIQlbxnqMxgax2SI8nZHMj_aRAPoZYhzclQq7dovmImoSPypcusdWWa-MLgPIDX0_aca7to6krrBQ4KQRX4gBD1l8yRBi0Q5-2FqUm8MY7dPY40FLeWzvchVhZWTDAaZ7dSO9duWTl1eCCxlfCIeis_cHhHk_fNN50Xlp0PM_w8qQoOTa9AtiavEupK3mXhum4RbJ5jEyDcUrOk3K4I0nx3iZbfioit9pb0LXvCsTeyJ4' }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6">
                        <div className="w-20 h-28 bg-primary/5 flex-shrink-0 overflow-hidden grayscale brightness-90">
                           <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                           <div className="space-y-1">
                              <h4 className="text-xs font-black tracking-tight uppercase leading-tight">{item.name}</h4>
                              <p className="text-[9px] text-primary/40 font-black tracking-widest uppercase">{item.variant}</p>
                           </div>
                           <div className="flex justify-between items-baseline pt-2">
                              <span className="text-[10px] font-black opacity-30">QTY: 1</span>
                              <span className="text-sm font-black tracking-tighter">€{item.price}</span>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>

                {/* Subtotal */}
                <div className="space-y-4 pt-10 border-t border-primary/10">
                   <div className="flex justify-between items-center text-[10px] tracking-[0.25em] uppercase font-black opacity-40">
                      <span>Subtotal</span>
                      <span>€2,090.00</span>
                   </div>
                   <div className="flex justify-between items-center text-[10px] tracking-[0.25em] uppercase font-black opacity-40">
                      <span>Shipping</span>
                      <span>€15.00</span>
                   </div>
                   <div className="flex justify-between items-center text-[10px] tracking-[0.25em] uppercase font-black opacity-40">
                      <span>EST. TAX</span>
                      <span>€184.45</span>
                   </div>
                   <div className="flex justify-between items-end pt-8">
                      <span className="text-lg font-black tracking-tighter uppercase italic leading-none">Final Total</span>
                      <span className="text-3xl font-serif font-black tracking-tighter leading-none">€2,289.45</span>
                   </div>
                </div>

                {/* Security Icons */}
                <div className="mt-12 flex justify-center space-x-10 opacity-10">
                   <ShieldCheck size={20} />
                   <Truck size={20} />
                   <Lock size={20} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
