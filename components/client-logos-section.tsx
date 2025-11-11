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
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-center text-4xl font-bold text-foreground mb-10 text-gray-800">
          Trusted by Our Clients
        </h2>
        <p className="text-muted-foreground mb-10">
          We’re proud to have partnered with innovative brands worldwide.
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-20 relative">
                <Image
                  src={logo}
                  alt={`Client logo ${i + 1}`}
                  fill
                  className="object-contain"
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
        }
      `}</style>
    </section>
  )
}
