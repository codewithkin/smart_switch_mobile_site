import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from "@/components/shared/Navbar";
 
const satoshi = localFont({ src: './Satoshi-Variable.woff2' })

export const metadata: Metadata = {
  title: "Smart Switch Mobile | Buy Smartphones in Mutare, Zimbabwe",
  description:
    "Discover the best deals on smartphones at Smart Switch Mobile – Mutare's trusted mobile phone store. Shop top brands like Samsung, iPhone, Huawei and more, with fast delivery and secure checkout.",
  keywords: [
    "Smart Switch Mobile",
    "Mutare smartphones",
    "buy phones Zimbabwe",
    "iPhone Mutare",
    "Samsung Zimbabwe",
    "mobile phone deals",
    "cheap phones Mutare",
    "smartphones for sale",
    "Mutare electronics shop",
    "mobile store Zimbabwe",
  ],
  openGraph: {
    title: "Smart Switch Mobile | Best Mobile Phone Deals in Mutare",
    description:
      "Shop the latest smartphones from Smart Switch Mobile – iPhones, Samsungs, and more, all at great prices. Trusted by customers across Mutare, Zimbabwe.",
    url: "https://smartswitchmobile.co.zw", 
    siteName: "Smart Switch Mobile",
    locale: "en_ZW",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Smartphones at Smart Switch Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Switch Mobile | Buy Smartphones in Mutare",
    description:
      "Affordable smartphones in Mutare, Zimbabwe. Shop online with Smart Switch Mobile – trusted local mobile phone store.",
    images: ["/og-image.jpg"],
  },
  authors: [{ name: "Smart Switch Mobile" }],
  creator: "Smart Switch Mobile",
  publisher: "Smart Switch Mobile",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
