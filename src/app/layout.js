import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo'
import Footer from './components/Footer/Footer'



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
          <Logo />
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
