import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Financial Analysis of JPMorgan Chase & Co. | DAB401 Final Project',
  description: 'A comprehensive financial analysis and valuation of JPMorgan Chase & Co. including CAPM, WACC, DCF valuation, Monte Carlo simulation, and Prophet forecasting.',
  keywords: ['JPMorgan Chase', 'Financial Analysis', 'CAPM', 'WACC', 'DCF', 'Monte Carlo', 'Stock Valuation'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
