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
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Bulk Order", icon: Package },
                { name: "Schedule Delivery", icon: Calendar },
                { name: "Team Management", icon: Users },
                { name: "Volume Pricing", icon: DollarSign },
              ].map((action, index) => (
                <motion.button
                  key={action.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 hover:shadow-md transition-all"
                >
                  <action.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">{action.name}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-slate-800">{order.project}</h4>
                    <p className="text-sm text-slate-600">Order ID: {order.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-800">{order.amount}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "In Transit"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

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
