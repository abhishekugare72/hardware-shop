"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Calculator, Plus, Minus } from "lucide-react"

interface ProjectCalculatorProps {
  onClose: () => void
}

export default function ProjectCalculator({ onClose }: ProjectCalculatorProps) {
  const [projectType, setProjectType] = useState("deck")
  const [dimensions, setDimensions] = useState({ length: 10, width: 10, height: 8 })
  const [materials, setMaterials] = useState([
    { name: "Lumber", quantity: 0, price: 5.99, unit: "board ft" },
    { name: "Screws", quantity: 0, price: 12.99, unit: "box" },
    { name: "Concrete", quantity: 0, price: 4.5, unit: "bag" },
  ])

  const calculateMaterials = () => {
    const area = dimensions.length * dimensions.width
    const newMaterials = [...materials]

    if (projectType === "deck") {
      newMaterials[0].quantity = Math.ceil(area * 1.2) // Lumber
      newMaterials[1].quantity = Math.ceil(area / 50) // Screws
      newMaterials[2].quantity = Math.ceil(area / 10) // Concrete
    }

    setMaterials(newMaterials)
  }

  const totalCost = materials.reduce((sum, material) => sum + material.quantity * material.price, 0)

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
            <Calculator className="h-6 w-6 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-800">Project Calculator</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Project Type</label>
            <div className="grid grid-cols-3 gap-3">
              {["deck", "fence", "shed"].map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setProjectType(type)}
                  className={`p-3 rounded-xl border-2 transition-all capitalize ${
                    projectType === type
                      ? "border-sky-500 bg-sky-50 text-sky-700"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Dimensions */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Dimensions</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(dimensions).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 mb-2 capitalize">{key} (ft)</label>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        setDimensions((prev) => ({
                          ...prev,
                          [key]: Math.max(1, prev[key as keyof typeof prev] - 1),
                        }))
                      }
                      className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </motion.button>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="number"
                      value={value}
                      onChange={(e) =>
                        setDimensions((prev) => ({
                          ...prev,
                          [key]: Math.max(1, Number.parseInt(e.target.value) || 1),
                        }))
                      }
                      className="w-20 p-2 text-center border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        setDimensions((prev) => ({
                          ...prev,
                          [key]: prev[key as keyof typeof prev] + 1,
                        }))
                      }
                      className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateMaterials}
            className="w-full py-3 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
          >
            Calculate Materials
          </motion.button>

          {/* Materials List */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Required Materials</h3>
            <div className="space-y-4">
              {materials.map((material, index) => (
                <motion.div
                  key={material.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                >
                  <div>
                    <h4 className="font-medium text-slate-800">{material.name}</h4>
                    <p className="text-sm text-slate-600">
                      ${material.price.toFixed(2)} per {material.unit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-800">
                      {material.quantity} {material.unit}
                    </p>
                    <p className="text-sm text-sky-600">${(material.quantity * material.price).toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Total Cost */}
          <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-xl border border-sky-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-800">Total Estimated Cost</h3>
              <motion.p
                key={totalCost}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold text-sky-600"
              >
                ${totalCost.toFixed(2)}
              </motion.p>
            </div>
            <p className="text-sm text-slate-600 mt-2">*Prices are estimates and may vary by location</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
