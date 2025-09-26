import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// --- METADATA UPDATED FOR ALOUACHE ABDELMOULA ---
export const metadata: Metadata = {
  title: "Alouache Abdelmoula — Cybersecurity Engineer",
  description: "Portfolio of Alouache Abdelmoula, a final-year Cybersecurity Engineering student specializing in offensive security, Active Directory penetration testing, and SIEM integration.",
  keywords: ["Cybersecurity", "Penetration Testing", "Red Teaming", "Active Directory Security", "SIEM", "Python", "Rust", "Portfolio", "Security Engineer"],
  authors: [{ name: "Alouache Abdelmoula" }],
  creator: "Alouache Abdelmoula",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alouache Abdelmoula Portfolio",
    title: "Alouache Abdelmoula — Cybersecurity Engineer",
    description: "Portfolio of Alouache Abdelmoula, a final-year Cybersecurity Engineering student specializing in offensive security.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alouache Abdelmoula - Cybersecurity Engineering Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alouache Abdelmoula — Cybersecurity Engineer",
    description: "Portfolio of Alouache Abdelmoula, a final-year Cybersecurity Engineering student specializing in offensive security.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CursorGlow />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}