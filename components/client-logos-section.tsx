"use client"

import Image from "next/image"

export function ClientLogosSection() {
  const logos = [
    "/client-logos/hooversagro.png",
    "/client-logos/laenterprise.png",
    "/client-logos/holyday.png",
    "/client-logos/logo-dark.png",
    "/client-logos/Logo-Home.png",
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-10 text-gray-800">
          Trusted by Our Clients
        </h2>
        <p className="text-muted-foreground mb-6 md:mb-10 text-gray-600 text-sm md:text-base">
          We're proud to have partnered with innovative brands worldwide.
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-8 md:space-x-12">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 relative">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Client logo ${(i % logos.length) + 1}`}
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 128px, 160px"
                  quality={75}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
