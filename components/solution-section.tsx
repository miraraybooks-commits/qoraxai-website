"use client"

import { motion } from "framer-motion"
import { Users, Zap, Lock } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: Users,
      title: "Fractional CTO",
      description: "Expert guidance without the full-time cost",
    },
    {
      icon: Zap,
      title: "Tech Efficiency",
      description: "Streamlined systems that actually work",
    },
    {
      icon: Lock,
      title: "Automation",
      description: "Smart workflows that save time and money",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="solution"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[300px] sm:min-h-[500px] md:min-h-[600px]"
    >
      {/* 🔹 Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-contain sm:bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/our-solution.png')" }}>
          <span className="sr-only">
            Illustration showing QoraxAI's IT solutions and services for business optimization
          </span>
        </div>

      {/* 🔹 Optional darker overlay (can adjust opacity or remove if not needed) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 🔹 Content Layer */}
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine fractional CTO expertise with proven tech efficiency
            strategies to transform your business
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl text-center relative z-10"
                variants={itemVariants}
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
