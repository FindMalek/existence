import { instrumentSerif, instrumentSerifItalic, instrumentSans } from "../lib/fonts"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSerifItalic.variable} ${instrumentSans.variable}`}
    >
      <head>
        <title>Existence - All-in-One Business Launch Solution</title>
        <meta
          name="description"
          content="Existence: Your partner for comprehensive business solutions, from branding to interior design and psychology-driven strategies."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-instrument-sans ${instrumentSans.variable} ${instrumentSans.className} ${instrumentSerif.variable} ${instrumentSerif.className} ${instrumentSerifItalic.variable} ${instrumentSerifItalic.className}`}>{children}</body>
    </html>
  )
}

