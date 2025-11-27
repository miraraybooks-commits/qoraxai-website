"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, BarChart3, Target } from "lucide-react"

export function RevenueStatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "250%",
      label: "Average Revenue Growth",
      description: "Our clients see significant revenue increases within 12 months",
      color: "text-secondary",
    },
    {
      icon: DollarSign,
      value: "৳15Cr+",
      label: "Revenue Generated",
      description: "Total additional revenue unlocked for our clients",
      color: "text-primary",
    },
    {
      icon: BarChart3,
      value: "180%",
      label: "Sales Conversion Boost",
      description: "Average improvement in online conversion rates",
      color: "text-accent",
    },
    {
      icon: Target,
      value: "92%",
      label: "Client Retention Rate",
      description: "Clients stay because we deliver measurable growth",
      color: "text-chart-4",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Revenue Growth is Our <span className="revenue-highlight">Only Metric</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We don't measure success by lines of code or uptime percentages. We measure it by the revenue we help you
            generate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${stat.color} mb-4`}>
                  <Icon className="w-12 h-12" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-3">{stat.label}</div>
                <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
