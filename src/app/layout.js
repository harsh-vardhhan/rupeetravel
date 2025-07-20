import '../styles/globals.css'
import { Rubik } from 'next/font/google'

// Add this import for the dark mode client logic
import DarkModeScript from '../component/DarkModeScript'

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
        {/* This script will set the .dark class on html if system is in dark mode */}
        <DarkModeScript />
        {children}
      </body>
    </html>
  );
}
