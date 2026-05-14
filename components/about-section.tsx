"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Equipe especializada em IA e automação",
  "Soluções personalizadas para cada negócio",
  "Suporte técnico dedicado e ágil",
  "Tecnologias modernas e escaláveis",
  "Metodologia ágil de desenvolvimento",
  "Foco em resultados e ROI",
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block glass-card px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-6">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Criamos Soluções
              <span className="text-primary"> Digitais Inteligentes</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A SNGTEC é uma empresa especializada em desenvolver soluções tecnológicas 
              que impulsionam negócios para o futuro. Combinamos expertise em inteligência 
              artificial, automação e desenvolvimento de software para criar sistemas que 
              realmente fazem diferença.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Nossa missão é democratizar o acesso à tecnologia de ponta, oferecendo 
              soluções premium com atendimento personalizado e suporte dedicado para 
              empresas de todos os tamanhos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glass Cards */}
              <div className="absolute inset-0 glass-card rounded-3xl rotate-6 opacity-50" />
              <div className="absolute inset-0 glass-card rounded-3xl -rotate-3 opacity-70" />
              <div className="relative glass-card rounded-3xl p-8 h-full flex flex-col items-center justify-center">
                <div className="w-32 h-32 mb-8 relative">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ye108Nyiv8RRpBJAedhGBAiq1HQC8B.jpg"
                    alt="SNGTEC Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">SNGTEC</h3>
                  <p className="text-primary text-sm tracking-wider uppercase">
                    Solução em Tecnologia
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-primary/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-accent/20 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
