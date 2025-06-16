"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Gift, Bell, Zap } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-sky-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated with BuildMart Pro</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get exclusive deals, new product announcements, expert tips, and project inspiration delivered straight to
              your inbox.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Gift, text: "Exclusive member-only discounts up to 40%" },
                { icon: Bell, text: "Early access to new products and sales" },
                { icon: Zap, text: "Weekly project tips from our experts" },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-300">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-slate-400">
              Join over 50,000 professionals and DIY enthusiasts who trust our newsletter.
            </p>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Subscribe Now</h3>
                <p className="text-slate-300">Get your first discount code instantly!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-slate-300 mb-2">
                    I'm interested in (optional)
                  </label>
                  <select className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent backdrop-blur-sm">
                    <option value="">Select your interests</option>
                    <option value="tools">Power Tools & Equipment</option>
                    <option value="materials">Building Materials</option>
                    <option value="diy">DIY Projects</option>
                    <option value="commercial">Commercial Construction</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubscribed}
                  className="w-full py-4 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribed ? "✓ Subscribed!" : "Subscribe & Get 15% Off"}
                </motion.button>
              </form>

              <p className="text-xs text-slate-400 text-center mt-6">
                We respect your privacy. Unsubscribe at any time. No spam, ever.
              </p>
            </div>

            {/* Success Animation */}
            {isSubscribed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 bg-green-500/20 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-green-500/30"
              >
                <div className="text-center text-white">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-2xl">✓</span>
                  </motion.div>
                  <h4 className="text-xl font-bold mb-2">Welcome to BuildMart Pro!</h4>
                  <p className="text-slate-300">Check your email for your 15% discount code</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
