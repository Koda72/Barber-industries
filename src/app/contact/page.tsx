'use client'

import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'
import Image from 'next/image'

const contactInfo = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '06 20 54 09 45',
    href: 'tel:0620540945',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'barber.industries82@gmail.com',
    href: 'mailto:barber.industries82@gmail.com',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun - Sam: 9h - 19h',
    href: null,
  },
]

const hours = [
  { day: 'Lundi', hours: '9h00 - 19h00' },
  { day: 'Mardi', hours: '9h00 - 19h00' },
  { day: 'Mercredi', hours: '9h00 - 19h00' },
  { day: 'Jeudi', hours: '9h00 - 19h00' },
  { day: 'Vendredi', hours: '9h00 - 19h00' },
  { day: 'Samedi', hours: '9h00 - 19h00' },
  { day: 'Dimanche', hours: 'Fermé' },
]

export default function ContactPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-rose/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent-rose text-sm font-semibold tracking-wider uppercase mb-4">
              Contact
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Parlons de <span className="text-gradient">Votre Style</span>
            </h1>
            <p className="text-white/60 text-lg">
              Une question ? Une demande particulière ? N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-dark border-y border-white/5">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {contactInfo.map((info) => (
              info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 text-white/80 hover:text-accent-rose transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent-rose" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 uppercase tracking-wider">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                </a>
              ) : (
                <div key={info.label} className="flex items-center gap-3 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-accent-rose" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 uppercase tracking-wider">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Direct */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">
                  Contact direct
                </h2>
                <p className="text-white/60 mb-6">
                  Pour toute question ou prise de rendez-vous, contacte-nous par téléphone, email
                  ou via les réseaux sociaux.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:0620540945"
                    className="flex items-center gap-3 text-white/80 hover:text-accent-rose transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-rose" />
                    </div>
                    <div>
                      <span className="block text-xs text-white/50 uppercase tracking-wider">Téléphone</span>
                      <span className="font-medium">06 20 54 09 45</span>
                    </div>
                  </a>
                  <a
                    href="mailto:barber.industries82@gmail.com"
                    className="flex items-center gap-3 text-white/80 hover:text-accent-rose transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent-rose" />
                    </div>
                    <div>
                      <span className="block text-xs text-white/50 uppercase tracking-wider">Email</span>
                      <span className="font-medium">barber.industries82@gmail.com</span>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/barber_industries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-accent-rose transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-accent-rose" />
                    </div>
                    <div>
                      <span className="block text-xs text-white/50 uppercase tracking-wider">Instagram</span>
                      <span className="font-medium">@barber_industries</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card-premium p-6">
                <h3 className="text-white font-display text-xl font-semibold mb-3">
                  Infos pratiques
                </h3>
                <p className="text-white/60 text-sm">
                  Barber Industries — Barbershop premium, spécialisé coupe homme & barbe, au cœur
                  de Montauban.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Raphael Card */}
              <div className="card-premium p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src="/raph.jpeg"
                      alt="Raphael"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-display text-xl font-semibold">Raphael</h3>
                    <p className="text-accent-rose">Fondateur & Barbier</p>
                  </div>
                </div>
                <p className="text-white/60 mb-6">
                  Passionné par mon métier depuis plus de 5 ans, je suis à votre écoute pour 
                  toute question ou demande particulière. N'hésitez pas à me contacter directement !
                </p>
                <div className="flex gap-3">
                  <a
                    href="tel:0620540945"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-blue to-accent-rose 
                             text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler
                  </a>
                  <a
                    href="mailto:barber.industries82@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 
                             text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="card-premium p-8">
                <h3 className="text-white font-display text-xl font-semibold mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent-rose" />
                  Horaires d'ouverture
                </h3>
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between py-2 border-b border-white/5 last:border-0
                        ${item.hours === 'Fermé' ? 'text-white/40' : 'text-white'}`}
                    >
                      <span>{item.day}</span>
                      <span className={item.hours === 'Fermé' ? '' : 'text-accent-rose font-medium'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="card-premium p-8">
                <h3 className="text-white font-display text-xl font-semibold mb-6">
                  Suivez-nous
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/barber_industries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500
                             text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram @barber_industries
                  </a>
                  <a
                    href="https://www.tiktok.com/@barber_industries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5
                             text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <span className="text-lg">TikTok</span>
                    <span className="text-sm text-white/70">@barber_industries</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-accent-rose">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Réservez en ligne en quelques clics et venez découvrir l'expérience Barber Industries.
          </p>
          <a
  href="https://www.fresha.com/fr/a/barber-industries-montauban-18-allee-mortarieu-wzqejdum/booking?menu=true&share=true&pId=2847783&dppub=true&employeeId=5205917&cartId=982dde4d-4ed2-4133-97de-4ebe351e85a5"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark font-semibold rounded-full 
           hover:bg-white/90 transition-all hover:scale-105"
>
  Réserver maintenant
</a>
        </div>
      </section>
    </>
  )
}
