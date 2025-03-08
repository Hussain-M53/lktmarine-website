import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "LKT Marine - Marine Equipment & Services",
  description: "Leading provider of marine equipment and services worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
      <link rel="icon" href="/favicon.png" sizes="512x512" />
      </Head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
