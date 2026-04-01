import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const ForgotPassword = () => {
  return (
    <div className="pt-40 pb-20 bg-surface min-h-screen flex items-center justify-center px-6 text-center transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <h1 className="text-5xl md:text-6xl font-sans font-black tracking-tighter uppercase leading-none italic font-bold">Account <br /> <span className="not-italic font-black">Recovery</span></h1>
        <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-black opacity-30 mt-8 mb-16 leading-loose">
          Enter your access email to receive recovery instructions
        </p>

        <div className="bg-surface-container p-12 border border-primary/5 glass relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          <Input label="Access Email" type="email" placeholder="archive@atelier.com" />
          <Button variant="primary" className="w-full !py-6 text-[10px] tracking-[0.3em] mt-12">Submit Recovery</Button>
          
          <Link to="/auth/login" className="block mt-12 text-[10px] uppercase font-black tracking-widest opacity-30 hover:opacity-100 transition-opacity border-b border-primary/5 hover:border-primary/20 w-fit mx-auto pb-1">
            Back to Entry
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
