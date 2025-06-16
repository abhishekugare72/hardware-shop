"use client"

import { motion } from "framer-motion"
import { Wrench, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
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
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
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
  )
}
