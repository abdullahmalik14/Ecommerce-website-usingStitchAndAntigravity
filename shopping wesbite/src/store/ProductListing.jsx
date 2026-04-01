import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Grid, LayoutList } from 'lucide-react';
import Button from '../components/Button';

const products = [
  { id: 1, name: 'Struktur Wool Overcoat', price: 850, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800', label: 'Signature Collection' },
  { id: 2, name: 'Pleated Poplin Shirt', price: 140, category: 'Shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800', label: 'Archive Essentials' },
  { id: 3, name: 'Ochre Cashmere Knit', price: 580, category: 'Knitwear', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800', label: 'Limited Edition' },
  { id: 4, name: 'Nero Oxford Boots', price: 495, category: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800', label: 'Bespoke Footwear' },
  { id: 5, name: 'Geometric Tailored Pant', price: 320, category: 'Pants', image: 'https://images.unsplash.com/photo-1624371414361-e6e0ed2b2a60?auto=format&fit=crop&q=80&w=800', label: 'New Arrival' },
  { id: 6, name: 'Hybrid Tech Blazer', price: 950, category: 'Tailoring', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800', label: 'Innovation Series' },
];

const ProductListing = () => {
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [selectedSize, setSelectedSize] = useState('M');

  const categories = ['All Products', 'Outerwear', 'Tailoring', 'Knitwear', 'Shirts', 'Pants', 'Shoes', 'Accessories'];
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = [
    { name: 'Midnight', hex: '#000000' },
    { name: 'Charcoal', hex: '#333333' },
    { name: 'Navy', hex: '#1D2951' },
    { name: 'Ochre', hex: '#B87333' }
  ];

  return (
    <div className="pt-40 pb-20 bg-surface min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tighter uppercase mb-6 leading-none italic">
             Our <span className="font-bold not-italic">Archive</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-black opacity-30">
            Curated Essentials / {products.length} Items Available
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Sidebar Filter */}
          <aside className="w-full lg:w-1/4 space-y-12">
            <div>
              <h4 className="text-[10px] uppercase font-sans font-black tracking-[0.3em] mb-8 pb-4 border-b border-primary/10">Sort By</h4>
              <div className="space-y-4">
                {['Newest', 'Price: Low to High', 'Price: High to Low'].map(sort => (
                  <label key={sort} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="sort" 
                      className="w-3 h-3 rounded-none border border-primary appearance-none checked:bg-primary transition-all"
                      checked={selectedSort === sort}
                      onChange={() => setSelectedSort(sort)}
                    />
                    <span className="text-[10px] uppercase font-sans font-bold tracking-widest group-hover:text-tertiary transition-colors">{sort}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase font-sans font-black tracking-[0.3em] mb-8 pb-4 border-b border-primary/10">Category</h4>
              <ul className="space-y-4">
                {categories.map(cat => (
                  <li key={cat} className="text-[10px] uppercase font-sans font-bold tracking-widest text-primary/40 hover:text-primary cursor-pointer transition-colors w-fit">
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase font-sans font-black tracking-[0.3em] mb-8 pb-4 border-b border-primary/10">Size</h4>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border text-[10px] font-sans font-black tracking-widest transition-all
                      ${selectedSize === size ? 'bg-primary text-on-primary border-primary' : 'border-primary/10 hover:border-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Button variant="secondary" className="w-full !py-4 opacity-40">Clear All</Button>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
              {products.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="group"
                >
                  <Link to={`/products/${p.id}`}>
                    <div className="aspect-[3/4] bg-surface-container overflow-hidden mb-6 relative">
                       <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                       <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Grid size={16} />
                       </div>
                    </div>
                    <div className="space-y-1 px-1">
                       <span className="text-[10px] uppercase tracking-widest font-sans font-black text-tertiary leading-none">{p.label}</span>
                       <div className="flex justify-between items-start pt-2">
                          <h3 className="text-xl font-sans font-black tracking-tighter uppercase group-hover:italic transition-all">{p.name}</h3>
                          <span className="text-sm font-sans font-bold tracking-editorial opacity-60">${p.price.toLocaleString()}</span>
                       </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination Match */}
            <div className="mt-32 pt-12 border-t border-primary/10 flex justify-center items-center space-x-12">
               <button className="text-[10px] font-black opacity-30 hover:opacity-100 tracking-widest uppercase transition-opacity">Previous</button>
               <div className="flex space-x-8">
                  {['01', '02', '03', '04'].map((n) => (
                    <button key={n} className={`text-[10px] font-black ${n === '01' ? 'text-primary' : 'text-primary/20 hover:text-primary transition-colors'}`}>{n}</button>
                  ))}
               </div>
               <button className="text-[10px] font-black tracking-widest uppercase transition-colors hover:text-tertiary">Next</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
