import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Input from '../components/Input';

const ResetPassword = () => {
  return (
    <div className="pt-40 pb-20 bg-surface min-h-screen flex items-center justify-center px-6 text-center transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <h1 className="text-5xl md:text-6xl font-sans font-black tracking-tighter uppercase leading-none italic font-bold">Secure <br /> <span className="not-italic font-black">Identity</span></h1>
        <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-black opacity-30 mt-8 mb-16 leading-loose">
          Initialize your new Archive access key
        </p>

        <div className="bg-surface-container p-12 border border-primary/5 glass relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          <form className="space-y-12">
            <Input label="New Identity Secret" type="password" placeholder="••••••••" />
            <Input label="Confirm Security Key" type="password" placeholder="••••••••" />
            <Button variant="primary" className="w-full !py-6 text-[10px] tracking-[0.3em] mt-12 px-12">Finalize Secret</Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
