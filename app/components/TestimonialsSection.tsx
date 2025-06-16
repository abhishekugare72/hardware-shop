"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    role: "General Contractor",
    company: "Rodriguez Construction",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "BuildMart Pro has been our go-to supplier for over 5 years. Their quality, service, and competitive pricing keep us coming back. The B2B portal makes ordering so much easier!",
    project: "Downtown Office Complex",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "DIY Enthusiast",
    company: "Homeowner",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I renovated my entire kitchen using products from BuildMart Pro. The staff was incredibly helpful, and the AR preview feature helped me visualize everything perfectly!",
    project: "Kitchen Renovation",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Architect",
    company: "Chen Design Studio",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The sustainability dashboard and eco-friendly product selection align perfectly with our green building initiatives. Excellent quality and environmental consciousness!",
    project: "Eco-Friendly Office Building",
  },
  {
    id: 4,
    name: "Lisa Thompson",
    role: "Property Manager",
    company: "Thompson Properties",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Managing multiple properties means I need reliable suppliers. BuildMart Pro's bulk ordering and scheduled delivery services have streamlined our maintenance operations.",
    project: "Multi-Property Maintenance",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the professionals and homeowners who trust BuildMart Pro
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-slate-100"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-slate-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                  <p className="text-sm text-sky-600 font-medium">Project: {testimonials[currentIndex].project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <ChevronRight className="h-6 w-6 text-slate-600" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 bg-white rounded-xl shadow-md cursor-pointer transition-all border-2 ${
                index === currentIndex ? "border-sky-500 shadow-lg" : "border-transparent hover:shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-slate-800 truncate text-sm">{testimonial.name}</h5>
                  <p className="text-xs text-slate-600 truncate">{testimonial.company}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-8">Trusted by leading companies and organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["ABC Construction", "Metro Builders", "Green Design Co", "Urban Development", "Eco Homes"].map(
              (company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold text-slate-500"
                >
                  {company}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
