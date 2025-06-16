"use client"

import { motion } from "framer-motion"
import { Hammer, Wrench, Zap, TreePine, Palette, Building, DoorOpen, Square, Waves } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Steel & Iron",
    icon: Hammer,
    color: "from-slate-400 via-slate-500 to-slate-600",
    image: "/images/steel-iron.jpg",
    items: "TMT Bars, Angles, Pipes",
    count: "2.5K+ Items",
  },
  {
    id: 2,
    name: "Cement & Concrete",
    icon: Building,
    color: "from-stone-400 via-stone-500 to-stone-600",
    image: "/images/cement-concrete.png",
    items: "OPC, PPC, Ready Mix",
    count: "1.8K+ Items",
  },
  {
    id: 3,
    name: "Doors & Windows",
    icon: DoorOpen,
    color: "from-amber-400 via-amber-500 to-amber-600",
    image: "/images/doors-windows.jpg",
    items: "Wooden, UPVC, Aluminum",
    count: "3.2K+ Items",
  },
  {
    id: 4,
    name: "Tiles & Marble",
    icon: Square,
    color: "from-emerald-400 via-emerald-500 to-emerald-600",
    image: "/images/tiles-marble.jpg",
    items: "Floor, Wall, Granite",
    count: "4.1K+ Items",
  },
  {
    id: 5,
    name: "Electrical",
    icon: Zap,
    color: "from-yellow-400 via-yellow-500 to-yellow-600",
    image: "/images/electronics.jpg",
    items: "Wires, Switches, MCB",
    count: "1.9K+ Items",
  },
  {
    id: 6,
    name: "Plumbing",
    icon: Waves,
    color: "from-blue-400 via-blue-500 to-blue-600",
    image: "/images/plumbing.avif",
    items: "Pipes, Fittings, Taps",
    count: "2.7K+ Items",
  },
  {
    id: 7,
    name: "Paint & Hardware",
    icon: Palette,
    color: "from-pink-400 via-pink-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=400&fit=crop&q=80",
    items: "Interior, Exterior, Tools",
    count: "1.6K+ Items",
  },
  {
    id: 8,
    name: "Lumber & Wood",
    icon: TreePine,
    color: "from-orange-400 via-orange-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop&q=80",
    items: "Plywood, Timber, Boards",
    count: "2.2K+ Items",
  },
  {
    id: 9,
    name: "Tools",
    icon: Wrench,
    color: "from-purple-400 via-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&h=400&fit=crop&q=80",
    items: "Power Tools, Hand Tools",
    count: "3.5K+ Items",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-6 py-3 mb-8"
          >
            <Building className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Premium Quality Materials</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Complete Materials
            </span>
            <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Collection
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality construction materials with expert guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={category.image}
                  alt={`${category.name} - ${category.items}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-6 left-6"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm`}
                  >
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                </motion.div>

                {/* Count Badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-3 py-1.5 rounded-full font-bold shadow-lg border border-white/50">
                    {category.count}
                  </span>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 flex items-center justify-center backdrop-blur-sm`}
                >
                  <span className="text-white font-bold text-lg">Explore Collection →</span>
                </motion.div>
              </div>

              {/* Enhanced Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {category.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{category.items}</p>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className={`h-1.5 bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200/50 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Need Help Finding the Right Materials?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our expert team is here to guide you through our extensive collection and help you find exactly what you
              need for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View All Categories
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Expert Advice
              </motion.button>
            </div>
          </div>

          {/* Category Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">9</div>
              <div className="text-sm text-slate-600">Categories</div>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100">
              <div className="text-2xl font-bold text-purple-600 mb-1">25K+</div>
              <div className="text-sm text-slate-600">Total Products</div>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100">
              <div className="text-2xl font-bold text-green-600 mb-1">100+</div>
              <div className="text-sm text-slate-600">Top Brands</div>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-100">
              <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-sm text-slate-600">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
