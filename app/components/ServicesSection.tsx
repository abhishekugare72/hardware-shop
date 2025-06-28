"use client"

import { motion } from "framer-motion"
import { Wrench, Truck, Calculator, Users, Clock, MapPin } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Machines Rental",
    description: "Rent professional-grade machines for your projects",
    features: ["Daily & Weekly Rates", "Delivery Available", "Expert Training"],
    image: "/images/construction-tools-rental.webp",
  },
  {
    icon: Truck,
    title: "Bulk Delivery",
    description: "Large quantity delivery for construction sites",
    features: ["Crane Service", "Scheduled Delivery", "Site Coordination"],
    image: "/images/bulk-delivery.webp",
  },
  {
    icon: Calculator,
    title: "Project Estimation",
    description: "Professional project planning and cost estimation",
    features: ["Free Consultation", "Detailed Quotes", "Material Lists"],
    image: "/images/project-estimation.jpeg",
  },
  {
    icon: Users,
    title: "Expert Installation",
    description: "Professional installation services by certified technicians",
    features: ["Licensed Professionals", "Warranty Included", "Quality Guarantee"],
    image: "/images/expert-installation.avif",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Other Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive services for your construction and renovation projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
                {/* Image */}
                <div className="relative h-64 w-full flex items-center justify-center overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={service.image}
                    alt={service.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Icon Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description.split(' ')[0] + (service.description.includes(' ') ? '.' : service.description)}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full" />
                        <span className="text-slate-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
