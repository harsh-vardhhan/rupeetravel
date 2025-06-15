import { Providers } from './providers'; // We'll create this file

export const metadata = {
  title: 'Rupee Travel',
  description: 'The ultimate checklist for Vietnam travel from India 🇻🇳',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
