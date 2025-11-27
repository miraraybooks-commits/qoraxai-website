"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/qoraxai-logo-nobackground-20-no-20name.png"
                alt="QoraxAI Logo"
                width={50}
                height={50}
                className="h-12 w-12"
              />
              <span className="font-bold text-2xl">
                <span className="text-foreground">Qorax</span>
                <span className="text-[#00A7E1]">AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-pretty">
              Revenue-focused technology partner helping Bangladeshi businesses grow through strategic digital
              transformation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-primary transition">
                  Sales Growth
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition">
                  Cost Reduction
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition">
                  Website Performance
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition">
                  Managed IT Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#case-studies" className="hover:text-primary transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-primary transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Zone Tower, Senpara, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <Link href="mailto:sales@qoraxai.com" className="hover:text-primary transition">
                  sales@qoraxai.com
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <Link href="https://wa.me/8801718723202" className="hover:text-primary transition">
                  +880 1718 723202
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <span>🌐</span>
                <Link href="https://qoraxai.com" className="hover:text-primary transition">
                  qoraxai.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 QoraxAI. All rights reserved. Built to drive your revenue growth.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/QoraxAI/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="http://linkedin.com/company/qoraxai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/qoraxai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
