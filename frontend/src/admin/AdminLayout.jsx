import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Package, 
  ShoppingBag, 
  Users, 
  Tag, 
  Home as HomeIcon,
  Bell,
  LogOut,
  Settings,
  Search,
  HelpCircle
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const { pathname } = useLocation();

  const menuItems = [
    { name: 'Overview', path: '/admin', icon: <BarChart3 size={18} /> },
    { name: 'Products', path: '/admin/products', icon: <Package size={18} /> },
    { name: 'Orders', path: '/admin/orders', icon: <ShoppingBag size={18} /> },
    { name: 'Customers', path: '/admin/customers', icon: <Users size={18} /> },
    { name: 'Collections', path: '/admin/categories', icon: <Tag size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-surface flex transition-colors duration-500 font-sans selection:bg-primary selection:text-surface">
      {/* SideNavBar - High Fidelity Fixed Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 z-50 flex flex-col py-20 bg-surface/80 backdrop-blur-3xl border-r border-primary/5 hidden lg:flex transition-all duration-500">
        <div className="px-10 mb-16">
          <h2 className="text-2xl font-serif tracking-tighter italic font-black uppercase text-primary">Atelier Noir</h2>
          <p className="font-sans text-[10px] tracking-[0.4em] text-primary/40 uppercase font-black mt-2">Admin Console</p>
        </div>
        
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center gap-6 py-5 pl-10 transition-all duration-300 group
                ${pathname === item.path 
                  ? 'text-primary font-black border-l-4 border-primary bg-primary/[0.03]' 
                  : 'text-primary/40 hover:text-primary hover:bg-primary/[0.01]'
                }
              `}
            >
              <span className={`${pathname === item.path ? 'text-primary' : 'text-primary/30 group-hover:text-primary transition-colors'}`}>
                {item.icon}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-black">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="px-6 py-10 space-y-2">
           <Link to="/" className="flex items-center gap-6 py-4 pl-4 text-primary/40 hover:text-primary transition-all group">
             <HomeIcon size={18} className="opacity-30 group-hover:opacity-100" />
             <span className="text-[10px] tracking-[0.3em] uppercase font-black">Storefront</span>
           </Link>
           <button className="w-full flex items-center gap-6 py-4 pl-4 text-primary/40 hover:text-primary transition-all group text-left">
             <HelpCircle size={18} className="opacity-30 group-hover:opacity-100" />
             <span className="text-[10px] tracking-[0.3em] uppercase font-black">Help</span>
           </button>
           <button className="w-full flex items-center gap-6 py-4 pl-4 text-tertiary hover:opacity-70 transition-all group text-left">
             <LogOut size={18} />
             <span className="text-[10px] tracking-[0.3em] uppercase font-black">Logout</span>
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 pt-24 px-8 lg:px-16 pb-20">
        {/* Top Header Bar */}
        <header className="fixed top-0 right-0 left-0 lg:left-64 h-24 z-40 bg-surface/70 backdrop-blur-3xl border-b border-primary/5 flex justify-between items-center px-8 lg:px-16 transition-all duration-500">
           <div className="hidden md:flex items-center bg-primary/[0.03] border border-primary/5 px-4 py-2 gap-3 w-80 group focus-within:border-primary/20 transition-all">
              <Search size={16} className="text-primary/30 group-focus-within:text-primary" />
              <input type="text" placeholder="Search archive..." className="bg-transparent border-none focus:ring-0 text-xs font-black tracking-widest text-primary placeholder:text-primary/20 w-full uppercase" />
           </div>

           <div className="flex items-center gap-10">
              <div className="flex items-center gap-6 border-r border-primary/10 pr-10">
                 <button className="text-primary/30 hover:text-primary transition-all hover:scale-110">
                    <Bell size={20} />
                 </button>
                 <button className="text-primary/30 hover:text-primary transition-all hover:scale-110">
                    <Settings size={20} />
                 </button>
              </div>
              
              <div className="flex items-center gap-6 group cursor-pointer">
                 <div className="text-right hidden sm:block">
                    <p className="text-[10px] font-black tracking-widest uppercase text-primary">Julian Noir</p>
                    <p className="text-[8px] font-black tracking-[0.3em] uppercase text-primary/30">Administrator</p>
                 </div>
                 <div className="w-12 h-12 bg-primary/5 border border-primary/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all shadow-xl">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAalCf7zzEHId1MP9qHVqpQCJ6RyFsc9_9kQVcHPbNQLrRNvtp1fab6ngSNFqvf9FflWMEOSFN4gN2UJS3w7oEoRR8PzQgNX9tb2P1hLX-H9byE-K-eidkDsYaVop0lYxmqLQlRoPWE2ufWaYi85G_dF3a4ppzrVj-O-k_Mraw99kUiXMhGBND3jmnkjxOlxVtXB5mIOGCWwoNbGJ8tXreW4MEGnJiPSJD5_6Cl_gaERgrJua8kTySd7fODGWC50UK9xOtsgdaCf8g" 
                      alt="Admin"
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>
           </div>
        </header>

        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Bottom Mobile Nav */}
      <nav className="lg:hidden fixed bottom-12 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-3xl border border-primary/10 flex justify-around items-center h-16 w-[90%] z-50 px-8 shadow-2xl rounded-full">
         <Link to="/admin" className="text-primary"><BarChart3 size={20} /></Link>
         <Link to="/admin/products" className="text-primary/30"><Package size={20} /></Link>
         <Link to="/admin/orders" className="text-primary/30"><ShoppingBag size={20} /></Link>
         <Link to="/admin/customers" className="text-primary/30"><Users size={20} /></Link>
      </nav>
    </div>
  );
};

export default AdminLayout;
