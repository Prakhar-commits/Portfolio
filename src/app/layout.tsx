import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/*
 * Self-hosted, SIL Open Font License, from Collletttivo, an open-source type
 * foundry, not a webfont CDN. Deliberately none of Inter / Geist /
 * Space Grotesk / Instrument Serif, which now read as the default AI-site
 * palette. Licenses live alongside the files in src/fonts.
 *
 * Total type payload is ~134KB across six woff2 files.
 */

/* Sprat: a high-contrast editorial serif. Light for the big sizes, where the
   thin strokes have room to actually be thin. */
const display = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "../fonts/Sprat-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Sprat-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Sprat-Medium.woff2", weight: "500", style: "normal" },
  ],
});

/* Apfel Grotezk: a warm grotesk with enough irregularity to feel drawn. */
const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../fonts/ApfelGrotezk-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ApfelGrotezk-Mittel.woff2", weight: "500", style: "normal" },
  ],
});

/* Necto Mono carries every label, index and number on the page. */
const mono = localFont({
  variable: "--font-mono",
  display: "swap",
  src: [{ path: "../fonts/NectoMono-Regular.woff2", weight: "400", style: "normal" }],
});

export const metadata: Metadata = {
  title: "Prakhar Bansal, SDE-2",
  description:
    "SDE-2 at Growthz. Decision engines, ad-platform integrations, AI pipelines, and the AWS and GCP infrastructure underneath them.",
  openGraph: {
    title: "Prakhar Bansal, SDE-2",
    description:
      "SDE-2 at Growthz. Decision engines, ad-platform integrations, AI pipelines, and the AWS and GCP infrastructure underneath them.",
    type: "website",
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
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
