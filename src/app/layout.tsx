import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import type { Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Also supported by less commonly used
  interactiveWidget: "resizes-visual",
};
export const metadata: Metadata = {
  title: "Hill Hacks",
  description:
    "Hill Hacks is a global competition that invites participants to address critical issues faced by countries worldwide through technology and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name="robots" content="all" />
        <link
          rel="apple-touch-icon"
          href="/favicon_io/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon_io/favicon-32x32.png"
        />
        <link rel="sitemap" href="/sitemap.xml" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
