import "../styles/globals.css";

export const metadata = {
  title: "Rupee Travel",
  description: "The ultimate checklist for Vietnam travel from India 🇻🇳",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
