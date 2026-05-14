import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SNGTEC | Automação, IA e Tecnologia para Empresas',
  description: 'Soluções inteligentes em automação, inteligência artificial e tecnologia para empresas modernas. Transforme seu negócio com a SNGTEC.',
  keywords: ['automação', 'inteligência artificial', 'IA', 'tecnologia', 'chatbot', 'WhatsApp', 'dashboards', 'sistemas'],
  authors: [{ name: 'SNGTEC' }],
  openGraph: {
    title: 'SNGTEC | Automação, IA e Tecnologia para Empresas',
    description: 'Soluções inteligentes em automação, inteligência artificial e tecnologia para empresas modernas.',
    url: 'https://sngtec.ia.br',
    siteName: 'SNGTEC',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
