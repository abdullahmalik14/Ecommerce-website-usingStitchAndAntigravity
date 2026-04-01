import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-surface-container border-t border-primary/5 transition-colors duration-500">
      <div className="container mx-auto px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <h2 className="font-sans text-2xl font-black tracking-tighter uppercase italic">
              THE EDITORIAL <br /> <span className="not-italic">ARCHIVE</span>
            </h2>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary/40 leading-loose">
              © 2024 THE EDITORIAL ARCHIVE. <br /> ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-widest uppercase font-black text-primary">Company</p>
            <div className="flex flex-col gap-4">
              {['About Us', 'Newsletter', 'Careers', 'Atelier'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="font-sans text-[10px] tracking-widest uppercase text-primary/50 hover:text-tertiary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-widest uppercase font-black text-primary">Support</p>
            <div className="flex flex-col gap-4">
              {['Customer Service', 'Privacy Policy', 'Shipping', 'Returns'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="font-sans text-[10px] tracking-widest uppercase text-primary/50 hover:text-tertiary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-widest uppercase font-black text-primary">Social Channels</p>
            <div className="flex flex-col gap-4">
              {['Instagram', 'Vimeo', 'X / Twitter', 'LinkedIn'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="font-sans text-[10px] tracking-widest uppercase text-primary/50 hover:text-tertiary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar Details */}
        <div className="mt-24 pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex space-x-8 text-[8px] uppercase tracking-widest font-black opacity-20">
              <span>Security Guaranteed</span>
              <span>•</span>
              <span>Global Logistics</span>
              <span>•</span>
              <span>Encrypted Data</span>
           </div>
           <div className="text-[10px] font-black italic tracking-tighter opacity-30">
              Designed for the Discerning Eye.
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
