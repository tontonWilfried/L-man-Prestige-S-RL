import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L-man Prestige S.RL",
  description: "Design System et Architecture moderne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
