import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enscient — Building a Better Future. Restoring the Earth.",
  description:
    "Enscient builds advanced intelligence to restore the Earth and empower future civilizations. A community of builders creating technology that heals.",
  keywords: "Enscient, AI, sustainability, earth restoration, deep tech, future",
  openGraph: {
    title: "Enscient — Building a Better Future. Restoring the Earth.",
    description:
      "We build advanced intelligence to restore the Earth and empower future civilizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
