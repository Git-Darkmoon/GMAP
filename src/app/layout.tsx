import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import "./globals.css"
import { AppProvider } from "@/utils/context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GMAP Sign-in",
  description:
    "GMAP is the best way to have the latest updated referred to programming marathons and participate.",
  icons: {
    icon: "/GMAP_Favicon.png",
  },
  generator: "Next.js",
  applicationName: "GMAP",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TailwindCSS",
    "GMAP",
    "Programming",
    "Competitive Programming",
  ],
  authors: [
    {
      name: "Nicolas Mayorga",
      url: "https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/",
    },
  ],
  category: "education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${inter.className} bg-white text-slate-800`}>
          <NextTopLoader color="#f48c2a" />
          {children}
        </body>
      </html>
    </AppProvider>
  )
}
