import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'





const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DietFuelApp',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header /> */}
     
      
      <body className={inter.className}>{children}</body>
    
      {/* <Footer /> */}
    </html>
  )
}
