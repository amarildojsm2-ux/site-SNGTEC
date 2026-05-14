"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
        </div>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-5 opacity-5"
        style={{
          backgroundImage: `linear-gradient(oklch(0.65 0.2 230 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.2 230 / 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 border border-primary/20 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-accent/20 rounded-full" />

            <span className="inline-block glass px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-8">
              Vamos Conversar
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Pronto para
              <span className="text-primary"> Transformar</span>
              <br />Seu Negócio?
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções em automação, 
              inteligência artificial e tecnologia podem impulsionar sua empresa para o próximo nível.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://wa.me/5524981384545"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-green-600 text-white rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_oklch(0.6_0.2_140/0.5)] flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="mailto:contato@sngtec.ia.br"
                className="glass-card px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-foreground hover:text-primary transition-all duration-300"
              >
                Enviar E-mail
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-10 border-t border-border/50">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">Telefone:</span>
                  <span>(24) 98138-4545</span>
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-muted-foreground" />
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">Website:</span>
                  <span>sngtec.ia.br</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
