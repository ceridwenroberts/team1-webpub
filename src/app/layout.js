import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from "../app/components/Navbar"
import Footer from "../app/components/Footer"


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Qipper',
  description: 'Digital Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
        </body>
    </html>
  )
}
