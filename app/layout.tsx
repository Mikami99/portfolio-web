import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mikami — Portfolio",
  description: "Portfolio développeur — Mikami, étudiant en informatique",
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
