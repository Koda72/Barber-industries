'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Calendar } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: 'https://barber-industries.odoo.com/shop', label: 'Boutique' },
  { href: '/contact', label: 'Contact' },
]
const FRESHA_BOOKING_URL =
  'https://www.fresha.com/book-now/barber-industries-hesy9oxq/services?lid=2945837&share=true&pId=2847783'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="/barber.png"
                alt="Barber Industries"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-xl font-display font-bold tracking-wide text-white">
                BARBER
              </span>
              <span className="block text-xs tracking-[0.3em] text-accent-rose font-medium">
                INDUSTRIES
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('http')

              return isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 line-animation"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 line-animation"
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0620540945"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-accent-rose transition-colors duration-300"
            >
              <Phone size={18} />
              <span>06 20 54 09 45</span>
            </a>

            <Link
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-blue to-accent-rose rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:scale-105"
            >
              <Calendar size={18} />
              Réserver
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-white"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        <div
          className={`lg:hidden fixed inset-0 top-0 bg-dark/98 backdrop-blur-xl transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => {
              const isExternal = link.href.startsWith('http')

              return isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-white hover:text-accent-rose transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-white hover:text-accent-rose transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="flex flex-col items-center gap-4 mt-8">
              <a
                href="tel:0620540945"
                className="flex items-center gap-2 text-white/80 hover:text-accent-rose transition-colors"
              >
                <Phone size={20} />
                <span>06 20 54 09 45</span>
              </a>

              <Link
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-blue to-accent-rose rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:scale-105"
              >
                <Calendar size={18} />
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}