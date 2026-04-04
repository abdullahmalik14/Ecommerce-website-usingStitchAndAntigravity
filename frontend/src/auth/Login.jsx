import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500 font-sans">
      {/* Background Editorial Element */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEwv4RrWVhfuppaOHWMm6ntkjbwv-9ehamB9a4B9R2q2_5Pv7-0r1_AfT7v33ddMpXKRmn00eb9iIc81r0FUg0HkeZgJa1rSSKyfbyW9fuJOQBDjTMsCCfjnc1FzfJiJSQXR-QvNALAoJteu2RhOFPZNM0j8hCGbsIHjNUH6jzI8CaG2jQlWj-pl5AmF_OUNSf-ysa2sVL48f5krv1nLpy54JTqbGde3E8HMuo_GYixmBocNfOpBeqK1SIpVwpc0N0pbcbPyEUWMw" 
          alt="Editorial Background" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md px-8"
      >
        <div className="bg-surface/40 p-12 backdrop-blur-xl border border-primary/5 shadow-2xl dark:shadow-none transition-all duration-500">
          <header className="mb-12 text-center">
            <h1 className="font-serif text-4xl font-black tracking-tighter text-primary mb-4 uppercase italic">Welcome Back</h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-primary/40 font-black">Access your private archive</p>
          </header>

          <form className="space-y-10">
            <div className="space-y-3 group">
              <label className="block text-[10px] tracking-[0.3em] uppercase text-primary/30 font-black group-focus-within:text-primary transition-colors">
                Identifier
              </label>
              <input 
                type="email" 
                placeholder="email@atelier-noir.com"
                className="w-full bg-transparent border-b border-primary/10 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-primary/10"
              />
            </div>

            <div className="space-y-3 group">
              <div className="flex justify-between items-end">
                <label className="block text-[10px] tracking-[0.3em] uppercase text-primary/30 font-black group-focus-within:text-primary transition-colors">
                  Credential
                </label>
                <Link to="/forgot-password" size="sm" className="text-[9px] tracking-widest uppercase text-primary/30 hover:text-primary transition-colors font-black underline underline-offset-4 decoration-primary/10 hover:decoration-primary">
                  Forgot?
                </Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-primary/10 py-4 text-xs font-black tracking-widest focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-primary/10"
              />
            </div>

            <div className="pt-6">
              <button className="w-full bg-primary text-surface py-6 text-xs font-black tracking-[0.4em] uppercase flex justify-between items-center group hover:opacity-95 transition-all">
                <span>Enter the Archive</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <footer className="mt-16 text-center">
             <p className="text-[10px] tracking-widest uppercase text-primary/30 mb-4 font-black">New to the studio?</p>
             <Link to="/auth/signup" className="text-[11px] tracking-[0.2em] uppercase text-primary font-black underline underline-offset-8 decoration-primary/20 hover:decoration-primary transition-all">
                Create Account
             </Link>
          </footer>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
