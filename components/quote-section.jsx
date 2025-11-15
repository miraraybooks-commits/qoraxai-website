// QuoteSection.jsx
// React + Tailwind component for the quote section.
// How to use:
// 1. Save this file as `components/QuoteSection.jsx` in your project.
// 2. Import and place <QuoteSection /> between your Hero and Problem sections, e.g. in `pages/Home.jsx`:
//      import Hero from '../components/Hero';
//      import QuoteSection from '../components/QuoteSection';
//      import Problem from '../components/Problem';
//
//      export default function Home() {
//        return (
//          <>
//            <Hero />
//            <QuoteSection />      // <-- insert here
//            <Problem />
//          </>
//        )
//      }
// 3. Optional: For Next.js dynamic import (lazy-loading), use:
//      const QuoteSection = dynamic(() => import('../components/QuoteSection'))
//
// 4. You can customize colors, padding, or typography via Tailwind classes below.
// 5. Accessibility: quote is wrapped in <blockquote> with role and a visually-hidden citation label.

"use client"

import { motion } from "framer-motion"

export function QuoteSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="quote" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Intro / heading (animated) */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-foreground">What our results look like</h3>
        </motion.div>

        {/* Quote card/container bg-background*/}
        <motion.div
          className="mx-auto max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.blockquote
            className="relative bg-gray-50 border border-gray-600 rounded-lg p-8 shadow-sm"
            variants={itemVariants}
            aria-labelledby="qoraxai-quote"
          >
            {/* decorative quote mark */}
            <svg
              className="absolute -top-3 left-6 h-8 w-8 text-primary/60"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17v3.16A4.17 4.17 0 0 0 7.17 17.5H9.5v-6H7.17zM17.17 6A4.17 4.17 0 0 0 13 10.17v3.16A4.17 4.17 0 0 0 17.17 17.5H19.5v-6H17.17z" fill="currentColor"/>
            </svg>

            <p id="qoraxai-quote" className="text-lg sm:text-xl leading-relaxed italic text-black px-2">
              “In 2024 alone, QoraxAI helped 15+ companies reduce IT spending by an average of 32% — without changing their teams or tools.”
            </p>

            <footer className="mt-6 pl-2">
              <div className="text-sm text-muted-foreground">QoraxAI Impact Report</div>
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}


/*
Styling notes & variations
- To make the quote stand out more, try: bg-indigo-50 for the section, add border-l-4 border-indigo-300 on the blockquote.
- To include a small author chip, replace the footer's text with a <cite> element.
- For animation, wrap the <blockquote> with a framer-motion <motion.blockquote> and use a small fade/slide in.

Performance / lazy-loading
- If you'd like to lazy-load this section (so it doesn't bloat the initial bundle), import it dynamically in Next.js:

  import dynamic from 'next/dynamic'
  const QuoteSection = dynamic(() => import('../components/QuoteSection'), { ssr: false })

- Or load it only when it enters the viewport using a small intersection-observer hook and then dynamically import.
*/
