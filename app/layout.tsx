import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mikami — Portfolio",
  description: "Portfolio développeur — Mikami (RAJAONAH Mickaël), étudiant en informatique",
  authors: [{ name: "RAJAONAH Mickaël" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-mono min-h-screen">{children}</body>
    </html>
  );
}
