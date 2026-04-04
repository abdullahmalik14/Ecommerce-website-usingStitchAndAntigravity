import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  ArrowUpRight,
  Clock,
  CheckCircle2,
  MoreHorizontal,
  ChevronRight,
  Zap,
  Package
} from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    { name: 'Total Archive Sales', value: '$842,500.00', change: '+12.4% vs LY', progress: 75, icon: <DollarSign size={18} /> },
    { name: 'New Collection Members', value: '1,204', change: '+48 New', progress: 50, icon: <Users size={18} />, color: 'text-tertiary' },
    { name: 'Pending Orders', value: '24', change: 'Priority 08', progress: 25, icon: <Package size={18} />, color: 'text-primary/40' },
  ];

  const inventory = [
    { name: 'Silk Archive Scarf', price: 240, category: 'Accessories', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEDc6kU17pdmQ0J_F0SV1jUJZarwhxk0_wLrp9GLvBIRTv87KwTmNiABNaH7yP22UXagiZoCz3ZzoSKdn87YejKV7SLDTbcRYjUyUsDl0g8LLEeHGVpDlNI82e8wUIWf6vxM_QAJnfNlVZeb2jpS4_reJn3EBo9PUKd9HUc_tB0vtodAR9rcvpC4RL4xh76ElFYHSeCZuvHlbecwC55XP--B1JxZv2pF4QCt251PtzTNTWfhG8zK9fb3Mika1CLve64VY9v6RB1wM' },
    { name: 'Oxford Derbies', price: 580, category: 'Footwear', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa_t7GIjfhRu7Mi3Mb-3XFvQiMY_ppglIE8Ca8onbLhZwWsW9EWTs3E0LhvNV4oGTCboOgwMp8k3Z5uTsDl6rnJBPMiR3DIUJL2QSsMCmEmCkAO4tHJHAZvIlSfiEukGMHgijLQaqLlKruZ1eiqLz-J2LNAlzairukoUleCrt_Sf_leilkq_w4oFH76sV2yTluI_INMGr5LKnNQml_p0zUS2lPtgyg1HjEB8N7fZ1zlZ8Ov6P9A79WngZzKkMP4kGrr2TgKiQgjiw' },
    { name: 'Night Tote Bag', price: 1200, category: 'Bags', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQPyttTa1Bib5RFJXGRPcbc7mUNB1fe1cNtGnZM-tgYfkHeKm0nulKx55piBwM8h4-S3TNKiNWv8UyX0vlZi2UzhYXL_7Tl5Ia8IKPnAfVOWW135x7GvWQK467c8gRKNyyeHw1M-wQ24ayog1TEzvIj8dDw2PpTrsr7ZqwJcafqYBEghYEphfzfrjn561lNwbsYRFnFTj9ukbUXiZQoD80t_W1QWAW_O44VJGI03Nq1B5T7jELWXpp2iSIIUx5QuolfozqGv4yEis' },
    { name: 'Unstructured Blazer', price: 890, category: 'Tailoring', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEcV9QaqTHylUgiFRK-9iJFN8JhLyP7t4rp20cjN3iWlQtqptExZjuxT9ezReipNGjvknGhlnuwse2-8TreEmoGkvhGyEsQkKdDw5FnTPsPZImyZ1pEq05ewuGnqV3lbq-ke4puoQ4fTz6AkCeA4fmyxKxN_LDmPsDLz5QxpOEjcMjpLTSZ_IBlFSZItDwT4YjBQwACCs3e0VZkmAssA-hSio5m2K3TfaOG34EBLidySTlEXYHLT6rSExkkumKuclkNGETup3j1Z8' }
  ];

  return (
    <div className="space-y-16 transition-colors duration-500 font-sans">
      {/* Dashboard Page Header */}
      <header className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
           <h1 className="text-4xl lg:text-6xl font-serif font-black tracking-tighter text-primary uppercase italic leading-none mb-4">The Archive Overview</h1>
           <p className="text-[10px] tracking-[0.4em] uppercase text-primary/40 font-black">Quarterly Performance & Operational Insights</p>
        </div>
        <div className="flex gap-4">
           <button className="px-8 py-4 bg-primary text-surface text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-all">Generate Report</button>
           <button className="px-8 py-4 border border-primary/10 text-primary text-[10px] font-black tracking-widest uppercase hover:bg-primary/[0.02] transition-all">Export CSV</button>
        </div>
      </header>

      {/* High Fidelity Bento Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary/5 dark:bg-primary/10 p-10 border border-primary/[0.03] group hover:scale-[1.02] transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-8">
               <div className="p-2 border border-primary/10 opacity-30 group-hover:opacity-100 transition-opacity">
                 {stat.icon}
               </div>
               <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${stat.color || 'text-primary'}`}>{stat.change}</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 mb-3">{stat.name}</p>
            <h3 className="text-3xl font-serif font-black tracking-tighter leading-none mb-8">{stat.value}</h3>
            
            <div className="h-1 w-full bg-primary/10">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${stat.progress}%` }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className={`h-full ${stat.name === 'Pending Orders' ? 'bg-primary/40' : (stat.name === 'New Collection Members' ? 'bg-tertiary' : 'bg-primary')}`} 
               />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytics & Spotlight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Revenue Trajectory Chart Area */}
        <div className="lg:col-span-8 bg-primary/5 dark:bg-primary/10 p-12 border border-primary/[0.03] transition-all duration-500">
           <div className="flex justify-between items-center mb-16">
              <h2 className="text-2xl font-serif font-black tracking-tighter uppercase italic leading-none">Revenue Trajectory</h2>
              <div className="flex gap-6">
                 {['Week', 'Month', 'Year'].map((t, i) => (
                    <button key={t} className={`text-[10px] font-black tracking-widest uppercase transition-all ${i === 1 ? 'text-primary border-b border-primary pb-1' : 'text-primary/30 hover:text-primary'}`}>
                       {t}
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="flex items-end justify-between h-64 gap-3 mb-8">
              {[35, 60, 85, 45, 55, 100, 40, 75, 50, 80].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.05), duration: 0.8 }}
                  className={`flex-1 transition-all duration-500 cursor-pointer shadow-lg
                    ${h === 100 ? 'bg-tertiary' : (h === 85 ? 'bg-primary' : 'bg-primary/20 hover:bg-primary/40')}`}
                />
              ))}
           </div>
           <div className="flex justify-between text-[9px] font-black tracking-widest text-primary/30 uppercase pt-4 border-t border-primary/5">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span>
           </div>
        </div>

        {/* Sidebar Feed */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-primary text-surface p-10 shadow-2xl dark:shadow-none transition-all duration-500">
              <h3 className="font-serif italic text-2xl font-black mb-6 uppercase tracking-tight">Archive Spotlight</h3>
              <p className="text-sm font-medium opacity-60 leading-relaxed mb-8">The 'Noir Essence' Fall collection has outperformed projections by 22% this week.</p>
              <div className="aspect-[4/3] w-full overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                 <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZHUEkW2SLrZt4bK4aFwhejIx-WoP69mKLkxeNroPGA8patG7uxBhuuwreEUdYvmIIYxSc_nI1WSkmuFqcxB5YbjKWbwzDGYObQABlK71Yfmcj9gscoZlxnJWS9gj9vuY2ClnvyO4Yqixp92PzdiQR5KD6jwVWKhF5fBpwWnLjytqW-l5ZmgV32j9DausQGpmPuu5Gu7f51mivNtf_v3RpDUkyA3BrUedpsCuaTvxVrBW0_jx3cU_kL7EeGRQLG4pEB6HccW0p-Tk" 
                   alt="Spotlight" 
                   className="w-full h-full object-cover"
                 />
              </div>
              <button className="text-[10px] font-black tracking-[0.2em] uppercase text-tertiary border-b border-tertiary pb-2 hover:text-surface hover:border-surface transition-all">
                 View Collection Metrics
              </button>
           </div>

           <div className="bg-primary/5 p-10 border border-primary/[0.03]">
              <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/40 mb-8 border-b border-primary/10 pb-4">Immediate Actions</h3>
              <ul className="space-y-6">
                 {[
                   { t: 'Approve leather drop', c: 'Inventory', dot: 'bg-tertiary' },
                   { t: 'Review VIP tier migration', c: 'Customers', dot: 'bg-primary/20' },
                   { t: 'Monthly logistic audit', c: 'Operations', dot: 'bg-primary/20' }
                 ].map((action, i) => (
                   <li key={i} className="flex items-start gap-4 group cursor-pointer">
                      <span className={`w-2 h-2 mt-1 ${action.dot}`} />
                      <div>
                         <p className="text-sm font-black tracking-tight group-hover:underline">{action.t}</p>
                         <p className="text-[9px] font-black tracking-widest text-primary/30 uppercase mt-1">{action.c}</p>
                      </div>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </div>

      {/* Curated Inventory Grid */}
      <section className="pt-8 text-sans">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif font-black tracking-tighter uppercase italic leading-none">Curated Inventory</h2>
            <button className="text-[10px] font-black tracking-widest uppercase text-primary/40 hover:text-primary transition-all border-b border-primary/10 pb-2">See All Items</button>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {inventory.map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={`group ${i % 2 === 1 ? 'lg:translate-y-12' : ''}`}
               >
                  <div className="aspect-[3/4] bg-primary/5 dark:bg-primary/10 overflow-hidden mb-6 border border-primary/[0.03] relative grayscale group-hover:grayscale-0 transition-all duration-700">
                     <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                     {i === 0 && (
                       <div className="absolute top-4 right-4 bg-primary text-surface text-[8px] font-black tracking-widest px-3 py-1 uppercase">Limited</div>
                     )}
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] font-black tracking-widest text-primary/40 uppercase">{item.category}</p>
                     <h4 className="text-lg font-serif font-black tracking-tighter uppercase leading-none">{item.name}</h4>
                     <p className="font-black text-sm tracking-tighter">€{item.price}</p>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Dashboard;
