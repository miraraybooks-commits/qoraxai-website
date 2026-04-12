"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem("cookie-consent")
    if (!hasConsent) {
      // Show after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setIsVisible(false)
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 py-6 bg-card border-t border-border shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-foreground mb-2">
                <strong>We use cookies</strong> on our site to provide you with a better service. By continuing to use
                our site, you allow us to use cookies.{" "}
                <Link href="/cookie-policy" className="text-primary hover:underline">
                  Read our Cookie Policy
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                Dismiss
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary/90 transition"
              >
                Accept
              </button>
              <button
                onClick={handleDismiss}
                className="text-muted-foreground hover:text-foreground transition p-1"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
