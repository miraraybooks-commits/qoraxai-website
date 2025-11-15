"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    achievement: "40% Cost Saved",
    certificateImage: "/qoraxai-cert-1.jpg",
    quote: "QoraxAI optimized our entire e-commerce infrastructure. Server costs dropped by 40% while handling 3x more traffic. Outstanding work!",
    clientName: "Md. Kamal Hossain",
    company: "Dhaka Fashion Ltd.",
    service: "Cloud Infrastructure Optimization",
    clientPhoto: "/client-kamal-hossain.jpg",
  },
  {
    id: 2,
    achievement: "3x Faster System",
    certificateImage: "/qoraxai-cert-2.jpg",
    quote: "Their database restructuring transformed our operations. What took 2 hours now completes in 20 minutes. Highly professional team!",
    clientName: "Farhana Rahman",
    company: "Bengal Tech Solutions",
    service: "Database Optimization & Performance",
    clientPhoto: "/client-farhana-rahman.jpg",
  },
  {
    id: 3,
    achievement: "25 Lakh+ Saved",
    certificateImage: "/qoraxai-cert-3.jpg",
    quote: "QoraxAI conducted a comprehensive tech audit and eliminated unnecessary subscriptions. We're saving 25 Lakh+ annually now!",
    clientName: "Rahim Uddin Ahmed",
    company: "Chittagong Export House",
    service: "Tech Audit & Cost Analysis",
    clientPhoto: "/client-rahim-ahmed.jpg",
  },
  {
    id: 4,
    achievement: "99.9% Uptime",
    certificateImage: "/qoraxai-cert-4.jpg",
    quote: "After their cloud migration service, we've achieved 99.9% uptime. Zero downtime during peak seasons. Exceptional results!",
    clientName: "Nusrat Jahan",
    company: "Sylhet Digital Services",
    service: "Cloud Migration & Infrastructure",
    clientPhoto: "/client-nusrat-jahan.jpg",
  },
]

export function TestimonialSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

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
                  <div className="absolute -top-4 -left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm transform -rotate-12 shadow-lg z-10">
                    {currentTestimonial.achievement}
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={currentTestimonial.certificateImage || "/placeholder.svg?height=400&width=600"}
                      alt="Achievement Certificate"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Right: Testimonial Content */}
                <div className="space-y-6">
                  <div className="text-white text-xl md:text-2xl leading-relaxed italic">
                    "{currentTestimonial.quote}"
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-blue-700/30">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400">
                      <Image
                        src={currentTestimonial.clientPhoto || "/placeholder.svg?height=64&width=64"}
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
                      <div className="text-blue-300 text-sm font-medium">
                        {currentTestimonial.company}
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
