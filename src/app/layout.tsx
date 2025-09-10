import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

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
      { url: "/Anansi-logo.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/Anansi-logo.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    shortcut: "/Anansi-logo.ico",
    apple: "/Anansi-logo.ico",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Anansi-logo.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/Anansi-logo.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/Anansi-logo.ico" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
