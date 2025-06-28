import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hardware Ecommerce - Premium Construction Materials & Tools",
  description:
    "Shop premium hardware, construction materials, and tools for contractors and DIY. Fast delivery, expert advice, and trusted brands. Karnataka's #1 building supply store.",
  keywords: "hardware, construction, tools, materials, contractors, DIY, building supply, Karnataka, premium, ecommerce, store, fast delivery, expert advice, trusted brands",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
