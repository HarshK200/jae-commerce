import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jae-Commerce",
  description: "just another e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
