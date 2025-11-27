"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = [
    "growth is the only result we measure.",
    "outcomes define our success.",
    "revenue goals drive everything we do.",
    "business momentum is our mission.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3500) // Change text every 3.5 seconds

    return () => clearInterval(interval)
  }, [])

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
      className="relative flex flex-col justify-center items-center text-center min-h-[85vh] sm:min-h-[90vh] px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        <Image
          src="/banner.webp"
          alt="QoraxAI - Results-Driven Digital Growth Partner"
          fill
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          className="space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
              variants={itemVariants}
            >
              We don't promise. We prove.
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Results-Driven Digital Growth Partner
            </motion.p>
          </motion.div>

          {/* Value Props */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Grow Sales. Reduce Waste. Automate Operations. Secure Growth.
          </motion.p>

          <motion.div className="min-h-[80px] sm:min-h-[60px] flex items-center justify-center" variants={itemVariants}>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
              <span className="text-white font-medium">Because your </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, width: 0, display: "inline-block" }}
                  animate={{
                    opacity: 1,
                    width: "auto",
                    transition: {
                      width: { duration: 0.8, ease: "easeInOut" },
                      opacity: { duration: 0.3, delay: 0.2 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                    transition: {
                      width: { duration: 0.5, ease: "easeInOut" },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  className="inline-block overflow-hidden whitespace-nowrap text-blue-400 font-medium"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 pt-4" variants={itemVariants}>
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-6 rounded-full hover:bg-blue-700 transition-all text-base sm:text-lg font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                Get Free Tech Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-400 text-white px-8 py-6 rounded-full hover:bg-white/10 transition-all text-base sm:text-lg font-semibold backdrop-blur-sm hover:scale-105 bg-transparent"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="border border-gray-700 rounded-lg p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">40%+</div>
              <div className="text-sm sm:text-base text-gray-300">Average Cost Reduction</div>
            </div>
            <div className="border border-gray-700 rounded-lg p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-300">Tech Solutions Delivered</div>
            </div>
            <div className="border border-gray-700 rounded-lg p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm sm:text-base text-gray-300">System Uptime</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
