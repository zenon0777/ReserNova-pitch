import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PostHogProvider } from './providers'

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
    <html lang="en">
      <body className="antialiased text-gray-900">
        <SpeedInsights />
        <div className="max-w-6xl lg:mx-auto p-2 md:p-6 lg:p-8">
          <PostHogProvider>

            {children}
          </PostHogProvider>
        </div>
      </body  >
    </html >
  );
}

