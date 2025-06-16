"use client"

import { motion } from "framer-motion"
import { X, Leaf, Recycle, TreePine, Droplets } from "lucide-react"

interface SustainabilityDashboardProps {
  onClose: () => void
}

export default function SustainabilityDashboard({ onClose }: SustainabilityDashboardProps) {
  const metrics = [
    {
      icon: TreePine,
      label: "Trees Saved",
      value: "1,247",
      change: "+12%",
      color: "text-green-600",
    },
    {
      icon: Recycle,
      label: "Materials Recycled",
      value: "89%",
      change: "+5%",
      color: "text-blue-600",
    },
    {
      icon: Droplets,
      label: "Water Conserved",
      value: "2.3M gal",
      change: "+8%",
      color: "text-cyan-600",
    },
    {
      icon: Leaf,
      label: "Carbon Offset",
      value: "450 tons",
      change: "+15%",
      color: "text-emerald-600",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <Leaf className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-slate-800">Sustainability Impact</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{metric.value}</h3>
                <p className="text-sm text-slate-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Impact Visualization */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Your Environmental Impact This Year</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Carbon Footprint Reduction</span>
                <div className="flex-1 mx-4 bg-slate-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                  />
                </div>
                <span className="text-green-600 font-semibold">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Sustainable Materials Used</span>
                <div className="flex-1 mx-4 bg-slate-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "89%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full"
                  />
                </div>
                <span className="text-blue-600 font-semibold">89%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700">Waste Reduction</span>
                <div className="flex-1 mx-4 bg-slate-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "62%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                  />
                </div>
                <span className="text-purple-600 font-semibold">62%</span>
              </div>
            </div>
          </div>

          {/* Eco-Friendly Products */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Recommended Eco-Friendly Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Bamboo Flooring", eco: "100% Renewable", price: "$4.99/sq ft" },
                { name: "Recycled Steel Tools", eco: "80% Recycled Content", price: "$89.99" },
                { name: "Solar LED Lights", eco: "Zero Energy Cost", price: "$24.99" },
              ].map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="p-4 bg-white border border-green-200 rounded-xl hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-slate-800 mb-2">{product.name}</h4>
                  <p className="text-sm text-green-600 mb-2">{product.eco}</p>
                  <p className="text-slate-600 font-medium">{product.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
