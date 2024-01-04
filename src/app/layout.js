import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Jack Keene',
  description: 'Jack Keene - Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
