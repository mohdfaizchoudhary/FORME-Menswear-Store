import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/components/StoreProvider";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "FORME | Menswear, made for everyday",
  description: "Discover considered menswear essentials, modern fits and everyday style at FORME.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
