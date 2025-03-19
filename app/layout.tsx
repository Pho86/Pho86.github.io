import type { Metadata } from "next";
import { Rethink_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import { redirect } from 'next/navigation';

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Philip Ho | Portfolio",
  description:
    "Full-stack developer portfolio for Philip Ho, creating interactive and intuitive adventures digitally",
  keywords: [
    "Development",
    "Software Developer",
    "Full-Stack Developer",
    "Web and Mobile",
    "Challenges",
    "Passionate",
    "Interactive",
    "Adventures",
    "Next.js",
    "React",
    "Front-End",
    "Full-Stack",
  ],
  creator: "Philip Ho",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon_w.ico",
      rel: "icon",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/favicon_d.ico",
      rel: "icon",
    },
  ],
  openGraph: {
    title: "Philip Ho Portfolio | Home",
    description:
      "Full-stack developer portfolio for Philip Ho, creating interactive and intuitive adventures digitally.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 128,
        height: 128,
        alt: "Philip Ho Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  redirect("http://philipho.co");
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${rethinkSans.className} ${pacifico.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
