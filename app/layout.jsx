import React from 'react';
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

    // Header and Footer will keep on all pages.We do not read repeat code.
    <React.Fragment>
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </React.Fragment>


  )
}
