import type { Metadata } from 'next'
import { Cedarville_Cursive, Edu_TAS_Beginner, Handlee, Inter, Lobster, Satisfy } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const satisfy = Satisfy({
  variable: "--satisfy-font",
  subsets: ["latin"],
  weight: [ "400"],
    fallback: ["Poppins"],
})

const edutasbeginner = Edu_TAS_Beginner({
 variable: "--edutasbeginner-font",
  subsets: ["latin"],
  weight: [ "400"],
    fallback: ["Poppins"],
})

const lobster =Lobster({
  variable: "--lobster-font",
   subsets: ['cyrillic'],
   weight: [ "400"],
     fallback: ["Poppins"],
 })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${edutasbeginner.variable} ${lobster.variable} ${satisfy.variable}`}>{children}</body>
    </html>
  )
}
