{/*"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      metric: "40%",
      label: "Cost Reduction",
      quote:
        "QoraxAI helped us eliminate redundant systems and cut our tech spending significantly while improving performance.",
    },
    {
      metric: "3x",
      label: "Faster Processing",
      quote: "Their database optimization work transformed our operations. What used to take hours now takes minutes.",
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
      quote:
        "QoraxAI built a custom Parcel Pick & Drop system that automated operations and unlocked over 10 lakh BDT in new monthly revenue while cutting manual work by 60%.",
    },
    {
      metric: "30%",
      label: "Sales Growth",
      quote:
        "By implementing Power BI dashboards and optimizing their SQL database, QoraxAI helped the client achieve 30% sales growth and 3x faster reporting — turning data into decisions.",
    },
  ]

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Case Studies & Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600">{study.metric}</p>
                  <p className="text-gray-600 text-sm">{study.label}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">{study.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
