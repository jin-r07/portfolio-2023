import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ContextProvider } from "@/context-api/page";

export const metadata: Metadata = {
  title: "John Hang Rai",
  description: "Code by John Hang Rai",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}