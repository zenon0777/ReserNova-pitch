import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ReserNova - Pitch Deck",
  description: "La Plateforme Universelle de Réservation au Maroc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased text-gray-900">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </body  >
    </html>
  );
}

