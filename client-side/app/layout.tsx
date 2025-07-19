import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
const custom_font = JetBrains_Mono({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Prasanna shrestha</title>
        <link rel="icon" href="/icons/p.ico" />
      </head>
      <body className={`${custom_font.className}`}>{children}</body>
    </html>
  );
}
