import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(pre-color-scheme: dark)').matches) {
       setIsDarkMode(true);
       document.documentElement.classList.add('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Shop', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
  ];

  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
        ? 'bg-surface/80 backdrop-blur-xl border-b border-primary/5 py-4 shadow-sm' 
        : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-12 flex justify-between items-center">
        {/* Brand Logo - High Fidelity */}
        <div className="flex items-center gap-12">
          <Link to="/" className="group">
            <h1 className="text-2xl font-sans font-black tracking-tighter leading-none mb-0 uppercase group-hover:italic transition-all">
              ARCHIVE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-tight font-sans transition-all relative py-1
                ${pathname === link.path 
                  ? 'text-primary font-black border-b border-primary' 
                  : 'text-primary/40 hover:text-primary font-medium hover:border-b border-primary/20'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* High Fidelity Action Icons */}
        <div className="flex items-center gap-8 text-primary">
          <button 
            onClick={toggleDarkMode}
            className="hover:opacity-70 transition-opacity"
            title="Toggle Appearance"
          >
            {isDarkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <Link to="/auth/login" className="hover:opacity-70 transition-opacity">
            <User size={22} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" className="relative group hover:opacity-70 transition-opacity">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-tertiary text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform">
              2
            </span>
          </Link>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-surface z-[200] p-12 flex flex-col justify-between transition-colors duration-500"
          >
            <div>
              <div className="flex justify-between items-center mb-16">
                <h1 className="text-2xl font-sans font-black tracking-tighter uppercase italic">ARCHIVE</h1>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              <div className="space-y-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-5xl font-sans font-black uppercase tracking-tighter block hover:italic transition-all leading-none"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-primary/5 pt-12">
               <div className="flex justify-between items-center mb-8">
                  <p className="text-[10px] uppercase font-sans font-black tracking-[0.4em] opacity-40">System Preference</p>
                  <button 
                    onClick={toggleDarkMode}
                    className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest"
                  >
                    {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
                    <span>{isDarkMode ? 'Light' : 'Dark'} Mode</span>
                  </button>
               </div>
               <div className="flex space-x-10 text-[10px] uppercase font-sans font-black tracking-widest opacity-60">
                  <a href="#" className="hover:text-tertiary transition-colors">Instagram</a>
                  <a href="#" className="hover:text-tertiary transition-colors">Vimeo</a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
