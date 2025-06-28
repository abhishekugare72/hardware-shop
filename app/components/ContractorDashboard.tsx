"use client"

import { motion } from "framer-motion"
import { X, Building2, TrendingUp, Users, Package, Calendar, DollarSign } from "lucide-react"

interface ContractorDashboardProps {
  onClose: () => void
}

export default function ContractorDashboard({ onClose }: ContractorDashboardProps) {
  const stats = [
    { icon: DollarSign, label: "Monthly Savings", value: "$12,450", color: "text-green-600" },
    { icon: Package, label: "Bulk Orders", value: "47", color: "text-blue-600" },
    { icon: Users, label: "Team Members", value: "23", color: "text-purple-600" },
    { icon: TrendingUp, label: "Growth Rate", value: "+28%", color: "text-orange-600" },
  ]

  const recentOrders = [
    { id: "ORD-001", project: "Downtown Office Complex", amount: "$45,230", status: "Delivered" },
    { id: "ORD-002", project: "Residential Development", amount: "$32,100", status: "In Transit" },
    { id: "ORD-003", project: "Shopping Center Renovation", amount: "$67,890", status: "Processing" },
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
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <Building2 className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-800">Contractor Dashboard</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Coupon/Offer Message */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-6 text-center shadow-lg"
          >
            <div className="text-2xl font-bold text-green-700 mb-2">Congratulations! 🎉</div>
            <div className="text-lg font-semibold text-slate-800 mb-2">This is your coupon number:</div>
            <div className="text-3xl font-mono font-bold text-blue-700 mb-4 select-all">COUPEN-{Math.floor(100000 + Math.random() * 900000)}</div>
            <div className="text-red-600 font-semibold mb-2">Do not share this coupon number with anyone.</div>
            <div className="text-lg text-slate-700 mb-1">This coupon will discount your price to almost <span className='font-bold text-green-700'>wholesale price</span>. Please do not share it with anyone.</div>
            <div className="text-lg text-slate-700 mb-1">We are offering you <span className="font-bold text-green-700">FREE DELIVERY</span> on your bulk order!</div>
            <div className="text-base text-slate-600">Visit our shop and purchase for <span className="font-bold">₹47,000 or above</span> to apply all offers mentioned above.</div>
          </motion.div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-slate-800 mb-4">B2B Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Volume Discounts</h4>
                <p className="text-sm text-slate-600">Save up to 25% on bulk orders</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Priority Delivery</h4>
                <p className="text-sm text-slate-600">Guaranteed delivery windows</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Dedicated Support</h4>
                <p className="text-sm text-slate-600">Personal account manager</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
