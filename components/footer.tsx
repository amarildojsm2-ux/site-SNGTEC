"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { SNGTECLogo } from "./sngtec-logo"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const quickLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <SNGTECLogo className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-2xl font-bold tracking-wider text-foreground">
                SNGTEC
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Solução em tecnologia para seu negócio. Transformamos empresas 
              com automação, inteligência artificial e sistemas personalizados.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(24) 98138-4545</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>contato@sngtec.ia.br</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Brasil</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} SNGTEC. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Desenvolvido por <span className="text-primary font-medium">Junior Sangi</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
