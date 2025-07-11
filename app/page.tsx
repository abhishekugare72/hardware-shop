"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import ProductShowcase from "./components/ProductShowcase"
import ProductGallery from "./components/ProductGallery"
import ServicesSection from "./components/ServicesSection"
import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer"
import ARPreview from "./components/ARPreview"
import MaterialQuiz from "./components/MaterialQuiz"
import ProjectCalculator from "./components/ProjectCalculator"
import SustainabilityDashboard from "./components/SustainabilityDashboard"
import ContractorDashboard from "./components/ContractorDashboard"
import TestimonialsSection from "./components/TestimonialsSection"

export default function HomePage() {
  const [cartItems, setCartItems] = useState(0)
  const [showARPreview, setShowARPreview] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showSustainability, setShowSustainability] = useState(false)
  const [showContractorDashboard, setShowContractorDashboard] = useState(false)

  const addToCart = () => {
    setCartItems((prev) => prev + 1)
  }

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-8 overflow-x-hidden">
      <Navigation
        onARClick={() => setShowARPreview(true)}
        onQuizClick={() => setShowQuiz(true)}
        onCalculatorClick={() => setShowCalculator(true)}
        onSustainabilityClick={() => setShowSustainability(true)}
        onContractorClick={() => setShowContractorDashboard(true)}
      />

      <div id="hero">
        <HeroSection />
      </div>

      <motion.div
        id="top-deals"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProductShowcase />
      </motion.div>

      <div id="gallery">
        <ProductGallery />
      </div>

      <motion.div
        id="features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        id="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AboutSection />
      </motion.div>

      <Footer />

      {/* Modal Components */}
      <AnimatePresence>
        {showARPreview && <ARPreview onClose={() => setShowARPreview(false)} />}
        {showQuiz && <MaterialQuiz onClose={() => setShowQuiz(false)} />}
        {showCalculator && <ProjectCalculator onClose={() => setShowCalculator(false)} />}
        {showSustainability && <SustainabilityDashboard onClose={() => setShowSustainability(false)} />}
        {showContractorDashboard && <ContractorDashboard onClose={() => setShowContractorDashboard(false)} />}
      </AnimatePresence>
    </div>
  )
}
