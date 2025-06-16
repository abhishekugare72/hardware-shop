"use client"

import { motion } from "framer-motion"
import { X, Camera, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"

interface ARPreviewProps {
  onClose: () => void
}

export default function ARPreview({ onClose }: ARPreviewProps) {
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
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-slate-800">AR Product Preview</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        {/* AR Viewer */}
        <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-32 h-32 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Camera className="h-16 w-16 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">AR Preview Loading...</h3>
            <p className="text-slate-600">Point your camera at a flat surface to place the product</p>
          </div>

          {/* AR Controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
            >
              <RotateCcw className="h-5 w-5 text-slate-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
            >
              <ZoomIn className="h-5 w-5 text-slate-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
            >
              <ZoomOut className="h-5 w-5 text-slate-600" />
            </motion.button>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-6">
          <h4 className="font-semibold text-slate-800 mb-3">How to use AR Preview:</h4>
          <ul className="space-y-2 text-slate-600">
            <li>• Allow camera access when prompted</li>
            <li>• Point your device at a flat surface</li>
            <li>• Tap to place the product in your space</li>
            <li>• Use controls to rotate and resize</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}
