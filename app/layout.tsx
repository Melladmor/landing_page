import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import { buttonsNavBar, navBarData } from "./components/NavBar/navBarData";
import Footer from "./components/Fotter/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT-Technology",
  description: "IT-Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar links={navBarData} buttons={buttonsNavBar} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
