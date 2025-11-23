"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Database, Shield, PieChart, DollarSign, Headphones } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Website Performance Check",
      description: "Optimize speed, SEO, and user experience",
      slug: "website-performance",
    },
    {
      icon: Database,
      title: "Database Health & Performance",
      description: "Ensure data integrity and query optimization",
      slug: "database-health",
    },
    {
      icon: Shield,
      title: "Cybersecurity Assessment",
      description: "Identify vulnerabilities and strengthen defenses",
      slug: "cybersecurity",
    },
    {
      icon: PieChart,
      title: "Power BI / MIS Dashboarding",
      description: "Transform data into actionable insights",
      slug: "dashboarding",
    },
    {
      icon: DollarSign,
      title: "Boost Sales / Cost-Optimization",
      description: "Cut unnecessary expenses and boost margins",
      slug: "cost-optimization",
    },
    {
      icon: Headphones,
      title: "Managed IT Services",
      description: "24/7 support and proactive system management",
      slug: "managed-it",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Core Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
                variants={itemVariants}
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
