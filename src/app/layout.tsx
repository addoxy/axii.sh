import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { cn } from "@/utils/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Addoxy - Web Developer, Designer & Notion Expert",
  description:
    "I build beautiful, interactive and accessible websites with a focus on seamless user experiences. I can also help you leverage the power of Notion to boost your productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          fontSans.variable,
          process.env.NODE_ENV === "development" && "debug-screens",
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
