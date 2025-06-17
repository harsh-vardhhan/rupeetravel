import '../styles/globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Rupee Travel',
  description: 'The ultimate checklist for Vietnam travel from India 🇻🇳',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
