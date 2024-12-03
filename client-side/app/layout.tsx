

import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      className=" custom-dark-blue cursor-none "
      >
          
       {children}
      
      </body>
    </html>
  );
}
