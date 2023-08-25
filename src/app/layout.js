import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Article from './components/Article/Article'


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
          <Article />
        </header>
        {children}
        <footer>
        </footer>
        </body>
    </html>
  )
}
