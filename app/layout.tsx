import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollArea className="h-screen">{children}</ScrollArea>
      </body>
    </html>
  );
}
