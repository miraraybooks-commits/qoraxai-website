{/*"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      metric: "10L+",
      label: "New Monthly Revenue",
      quote:
        "Challenge: A leading logistics startup was losing time managing daily parcel operations.\n\nSolution: QoraxAI built a custom “Parcel Pick & Drop” system, fully automating booking, routing, and delivery tracking.\n\nResult: 🚀 Generated 10+ lakh BDT/month in new recurring revenue and cut manual workload by 60% — turning operations into opportunity.",
    },
    {
      metric: "3x",
      label: "Sales Growth",
      quote: "Challenge: A mid-sized retail brand struggled with slow reporting and scattered data.\n\nSolution: We implemented Power BI dashboards and optimized their SQL database, delivering real-time insights and faster access to critical data.\n\nResult: 📈 Achieved 30% sales growth and 3x faster processing — empowering leadership to make confident, data-driven decisions.",
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
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Case Studies & Results</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real results from real clients</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="p-8 bg-background border border-border rounded-lg"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">{study.metric}</p>
                  <p className="text-muted-foreground text-sm">{study.label}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">{study.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
*/}

"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      metric: "10L+",
      label: "New Monthly Revenue",
      quote: `Challenge: A leading logistics startup was losing time managing daily parcel operations.

Solution: QoraxAI built a custom Parcel Pick & Drop system, fully automating booking, routing, and delivery tracking.

Result: Generated 10+ lakh BDT per month in new recurring revenue and cut manual workload by 60% — turning operations into opportunity.`,
    },
    {
      metric: "30%",
      label: "Sales Growth",
      quote: `Challenge: A mid-sized retail brand struggled with slow reporting and scattered data.

Solution: We implemented Power BI dashboards and optimized their SQL database, delivering real-time insights and faster access to critical data.

Result: Achieved 30% sales growth and 3x faster processing — empowering leadership to make confident, data-driven decisions.`,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Case Studies & Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="p-8 bg-background border border-border rounded-lg"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">{study.metric}</p>
                  <p className="text-muted-foreground text-sm">{study.label}</p>
                </div>
              </div>

              {/* Render each line of quote as a separate paragraph */}
              {study.quote.split("\n").map((line, i) => (
                <p key={i} className="text-muted-foreground italic leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
