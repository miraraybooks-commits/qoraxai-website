"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does a tech audit take?",
      answer:
        "Our comprehensive tech audits typically take 2-3 weeks, depending on the complexity of your systems. We provide a detailed report with actionable recommendations.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with businesses across all industries - from startups to enterprises. Our expertise spans SaaS, e-commerce, fintech, healthcare, and more.",
    },
    {
      question: "Will your solutions disrupt our current operations?",
      answer:
        "Absolutely. We integrate seamlessly with your existing team, providing guidance and support without disrupting your current operations.",
    },
    {
      question: "What kind of results can we expect?",
      answer:
        "Most clients see 20-40% cost reductions within the first year, plus significant improvements in performance and security. Results vary based on your current state.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. We offer flexible support packages ranging from quarterly check-ins to 24/7 managed services, depending on your needs.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply fill out our contact form to request a free tech audit. We'll schedule a call to understand your needs and provide initial recommendations.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about QoraxAI</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-background border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-primary text-xl"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-4 border-t border-border bg-muted/30"
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
