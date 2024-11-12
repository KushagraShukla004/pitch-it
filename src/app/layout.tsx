import type { Metadata } from "next";
import "./globals.css";
import "easymde/dist/easymde.min.css";

export const metadata: Metadata = {
  title: "Pitch-It !",
  description: "Got an Idea? Pitch It! | Created by Kushagra Shukla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
