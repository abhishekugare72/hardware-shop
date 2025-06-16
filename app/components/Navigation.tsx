"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, User, Menu, X, Wrench } from "lucide-react"

interface NavigationProps {
  onARClick: () => void
  onQuizClick: () => void
  onCalculatorClick: () => void
  onSustainabilityClick: () => void
  onContractorClick: () => void
}

export default function Navigation({
  onARClick,
  onQuizClick,
  onCalculatorClick,
  onSustainabilityClick,
  onContractorClick,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/95 shadow-lg border-b border-slate-200/50"
          : "backdrop-blur-sm bg-white/90 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Simplified Logo */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent whitespace-nowrap">
                Company Name
              </span>
              <p className="text-xs text-slate-500 font-medium whitespace-nowrap">Premium Construction Materials</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="#" text="Materials" />
            <NavLink href="#" text="Categories" />
            <NavLink href="#" text="Services" />
            <NavLink href="#" text="About" />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContractorClick}
              className="px-6 py-2 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              Bulk Orders
            </motion.button>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search materials..."
                className="w-80 pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent text-sm placeholder-slate-500 transition-all duration-200"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 rounded-2xl shadow-md"
            >
              <User className="h-5 w-5" />
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 rounded-2xl shadow-md"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-md border-t border-slate-200/50"
      >
        <div className="px-6 py-6 space-y-4">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search materials..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          </div>

          <MobileNavLink text="Materials" />
          <MobileNavLink text="Categories" />
          <MobileNavLink text="Services" />
          <MobileNavLink text="About" />

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={onContractorClick}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-semibold shadow-lg"
          >
            Bulk Orders
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      className="relative text-slate-700 hover:text-slate-900 font-semibold transition-colors duration-200 text-sm group"
    >
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 group-hover:w-full transition-all duration-300 rounded-full" />
    </motion.a>
  )
}

function MobileNavLink({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="block text-slate-700 hover:text-slate-900 font-semibold transition-colors py-3 text-sm border-b border-slate-100 last:border-b-0"
    >
      {text}
    </a>
  )
}
