{/*"use client"

import { motion } from "framer-motion"
import { Users, Zap, Lock } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: Users,
      title: "Fractional CTO",
      description: "Expert guidance without the full-time cost",
    },
    {
      icon: Zap,
      title: "Tech Efficiency",
      description: "Streamlined systems that actually work",
    },
    {
      icon: Lock,
      title: "Automation",
      description: "Smart workflows that save time and money",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="solution"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[300px] sm:min-h-[500px] md:min-h-[600px]"
    >

      <div
        className="absolute inset-0 bg-contain sm:bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/our-solution.png')" }}>
          <span className="sr-only">
            Illustration showing QoraxAI's IT solutions and services for business optimization
          </span>
        </div>


      <div className="absolute inset-0 bg-black/30"></div>


      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine fractional CTO expertise with proven tech efficiency
            strategies to transform your business
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl text-center relative z-10"
                variants={itemVariants}
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
*/}

"use client"

import { motion } from "framer-motion"
import { Users, Zap, Lock } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: Users,
      title: "Fractional CTO",
      description: "Expert guidance without the full-time cost",
    },
    {
      icon: Zap,
      title: "Tech Efficiency",
      description: "Streamlined systems that actually work",
    },
    {
      icon: Lock,
      title: "Automation",
      description: "Smart workflows that save time and money",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  }

  // Safe inline styles using only widely supported CSS
  const foregroundColor = "var(--foreground)"
  const textColorStyle = { color: foregroundColor }
  const mutedTextColorStyle = { color: "rgba(255, 255, 255, 0.75)" } // assumes light text on dark bg
  const plateStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
  }
  const iconBgStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  }
  const bgImageStyle = {
    backgroundImage: "url('/our-solution.png')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }

  return (
    <section
      id="solution"
      className="relative py-16 px-4 sm:py-20 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="solution-heading"
    >
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={bgImageStyle}
      />

      {/* Plate */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="rounded-3xl shadow-xl w-11/12 md:w-4/5 lg:w-3/4"
          style={{
            ...plateStyle,
            minHeight: 220,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="solution-heading"
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={textColorStyle}
          >
            Our Solution
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base" style={mutedTextColorStyle}>
            We combine fractional CTO expertise with proven tech efficiency strategies to transform your business.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center" style={iconBgStyle}>
                    <Icon className="w-6 h-6" style={textColorStyle} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={textColorStyle}>
                      {feature.title}
                    </h3>
                    <p className="text-sm" style={mutedTextColorStyle}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
