import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@lekan/app/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Olalekan Abdulfatah',
  description: 'Welcome to my portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
        // marginTop:"64px"
      }} >
        {/* <Navbar/> */}
        {children}</body>
    </html>
  )
}
