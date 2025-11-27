"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Gauge, HeadphonesIcon, Database, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSectionNew() {
  const services = [
    {
      icon: TrendingUp,
      title: "Sales Growth & Revenue Acceleration",
      description:
        "Transform your digital presence into a revenue-generating machine. We optimize your entire sales funnel, from lead generation to conversion.",
      metrics: ["250% avg. revenue increase", "180% conversion boost", "3-6 month ROI"],
      color: "bg-secondary/10 text-secondary",
      borderColor: "border-secondary/20",
      link: "/services/sales-growth",
      featured: true,
    },
    {
      icon: DollarSign,
      title: "Cost Reduction & Optimization",
      description:
        "Cut unnecessary IT expenses without sacrificing performance. We identify waste and redirect resources to growth initiatives.",
      metrics: ["30-40% cost savings", "Zero downtime", "Instant impact"],
      color: "bg-primary/10 text-primary",
      borderColor: "border-primary/20",
      link: "/services/cost-reduction",
    },
    {
      icon: Gauge,
      title: "Website Performance Optimization",
      description:
        "Fast websites convert better. We make your site lightning-fast, boosting SEO rankings and customer satisfaction.",
      metrics: ["3x faster load times", "Higher Google ranking", "Better UX"],
      color: "bg-accent/10 text-accent",
      borderColor: "border-accent/20",
      link: "/services/website-performance",
    },
    {
      icon: HeadphonesIcon,
      title: "Managed IT Services",
      description:
        "Focus on sales while we handle your technology. Proactive support, strategic planning, and 24/7 monitoring.",
      metrics: ["24/7 monitoring", "Proactive support", "Strategic planning"],
      color: "bg-chart-4/10 text-chart-4",
      borderColor: "border-chart-4/20",
      link: "/services/managed-it",
    },
    {
      icon: Database,
      title: "Database Health & Performance",
      description:
        "Your data drives decisions. We ensure your databases are optimized, secure, and delivering insights that fuel growth.",
      metrics: ["99.9% uptime", "Real-time insights", "Optimized queries"],
      color: "bg-chart-5/10 text-chart-5",
      borderColor: "border-chart-5/20",
      link: "/services/database-optimization",
    },
    {
      icon: Shield,
      title: "Cybersecurity Assessment",
      description:
        "Protect your revenue streams from threats. Comprehensive security audits and implementation to safeguard your business.",
      metrics: ["Full compliance", "Zero breaches", "Peace of mind"],
      color: "bg-destructive/10 text-destructive",
      borderColor: "border-destructive/20",
      link: "/services/cybersecurity",
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
