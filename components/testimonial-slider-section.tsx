"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    certificateImage: "/qoraxai-achievement-certificate-with-blue-theme.jpg",
    quote: "QoraxAI delivered exceptional cloud infrastructure optimization, reducing our costs by 35% while improving system performance. Highly professional!",
    clientName: "Rahman Abdullah",
    service: "Cloud Infrastructure & Cost Optimization",
    clientPhoto: "/professional-businessman.png",
  },
  {
    id: 2,
    certificateImage: "/business-achievement-certificate.jpg",
    quote: "QoraxAI helped us eliminate redundant systems and cut our tech spending significantly while improving performance.",
    clientName: "Sarah Johnson",
    service: "Tech Audit & Cost Optimization",
    clientPhoto: "/professional-business-woman.png",
  },
  {
    id: 3,
    certificateImage: "/database-optimization-award.jpg",
    quote: "Their database optimization work transformed our operations. What used to take hours now takes minutes.",
    clientName: "Michael Chen",
    service: "Database Optimization & Performance",
    clientPhoto: "/tech-executive-asian-man.jpg",
  },
  {
    id: 4,
    certificateImage: "/cloud-migration-success-certificate.jpg",
    quote: "Professional, efficient, and results-driven. QoraxAI exceeded our expectations in every way.",
    clientName: "Emily Rodriguez",
    service: "Cloud Migration & Infrastructure",
    clientPhoto: "/female-cto-professional.jpg",
  },
]

export function TestimonialSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Working Proof
          </h2>
          <p className="text-blue-200 text-lg">
            Real results from real clients
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-blue-950/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-700/30"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Certificate Image */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm transform -rotate-12 shadow-lg">
                    8 Lakh+ TK sell
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={currentTestimonial.certificateImage || "/placeholder.svg"}
                      alt="Achievement Certificate"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Right: Testimonial Content */}
                <div className="space-y-6">
                  <div className="text-white text-xl md:text-2xl leading-relaxed">
                    {currentTestimonial.quote}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-blue-700/30">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400">
                      <Image
                        src={currentTestimonial.clientPhoto || "/placeholder.svg"}
                        alt={currentTestimonial.clientName}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">
                        {currentTestimonial.clientName}
                      </div>
                      <div className="text-blue-200 text-sm">
                        {currentTestimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-400 w-8"
                    : "bg-blue-700 hover:bg-blue-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
