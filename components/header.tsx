"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design_sem_nome-removebg-preview-2oaVrbc4dQ2ayHHm5IUr4dD4732MUc.png"
            alt="SNGTEC Logo"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-wider text-foreground">
            SNGTEC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="glass-card px-6 py-2.5 rounded-full text-sm font-semibold text-primary hover:text-foreground transition-all duration-300 hover:glow-blue"
          >
            Fale Conosco
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="glass-card px-6 py-3 rounded-full text-sm font-semibold text-primary text-center mt-2"
              >
                Fale Conosco
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
