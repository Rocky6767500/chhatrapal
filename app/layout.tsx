import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Elara Voss - Surrealist Artist",
  description: "Portfolio of surrealist artist Elara Voss. Exploring the boundaries between reality and imagination through AI-enhanced digital art.",
  keywords: ["surrealist", "digital art", "AI art", "Elara Voss", "generative art", "Web3"],
  authors: [{ name: "Elara Voss" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192x192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1A2E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
