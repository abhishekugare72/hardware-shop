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
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['features', 'categories', 'services', 'about']
      let foundSection: string | null = null
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          foundSection = section
        }
      }
      setActiveSection(foundSection)
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
        <div className="flex items-center h-16 sm:h-18 md:h-20">
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

          {/* Centered Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
            <NavLink href="#gallery" text="Materials" isActive={activeSection === 'gallery'} />
            <NavLink href="#top-deals" text="Top Deals" isActive={activeSection === 'top-deals'} />
            <NavLink href="#services" text="Services" isActive={activeSection === 'services'} />
            <NavLink href="#about" text="About" isActive={activeSection === 'about'} />
          </div>

          {/* Right Side Actions (Bulk Orders & Contact Us) */}
          <div className="hidden lg:flex items-center space-x-2 ml-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContractorClick}
              className="px-6 py-2 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 whitespace-nowrap min-w-[120px]"
            >
              Bulk Orders
            </motion.button>
            <a
              href="#footer-contact"
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200 whitespace-nowrap min-w-[120px] ml-2 focus-visible:ring-2 focus-visible:ring-green-400 outline-none"
            >
              Contact Us
            </a>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4 lg:ml-4 ml-auto mr-2">
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
          <MobileNavLink text="Materials" href="#gallery" />
          <MobileNavLink text="Top Deals" href="#top-deals" />
          <MobileNavLink text="Services" href="#services" />
          <MobileNavLink text="About" href="#about" />

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={onContractorClick}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-semibold shadow-lg"
          >
            Bulk Orders
          </motion.button>
          <a
            href="#footer-contact"
            className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg text-center block focus-visible:ring-2 focus-visible:ring-green-400 outline-none"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </motion.nav>
  )
}

function NavLink({ href, text, isActive }: { href: string; text: string; isActive?: boolean }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      tabIndex={0}
      className={`relative text-slate-700 hover:text-blue-700 font-medium transition-colors duration-200 text-xs sm:text-sm px-3 py-2 group rounded focus-visible:ring-2 focus-visible:ring-blue-400 outline-none hover:bg-blue-50 active:bg-blue-100 ${isActive ? 'text-blue-700 font-bold' : ''}`}
      style={{ letterSpacing: '0.01em', lineHeight: '1.6' }}
      aria-label={text}
    >
      {text}
      <span className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'} group-hover:w-6 group-hover:opacity-60`}/>
    </motion.a>
  )
}

function MobileNavLink({ text, href = "#" }: { text: string; href?: string }) {
  return (
    <a
      href={href}
      tabIndex={0}
      className="block text-slate-700 hover:text-slate-900 font-semibold transition-colors py-3 text-sm border-b border-slate-100 last:border-b-0 rounded focus-visible:ring-2 focus-visible:ring-blue-400 outline-none hover:bg-blue-50 active:bg-blue-100"
      style={{lineHeight: '1.6'}}
      aria-label={text}
    >
      {text}
    </a>
  )
}
