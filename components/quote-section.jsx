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

import React from 'react';

export default function QuoteSection() {
  return (
    <section aria-labelledby="qoraxai-quote" className="bg-gradient-to-r from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <svg className="mx-auto mb-4 h-8 w-8 text-gray-300" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17v3.16A4.17 4.17 0 0 0 7.17 17.5H9.5v-6H7.17zM17.17 6A4.17 4.17 0 0 0 13 10.17v3.16A4.17 4.17 0 0 0 17.17 17.5H19.5v-6H17.17z" fill="currentColor" />
          </svg>

          <blockquote className="relative text-gray-800 text-lg sm:text-xl leading-relaxed italic">
            <p id="qoraxai-quote" className="px-4 sm:px-6 lg:px-8">
              “In 2024 alone, QoraxAI helped 15+ companies reduce IT spending by an average of 32% — without changing their teams or tools.”
            </p>
          </blockquote>

          <footer className="mt-6">
            <div className="text-sm text-gray-500">QoraxAI Impact Report</div>
          </footer>
        </div>
      </div>

      {/* Decorative underline */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded mt-2" aria-hidden />
      </div>
    </section>
  );
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
