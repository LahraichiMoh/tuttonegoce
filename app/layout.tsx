import "./globals.css";

export const metadata = {
  title: "Tutto Negoce",
  description: "Marchand en Gros Pneumatiques",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
