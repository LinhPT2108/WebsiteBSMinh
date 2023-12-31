import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/app.header";
import AppFooter from "@/components/app.footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/app.css";
import "@/styles/home.css";
import "@/styles/about.css";
import "@/styles/contact.css";
import "@/styles/aside.css";
import "@/styles/news.css";
import "@/styles/socialmedia.css";
import "@/styles/specialty-counsel.css";
import "@/styles/searchBar.css";
import SocialmediaComponent from "@/components/socialmedia/socialmedia.lienhe";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
        <HeaderComponent />
        {children}
        <AppFooter />
        <SocialmediaComponent />
      </body>
    </html>
  );
}
