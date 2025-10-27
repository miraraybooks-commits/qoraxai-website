"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent pt-32 pb-24 text-center"
    >
      {/* Background Banner */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/banner.jpg"   // ✅ Use correct file name & extension
          alt="QoraxAI Technology Background"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold leading-tight text-primary mb-4"
        >
          We don’t promise. We prove.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Cut tech costs 20–40%. Automate slow systems. Secure your data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Get Your Free Tech Audit
          </Link>
        </motion.div>
      </div>

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
