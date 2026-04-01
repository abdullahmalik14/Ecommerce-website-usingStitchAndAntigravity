import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const variants = {
    primary: 'bg-primary text-on-primary px-8 py-5 uppercase font-sans font-black tracking-[0.3em] text-[10px] hover:bg-tertiary transition-all duration-500 shadow-xl shadow-primary/5',
    secondary: 'bg-transparent text-primary border border-primary/10 px-8 py-5 uppercase font-sans font-black tracking-[0.3em] text-[10px] hover:border-primary hover:bg-primary/5 transition-all duration-500',
    outline: 'bg-transparent text-primary border-b border-primary py-2 px-0 uppercase font-sans font-black tracking-[0.2em] text-[10px] hover:italic transition-all duration-500'
  };

  return (
    <motion.button
      type={type}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${className} disabled:opacity-30 disabled:cursor-not-allowed relative overflow-hidden`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;
