"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, Eye, Sparkles, Award, TrendingUp } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Professional Drill Set",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    image: "/images/drill-set.jpeg",
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
    image: "/images/cordless-impact-driver.webp",
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
    image: "/images/multi-tool-kit.webp",
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
    image: "/images/circular-saw.jpeg",
    badge: "Pro Choice",
    badgeColor: "from-purple-500 to-indigo-500",
    category: "Cutting Tools",
  },
]

interface ProductShowcaseProps {
  onAddToCart: () => void
}

export default function ProductShowcase({ onAddToCart }: ProductShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const nextProduct = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
      setIsFlipping(false)
    }, 300)
  }

  const prevProduct = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
      setIsFlipping(false)
    }, 300)
  }

  const currentProduct = products[currentIndex]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements - Responsive */}
      <div className="absolute inset-0">
        <div className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-8 sm:left-12 md:left-16 lg:left-20 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 right-8 sm:right-12 md:right-16 lg:right-20 w-40 sm:w-60 md:w-72 lg:w-80 h-40 sm:h-60 md:h-72 lg:h-80 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-16 sm:top-24 md:top-32 right-16 sm:right-24 md:right-32 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-blue-200/30 rounded-xl sm:rounded-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header - Fully Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Badge - Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-6 sm:mb-8 shadow-lg"
          >
            <Sparkles className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm sm:text-base">Premium Quality Products</span>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Enhanced Title - Fully Responsive */}
          <h2 className="font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Featured
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2 sm:mt-3 md:mt-4">
              Products
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our top-rated tools and equipment with{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              professional quality
            </span>{" "}
            and expert recommendations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Enhanced Product Card - Fully Responsive */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ rotateY: isFlipping ? 90 : 0, opacity: isFlipping ? 0 : 1, scale: 0.9 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform-gpu border border-slate-200/50 backdrop-blur-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Enhanced Product Badge - Responsive */}
                  <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 z-20">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-white font-bold text-xs sm:text-sm shadow-lg bg-gradient-to-r ${currentProduct.badgeColor} flex items-center space-x-1 sm:space-x-2`}
                    >
                      <Award className="h-3 sm:h-4 w-3 sm:w-4" />
                      <span>{currentProduct.badge}</span>
                    </motion.div>
                  </div>

                  {/* Category Badge - Responsive */}
                  <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="px-2 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 font-medium text-xs border border-slate-200 shadow-md"
                    >
                      {currentProduct.category}
                    </motion.div>
                  </div>

                  {/* Enhanced Product Image - Responsive */}
                  <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Enhanced Hover Actions - Responsive */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/10 flex items-center justify-center space-x-4 sm:space-x-6"
                    >
                      <motion.button
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 sm:p-3 md:p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                      >
                        <Eye className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-slate-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 sm:p-3 md:p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                      >
                        <Heart className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-red-500" />
                      </motion.button>
                    </motion.div>

                    {/* Floating Elements - Responsive */}
                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20"
                    />
                  </div>

                  {/* Enhanced Product Info - Responsive */}
                  <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 sm:mb-3">
                        {currentProduct.name}
                      </h3>

                      {/* Enhanced Rating - Responsive */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                        <div className="flex items-center space-x-0.5 sm:space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                            >
                              <Star
                                className={`h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 ${
                                  i < Math.floor(currentProduct.rating)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-slate-700">
                          {currentProduct.rating}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-500">({currentProduct.reviews} reviews)</span>
                        <div className="flex items-center space-x-1 text-green-600">
                          <TrendingUp className="h-3 sm:h-4 w-3 sm:w-4" />
                          <span className="text-xs font-medium">Trending</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Pricing - Responsive */}
                    <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl sm:rounded-2xl border border-slate-200">
                      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                          ${currentProduct.price}
                        </span>
                        <span className="text-base sm:text-lg md:text-xl text-slate-500 line-through">
                          ${currentProduct.originalPrice}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold text-sm sm:text-base md:text-lg">
                          Save ${(currentProduct.originalPrice - currentProduct.price).toFixed(2)}
                        </div>
                        <div className="text-xs sm:text-sm text-green-500">
                          {Math.round(
                            ((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) *
                              100,
                          )}
                          % OFF
                        </div>
                      </div>
                    </div>

                    {/* Enhanced CTA Button - Responsive */}
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onAddToCart}
                      className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <ShoppingCart className="h-5 sm:h-6 w-5 sm:w-6 relative z-10" />
                      <span className="relative z-10">Add to Cart</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="relative z-10"
                      >
                        <Sparkles className="h-4 sm:h-5 w-4 sm:w-5" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Enhanced Navigation and Product List - Responsive */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 md:space-y-10">
            {/* Enhanced Navigation Buttons - Responsive */}
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevProduct}
                disabled={isFlipping}
                className="p-3 sm:p-4 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-blue-100 hover:to-purple-100 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 border border-slate-200"
              >
                <ChevronLeft className="h-5 sm:h-6 md:h-7 w-5 sm:w-6 md:w-7 text-slate-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextProduct}
                disabled={isFlipping}
                className="p-3 sm:p-4 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-blue-100 hover:to-purple-100 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 border border-slate-200"
              >
                <ChevronRight className="h-5 sm:h-6 md:h-7 w-5 sm:w-6 md:w-7 text-slate-600" />
              </motion.button>
            </div>

            {/* Enhanced Product Thumbnails - Responsive */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (!isFlipping) {
                      setIsFlipping(true)
                      setTimeout(() => {
                        setCurrentIndex(index)
                        setIsFlipping(false)
                      }, 300)
                    }
                  }}
                  className={`p-3 sm:p-4 md:p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transition-all duration-300 border-2 ${
                    index === currentIndex
                      ? "border-blue-500 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50"
                      : "border-slate-200 hover:border-slate-300 hover:shadow-xl"
                  }`}
                >
                  <div className="relative mb-3 sm:mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-16 sm:h-20 md:h-24 object-cover rounded-lg sm:rounded-xl"
                    />
                    {index === currentIndex && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                      >
                        <Sparkles className="h-2 sm:h-2.5 md:h-3 w-2 sm:w-2.5 md:w-3 text-white" />
                      </motion.div>
                    )}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-800 truncate mb-1 sm:mb-2">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-blue-600 font-bold text-base sm:text-lg">${product.price}</p>
                    <div className="flex items-center space-x-0.5 sm:space-x-1">
                      <Star className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm text-slate-600">{product.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Features - Responsive */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200">
              <h4 className="font-bold text-slate-800 mb-3 sm:mb-4 flex items-center space-x-2">
                <Award className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600" />
                <span className="text-sm sm:text-base">Why Choose Our Products?</span>
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full flex-shrink-0" />
                  <span>Professional grade quality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full flex-shrink-0" />
                  <span>2-year warranty included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-400 rounded-full flex-shrink-0" />
                  <span>Expert customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
