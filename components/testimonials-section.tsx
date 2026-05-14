"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechStart",
    content: "A SNGTEC transformou completamente nossa operação. A automação de WhatsApp aumentou nossas conversões em 150% no primeiro mês.",
    rating: 5,
  },
  {
    name: "Marina Santos",
    role: "Diretora de Marketing, Inova Digital",
    content: "O dashboard que desenvolveram nos deu uma visão completa do negócio. Agora tomamos decisões muito mais assertivas e rápidas.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Fundador, E-commerce Plus",
    content: "Profissionalismo excepcional. O chatbot com IA reduziu nosso tempo de resposta de horas para segundos, com qualidade impecável.",
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block glass-card px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-6">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            O Que Nossos Clientes
            <span className="text-primary"> Dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre trabalhar conosco.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/50 group-hover:shadow-[0_0_40px_oklch(0.65_0.2_230/0.15)] relative">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
