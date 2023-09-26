import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: 'SAET - Semana Acadêmica da Engenharia e Tecnologia',
  description: 'A Semana Acadêmica da Engenharia e Tecnologia é um evento anual organizado por alunos da Universidade Tecnologica Federal do Paraná em Toledo - PR, com o objetivo de promover a integração entre os alunos e a comunidade acadêmica, além de trazer temas atuais e relevantes para discussão.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='y-mandatory scroll-smooth'>
      <body className={`${montserrat.className} bg-gray-900 min-w-full min-h-screen overflow-x-hidden scroll-smooth snap-mandatory y-mandatory`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
