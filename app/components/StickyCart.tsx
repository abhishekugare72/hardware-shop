"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, X } from "lucide-react"
import { useState, useEffect } from "react"

interface StickyCartProps {
  itemCount: number
}

export default function StickyCart({ itemCount }: StickyCartProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [shouldPulse, setShouldPulse] = useState(false)

  useEffect(() => {
    if (itemCount > 0) {
      setShouldPulse(true)
      const timer = setTimeout(() => setShouldPulse(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [itemCount])

  return (
    <>
      {/* Cart Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={
            shouldPulse
              ? {
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.7)",
                    "0 0 0 20px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 0.6 }}
          onClick={() => setIsOpen(true)}
          className="relative p-4 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <ShoppingCart className="h-6 w-6" />

          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold"
            >
              {itemCount}
            </motion.span>
          )}
        </motion.button>
      </motion.div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-bold text-slate-800">Shopping Cart ({itemCount})</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-slate-600" />
                </motion.button>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {itemCount === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingCart className="h-16 w-16 text-slate-300 mb-4" />
                    <h3 className="text-lg font-semibold text-slate-600 mb-2">Your cart is empty</h3>
                    <p className="text-slate-500">Add some products to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {[...Array(itemCount)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg"
                      >
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt="Product"
                          className="w-15 h-15 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800">Product {index + 1}</h4>
                          <p className="text-slate-600">$99.99</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                            -
                          </button>
                          <span className="w-8 text-center">1</span>
                          <button className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                            +
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {itemCount > 0 && (
                <div className="border-t p-6 space-y-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span>${(itemCount * 99.99).toFixed(2)}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                  >
                    Checkout
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
