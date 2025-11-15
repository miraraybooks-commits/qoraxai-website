"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo_white-250x250.png"
            alt="QoraxAI Logo"
            width={150}
            height={50}
            priority
            className="h-auto w-auto max-h-10 sm:max-h-12 md:max-h-14"/>
            <span className="font-bold text-xl text-white hidden sm:inline">QoraxAI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="#services" className="text-sm text-gray-400 hover:text-white transition">
            Services
          </Link>
          <Link href="#process" className="text-sm text-gray-400 hover:text-white transition">
            How It Works
          </Link>
          <Link href="#case-studies" className="text-sm text-gray-400 hover:text-white transition">
            Case Studies
          </Link>
          <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition">
            FAQ
          </Link>
        </nav>

        <a 
          href="https://wa.me/8801718723202" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white transition-colors"
          style={{ backgroundColor: '#25D366' }} >
          {/* WhatsApp Icon SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.068-1.39l-.364-.216-3.775.99.999-3.648-.237-.377a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          +8801718723202
        </a>
      </div>
    </header>
  )
}
