"use client";
import { SessionProvider } from "next-auth/react";
import "./styles/globals.css";
import { Header } from "@/components/layout/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
