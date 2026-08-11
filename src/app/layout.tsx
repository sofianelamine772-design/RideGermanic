import type { Metadata } from "next";
import { Outfit, Inter, UnifrakturMaguntia, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const gothic = UnifrakturMaguntia({
  weight: '400',
  variable: "--font-gothic",
  subsets: ["latin"],
});

const brush = Permanent_Marker({
  weight: '400',
  variable: "--font-brush",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ride.Germanic - L'excellence à l'allemande",
  description: "Site vitrine de Ride.Germanic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable} ${gothic.variable} ${brush.variable}`}>
      <body className={outfit.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
