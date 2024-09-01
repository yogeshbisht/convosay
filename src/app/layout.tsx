import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConvoSay",
  description: "Application for creating and sharing conversations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
