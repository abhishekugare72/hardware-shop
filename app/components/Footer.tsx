"use client"

import { motion } from "framer-motion"
import { Wrench, MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showChat, setShowChat] = useState(false)

  return (
    <>
      <footer className="bg-slate-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-500 rounded-lg flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Company Name</h3>
                  <p className="text-xs text-slate-400">Construction Materials Store</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Your trusted partner for premium construction materials and expert advice since 1998.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-white">Contact Info</h3>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Store Location</p>
                    <p className="text-slate-300 text-sm">BTM 2nd Stage</p>
                    <p className="text-slate-300 text-sm">Bengaluru, Karnataka 560076</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Phone</p>
                    <p className="text-slate-300 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Email</p>
                    <p className="text-slate-300 text-sm">info@companyname.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Store Hours</p>
                    <p className="text-slate-300 text-sm">Mon-Sat: 7AM-8PM</p>
                    <p className="text-slate-300 text-sm">Sunday: 9AM-6PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-white">Quick Links</h3>

              <div className="space-y-2">
                {[
                  "Steel & Iron",
                  "Cement & Concrete",
                  "Doors & Windows",
                  "Tiles & Marble",
                  "Electrical Items",
                  "Plumbing Supplies",
                  "Paint & Hardware",
                  "Tools & Equipment",
                ].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ x: 2 }}
                    className="block text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-white">Services</h3>

              <div className="space-y-2">
                {[
                  "Material Consultation",
                  "Bulk Orders",
                  "Quality Assurance",
                  "Expert Guidance",
                  "Custom Solutions",
                  "Project Support",
                ].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ x: 2 }}
                    className="block text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-sm">© {currentYear} Company Name. All rights reserved.</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Return Policy"].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ y: -1 }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat/Help Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed z-50 bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl p-4 flex items-center gap-2 hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none transition-all"
        aria-label="Chat or Help"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l.8-4A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        <span className="hidden sm:inline font-semibold">Chat / Help</span>
      </button>

      {/* Contact Form Modal */}
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-900 text-2xl font-bold focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
              aria-label="Close contact form"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Contact Support</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@email.com" required />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Message</label>
                <textarea className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} placeholder="How can we help you?" required />
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow hover:shadow-lg transition-all">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
