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
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ==== Background Gradient ==== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1f] via-[#0c1533] to-[#0a0f1f]" />

      {/* ==== Curved Overlay (top + bottom arcs) ==== */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#11224a]/70 to-transparent rounded-b-[50%]" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#11224a]/70 to-transparent rounded-t-[50%]" />

      {/* ==== Subtle Tech Lines Overlay ==== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1e2a4a_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      {/* ==== Content ==== */}
      <div className="relative max-w-7xl mx-auto text-center text-white z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
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
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting line */}
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
