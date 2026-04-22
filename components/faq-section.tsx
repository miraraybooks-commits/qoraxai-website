"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "We're not sure how to grow - where do we even start?",
      answer:
        "That's the biggest challenge most business owners face. We start by understanding your market, who your customers really are, and what opportunities you're missing. Then we map out a clear plan - where to focus, which channels work best, and how to scale without breaking the bank. We've helped companies find 30-40% more revenue just by adjusting their strategy.",
    },
    {
      question: "Our social media gets lots of followers but no real customers - what's wrong?",
      answer:
        "Followers don't pay bills - customers do. The problem is usually that your leads aren't being captured or followed up on properly. We connect your Facebook, Instagram, and WhatsApp directly to a CRM system so every inquiry is tracked and responded to automatically. No more lost leads disappearing into your messages.",
    },
    {
      question: "We're drowning in spreadsheets. Will a new system make things worse?",
      answer:
        "Actually, ERPNext is the opposite of disruptive. We set it up carefully, migrate your data without losing anything, and train your team step-by-step. Most clients tell us the transition is smooth - suddenly everything talks to each other, accounting knows what inventory ordered, and you actually have time to work on growing the business instead of managing spreadsheets.",
    },
    {
      question: "Our courier business is growing but we can't keep up with logistics",
      answer:
        "Growing too fast without the right tools kills profitability. We implement a courier management system that automates bookings, tracks parcels in real-time, handles COD payments automatically, and optimizes delivery routes. Your customers get tracking updates, your operations get 20% faster, and you finally have peace of mind.",
    },
    {
      question: "Everyone talks about AI - how does that help us online?",
      answer:
        "AI is changing how people search - through ChatGPT, voice commands, and Google's new AI features. If your content isn't optimized for these, you're invisible. We make sure your website shows up when customers ask AI assistants about your services, ranks for voice searches, and appears correctly on Google Maps and local listings. It's the future of search.",
    },
    {
      question: "Our database is slow but we don't want to buy expensive new servers",",
      answer:
        "Nine times out of ten, it's not your servers - it's how your database is organized. We analyze your queries, add the right indexes, clean up inefficiencies, and sometimes you see 2-3x speed improvement. Same hardware, same servers, way better performance. Plus your hosting costs go down because you're using less resources.",
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
