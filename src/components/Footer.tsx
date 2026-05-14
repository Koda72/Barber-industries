import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Phone, Mail, Clock } from 'lucide-react'

const footerLinks = {
  navigation: [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/boutique', label: 'Boutique' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services#coupe', label: 'Coupe Homme' },
    { href: '/services#barbe', label: 'Taille de Barbe' },
    { href: '/services#forfaits', label: 'Forfaits' },
    {
      href: 'https://www.fresha.com/book-now/barber-industries-hesy9oxq/services?lid=2945837&share=true&pId=2847783',
      label: 'Réservation',
    },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-dark-light border-t border-white/5">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent pointer-events-none" />
      
      {/* Main Footer */}
      <div className="relative container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/barber.png"
                  alt="Barber Industries"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block text-xl font-display font-bold tracking-wide text-white">
                  BARBER
                </span>
                <span className="block text-xs tracking-[0.3em] text-accent-rose font-medium">
                  INDUSTRIES
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              L'excellence du grooming masculin. Des coupes précises, un style unique, 
              une expérience premium.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/barber_industries"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 
                         text-white/60 hover:bg-accent-rose hover:text-white transition-all duration-300"
                aria-label="Instagram Barber Industries"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-rose transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-rose transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0620540945"
                  className="flex items-center gap-3 text-white/60 hover:text-accent-rose transition-colors duration-300 text-sm"
                >
                  <Phone size={18} className="text-accent-rose" />
                  06 20 54 09 45
                </a>
              </li>
              <li>
                <a
                  href="mailto:barber.industries82@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-accent-rose transition-colors duration-300 text-sm"
                >
                  <Mail size={18} className="text-accent-rose" />
                  barber.industries82@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock size={18} className="text-accent-rose flex-shrink-0 mt-0.5" />
                <div>
                  <p>Lun - Sam: 9h00 - 19h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Barber Industries. Tous droits réservés.
            </p>
            <p className="text-white/40 text-sm">
              Créé par <span className="text-accent-rose">Raphael</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
