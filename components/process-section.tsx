"use client"

import { motion } from "framer-motion"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We analyze your current systems, identify bottlenecks, and uncover opportunities",
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Create a roadmap with clear milestones, timelines, and expected ROI",
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execute the plan with minimal disruption to your operations",
    },
    {
      number: "04",
      title: "Optimization & Support",
      description: "Monitor, refine, and provide ongoing support for sustained success",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="process"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent"
    >
      {/* === Decorative Glowing Circles === */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/40 via-blue-400/30 to-transparent blur-[180px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-500/40 via-pink-400/30 to-transparent blur-[180px]" />

      {/* === Content === */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our proven 4-step process delivers results
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              <div className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition">
                <div className="text-5xl font-bold text-primary mb-6">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
