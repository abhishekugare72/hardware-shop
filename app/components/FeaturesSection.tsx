"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, Headphones, CreditCard, MapPin } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "100% authentic materials with warranty",
    gradient: "from-emerald-400 to-green-600",
    bgGradient: "from-emerald-50 to-green-50",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open 7 days a week for convenience",
    gradient: "from-blue-400 to-sky-600",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: Award,
    title: "Expert Advice",
    description: "Professional consultation available",
    gradient: "from-amber-400 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    icon: Headphones,
    title: "In-Store Support",
    description: "Knowledgeable staff assistance",
    gradient: "from-purple-400 to-indigo-600",
    bgGradient: "from-purple-50 to-violet-50",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options",
    gradient: "from-pink-400 to-red-600",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Easy access and parking",
    gradient: "from-slate-400 to-zinc-600",
    bgGradient: "from-slate-50 to-gray-50",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py--3 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4">
            Why Choose Company Name
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Premium quality. Exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/50 group`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">{feature.description.split(' ')[0] + (feature.description.includes(' ') ? '' : feature.description)}</p>

              {/* Progress Bar */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
