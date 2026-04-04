import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Edit2, Trash2, Plus, X, Search, ChevronRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Outerwear', slug: 'outerwear', count: 12, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHFxc5lL80eyeeHlwxJ0ppsBoxeRIIZVI3ZyhYwHlMcYtJPcVpO06BrK5dIpI449QC4f-n-HoYkpnUmKQn641MbJsNsLWuEV_heMyPJVxQcyYXgWE4uE4d2fp8jiveOiWjThGq8-G8SrJhrx53H6K-JQSBAS8gAoJi3V85Wet-YQLGqJd-kDpHUPByw95EgYilbBrtyiimWeC4WuimFwEs2KjgcXyPbsuWu5uiNpNbOSSfAdY6tDxro1hJGLUVPhDKwzEaQfbniaM' },
    { id: 2, name: 'Tailoring', slug: 'tailoring', count: 8, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGpCymZiWRy6c-Ah1XcYJIYLFtbfYv_SkkDRzW_m-vvaqqAUrgJkC8xeXssNu-ZapnkmUa6ywgDuTWIDbRA0og_1cj80bO6du_CuiC3hX5mNiTFhYZNZu7zUE2XMY4e984iH5lHgiynRW0hVfG0KSSCWPJ9FlRMEdxHUpsWBqcMSp84g8xtewugaM3t7BjPgl3VSdEScIzi1uh2ulYRE1q1xRPX3Bt3cSaUVrt4ZdFVCfBZAEw9eLOTq8NlzymFBaj5Etso4cB7bU' },
    { id: 3, name: 'Knitwear', slug: 'knitwear', count: 15, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdBfHF0AmgAket7hAUl6JO9kAl3xch_JA5Z5-WZ7VLEjuM-JE6zC2EBOqyouI9y3tSO8VHaj3ljUQK2Kxtqt-tsALeCwaCcdQEOxKCOQlLY9hHbPJucl5tqThzrG6r_00zzzFb03-7BlmnJWg5EMqgXIJcNhPTiZDM8nPrmDCbysfCNuDQ9NyYxaBWA0acBGI5dbFzkzNR8xRRmeb7BUDrt-YyTmJkR2gtcqjLc9CEC9HTtuF0FNLiKofCPNlw6-vwqab_-wI3_mg' },
    { id: 4, name: 'Accessories', slug: 'accessories', count: 10, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEDc6kU17pdmQ0J_F0SV1jUJZarwhxk0_wLrp9GLvBIRTv87KwTmNiABNaH7yP22UXagiZoCz3ZzoSKdn87YejKV7SLDTbcRYjUyUsDl0g8LLEeHGVpDlNI82e8wUIWf6vxM_QAJnfNlVZeb2jpS4_reJn3EBo9PUKd9HUc_tB0vtodAR9rcvpC4RL4xh76ElFYHSeCZuvHlbecwC55XP--B1JxZv2pF4QCt251PtzTNTWfhG8zK9fb3Mika1CLve64VY9v6RB1wM' },
  ];

  return (
    <div className="space-y-12 font-sans transition-colors duration-500">
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        <div className="space-y-4">
           <h1 className="text-4xl lg:text-6xl font-serif font-black tracking-tighter uppercase italic leading-none">Archive Branches</h1>
           <p className="text-[10px] tracking-[0.4em] uppercase text-primary/40 font-black">Structuring the Digital Atelier</p>
        </div>
        <button className="flex items-center gap-3 px-8 py-5 bg-primary text-surface text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-all">
           <Plus size={16} />
           <span>Define Branch</span>
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {categories.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
             <div className="relative aspect-square bg-primary/5 dark:bg-primary/10 overflow-hidden border border-primary/[0.03] grayscale transition-all duration-700 group-hover:grayscale-0">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="flex gap-4">
                      <button className="w-12 h-12 bg-surface flex items-center justify-center hover:scale-110 transition-transform"><Edit2 size={16} /></button>
                      <button className="w-12 h-12 bg-surface text-tertiary flex items-center justify-center hover:scale-110 transition-transform"><Trash2 size={16} /></button>
                   </div>
                </div>
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-surface text-primary text-[8px] font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-surface transition-colors">
                   <Tag size={10} />
                   <span>{c.count} Elements</span>
                </div>
             </div>
             
             <div className="py-6 flex justify-between items-end">
                <div>
                   <p className="text-[9px] font-black tracking-widest text-primary/30 uppercase mb-1">/{c.slug}</p>
                   <h3 className="text-xl font-serif font-black tracking-tighter uppercase leading-none group-hover:italic transition-all">{c.name}</h3>
                </div>
                <ChevronRight size={18} className="opacity-10 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
