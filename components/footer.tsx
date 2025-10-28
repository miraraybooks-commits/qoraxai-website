"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo_white-250x250.png"
            alt="QoraxAI Logo"
            width={150}
            height={50}
            priority
            className="h-auto w-auto max-h-10 sm:max-h-12 md:max-h-14"/>
            <h3 className="font-bold mb-4">QoraxAI</h3>
          </Link>
            <p className="text-sm text-muted-foreground">Transform your business with cutting-edge AI solutions.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact & Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🎯 Zone Tower, Senpara, Dhaka, Bangladesh</li>
              <li>🌐 Website: <Link href="https://qoraxai.com" className="hover:text-foreground transition">qoraxai.com</Link></li>
              <li>✉ Email: <Link href="mailto:sales@qoraxai.com" className="hover:text-foreground transition">sales@qoraxai.com</Link></li>
              <li>💬 WhatsApp: <Link href="https://wa.me/8801718723202" className="hover:text-foreground transition">+880 1718 723202</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">© 2025 QoraxAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/QoraxAI/" className="text-muted-foreground hover:text-foreground transition">
              Facebook
            </Link>
            <Link href="http://linkedin.com/company/qoraxai" className="text-muted-foreground hover:text-foreground transition">
              LinkedIn
            </Link>
            <Link href="https://www.instagram.com/qoraxai" className="text-muted-foreground hover:text-foreground transition">
              Instagram
            </Link> 
          </div>
        </div>
      </div>
    </footer>
  )
}
