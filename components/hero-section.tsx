"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] -translate-x-1/3 -translate-y-1/4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ye108Nyiv8RRpBJAedhGBAiq1HQC8B.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40 animate-float"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/4 translate-y-1/4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-KwFPUPJ5cGnF5METwlBApAPXvwAlP7.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30 animate-float-delayed"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-5 opacity-10"
        style={{
          backgroundImage: `linear-gradient(oklch(0.65 0.2 230 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.2 230 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow z-5" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-glow z-5" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block glass-card px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-primary uppercase">
              Solução em Tecnologia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-balance"
          >
            <span className="text-foreground">Automação, </span>
            <span className="text-primary glow-text">Inteligência Artificial</span>
            <span className="text-foreground"> e Tecnologia para </span>
            <span className="text-foreground">Empresas Modernas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transformamos negócios com soluções digitais inteligentes. 
            Da automação de processos à criação de sistemas personalizados, 
            elevamos sua empresa ao próximo nível tecnológico.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#servicos"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_oklch(0.65_0.2_230/0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Conhecer Soluções
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="https://wa.me/5524981384545"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "100+", label: "Projetos Entregues" },
              { value: "50+", label: "Clientes Ativos" },
              { value: "99%", label: "Satisfação" },
              { value: "24/7", label: "Suporte" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
