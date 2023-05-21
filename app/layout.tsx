import { Metadata } from 'next'
import './styles/globals.scss'
import { Nunito } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import Head from 'next/head'
const font = Nunito({ subsets: ['latin'] })

// const font = Poppins({ weight: [
//   '100', '200', '300', '400', '500', '600', '700', '800', '900'
// ], subsets: ['latin'] })

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
      <Head>
        <link rel={'manifest'} href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <meta name='theme-color' content='#fff' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
      </Head>
      
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
