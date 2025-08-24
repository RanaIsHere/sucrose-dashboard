import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  display: 'swap',
  variable: '--font-roboto',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Sucrose Admin",
  description: "A management website for Sucrose, a cafe franchise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.variable}`}>
        {children}
      </body>
    </html>
  );
}
