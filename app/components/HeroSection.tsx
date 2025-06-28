"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MapPin, Star, Award, Users, ShoppingBag, Phone, Clock, Mail } from "lucide-react"
import { useRef } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-0 pb-8 sm:pb-12 md:pb-16"
    >
      {/* Enhanced Background with Geometric Shapes */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {/* Large Background Circles - Responsive */}
        <div className="absolute top-4 sm:top-8 md:top-10 left-4 sm:left-8 md:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-r from-blue-100/60 to-purple-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 right-4 sm:right-8 md:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-r from-purple-100/60 to-pink-100/60 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[600px] h-80 sm:h-96 md:h-[600px] bg-gradient-to-r from-cyan-50/40 to-blue-50/40 rounded-full blur-3xl" />

        {/* Geometric Shapes - Responsive */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-8 sm:top-12 md:top-20 right-8 sm:right-12 md:right-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-slate-200/50 rounded-2xl sm:rounded-3xl"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-8 sm:left-12 md:left-16 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-purple-200/50 rounded-xl sm:rounded-2xl"
        />

        {/* Floating Elements - Responsive */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 sm:top-32 md:top-40 left-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-xl sm:rounded-2xl backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 sm:bottom-32 md:bottom-40 right-1/4 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full backdrop-blur-sm"
        />
      </motion.div>

      {/* Main Content - Fully Responsive */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content - Responsive */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-7 text-left space-y-6 sm:space-y-8 md:space-y-10"
            >
              {/* Badge - Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-lg mt-4 sm:mt-0"
              >
                <Award className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm sm:text-base">25+ Years of Excellence</span>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse ml-1 sm:ml-2" />
              </motion.div>

              {/* Main Heading - Fully Responsive */}
              <motion.h1
                className="font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  All Construction Materials 
                </span>
              </motion.h1>

              {/* Description - Responsive with shimmer effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-3 sm:space-y-4"
              >
                <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                  Premium construction materials for every project.
                </p>
              </motion.div>

              {/* Action Buttons - Fully Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full sm:rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ShoppingBag className="h-5 sm:h-6 w-5 sm:w-6 relative z-10" />
                  <span className="relative z-10">Visit Our Store</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="relative z-10"
                  >
                    <ArrowRight className="h-5 sm:h-6 w-5 sm:w-6" />
                  </motion.div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full sm:rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MapPin className="h-5 sm:h-6 w-5 sm:w-6" />
                  <span>Get Directions</span>
                </motion.button>
              </motion.div>

              {/* Enhanced Trust Indicators - Fully Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-12 pt-6 sm:pt-8 md:pt-10 border-t border-slate-200"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                        className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 sm:border-3 border-white shadow-lg flex items-center justify-center"
                      >
                        <Users className="h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 text-white" />
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="text-sm sm:text-base font-semibold text-slate-700">Trusted by 10K+ customers</div>
                    <div className="text-xs sm:text-sm text-slate-500">Professional & DIY enthusiasts</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual Content - Fully Responsive */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-5 relative mt-16 lg:mt-20"
            >
              {/* Main Visual Card - Responsive */}
              <div className="relative">
                {/* Background Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="relative bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-slate-200/50 backdrop-blur-sm"
                >
                  {/* Header - Responsive */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Premium Materials
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base flex items-center space-x-2">
                        <span>Quality Guaranteed</span>
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                      </p>
                    </div>
                    <div className="w-12 sm:w-16 md:w-18 h-12 sm:h-16 md:h-18 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
                      <Award className="h-6 sm:h-7 md:h-9 w-6 sm:w-7 md:w-9 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Product Grid - Responsive */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
                    {[
                      { name: "Steel & Iron", color: "from-slate-400 to-slate-600", icon: "🏗️" },
                      { name: "Cement", color: "from-stone-400 to-stone-600", icon: "🧱" },
                      { name: "Paints", color: "from-emerald-400 to-emerald-600", icon: "🎨" },
                      { name: "Tools", color: "from-purple-400 to-purple-600", icon: "🔧" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`p-4 sm:p-6 md:p-8 bg-gradient-to-r ${item.color} rounded-xl sm:rounded-2xl text-white text-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                      >
                        <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">{item.icon}</div>
                        <div className="text-xs sm:text-sm font-bold">{item.name}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Bottom Stats - Responsive */}
                  <div className="flex items-center justify-between pt-4 sm:pt-6 md:pt-8 border-t border-slate-200 mb-4 sm:mb-6 md:mb-8">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <Users className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-white" />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1">
                        <div className="text-sm sm:text-base font-semibold text-slate-700">Expert Staff Available</div>
                        <div className="text-xs sm:text-sm text-slate-500">Professional consultation</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm sm:text-base text-green-600 font-bold">Open Now</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact - Responsive */}
                  <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl border border-blue-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
                        <div className="space-y-0.5 sm:space-y-1">
                          <div className="text-sm sm:text-base font-semibold text-slate-700">Call Now</div>
                          <div className="text-xs sm:text-sm text-slate-500">+91 98765 43210</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <Clock className="h-4 sm:h-5 w-4 sm:w-5 text-slate-500" />
                        <span className="text-xs sm:text-sm text-slate-600 font-medium">7AM-8PM</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Floating Elements - Responsive */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-8 mb-4 sm:mb-8 md:mb-12 w-full"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-4 sm:w-5 md:w-6 h-6 sm:h-8 md:h-10 border-2 border-slate-300 rounded-full flex justify-center mb-2 sm:mb-3 md:mb-4 bg-white/50 backdrop-blur-sm mx-auto"
        >
          <div className="w-0.5 sm:w-1 h-2 sm:h-2.5 md:h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-1 sm:mt-1.5 md:mt-2" />
        </motion.div>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">Explore our collection</p>
      </motion.div>
    </section>
  )
}
