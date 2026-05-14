"use client"

import { motion } from "framer-motion"
import { Bot, MessageSquare, Globe, LayoutDashboard, BrainCircuit, Settings } from "lucide-react"

const services = [
  {
    icon: BrainCircuit,
    title: "Automação com IA",
    description: "Automatize processos repetitivos com inteligência artificial avançada, reduzindo custos e aumentando a produtividade.",
  },
  {
    icon: MessageSquare,
    title: "Automação WhatsApp",
    description: "Atendimento automatizado 24/7 via WhatsApp com chatbots inteligentes e fluxos personalizados para seu negócio.",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Criação de sites modernos e landing pages de alta conversão com design premium e performance otimizada.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Painéis de controle personalizados para visualização de dados em tempo real e tomada de decisões estratégicas.",
  },
  {
    icon: Bot,
    title: "Chatbots com IA",
    description: "Assistentes virtuais inteligentes que aprendem e evoluem, proporcionando experiências conversacionais únicas.",
  },
  {
    icon: Settings,
    title: "Sistemas Empresariais",
    description: "Desenvolvimento de sistemas sob medida para otimizar operações e processos específicos do seu negócio.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block glass-card px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Soluções Digitais
            <span className="text-primary"> Inteligentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Desenvolvemos tecnologias que transformam a maneira como sua empresa opera, 
            conecta-se com clientes e cresce no mercado digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 group-hover:shadow-[0_0_40px_oklch(0.65_0.2_230/0.15)]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
