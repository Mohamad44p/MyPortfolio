import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Mohamad Abu Omar - Web Developer Portfolio",
  description: "Explore the portfolio of Mohamad Abu Omar, a passionate web developer with expertise in front-end and back-end technologies.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#282C33] fira-code" lang="en" >
      <body className="fira-code">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
