"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import { IsographProvider } from "@/lib/isograph";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [visible, setVisible] = useState(false);

  // useEffect(() => setVisible(true), []);

  // if (!visible) {
  //   return null;
  // }

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <IsographProvider>{children}</IsographProvider>
      </body>
    </html>
  );
}
