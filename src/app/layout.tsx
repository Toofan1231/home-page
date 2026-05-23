import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteName = "Kohzad Technology";
const siteDescription =
  "خدمات نرم‌افزار، سخت‌افزار، شبکه و راهکارهای دیجیتالی برای کسب‌وکارها و سازمان‌ها در افغانستان.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | ICT Services`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    "Kohzad Technology",
    "ICT Afghanistan",
    "خدمات تکنالوژی معلوماتی",
    "نرم‌افزار مدیریتی",
    "شبکه و سخت‌افزار"
  ],
  authors: [{ name: "Kohzad Technology" }],
  creator: "Kohzad Technology",
  publisher: "Kohzad Technology",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteName} | ICT Services`,
    description:
      "راهکارهای حرفه‌ای تکنالوژی معلوماتی، نرم‌افزارهای مدیریتی و خدمات تخنیکی.",
    url: "/",
    siteName,
    type: "website",
    locale: "fa_AF"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | ICT Services`,
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070b1a",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-AF" dir="rtl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
