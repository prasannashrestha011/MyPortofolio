
import { Provider } from "@/Providers";
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
 
      >
       <Provider>
       {children}
       </Provider>
      </body>
    </html>
  );
}
