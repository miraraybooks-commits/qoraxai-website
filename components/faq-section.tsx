"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Business Growth Consulting and how does it work?",
      answer:
        "Business Growth Consulting is a strategic service that combines market analysis, competitive research, and data-driven planning to unlock revenue growth. We use methods like market segmentation analysis, customer journey mapping, and growth opportunity identification to create a customized roadmap. Our approach helps businesses reach new customers, optimize operations, and scale sustainably with measurable results.",
    },
    {
      question: "How does Social Media CRM Integration improve customer relationships?",
      answer:
        "Social Media CRM Integration connects your social platforms with customer relationship management systems to automate lead capture and nurture customer interactions. We implement integration of Facebook, Instagram, and LinkedIn with CRM tools for real-time lead management. This ensures no customer inquiry is missed and enables personalized communication at scale.",
    },
    {
      question: "What does ERP Implementation involve for my business?",
      answer:
        "ERP Implementation uses ERPNext to streamline business processes across departments - from inventory and finance to human resources. Our implementation methodology includes system configuration, data migration, staff training, and go-live support. This consolidates all operations into one integrated platform, improving efficiency, reducing errors, and providing real-time business insights.",
    },
    {
      question: "How can Courier Management Software optimize delivery operations?",
      answer:
        "Courier Management Software automates booking, parcel tracking, COD settlement, and delivery dispatch using intelligent routing algorithms. The system provides real-time tracking for customers, automated branch management, and streamlined payment reconciliation. This reduces operational costs, improves delivery times, and enhances customer satisfaction with transparency.",
    },
    {
      question: "What is AI SEO, GEO & AEO Optimization and why is it important?",
      answer:
        "AI SEO, GEO & AEO Optimization ensures your content ranks well across ChatGPT, Google Search, Gemini, and voice assistants like Alexa and Siri. Our methods include schema markup implementation, natural language optimization, local business listings management, and voice-search keyword targeting. This future-proofs your visibility across AI-powered search platforms and emerging search technologies.",
    },
    {
      question: "How does Database Optimization improve performance and reduce costs?",
      answer:
        "Database Optimization involves analyzing and tuning SQL Server and MySQL databases for speed and efficiency. We use query optimization, index creation, storage analysis, and performance monitoring to eliminate bottlenecks. The result is faster data retrieval, reduced server load, lower hosting costs, and improved user experience.",
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
