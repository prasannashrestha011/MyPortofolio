
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      className=" ocean-body"
      >
       
       {children}
      
      </body>
    </html>
  );
}
