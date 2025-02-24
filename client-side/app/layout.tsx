import "./globals.css";

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
      <body className=" custom-dark-blue  ">{children}</body>
    </html>
  );
}
