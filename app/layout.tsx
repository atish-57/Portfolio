import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";
import {Analytics} from '@vercel/analytics/next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atish's Portfolio",
  description: "Atish's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/exp2.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}