import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sucrose Admin",
  description: "A management website for Sucrose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
