import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, Mail, Phone, Calendar, ArrowUpRight, Shield } from 'lucide-react';

const Customers = () => {
  const customers = [
    { id: 1, name: 'Alexander Reed', email: 'alex@reed.com', status: 'VIP Collector', spend: '€12,850.00' },
    { id: 2, name: 'Helena Vonn', email: 'vonn@design.studio', status: 'Archive Member', spend: '€4,650.00' },
    { id: 3, name: 'Marcus Thorne', email: 'm.thorne@luxury.co', status: 'VIP Collector', spend: '€22,450.00' },
    { id: 4, name: 'Sofia Chen', email: 'sofia@chen.com', status: 'Archive Member', spend: '€1,100.00' },
  ];

  return (
    <div className="space-y-12 font-sans transition-colors duration-500">
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="space-y-4">
           <h1 className="text-4xl lg:text-6xl font-serif font-black tracking-tighter uppercase italic leading-none">Member Archives</h1>
           <p className="text-[10px] tracking-[0.4em] uppercase text-primary/40 font-black">Managing Global Client Base</p>
        </div>
        <button className="flex items-center gap-3 px-8 py-5 bg-primary text-surface text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-all">
           <UserPlus size={16} />
           <span>Invite Member</span>
        </button>
      </header>

      <div className="bg-primary/5 dark:bg-primary/10 border border-primary/[0.03] overflow-hidden shadow-2xl dark:shadow-none">
        <table className="w-full text-left font-sans text-[10px] font-black tracking-widest uppercase">
           <thead className="border-b border-primary/5">
             <tr className="text-primary/30 italic">
               <th className="py-8 px-10">Collector Information</th>
               <th className="py-8 px-10">Tier Status</th>
               <th className="py-8 px-10">Lifetime Valuation</th>
               <th className="py-8 px-10 text-right">Actions</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-primary/5">
             {customers.map((c, i) => (
               <motion.tr 
                 key={c.id}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.05 }}
                 className="hover:bg-primary/[0.02] transition-colors group cursor-pointer"
               >
                 <td className="py-8 px-10">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                          <img 
                            src={`https://i.pravatar.cc/100?u=${c.email}`} 
                            alt={c.name} 
                            className="w-full h-full object-cover"
                          />
                       </div>
                       <div>
                          <p className="text-sm font-serif font-black tracking-tighter normal-case group-hover:italic transition-all">{c.name}</p>
                          <p className="opacity-30 mt-1 font-black leading-none">{c.email.toUpperCase()}</p>
                       </div>
                    </div>
                 </td>
                 <td className="py-8 px-10">
                    <div className="flex items-center gap-3">
                       <Shield size={12} className={c.status === 'VIP Collector' ? 'text-tertiary' : 'opacity-20'} />
                       <span className={c.status === 'VIP Collector' ? 'text-tertiary' : 'opacity-60'}>{c.status}</span>
                    </div>
                 </td>
                 <td className="py-8 px-10 font-bold">{c.spend}</td>
                 <td className="py-8 px-10 text-right">
                    <button className="text-[9px] font-black tracking-[0.2em] opacity-30 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2 ml-auto">
                       PROFILING
                       <ArrowUpRight size={14} />
                    </button>
                 </td>
               </motion.tr>
             ))}
           </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
