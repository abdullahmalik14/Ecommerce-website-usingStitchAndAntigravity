import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Struktur Wool Overcoat',
    price: 890,
    category: 'Outerwear',
    label: 'Signature Collection',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHFxc5lL80eyeeHlwxJ0ppsBoxeRIIZVI3ZyhYwHlMcYtJPcVpO06BrK5dIpI449QC4f-n-HoYkpnUmKQn641MbJsNsLWuEV_heMyPJVxQcyYXgWE4uE4d2fp8jiveOiWjThGq8-G8SrJhrx53H6K-JQSBAS8gAoJi3V85Wet-YQLGqJd-kDpHUPByw95EgYilbBrtyiimWeC4WuimFwEs2KjgcXyPbsuWu5uiNpNbOSSfAdY6tDxro1hJGLUVPhDKwzEaQfbniaM',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-zQz0-MApbF4Qm9NQGR98jZGEV61EcWbajlhhmxF1_QuUe0Vvv7RT7rHnnYWf5oE8-eRIPeKtztyQW5lg75cz_JmCE5YQyUiC7KFe2yl6d6VPpMQ0CIhlQTZ1PWg_twJ80_S0mhBX8sKym_JlTBX98p_tM01ncaH1aValIZti00VzLVY6y_qxKS3DKsLwf8tOmmm9zuBeWLWKtPPg-AioLG7QGbuCoiqyYHnVSb7jfFZ0CeNeiUCFAsEeU3elZo8EyoUGLKwWe4w'
  },
  {
    id: 2,
    name: 'Pleated Poplin Shirt',
    price: 340,
    category: 'Artisan Core',
    label: 'Shirts',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGpCymZiWRy6c-Ah1XcYJIYLFtbfYv_SkkDRzW_m-vvaqqAUrgJkC8xeXssNu-ZapnkmUa6ywgDuTWIDbRA0og_1cj80bO6du_CuiC3hX5mNiTFhYZNZu7zUE2XMY4e984iH5lHgiynRW0hVfG0KSSCWPJ9FlRMEdxHUpsWBqcMSp84g8xtewugaM3t7BjPgl3VSdEScIzi1uh2ulYRE1q1xRPX3Bt3cSaUVrt4ZdFVCfBZAEw9eLOTq8NlzymFBaj5Etso4cB7bU',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj1awx17SUJDSWH5PkRsmJukRNDOHa44-z_ZNgy2ZshYs6lJdKGMH92ddx9PX8uN1CqxNOXqbofrsBy9cd65APoCIKpPpr8WSEJE0kiUHmK3gWgkXSCRhswue4VOZiulWPUUAOmjMY9kgxvcllyFFvEvKpuRimny5AJQN0iAJ2ujoACNJbsDksKFs8qZNLq3OiN7-EnisOYEXFxRtGYKJmIANm4zNPJn7rg5fBZQB-4f9ELrLG4nrZ4bsvzl1k_Gm_MHN79_B2MnA'
  },
  {
    id: 3,
    name: 'Geometric Tailored Pant',
    price: 420,
    category: 'Modern Drape',
    label: 'Tailoring',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJKmbsaTob8fESUPst7UwoFvSam3HgrRKTDmIpCNJ05hbvkcuUbOI727GoksFyqupw56fz_QRBksBX9EOwLgJspQJBryFY9wxCTSRahV3eVNUuwzdevcCtk8HviE8j1HsHOdspUwAGbuRcWPzKVL5CubT47gdnSYdf5E2heQmS9ln4LLt9Pj3RRCKFuGCQxGO21xfFBELBbCTHSlraRH1mm2lliigkvBhg00xX3_0P2GK7AjI_x6R_IG5ZoOWsvmHcHu6HFjrQJKw',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD88OxrXrFhjzU4CavFXD0cqzaOvilqp7XyxwkC4RcSaHhn091OLUPF2tG7Q926fmedkGFauvjBHs9mpZJQXmArdtHuDfxRjSInPg3Dq5H1AGQM2wQReTcUXhnU9xA6o-lXI5-0_Q5lEXATZ3-BIw2ewTFkGKdl8LrTGvAKbarmf3Tod_jFcRR-Mm06x0cyy2DIy-nkZgBpRJQAHDJ7S4XYVzJsau3EqNzapIICzH7DM6bY8mVQ-Zixa7quZOKRznHJBygfb8kC3Qs'
  },
  {
    id: 4,
    name: 'Ochre Cashmere Knit',
    price: 580,
    category: 'Heritage Yarn',
    label: 'Knitwear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdBfHF0AmgAket7hAUl6JO9kAl3xch_JA5Z5-WZ7VLEjuM-JE6zC2EBOqyouI9y3tSO8VHaj3ljUQK2Kxtqt-tsALeCwaCcdQEOxKCOQlLY9hHbPJucl5tqThzrG6r_00zzzFb03-7BlmnJWg5EMqgXIJcNhPTiZDM8nPrmDCbysfCNuDQ9NyYxaBWA0acBGI5dbFzkzNR8xRRmeb7BUDrt-YyTmJkR2gtcqjLc9CEC9HTtuF0FNLiKofCPNlw6-vwqab_-wI3_mg',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUjnkAOE8cmVJDcFF2s1fiTmLRoXb_WISkz-YeT8jvVCUIqW7tEa0KdR2AzPwNO6eWcsBXrN2VVQspxsFQJ3BzrWyJtPmK_jrOMICFSOngn2QytwtET9F8Lvj84j6i_8CNQM2yE1hgS46U3xBrYLBRzwIbJbse5wVPAOFGhpk9KRrPlMdOThq7auV4yY5l_kKhXtCf1kb2inEh6pAVB0Jmm5GSiSuE3UiXNkw4S_gUo3WNHJPCY-66sgnJbYCTvEIrxrGVQujCY_o'
  },
  {
    id: 5,
    name: 'Hybrid Tech Blazer',
    price: 650,
    category: 'The Archive',
    label: 'Tailoring',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5oH4SIdQAPc-jwesdmNLI5x2NSfODfvqRotEJKkJCFq5I-EvoavIpyjUpZdpDX1Im6NqsW4zLQHaGD_RdebiVNvjWyaR-LjN5-meegc2hnCSC_wTfG5OhxE3f-g0hiudIYV4zmxafVlxDJQ9Psp_nNFBH8rQhTb9ZRk6czk6bu5AsjDQn2gPixfIEk7TPGVMHpjZ9VIIDm3s5uLNM4cBvrbsyQA-nPWyzMZFcjbWMmEIuDwVS8jpezp0PdYclDpU-xoOEraJY038',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnkzjF4E9xypUIycA3q8pJrA9YHn1jC_frV1QjIeC6cHqZDw_ItpE_zHonxbXDLs3-zh3HyBuaoP43zWJKsFGUZg1ctGQbA4Rw7RhV6-BTpX3eteVcZqsN6a0doKnPTR9Fa24j8FdqtwEM2xmInQc_PAIMN4HylwYiViuHmYUwhstQ6vIF0XsrZjbPPAdvam3Rxjhp2LzNqufK6T-PU24IycXXFut1uFxNkCgaffSTn-zpZua8UDWCG84GH3to6QhTjRHpy1qjGMY'
  },
  {
    id: 6,
    name: 'Nero Oxford Boots',
    price: 495,
    category: 'Footwear Series',
    label: 'Shoes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVMBWf0uP4OgwRem8RKZVVI5OGnUkGFRwjGuNkboSlpNt6OnqVzsliasHT6Z_PO99Ek0bfsIPxNRR_-qAG9ldNA0uUebKa_srsXAlhrROHS6OL8WiPOyr25nvrZFdpLNTJ6XFSRpF4CCaJI8bHAUveYDP6196WEPxA2MAVI2q6UnFG5sedUZdzVZlf9VoyB8UACp8mNMjqSu1xY5TwCnjNRMmD-LmXEiMpYNbZq44yemGG0BhttukOLnWDRZW2aPiZuwQAy2cSNEU',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATow4sED_MK1iS4CzMNp39cVfoxLwdULxpNQwEp1C6cG8JcUNJMYAF_Gt7r-8-YXIrA58wAfVyX7EfBj4WI1qTKcGrHEhWkTips8IP-cK0OrfLoZBmfFPMXBQiI7ihjTBUzvOwALwSybesFXininwEdcyCoAaIQmw6RURYnxKZHBaLrZHpf_N5YViz4WAg45VSLE4W52FqDwxWrqCosfoj1Z0DQckclP3xA-I3w0kMqcvzVgeuUz393hSfK7Kczfplv6lCK5NFyh0'
  }
];

const Collections = () => {
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Outerwear', 'Tailoring', 'Knitwear', 'Accessories', 'Footwear'];

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-8 lg:px-12 max-w-[1800px]">
        {/* Page Header */}
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-primary leading-none"
          >
            ALL COLLECTIONS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-sans text-[10px] tracking-[0.4em] uppercase text-primary/40 font-black"
          >
            Curated essentials for the modern silhouette
          </motion.p>
        </header>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar Filters - High Fidelity */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-16">
              <div>
                <h3 className="font-sans font-black text-[10px] tracking-[0.3em] uppercase mb-8 pb-4 border-b border-primary/10">Sort By</h3>
                <div className="flex flex-col space-y-4">
                  {['Newest', 'Price: High to Low', 'Price: Low to High'].map(sort => (
                    <label key={sort} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="sort"
                        checked={selectedSort === sort}
                        onChange={() => setSelectedSort(sort)}
                        className="w-3 h-3 border-primary/20 text-primary focus:ring-0 rounded-none bg-transparent" 
                      />
                      <span className="text-[10px] uppercase font-black tracking-widest group-hover:text-tertiary transition-colors">{sort}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-sans font-black text-[10px] tracking-[0.3em] uppercase mb-8 pb-4 border-b border-primary/10">Category</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-[10px] uppercase font-black tracking-widest transition-all hover:pl-2
                        ${selectedCategory === cat ? 'text-primary border-l-2 border-primary pl-2' : 'text-primary/40 hover:text-primary'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-sans font-black text-[10px] tracking-[0.3em] uppercase mb-8 pb-4 border-b border-primary/10">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button key={size} className="aspect-square border border-primary/10 text-[10px] font-black flex items-center justify-center hover:bg-primary hover:text-surface transition-all">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                 <h3 className="font-sans font-black text-[10px] tracking-[0.3em] uppercase mb-8 pb-4 border-b border-primary/10">Color</h3>
                 <div className="flex flex-wrap gap-4">
                    {['#1c1b1b', '#fcf9f8', '#444748', '#e9c176'].map(color => (
                       <button key={color} className="w-6 h-6 border border-primary/10 rounded-full hover:scale-110 transition-transform" style={{ backgroundColor: color }} />
                    ))}
                 </div>
              </div>
            </div>
          </aside>

          {/* Product Grid Section */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-24">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="group"
                >
                  <Link to={`/products/${product.id}`}>
                    <div className="relative overflow-hidden aspect-[3/4] bg-primary/5 dark:bg-primary/10 mb-8 border border-primary/[0.03]">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <img 
                          src={product.hoverImage} 
                          alt="Lifestyle view" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-primary/40 font-black">{product.category}</span>
                        <h2 className="text-xl font-serif font-black tracking-tighter group-hover:italic transition-all uppercase leading-none">
                          {product.name}
                        </h2>
                        <p className="text-[10px] text-primary/40 font-black tracking-widest uppercase">{product.label}</p>
                      </div>
                      <span className="font-sans font-black text-lg tracking-tighter">€{product.price}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-32 flex justify-center items-center space-x-12 pt-12 border-t border-primary/10">
               <button className="text-[10px] font-black opacity-30 hover:opacity-100 transition-opacity">PREV</button>
               <div className="flex space-x-8">
                  {['01', '02', '03', '04'].map((num, i) => (
                    <button key={num} className={`text-[10px] font-black tracking-widest ${i === 0 ? 'text-primary border-b border-primary pb-1' : 'text-primary/30 hover:text-primary transition-colors'}`}>
                       {num}
                    </button>
                  ))}
               </div>
               <button className="text-[10px] font-black hover:opacity-100 transition-opacity">NEXT</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Collections;
