"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center min-h-[50vh] sm:min-h-[80vh] px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.webp"
          alt="AI‑powered IT services platform for small and medium businesses in Bangladesh"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="space-y-10 text-center mb-0 pb-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-2 sm:space-y-3 md:space-y-4 text-center mb-0 pb-0" variants={itemVariants}>
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              variants={itemVariants}>
              We don't promise. We prove.
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Grow Sales. Reduce Waste. Automate Operations. Secure Growth. <br />
              
              Results-Driven Digital Growth Partner
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-nowrap justify-center gap-2 mt-6 flex-col sm:flex-row sm:gap-3"
            variants={itemVariants}
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-blue-600 text-white px-3 sm:px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Get Free Tech Audit
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border border-gray-400 text-gray-200 px-3 sm:px-5 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
