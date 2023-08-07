import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className="bg-white">{children}</body>
    </html>
  )
}
