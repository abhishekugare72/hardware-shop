"use client"

import { motion } from "framer-motion"
import { Award, Users, MapPin, Clock, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sky-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Abhishek Ugare - Founder"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Abhishek Ugare</h3>
              <div className="text-sky-600 font-semibold mb-4">Founder & CEO</div>
              <blockquote className="text-base md:text-lg font-semibold text-sky-700 leading-snug mb-4 whitespace-pre-line">
                {`Our mission: deliver the best materials for every project,
provide honest, expert advice you can trust,
and deliver exceptional service that exceeds expectations.

We believe in building lasting relationships, supporting your vision from start to finish, and making your construction journey smooth, affordable, and successful.`}
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
