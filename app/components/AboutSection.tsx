"use client"

import { motion } from "framer-motion"
import { Award, Users, MapPin, Clock, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Company Name</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Founded in 1998 by master carpenter Abhishek Ugare, Company Name has grown from a small local hardware
              store to the region's premier destination for professional-grade construction materials and tools.
            </p>

            <div className="space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Our Mission</h3>
                  <p className="text-slate-600">
                    To empower builders, contractors, and DIY enthusiasts with the highest quality materials, expert
                    advice, and innovative solutions for every project.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, label: "Quality First", color: "from-yellow-400 to-orange-500" },
                { icon: Users, label: "Expert Team", color: "from-blue-400 to-cyan-500" },
                { icon: MapPin, label: "Local Roots", color: "from-green-400 to-emerald-500" },
                { icon: Clock, label: "Always Available", color: "from-purple-400 to-pink-500" },
              ].map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">{value.label}</h4>
                  <div className="w-full h-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-1 bg-gradient-to-r ${value.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Owner Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-sky-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Abhishek Ugare - Founder"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Abhishek Ugare</h3>
              <p className="text-sky-600 font-semibold mb-4">Founder & CEO</p>
              <blockquote className="text-lg text-slate-700 italic leading-relaxed">
                "When I started Company Name 25 years ago, my vision was simple: provide the construction community with
                the best materials, honest advice, and exceptional service. Today, that vision continues to drive
                everything we do. We're not just selling products – we're building relationships and supporting dreams."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
