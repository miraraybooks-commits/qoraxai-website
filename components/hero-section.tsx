"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image" // ✅ Added correctly

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section
      id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-center h-[600px] pt-[90px]"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.jpg"
            alt="QoraxAI Banner"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight text-balance text-white drop-shadow-lg"
              variants={itemVariants}
            >
              We don't promise. We prove.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Cut tech costs 20–40%. Automate slow systems. Secure your data.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 flex items-center gap-2"
              >
                Get Free Tech Audit
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border border-gray-500 text-white hover:bg-gray-900/40 rounded-full px-8"
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
