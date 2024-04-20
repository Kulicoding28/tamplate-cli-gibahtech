import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/ui/ThemeProvider";
import Navbar from "@/src/components/ui/Navbar";
import TanstackProvider from "@/src/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GibahtechApp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto max-w-5xl text-2xl gap-2 mb-10">
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
