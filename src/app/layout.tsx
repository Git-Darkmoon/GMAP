import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GMAP Sign-in",
  description: "Generated by create next app",
  icons: {
    icon: "/GMAP_Favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-800`}>
        <NextTopLoader color="#f48c2a" />
        {children}
      </body>
    </html>
  )
}
