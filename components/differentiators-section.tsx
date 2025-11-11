"use client"

import { motion } from "framer-motion"
import { Globe, Target, Handshake, Award } from "lucide-react"

export function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: Globe,
      title: "Local SME Focus",
      description: "We understand your market and community",
    },
    {
      icon: Target,
      title: "ROI-Driven",
      description: "Every decision backed by measurable results",
    },
    {
      icon: Handshake,
      title: "Hands-On",
      description: "Direct engagement with your team",
    },
    {
      icon: Award,
      title: "Global Standards",
      description: "Best practices from worldwide experience",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="differentiators" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            20+ years of IT leadership and proven expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center text-gray-800">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div key={index} className="flex gap-4" variants={itemVariants}>
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-primary/10 to-transparent border border-gray-600 rounded-lg p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground text-gray-800 mb-4">Meet Our Founder</h3>
            <p className="text-muted-foreground text-gray-800 mb-4">
              With 20+ years of IT leadership experience, our founder brings deep expertise in enterprise systems,
              digital transformation, and business optimization.
            </p>
            <p className="text-sm text-muted-foreground">
              Dedicated to helping SMEs leverage technology for sustainable growth and competitive advantage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
