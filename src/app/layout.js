import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Logo from './components/Logo/Logo'
import Article from './components/Article/Article'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Team 1 - Webbpublicering',
  description: 'Group assignment Webbpublicering, Frontend developer, Changemaker Educations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <Logo />
          <Navbar />
          <Article />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
        </body>
    </html>
  )
}