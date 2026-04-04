import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Image as ImageIcon,
  Upload,
  X,
  ChevronDown
} from 'lucide-react';

const products = [
  { id: 1, name: 'Structured Wool Overcoat', price: 1250, stock: 42, category: 'Outerwear', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHFxc5lL80eyeeHlwxJ0ppsBoxeRIIZVI3ZyhYwHlMcYtJPcVpO06BrK5dIpI449QC4f-n-HoYkpnUmKQn641MbJsNsLWuEV_heMyPJVxQcyYXgWE4uE4d2fp8jiveOiWjThGq8-G8SrJhrx53H6K-JQSBAS8gAoJi3V85Wet-YQLGqJd-kDpHUPByw95EgYilbBrtyiimWeC4WuimFwEs2KjgcXyPbsuWu5uiNpNbOSSfAdY6tDxro1hJGLUVPhDKwzEaQfbniaM' },
  { id: 2, name: 'Pleated Poplin Shirt', price: 350, stock: 124, category: 'Shirts', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGpCymZiWRy6c-Ah1XcYJIYLFtbfYv_SkkDRzW_m-vvaqqAUrgJkC8xeXssNu-ZapnkmUa6ywgDuTWIDbRA0og_1cj80bO6du_CuiC3hX5mNiTFhYZNZu7zUE2XMY4e984iH5lHgiynRW0hVfG0KSSCWPJ9FlRMEdxHUpsWBqcMSp84g8xtewugaM3t7BjPgl3VSdEScIzi1uh2ulYRE1q1xRPX3Bt3cSaUVrt4ZdFVCfBZAEw9eLOTq8NlzymFBaj5Etso4cB7bU' },
  { id: 3, name: 'Geometric Tailored Pant', price: 550, stock: 0, category: 'Pants', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJKmbsaTob8fESUPst7UwoFvSam3HgrRKTDmIpCNJ05hbvkcuUbOI727GoksFyqupw56fz_QRBksBX9EOwLgJspQJBryFY9wxCTSRahV3eVNUuwzdevcCtk8HviE8j1HsHOdspUwAGbuRcWPzKVL5CubT47gdnSYdf5E2heQmS9ln4LLt9Pj3RRCKFuGCQxGO21xfFBELBbCTHSlraRH1mm2lliigkvBhg00xX3_0P2GK7AjI_x6R_IG5ZoOWsvmHcHu6HFjrQJKw' },
];

const Products = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-12 font-sans transition-colors duration-500">
      {/* Header Actions */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex-1 w-full lg:max-w-md relative group">
           <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary transition-colors" />
           <input 
             type="text" 
             placeholder="SEARCH ARCHIVES..." 
             className="w-full bg-primary/5 dark:bg-primary/10 border border-primary/5 pl-12 pr-6 py-4 text-[10px] font-black tracking-widest uppercase focus:border-primary/20 outline-none transition-all"
           />
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <button className="flex items-center gap-3 px-6 py-4 border border-primary/10 text-[10px] font-black tracking-widest uppercase hover:bg-primary/5 transition-all">
             <Filter size={14} />
             <span>Filter</span>
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-primary text-surface text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-all"
          >
             <Plus size={16} />
             <span>Add Entry</span>
          </button>
        </div>
      </div>

      {/* High Fidelity Table */}
      <div className="bg-primary/5 dark:bg-primary/10 border border-primary/[0.03] overflow-hidden">
        <table className="w-full text-left font-sans text-[10px] font-black tracking-widest uppercase">
           <thead className="border-b border-primary/5">
             <tr className="text-primary/30 italic">
               <th className="py-8 px-10">Product Identification</th>
               <th className="py-8 px-10">Category</th>
               <th className="py-8 px-10">Valuation</th>
               <th className="py-8 px-10">Inventory</th>
               <th className="py-8 px-10 text-right">Actions</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-primary/5">
             {products.map((p) => (
               <tr key={p.id} className="hover:bg-primary/[0.02] transition-colors group">
                 <td className="py-8 px-10">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-20 bg-primary/10 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <p className="text-sm font-serif font-black tracking-tighter normal-case group-hover:italic transition-all">{p.name}</p>
                          <p className="opacity-30 mt-1">ID: #000{p.id}</p>
                       </div>
                    </div>
                 </td>
                 <td className="py-8 px-10 opacity-60 group-hover:opacity-100 transition-opacity">{p.category}</td>
                 <td className="py-8 px-10 font-bold">€{p.price.toLocaleString()}</td>
                 <td className="py-8 px-10">
                    <div className="flex items-center gap-3">
                       <span className={`w-2 h-2 rounded-full ${p.stock === 0 ? 'bg-tertiary shadow-[0_0_8px_rgba(233,193,118,0.4)]' : 'bg-primary/20'}`} />
                       <span className={p.stock === 0 ? 'text-tertiary' : 'opacity-60'}>{p.stock} Units</span>
                    </div>
                 </td>
                 <td className="py-8 px-10 text-right">
                    <div className="flex justify-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="text-primary hover:scale-110 transition-transform"><Edit2 size={16} strokeWidth={1.5} /></button>
                       <button className="text-primary/30 hover:text-tertiary transition-colors hover:scale-110 transition-transform"><Trash2 size={16} strokeWidth={1.5} /></button>
                       <button className="text-primary/30 hover:text-primary transition-colors hover:scale-110 transition-transform"><MoreVertical size={16} strokeWidth={1.5} /></button>
                    </div>
                 </td>
               </tr>
             ))}
           </tbody>
        </table>
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            <motion.form
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              className="relative bg-surface w-full max-w-5xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-primary/5 flex flex-col md:flex-row h-[85vh] overflow-hidden"
            >
              {/* Modal Sidebar / Details */}
              <div className="p-12 md:w-[450px] bg-primary/[0.02] border-r border-primary/5 space-y-12 overflow-y-auto no-scrollbar">
                 <header className="space-y-4">
                    <h2 className="text-3xl font-serif font-black tracking-tighter uppercase italic leading-none">New Entry</h2>
                    <p className="text-[10px] font-black tracking-widest text-primary/40 uppercase">Define product parameters</p>
                 </header>

                 <div className="space-y-10 font-black text-[10px] tracking-widest uppercase">
                    <div className="space-y-4">
                       <label className="opacity-30">Identity Tag</label>
                       <input type="text" placeholder="PRODUCT NAME" className="w-full bg-transparent border-b border-primary/10 py-4 focus:border-primary outline-none transition-all placeholder:text-primary/10" />
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                       <div className="space-y-4">
                          <label className="opacity-30">Valuation (€)</label>
                          <input type="number" placeholder="0.00" className="w-full bg-transparent border-b border-primary/10 py-4 focus:border-primary outline-none transition-all placeholder:text-primary/10" />
                       </div>
                       <div className="space-y-4">
                          <label className="opacity-30">Capacity</label>
                          <input type="number" placeholder="0" className="w-full bg-transparent border-b border-primary/10 py-4 focus:border-primary outline-none transition-all placeholder:text-primary/10" />
                       </div>
                    </div>
                    <div className="space-y-4">
                       <label className="opacity-30">Curation Branch</label>
                       <div className="relative">
                          <select className="w-full bg-transparent border-b border-primary/10 py-4 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                             <option>Outerwear</option>
                             <option>Knitwear</option>
                             <option>Tailoring</option>
                             <option>Accessories</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
                       </div>
                    </div>
                    <div className="space-y-4">
                       <label className="opacity-30">Editorial Brief</label>
                       <textarea rows={4} className="w-full bg-transparent border-b border-primary/10 py-4 focus:border-primary outline-none transition-all resize-none placeholder:text-primary/10" placeholder="DESCRIBE THE SILHOUETTE..."></textarea>
                    </div>
                 </div>
              </div>

              {/* Modal Asset Area */}
              <div className="flex-1 flex flex-col">
                 <div className="flex-1 p-16 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary/[0.01] transition-all relative">
                    <div className="mb-10 text-primary/10 group-hover:text-primary/40 transition-all duration-700">
                       <Upload size={48} strokeWidth={1} />
                    </div>
                    <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-4">Transfer Visual Data</p>
                    <p className="text-[8px] font-black tracking-widest text-primary/30 uppercase">Drag & Drop or Select Local Source</p>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                 </div>
                 
                 <footer className="p-12 border-t border-primary/5 flex justify-end gap-10">
                    <button type="button" onClick={() => setIsAddModalOpen(false)} className="text-[10px] font-black tracking-widest uppercase text-primary/30 hover:text-primary transition-all">Abort</button>
                    <button type="submit" className="px-12 py-5 bg-primary text-surface text-[10px] font-black tracking-widest uppercase hover:opacity-90 transition-all">Commit To Archive</button>
                 </footer>
              </div>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
