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
      description: "Execute the plan smoothly and efficiently with minimal disruption to your operations.",
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
      transition: {
        staggerChildren: 0.2,
      },
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
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our proven 4-step process delivers results</p>
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
              <div className="p-8 bg-background border border-border rounded-lg">
                {/* Large blue number */}
                <div className="text-5xl font-bold text-primary mb-6">{step.number}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting line between cards */}
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
