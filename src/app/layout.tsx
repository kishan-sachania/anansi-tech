import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anansi Tech - Enterprise Resource Planning Solutions",
  description:
    "Transform your business with our comprehensive ERP solutions designed for modern businesses. Streamline operations, boost productivity, and drive growth.",
  keywords: [
    "ERP",
    "Enterprise Resource Planning",
    "Business Solutions",
    "Digital Transformation",
  ],
  authors: [{ name: "Anansi Tech Team" }],
  icons: {
    icon: [
      { url: "/anansi/Anansi-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/anansi/Anansi-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/anansi/Anansi-logo.png",
    apple: "/anansi/Anansi-logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
