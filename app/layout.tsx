import type { Metadata } from 'next'
import './globals.css'
import Head from './components/Head/page'
import Nav from './components/Nav/page'
import Footer from './components/Footer/page'
import BottomBar from './components/BottomBar/page'
export const metadata: Metadata = {
  title: 'Ento LLC',
  description: 'Ento in your area',
}

export default function RootLayout({  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Head />
      <Nav />
        {children}
        <Footer />
      <BottomBar />
        </body>
      </html>
  )
}
