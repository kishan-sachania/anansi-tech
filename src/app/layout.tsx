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
      { url: "/anansi/Anansi-logo.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/anansi/Anansi-logo.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/anansi/Anansi-logo.png?v=2",
    apple: "/anansi/Anansi-logo.png?v=2",
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
        <link rel="icon" href="/anansi/Anansi-logo.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/anansi/Anansi-logo.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/anansi/Anansi-logo.png?v=2" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
