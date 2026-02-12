import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "💕 Will You Be My Valentine? 💕",
  description: "A very special question just for you!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
