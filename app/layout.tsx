import type { Metadata } from "next";
import "./globals.css";
import Footer from "./ui/footer";
import Header from "./ui/header";

export const metadata: Metadata = {
  title: "TS4NFDI Service Portal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="grid min-h-screen">
          <Header />
          <main className="site-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
