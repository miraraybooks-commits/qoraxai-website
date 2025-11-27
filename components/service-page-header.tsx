import Image from "next/image"
import Link from "next/link"

export function ServicePageHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/qoraxai-logo-nobackground-20-no-20name.png"
              alt="QoraxAI Logo"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="flex items-baseline gap-0">
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Qorax</span>
              <span className="text-xl sm:text-2xl font-bold text-[#00A7E1]">AI</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/#services"
              className="text-sm sm:text-base text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="bg-primary text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
