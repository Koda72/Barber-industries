'use client'

import Link from 'next/link'
import { ArrowRight, Scissors, Star } from 'lucide-react'
import { useEffect, useState } from 'react'


export default function Hero() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Fullscreen */}
      <div className="absolute inset-0">
        <video
          src="/animation-logo-barber-industries.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark & color overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container-custom px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.4fr,1fr] items-center gap-12">
          {/* Text Side */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8
                         transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Star className="w-4 h-4 text-accent-rose" fill="currentColor" />
              <span className="text-sm text-white/80">Barbershop Premium</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6
                         transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="text-white">L'Art du</span>
              <br />
              <span className="text-gradient">Style Masculin</span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-lg sm:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed
                         transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Découvrez l'excellence du grooming chez Barber Industries. 
              Coupes précises, soins barbe experts, et une expérience unique 
              qui redéfinit le style masculin.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12
                         transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Link
  href="https://www.fresha.com/book-now/barber-industries-hesy9oxq/services?lid=2945837&share=true&pId=2847783"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary group"
>
  <span>Réserver maintenant</span>
  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
</Link>
              <Link href="/services" className="btn-secondary">
                <Scissors className="w-5 h-5 mr-2" />
                <span>Nos Services</span>
              </Link>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0
                         transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">5+</div>
                <div className="text-sm text-white/50">Années d'expérience</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-3xl sm:text-4xl font-display font-bold text-accent-rose mb-1">2K+</div>
                <div className="text-sm text-white/50">Clients satisfaits</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">4.9</div>
                <div className="text-sm text-white/50">Note moyenne</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent-rose rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      
    </section>
  )
}
