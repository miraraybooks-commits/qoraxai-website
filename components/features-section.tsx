"use client"

import { motion } from "framer-motion"

export function FeaturesSection() {
  const features = [
    {
      title: "Intelligent Automation",
      description: "Automate repetitive tasks and workflows with AI-powered intelligence",
      icon: "⚡",
    },
    {
      title: "Real-time Analytics",
      description: "Get actionable insights with advanced data analysis and reporting",
      icon: "📊",
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and platforms effortlessly",
      icon: "🔗",
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with encryption and compliance standards",
      icon: "🔒",
    },
    {
      title: "Scalable Infrastructure",
      description: "Grow without limits with our cloud-based architecture",
      icon: "📈",
    },
    {
      title: "24/7 Support",
      description: "Expert support team available round the clock",
      icon: "💬",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Powerful Features for Modern Teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to leverage AI for business transformation
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
