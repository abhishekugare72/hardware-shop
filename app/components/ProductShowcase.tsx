"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Eye } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

const products = [
  {
    id: 5,
    name: "Mahaveer Water Tanks",
    price: 999.99,
    originalPrice: 1299.99,
    rating: 4.8,
    reviews: 45,
    image: "/images/Mahaveer water tanks.webp",
    badge: "Top Pick",
    badgeColor: "from-blue-500 to-cyan-500",
    category: "Building Materials",
  },
  {
    id: 8,
    name: "White Ceramic Pedestal Sink",
    price: 499.99,
    originalPrice: 699.99,
    rating: 4.7,
    reviews: 28,
    image: "/images/white ceramic pedestal sink.png",
    badge: "Trending",
    badgeColor: "from-yellow-500 to-orange-500",
    category: "Bathroom",
  },
  {
    id: 1,
    name: "Professional Drill Set",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    image: "/images/Professional drill set.png",
    badge: "Best Seller",
    badgeColor: "from-red-500 to-pink-500",
    category: "Power Tools",
  },
  {
    id: 2,
    name: "Cordless Impact Driver",
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 89,
    image: "/images/cardless impact driver.png",
    badge: "New Arrival",
    badgeColor: "from-green-500 to-emerald-500",
    category: "Power Tools",
  },
  {
    id: 3,
    name: "Multi-Tool Kit",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 156,
    image: "/images/Multi Tool kits.png",
    badge: "Hot Sale",
    badgeColor: "from-orange-500 to-red-500",
    category: "Tool Sets",
  },
  {
    id: 4,
    name: "Circular Saw Pro",
    price: 349.99,
    originalPrice: 449.99,
    rating: 4.9,
    reviews: 78,
    image: "/images/Circular Saw Pro.png",
    badge: "Pro Choice",
    badgeColor: "from-purple-500 to-indigo-500",
    category: "Cutting Tools",
  },
  {
    id: 6,
    name: "Kaveri Tanks",
    price: 1099.99,
    originalPrice: 1399.99,
    rating: 4.9,
    reviews: 52,
    image: "/images/kaveri-tanks-family-new.png",
    badge: "Popular",
    badgeColor: "from-green-500 to-blue-500",
    category: "Building Materials",
  },
  {
    id: 7,
    name: "Bathroom Accessories",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.6,
    reviews: 30,
    image: "/images/bathroom_accessories-removebg-preview.png",
    badge: "New",
    badgeColor: "from-pink-500 to-purple-500",
    category: "Bathroom",
  },
  {
    id: 9,
    name: "Steel Rods Bundle",
    price: 799.99,
    originalPrice: 999.99,
    rating: 4.8,
    reviews: 34,
    image: "/images/Steel and rods.png",
    badge: "Best Value",
    badgeColor: "from-slate-500 to-slate-700",
    category: "Building Materials",
  },
  {
    id: 10,
    name: "Premium Paints Set",
    price: 599.99,
    originalPrice: 799.99,
    rating: 4.7,
    reviews: 41,
    image: "/images/Paint-Brands-removebg-preview.png",
    badge: "Colorful Deal",
    badgeColor: "from-pink-500 to-yellow-500",
    category: "Paints & Finishes",
  },
  {
    id: 11,
    name: "Binding Wire Pack",
    price: 249.99,
    originalPrice: 349.99,
    rating: 4.6,
    reviews: 22,
    image: "/images/binding_wire-removebg-preview.png",
    badge: "Popular",
    badgeColor: "from-green-400 to-blue-400",
    category: "Building Materials",
  },
]

export default function ProductShowcase() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-4 py-2 mb-4 shadow"
          >
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-xs sm:text-sm">Explore Our Product Range</span>
          </motion.div>
          <h2 className="font-bold mb-3 text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Top Deals Products
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover the variety of professional-grade tools and materials available in our store.
          </p>
        </motion.div>

        {/* Horizontal Product Scroll */}
        <div className="w-full overflow-x-auto pb-4 -ml-2 pr-4 pl-2 sm:mx-0 sm:px-4 scroll-smooth snap-x snap-mandatory relative">
          <div className="flex flex-row gap-4 sm:gap-6 whitespace-nowrap">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex-shrink-0 bg-white rounded-xl shadow-lg border border-slate-100 min-h-[420px] p-5 w-[80vw] max-w-[320px] sm:w-[320px]">
                    <Skeleton className="h-40 w-full mb-4 rounded-xl" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))
              : products.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    tabIndex={0}
                    className="snap-start flex-shrink-0 bg-white rounded-xl shadow-lg border border-slate-100 group transition-all duration-200 cursor-pointer overflow-hidden hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-blue-400 outline-none min-w-[80vw] max-w-[320px] sm:min-w-[320px] min-h-[400px] flex flex-col justify-between relative"
                    data-idx={idx}
                  >
                    {/* Badge */}
                    <div className={`absolute top-4 left-4 z-10 px-2 py-1 rounded text-xs font-semibold text-white bg-gradient-to-r ${product.badgeColor} shadow truncate overflow-hidden max-w-[120px]`}>
                      {product.badge}
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded bg-slate-100 text-slate-500 text-xs font-medium shadow truncate overflow-hidden max-w-[120px]">
                      {product.category}
                    </div>

                    {/* Image */}
                    <div className="relative h-40 sm:h-48 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Eye className="h-6 w-6 text-white drop-shadow-lg" />
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-5 text-center flex-1 flex flex-col justify-between">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1.5 truncate">{product.name}</h3>
                      <div className="text-sm text-slate-400 line-through">MRP: ₹{product.originalPrice}</div>
                      <div className="text-base font-bold text-blue-600">Our Price: ₹{product.price}</div>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}
