"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Audit",
      price: "Custom",
      description: "Perfect for understanding your current state",
      features: ["Full tech stack review", "Cost analysis", "Recommendations report", "2-week turnaround"],
    },
    {
      name: "Growth",
      price: "Custom",
      description: "For scaling businesses",
      features: [
        "Quarterly strategy sessions",
        "Implementation support",
        "Performance monitoring",
        "Dedicated contact",
      ],
      highlighted: true,
    },
    {
      name: "Managed",
      price: "Custom",
      description: "Complete tech partnership",
      features: ["24/7 support", "Proactive optimization", "Infrastructure management", "Strategic planning"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Flexible packages tailored to your needs</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-8 border transition-all ${
                plan.highlighted
                  ? "bg-card border-blue-500/50 scale-105"
                  : "bg-card border-border hover:border-primary/30"
              }`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <Button
                className={`w-full mb-6 ${
                  plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}>
                <Link href="https://wa.me/8801718723202" className="hover:text-foreground transition">Request Pricing</Link>
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-blue-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
