import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CheckoutProvider } from "@/app/context/CheckoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecoyaan Checkout",
  description: "Modern Checkout Flow built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen
          bg-linear-to-br from-gray-50 via-white to-gray-100
        `}
      >
        <CheckoutProvider>
          <div className="flex flex-col min-h-screen">
            <header className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 text-center sm:text-left">
                  <h1 className="text-lg sm:text-xl font-bold tracking-tight">
                    🌿 Ecoyaan Checkout
                  </h1>

                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Sustainable Shopping Experience
                  </p>
                </div>
              </div>
            </header>

            <main className="flex-1">
              <div className="max-w-4xl mx-auto px-6 py-10">{children}</div>
            </main>

            <footer className="border-t bg-white">
              <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ecoyaan. Built with Next.js &
                Tailwind.
              </div>
            </footer>
          </div>
        </CheckoutProvider>
      </body>
    </html>
  );
}
