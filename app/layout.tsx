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
        <div className="grid min-h-screen" id="app-layout">
          <Header />
          <main className="site-content" key={"site-content"}>
            {children}
          </main>
          <Footer />
        </div>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
