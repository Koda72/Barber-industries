'use client'

import Link from 'next/link'
import { Calendar, Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-blue-dark to-accent-rose-dark" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/50 via-transparent to-accent-rose/50 animate-gradient" />
      
      {/* Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <Calendar className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à Révéler <br />
            Votre Meilleur Style ?
          </h2>

          {/* Description */}
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Réservez votre rendez-vous en quelques clics et laissez nos experts 
            s'occuper du reste. L'excellence vous attend.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
  href="https://www.fresha.com/fr/a/barber-industries-montauban-18-allee-mortarieu-wzqejdum/booking?menu=true&share=true&pId=2847783&dppub=true&employeeId=5205917&cartId=982dde4d-4ed2-4133-97de-4ebe351e85a5"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark font-semibold rounded-full
           transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]
           hover:scale-105"
>
  <Calendar className="w-5 h-5" />
  <span>Réserver maintenant TEST</span>
  <ArrowRight className="w-5 h-5" />
</Link>
            <a
              href="tel:0620540945"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold 
                       rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white"
            >
              <Phone className="w-5 h-5" />
              <span>06 20 54 09 45</span>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="flex -space-x-2">
              {['L', 'T', 'A', 'M'].map((letter, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-rose to-primary-blue flex items-center justify-center text-white text-sm font-semibold border-2 border-white/20"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span className="text-white/80 text-sm">
              +2000 clients satisfaits
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
