"use client"

import { motion } from "framer-motion"
import { AlertCircle, TrendingUp, Zap } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Slow Systems",
      description: "Legacy infrastructure and poorly integrated tools drag down productivity. Every second wasted on loading screens, manual data entry, or broken workflows adds up to lost hours — and lost revenue. Your team spends more time fighting systems than serving customers, slowing your entire business momentum.",
    },
    {
      icon: TrendingUp,
      title: "High Tech Costs",
      description: "Many companies overspend on disconnected software, redundant subscriptions, and underused services. Instead of driving growth, their tech stack drains budgets without delivering measurable ROI. You end up paying more for less — with no clear visibility into what’s actually working.",
    },
    {
      icon: Zap,
      title: "Manual Chaos",
      description: "Repetitive tasks and paper-based or spreadsheet-driven processes lead to delays, errors, and burnout. Manual approvals, data re-entry, and inconsistent reporting not only waste time but also increase the risk of mistakes that can cost customers or compliance issues. Your people want to innovate — but they’re trapped maintaining systems that should already be automated.",
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
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">The Problem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most businesses are quietly losing money to outdated systems and inefficient workflows — not because they lack talent, but because their technology hasn’t kept up with their growth.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                className="p-8 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                variants={itemVariants}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
