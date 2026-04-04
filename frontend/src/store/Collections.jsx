import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { X, Filter, ChevronDown, ShoppingBag, Grid } from 'lucide-react';
import { images } from '../assets/images';

const products = [
  {
    id: 1,
    name: 'Struktur Wool Overcoat',
    price: 890,
    category: 'Outerwear',
    sizes: ['M', 'L', 'XL'],
    colors: ['#1c1b1b', '#444748'],
    createdAt: '2024-10-01',
    label: 'Signature Collection',
    image: images.products.woolOvercoat.main,
    hoverImage: images.products.woolOvercoat.hover,
  },
  {
    id: 2,
    name: 'Pleated Poplin Shirt',
    price: 340,
    category: 'Shirts',
    sizes: ['S', 'M', 'L'],
    colors: ['#fcf9f8', '#e9c176'],
    createdAt: '2024-11-15',
    label: 'Artisan Core',
    image: images.products.poplinShirt.main,
    hoverImage: images.products.poplinShirt.hover,
  },
  {
    id: 3,
    name: 'Geometric Tailored Pant',
    price: 420,
    category: 'Tailoring',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#1c1b1b', '#444748'],
    createdAt: '2024-12-01',
    label: 'Modern Drape',
    image: images.products.tailoredPant.main,
    hoverImage: images.products.tailoredPant.hover,
  },
  {
    id: 4,
    name: 'Ochre Cashmere Knit',
    price: 580,
    category: 'Knitwear',
    sizes: ['M', 'L'],
    colors: ['#e9c176'],
    createdAt: '2024-11-20',
    label: 'Heritage Yarn',
    image: images.products.cashmereKnit.main,
    hoverImage: images.products.cashmereKnit.hover,
  },
  {
    id: 5,
    name: 'Hybrid Tech Blazer',
    price: 650,
    category: 'Tailoring',
    sizes: ['S', 'M', 'L'],
    colors: ['#1c1b1b', '#444748'],
    createdAt: '2024-12-05',
    label: 'The Archive',
    image: images.products.techBlazer.main,
    hoverImage: images.products.techBlazer.hover,
  },
  {
    id: 6,
    name: 'Nero Oxford Boots',
    price: 495,
    category: 'Shoes',
    sizes: ['40', '41', '42', '43'],
    colors: ['#1c1b1b'],
    createdAt: '2024-09-15',
    label: 'Footwear Series',
    image: images.products.oxfordBoots.main,
    hoverImage: images.products.oxfordBoots.hover,
  }
];

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State for Filters
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedSort, setSelectedSort] = useState(searchParams.get('sort') || 'Newest');
  const [selectedSizes, setSelectedSizes] = useState(searchParams.getAll('size') || []);
  const [selectedColors, setSelectedColors] = useState(searchParams.getAll('color') || []);

  const categories = ['All', 'Outerwear', 'Tailoring', 'Knitwear', 'Shirts', 'Shoes'];
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = [
    { name: 'Nero', hex: '#1c1b1b' },
    { name: 'Alabaster', hex: '#fcf9f8' },
    { name: 'Slate', hex: '#444748' },
    { name: 'Ochre', hex: '#e9c176' }
  ];

  // Sync state with URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'All') params.set('category', selectedCategory);
    if (selectedSort !== 'Newest') params.set('sort', selectedSort);
    selectedSizes.forEach(size => params.append('size', size));
    selectedColors.forEach(color => params.append('color', color));
    setSearchParams(params);
  }, [selectedCategory, selectedSort, selectedSizes, selectedColors]);

  // Handle Category Toggle
  const toggleCategory = (cat) => setSelectedCategory(cat);

  // Handle Size Toggle
  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  // Handle Color Toggle
  const toggleColor = (hex) => {
    setSelectedColors(prev => 
      prev.includes(hex) ? prev.filter(c => c !== hex) : [...prev, hex]
    );
  };

  // Clear All Filters
  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedSort('Newest');
  };

  // Filtering Logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const sizeMatch = selectedSizes.length === 0 || product.sizes.some(s => selectedSizes.includes(s));
      const colorMatch = selectedColors.length === 0 || product.colors.some(c => selectedColors.includes(c));
      return categoryMatch && sizeMatch && colorMatch;
    });

    // Sorting Logic
    return result.sort((a, b) => {
      if (selectedSort === 'Price: Low to High') return a.price - b.price;
      if (selectedSort === 'Price: High to Low') return b.price - a.price;
      if (selectedSort === 'Newest') return new Date(b.createdAt) - new Date(a.createdAt);
      return 0;
    });
  }, [selectedCategory, selectedSizes, selectedColors, selectedSort]);

  const hasActiveFilters = selectedCategory !== 'All' || selectedSizes.length > 0 || selectedColors.length > 0;

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px]">
        {/* Page Header */}
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-primary leading-none"
            >
              COLLECTIONS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 font-sans text-[10px] tracking-[0.4em] uppercase text-primary/40 font-black"
            >
              Found {filteredAndSortedProducts.length} masterpieces / Based in London
            </motion.p>
          </div>
          
          <AnimatePresence>
            {hasActiveFilters && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={clearFilters}
                className="text-[10px] font-black uppercase tracking-widest border-b border-primary pb-1 hover:text-tertiary hover:border-tertiary transition-all"
              >
                Clear All [{filteredAndSortedProducts.length}]
              </motion.button>
            )}
          </AnimatePresence>
        </header>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar Filters - Desktop */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-16">
              {/* Sort Section */}
              <div>
                <h3 className="font-sans font-black text-[10px] tracking-[0.3em] uppercase mb-8 pb-4 border-b border-primary/10 flex justify-between items-center">
                  Sort By
                  <ChevronDown size={14} className="opacity-20" />
                </h3>
                <div className="flex flex-col space-y-4">
                  {['Newest', 'Price: High to Low', 'Price: Low to High'].map(sort => (
                    <label key={sort} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="sort"
                          checked={selectedSort === sort}
                          onChange={() => setSelectedSort(sort)}
                          className="w-4 h-4 border border-primary/20 bg-transparent appearance-none rounded-none checked:bg-primary transition-all cursor-pointer" 
                        />
                        {selectedSort === sort && <div className="absolute w-1.5 h-1.5 bg-surface rounded-none" />}
                      </div>
                      <span className={`text-[10px] uppercase font-black tracking-widest group-hover:text-tertiary transition-colors ${selectedSort === sort ? 'text-primary' : 'text-primary/40'}`}>
                        {sort}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Section */}
              <div>
                <h3 className="font-sans font-black text-[10px] tracking-[0.3em] uppercase mb-8 pb-4 border-b border-primary/10">Category</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => toggleCategory(cat)}
                        className={`text-[10px] uppercase font-black tracking-widest transition-all w-full text-left
                        ${selectedCategory === cat ? 'text-primary border-l-2 border-primary pl-3' : 'text-primary/40 hover:text-primary hover:pl-3'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Section */}
              <div>
                <h3 className="font-sans font-black text-[10px] tracking-[0.3em] uppercase mb-8 pb-4 border-b border-primary/10">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map(size => (
                    <button 
                      key={size} 
                      onClick={() => toggleSize(size)}
                      className={`aspect-square border text-[10px] font-black flex items-center justify-center transition-all
                      ${selectedSizes.includes(size) ? 'bg-primary text-surface border-primary' : 'border-primary/10 text-primary/40 hover:border-primary hover:text-primary'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Section */}
              <div>
                <h3 className="font-sans font-black text-[10px] tracking-[0.3em] uppercase mb-8 pb-4 border-b border-primary/10">Color Palette</h3>
                <div className="flex flex-wrap gap-4">
                  {colors.map(color => (
                    <button 
                      key={color.hex} 
                      onClick={() => toggleColor(color.hex)}
                      className={`w-8 h-8 rounded-full border border-primary/10 relative transition-transform hover:scale-110 flex items-center justify-center
                      ${selectedColors.includes(color.hex) ? 'ring-1 ring-offset-2 ring-primary ring-offset-surface scale-110' : ''}`} 
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColors.includes(color.hex) && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color.hex === '#fcf9f8' ? '#000' : '#fff' }} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid Section */}
          <main className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-24">
                {filteredAndSortedProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.1 }}
                    className="group"
                  >
                    <Link to={`/products/${product.id}`}>
                      <div className="relative overflow-hidden aspect-3/4 bg-primary/5 dark:bg-primary/10 mb-8 border border-primary/3">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" 
                          loading="lazy"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <img 
                            src={product.hoverImage} 
                            alt="Lifestyle view" 
                            className="w-full h-full object-cover" 
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-6 left-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                           <button className="bg-white text-primary px-6 py-3 text-[10px] font-black uppercase tracking-widest shadow-xl pointer-events-none">
                              Quick View
                           </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex gap-2">
                             <span className="text-[10px] tracking-[0.2em] uppercase text-primary/40 font-black">{product.category}</span>
                             <span className="text-[10px] tracking-[0.2em] uppercase text-tertiary font-black opacity-0 group-hover:opacity-100 transition-opacity italic">— {product.label}</span>
                          </div>
                          <h2 className="text-xl font-serif font-black tracking-tighter group-hover:italic transition-all uppercase leading-none">
                            {product.name}
                          </h2>
                          <div className="flex gap-1 pt-1 overflow-hidden">
                             {product.colors.map(c => (
                               <div key={c} className="w-2 h-2 rounded-none bg-primary/20" style={{ backgroundColor: c }} />
                             ))}
                          </div>
                        </div>
                        <span className="font-sans font-black text-lg tracking-tighter">€{product.price}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-40 text-center space-y-8"
              >
                 <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-12">
                    <X size={32} className="text-primary/20" />
                 </div>
                 <h2 className="text-5xl font-serif italic tracking-tighter uppercase font-black">Archive Empty</h2>
                 <p className="text-primary/40 text-sm max-w-sm mx-auto font-sans">No pieces matching your specific criteria were found in our current archives.</p>
                 <button 
                  onClick={clearFilters}
                  className="bg-primary text-surface px-12 py-5 text-[10px] font-black tracking-widest uppercase hover:bg-tertiary transition-colors shadow-2xl"
                 >
                    Reset All Filters
                 </button>
              </motion.div>
            )}

            {/* Pagination */}
            {filteredAndSortedProducts.length > 0 && (
              <div className="mt-32 flex justify-center items-center space-x-12 pt-12 border-t border-primary/10">
                 <button className="text-[10px] font-black opacity-30 hover:opacity-100 transition-opacity uppercase tracking-widest">Previous</button>
                 <div className="flex space-x-8">
                    {['01', '02', '03'].map((num, i) => (
                      <button key={num} className={`text-[10px] font-black tracking-widest ${i === 0 ? 'text-primary border-b border-primary pb-1' : 'text-primary/30 hover:text-primary transition-colors'}`}>
                         {num}
                      </button>
                    ))}
                 </div>
                 <button className="text-[10px] font-black hover:text-tertiary transition-colors uppercase tracking-widest">Next</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Collections;
