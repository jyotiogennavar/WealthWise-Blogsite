import React from "react";
import type { Metadata } from "next";
import { Lato, Montserrat } from "@next/font/google";
import clsx from "clsx";

import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

// import BlogCardGrid from "./components/BlogCardGrid";


const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Finance Blog",
  description: "A blog about finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(lato.variable, montserrat.variable)}>
      <body>
        <Header />

        <main>{children}
          {/* <BlogCardGrid /> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
