import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.offshoremolds.com"),
  title: "Offshore Molds | Plastic Injection Molds in 6 Weeks",
  description:
    "Offshore Molds builds U.S.-managed plastic injection molds with aggressive lead times, moldflow, sampling, CMM inspection, and final QC documentation.",
  openGraph: {
    title: "Offshore Molds | U.S.-Managed Offshore Tooling",
    description:
      "Plastic injection molds up to 3500T with design, moldflow, sampling, inspection, and project management across the U.S. and China.",
    type: "website",
    url: "https://www.offshoremolds.com",
    images: [
      {
        url: "/omi/eight-core-mold-composite.jpg",
        width: 1600,
        height: 900,
        alt: "Eight-core injection mold tooling by Offshore Molds",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
