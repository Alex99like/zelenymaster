import { Metadata } from 'next'
import './styles/globals.scss'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { Navbar } from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Зеленный Мастер',
  description: 'Мы предлагаем вам растения, качество которых полностью соответствует требованиям семенной и карантинной государственных инспекций.',
  icons: {
    icon: '/main-icon.svg',
    shortcut: '/main-icon.svg',
    apple: '/main-icon.svg',
  },
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
