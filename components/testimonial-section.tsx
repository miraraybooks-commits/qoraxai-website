"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    achievement: "40% Cost Saved",
    certificateImage: "/qoraxai-cert-1.jpg",
    quote:
      "QoraxAI optimized our entire e-commerce infrastructure. Server costs dropped by 40% while handling 3x more traffic. Outstanding work!",
    clientName: "Md. Kamal Hossain",
    company: "Dhaka Fashion Ltd.",
    service: "Cloud Infrastructure Optimization",
    clientPhoto: "/client-kamal-hossain.jpg",
  },
  {
    id: 2,
    achievement: "40% Sales Growth",
    certificateImage: "/qoraxai-cert-2.jpg",
    quote:
      "Their digital marketing strategies and advanced tools transformed our sales. What used to take weeks to generate leads now converts into actual sales in days. Highly professional and results-driven team!",
    clientName: "Farhana Rahman",
    company: "Bengal Tech Solutions ltd.",
    service: "Digital Marketing & Sales Growth",
    clientPhoto: "/client-farhana-rahman.jpg",
  },
  {
    id: 3,
    achievement: "25 Lakh+ Saved",
    certificateImage: "/qoraxai-cert-3.jpg",
    quote:
      "QoraxAI conducted a comprehensive tech audit and eliminated unnecessary costs. We're saving 25 Lakh+ annually now!",
    clientName: "Rahim Uddin Ahmed",
    company: "Hoovers Agrovet Limited",
    service: "Tech Audit & Cost Analysis",
    clientPhoto: "/client-rahim-ahmed.jpg",
  },
  {
    id: 4,
    achievement: "99.9% Uptime",
    certificateImage: "/qoraxai-cert-4.jpg",
    quote:
      "After their cloud migration service, we've achieved 99.9% uptime. Zero downtime during peak seasons. Exceptional results!",
    clientName: "Nusrat Jahan",
    company: "JS Digital Services",
    service: "Cloud Migration & Infrastructure",
    clientPhoto: "/client-nusrat-jahan.jpg",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection
      if (nextIndex < 0) return testimonials.length - 1
      if (nextIndex >= testimonials.length) return 0
      return nextIndex
    })
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground text-lg">Real results from real clients in Bangladesh</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0a2540] rounded-2xl p-8 md:p-12 shadow-2xl border border-blue-900/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1)
                    }
                  }}
                  className="grid md:grid-cols-[300px_1fr] gap-8 items-center"
                >
                  {/* Certificate with Achievement Badge */}
                  <div className="relative">
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={currentTestimonial.certificateImage || "/placeholder.svg"}
                        alt={`${currentTestimonial.company} appreciation certificate for QoraxAI services`}
                        width={300}
                        height={400}
                        quality={80}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Achievement Badge */}
                    <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg rotate-[-12deg] font-bold">
                      {currentTestimonial.achievement}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="space-y-6">
                    <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                      "{currentTestimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg">
                        <Image
                          src={currentTestimonial.clientPhoto || "/placeholder.svg"}
                          alt={`${currentTestimonial.clientName} from ${currentTestimonial.company}`}
                          fill
                          quality={80}
                          className="object-cover"
                          loading="lazy"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{currentTestimonial.clientName}</h4>
                        <p className="text-blue-400 font-medium">{currentTestimonial.service}</p>
                        <p className="text-gray-400 text-sm">{currentTestimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                {/* Navigation Arrows */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      paginate(-1)
                    }}
                    className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-lg"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      paginate(1)
                    }}
                    className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-lg"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        goToSlide(index)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-500 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
