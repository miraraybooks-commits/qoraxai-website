"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Gauge, HeadphonesIcon, Database, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSectionNew() {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Growth Consulting",
      description:
        "Strategic planning and market expansion to unlock new revenue streams and sustainable growth opportunities for your business.",
      metrics: ["Market analysis", "Growth strategy", "Revenue growth"],
      color: "bg-secondary/10 text-secondary",
      borderColor: "border-secondary/20",
      link: "/services/business-growth-consulting",
      featured: true,
    },
    {
      icon: Database,
      title: "Social Media CRM Integration",
      description:
        "Connect your social platforms with CRM systems to automate lead collection, nurture customer relationships, and drive conversions.",
      metrics: ["Lead automation", "Customer management", "Engagement boost"],
      color: "bg-primary/10 text-primary",
      borderColor: "border-primary/20",
      link: "/services/social-media-crm-integration",
    },
    {
      icon: Gauge,
      title: "ERP Implementation",
      description:
        "Complete ERPNext setup and configuration to streamline operations, improve data visibility, and enhance business efficiency.",
      metrics: ["Process automation", "Real-time data", "Cost savings"],
      color: "bg-accent/10 text-accent",
      borderColor: "border-accent/20",
      link: "/services/erp-implementation",
    },
    {
      icon: HeadphonesIcon,
      title: "Courier Management Software",
      description:
        "Optimize logistics and delivery operations with intelligent routing, real-time tracking, and automated dispatch management.",
      metrics: ["Route optimization", "Real-time tracking", "Efficiency gain"],
      color: "bg-chart-4/10 text-chart-4",
      borderColor: "border-chart-4/20",
      link: "/services/courier-management-software",
    },
    {
      icon: Shield,
      title: "Cybersecurity Assessment",
      description:
        "Comprehensive vulnerability testing and security audits to identify risks and protect your business from cyber threats.",
      metrics: ["Vulnerability scan", "Risk assessment", "Compliance check"],
      color: "bg-destructive/10 text-destructive",
      borderColor: "border-destructive/20",
      link: "/services/cybersecurity-assessment",
    },
    {
      icon: DollarSign,
      title: "Database Optimization",
      description:
        "Optimize SQL Server and MySQL performance to ensure fast query execution, high availability, and reliable data management.",
      metrics: ["Query tuning", "99.9% uptime", "Performance boost"],
      color: "bg-chart-5/10 text-chart-5",
      borderColor: "border-chart-5/20",
      link: "/services/database-optimization",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Technology Services That <span className="revenue-highlight">Drive Revenue</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Six core services designed to accelerate your sales, reduce waste, and secure sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-card border-2 ${service.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  service.featured ? "lg:col-span-3 md:col-span-2" : ""
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Primary Focus
                  </div>
                )}

                <div className={`${service.color} rounded-xl p-4 inline-block mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-balance">{service.title}</h3>

                <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.metrics.map((metric, idx) => (
                    <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                      {metric}
                    </span>
                  ))}
                </div>

                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link href="#contact">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Growing Your Revenue Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
