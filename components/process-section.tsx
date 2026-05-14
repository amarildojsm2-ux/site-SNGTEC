"use client"

import { motion } from "framer-motion"
import { Search, Zap, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Estratégia",
    description: "Analisamos seu negócio, identificamos oportunidades e definimos a melhor estratégia tecnológica.",
    number: "01",
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Desenvolvemos e implementamos as soluções de automação e IA personalizadas para suas necessidades.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Realizamos a implantação completa com treinamento da equipe e suporte durante todo o processo.",
    number: "03",
  },
  {
    icon: LineChart,
    title: "Otimização",
    description: "Monitoramos resultados, coletamos feedbacks e otimizamos continuamente as soluções.",
    number: "04",
  },
]

export function ProcessSection() {
  return (
    <section id="processo" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block glass-card px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-6">
            Nosso Processo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Como
            <span className="text-primary"> Trabalhamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Um processo estruturado e transparente que garante resultados 
            excepcionais em cada projeto que desenvolvemos.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="glass-card rounded-2xl p-8 text-center h-full transition-all duration-500 hover:border-primary/50 group-hover:shadow-[0_0_40px_oklch(0.65_0.2_230/0.15)]">
                  {/* Number */}
                  <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300 relative z-10">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Dot */}
                <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
