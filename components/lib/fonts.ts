import { Playfair_Display } from 'next/font/google'

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
})
