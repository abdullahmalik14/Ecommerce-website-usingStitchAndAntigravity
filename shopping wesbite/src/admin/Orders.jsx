import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpRight, Clock, PackageCheck, Truck, AlertCircle } from 'lucide-react';

const Orders = () => {
  const orders = [
    { id: '#8421', customer: 'Alexander Reed', date: 'Oct 12, 2024', total: '€1,850.00', status: 'Processing', type: 'Priority' },
    { id: '#8420', customer: 'Helena Vonn', date: 'Oct 11, 2024', total: '€650.00', status: 'Shipped', type: 'Standard' },
    { id: '#8419', customer: 'Marcus Thorne', date: 'Oct 10, 2024', total: '€2,450.00', status: 'Delivered', type: 'Priority' },
    { id: '#8418', customer: 'Sofia Chen', date: 'Oct 10, 2024', total: '€1,100.00', status: 'Processing', type: 'Standard' },
  ];

  const getStatusIcon = (status) => {
     if (status === 'Processing') return <Clock size={12} />;
     if (status === 'Shipped') return <Truck size={12} />;
     return <PackageCheck size={12} />;
  }

  return (
    <div className="space-y-12 font-sans transition-colors duration-500">
      {/* Header & Stats Strip */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="space-y-4">
           <h1 className="text-4xl lg:text-6xl font-serif font-black tracking-tighter uppercase italic leading-none">Archive Fulfillment</h1>
           <p className="text-[10px] tracking-[0.4em] uppercase text-primary/40 font-black">Tracking Global Acquisitions</p>
        </div>
        <div className="grid grid-cols-2 lg:flex gap-8">
           <div className="bg-primary/[0.03] p-6 border border-primary/5 min-w-[200px]">
              <p className="text-[9px] uppercase tracking-[0.2em] font-black text-primary/40 mb-2">Pending Fulfillment</p>
              <p className="text-2xl font-serif font-black tracking-tighter">08 <span className="text-xs italic font-black opacity-30 tracking-widest uppercase">Units</span></p>
           </div>
           <div className="bg-tertiary/10 p-6 border border-tertiary/10 min-w-[200px]">
              <p className="text-[9px] uppercase tracking-[0.2em] font-black text-tertiary mb-2">Priority Dispatches</p>
              <p className="text-2xl font-serif font-black tracking-tighter text-tertiary">03 <span className="text-xs italic font-black opacity-30 tracking-widest uppercase">Units</span></p>
           </div>
        </div>
      </header>

      {/* Orders Table */}
      <div className="bg-primary/5 dark:bg-primary/10 border border-primary/[0.03] overflow-hidden shadow-2xl dark:shadow-none">
        <table className="w-full text-left font-sans text-[10px] font-black tracking-widest uppercase">
           <thead className="border-b border-primary/5">
             <tr className="text-primary/30 italic">
               <th className="py-8 px-10">Fulfillment ID</th>
               <th className="py-8 px-10">Collector Name</th>
               <th className="py-8 px-10">Date Logged</th>
               <th className="py-8 px-10">Valuation</th>
               <th className="py-8 px-10 text-right">Status</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-primary/5">
             {orders.map((o, i) => (
               <motion.tr 
                 key={o.id}
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.05 }}
                 className="hover:bg-primary/[0.02] transition-colors group cursor-pointer"
               >
                 <td className="py-8 px-10">
                    <div className="flex items-center gap-4">
                       <span className="text-sm font-serif font-black tracking-tighter normal-case group-hover:italic transition-all">{o.id}</span>
                       {o.type === 'Priority' && <span className="bg-tertiary text-surface text-[8px] px-2 py-0.5 font-black uppercase">Priority</span>}
                    </div>
                 </td>
                 <td className="py-8 px-10 opacity-60 group-hover:opacity-100 transition-opacity">{o.customer}</td>
                 <td className="py-8 px-10 opacity-30">{o.date}</td>
                 <td className="py-8 px-10 font-bold">{o.total}</td>
                 <td className="py-8 px-10 text-right">
                    <div className="flex justify-end">
                       <span className={`
                         px-4 py-2 border flex items-center justify-center gap-3 transition-all
                         ${o.status === 'Processing' ? 'border-tertiary text-tertiary shadow-[0_0_10px_rgba(233,193,118,0.1)]' : 'border-primary/10 opacity-40 hover:opacity-100'}
                       `}>
                         {getStatusIcon(o.status)}
                         {o.status}
                       </span>
                    </div>
                 </td>
               </motion.tr>
             ))}
           </tbody>
        </table>
      </div>

      {/* Pagination / View Link */}
      <footer className="text-center pt-8 border-t border-primary/5">
         <button className="text-[10px] font-black tracking-widest uppercase text-primary/40 hover:text-primary transition-all flex items-center gap-3 mx-auto">
            Access Historical Data
            <ArrowUpRight size={14} />
         </button>
      </footer>
    </div>
  );
};

export default Orders;
