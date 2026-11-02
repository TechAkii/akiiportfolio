import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKILA | Digital Frontier",
  description:
    "The personal portfolio of Akila Thikshana — software developer, applied sciences undergraduate, and creative technologist.",
  applicationName: "AKILA | Digital Frontier",
  openGraph: {
    title: "AKILA | Digital Frontier",
    description: "Building immersive digital experiences at the intersection of software, AI, and creative technology.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070c"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
