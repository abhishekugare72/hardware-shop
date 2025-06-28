import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

const allProducts = [
  { id: 0, name: "Sheets", image: "/images/patras.png", category: "Building Materials" },
  { id: 5, name: "Steel Rods", image: "/images/Steel and rods.png", category: "Building Materials" },
  { id: 6, name: "Cement Bag", image: "/images/cement-banner-removebg-preview.png", category: "Building Materials" },
  { id: 15, name: "Paints", image: "/images/Paint-Brands-removebg-preview.png", category: "Paints & Finishes" },
  { id: 10, name: "Iron Rods", image: "/images/iron rods.png", category: "Building Materials" },
  { id: 11, name: "Nails", image: "/images/Nails.png", category: "Building Materials" },
  { id: 1, name: "Professional Drill Set", image: "/images/Professional drill set.png", category: "Power Tools" },
  { id: 13, name: "Water Tanks", image: "/images/Mahaveer water tanks.webp", category: "Building Materials" },
  { id: 14, name: "Binding Wire", image: "/images/binding_wire-removebg-preview.png", category: "Building Materials" },
  { id: 2, name: "Cordless Impact Driver", image: "/images/cardless impact driver.png", category: "Power Tools" },
  { id: 3, name: "Multi-Tool Kit", image: "/images/Multi Tool kits.png", category: "Tool Sets" },
  { id: 4, name: "Circular Saw Pro", image: "/images/Circular Saw Pro.png", category: "Cutting Tools" },
  { id: 8, name: "Plumbing Kit", image: "/images/plumbing.avif", category: "Plumbing" },
  { id: 9, name: "Doors & Windows", image: "/images/doors-windows.jpg", category: "Fixtures" },
]

const categories = [
  "All",
  ...Array.from(new Set(allProducts.map((p) => p.category)))
]

export default function ProductGallery() {
  const [selected, setSelected] = useState("All")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [pendingScroll, setPendingScroll] = useState(false)

  const filteredProducts = allProducts.filter(p =>
    (selected === "All" || p.category === selected) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    setLoading(false)
    if (pendingScroll) {
      const searchTerm = search.trim().toLowerCase();
      const productMatch = allProducts.some(p => p.name.toLowerCase().includes(searchTerm));
      const categoryMatch = categories.some(cat => cat.toLowerCase().includes(searchTerm));
      if (productMatch) {
        const section = document.getElementById('products');
        if (section) section.scrollIntoView({ behavior: 'auto' });
      } else if (categoryMatch) {
        const section = document.getElementById('categories');
        if (section) section.scrollIntoView({ behavior: 'auto' });
      }
      setPendingScroll(false);
    }
  }, [selected, search, pendingScroll]);

  return (
    <section id="product-gallery-section" className="py-12 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2">
            Our Product Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse a wide range of products available in our store. No online purchase, just inspiration!
          </p>
        </motion.div>

        {/* Search and Category Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-blue-500'>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-blue-200 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm placeholder-slate-500 transition-all duration-200"
              aria-label="Search products"
              onKeyDown={e => {
                if (e.key === 'Enter') setPendingScroll(true);
              }}
            />
          </div>

          <div className="w-full sm:w-auto overflow-x-auto -mx-2 px-2 custom-scrollbar-thin">
            <div className="flex flex-row flex-nowrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-4 sm:px-5 py-2 mb-1 rounded-full text-sm border min-w-[100px] whitespace-nowrap font-semibold shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none truncate overflow-hidden whitespace-nowrap ${
                    selected === cat
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-600 shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-blue-50"
                  }`}
                  tabIndex={0}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl border border-slate-200 min-h-[400px] flex flex-col justify-between p-6">
                  <Skeleton className="h-48 w-full mb-4 rounded-xl" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
            : filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  tabIndex={0}
                  className="bg-white rounded-2xl shadow-xl border border-slate-200 group transition-all duration-300 cursor-pointer overflow-hidden min-h-[400px] flex flex-col justify-between hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 w-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 truncate" style={{ lineHeight: '1.4' }}>{product.name}</h3>
                    <div className="text-xs text-slate-500 mb-2" style={{ lineHeight: '1.5' }}>{product.category}</div>
                  </div>
                </motion.div>
              ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center mt-10">
          <a href="#categories" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none">
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
